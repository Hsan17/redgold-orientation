
import React from "react";
import Layout from "../components/layout/Layout";
import CareerSimulator from "../components/career/CareerSimulator";
import Chatbot from "../components/chatbot/Chatbot";
import { TrendingUp, BriefcaseBusiness, Coins, LucideBarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const employmentData = [
  { field: "Ingénierie", rate: 92, salaire: 3800 },
  { field: "Informatique", rate: 95, salaire: 4200 },
  { field: "Médecine", rate: 96, salaire: 5000 },
  { field: "Finance", rate: 88, salaire: 3900 },
  { field: "Marketing", rate: 82, salaire: 3500 },
  { field: "Enseignement", rate: 86, salaire: 3200 },
  { field: "Droit", rate: 84, salaire: 3600 },
];

const growthData = [
  { year: "2023", informatique: 4.2, ingenierie: 3.8, medecine: 2.9, finance: 3.5, marketing: 2.8 },
  { year: "2024", informatique: 4.5, ingenierie: 3.9, medecine: 3.0, finance: 3.7, marketing: 3.1 },
  { year: "2025", informatique: 4.9, ingenierie: 4.1, medecine: 3.2, finance: 3.8, marketing: 3.2 },
  { year: "2026", informatique: 5.3, ingenierie: 4.3, medecine: 3.4, finance: 3.9, marketing: 3.3 },
  { year: "2027", informatique: 5.7, ingenierie: 4.5, medecine: 3.5, finance: 4.0, marketing: 3.5 },
  { year: "2028", informatique: 6.2, ingenierie: 4.8, medecine: 3.7, finance: 4.2, marketing: 3.6 },
];

const Career = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-burgundy/10 text-burgundy px-4 py-2 rounded-full font-medium text-sm mb-3 animate-fade-in">
            Simulateur de Carrière
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-burgundy mb-6 animate-slide-up">
            Explorez votre avenir professionnel
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            Visualisez les perspectives d'emploi, les évolutions de salaire et les compétences
            requises pour différentes carrières en Tunisie.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center">
              <TrendingUp className="h-10 w-10 text-burgundy mb-4" />
              <h3 className="text-xl font-medium text-burgundy mb-2">Prévisions de croissance</h3>
              <p className="text-gray-600 text-center">
                Données basées sur les tendances du marché du travail.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center">
              <Coins className="h-10 w-10 text-burgundy mb-4" />
              <h3 className="text-xl font-medium text-burgundy mb-2">Évolution salariale</h3>
              <p className="text-gray-600 text-center">
                Estimations des revenus pour les 5 prochaines années.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center">
              <BriefcaseBusiness className="h-10 w-10 text-burgundy mb-4" />
              <h3 className="text-xl font-medium text-burgundy mb-2">Taux d'employabilité</h3>
              <p className="text-gray-600 text-center">
                Pourcentage de diplômés trouvant un emploi dans l'année.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Career Simulator Section */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full font-medium text-sm mb-3">
              Simulateur interactif
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
              Explorer différentes carrières
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Sélectionnez un parcours professionnel pour visualiser les perspectives d'emploi,
              l'évolution salariale et les compétences requises.
            </p>
          </div>
          
          <CareerSimulator />
        </div>
      </section>
      
      {/* Market Trends Section */}
      <section className="py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-burgundy/10 text-burgundy px-4 py-2 rounded-full font-medium text-sm mb-3">
              Tendances du marché
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
              Analyse du marché du travail en Tunisie
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Découvrez les secteurs les plus dynamiques et les perspectives d'emploi
              pour les prochaines années en Tunisie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Employment Rate Chart */}
            <div className="glass-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-semibold text-burgundy mb-6 flex items-center gap-2">
                <BriefcaseBusiness className="h-6 w-6 text-burgundy" />
                Taux d'employabilité par secteur
              </h3>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={employmentData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="field" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" unit="%" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        borderColor: "#E5E7EB",
                        borderRadius: "0.5rem",
                      }}
                      formatter={(value) => [`${value}%`, "Taux d'employabilité"]}
                    />
                    <Legend />
                    <Bar
                      dataKey="rate"
                      name="Taux d'employabilité"
                      fill="#800020"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Salary Chart */}
            <div className="glass-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-semibold text-burgundy mb-6 flex items-center gap-2">
                <Coins className="h-6 w-6 text-burgundy" />
                Salaire moyen par secteur (TND/mois)
              </h3>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={employmentData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="field" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        borderColor: "#E5E7EB",
                        borderRadius: "0.5rem",
                      }}
                      formatter={(value) => [`${value} TND`, "Salaire mensuel moyen"]}
                    />
                    <Legend />
                    <Bar
                      dataKey="salaire"
                      name="Salaire mensuel"
                      fill="#D4AF37"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* Growth Rate Chart */}
          <div className="glass-card rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif font-semibold text-burgundy mb-6 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-burgundy" />
              Prévision d'évolution salariale (Milliers TND/mois)
            </h3>
            
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={growthData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="year" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      borderColor: "#E5E7EB",
                      borderRadius: "0.5rem",
                    }}
                    formatter={(value) => [`${value} K TND`, ""]}
                  />
                  <Legend />
                  <Bar
                    dataKey="informatique"
                    name="Informatique"
                    fill="#800020"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="ingenierie"
                    name="Ingénierie"
                    fill="#A30029"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="medecine"
                    name="Médecine"
                    fill="#D4AF37"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="finance"
                    name="Finance"
                    fill="#F1C232"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="marketing"
                    name="Marketing"
                    fill="#B7922F"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Findings Section */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full font-medium text-sm mb-3">
              Points clés
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
              Conclusions principales
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Résumé des tendances et observations clés concernant le marché du travail 
              et les perspectives d'emploi en Tunisie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-4">Secteurs en croissance</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-burgundy font-bold">1.</span>
                  <div>
                    <span className="font-medium">Technologies de l'information</span>
                    <p className="text-gray-600 mt-1">
                      Avec une croissance annuelle de 8%, le secteur IT continue d'offrir les meilleures perspectives
                      d'emploi et de salaire, particulièrement dans les domaines de l'IA et du développement web.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-burgundy font-bold">2.</span>
                  <div>
                    <span className="font-medium">Services de santé</span>
                    <p className="text-gray-600 mt-1">
                      Le secteur médical maintient une forte demande, avec une pénurie de spécialistes
                      dans certains domaines comme la radiologie et l'anesthésie.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-burgundy font-bold">3.</span>
                  <div>
                    <span className="font-medium">Énergies renouvelables</span>
                    <p className="text-gray-600 mt-1">
                      Un secteur émergent qui devrait connaître une forte croissance dans les 5 prochaines années,
                      avec des opportunités pour les ingénieurs et techniciens spécialisés.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-burgundy font-bold">4.</span>
                  <div>
                    <span className="font-medium">Tourisme durable</span>
                    <p className="text-gray-600 mt-1">
                      La reconversion du secteur touristique vers des pratiques durables crée de nouvelles
                      opportunités d'emploi qualifié dans la gestion et le marketing.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-4">Compétences les plus demandées</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">1.</span>
                  <div>
                    <span className="font-medium">Compétences numériques</span>
                    <p className="text-gray-600 mt-1">
                      La maîtrise des outils numériques est devenue essentielle dans presque tous les secteurs,
                      avec une prime pour les compétences en programmation et analyse de données.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">2.</span>
                  <div>
                    <span className="font-medium">Langues étrangères</span>
                    <p className="text-gray-600 mt-1">
                      La maîtrise de l'anglais, du français et de l'allemand augmente significativement
                      les perspectives d'emploi et de salaire dans les entreprises internationales.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">3.</span>
                  <div>
                    <span className="font-medium">Adaptabilité et apprentissage continu</span>
                    <p className="text-gray-600 mt-1">
                      La capacité à s'adapter rapidement aux changements et à acquérir de nouvelles
                      compétences est de plus en plus valorisée par les employeurs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">4.</span>
                  <div>
                    <span className="font-medium">Intelligence émotionnelle</span>
                    <p className="text-gray-600 mt-1">
                      Les compétences relationnelles, le travail en équipe et le leadership deviennent
                      des facteurs de différenciation importants sur le marché du travail.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-burgundy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Prêt à faire le premier pas vers votre carrière idéale ?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Utilisez notre outil d'orientation personnalisé pour découvrir les filières et métiers
            qui correspondent le mieux à votre profil et à vos aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/orientation" className="px-8 py-3 bg-white text-burgundy font-medium rounded-lg shadow-md hover:bg-gold hover:text-burgundy-dark transition-all duration-300">
              Commencer mon orientation
            </a>
            <a href="/universities" className="px-8 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
              Explorer les universités
            </a>
          </div>
        </div>
      </section>
      
      {/* Chatbot */}
      <Chatbot />
    </Layout>
  );
};

export default Career;
