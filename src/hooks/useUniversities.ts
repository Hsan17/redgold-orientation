
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
      
      // Vérifier et initialiser la base de données si nécessaire
      const success = await verifyAndInitializeDatabase();
      
      if (success) {
        setDatabaseStatus('connected');
        console.log("Base de données vérifiée et initialisée avec succès");
        
        // Générer un rapport de la base de données (pour le débogage)
        await generateDatabaseReport();
      } else {
        setDatabaseStatus('error');
        setError('Erreur lors de l\'initialisation de la base de données. Veuillez réessayer plus tard.');
        console.error("Échec de l'initialisation de la base de données");
      }
      
      setInitialized(true);
    } catch (err) {
      console.error('Erreur lors de l\'initialisation de la base de données:', err);
      setDatabaseStatus('error');
      setError('Erreur lors de l\'initialisation de la base de données. Veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initialiser la base de données au chargement du composant
    initializeDatabase();
  }, []);

  useEffect(() => {
    // Charger les données seulement après l'initialisation
    if (!initialized) return;
    
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
        
        setUniversities(universitiesData);
        setScholarships(scholarshipsData);
        setAdmissionCriteria(admissionData);
        setError(null);
      } catch (err) {
        console.error('Erreur lors du chargement des données universitaires:', err);
        setError('Erreur lors du chargement des données. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, [initialized]);

  // Fonction pour obtenir des recommandations d'universités
  const getRecommendations = async (preferences: {
    programs?: string[];
    region?: string;
    specializations?: string[];
    international?: boolean;
  }) => {
    try {
      setLoading(true);
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
    return await UniversityService.createUniversity(university);
  };

  const updateUniversity = async (university: University) => {
    return await UniversityService.updateUniversity(university);
  };

  const deleteUniversity = async (id: string, name: string) => {
    return await UniversityService.deleteUniversity(id, name);
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
    deleteUniversity
  };
}
