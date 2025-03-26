
import React from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Scholarship } from "@/types/university";

type ScholarshipCardProps = {
  scholarship: Scholarship;
};

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ scholarship }) => {
  return (
    <div className="glass-card-gold p-4 rounded-lg animate-float">
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
  );
};

export default ScholarshipCard;
