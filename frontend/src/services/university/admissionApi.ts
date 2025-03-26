
import { AdmissionCriteria } from "@/types/university";
import { supabase, TABLES } from "@/lib/supabase";

export async function getAllAdmissionCriteria(): Promise<AdmissionCriteria[]> {
  const { data, error } = await supabase
    .from(TABLES.ADMISSION_CRITERIA)
    .select('*');
  
  if (error) {
    console.error('Error fetching admission criteria:', error);
    return [];
  }
  
  return data || [];
}

export async function getAdmissionCriteriaBySection(section: string): Promise<AdmissionCriteria[]> {
  const { data, error } = await supabase
    .from(TABLES.ADMISSION_CRITERIA)
    .select('*')
    .eq('section', section);
    
  if (error) {
    console.error('Error fetching admission criteria by section:', error);
    return [];
  }
  
  return data || [];
}
