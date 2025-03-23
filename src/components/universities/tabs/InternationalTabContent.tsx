
import React from "react";
import { Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScholarshipCard from "../cards/ScholarshipCard";
import UniversityCard from "../cards/UniversityCard";
import { University, Scholarship } from "@/types/university";

type InternationalTabContentProps = {
  scholarships: Scholarship[];
  universities: University[];
};

const InternationalTabContent: React.FC<InternationalTabContentProps> = ({
  scholarships,
  universities
}) => {
  return (
    <div className="mt-0 animate-fade-in">
      <div className="bg-gradient-to-r from-burgundy-50 to-gold-50 rounded-xl p-6 mb-8">
        <h4 className="text-xl font-serif font-semibold text-burgundy mb-4">
          Bourses d'études à l'étranger
        </h4>
        <p className="text-gray-700 mb-6">
          Découvrez les opportunités de bourses d'études pour poursuivre votre parcours académique à l'international.
          Les programmes ci-dessous offrent un financement complet ou partiel selon votre profil académique.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {scholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
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
        {universities.map((university) => (
          <UniversityCard key={university.id} university={university} isInternational={true} />
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
    </div>
  );
};

export default InternationalTabContent;
