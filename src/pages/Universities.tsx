
import React from "react";
import Layout from "../components/layout/Layout";
import UniversityRecommendation from "../components/universities/UniversityRecommendation";
import UniversityMap from "../components/universities/UniversityMap";
import { MapPin, Info, School } from "lucide-react";

const Universities = () => {
  return (
    <Layout>
      <div className="container mx-auto py-24 px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-burgundy-dark mb-4">
            Explorez les universités en Tunisie
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les établissements d'enseignement supérieur du pays, leurs spécialisations 
            et leurs critères d'admission.
          </p>
        </div>

        {/* Carte des universités */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-6 w-6 text-burgundy" />
            <h2 className="text-2xl font-serif font-semibold text-burgundy-dark">
              Carte interactive des universités
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Visualisez l'emplacement géographique des principales universités tunisiennes 
            pour mieux planifier votre orientation et choisir l'établissement qui correspond 
            à vos besoins.
          </p>
          <UniversityMap />
        </div>

        {/* Informations sur les universités */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Info className="h-6 w-6 text-burgundy" />
            <h2 className="text-2xl font-serif font-semibold text-burgundy-dark">
              À propos des universités tunisiennes
            </h2>
          </div>
          <div className="glass-card rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <School className="h-6 w-6 text-burgundy" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-burgundy mb-2">13 Universités</h3>
                <p className="text-gray-600 text-sm">
                  La Tunisie compte 13 universités publiques réparties sur l'ensemble du territoire.
                </p>
              </div>
              
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-burgundy">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-semibold text-burgundy mb-2">+200 Établissements</h3>
                <p className="text-gray-600 text-sm">
                  Plus de 200 établissements d'enseignement supérieur, entre facultés, écoles et instituts.
                </p>
              </div>
              
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-burgundy">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                    <path d="M8 14h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 18h.01"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M16 18h.01"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-semibold text-burgundy mb-2">Admission annuelle</h3>
                <p className="text-gray-600 text-sm">
                  Les admissions se font généralement chaque année entre juillet et septembre.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-burgundy/5 rounded-xl">
              <h3 className="text-lg font-serif font-semibold text-burgundy mb-3">
                Le système universitaire tunisien
              </h3>
              <p className="text-gray-600 mb-4">
                Le système LMD (Licence-Master-Doctorat) est adopté dans les universités tunisiennes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><span className="font-medium text-burgundy">Licence:</span> 3 ans d'études (180 crédits)</li>
                <li><span className="font-medium text-burgundy">Master:</span> 2 ans d'études (120 crédits)</li>
                <li><span className="font-medium text-burgundy">Doctorat:</span> 3 à 5 ans de recherche</li>
                <li><span className="font-medium text-burgundy">Cycle d'ingénieur:</span> 5 ans (classes préparatoires + 3 ans)</li>
                <li><span className="font-medium text-burgundy">Médecine:</span> 7 à 9 ans selon la spécialité</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Liste des universités recommandées */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <School className="h-6 w-6 text-burgundy" />
            <h2 className="text-2xl font-serif font-semibold text-burgundy-dark">
              Trouvez votre université idéale
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Utilisez nos filtres de recherche pour identifier les établissements qui correspondent 
            à vos critères académiques et géographiques.
          </p>
          <UniversityRecommendation />
        </div>
      </div>
    </Layout>
  );
};

export default Universities;
