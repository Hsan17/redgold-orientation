
import { Scholarship } from "@/types/university";
import { supabase, TABLES } from "@/lib/supabase";

/**
 * Récupère toutes les bourses d'études
 */
export async function getAllScholarships(): Promise<Scholarship[]> {
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

/**
 * Récupère une bourse par son identifiant
 */
export async function getScholarshipById(id: string): Promise<Scholarship | undefined> {
  try {
    const { data, error } = await supabase
      .from(TABLES.SCHOLARSHIPS)
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Erreur lors de la récupération de la bourse par id:', error);
      return undefined;
    }
    
    return data;
  } catch (error) {
    console.error('Exception lors de la récupération de la bourse par id:', error);
    return undefined;
  }
}

/**
 * Crée une nouvelle bourse
 */
export async function createScholarship(scholarship: Scholarship): Promise<Scholarship | undefined> {
  try {
    const { data, error } = await supabase
      .from(TABLES.SCHOLARSHIPS)
      .insert(scholarship)
      .select('*')
      .single();
    
    if (error) {
      console.error('Erreur lors de la création de la bourse:', error);
      return undefined;
    }
    
    return data;
  } catch (error) {
    console.error('Exception lors de la création de la bourse:', error);
    return undefined;
  }
}

/**
 * Met à jour une bourse existante
 */
export async function updateScholarship(scholarship: Scholarship): Promise<Scholarship | undefined> {
  try {
    const { data, error } = await supabase
      .from(TABLES.SCHOLARSHIPS)
      .update(scholarship)
      .eq('id', scholarship.id)
      .select('*')
      .single();
    
    if (error) {
      console.error('Erreur lors de la mise à jour de la bourse:', error);
      return undefined;
    }
    
    return data;
  } catch (error) {
    console.error('Exception lors de la mise à jour de la bourse:', error);
    return undefined;
  }
}

/**
 * Supprime une bourse par son identifiant
 */
export async function deleteScholarship(id: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from(TABLES.SCHOLARSHIPS)
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Erreur lors de la suppression de la bourse:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Exception lors de la suppression de la bourse:', error);
    return false;
  }
}

/**
 * Récupère les bourses par pays
 */
export async function getScholarshipsByCountry(country: string): Promise<Scholarship[]> {
  try {
    const { data, error } = await supabase
      .from(TABLES.SCHOLARSHIPS)
      .select('*')
      .eq('country', country);
    
    if (error) {
      console.error('Erreur lors de la récupération des bourses par pays:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Exception lors de la récupération des bourses par pays:', error);
    return [];
  }
}
