
import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Globe } from "lucide-react";
import TunisiaTabContent from "./tabs/TunisiaTabContent";
import InternationalTabContent from "./tabs/InternationalTabContent";
import { useUniversityFilters } from "@/hooks/useUniversityFilters";
import { useUniversities } from "@/hooks/useUniversities";
import { useRecommendation } from "@/contexts/RecommendationContext";

const UniversityRecommendation = () => {
  const { universities, scholarships, loading } = useUniversities();
  const { userPreferences } = useRecommendation();
  
  const {
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
  } = useUniversityFilters(universities);

  // Apply user preferences from context if available
  useEffect(() => {
    if (userPreferences) {
      if (userPreferences.region) {
        setRegionFilter(userPreferences.region);
      }
      
      if (userPreferences.programs && userPreferences.programs.length > 0) {
        setProgramFilter(userPreferences.programs[0]);
      }
      
      if (userPreferences.specializations && userPreferences.specializations.length > 0) {
        setSelectedSpecializations(userPreferences.specializations);
      }
      
      if (userPreferences.international !== undefined) {
        setActiveTab(userPreferences.international ? "international" : "tunisie");
      }
    }
  }, [userPreferences, setRegionFilter, setProgramFilter, setSelectedSpecializations, setActiveTab]);

  if (loading) {
    return <div className="text-center py-10">Chargement des données universitaires...</div>;
  }

  // Filter scholarships and universities for the international tab
  const internationalUniversities = universities.filter(u => u.international);

  return (
    <div className="glass-card rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-serif font-semibold text-gradient-burgundy-gold mb-6">Trouvez votre établissement idéal</h3>
      
      {/* Tabs for Tunisia vs International */}
      <Tabs 
        value={activeTab}
        onValueChange={setActiveTab}
        className="mb-8"
      >
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger 
            value="tunisie" 
            className="data-[state=active]:bg-burgundy-600 data-[state=active]:text-white"
          >
            <Building className="h-4 w-4 mr-2" />
            Universités en Tunisie
          </TabsTrigger>
          <TabsTrigger 
            value="international"
            className="data-[state=active]:bg-gold-500 data-[state=active]:text-white"
          >
            <Globe className="h-4 w-4 mr-2" />
            Études à l'étranger
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="tunisie">
          <TunisiaTabContent 
            filteredUniversities={filteredUniversities.filter(u => !u.international)}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            regionFilter={regionFilter}
            setRegionFilter={setRegionFilter}
            programFilter={programFilter}
            setProgramFilter={setProgramFilter}
            employmentRateSort={employmentRateSort}
            setEmploymentRateSort={setEmploymentRateSort}
            ratingSort={ratingSort}
            setRatingSort={setRatingSort}
            selectedSpecializations={selectedSpecializations}
            setSelectedSpecializations={setSelectedSpecializations}
            allSpecializations={allSpecializations}
            clearFilters={clearFilters}
            hasActiveFilters={hasActiveFilters}
            toggleEmploymentRateSort={toggleEmploymentRateSort}
            toggleRatingSort={toggleRatingSort}
            toggleSpecialization={toggleSpecialization}
          />
        </TabsContent>
        
        <TabsContent value="international">
          <InternationalTabContent 
            scholarships={scholarships}
            universities={filteredUniversities.filter(u => u.international)} 
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UniversityRecommendation;
