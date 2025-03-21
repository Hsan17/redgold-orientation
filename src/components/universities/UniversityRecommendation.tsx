
import React, { useState } from "react";
import { Search, MapPin, GraduationCap, UsersRound, TrendingUp, Star } from "lucide-react";

type University = {
  id: string;
  name: string;
  location: string;
  region: string;
  programs: string[];
  employmentRate: number;
  specializations: string[];
  rating: number;
  image: string;
};

const universities: University[] = [
  {
    id: "utm",
    name: "Université de Tunis El Manar",
    location: "Tunis",
    region: "tunis",
    programs: ["Ingénierie", "Médecine", "Sciences", "Économie"],
    employmentRate: 86,
    specializations: ["Médecine", "Informatique", "Génie Électrique", "Finance"],
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "usf",
    name: "Université de Sfax",
    location: "Sfax",
    region: "sahel",
    programs: ["Ingénierie", "Sciences", "Gestion", "Langues"],
    employmentRate: 82,
    specializations: ["Génie Mécanique", "Chimie", "Informatique", "Gestion"],
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ucar",
    name: "Université de Carthage",
    location: "Carthage",
    region: "tunis",
    programs: ["Business", "Sciences Politiques", "Architecture", "Ingénierie"],
    employmentRate: 84,
    specializations: ["Relations Internationales", "Architecture", "Commerce", "Télécommunications"],
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "umk",
    name: "Université de Monastir",
    location: "Monastir",
    region: "sahel",
    programs: ["Médecine", "Sciences", "Pharmacie", "Odontologie"],
    employmentRate: 88,
    specializations: ["Médecine", "Dentisterie", "Biologie", "Pharmacie"],
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
  },
];

const UniversityRecommendation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const [programFilter, setProgramFilter] = useState<string>("all");

  const filteredUniversities = universities.filter((university) => {
    // Search term filter
    const matchesSearch =
      university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.specializations.some((spec) =>
        spec.toLowerCase().includes(searchTerm.toLowerCase())
      );

    // Region filter
    const matchesRegion =
      regionFilter === "all" || university.region === regionFilter;

    // Program filter
    const matchesProgram =
      programFilter === "all" ||
      university.programs.includes(programFilter);

    return matchesSearch && matchesRegion && matchesProgram;
  });

  return (
    <div className="glass-card rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-serif font-semibold text-burgundy mb-6">Universités Recommandées</h3>
      
      {/* Search and filters */}
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
      </div>
      
      {/* University cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredUniversities.length > 0 ? (
          filteredUniversities.map((university) => (
            <div key={university.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img
                  src={university.image}
                  alt={university.name}
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xl font-serif font-semibold text-burgundy">{university.name}</h4>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-gold fill-gold" />
                    <span className="font-medium">{university.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 text-gray-600 mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{university.location}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-burgundy" />
                    <span className="text-sm">
                      {university.programs.length} programmes
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-burgundy" />
                    <span className="text-sm">
                      {university.employmentRate}% emploi
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Spécialisations:</p>
                  <div className="flex flex-wrap gap-2">
                    {university.specializations.map((spec, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-burgundy/10 text-burgundy rounded-full text-xs"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full btn-outline mt-2">
                  Voir les détails
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12">
            <div className="mx-auto w-16 h-16 rounded-full bg-burgundy/10 flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-burgundy" />
            </div>
            <h4 className="text-xl font-medium text-burgundy mb-2">
              Aucune université trouvée
            </h4>
            <p className="text-gray-600 max-w-md mx-auto">
              Essayez de modifier vos critères de recherche ou vos filtres
              pour trouver des universités correspondant à vos préférences.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversityRecommendation;
