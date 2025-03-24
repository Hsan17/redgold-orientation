
import { supabase, TABLES, checkDatabaseConnection } from "@/lib/supabase";
import { initializeDatabase, checkTablesExist, createTables, checkDataExists } from "./databaseApi";
import { sampleData } from "./sampleData";
import { toast } from "@/components/ui/use-toast";

/**
 * Vérifie et initialise la base de données
 * Cette fonction peut être appelée au démarrage de l'application
 */
export async function verifyAndInitializeDatabase(): Promise<boolean> {
  console.log("Vérification et initialisation de la base de données...");
  
  try {
    // 1. Vérifier la connexion
    const isConnected = await checkDatabaseConnection();
    if (!isConnected) {
      console.error("La connexion à Supabase a échoué. Veuillez vérifier vos identifiants.");
      toast({
        title: "Erreur de connexion",
        description: "Impossible de se connecter à la base de données Supabase.",
        variant: "destructive"
      });
      return false;
    }
    
    console.log("Connexion à Supabase établie avec succès.");
    
    // 2. Vérifier si les tables existent
    const tablesExist = await checkTablesExist();
    if (!tablesExist) {
      console.log("Les tables n'existent pas, création en cours...");
      const tablesCreated = await createTables();
      if (!tablesCreated) {
        console.error("Impossible de créer les tables. Veuillez vérifier les permissions.");
        toast({
          title: "Erreur de création des tables",
          description: "Impossible de créer les tables nécessaires dans Supabase.",
          variant: "destructive"
        });
        return false;
      }
    }
    
    // 3. Vérifier si des données existent
    const hasData = await checkDataExists();
    if (!hasData) {
      console.log("Aucune donnée trouvée, initialisation avec les données d'exemple...");
      await initializeDatabase(
        sampleData.universities,
        sampleData.internationalScholarships,
        sampleData.admissionCriteria
      );
    } else {
      console.log("Les données existent déjà dans la base de données.");
    }
    
    // 4. Vérifier que les données ont bien été insérées
    const { count, error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('*', { count: 'exact', head: true });
    
    if (error) {
      console.error("Erreur lors de la vérification finale:", error);
      return false;
    }
    
    console.log(`La base de données contient ${count} universités.`);
    
    toast({
      title: "Base de données prête",
      description: `Connexion établie. ${count} universités disponibles.`,
    });
    
    return true;
  } catch (error) {
    console.error("Erreur lors de la vérification de la base de données:", error);
    toast({
      title: "Erreur de vérification",
      description: "Une erreur est survenue lors de la vérification de la base de données.",
      variant: "destructive"
    });
    return false;
  }
}

/**
 * Fonction de test qui affiche un rapport complet sur l'état de la base de données
 */
export async function generateDatabaseReport(): Promise<void> {
  console.log("Génération du rapport de la base de données...");
  
  try {
    const connection = await checkDatabaseConnection();
    console.log("État de la connexion:", connection ? "✅ Connecté" : "❌ Non connecté");
    
    if (!connection) return;
    
    const tables = await checkTablesExist();
    console.log("État des tables:", tables ? "✅ Existantes" : "❌ Non existantes");
    
    const data = await checkDataExists();
    console.log("État des données:", data ? "✅ Présentes" : "❌ Absentes");
    
    // Compter les éléments dans chaque table
    const { count: countUniversities } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('*', { count: 'exact', head: true });
    
    const { count: countScholarships } = await supabase
      .from(TABLES.SCHOLARSHIPS)
      .select('*', { count: 'exact', head: true });
    
    const { count: countAdmission } = await supabase
      .from(TABLES.ADMISSION_CRITERIA)
      .select('*', { count: 'exact', head: true });
    
    console.log("Nombre d'universités:", countUniversities || 0);
    console.log("Nombre de bourses:", countScholarships || 0);
    console.log("Nombre de critères d'admission:", countAdmission || 0);
    
    // Afficher un échantillon de données
    const { data: sampleUni } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('*')
      .limit(1);
    
    if (sampleUni && sampleUni.length > 0) {
      console.log("Exemple d'université:", sampleUni[0].name);
    }
    
    console.log("Rapport de base de données terminé.");
  } catch (error) {
    console.error("Erreur lors de la génération du rapport:", error);
  }
}
