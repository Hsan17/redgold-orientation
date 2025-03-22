
import React from "react";
import { ChevronRight, BookOpen, School, BarChart4, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-20 pb-10 md:pt-28 md:pb-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-burgundy/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Hero content */}
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left animate-slide-up">
            <div className="inline-block bg-burgundy/10 text-burgundy px-3 py-1.5 rounded-full font-medium text-sm">
              Trouvez votre voie post-bac avec confiance
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-burgundy leading-tight">
              Votre avenir commence <span className="text-gold">ici</span>
            </h1>
            <p className="text-base text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Une plateforme intelligente qui vous guide dans votre parcours d'orientation en fonction de votre profil, vos préférences et le marché du travail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
              <Link to="/orientation" className="btn-primary flex items-center justify-center gap-1 text-base">
                Commencer mon orientation <ChevronRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="btn-outline flex items-center justify-center gap-1 text-base">
                En savoir plus
              </Link>
            </div>
          </div>

          {/* Hero feature cards */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="glass-card rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <BookOpen className="h-8 w-8 text-burgundy mb-3" />
              <h3 className="font-serif font-semibold text-lg text-burgundy mb-1.5">Orientation Personnalisée</h3>
              <p className="text-sm text-gray-600">Un parcours d'orientation adapté à vos compétences et aspirations.</p>
            </div>
            
            <div className="glass-card rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <School className="h-8 w-8 text-burgundy mb-3" />
              <h3 className="font-serif font-semibold text-lg text-burgundy mb-1.5">Universités Recommandées</h3>
              <p className="text-sm text-gray-600">Découvrez les meilleures universités tunisiennes pour votre profil.</p>
            </div>
            
            <div className="glass-card rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <BarChart4 className="h-8 w-8 text-burgundy mb-3" />
              <h3 className="font-serif font-semibold text-lg text-burgundy mb-1.5">Prédictions d'Emploi</h3>
              <p className="text-sm text-gray-600">Consultez les perspectives d'emploi et salaires pour chaque filière.</p>
            </div>
            
            <div className="glass-card rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <MapPin className="h-8 w-8 text-burgundy mb-3" />
              <h3 className="font-serif font-semibold text-lg text-burgundy mb-1.5">Géolocalisation</h3>
              <p className="text-sm text-gray-600">Trouvez les établissements les plus proches de chez vous.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
