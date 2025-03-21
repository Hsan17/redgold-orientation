
import React from "react";
import Layout from "../components/layout/Layout";
import OrientationForm from "../components/orientation/OrientationForm";
import Chatbot from "../components/chatbot/Chatbot";
import { MessageSquare, FileText, BrainCircuit, BarChart4 } from "lucide-react";

const Orientation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-burgundy/10 text-burgundy px-4 py-2 rounded-full font-medium text-sm mb-3 animate-fade-in">
            Orientation Personnalisée
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-burgundy mb-6 animate-slide-up">
            Trouvez votre parcours idéal
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            Complétez le formulaire ci-dessous pour recevoir des recommandations personnalisées
            basées sur votre profil, vos compétences et vos aspirations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center">
              <FileText className="h-10 w-10 text-burgundy mb-4" />
              <h3 className="text-xl font-medium text-burgundy mb-2">Formulaire Intelligent</h3>
              <p className="text-gray-600 text-center">
                Complétez notre formulaire détaillé pour une analyse approfondie.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center">
              <MessageSquare className="h-10 w-10 text-burgundy mb-4" />
              <h3 className="text-xl font-medium text-burgundy mb-2">Chatbot IA</h3>
              <p className="text-gray-600 text-center">
                Discutez avec notre assistant virtuel pour une orientation interactive.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center">
              <BrainCircuit className="h-10 w-10 text-burgundy mb-4" />
              <h3 className="text-xl font-medium text-burgundy mb-2">Recommandations IA</h3>
              <p className="text-gray-600 text-center">
                Recevez des suggestions adaptées à votre profil unique.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Orientation Form Section */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full font-medium text-sm mb-3">
              Questionnaire d'orientation
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
              Partagez votre profil avec nous
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Répondez aux questions suivantes pour nous aider à comprendre vos préférences, compétences
              et aspirations afin de vous orienter vers les meilleures filières.
            </p>
          </div>
          
          <OrientationForm />
        </div>
      </section>
      
      {/* Recommendation Results Section (Will be shown after form submission) */}
      <section id="recommendations" className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-burgundy/10 text-burgundy px-4 py-2 rounded-full font-medium text-sm mb-3">
              Résultats de l'analyse
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
              Vos recommandations personnalisées
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              En fonction de votre profil, voici les filières, métiers et universités qui vous correspondent le mieux.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Top Career Paths */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-semibold text-burgundy mb-6 flex items-center gap-2">
                <BarChart4 className="h-6 w-6 text-burgundy" />
                Filières recommandées
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-burgundy">Ingénierie Informatique</h4>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Correspondance 95%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-burgundy h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Parfaitement adapté à votre intérêt pour les mathématiques et la programmation.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-burgundy">Data Science</h4>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Correspondance 88%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-burgundy h-2 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Correspond à vos compétences analytiques et votre intérêt pour les statistiques.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-burgundy">Intelligence Artificielle</h4>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Correspondance 82%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-burgundy h-2 rounded-full" style={{ width: "82%" }}></div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Un domaine prometteur qui combine vos intérêts en informatique et mathématiques.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-burgundy">Développement Web</h4>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Correspondance 75%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-burgundy h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Une option à considérer compte tenu de votre intérêt pour la programmation.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Skills Assessment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-semibold text-burgundy mb-6 flex items-center gap-2">
                <BrainCircuit className="h-6 w-6 text-burgundy" />
                Analyse de vos compétences
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-gray-700">Analyse & Résolution de problèmes</h4>
                    <span className="text-sm font-medium text-burgundy">Excellent</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gold h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-gray-700">Programmation</h4>
                    <span className="text-sm font-medium text-burgundy">Très bon</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gold h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-gray-700">Mathématiques</h4>
                    <span className="text-sm font-medium text-burgundy">Bon</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gold h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-gray-700">Organisation & Planification</h4>
                    <span className="text-sm font-medium text-burgundy">Moyen</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gold h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-gray-700">Communication</h4>
                    <span className="text-sm font-medium text-burgundy">Moyen</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gold h-2 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-burgundy/5 rounded-xl">
                <h4 className="font-medium text-burgundy mb-2">Conseils de développement</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-burgundy">•</span>
                    <span>Renforcer vos compétences en communication pour les projets en équipe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-burgundy">•</span>
                    <span>Développer davantage vos capacités d'organisation et de gestion du temps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-burgundy">•</span>
                    <span>Approfondir vos connaissances en algorithmes avancés</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* University Matches */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-semibold text-burgundy mb-6 flex items-center gap-2">
                <FileText className="h-6 w-6 text-burgundy" />
                Universités recommandées
              </h3>
              
              <div className="space-y-6">
                <div className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-burgundy mb-1">INSAT - Institut National des Sciences Appliquées</h4>
                  <p className="text-sm text-gray-500 mb-3">Tunis, Tunisie</p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600">Correspondance</span>
                    <span className="text-xs font-medium text-burgundy">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-burgundy h-1.5 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">
                    Excellent choix pour le génie informatique avec un fort taux d'employabilité.
                  </p>
                </div>
                
                <div className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-burgundy mb-1">ESPRIT - École Supérieure Privée d'Ingénierie</h4>
                  <p className="text-sm text-gray-500 mb-3">Ariana, Tunisie</p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600">Correspondance</span>
                    <span className="text-xs font-medium text-burgundy">87%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-burgundy h-1.5 rounded-full" style={{ width: "87%" }}></div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">
                    Formation d'ingénieur pratique avec des partenariats industriels solides.
                  </p>
                </div>
                
                <div className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-burgundy mb-1">FST - Faculté des Sciences de Tunis</h4>
                  <p className="text-sm text-gray-500 mb-3">Tunis, Tunisie</p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600">Correspondance</span>
                    <span className="text-xs font-medium text-burgundy">84%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-burgundy h-1.5 rounded-full" style={{ width: "84%" }}></div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">
                    Excellent programme en informatique théorique et appliquée.
                  </p>
                </div>
                
                <button className="w-full btn-outline mt-4 py-2">
                  Voir plus d'universités
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="btn-primary">
              Télécharger le rapport complet
            </a>
          </div>
        </div>
      </section>
      
      {/* Chatbot */}
      <Chatbot />
    </Layout>
  );
};

export default Orientation;
