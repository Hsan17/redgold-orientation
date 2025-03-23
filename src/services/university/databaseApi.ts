
import { University, Scholarship, AdmissionCriteria } from "@/types/university";
import { supabase, TABLES } from "@/lib/supabase";

export async function initializeDatabase(
  universities: University[],
  scholarships: Scholarship[],
  admissionCriteria: AdmissionCriteria[]
): Promise<void> {
  console.log('Initializing database with sample data...');
  
  // First check if tables exist by trying to select from them
  try {
    const { data: testData, error: testError } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('count(*)', { count: 'exact', head: true });
      
    if (testError) {
      console.error('Error checking tables, they might not exist:', testError);
      throw new Error('Tables might not exist yet. Make sure tables are created first.');
    }
  } catch (error) {
    console.error('Table check failed:', error);
    throw error;
  }
  
  // Insert universities
  console.log('Inserting university data...');
  const { error: uniError } = await supabase
    .from(TABLES.UNIVERSITIES)
    .upsert(universities, { onConflict: 'id' });
    
  if (uniError) {
    console.error('Error inserting universities:', uniError);
    throw uniError;
  }
  
  // Insert scholarships
  console.log('Inserting scholarship data...');
  const { error: schError } = await supabase
    .from(TABLES.SCHOLARSHIPS)
    .upsert(scholarships, { onConflict: 'id' });
    
  if (schError) {
    console.error('Error inserting scholarships:', schError);
    throw schError;
  }
  
  // Insert admission criteria
  console.log('Inserting admission criteria data...');
  const { error: admError } = await supabase
    .from(TABLES.ADMISSION_CRITERIA)
    .upsert(admissionCriteria, { onConflict: 'id' });
    
  if (admError) {
    console.error('Error inserting admission criteria:', admError);
    throw admError;
  }
  
  console.log('Database initialization completed successfully!');
}
