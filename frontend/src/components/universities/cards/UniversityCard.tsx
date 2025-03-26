
import React from "react";
import { MapPin, GraduationCap, TrendingUp, Star, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { University } from "@/types/university";

type UniversityCardProps = {
  university: University;
  isInternational?: boolean;
};

const UniversityCard: React.FC<UniversityCardProps> = ({ university, isInternational = false }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 animated-card">
      <div className="h-48 overflow-hidden relative">
        <img
          src={university.image}
          alt={university.name}
          className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
        />
        {isInternational && (
          <div className="absolute top-3 right-3">
            <span className="international-badge animate-gentle-pulse">
              <Globe className="h-3 w-3" /> International
            </span>
          </div>
        )}
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
        
        <Button 
          variant={isInternational ? "gradient-gold-burgundy" : "gradient-burgundy-gold"} 
          className="w-full mt-2"
        >
          Voir les détails
        </Button>
      </div>
    </div>
  );
};

export default UniversityCard;
