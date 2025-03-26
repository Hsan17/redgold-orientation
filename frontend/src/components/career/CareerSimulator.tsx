
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { BriefcaseBusiness, TrendingUp, AlertCircle, Sparkles } from "lucide-react";

type CareerPath = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  employmentRate: number;
  salaryData: {
    year: number;
    salary: number;
  }[];
  growthPotential: "high" | "medium" | "low";
  duration: string;
};

const careerPaths: CareerPath[] = [
  {
    id: "software-engineer",
    title: "Ingénieur Logiciel",
    description: "Développement de logiciels et applications pour diverses plateformes. Spécialisation possible en IA, applications mobiles, ou systèmes embarqués.",
    skills: ["Programmation", "Algorithmes", "Bases de données", "Architecture logicielle"],
    employmentRate: 92,
    salaryData: [
      { year: 2023, salary: 3000 },
      { year: 2024, salary: 3200 },
      { year: 2025, salary: 3500 },
      { year: 2026, salary: 3800 },
      { year: 2027, salary: 4200 },
      { year: 2028, salary: 4600 },
    ],
    growthPotential: "high",
    duration: "5 ans (Diplôme d'ingénieur)",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyse de données massives pour en extraire des insights et créer des modèles prédictifs pour aider à la prise de décision.",
    skills: ["Statistiques", "Machine Learning", "Python/R", "Visualisation de données"],
    employmentRate: 89,
    salaryData: [
      { year: 2023, salary: 3200 },
      { year: 2024, salary: 3500 },
      { year: 2025, salary: 3900 },
      { year: 2026, salary: 4300 },
      { year: 2027, salary: 4700 },
      { year: 2028, salary: 5200 },
    ],
    growthPotential: "high",
    duration: "5 ans (Master spécialisé)",
  },
  {
    id: "business-analyst",
    title: "Analyste d'Affaires",
    description: "Analyse des besoins commerciaux et développement de solutions pour améliorer l'efficacité opérationnelle des entreprises.",
    skills: ["Analyse financière", "Modélisation", "Communication", "Pensée critique"],
    employmentRate: 85,
    salaryData: [
      { year: 2023, salary: 2800 },
      { year: 2024, salary: 3000 },
      { year: 2025, salary: 3200 },
      { year: 2026, salary: 3400 },
      { year: 2027, salary: 3700 },
      { year: 2028, salary: 4000 },
    ],
    growthPotential: "medium",
    duration: "3 ans (Licence) + 2 ans (Master)",
  },
  {
    id: "marketing-specialist",
    title: "Spécialiste Marketing Digital",
    description: "Planification et exécution de campagnes marketing en ligne, analyse des données et optimisation des stratégies digitales.",
    skills: ["SEO/SEM", "Réseaux sociaux", "Analyse de données", "Contenu digital"],
    employmentRate: 82,
    salaryData: [
      { year: 2023, salary: 2500 },
      { year: 2024, salary: 2700 },
      { year: 2025, salary: 2900 },
      { year: 2026, salary: 3200 },
      { year: 2027, salary: 3500 },
      { year: 2028, salary: 3800 },
    ],
    growthPotential: "medium",
    duration: "3-5 ans (Licence ou Master)",
  },
];

const CareerSimulator = () => {
  const [selectedCareer, setSelectedCareer] = useState<CareerPath>(careerPaths[0]);

  const handleCareerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const career = careerPaths.find((c) => c.id === selectedId);
    if (career) {
      setSelectedCareer(career);
    }
  };

  return (
    <div className="glass-card rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-serif font-semibold text-burgundy mb-6">Simulateur de Carrière</h3>
      
      <div className="mb-6">
        <label htmlFor="career-select" className="block text-sm font-medium text-gray-700 mb-2">
          Choisissez un parcours professionnel
        </label>
        <select
          id="career-select"
          value={selectedCareer.id}
          onChange={handleCareerChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy"
        >
          {careerPaths.map((career) => (
            <option key={career.id} value={career.id}>
              {career.title}
            </option>
          ))}
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <BriefcaseBusiness className="h-5 w-5 text-burgundy" />
            <h4 className="font-medium text-burgundy">Taux d'emploi</h4>
          </div>
          <div className="text-3xl font-bold text-burgundy-dark">
            {selectedCareer.employmentRate}%
          </div>
          <p className="text-sm text-gray-600 mt-1">
            des diplômés trouvent un emploi dans l'année
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-5 w-5 text-gold" />
            <h4 className="font-medium text-burgundy">Potentiel d'évolution</h4>
          </div>
          <div className="flex items-center gap-1">
            {selectedCareer.growthPotential === "high" && (
              <>
                <div className="text-xl font-bold text-green-600">Élevé</div>
                <Sparkles className="h-5 w-5 text-green-600" />
              </>
            )}
            {selectedCareer.growthPotential === "medium" && (
              <div className="text-xl font-bold text-yellow-600">Moyen</div>
            )}
            {selectedCareer.growthPotential === "low" && (
              <div className="text-xl font-bold text-red-600">Faible</div>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">
            perspectives d'évolution de carrière
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="h-5 w-5 text-burgundy" />
            <h4 className="font-medium text-burgundy">Durée de formation</h4>
          </div>
          <div className="text-xl font-bold text-burgundy-dark">
            {selectedCareer.duration}
          </div>
          <p className="text-sm text-gray-600 mt-1">
            pour obtenir les qualifications requises
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <h4 className="text-lg font-serif font-medium text-burgundy mb-3">Description du métier</h4>
        <p className="text-gray-700">{selectedCareer.description}</p>
      </div>
      
      <div className="mb-8">
        <h4 className="text-lg font-serif font-medium text-burgundy mb-3">Compétences clés</h4>
        <div className="flex flex-wrap gap-2">
          {selectedCareer.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-burgundy/10 text-burgundy rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-serif font-medium text-burgundy mb-3">Prévision d'évolution salariale (TND/mois)</h4>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={selectedCareer.salaryData}
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
                formatter={(value) => [`${value} TND`, "Salaire mensuel"]}
                labelFormatter={(value) => `Année ${value}`}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="salary"
                name="Salaire mensuel"
                stroke="#800020"
                strokeWidth={2}
                dot={{ r: 4, fill: "#800020" }}
                activeDot={{ r: 6, fill: "#800020" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CareerSimulator;
