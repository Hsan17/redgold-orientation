import { University, Scholarship, AdmissionCriteria } from "@/types/university";
import { supabase, TABLES } from "@/lib/supabase";
import { toast } from "@/components/ui/use-toast";

/**
 * Vérifie si les tables existent dans Supabase
 * @returns Promise<boolean> indiquant si les tables existent
 */
export async function checkTablesExist(): Promise<boolean> {
  try {
    // Test si la table des universités existe
    const { count, error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('*', { count: 'exact', head: true });
    
    if (error) {
      console.error('Erreur lors de la vérification des tables:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Exception lors de la vérification des tables:', error);
    return false;
  }
}

/**
 * Crée les tables nécessaires dans Supabase si elles n'existent pas
 */
export async function createTables(): Promise<boolean> {
  console.log('Création des tables Supabase si elles n\'existent pas...');
  
  try {
    // Création de la table universities
    const createUniversitiesResult = await supabase.rpc('create_table_if_not_exists', {
      table_name: TABLES.UNIVERSITIES,
      column_definitions: `
        id text primary key,
        name text not null,
        location text not null,
        region text not null,
        programs jsonb not null,
        "employmentRate" integer not null,
        specializations jsonb not null,
        rating numeric not null,
        image text not null,
        international boolean
      `
    });
    
    if (createUniversitiesResult.error) {
      console.error('Erreur lors de la création de la table universities:', createUniversitiesResult.error);
      // Fallback direct SQL
      await executeSQL(`
        CREATE TABLE IF NOT EXISTS ${TABLES.UNIVERSITIES} (
          id text primary key,
          name text not null,
          location text not null,
          region text not null,
          programs jsonb not null,
          "employmentRate" integer not null,
          specializations jsonb not null,
          rating numeric not null,
          image text not null,
          international boolean
        );
      `);
    }
    
    // Création de la table scholarships
    const createScholarshipsResult = await supabase.rpc('create_table_if_not_exists', {
      table_name: TABLES.SCHOLARSHIPS,
      column_definitions: `
        id text primary key,
        name text not null,
        country text not null,
        amount text not null,
        requirements jsonb not null,
        deadline text not null,
        link text not null
      `
    });
    
    if (createScholarshipsResult.error) {
      console.error('Erreur lors de la création de la table scholarships:', createScholarshipsResult.error);
      // Fallback direct SQL
      await executeSQL(`
        CREATE TABLE IF NOT EXISTS ${TABLES.SCHOLARSHIPS} (
          id text primary key,
          name text not null,
          country text not null,
          amount text not null,
          requirements jsonb not null,
          deadline text not null,
          link text not null
        );
      `);
    }
    
    // Création de la table admission_criteria
    const createAdmissionResult = await supabase.rpc('create_table_if_not_exists', {
      table_name: TABLES.ADMISSION_CRITERIA,
      column_definitions: `
        id text primary key,
        university text not null,
        department text not null,
        program text not null,
        section text not null,
        "minimumScore" numeric not null,
        "keySubjectsWeights" jsonb not null,
        "acceptanceRate" integer not null,
        year integer not null
      `
    });
    
    if (createAdmissionResult.error) {
      console.error('Erreur lors de la création de la table admission_criteria:', createAdmissionResult.error);
      // Fallback direct SQL
      await executeSQL(`
        CREATE TABLE IF NOT EXISTS ${TABLES.ADMISSION_CRITERIA} (
          id text primary key,
          university text not null,
          department text not null,
          program text not null,
          section text not null,
          "minimumScore" numeric not null,
          "keySubjectsWeights" jsonb not null,
          "acceptanceRate" integer not null,
          year integer not null
        );
      `);
    }
    
    console.log('Création des tables réussie!');
    return true;
  } catch (error) {
    console.error('Erreur lors de la création des tables:', error);
    return false;
  }
}

/**
 * Exécute une requête SQL directe sur Supabase
 */
async function executeSQL(sql: string): Promise<boolean> {
  try {
    const { error } = await supabase.rpc('execute_sql', { sql_query: sql });
    if (error) {
      console.error('Erreur lors de l\'exécution SQL:', error);
      return false;
    }
    return true;
  } catch (error) {
    console.error('Exception lors de l\'exécution SQL:', error);
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
      .select('*', { count: 'exact' });
    
    if (error) {
      console.error('Erreur lors de la vérification des données:', error);
      return false;
    }
    
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
  universities: University[],
  scholarships: Scholarship[],
  admissionCriteria: AdmissionCriteria[]
): Promise<void> {
  console.log('Initialisation de la base de données avec les données d\'exemple...');
  
  try {
    // Vérifier si les tables existent
    const tablesExist = await checkTablesExist();
    if (!tablesExist) {
      // Créer les tables si elles n'existent pas
      const tablesCreated = await createTables();
      if (!tablesCreated) {
        throw new Error('Impossible de créer les tables nécessaires dans Supabase.');
      }
    }
    
    // Vérifier si des données existent déjà
    const dataExists = await checkDataExists();
    if (dataExists) {
      console.log('Les données existent déjà, pas besoin de réinitialiser.');
      return;
    }
    
    // Insérer les universités
    console.log('Insertion des données universitaires...', universities.length, 'universités');
    const { error: uniError } = await supabase
      .from(TABLES.UNIVERSITIES)
      .upsert(universities, { onConflict: 'id' });
      
    if (uniError) {
      console.error('Erreur lors de l\'insertion des universités:', uniError);
      throw uniError;
    }
    
    // Insérer les bourses
    console.log('Insertion des données de bourses...', scholarships.length, 'bourses');
    const { error: schError } = await supabase
      .from(TABLES.SCHOLARSHIPS)
      .upsert(scholarships, { onConflict: 'id' });
      
    if (schError) {
      console.error('Erreur lors de l\'insertion des bourses:', schError);
      throw schError;
    }
    
    // Insérer les critères d'admission
    console.log('Insertion des critères d\'admission...', admissionCriteria.length, 'critères');
    const { error: admError } = await supabase
      .from(TABLES.ADMISSION_CRITERIA)
      .upsert(admissionCriteria, { onConflict: 'id' });
      
    if (admError) {
      console.error('Erreur lors de l\'insertion des critères d\'admission:', admError);
      throw admError;
    }
    
    console.log('Initialisation de la base de données terminée avec succès!');
    toast({
      title: "Base de données initialisée",
      description: "Les tables et données ont été créées dans Supabase.",
    });
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de la base de données:', error);
    toast({
      title: "Erreur d'initialisation",
      description: "Un problème est survenu lors de l'initialisation de la base de données.",
      variant: "destructive"
    });
    throw error;
  }
}
