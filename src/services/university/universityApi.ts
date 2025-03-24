
import { University } from "@/types/university";
import { supabase, TABLES } from "@/lib/supabase";
import { toast } from "@/components/ui/use-toast";

/**
 * Récupère toutes les universités
 */
export async function getAllUniversities(): Promise<University[]> {
  try {
    const { data, error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('*');
    
    if (error) {
      console.error('Erreur lors de la récupération des universités:', error);
      toast({
        title: "Erreur de chargement",
        description: "Impossible de récupérer les données des universités.",
        variant: "destructive"
      });
      return [];
    }
    
    console.log('Universités récupérées:', data?.length || 0);
    return data || [];
  } catch (error) {
    console.error('Exception lors de la récupération des universités:', error);
    toast({
      title: "Erreur de chargement",
      description: "Une erreur est survenue lors de la récupération des universités.",
      variant: "destructive"
    });
    return [];
  }
}

/**
 * Récupère une université par son identifiant
 */
export async function getUniversityById(id: string): Promise<University | undefined> {
  try {
    const { data, error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Erreur lors de la récupération de l\'université par id:', error);
      return undefined;
    }
    
    return data;
  } catch (error) {
    console.error('Exception lors de la récupération de l\'université par id:', error);
    return undefined;
  }
}

/**
 * Récupère les universités par région
 */
export async function getUniversitiesByRegion(region: string): Promise<University[]> {
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

/**
 * Récupère les universités par programme d'études
 */
export async function getUniversitiesByProgram(program: string): Promise<University[]> {
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

/**
 * Crée une nouvelle université
 */
export async function createUniversity(university: University): Promise<University | undefined> {
  try {
    const { data, error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .insert(university)
      .select('*')
      .single();
    
    if (error) {
      console.error('Erreur lors de la création de l\'université:', error);
      toast({
        title: "Erreur de création",
        description: "Impossible de créer la nouvelle université.",
        variant: "destructive"
      });
      return undefined;
    }
    
    toast({
      title: "Université créée",
      description: `L'université ${university.name} a été créée avec succès.`,
    });
    
    return data;
  } catch (error) {
    console.error('Exception lors de la création de l\'université:', error);
    toast({
      title: "Erreur de création",
      description: "Une erreur est survenue lors de la création de l'université.",
      variant: "destructive"
    });
    return undefined;
  }
}

/**
 * Met à jour une université existante
 */
export async function updateUniversity(university: University): Promise<University | undefined> {
  try {
    const { data, error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .update(university)
      .eq('id', university.id)
      .select('*')
      .single();
    
    if (error) {
      console.error('Erreur lors de la mise à jour de l\'université:', error);
      toast({
        title: "Erreur de mise à jour",
        description: "Impossible de mettre à jour l'université.",
        variant: "destructive"
      });
      return undefined;
    }
    
    toast({
      title: "Université mise à jour",
      description: `L'université ${university.name} a été mise à jour avec succès.`,
    });
    
    return data;
  } catch (error) {
    console.error('Exception lors de la mise à jour de l\'université:', error);
    toast({
      title: "Erreur de mise à jour",
      description: "Une erreur est survenue lors de la mise à jour de l'université.",
      variant: "destructive"
    });
    return undefined;
  }
}

/**
 * Supprime une université par son identifiant
 */
export async function deleteUniversity(id: string, name: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Erreur lors de la suppression de l\'université:', error);
      toast({
        title: "Erreur de suppression",
        description: "Impossible de supprimer l'université.",
        variant: "destructive"
      });
      return false;
    }
    
    toast({
      title: "Université supprimée",
      description: `L'université ${name} a été supprimée avec succès.`,
    });
    
    return true;
  } catch (error) {
    console.error('Exception lors de la suppression de l\'université:', error);
    toast({
      title: "Erreur de suppression",
      description: "Une erreur est survenue lors de la suppression de l'université.",
      variant: "destructive"
    });
    return false;
  }
}

/**
 * Récupère les universités internationales
 */
export async function getInternationalUniversities(): Promise<University[]> {
  try {
    const { data, error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('*')
      .eq('international', true);
    
    if (error) {
      console.error('Erreur lors de la récupération des universités internationales:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Exception lors de la récupération des universités internationales:', error);
    return [];
  }
}

/**
 * Récupère les universités nationales (non internationales)
 */
export async function getNationalUniversities(): Promise<University[]> {
  try {
    const { data, error } = await supabase
      .from(TABLES.UNIVERSITIES)
      .select('*')
      .is('international', null);
    
    if (error) {
      console.error('Erreur lors de la récupération des universités nationales:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Exception lors de la récupération des universités nationales:', error);
    return [];
  }
}
