
import { checkTablesExist, createTables, checkDataExists, initializeDatabase } from "./databaseApi";
import { supabase } from "@/lib/supabase";
import { sampleData } from "./sampleData";

/**
 * Vérifie la connexion à Supabase et initialise la base de données si nécessaire
 */
export async function verifyAndInitializeDatabase(): Promise<boolean> {
  console.log('Vérification et initialisation de la base de données...');
  
  try {
    // Vérifier d'abord la connexion à Supabase
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('Erreur de connexion à Supabase:', error);
      throw new Error('La connexion à Supabase a échoué. Veuillez vérifier vos identifiants.');
    }
    
    // Vérifier si les tables existent
    const tablesExist = await checkTablesExist();
    if (!tablesExist) {
      console.log('Les tables n\'existent pas, création...');
      const tablesCreated = await createTables();
      if (!tablesCreated) {
        console.error('Impossible de créer les tables.');
        return false;
      }
    }
    
    // Vérifier si les données existent
    const dataExists = await checkDataExists();
    if (!dataExists) {
      console.log('Aucune donnée présente, initialisation avec des données d\'exemple...');
      const dataInitialized = await initializeDatabase(
        sampleData.universities,
        sampleData.scholarships,
        sampleData.admissionCriteria
      );
      if (!dataInitialized) {
        console.error('Impossible d\'initialiser les données.');
        return false;
      }
    }
    
    return true;
  } catch (error) {
    console.error('Erreur lors de la vérification et initialisation de la base de données:', error);
    return false;
  }
}

/**
 * Génère un rapport sur l'état de la base de données
 */
export async function generateDatabaseReport(): Promise<void> {
  console.log('Génération du rapport de la base de données...');
  
  try {
    // Vérifier la connexion à Supabase
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      console.error('Erreur de connexion à Supabase:', sessionError);
      return;
    }
    
    // Compter les enregistrements dans chaque table
    const [universities, scholarships, admissionCriteria] = await Promise.all([
      supabase.from(TABLES.UNIVERSITIES).select('*', { count: 'exact', head: true }),
      supabase.from(TABLES.SCHOLARSHIPS).select('*', { count: 'exact', head: true }),
      supabase.from(TABLES.ADMISSION_CRITERIA).select('*', { count: 'exact', head: true })
    ]);
    
    console.log('Rapport de la base de données:');
    console.log(`- Universités: ${universities.count || 'Erreur'}`);
    console.log(`- Bourses: ${scholarships.count || 'Erreur'}`);
    console.log(`- Critères d'admission: ${admissionCriteria.count || 'Erreur'}`);
    
    // Vérifier les erreurs
    if (universities.error) console.error('Erreur lors du comptage des universités:', universities.error);
    if (scholarships.error) console.error('Erreur lors du comptage des bourses:', scholarships.error);
    if (admissionCriteria.error) console.error('Erreur lors du comptage des critères d\'admission:', admissionCriteria.error);
  } catch (error) {
    console.error('Erreur lors de la génération du rapport:', error);
  }
}
