
import React from "react";
import Layout from "../components/layout/Layout";
import Chatbot from "../components/chatbot/Chatbot";
import { Users, BookOpen, GraduationCap, Lightbulb, BrainCircuit, CheckCircle, Link } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-burgundy/10 text-burgundy px-4 py-2 rounded-full font-medium text-sm mb-3 animate-fade-in">
            À propos de nous
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-burgundy mb-6 animate-slide-up">
            Notre mission: guider votre orientation
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            OrientPlus a été créé pour aider les étudiants tunisiens à prendre des décisions
            éclairées concernant leur avenir académique et professionnel.
          </p>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full font-medium text-sm mb-3">
                Notre vision
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
                Un avenir où chaque étudiant trouve sa voie
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Nous croyons qu'une orientation professionnelle adaptée est essentielle pour
                le développement personnel et la réussite professionnelle. Notre vision est
                de créer un écosystème où chaque étudiant dispose des outils et informations
                nécessaires pour prendre des décisions éclairées.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                OrientPlus combine la puissance de l'intelligence artificielle avec des données
                du marché du travail pour fournir des recommandations personnalisées qui tiennent
                compte à la fois des aspirations personnelles et des réalités économiques.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-burgundy shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-burgundy">Orientation personnalisée</h3>
                    <p className="text-gray-600">
                      Des recommandations adaptées à votre profil unique, vos compétences et aspirations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-burgundy shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-burgundy">Données actualisées</h3>
                    <p className="text-gray-600">
                      Des informations à jour sur le marché du travail et les tendances d'emploi.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-burgundy shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-burgundy">Approche holistique</h3>
                    <p className="text-gray-600">
                      Une vision complète qui considère tant vos intérêts que les opportunités professionnelles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-white rounded-2xl p-4 shadow-lg">
              <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center p-6">
                  <GraduationCap className="h-16 w-16 text-burgundy mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-burgundy mb-2">Image de notre mission</h3>
                  <p className="text-gray-600">
                    Une image illustrant notre mission d'orientation sera affichée ici.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-burgundy/10 text-burgundy px-4 py-2 rounded-full font-medium text-sm mb-3">
              Notre approche
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
              Comment fonctionne OrientPlus
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Notre plateforme utilise des algorithmes avancés et des modèles prédictifs
              pour vous offrir l'orientation la plus pertinente possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 shadow-lg relative overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-burgundy/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mb-6">
                  <BrainCircuit className="h-8 w-8 text-burgundy" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">
                  Intelligence artificielle
                </h3>
                <p className="text-gray-600">
                  Notre IA analyse votre profil, vos compétences et vos préférences
                  pour créer un modèle de recommandation personnalisé.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-burgundy">•</span>
                    <span className="text-gray-600">Analyse de personnalité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-burgundy">•</span>
                    <span className="text-gray-600">Évaluation des compétences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-burgundy">•</span>
                    <span className="text-gray-600">Matching d'intérêts</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 shadow-lg relative overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-burgundy/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mb-6">
                  <Link className="h-8 w-8 text-burgundy" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">
                  Données du marché
                </h3>
                <p className="text-gray-600">
                  Nous collectons et analysons en continu les données du marché du
                  travail pour des recommandations alignées avec la réalité économique.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-burgundy">•</span>
                    <span className="text-gray-600">Demande par secteur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-burgundy">•</span>
                    <span className="text-gray-600">Évolution des salaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-burgundy">•</span>
                    <span className="text-gray-600">Tendances d'emploi</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 shadow-lg relative overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-burgundy/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="h-8 w-8 text-burgundy" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">
                  Recommandations
                </h3>
                <p className="text-gray-600">
                  Nous générons des recommandations précises et exploitables
                  en combinant les données de votre profil et du marché.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-burgundy">•</span>
                    <span className="text-gray-600">Filières adaptées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-burgundy">•</span>
                    <span className="text-gray-600">Universités recommandées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-burgundy">•</span>
                    <span className="text-gray-600">Parcours de carrière</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full font-medium text-sm mb-3">
              Notre équipe
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
              Les experts derrière OrientPlus
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Notre équipe pluridisciplinaire combine expertise en éducation,
              technologie et sciences des données pour créer la meilleure plateforme d'orientation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                {/* Team member image placeholder */}
                <div className="h-full flex items-center justify-center">
                  <Users className="h-16 w-16 text-burgundy/30" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-burgundy">Dr. Sami Ben Ali</h3>
                <p className="text-gold mb-3">Directeur & Fondateur</p>
                <p className="text-gray-600 text-sm mb-4">
                  Expert en intelligence artificielle avec 15 ans d'expérience
                  dans les technologies éducatives.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-burgundy hover:text-burgundy-light" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-burgundy hover:text-burgundy-light" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                {/* Team member image placeholder */}
                <div className="h-full flex items-center justify-center">
                  <Users className="h-16 w-16 text-burgundy/30" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-burgundy">Dr. Fatma Trabelsi</h3>
                <p className="text-gold mb-3">Directrice Pédagogique</p>
                <p className="text-gray-600 text-sm mb-4">
                  Spécialiste en orientation académique avec un doctorat en sciences de l'éducation.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-burgundy hover:text-burgundy-light" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-burgundy hover:text-burgundy-light" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                {/* Team member image placeholder */}
                <div className="h-full flex items-center justify-center">
                  <Users className="h-16 w-16 text-burgundy/30" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-burgundy">Mehdi Karoui</h3>
                <p className="text-gold mb-3">Responsable Technique</p>
                <p className="text-gray-600 text-sm mb-4">
                  Expert en développement web et IA avec une spécialisation
                  en traitement du langage naturel.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-burgundy hover:text-burgundy-light" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-burgundy hover:text-burgundy-light" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                {/* Team member image placeholder */}
                <div className="h-full flex items-center justify-center">
                  <Users className="h-16 w-16 text-burgundy/30" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-burgundy">Lina Ben Salah</h3>
                <p className="text-gold mb-3">Analyste de Données</p>
                <p className="text-gray-600 text-sm mb-4">
                  Spécialiste en analyse du marché du travail et en modélisation statistique prédictive.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-burgundy hover:text-burgundy-light" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-burgundy hover:text-burgundy-light" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-burgundy/10 text-burgundy px-4 py-2 rounded-full font-medium text-sm mb-3">
              Questions fréquentes
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
              Tout ce que vous devez savoir
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Trouvez des réponses aux questions les plus fréquentes sur
              notre plateforme et nos services d'orientation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">
                Comment fonctionne l'analyse IA de mon profil ?
              </h3>
              <p className="text-gray-600">
                Notre IA analyse les réponses fournies dans le formulaire d'orientation
                et les interactions avec notre chatbot. Elle identifie des modèles et patterns
                qui permettent de déterminer vos points forts, intérêts et domaines
                de compétence, pour ensuite les associer aux filières et métiers correspondants.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">
                Les recommandations sont-elles fiables ?
              </h3>
              <p className="text-gray-600">
                Oui, nos recommandations sont basées sur des données réelles du marché
                du travail tunisien, actualisées régulièrement. Nous combinons ces données
                avec une analyse approfondie de votre profil pour assurer la pertinence
                des suggestions. Notre taux de satisfaction utilisateur est supérieur à 92%.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">
                OrientPlus est-il gratuit ?
              </h3>
              <p className="text-gray-600">
                La version de base d'OrientPlus est entièrement gratuite. Elle inclut
                le formulaire d'orientation, les recommandations générales et l'accès
                aux informations sur les universités. Des fonctionnalités premium, comme
                les rapports détaillés et les consultations personnalisées, sont disponibles
                via un abonnement.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">
                Comment sont calculées les prévisions de salaire ?
              </h3>
              <p className="text-gray-600">
                Nos prévisions salariales sont calculées à partir de données historiques,
                des tendances actuelles du marché et de modèles économétriques. Nous prenons
                en compte divers facteurs comme l'inflation, la croissance du secteur et
                la demande de compétences spécifiques pour établir des projections sur 5 ans.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">
                Puis-je contacter un conseiller humain ?
              </h3>
              <p className="text-gray-600">
                Absolument ! Bien que notre plateforme soit automatisée, nous proposons
                également des consultations avec des conseillers d'orientation professionnels.
                Vous pouvez prendre rendez-vous via notre section "Contact" ou directement
                depuis vos résultats d'orientation.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">
                Les universités sont-elles partenaires de votre plateforme ?
              </h3>
              <p className="text-gray-600">
                Nous avons établi des partenariats avec plusieurs universités tunisiennes
                pour garantir l'exactitude des informations présentées. Cependant, nos
                recommandations restent totalement impartiales et basées uniquement sur
                la correspondance entre votre profil et les caractéristiques de chaque établissement.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-burgundy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Prêt à découvrir votre parcours idéal ?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Commencez dès aujourd'hui votre parcours d'orientation personnalisé
            et prenez les meilleures décisions pour votre avenir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/orientation" className="px-8 py-3 bg-white text-burgundy font-medium rounded-lg shadow-md hover:bg-gold hover:text-burgundy-dark transition-all duration-300">
              Démarrer mon orientation
            </a>
            <a href="/contact" className="px-8 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
              Nous contacter
            </a>
          </div>
        </div>
      </section>
      
      {/* Chatbot */}
      <Chatbot />
    </Layout>
  );
};

export default About;
