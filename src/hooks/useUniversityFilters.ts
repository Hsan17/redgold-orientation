
import { useState, useCallback, useMemo } from 'react';
import { University } from '@/types/university';

export function useUniversityFilters(universities: University[]) {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const [programFilter, setProgramFilter] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<string>("tunisie");
  const [employmentRateSort, setEmploymentRateSort] = useState<"none" | "asc" | "desc">("none");
  const [ratingSort, setRatingSort] = useState<"none" | "asc" | "desc">("none");
  const [selectedSpecializations, setSelectedSpecializations] = useState<string[]>([]);
  
  // Get all unique specializations
  const allSpecializations = useMemo(() => {
    return Array.from(
      new Set(
        universities.flatMap((uni) => uni.specializations)
      )
    ).sort();
  }, [universities]);

  const toggleSpecialization = useCallback((specialization: string) => {
    setSelectedSpecializations(prev => {
      if (prev.includes(specialization)) {
        return prev.filter(s => s !== specialization);
      } else {
        return [...prev, specialization];
      }
    });
  }, []);

  const clearFilters = useCallback(() => {
    setRegionFilter("all");
    setProgramFilter("all");
    setEmploymentRateSort("none");
    setRatingSort("none");
    setSelectedSpecializations([]);
    setSearchTerm("");
  }, []);

  const hasActiveFilters = useCallback(() => {
    return regionFilter !== "all" || 
           programFilter !== "all" || 
           employmentRateSort !== "none" ||
           ratingSort !== "none" ||
           selectedSpecializations.length > 0 ||
           searchTerm !== "";
  }, [regionFilter, programFilter, employmentRateSort, ratingSort, selectedSpecializations, searchTerm]);

  const toggleEmploymentRateSort = useCallback(() => {
    setEmploymentRateSort(current => {
      if (current === "none") {
        setRatingSort("none");
        return "desc";
      }
      if (current === "desc") return "asc";
      return "none";
    });
  }, []);

  const toggleRatingSort = useCallback(() => {
    setRatingSort(current => {
      if (current === "none") {
        setEmploymentRateSort("none");
        return "desc";
      }
      if (current === "desc") return "asc";
      return "none";
    });
  }, []);

  const filteredUniversities = useMemo(() => {
    return universities
      .filter((university) => {
        // Filter by tab (Tunisia vs International)
        const matchesTab = activeTab === "tunisie" 
          ? !university.international 
          : university.international;

        // Search term filter
        const matchesSearch = searchTerm === "" || 
          university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          university.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          university.specializations.some((spec) =>
            spec.toLowerCase().includes(searchTerm.toLowerCase())
          );

        // Region filter (only for Tunisia)
        const matchesRegion = regionFilter === "all" || university.region === regionFilter;

        // Program filter
        const matchesProgram = programFilter === "all" ||
          university.programs.includes(programFilter);
          
        // Specialization filter
        const matchesSpecialization = selectedSpecializations.length === 0 ||
          university.specializations.some(spec => selectedSpecializations.includes(spec));

        return matchesTab && matchesSearch && matchesRegion && matchesProgram && matchesSpecialization;
      })
      .sort((a, b) => {
        // Sort by employment rate
        if (employmentRateSort === "asc") {
          return a.employmentRate - b.employmentRate;
        } else if (employmentRateSort === "desc") {
          return b.employmentRate - a.employmentRate;
        }
        
        // Sort by rating
        if (ratingSort === "asc") {
          return a.rating - b.rating;
        } else if (ratingSort === "desc") {
          return b.rating - a.rating;
        }
        
        return 0;
      });
  }, [
    universities, 
    activeTab, 
    searchTerm, 
    regionFilter, 
    programFilter, 
    employmentRateSort, 
    ratingSort, 
    selectedSpecializations
  ]);

  return {
    searchTerm,
    setSearchTerm,
    regionFilter,
    setRegionFilter,
    programFilter,
    setProgramFilter,
    activeTab,
    setActiveTab,
    employmentRateSort,
    setEmploymentRateSort,
    ratingSort,
    setRatingSort,
    selectedSpecializations,
    setSelectedSpecializations,
    allSpecializations,
    filteredUniversities,
    toggleSpecialization,
    clearFilters,
    hasActiveFilters,
    toggleEmploymentRateSort,
    toggleRatingSort
  };
}
