
import React from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import UniversityFilters from "../filters/UniversityFilters";
import UniversityCard from "../cards/UniversityCard";
import { University } from "@/types/university";

type TunisiaTabContentProps = {
  filteredUniversities: University[];
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  regionFilter: string;
  setRegionFilter: (value: string) => void;
  programFilter: string;
  setProgramFilter: (value: string) => void;
  employmentRateSort: "none" | "asc" | "desc";
  setEmploymentRateSort: (value: "none" | "asc" | "desc") => void;
  ratingSort: "none" | "asc" | "desc";
  setRatingSort: (value: "none" | "asc" | "desc") => void;
  selectedSpecializations: string[];
  setSelectedSpecializations: (value: string[]) => void;
  allSpecializations: string[];
  clearFilters: () => void;
  hasActiveFilters: () => boolean;
  toggleEmploymentRateSort: () => void;
  toggleRatingSort: () => void;
  toggleSpecialization: (specialization: string) => void;
};

const TunisiaTabContent: React.FC<TunisiaTabContentProps> = ({
  filteredUniversities,
  searchTerm,
  setSearchTerm,
  regionFilter,
  setRegionFilter,
  programFilter,
  setProgramFilter,
  employmentRateSort,
  setEmploymentRateSort,
  ratingSort,
  setRatingSort,
  selectedSpecializations,
  setSelectedSpecializations,
  allSpecializations,
  clearFilters,
  hasActiveFilters,
  toggleEmploymentRateSort,
  toggleRatingSort,
  toggleSpecialization
}) => {
  return (
    <div className="mt-0 animate-fade-in">
      <UniversityFilters 
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
      
      {/* University cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUniversities.length > 0 ? (
          filteredUniversities.map((university) => (
            <UniversityCard key={university.id} university={university} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="mx-auto w-16 h-16 rounded-full bg-burgundy/10 flex items-center justify-center mb-4 animate-soft-fade">
              <Search className="h-8 w-8 text-burgundy" />
            </div>
            <h4 className="text-xl font-medium text-burgundy mb-2">
              Aucune université trouvée
            </h4>
            <p className="text-gray-600 max-w-md mx-auto">
              Essayez de modifier vos critères de recherche ou vos filtres
              pour trouver des universités correspondant à vos préférences.
            </p>
            {hasActiveFilters() && (
              <Button 
                variant="outline-burgundy" 
                className="mt-4"
                onClick={clearFilters}
              >
                <X className="h-4 w-4 mr-2" />
                Effacer tous les filtres
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TunisiaTabContent;
