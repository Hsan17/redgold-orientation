
import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import Chatbot from "../components/chatbot/Chatbot";
import CareerSimulator from "../components/career/CareerSimulator";
import UniversityRecommendation from "../components/universities/UniversityRecommendation";
import { ArrowRight, Info, BookOpen, School, Lightbulb, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full font-medium text-sm mb-3">
              Comment ça fonctionne
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
              Votre parcours d'orientation simplifié
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Notre plateforme utilise l'intelligence artificielle pour vous orienter vers les meilleures filières
              et les établissements les plus adaptés à votre profil et vos aspirations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-burgundy/10 rounded-full flex items-center justify-center mb-6">
                <Info className="h-7 w-7 text-burgundy" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">1. Partagez votre profil</h3>
              <p className="text-gray-600 mb-4">
                Renseignez vos préférences, compétences et objectifs via notre formulaire intelligent ou notre chatbot interactif.
              </p>
              <Link to="/orientation" className="text-burgundy font-medium hover:text-burgundy-light flex items-center gap-1">
                Commencer <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-burgundy/10 rounded-full flex items-center justify-center mb-6">
                <BrainCircuit className="h-7 w-7 text-burgundy" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">2. Analyse IA</h3>
              <p className="text-gray-600 mb-4">
                Notre algorithme analyse vos données et les compare avec les tendances du marché du travail et les filières disponibles.
              </p>
              <Link to="/about" className="text-burgundy font-medium hover:text-burgundy-light flex items-center gap-1">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-burgundy/10 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-7 w-7 text-burgundy" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">3. Recommandations</h3>
              <p className="text-gray-600 mb-4">
                Recevez des suggestions de filières, de métiers et d'universités parfaitement adaptées à votre profil.
              </p>
              <Link to="/career" className="text-burgundy font-medium hover:text-burgundy-light flex items-center gap-1">
                Explorer les carrières <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-burgundy/10 rounded-full flex items-center justify-center mb-6">
                <School className="h-7 w-7 text-burgundy" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">4. Choix éclairé</h3>
              <p className="text-gray-600 mb-4">
                Prenez une décision confiante en vous appuyant sur des données concrètes et des prévisions précises.
              </p>
              <Link to="/universities" className="text-burgundy font-medium hover:text-burgundy-light flex items-center gap-1">
                Voir les universités <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Career Preview Section */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-burgundy/10 text-burgundy px-4 py-2 rounded-full font-medium text-sm mb-3">
              Prédictions d'emploi
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
              Simulez votre future carrière
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explorez les perspectives d'emploi et les salaires attendus pour différentes filières
              grâce à notre simulateur de carrière basé sur les données du marché.
            </p>
            <Link to="/career" className="inline-block mt-6 btn-primary">
              Voir toutes les prédictions
            </Link>
          </div>
          
          <CareerSimulator />
        </div>
      </section>
      
      {/* University Preview Section */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-burgundy/10 text-burgundy px-4 py-2 rounded-full font-medium text-sm mb-3">
              Universités en Tunisie
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
              Découvrez les meilleures universités
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Trouvez l'université qui correspond à vos besoins en fonction de sa localisation,
              des programmes proposés et des taux d'employabilité des diplômés.
            </p>
            <Link to="/universities" className="inline-block mt-6 btn-primary">
              Explorer toutes les universités
            </Link>
          </div>
          
          <UniversityRecommendation />
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-burgundy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-full font-medium text-sm mb-3">
              Témoignages
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ce que disent nos utilisateurs
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Des milliers d'étudiants ont trouvé leur voie grâce à notre plateforme d'orientation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-1 text-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 mb-6">
                "Grâce à OrientPlus, j'ai découvert ma passion pour l'ingénierie informatique. Le simulateur de carrière m'a aidé à voir les perspectives d'avenir dans ce domaine."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center font-serif font-bold text-gold">
                  AH
                </div>
                <div>
                  <h4 className="font-medium">Ahmed Hamouda</h4>
                  <p className="text-white/60 text-sm">Étudiant en Informatique</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-1 text-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 mb-6">
                "J'étais complètement perdue après mon bac. Le chatbot d'OrientPlus m'a posé les bonnes questions et m'a guidée vers la filière de sciences économiques qui me correspond parfaitement."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center font-serif font-bold text-gold">
                  SB
                </div>
                <div>
                  <h4 className="font-medium">Salma Ben Ali</h4>
                  <p className="text-white/60 text-sm">Étudiante en Économie</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-1 text-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 mb-6">
                "La fonctionnalité de géolocalisation des universités m'a permis de trouver un établissement proche de chez moi qui offre exactement la filière que je cherchais."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center font-serif font-bold text-gold">
                  MT
                </div>
                <div>
                  <h4 className="font-medium">Mohamed Trabelsi</h4>
                  <p className="text-white/60 text-sm">Étudiant en Médecine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full font-medium text-sm mb-3">
            Prêt à commencer ?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-burgundy mb-6">
            Construisez votre avenir dès aujourd'hui
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Ne laissez pas le hasard décider de votre avenir. Utilisez notre plateforme d'orientation
            pour prendre une décision éclairée sur votre parcours académique et professionnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/orientation" className="btn-primary text-lg px-8 py-3">
              Commencer mon orientation
            </Link>
            <Link to="/about" className="btn-outline text-lg px-8 py-3">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
      
      {/* Chatbot */}
      <Chatbot />
    </Layout>
  );
};

export default Index;
