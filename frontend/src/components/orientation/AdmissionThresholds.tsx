
import React, { useState } from "react";
import { Search, Filter, GraduationCap, BookOpen, School } from "lucide-react";
import { Input } from "@/components/ui/input";

type AdmissionCriteria = {
  id: string;
  university: string;
  department: string;
  program: string;
  section: string;
  minimumScore: number;
  keySubjectsWeights: {
    subject: string;
    weight: number;
  }[];
  acceptanceRate: number;
  year: number;
};

// Données simulées basées sur le livre d'orientation officiel
const admissionData: AdmissionCriteria[] = [
  {
    id: "fsm-info",
    university: "Faculté des Sciences de Monastir",
    department: "Informatique",
    program: "Licence en Informatique Appliquée",
    section: "Mathématiques",
    minimumScore: 13.5,
    keySubjectsWeights: [
      { subject: "Mathématiques", weight: 4 },
      { subject: "Physique", weight: 3 },
      { subject: "Anglais", weight: 2 },
    ],
    acceptanceRate: 75,
    year: 2023,
  },
  {
    id: "eniso-elec",
    university: "École Nationale d'Ingénieurs de Sousse",
    department: "Génie Électrique",
    program: "Cycle d'Ingénieur",
    section: "Mathématiques",
    minimumScore: 15.2,
    keySubjectsWeights: [
      { subject: "Mathématiques", weight: 4 },
      { subject: "Physique", weight: 3 },
      { subject: "Sciences", weight: 2 },
    ],
    acceptanceRate: 62,
    year: 2023,
  },
  {
    id: "fmm-med",
    university: "Faculté de Médecine de Monastir",
    department: "Médecine",
    program: "Doctorat en Médecine",
    section: "Sciences Expérimentales",
    minimumScore: 16.8,
    keySubjectsWeights: [
      { subject: "Sciences", weight: 4 },
      { subject: "Mathématiques", weight: 3 },
      { subject: "Physique-Chimie", weight: 2 },
    ],
    acceptanceRate: 45,
    year: 2023,
  },
  {
    id: "fseg-ges",
    university: "Faculté des Sciences Économiques et de Gestion de Tunis",
    department: "Gestion",
    program: "Licence en Sciences de Gestion",
    section: "Économie et Gestion",
    minimumScore: 12.9,
    keySubjectsWeights: [
      { subject: "Économie", weight: 4 },
      { subject: "Mathématiques", weight: 3 },
      { subject: "Anglais", weight: 2 },
    ],
    acceptanceRate: 82,
    year: 2023,
  },
  {
    id: "enau-arch",
    university: "École Nationale d'Architecture et d'Urbanisme",
    department: "Architecture",
    program: "Diplôme National d'Architecte",
    section: "Mathématiques",
    minimumScore: 14.7,
    keySubjectsWeights: [
      { subject: "Mathématiques", weight: 3 },
      { subject: "Physique", weight: 2 },
      { subject: "Arts", weight: 4 },
    ],
    acceptanceRate: 58,
    year: 2023,
  },
];

const AdmissionThresholds = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sectionFilter, setSectionFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("minimumScore");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  
  const filteredData = admissionData
    .filter(
      (item) =>
        (sectionFilter === "all" || item.section === sectionFilter) &&
        (item.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.department.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "minimumScore") {
        return sortOrder === "asc" 
          ? a.minimumScore - b.minimumScore 
          : b.minimumScore - a.minimumScore;
      } else if (sortBy === "acceptanceRate") {
        return sortOrder === "asc" 
          ? a.acceptanceRate - b.acceptanceRate 
          : b.acceptanceRate - a.acceptanceRate;
      }
      // Par défaut, trier par score minimum décroissant
      return b.minimumScore - a.minimumScore;
    });

  return (
    <div className="glass-card rounded-2xl p-8 shadow-lg mb-12 animate-fade-in">
      <h3 className="text-2xl font-serif font-semibold text-burgundy-dark mb-6">
        Seuils d'Admission des Universités
      </h3>
      <p className="text-gray-600 mb-6">
        Consultez les critères d'admission officiels basés sur le guide d'orientation. Les seuils indiqués sont mis à jour selon les données de 2023.
      </p>

      {/* Search and filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Rechercher par université, programme ou département..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="section-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Section au Bac
            </label>
            <select
              id="section-filter"
              value={sectionFilter}
              onChange={(e) => setSectionFilter(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy"
            >
              <option value="all">Toutes les sections</option>
              <option value="Mathématiques">Mathématiques</option>
              <option value="Sciences Expérimentales">Sciences Expérimentales</option>
              <option value="Économie et Gestion">Économie et Gestion</option>
              <option value="Technique">Technique</option>
              <option value="Lettres">Lettres</option>
              <option value="Informatique">Informatique</option>
              <option value="Sport">Sport</option>
            </select>
          </div>

          <div>
            <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-1">
              Trier par
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy"
            >
              <option value="minimumScore">Score minimum</option>
              <option value="acceptanceRate">Taux d'acceptation</option>
            </select>
          </div>

          <div>
            <label htmlFor="sort-order" className="block text-sm font-medium text-gray-700 mb-1">
              Ordre
            </label>
            <select
              id="sort-order"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy"
            >
              <option value="desc">Décroissant</option>
              <option value="asc">Croissant</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredData.length > 0 ? (
        <div className="space-y-4">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-serif font-semibold text-burgundy">
                    {item.university}
                  </h4>
                  <p className="text-gray-500">
                    {item.department} - {item.program}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-gray-500 mb-1">Moyenne minimale</div>
                    <div className="text-lg font-bold text-burgundy-dark">{item.minimumScore}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-gray-500 mb-1">Taux d'admission</div>
                    <div className="text-lg font-bold text-gold-dark">{item.acceptanceRate}%</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Section: <span className="font-normal">{item.section}</span>
                </p>
                <p className="text-sm font-medium text-gray-700 mb-2">Coefficients des matières:</p>
                <div className="flex flex-wrap gap-2">
                  {item.keySubjectsWeights.map((subject, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 bg-cream rounded-full text-xs flex items-center gap-1"
                    >
                      <span>{subject.subject}</span>
                      <span className="font-bold">×{subject.weight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button className="btn-outline text-sm">Voir détails</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto w-16 h-16 rounded-full bg-burgundy/10 flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-burgundy" />
          </div>
          <h4 className="text-xl font-medium text-burgundy mb-2">
            Aucun résultat trouvé
          </h4>
          <p className="text-gray-600 max-w-md mx-auto">
            Essayez de modifier vos critères de recherche pour trouver les filières qui vous intéressent.
          </p>
        </div>
      )}
    </div>
  );
};

export default AdmissionThresholds;
