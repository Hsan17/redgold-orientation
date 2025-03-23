
import { Scholarship } from "@/types/university";
import { supabase, TABLES } from "@/lib/supabase";

export async function getAllScholarships(): Promise<Scholarship[]> {
  const { data, error } = await supabase
    .from(TABLES.SCHOLARSHIPS)
    .select('*');
  
  if (error) {
    console.error('Error fetching scholarships:', error);
    return [];
  }
  
  return data || [];
}

export async function getScholarshipById(id: string): Promise<Scholarship | undefined> {
  const { data, error } = await supabase
    .from(TABLES.SCHOLARSHIPS)
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching scholarship by id:', error);
    return undefined;
  }
  
  return data;
}
