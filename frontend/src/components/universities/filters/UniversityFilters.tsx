
import React from "react";
import { Search, Filter, X, ArrowUpDown, TrendingUp, Star } from "lucide-react";

type FilterProps = {
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

const UniversityFilters: React.FC<FilterProps> = ({
  searchTerm,
  setSearchTerm,
  regionFilter,
  setRegionFilter,
  programFilter,
  setProgramFilter,
  employmentRateSort,
  ratingSort,
  selectedSpecializations,
  allSpecializations,
  clearFilters,
  hasActiveFilters,
  toggleEmploymentRateSort,
  toggleRatingSort,
  toggleSpecialization
}) => {
  return (
    <div className="mb-8 space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Rechercher une université, une localisation ou une spécialisation..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2 items-center">
        <Filter className="h-5 w-5 text-burgundy-600 mr-1" />
        <span className="text-sm font-medium text-gray-700 mr-2">Filtres:</span>
        
        {hasActiveFilters() && (
          <button 
            onClick={clearFilters}
            className="filter-chip bg-burgundy-50 text-burgundy-600 hover:bg-burgundy-100"
          >
            <X className="h-3 w-3 mr-1" /> Effacer tous les filtres
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="region-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Région
          </label>
          <select
            id="region-filter"
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy"
          >
            <option value="all">Toutes les régions</option>
            <option value="tunis">Grand Tunis</option>
            <option value="nord">Nord</option>
            <option value="nord-ouest">Nord-Ouest</option>
            <option value="sahel">Sahel</option>
            <option value="centre">Centre</option>
            <option value="sud">Sud</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="program-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Programme
          </label>
          <select
            id="program-filter"
            value={programFilter}
            onChange={(e) => setProgramFilter(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy"
          >
            <option value="all">Tous les programmes</option>
            <option value="Ingénierie">Ingénierie</option>
            <option value="Médecine">Médecine</option>
            <option value="Sciences">Sciences</option>
            <option value="Économie">Économie</option>
            <option value="Gestion">Gestion</option>
            <option value="Business">Business</option>
            <option value="Langues">Langues</option>
            <option value="Architecture">Architecture</option>
            <option value="Pharmacie">Pharmacie</option>
          </select>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-medium text-gray-700">
              Taux d'emploi
            </label>
            <button 
              onClick={toggleEmploymentRateSort}
              className={`text-xs flex items-center ${
                employmentRateSort !== "none" ? "text-burgundy-600 font-medium" : "text-gray-500"
              }`}
            >
              <ArrowUpDown className={`h-3 w-3 mr-1 ${
                employmentRateSort === "desc" ? "rotate-180" : ""
              }`} />
              {employmentRateSort === "none" ? "Trier" : employmentRateSort === "desc" ? "Décroissant" : "Croissant"}
            </button>
          </div>
          <div className="h-10 px-4 py-2 rounded-lg border border-gray-300 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-burgundy mr-2" />
            {employmentRateSort === "none" 
              ? "Non filtré" 
              : `Tri ${employmentRateSort === "desc" ? "décroissant" : "croissant"}`}
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-medium text-gray-700">
              Évaluation
            </label>
            <button 
              onClick={toggleRatingSort}
              className={`text-xs flex items-center ${
                ratingSort !== "none" ? "text-burgundy-600 font-medium" : "text-gray-500"
              }`}
            >
              <ArrowUpDown className={`h-3 w-3 mr-1 ${
                ratingSort === "desc" ? "rotate-180" : ""
              }`} />
              {ratingSort === "none" ? "Trier" : ratingSort === "desc" ? "Décroissant" : "Croissant"}
            </button>
          </div>
          <div className="h-10 px-4 py-2 rounded-lg border border-gray-300 flex items-center text-sm">
            <Star className="h-4 w-4 text-gold mr-2" />
            {ratingSort === "none" 
              ? "Non filtré" 
              : `Tri ${ratingSort === "desc" ? "décroissant" : "croissant"}`}
          </div>
        </div>
      </div>
      
      {/* Specialization chips */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Spécialisations
        </label>
        <div className="flex flex-wrap gap-2">
          {allSpecializations.map((spec) => (
            <button
              key={spec}
              onClick={() => toggleSpecialization(spec)}
              className={`filter-chip ${
                selectedSpecializations.includes(spec)
                  ? "filter-chip-active"
                  : "filter-chip-inactive"
              }`}
            >
              {spec}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityFilters;
