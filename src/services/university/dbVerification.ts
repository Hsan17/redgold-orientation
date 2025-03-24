
import { supabase } from "@/lib/supabase";
import { initializeDatabase, checkTablesExist, checkDataExists, TABLES } from "./databaseApi";

/**
 * Verify that the database is properly set up and initialize it if needed
 */
export const verifyAndInitializeDatabase = async (): Promise<{ 
  initialized: boolean; 
  error?: string;
}> => {
  try {
    console.log("Verifying database setup...");
    
    // First, check Supabase connection
    const { data: connectionCheck, error: connectionError } = await supabase.from('_connector_health').select('*').limit(1);
    
    if (connectionError) {
      console.error("Unable to connect to Supabase:", connectionError);
      return { 
        initialized: false, 
        error: `Connexion Supabase échouée: ${connectionError.message}` 
      };
    }
    
    // Check if tables exist
    const tablesExist = await checkTablesExist();
    if (!tablesExist) {
      console.log("Tables don't exist, initializing database...");
      const initialized = await initializeDatabase();
      
      return { 
        initialized, 
        error: initialized ? undefined : "Échec d'initialisation des tables"
      };
    }
    
    // Check if data exists
    const dataExists = await checkDataExists();
    if (!dataExists) {
      console.log("Tables exist but no data, initializing data...");
      const initialized = await initializeDatabase();
      
      return { 
        initialized, 
        error: initialized ? undefined : "Échec d'initialisation des données"
      };
    }
    
    console.log("Database verification complete - all good!");
    return { initialized: true };
  } catch (error) {
    console.error("Error verifying database:", error);
    return { 
      initialized: false, 
      error: `Erreur de vérification: ${error instanceof Error ? error.message : String(error)}`
    };
  }
};

/**
 * Generate a report about the database status
 */
export const generateDatabaseReport = async (): Promise<{
  connected: boolean;
  tablesExist: boolean;
  dataExists: boolean;
  tableStats: {
    [key: string]: {
      exists: boolean;
      rowCount: number;
    };
  };
}> => {
  const report = {
    connected: false,
    tablesExist: false,
    dataExists: false,
    tableStats: {
      [TABLES.UNIVERSITIES]: { exists: false, rowCount: 0 },
      [TABLES.SCHOLARSHIPS]: { exists: false, rowCount: 0 },
      [TABLES.ADMISSION_CRITERIA]: { exists: false, rowCount: 0 },
    }
  };
  
  try {
    // Check connection
    const { data: connectionCheck, error: connectionError } = await supabase.from('_connector_health').select('*').limit(1);
    report.connected = !connectionError;
    
    if (!report.connected) {
      return report;
    }
    
    // Check tables exist
    report.tablesExist = await checkTablesExist();
    
    if (!report.tablesExist) {
      return report;
    }
    
    // Check data exists
    report.dataExists = await checkDataExists();
    
    // Get table stats
    for (const table of [TABLES.UNIVERSITIES, TABLES.SCHOLARSHIPS, TABLES.ADMISSION_CRITERIA]) {
      try {
        const { data, error, count } = await supabase
          .from(table)
          .select('*', { count: 'exact' })
          .limit(0);
        
        report.tableStats[table].exists = !error;
        report.tableStats[table].rowCount = count || 0;
      } catch (e) {
        console.error(`Error getting stats for table ${table}:`, e);
      }
    }
    
    return report;
  } catch (error) {
    console.error("Error generating database report:", error);
    return report;
  }
};
