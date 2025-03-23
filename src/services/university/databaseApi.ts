
import { University, Scholarship, AdmissionCriteria } from "@/types/university";
import { supabase, TABLES } from "@/lib/supabase";

export async function initializeDatabase(
  universities: University[],
  scholarships: Scholarship[],
  admissionCriteria: AdmissionCriteria[]
): Promise<void> {
  // Insert universities
  const { error: uniError } = await supabase
    .from(TABLES.UNIVERSITIES)
    .upsert(universities, { onConflict: 'id' });
    
  if (uniError) {
    console.error('Error inserting universities:', uniError);
  }
  
  // Insert scholarships
  const { error: schError } = await supabase
    .from(TABLES.SCHOLARSHIPS)
    .upsert(scholarships, { onConflict: 'id' });
    
  if (schError) {
    console.error('Error inserting scholarships:', schError);
  }
  
  // Insert admission criteria
  const { error: admError } = await supabase
    .from(TABLES.ADMISSION_CRITERIA)
    .upsert(admissionCriteria, { onConflict: 'id' });
    
  if (admError) {
    console.error('Error inserting admission criteria:', admError);
  }
}
