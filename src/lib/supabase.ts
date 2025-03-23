
import { createClient } from '@supabase/supabase-js';
import { University, Scholarship, AdmissionCriteria } from '@/types/university';

const supabaseUrl = 'https://kheefrebnkscucrnatcs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoZWVmcmVibmtzY3Vjcm5hdGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDAzMTMsImV4cCI6MjA1ODMxNjMxM30.XlyENLuzAshBuWe3SODbASJGGE3G6RcICYNEpdOZA7I';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Database table names
export const TABLES = {
  UNIVERSITIES: 'universities',
  SCHOLARSHIPS: 'scholarships',
  ADMISSION_CRITERIA: 'admission_criteria',
};

// Helper functions for type safety
export async function fetchUniversities(): Promise<University[]> {
  const { data, error } = await supabase
    .from(TABLES.UNIVERSITIES)
    .select('*');
  
  if (error) {
    console.error('Error fetching universities:', error);
    return [];
  }
  
  return data || [];
}

export async function fetchScholarships(): Promise<Scholarship[]> {
  const { data, error } = await supabase
    .from(TABLES.SCHOLARSHIPS)
    .select('*');
  
  if (error) {
    console.error('Error fetching scholarships:', error);
    return [];
  }
  
  return data || [];
}

export async function fetchAdmissionCriteria(): Promise<AdmissionCriteria[]> {
  const { data, error } = await supabase
    .from(TABLES.ADMISSION_CRITERIA)
    .select('*');
  
  if (error) {
    console.error('Error fetching admission criteria:', error);
    return [];
  }
  
  return data || [];
}

export async function fetchUniversitiesByRegion(region: string): Promise<University[]> {
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

export async function fetchUniversitiesByProgram(program: string): Promise<University[]> {
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

export async function fetchUniversityById(id: string): Promise<University | null> {
  const { data, error } = await supabase
    .from(TABLES.UNIVERSITIES)
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching university by id:', error);
    return null;
  }
  
  return data;
}
