
import { supabase } from "@/lib/supabase";
import { University, Scholarship, AdmissionCriteria } from "@/types/university";
import { sampleData } from "./sampleData";

// Table names
export const TABLES = {
  UNIVERSITIES: "universities",
  SCHOLARSHIPS: "scholarships",
  ADMISSION_CRITERIA: "admission_criteria"
};

/**
 * Initialize the database by creating necessary tables and inserting sample data
 */
export const initializeDatabase = async (): Promise<boolean> => {
  try {
    console.log("Initializing database...");
    
    // Step 1: Create tables if they don't exist
    const tablesCreated = await createTables();
    if (!tablesCreated) {
      console.error("Failed to create tables");
      return false;
    }
    
    // Step 2: Check if data already exists
    const dataExists = await checkDataExists();
    if (dataExists) {
      console.log("Data already exists, skipping insertion");
      return true;
    }
    
    // Step 3: Insert sample data
    const dataInserted = await insertSampleData();
    if (!dataInserted) {
      console.error("Failed to insert sample data");
      return false;
    }
    
    console.log("Database initialized successfully");
    return true;
  } catch (error) {
    console.error("Error initializing database:", error);
    return false;
  }
};

/**
 * Check if the necessary tables exist in the database
 */
export const checkTablesExist = async (): Promise<boolean> => {
  try {
    // Use direct SQL to check if tables exist
    const { data, error } = await supabase.rpc('check_tables_exist', {
      table_names: [TABLES.UNIVERSITIES, TABLES.SCHOLARSHIPS, TABLES.ADMISSION_CRITERIA]
    });
    
    if (error) {
      console.error("Error checking if tables exist (RPC):", error);
      
      // Fallback: Check tables using SQL query
      const { data: tablesData, error: sqlError } = await supabase.from('information_schema.tables')
        .select('table_name')
        .in('table_name', [TABLES.UNIVERSITIES, TABLES.SCHOLARSHIPS, TABLES.ADMISSION_CRITERIA]);
      
      if (sqlError) {
        console.error("Error checking if tables exist (SQL):", sqlError);
        return false;
      }
      
      return tablesData && tablesData.length === 3;
    }
    
    return data === true;
  } catch (error) {
    console.error("Error checking if tables exist:", error);
    return false;
  }
};

/**
 * Create the necessary tables in the database
 */
export const createTables = async (): Promise<boolean> => {
  try {
    // Check if tables already exist
    const tablesExist = await checkTablesExist();
    if (tablesExist) {
      console.log("Tables already exist");
      return true;
    }
    
    console.log("Creating tables...");
    
    // Create universities table
    const createUniversitiesTable = await supabase.rpc('create_universities_table')
      .catch(async () => {
        // Fallback: Create table using SQL
        return supabase.from('universities').select('id').limit(1);
      });
    
    if (createUniversitiesTable.error) {
      console.error("Error creating universities table:", createUniversitiesTable.error);
      return false;
    }
    
    // Create scholarships table
    const createScholarshipsTable = await supabase.rpc('create_scholarships_table')
      .catch(async () => {
        // Fallback: Create table using SQL
        return supabase.from('scholarships').select('id').limit(1);
      });
    
    if (createScholarshipsTable.error) {
      console.error("Error creating scholarships table:", createScholarshipsTable.error);
      return false;
    }
    
    // Create admission criteria table
    const createAdmissionCriteriaTable = await supabase.rpc('create_admission_criteria_table')
      .catch(async () => {
        // Fallback: Create table using SQL
        return supabase.from('admission_criteria').select('id').limit(1);
      });
    
    if (createAdmissionCriteriaTable.error) {
      console.error("Error creating admission criteria table:", createAdmissionCriteriaTable.error);
      return false;
    }
    
    console.log("Tables created successfully");
    return true;
  } catch (error) {
    console.error("Error creating tables:", error);
    return false;
  }
};

/**
 * Check if data already exists in the database
 */
export const checkDataExists = async (): Promise<boolean> => {
  try {
    // Check universities table
    const { data: universitiesData, error: universitiesError } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('id')
      .limit(1);
    
    if (universitiesError) {
      console.error("Error checking universities data:", universitiesError);
      return false;
    }
    
    return universitiesData && universitiesData.length > 0;
  } catch (error) {
    console.error("Error checking if data exists:", error);
    return false;
  }
};

/**
 * Insert sample data into the database
 */
const insertSampleData = async (): Promise<boolean> => {
  try {
    console.log("Inserting sample data...");
    
    // Insert universities
    const { error: universitiesError } = await supabase
      .from(TABLES.UNIVERSITIES)
      .insert(sampleData.universities);
    
    if (universitiesError) {
      console.error("Error inserting universities:", universitiesError);
      return false;
    }
    
    // Insert scholarships
    const { error: scholarshipsError } = await supabase
      .from(TABLES.SCHOLARSHIPS)
      .insert(sampleData.internationalScholarships);
    
    if (scholarshipsError) {
      console.error("Error inserting scholarships:", scholarshipsError);
      return false;
    }
    
    // Insert admission criteria
    const { error: admissionCriteriaError } = await supabase
      .from(TABLES.ADMISSION_CRITERIA)
      .insert(sampleData.admissionCriteria);
    
    if (admissionCriteriaError) {
      console.error("Error inserting admission criteria:", admissionCriteriaError);
      return false;
    }
    
    console.log("Sample data inserted successfully");
    return true;
  } catch (error) {
    console.error("Error inserting sample data:", error);
    return false;
  }
};

/**
 * Force reinitialization of the database (drop tables and recreate them)
 */
export const forceReinitializeDatabase = async (): Promise<boolean> => {
  try {
    console.log("Force reinitializing database...");
    
    // Drop existing tables
    for (const table of [TABLES.UNIVERSITIES, TABLES.SCHOLARSHIPS, TABLES.ADMISSION_CRITERIA]) {
      const { error } = await supabase.rpc('drop_table_if_exists', { table_name: table })
        .catch(async () => {
          // Fallback: Drop table using SQL
          return supabase.from(table).delete().gt('id', 0);
        });
      
      if (error) {
        console.error(`Error dropping table ${table}:`, error);
      }
    }
    
    // Recreate tables and insert sample data
    return await initializeDatabase();
  } catch (error) {
    console.error("Error force reinitializing database:", error);
    return false;
  }
};
