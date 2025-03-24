
import { University, Scholarship, AdmissionCriteria } from "@/types/university";
import { supabase, TABLES } from "@/lib/supabase";
import { toast } from "@/components/ui/use-toast";
import { sampleData } from "./sampleData";

/**
 * Vérifie si les tables existent dans Supabase
 * @returns Promise<boolean> indiquant si les tables existent
 */
export async function checkTablesExist(): Promise<boolean> {
  try {
    // Test si la table des universités existe en utilisant une méthode plus fiable
    const { data, error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('*', { count: 'exact', head: true })
      .limit(1);
    
    if (error && error.code === '42P01') {
      console.log('Les tables n\'existent pas encore, création nécessaire.');
      return false;
    }
    
    return !error;
  } catch (error) {
    console.error('Exception lors de la vérification des tables:', error);
    return false;
  }
}

/**
 * Exécute une requête SQL directe sur Supabase
 */
async function executeSQL(sql: string): Promise<boolean> {
  try {
    // Exécuter directement le SQL via l'API REST
    const { error } = await supabase.rpc('execute_sql', { sql_query: sql });
    
    if (error) {
      console.error('Erreur lors de l\'exécution SQL:', error);
      // Si la fonction RPC n'existe pas, on retourne simplement false
      // (la fonction sera créée plus tard ou alternative sera utilisée)
      return false;
    }
    return true;
  } catch (error) {
    console.error('Exception lors de l\'exécution SQL:', error);
    return false;
  }
}

/**
 * Crée les tables nécessaires dans Supabase
 */
export async function createTables(): Promise<boolean> {
  console.log('Création des tables Supabase...');
  
  try {
    // Création directe des tables en SQL sans utiliser RPC
    // Cela contourne le problème si la fonction RPC n'est pas disponible
    
    // Table pour universités
    const createUniversitiesResult = await supabase.rpc('execute_sql', {
      sql_query: `
        CREATE TABLE IF NOT EXISTS ${TABLES.UNIVERSITIES} (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          location TEXT NOT NULL,
          region TEXT NOT NULL,
          programs JSONB NOT NULL,
          "employmentRate" INTEGER NOT NULL,
          specializations JSONB NOT NULL,
          rating NUMERIC NOT NULL,
          image TEXT NOT NULL,
          international BOOLEAN
        );
      `
    });
    
    // Table pour bourses d'études
    const createScholarshipsResult = await supabase.rpc('execute_sql', {
      sql_query: `
        CREATE TABLE IF NOT EXISTS ${TABLES.SCHOLARSHIPS} (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          country TEXT NOT NULL,
          amount TEXT NOT NULL,
          requirements JSONB NOT NULL,
          deadline TEXT NOT NULL,
          link TEXT NOT NULL
        );
      `
    });
    
    // Table pour critères d'admission
    const createAdmissionResult = await supabase.rpc('execute_sql', {
      sql_query: `
        CREATE TABLE IF NOT EXISTS ${TABLES.ADMISSION_CRITERIA} (
          id TEXT PRIMARY KEY,
          university TEXT NOT NULL,
          department TEXT NOT NULL,
          program TEXT NOT NULL,
          section TEXT NOT NULL,
          "minimumScore" NUMERIC NOT NULL,
          "keySubjectsWeights" JSONB NOT NULL,
          "acceptanceRate" INTEGER NOT NULL,
          year INTEGER NOT NULL
        );
      `
    });
    
    if (createUniversitiesResult.error || createScholarshipsResult.error || createAdmissionResult.error) {
      console.error('Erreur lors de la création des tables via RPC:', {
        universities: createUniversitiesResult.error,
        scholarships: createScholarshipsResult.error,
        admission: createAdmissionResult.error
      });
      
      // Tentative alternative en utilisant l'API SQL directe (si disponible dans votre projet)
      console.log('Tentative de création des tables via SQL direct...');
      
      // Créer une fonction RPC execute_sql si elle n'existe pas
      await supabase.rpc('execute_sql', {
        sql_query: `
          CREATE OR REPLACE FUNCTION execute_sql(sql_query TEXT)
          RETURNS VOID AS $$
          BEGIN
            EXECUTE sql_query;
          END;
          $$ LANGUAGE plpgsql SECURITY DEFINER;
        `
      });
      
      // Réessayer avec la fonction RPC
      const altResult1 = await executeSQL(`
        CREATE TABLE IF NOT EXISTS ${TABLES.UNIVERSITIES} (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          location TEXT NOT NULL,
          region TEXT NOT NULL,
          programs JSONB NOT NULL,
          "employmentRate" INTEGER NOT NULL,
          specializations JSONB NOT NULL,
          rating NUMERIC NOT NULL,
          image TEXT NOT NULL,
          international BOOLEAN
        );
      `);
      
      const altResult2 = await executeSQL(`
        CREATE TABLE IF NOT EXISTS ${TABLES.SCHOLARSHIPS} (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          country TEXT NOT NULL,
          amount TEXT NOT NULL,
          requirements JSONB NOT NULL,
          deadline TEXT NOT NULL,
          link TEXT NOT NULL
        );
      `);
      
      const altResult3 = await executeSQL(`
        CREATE TABLE IF NOT EXISTS ${TABLES.ADMISSION_CRITERIA} (
          id TEXT PRIMARY KEY,
          university TEXT NOT NULL,
          department TEXT NOT NULL,
          program TEXT NOT NULL,
          section TEXT NOT NULL,
          "minimumScore" NUMERIC NOT NULL,
          "keySubjectsWeights" JSONB NOT NULL,
          "acceptanceRate" INTEGER NOT NULL,
          year INTEGER NOT NULL
        );
      `);
      
      if (!altResult1 || !altResult2 || !altResult3) {
        console.error('Erreur lors de la création alternative des tables');
        return false;
      }
    }
    
    // Vérifier si les tables ont été créées
    const tablesExist = await checkTablesExist();
    if (!tablesExist) {
      console.error('Impossible de confirmer la création des tables');
      return false;
    }
    
    console.log('Création des tables réussie!');
    return true;
  } catch (error) {
    console.error('Exception lors de la création des tables:', error);
    return false;
  }
}

/**
 * Vérifie si les tables contiennent déjà des données
 * @returns Promise<boolean> indiquant si les tables contiennent des données
 */
export async function checkDataExists(): Promise<boolean> {
  try {
    const { data, error, count } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('*', { count: 'exact' })
      .limit(1);
    
    if (error) {
      console.error('Erreur lors de la vérification des données:', error);
      return false;
    }
    
    console.log('Vérification des données:', count, 'universités trouvées');
    return count !== null && count > 0;
  } catch (error) {
    console.error('Exception lors de la vérification des données:', error);
    return false;
  }
}

/**
 * Initialise la base de données avec des données d'exemple
 */
export async function initializeDatabase(
  universities: University[] = sampleData.universities,
  scholarships: Scholarship[] = sampleData.scholarships,
  admissionCriteria: AdmissionCriteria[] = sampleData.admissionCriteria
): Promise<boolean> {
  console.log('Initialisation de la base de données avec les données d\'exemple...');
  
  try {
    // Vérifier si les tables existent
    const tablesExist = await checkTablesExist();
    if (!tablesExist) {
      // Créer les tables si elles n'existent pas
      const tablesCreated = await createTables();
      if (!tablesCreated) {
        console.error('Impossible de créer les tables nécessaires dans Supabase.');
        return false;
      }
    }
    
    // Vérifier si des données existent déjà
    const dataExists = await checkDataExists();
    if (dataExists) {
      console.log('Les données existent déjà, pas besoin de réinitialiser.');
      return true;
    }
    
    // Insérer les universités
    console.log('Insertion des données universitaires...', universities.length, 'universités');
    const { error: uniError } = await supabase
      .from(TABLES.UNIVERSITIES)
      .upsert(universities, { onConflict: 'id' });
      
    if (uniError) {
      console.error('Erreur lors de l\'insertion des universités:', uniError);
      return false;
    }
    
    // Insérer les bourses
    console.log('Insertion des données de bourses...', scholarships.length, 'bourses');
    const { error: schError } = await supabase
      .from(TABLES.SCHOLARSHIPS)
      .upsert(scholarships, { onConflict: 'id' });
      
    if (schError) {
      console.error('Erreur lors de l\'insertion des bourses:', schError);
      return false;
    }
    
    // Insérer les critères d'admission
    console.log('Insertion des critères d\'admission...', admissionCriteria.length, 'critères');
    const { error: admError } = await supabase
      .from(TABLES.ADMISSION_CRITERIA)
      .upsert(admissionCriteria, { onConflict: 'id' });
      
    if (admError) {
      console.error('Erreur lors de l\'insertion des critères d\'admission:', admError);
      return false;
    }
    
    console.log('Initialisation de la base de données terminée avec succès!');
    toast({
      title: "Base de données initialisée",
      description: "Les tables et données ont été créées dans Supabase.",
    });
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de la base de données:', error);
    toast({
      title: "Erreur d'initialisation",
      description: "Un problème est survenu lors de l'initialisation de la base de données.",
      variant: "destructive"
    });
    return false;
  }
}

/**
 * Fonction d'utilitaire pour forcer la réinitialisation de la base de données (utile pour le développement)
 */
export async function forceReinitializeDatabase(): Promise<boolean> {
  console.log('Forçage de la réinitialisation de la base de données...');
  
  try {
    // Supprimer les tables existantes
    const dropUniversitiesResult = await executeSQL(`DROP TABLE IF EXISTS ${TABLES.UNIVERSITIES} CASCADE;`);
    const dropScholarshipsResult = await executeSQL(`DROP TABLE IF EXISTS ${TABLES.SCHOLARSHIPS} CASCADE;`);
    const dropAdmissionResult = await executeSQL(`DROP TABLE IF EXISTS ${TABLES.ADMISSION_CRITERIA} CASCADE;`);
    
    if (!dropUniversitiesResult || !dropScholarshipsResult || !dropAdmissionResult) {
      console.error('Erreur lors de la suppression des tables existantes');
      return false;
    }
    
    // Recréer et initialiser
    return await initializeDatabase();
  } catch (error) {
    console.error('Exception lors du forçage de la réinitialisation:', error);
    return false;
  }
}
