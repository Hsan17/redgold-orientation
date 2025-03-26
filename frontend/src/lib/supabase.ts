
import { createClient } from '@supabase/supabase-js';
import { University, Scholarship, AdmissionCriteria } from '@/types/university';

const supabaseUrl = 'https://kheefrebnkscucrnatcs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoZWVmcmVibmtzY3Vjcm5hdGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDAzMTMsImV4cCI6MjA1ODMxNjMxM30.XlyENLuzAshBuWe3SODbASJGGE3G6RcICYNEpdOZA7I';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Noms des tables dans la base de données
export const TABLES = {
  UNIVERSITIES: 'universities',
  SCHOLARSHIPS: 'scholarships',
  ADMISSION_CRITERIA: 'admission_criteria',
};

// Vérification de la connexion à la base de données
export async function checkDatabaseConnection(): Promise<boolean> {
  try {
    // Tenter une requête simple pour vérifier la connexion
    const { data, error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('count(*)', { count: 'exact', head: true });
    
    if (error) {
      console.error('Erreur de connexion à la base de données:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Erreur inattendue lors de la connexion à la base de données:', err);
    return false;
  }
}

// Fonctions d'accès aux données des universités avec une meilleure gestion des erreurs
export async function fetchUniversities(): Promise<University[]> {
  try {
    const { data, error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('*');
    
    if (error) {
      console.error('Erreur lors de la récupération des universités:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Exception lors de la récupération des universités:', error);
    return [];
  }
}

export async function fetchScholarships(): Promise<Scholarship[]> {
  try {
    const { data, error } = await supabase
      .from(TABLES.SCHOLARSHIPS)
      .select('*');
    
    if (error) {
      console.error('Erreur lors de la récupération des bourses:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Exception lors de la récupération des bourses:', error);
    return [];
  }
}

export async function fetchAdmissionCriteria(): Promise<AdmissionCriteria[]> {
  try {
    const { data, error } = await supabase
      .from(TABLES.ADMISSION_CRITERIA)
      .select('*');
    
    if (error) {
      console.error('Erreur lors de la récupération des critères d\'admission:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Exception lors de la récupération des critères d\'admission:', error);
    return [];
  }
}

export async function fetchUniversitiesByRegion(region: string): Promise<University[]> {
  try {
    const { data, error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('*')
      .eq('region', region);
    
    if (error) {
      console.error('Erreur lors de la récupération des universités par région:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Exception lors de la récupération des universités par région:', error);
    return [];
  }
}

export async function fetchUniversitiesByProgram(program: string): Promise<University[]> {
  try {
    const { data, error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('*')
      .contains('programs', [program]);
    
    if (error) {
      console.error('Erreur lors de la récupération des universités par programme:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Exception lors de la récupération des universités par programme:', error);
    return [];
  }
}

export async function fetchUniversityById(id: string): Promise<University | null> {
  try {
    const { data, error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Erreur lors de la récupération de l\'université par id:', error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Exception lors de la récupération de l\'université par id:', error);
    return null;
  }
}

// Nouvelles fonctions CRUD pour les universités
export async function createUniversity(university: University): Promise<University | null> {
  try {
    const { data, error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .insert(university)
      .select('*')
      .single();
    
    if (error) {
      console.error('Erreur lors de la création de l\'université:', error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Exception lors de la création de l\'université:', error);
    return null;
  }
}

export async function updateUniversity(university: University): Promise<University | null> {
  try {
    const { data, error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .update(university)
      .eq('id', university.id)
      .select('*')
      .single();
    
    if (error) {
      console.error('Erreur lors de la mise à jour de l\'université:', error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Exception lors de la mise à jour de l\'université:', error);
    return null;
  }
}

export async function deleteUniversity(id: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Erreur lors de la suppression de l\'université:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Exception lors de la suppression de l\'université:', error);
    return false;
  }
}
