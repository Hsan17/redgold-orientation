
import { useState, useEffect } from 'react';
import { University, Scholarship, AdmissionCriteria } from '@/types/university';
import { UniversityService, sampleData } from '@/services/university';
import { toast } from '@/components/ui/use-toast';
import { verifyAndInitializeDatabase, generateDatabaseReport } from '@/services/university/dbVerification';

export function useUniversities() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [admissionCriteria, setAdmissionCriteria] = useState<AdmissionCriteria[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [databaseStatus, setDatabaseStatus] = useState<'pending' | 'connected' | 'error'>('pending');

  // Fonction pour initialiser la base de données avec des données d'exemple si nécessaire
  const initializeDatabase = async () => {
    try {
      setLoading(true);
      console.log("Tentative d'initialisation de la base de données...");
      
      // Vérifier et initialiser la base de données si nécessaire
      const success = await verifyAndInitializeDatabase();
      
      if (success) {
        setDatabaseStatus('connected');
        console.log("Base de données vérifiée et initialisée avec succès");
        
        // Générer un rapport de la base de données (pour le débogage)
        await generateDatabaseReport();
      } else {
        setDatabaseStatus('error');
        setError('Erreur lors de l\'initialisation de la base de données. Les données locales seront utilisées.');
        console.error("Échec de l'initialisation de la base de données");
        
        // Utiliser les données d'exemple localement en cas d'échec
        setUniversities(sampleData.universities);
        setScholarships(sampleData.scholarships);
        setAdmissionCriteria(sampleData.admissionCriteria);
      }
      
      setInitialized(true);
    } catch (err) {
      console.error('Erreur lors de l\'initialisation de la base de données:', err);
      setDatabaseStatus('error');
      setError('Erreur lors de l\'initialisation de la base de données. Les données locales seront utilisées.');
      
      // Utiliser les données d'exemple localement en cas d'erreur
      setUniversities(sampleData.universities);
      setScholarships(sampleData.scholarships);
      setAdmissionCriteria(sampleData.admissionCriteria);
      
      setInitialized(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initialiser la base de données au chargement du composant
    initializeDatabase();
  }, []);

  useEffect(() => {
    // Charger les données seulement après l'initialisation et si la connexion est établie
    if (!initialized || databaseStatus !== 'connected') return;
    
    async function loadData() {
      try {
        setLoading(true);
        console.log("Chargement des données depuis Supabase...");
        
        const [universitiesData, scholarshipsData, admissionData] = await Promise.all([
          UniversityService.getAllUniversities(),
          UniversityService.getAllScholarships(),
          UniversityService.getAllAdmissionCriteria()
        ]);
        
        console.log(`Données chargées: ${universitiesData.length} universités, ${scholarshipsData.length} bourses, ${admissionData.length} critères d'admission`);
        
        // Si aucune donnée n'est trouvée dans Supabase, utiliser les données d'exemple
        if (universitiesData.length === 0) {
          console.log("Aucune université trouvée dans Supabase, utilisation des données d'exemple");
          setUniversities(sampleData.universities);
        } else {
          setUniversities(universitiesData);
        }
        
        if (scholarshipsData.length === 0) {
          console.log("Aucune bourse trouvée dans Supabase, utilisation des données d'exemple");
          setScholarships(sampleData.scholarships);
        } else {
          setScholarships(scholarshipsData);
        }
        
        if (admissionData.length === 0) {
          console.log("Aucun critère d'admission trouvé dans Supabase, utilisation des données d'exemple");
          setAdmissionCriteria(sampleData.admissionCriteria);
        } else {
          setAdmissionCriteria(admissionData);
        }
        
        setError(null);
      } catch (err) {
        console.error('Erreur lors du chargement des données universitaires:', err);
        setError('Erreur lors du chargement des données. Les données locales seront utilisées.');
        
        // Utiliser les données d'exemple en cas d'erreur
        setUniversities(sampleData.universities);
        setScholarships(sampleData.scholarships);
        setAdmissionCriteria(sampleData.admissionCriteria);
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, [initialized, databaseStatus]);

  // Fonction pour obtenir des recommandations d'universités
  const getRecommendations = async (preferences: {
    programs?: string[];
    region?: string;
    specializations?: string[];
    international?: boolean;
  }) => {
    try {
      setLoading(true);
      // Si la connexion à la base de données échoue, filtrez localement
      if (databaseStatus !== 'connected') {
        console.log('Recommandation locale utilisée (pas de connexion à la base de données)');
        // Logique de filtrage local basée sur les préférences
        let filtered = universities;
        
        if (preferences.international !== undefined) {
          filtered = filtered.filter(u => u.international === preferences.international);
        }
        
        if (preferences.region) {
          filtered = filtered.filter(u => u.region === preferences.region);
        }
        
        if (preferences.programs && preferences.programs.length > 0) {
          filtered = filtered.filter(u => {
            return preferences.programs!.some(program => u.programs.includes(program));
          });
        }
        
        if (preferences.specializations && preferences.specializations.length > 0) {
          filtered = filtered.filter(u => {
            return preferences.specializations!.some(spec => u.specializations.includes(spec));
          });
        }
        
        // Triez par pertinence (par exemple, par note)
        return filtered.sort((a, b) => b.rating - a.rating);
      }
      
      // Sinon, utiliser le service de recommandation qui interroge Supabase
      const recommendations = await UniversityService.getRecommendedUniversities(preferences);
      return recommendations;
    } catch (err) {
      console.error('Erreur lors de la génération des recommandations:', err);
      setError('Erreur lors de la génération des recommandations. Veuillez réessayer plus tard.');
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Fonctions CRUD pour les universités
  const createUniversity = async (university: University) => {
    try {
      if (databaseStatus !== 'connected') {
        toast({
          title: "Erreur",
          description: "Impossible de créer une université sans connexion à la base de données.",
          variant: "destructive"
        });
        return null;
      }
      return await UniversityService.createUniversity(university);
    } catch (err) {
      console.error('Erreur lors de la création de l\'université:', err);
      toast({
        title: "Erreur",
        description: "Impossible de créer l'université.",
        variant: "destructive"
      });
      return null;
    }
  };

  const updateUniversity = async (university: University) => {
    try {
      if (databaseStatus !== 'connected') {
        toast({
          title: "Erreur",
          description: "Impossible de mettre à jour une université sans connexion à la base de données.",
          variant: "destructive"
        });
        return null;
      }
      return await UniversityService.updateUniversity(university);
    } catch (err) {
      console.error('Erreur lors de la mise à jour de l\'université:', err);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour l'université.",
        variant: "destructive"
      });
      return null;
    }
  };

  const deleteUniversity = async (id: string, name: string) => {
    try {
      if (databaseStatus !== 'connected') {
        toast({
          title: "Erreur",
          description: "Impossible de supprimer une université sans connexion à la base de données.",
          variant: "destructive"
        });
        return false;
      }
      return await UniversityService.deleteUniversity(id, name);
    } catch (err) {
      console.error('Erreur lors de la suppression de l\'université:', err);
      toast({
        title: "Erreur",
        description: "Impossible de supprimer l'université.",
        variant: "destructive"
      });
      return false;
    }
  };

  // Fonction pour forcer la réinitialisation (utile pour le développement)
  const forceReinitialize = async () => {
    try {
      setLoading(true);
      const result = await UniversityService.forceReinitializeDatabase();
      if (result) {
        toast({
          title: "Base de données réinitialisée",
          description: "Les tables ont été recréées et remplies avec les données d'exemple.",
        });
        // Recharger les données
        await initializeDatabase();
      } else {
        toast({
          title: "Erreur",
          description: "Impossible de réinitialiser la base de données.",
          variant: "destructive"
        });
      }
    } catch (err) {
      console.error('Erreur lors de la réinitialisation forcée:', err);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la réinitialisation.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    universities,
    scholarships,
    admissionCriteria,
    loading,
    error,
    databaseStatus,
    getRecommendations,
    initializeDatabase,
    createUniversity,
    updateUniversity,
    deleteUniversity,
    forceReinitialize
  };
}
