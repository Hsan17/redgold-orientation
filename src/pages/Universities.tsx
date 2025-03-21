
import React from "react";
import Layout from "../components/layout/Layout";
import UniversityRecommendation from "../components/universities/UniversityRecommendation";
import Chatbot from "../components/chatbot/Chatbot";
import { MapPin, Filter, School, BookOpen, Building, Trophy } from "lucide-react";

const Universities = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-burgundy/10 text-burgundy px-4 py-2 rounded-full font-medium text-sm mb-3 animate-fade-in">
            Explorer les Universités
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-burgundy mb-6 animate-slide-up">
            Trouvez l'université idéale en Tunisie
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            Découvrez les meilleures universités tunisiennes en fonction de votre localisation, 
            filière d'études et perspectives d'emploi.
          </p>
        </div>
      </section>
      
      {/* Key Statistics */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <School className="h-10 w-10 text-burgundy mb-4" />
              <div className="text-3xl font-bold text-burgundy mb-2">13</div>
              <p className="text-gray-600">Universités publiques</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <Building className="h-10 w-10 text-burgundy mb-4" />
              <div className="text-3xl font-bold text-burgundy mb-2">24</div>
              <p className="text-gray-600">Instituts supérieurs privés</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <BookOpen className="h-10 w-10 text-burgundy mb-4" />
              <div className="text-3xl font-bold text-burgundy mb-2">150+</div>
              <p className="text-gray-600">Programmes d'études</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <Trophy className="h-10 w-10 text-burgundy mb-4" />
              <div className="text-3xl font-bold text-burgundy mb-2">5</div>
              <p className="text-gray-600">Universités dans le top 100 africain</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full font-medium text-sm mb-3">
              Géolocalisation
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
              Universités par région
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explorez la carte interactive des universités tunisiennes pour trouver
              les établissements les plus proches de chez vous.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-lg overflow-hidden">
            <div className="relative bg-gray-200 rounded-xl h-[500px] overflow-hidden">
              {/* This is a placeholder for the map component */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-16 w-16 text-burgundy mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-burgundy mb-2">Carte Interactive</h3>
                  <p className="text-gray-600 mb-4">
                    La carte interactive des universités sera affichée ici avec la possibilité
                    de filtrer par région et type d'établissement.
                  </p>
                  <button className="btn-primary flex mx-auto items-center gap-2">
                    <MapPin className="h-5 w-5" /> Utiliser ma localisation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* University Recommendations */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-burgundy/10 text-burgundy px-4 py-2 rounded-full font-medium text-sm mb-3">
              Trouver votre université
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
              Recherche et filtrage
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Utilisez nos outils de recherche avancée pour trouver les établissements
              qui correspondent à vos critères et préférences.
            </p>
          </div>
          
          <UniversityRecommendation />
        </div>
      </section>
      
      {/* Rankings Section */}
      <section className="py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full font-medium text-sm mb-3">
              Classements
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
              Meilleures universités par domaine
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Découvrez les établissements les mieux classés en Tunisie
              selon différents critères et domaines d'études.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Engineering Rankings */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-6">Ingénierie</h3>
              <ol className="space-y-4">
                <li className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-burgundy text-white rounded-full flex items-center justify-center text-sm font-medium">1</span>
                    <span>INSAT Tunis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-burgundy text-white rounded-full flex items-center justify-center text-sm font-medium">2</span>
                    <span>ENIT Tunis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < 4 ? "text-gold" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-burgundy text-white rounded-full flex items-center justify-center text-sm font-medium">3</span>
                    <span>ESPRIT Ariana</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < 4 ? "text-gold" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-burgundy text-white rounded-full flex items-center justify-center text-sm font-medium">4</span>
                    <span>ENISO Sousse</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < 4 ? "text-gold" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-burgundy text-white rounded-full flex items-center justify-center text-sm font-medium">5</span>
                    <span>ENIS Sfax</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < 3 ? "text-gold" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            
            {/* Medicine Rankings */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-6">Médecine</h3>
              <ol className="space-y-4">
                <li className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-burgundy text-white rounded-full flex items-center justify-center text-sm font-medium">1</span>
                    <span>Faculté de Médecine de Tunis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-burgundy text-white rounded-full flex items-center justify-center text-sm font-medium">2</span>
                    <span>Faculté de Médecine de Monastir</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < 5 ? "text-gold" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-burgundy text-white rounded-full flex items-center justify-center text-sm font-medium">3</span>
                    <span>Faculté de Médecine de Sousse</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < 4 ? "text-gold" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-burgundy text-white rounded-full flex items-center justify-center text-sm font-medium">4</span>
                    <span>Faculté de Médecine de Sfax</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < 4 ? "text-gold" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-burgundy text-white rounded-full flex items-center justify-center text-sm font-medium">5</span>
                    <span>Université Privée Tunis Carthage</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < 3 ? "text-gold" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            
            {/* Business Rankings */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-6">Business & Management</h3>
              <ol className="space-y-4">
                <li className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-burgundy text-white rounded-full flex items-center justify-center text-sm font-medium">1</span>
                    <span>IHEC Carthage</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-burgundy text-white rounded-full flex items-center justify-center text-sm font-medium">2</span>
                    <span>MSB - Mediterranean School of Business</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < 4 ? "text-gold" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-burgundy text-white rounded-full flex items-center justify-center text-sm font-medium">3</span>
                    <span>ISG Tunis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < 4 ? "text-gold" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-burgundy text-white rounded-full flex items-center justify-center text-sm font-medium">4</span>
                    <span>FSEG Tunis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < 4 ? "text-gold" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-burgundy text-white rounded-full flex items-center justify-center text-sm font-medium">5</span>
                    <span>IHET Carthage</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < 3 ? "text-gold" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-burgundy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Besoin d'aide pour choisir la bonne université ?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Utilisez notre outil d'orientation personnalisé pour recevoir des recommandations
            adaptées à votre profil, vos intérêts et vos objectifs professionnels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/orientation" className="px-8 py-3 bg-white text-burgundy font-medium rounded-lg shadow-md hover:bg-gold hover:text-burgundy-dark transition-all duration-300">
              Démarrer l'orientation
            </a>
            <button className="px-8 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
              Discuter avec un conseiller
            </button>
          </div>
        </div>
      </section>
      
      {/* Chatbot */}
      <Chatbot />
    </Layout>
  );
};

export default Universities;
