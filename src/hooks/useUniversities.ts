
import { useState, useEffect } from 'react';
import { University, Scholarship, AdmissionCriteria } from '@/types/university';
import { UniversityService, sampleData } from '@/services/university';
import { toast } from '@/components/ui/use-toast';

export function useUniversities() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [admissionCriteria, setAdmissionCriteria] = useState<AdmissionCriteria[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);

  // Function to initialize database with sample data if needed
  const initializeDatabase = async () => {
    try {
      setLoading(true);
      // Check if we have data already
      const existingUniversities = await UniversityService.getAllUniversities();
      
      if (existingUniversities.length === 0) {
        // Initialize with sample data
        await UniversityService.initializeDatabase(
          sampleData.universities,
          sampleData.internationalScholarships,
          sampleData.admissionCriteria
        );
        
        toast({
          title: "Base de données initialisée",
          description: "Les données d'exemple ont été ajoutées à la base de données Supabase.",
        });
      }
      
      setInitialized(true);
    } catch (err) {
      console.error('Error initializing database:', err);
      setError('Erreur lors de l\'initialisation de la base de données. Veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initialize the database first
    initializeDatabase();
  }, []);

  useEffect(() => {
    // Only load data after initialization
    if (!initialized) return;
    
    async function loadData() {
      try {
        setLoading(true);
        const [universitiesData, scholarshipsData, admissionData] = await Promise.all([
          UniversityService.getAllUniversities(),
          UniversityService.getAllScholarships(),
          UniversityService.getAllAdmissionCriteria()
        ]);
        
        setUniversities(universitiesData);
        setScholarships(scholarshipsData);
        setAdmissionCriteria(admissionData);
        setError(null);
      } catch (err) {
        console.error('Error loading university data:', err);
        setError('Erreur lors du chargement des données. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, [initialized]);

  // Function to get university recommendations
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
      console.error('Error getting recommendations:', err);
      setError('Erreur lors de la génération des recommandations. Veuillez réessayer plus tard.');
      return [];
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
    getRecommendations,
    initializeDatabase
  };
}
