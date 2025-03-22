
import React from "react";
import Layout from "../components/layout/Layout";
import UniversityRecommendation from "../components/universities/UniversityRecommendation";
import UniversityMap from "../components/universities/UniversityMap";
import { MapPin, Info, School, Globe, Book, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Universities = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient-burgundy-gold mb-4 animate-fade-in">
            Explorez les universités
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            Découvrez les établissements d'enseignement supérieur, leurs spécialisations 
            et leurs critères d'admission en Tunisie et à l'international.
          </p>
        </div>

        {/* Quick navigation cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="glass-card rounded-xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-burgundy-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-serif font-semibold text-burgundy mb-2">Carte interactive</h3>
            <p className="text-gray-600 text-sm mb-4">
              Visualisez l'emplacement géographique des établissements pour mieux planifier.
            </p>
            <a href="#university-map" className="text-burgundy font-medium hover:text-burgundy-400 transition-colors">
              Explorer la carte
            </a>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-burgundy-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <School className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-serif font-semibold text-burgundy mb-2">Filtres avancés</h3>
            <p className="text-gray-600 text-sm mb-4">
              Trouvez l'établissement idéal en filtrant par programme, région et spécialisation.
            </p>
            <a href="#recommendations" className="text-burgundy font-medium hover:text-burgundy-400 transition-colors">
              Découvrir les universités
            </a>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-burgundy-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <Globe className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-serif font-semibold text-burgundy mb-2">Études à l'étranger</h3>
            <p className="text-gray-600 text-sm mb-4">
              Explorez les bourses et universités internationales partenaires.
            </p>
            <a href="#international" className="text-burgundy font-medium hover:text-burgundy-400 transition-colors">
              Voir les opportunités
            </a>
          </div>
        </div>

        {/* Carte des universités */}
        <div id="university-map" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-burgundy flex items-center justify-center text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-serif font-semibold text-burgundy-dark">
              Carte interactive des universités
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Visualisez l'emplacement géographique des principales universités pour mieux planifier
            votre orientation et choisir l'établissement qui correspond à vos besoins.
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 animate-fade-in">
            <UniversityMap />
          </div>
        </div>

        {/* Informations sur les universités */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-burgundy flex items-center justify-center text-white">
              <Info className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-serif font-semibold text-burgundy-dark">
              À propos du système universitaire
            </h2>
          </div>
          
          <div className="glass-card rounded-2xl p-8 shadow-lg bg-gradient-to-br from-white to-cream/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 bg-cream/30 rounded-xl hover-lift">
                <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <School className="h-6 w-6 text-burgundy" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-burgundy mb-2">13 Universités</h3>
                <p className="text-gray-600 text-sm">
                  La Tunisie compte 13 universités publiques réparties sur l'ensemble du territoire.
                </p>
              </div>
              
              <div className="text-center p-6 bg-cream/30 rounded-xl hover-lift">
                <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="h-6 w-6 text-burgundy" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-burgundy mb-2">+200 Établissements</h3>
                <p className="text-gray-600 text-sm">
                  Plus de 200 établissements d'enseignement supérieur, entre facultés, écoles et instituts.
                </p>
              </div>
              
              <div className="text-center p-6 bg-cream/30 rounded-xl hover-lift">
                <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-6 w-6 text-burgundy" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-burgundy mb-2">Admission annuelle</h3>
                <p className="text-gray-600 text-sm">
                  Les admissions se font généralement chaque année entre juillet et septembre.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-burgundy/5 to-gold/5 rounded-xl">
              <h3 className="text-lg font-serif font-semibold text-burgundy mb-3">
                Le système universitaire tunisien
              </h3>
              <p className="text-gray-600 mb-4">
                Le système LMD (Licence-Master-Doctorat) est adopté dans les universités tunisiennes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/60 p-4 rounded-lg border border-burgundy/10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-burgundy/10 flex items-center justify-center">
                      <span className="text-burgundy font-bold">L</span>
                    </div>
                    <h4 className="font-medium text-burgundy">Licence</h4>
                  </div>
                  <p className="text-sm text-gray-600">3 ans d'études (180 crédits)</p>
                </div>
                
                <div className="bg-white/60 p-4 rounded-lg border border-burgundy/10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-burgundy/10 flex items-center justify-center">
                      <span className="text-burgundy font-bold">M</span>
                    </div>
                    <h4 className="font-medium text-burgundy">Master</h4>
                  </div>
                  <p className="text-sm text-gray-600">2 ans d'études (120 crédits)</p>
                </div>
                
                <div className="bg-white/60 p-4 rounded-lg border border-burgundy/10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-burgundy/10 flex items-center justify-center">
                      <span className="text-burgundy font-bold">D</span>
                    </div>
                    <h4 className="font-medium text-burgundy">Doctorat</h4>
                  </div>
                  <p className="text-sm text-gray-600">3 à 5 ans de recherche</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/60 p-4 rounded-lg border border-burgundy/10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-gold-600 font-bold">I</span>
                    </div>
                    <h4 className="font-medium text-gold-600">Cycle d'ingénieur</h4>
                  </div>
                  <p className="text-sm text-gray-600">5 ans (classes préparatoires + 3 ans)</p>
                </div>
                
                <div className="bg-white/60 p-4 rounded-lg border border-burgundy/10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-gold-600 font-bold">M</span>
                    </div>
                    <h4 className="font-medium text-gold-600">Médecine</h4>
                  </div>
                  <p className="text-sm text-gray-600">7 à 9 ans selon la spécialité</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Liste des universités recommandées */}
        <div id="recommendations" className="scroll-mt-20" style={{scrollMarginTop: "5rem"}}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-burgundy flex items-center justify-center text-white">
              <School className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-serif font-semibold text-burgundy-dark">
              Trouvez votre université idéale
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Utilisez nos filtres de recherche pour identifier les établissements qui correspondent 
            à vos critères académiques, géographiques et internationaux.
          </p>
          <UniversityRecommendation />
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-burgundy-gold p-0.5 rounded-xl animate-soft-fade">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-serif font-semibold text-gradient-burgundy-gold mb-4">
                Besoin d'aide pour votre orientation?
              </h3>
              <p className="text-gray-600 mb-6">
                Utilisez notre formulaire intelligent pour obtenir des recommandations personnalisées
                basées sur votre profil académique et vos préférences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient-burgundy-gold" size="lg">
                  Simuler mon orientation
                </Button>
                <Button variant="outline-burgundy" size="lg">
                  Contacter un conseiller
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Universities;
