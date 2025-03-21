
import React, { useState } from "react";
import { MapPin } from "lucide-react";

// Dans une application réelle, nous utiliserions Google Maps API
// Simulation simplifiée d'une carte pour démonstration
const UniversityMap = () => {
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(null);

  // Données simulées des universités avec coordonnées approximatives
  const universities = [
    { id: 1, name: "Université de Tunis El Manar", region: "Grand Tunis", x: 25, y: 20 },
    { id: 2, name: "Université de Carthage", region: "Grand Tunis", x: 20, y: 15 },
    { id: 3, name: "Université de Sousse", region: "Sahel", x: 45, y: 45 },
    { id: 4, name: "Université de Sfax", region: "Sud", x: 50, y: 70 },
    { id: 5, name: "Université de Monastir", region: "Sahel", x: 55, y: 40 },
    { id: 6, name: "Université de Gabès", region: "Sud", x: 65, y: 80 },
    { id: 7, name: "Université de Jendouba", region: "Nord-Ouest", x: 15, y: 40 },
    { id: 8, name: "Université de Gafsa", region: "Sud-Ouest", x: 30, y: 75 },
    { id: 9, name: "Université de Manouba", region: "Grand Tunis", x: 30, y: 25 },
    { id: 10, name: "Université Virtuelle", region: "Nationale", x: 40, y: 10 },
  ];

  return (
    <div className="glass-card rounded-2xl p-6 shadow-lg mb-10 animate-fade-in">
      <h3 className="text-2xl font-serif font-semibold text-burgundy-dark mb-6">
        Carte des Universités
      </h3>
      <p className="text-gray-600 mb-6">
        Visualisez l'emplacement géographique des principales universités tunisiennes pour mieux planifier votre orientation.
      </p>

      <div className="relative w-full h-[400px] border border-gray-200 rounded-xl overflow-hidden bg-cream/50">
        {/* Affichage stylisé d'une carte simplifiée de la Tunisie */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-sky-100 z-0"></div>
        <div className="absolute left-10 top-5 right-10 bottom-5">
          {/* Contour stylisé de la Tunisie */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path 
              d="M20,10 Q30,5 35,15 Q40,25 50,30 Q60,35 65,50 Q70,65 60,75 Q50,85 40,80 Q30,75 25,60 Q20,45 15,30 Q10,15 20,10 Z" 
              fill="rgba(255,255,255,0.5)" 
              stroke="#800020" 
              strokeWidth="0.5"
            />
            
            {/* Points représentant les universités */}
            {universities.map((univ) => (
              <g key={univ.id}>
                <circle
                  cx={univ.x}
                  cy={univ.y}
                  r={selectedUniversity === univ.name ? 2.5 : 1.8}
                  fill={selectedUniversity === univ.name ? "#D4AF37" : "#800020"}
                  stroke="#fff"
                  strokeWidth="0.5"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setSelectedUniversity(univ.name)}
                />
                {selectedUniversity === univ.name && (
                  <text 
                    x={univ.x + 3} 
                    y={univ.y} 
                    fontSize="3" 
                    fill="#800020"
                    fontWeight="bold"
                  >
                    {univ.name}
                  </text>
                )}
              </g>
            ))}
          </svg>
        </div>
        
        {/* Légende */}
        <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-burgundy mb-2">Régions</h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-burgundy"></div>
              <span>Grand Tunis</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-burgundy-light"></div>
              <span>Nord</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-gold-dark"></div>
              <span>Sahel</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-gold-light"></div>
              <span>Sud</span>
            </div>
          </div>
        </div>
        
        {/* Info université sélectionnée */}
        {selectedUniversity && (
          <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-lg shadow-sm max-w-[260px]">
            <h4 className="text-sm font-medium text-burgundy mb-1">{selectedUniversity}</h4>
            <p className="text-xs text-gray-600 mb-2">
              {universities.find(u => u.name === selectedUniversity)?.region}
            </p>
            <button 
              className="text-xs text-burgundy font-medium flex items-center gap-1"
              onClick={() => setSelectedUniversity(null)}
            >
              <MapPin className="h-3 w-3" /> Voir détails
            </button>
          </div>
        )}
        
        {/* Overlay indiquant que c'est une démo */}
        <div className="absolute top-2 right-2 bg-burgundy/80 text-white text-xs px-2 py-0.5 rounded">
          Demo
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Note: Cette carte est une représentation simplifiée. Dans une implémentation réelle, 
          l'intégration de Google Maps API fournirait des informations géographiques précises.
        </p>
      </div>
    </div>
  );
};

export default UniversityMap;
