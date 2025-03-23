
import { useState, useEffect } from 'react';
import { University, Scholarship, AdmissionCriteria } from '@/types/university';
import { UniversityService } from '@/services/universityService';

export function useUniversities() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [admissionCriteria, setAdmissionCriteria] = useState<AdmissionCriteria[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
  }, []);

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
    getRecommendations
  };
}
