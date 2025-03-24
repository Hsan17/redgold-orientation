
import { useState, useEffect } from "react";
import { University, Scholarship, AdmissionCriteria } from "@/types/university";
import { UniversityService } from "@/services/university";
import { sampleData } from "@/services/university";
import { useToast } from "@/hooks/use-toast";

export const useUniversities = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [admissionCriteria, setAdmissionCriteria] = useState<AdmissionCriteria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Verify and initialize the database
        const dbStatus = await UniversityService.verifyAndInitializeDatabase();
        
        if (dbStatus.initialized) {
          // If the database is properly initialized, fetch data from it
          const fetchedUniversities = await UniversityService.getAllUniversities();
          const fetchedScholarships = await UniversityService.getAllScholarships();
          const fetchedAdmissionCriteria = await UniversityService.getAllAdmissionCriteria();
          
          setUniversities(fetchedUniversities);
          setScholarships(fetchedScholarships);
          setAdmissionCriteria(fetchedAdmissionCriteria);
          
          console.log(`Loaded ${fetchedUniversities.length} universities from database`);
          console.log(`Loaded ${fetchedScholarships.length} scholarships from database`);
        } else {
          // If there was an issue with the database, use sample data
          console.warn("Database initialization failed, using sample data instead");
          toast({
            title: "Connexion à la base de données impossible",
            description: "Utilisation des données de démonstration à la place.",
            variant: "destructive",
          });
          
          setUniversities(sampleData.universities);
          setScholarships(sampleData.internationalScholarships);
          setAdmissionCriteria(sampleData.admissionCriteria);
        }
      } catch (err) {
        console.error("Error fetching university data:", err);
        setError("Erreur lors de la récupération des données. Utilisation des données de démonstration à la place.");
        
        // Fallback to sample data in case of error
        setUniversities(sampleData.universities);
        setScholarships(sampleData.internationalScholarships);
        setAdmissionCriteria(sampleData.admissionCriteria);
        
        toast({
          title: "Erreur de chargement",
          description: "Impossible de récupérer les données des universités. Utilisation des données de démonstration.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toast]);

  // Function to get recommendations based on preferences
  const getRecommendations = async (preferences: {
    programs?: string[];
    region?: string;
    specializations?: string[];
    international?: boolean;
  }): Promise<University[]> => {
    try {
      // Try to get recommendations from the service
      return await UniversityService.getRecommendedUniversities(preferences);
    } catch (err) {
      console.error("Error getting recommendations:", err);
      
      // If that fails, filter the local universities array
      let results = [...universities];
      
      if (preferences.international !== undefined) {
        results = results.filter(u => !!u.international === preferences.international);
      }
      
      if (preferences.region) {
        results = results.filter(u => u.region === preferences.region);
      }
      
      if (preferences.programs && preferences.programs.length > 0) {
        results = results.filter(university => 
          university.programs.some(program => 
            preferences.programs?.some(p => program.toLowerCase().includes(p.toLowerCase()))
          )
        );
      }
      
      if (preferences.specializations && preferences.specializations.length > 0) {
        results = results.filter(university => 
          university.specializations.some(spec => 
            preferences.specializations?.some(s => spec.toLowerCase().includes(s.toLowerCase()))
          )
        );
      }
      
      return results;
    }
  };

  // Function to reinitialize the database with sample data
  const reinitializeDatabase = async () => {
    try {
      setLoading(true);
      
      // Force reinitialization of database tables and data
      await UniversityService.forceReinitializeDatabase();
      
      // Fetch new data
      const fetchedUniversities = await UniversityService.getAllUniversities();
      const fetchedScholarships = await UniversityService.getAllScholarships();
      const fetchedAdmissionCriteria = await UniversityService.getAllAdmissionCriteria();
      
      setUniversities(fetchedUniversities);
      setScholarships(fetchedScholarships);
      setAdmissionCriteria(fetchedAdmissionCriteria);
      
      setError(null);
      
      toast({
        title: "Base de données réinitialisée",
        description: "Les données ont été rechargées avec succès.",
        variant: "default",
      });
    } catch (err) {
      console.error("Error reinitializing database:", err);
      setError("Erreur lors de la réinitialisation de la base de données.");
      
      // Fallback to sample data
      setUniversities(sampleData.universities);
      setScholarships(sampleData.internationalScholarships);
      setAdmissionCriteria(sampleData.admissionCriteria);
      
      toast({
        title: "Erreur de réinitialisation",
        description: "Impossible de réinitialiser la base de données.",
        variant: "destructive",
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
    reinitializeDatabase,
    getRecommendations
  };
};
