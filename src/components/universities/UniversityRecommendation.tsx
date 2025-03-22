
import React, { useState, useEffect } from "react";
import { Search, MapPin, GraduationCap, UsersRound, TrendingUp, Star, Globe, Filter, X, ArrowUpDown, Building, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  international?: boolean;
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
  // International Universities
  {
    id: "paris1",
    name: "Université Paris 1 Panthéon-Sorbonne",
    location: "Paris, France",
    region: "international",
    programs: ["Droit", "Économie", "Sciences Humaines", "Arts"],
    employmentRate: 89,
    specializations: ["Droit International", "Finance", "Histoire de l'Art", "Sciences Politiques"],
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1541679486598-5b8a1c9ce379?q=80&w=800&auto=format&fit=crop",
    international: true,
  },
  {
    id: "mcgill",
    name: "McGill University",
    location: "Montréal, Canada",
    region: "international",
    programs: ["Ingénierie", "Médecine", "Commerce", "Arts"],
    employmentRate: 92,
    specializations: ["Intelligence Artificielle", "Neuroscience", "Management International", "Génie Biomédical"],
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=800&auto=format&fit=crop",
    international: true,
  },
];

const internationaScholarships = [
  {
    id: "erasmus",
    name: "Erasmus Mundus",
    country: "Union Européenne",
    amount: "€24,000/an",
    requirements: ["Baccalauréat avec mention", "DELF B2 ou IELTS"],
    deadline: "15 janvier 2025",
    link: "#erasmus"
  },
  {
    id: "fulbright",
    name: "Bourse Fulbright",
    country: "États-Unis",
    amount: "$40,000/an",
    requirements: ["Baccalauréat avec mention très bien", "TOEFL iBT 90+"],
    deadline: "1 février 2025",
    link: "#fulbright"
  },
  {
    id: "chevening",
    name: "Chevening Scholarships",
    country: "Royaume-Uni",
    amount: "£30,000/an",
    requirements: ["Licence", "IELTS 6.5+", "Expérience professionnelle"],
    deadline: "3 novembre 2024",
    link: "#chevening"
  },
  {
    id: "daad",
    name: "DAAD Scholarships",
    country: "Allemagne",
    amount: "€850/mois",
    requirements: ["Baccalauréat avec mention", "Allemand B1 ou Anglais B2"],
    deadline: "15 octobre 2024",
    link: "#daad"
  },
];

const UniversityRecommendation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const [programFilter, setProgramFilter] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<string>("tunisie");
  const [employmentRateSort, setEmploymentRateSort] = useState<"none" | "asc" | "desc">("none");
  const [ratingSort, setRatingSort] = useState<"none" | "asc" | "desc">("none");
  const [selectedSpecializations, setSelectedSpecializations] = useState<string[]>([]);
  
  // Get all unique specializations
  const allSpecializations = Array.from(
    new Set(
      universities.flatMap((uni) => uni.specializations)
    )
  ).sort();

  const toggleSpecialization = (specialization: string) => {
    if (selectedSpecializations.includes(specialization)) {
      setSelectedSpecializations(selectedSpecializations.filter(s => s !== specialization));
    } else {
      setSelectedSpecializations([...selectedSpecializations, specialization]);
    }
  };

  const clearFilters = () => {
    setRegionFilter("all");
    setProgramFilter("all");
    setEmploymentRateSort("none");
    setRatingSort("none");
    setSelectedSpecializations([]);
    setSearchTerm("");
  };

  const hasActiveFilters = () => {
    return regionFilter !== "all" || 
           programFilter !== "all" || 
           employmentRateSort !== "none" ||
           ratingSort !== "none" ||
           selectedSpecializations.length > 0 ||
           searchTerm !== "";
  };

  const filteredUniversities = universities
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

  const toggleEmploymentRateSort = () => {
    setEmploymentRateSort(current => {
      if (current === "none") return "desc";
      if (current === "desc") return "asc";
      return "none";
    });
    // Reset rating sort if employment sort is active
    if (employmentRateSort === "none") {
      setRatingSort("none");
    }
  };

  const toggleRatingSort = () => {
    setRatingSort(current => {
      if (current === "none") return "desc";
      if (current === "desc") return "asc";
      return "none";
    });
    // Reset employment sort if rating sort is active
    if (ratingSort === "none") {
      setEmploymentRateSort("none");
    }
  };

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
        
        <TabsContent value="tunisie" className="mt-0 animate-fade-in">
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
          
          {/* University cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversities.length > 0 ? (
              filteredUniversities.map((university) => (
                <div key={university.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 animated-card">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="flex items-center gap-1 text-white">
                        <MapPin className="h-4 w-4" />
                        <span>{university.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-serif font-semibold text-burgundy">{university.name}</h4>
                      <div className="flex items-center gap-1 bg-gold-50 px-2 py-1 rounded">
                        <Star className="h-4 w-4 text-gold fill-gold" />
                        <span className="font-medium">{university.rating}</span>
                      </div>
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
                    
                    <Button variant="gradient-burgundy-gold" className="w-full mt-2">
                      Voir les détails
                    </Button>
                  </div>
                </div>
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
        </TabsContent>
        
        <TabsContent value="international" className="mt-0 animate-fade-in">
          <div className="bg-gradient-to-r from-burgundy-50 to-gold-50 rounded-xl p-6 mb-8">
            <h4 className="text-xl font-serif font-semibold text-burgundy mb-4">
              Bourses d'études à l'étranger
            </h4>
            <p className="text-gray-700 mb-6">
              Découvrez les opportunités de bourses d'études pour poursuivre votre parcours académique à l'international.
              Les programmes ci-dessous offrent un financement complet ou partiel selon votre profil académique.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {internationaScholarships.map((scholarship) => (
                <div key={scholarship.id} className="glass-card-gold p-4 rounded-lg animate-float">
                  <div className="flex justify-between items-start mb-3">
                    <h5 className="font-medium text-burgundy">{scholarship.name}</h5>
                    <span className="text-gold-600 text-sm font-bold">{scholarship.amount}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-700 mb-2">
                    <Globe className="h-4 w-4 mr-2 text-burgundy" />
                    {scholarship.country}
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-xs text-gray-600 mb-1">Critères d'éligibilité:</p>
                    <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                      {scholarship.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-red-600">
                      Date limite: {scholarship.deadline}
                    </span>
                    <Button variant="gradient-burgundy-gold" size="sm">
                      Plus d'infos
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="outline-burgundy" className="w-full">
              <Award className="mr-2 h-4 w-4" />
              Voir toutes les bourses disponibles
            </Button>
          </div>
          
          {/* International Universities */}
          <h4 className="text-xl font-serif font-semibold text-burgundy mb-4">
            Universités Partenaires à l'International
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {filteredUniversities.map((university) => (
              <div key={university.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 animated-card">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="international-badge animate-gentle-pulse">
                      <Globe className="h-3 w-3" /> International
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center gap-1 text-white">
                      <MapPin className="h-4 w-4" />
                      <span>{university.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-serif font-semibold text-burgundy">{university.name}</h4>
                    <div className="flex items-center gap-1 bg-gold-50 px-2 py-1 rounded">
                      <Star className="h-4 w-4 text-gold fill-gold" />
                      <span className="font-medium">{university.rating}</span>
                    </div>
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
                  
                  <Button variant="gradient-gold-burgundy" className="w-full mt-2">
                    Voir les détails
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Vous souhaitez découvrir plus d'opportunités internationales ou être accompagné dans votre démarche ?
            </p>
            <Button variant="gradient-burgundy-gold" size="lg" className="animate-gentle-pulse">
              <Globe className="mr-2 h-5 w-5" />
              Consultation personnalisée
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UniversityRecommendation;
