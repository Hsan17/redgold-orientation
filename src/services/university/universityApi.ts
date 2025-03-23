
import { University } from "@/types/university";
import { supabase, TABLES } from "@/lib/supabase";

export async function getAllUniversities(): Promise<University[]> {
  const { data, error } = await supabase
    .from(TABLES.UNIVERSITIES)
    .select('*');
  
  if (error) {
    console.error('Error fetching universities:', error);
    return [];
  }
  
  return data || [];
}

export async function getUniversityById(id: string): Promise<University | undefined> {
  const { data, error } = await supabase
    .from(TABLES.UNIVERSITIES)
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching university by id:', error);
    return undefined;
  }
  
  return data;
}

export async function getUniversitiesByRegion(region: string): Promise<University[]> {
  const { data, error } = await supabase
    .from(TABLES.UNIVERSITIES)
    .select('*')
    .eq('region', region);
  
  if (error) {
    console.error('Error fetching universities by region:', error);
    return [];
  }
  
  return data || [];
}

export async function getUniversitiesByProgram(program: string): Promise<University[]> {
  const { data, error } = await supabase
    .from(TABLES.UNIVERSITIES)
    .select('*')
    .textSearch('programs', program, { type: 'plain' });
  
  if (error) {
    console.error('Error fetching universities by program:', error);
    return [];
  }
  
  return data || [];
}
