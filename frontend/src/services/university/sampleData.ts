
import { University, Scholarship, AdmissionCriteria } from "@/types/university";

// Sample data for database initialization
// This mock data will be used to seed the Supabase database
const universities: University[] = [
  {
    id: "utm",
    name: "Université de Tunis El Manar",
    location: "Tunis",
    region: "tunis",
    programs: ["Ingénierie", "Médecine", "Sciences", "Économie"],
    employmentRate: 86,
    specializations: ["Médecine", "Informatique", "Génie Électrique", "Finance"],
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "usf",
    name: "Université de Sfax",
    location: "Sfax",
    region: "sahel",
    programs: ["Ingénierie", "Sciences", "Gestion", "Langues"],
    employmentRate: 82,
    specializations: ["Génie Mécanique", "Chimie", "Informatique", "Gestion"],
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ucar",
    name: "Université de Carthage",
    location: "Carthage",
    region: "tunis",
    programs: ["Business", "Sciences Politiques", "Architecture", "Ingénierie"],
    employmentRate: 84,
    specializations: ["Relations Internationales", "Architecture", "Commerce", "Télécommunications"],
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "umk",
    name: "Université de Monastir",
    location: "Monastir",
    region: "sahel",
    programs: ["Médecine", "Sciences", "Pharmacie", "Odontologie"],
    employmentRate: 88,
    specializations: ["Médecine", "Dentisterie", "Biologie", "Pharmacie"],
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "paris1",
    name: "Université Paris 1 Panthéon-Sorbonne",
    location: "Paris, France",
    region: "international",
    programs: ["Droit", "Économie", "Sciences Humaines", "Arts"],
    employmentRate: 89,
    specializations: ["Droit International", "Finance", "Histoire de l'Art", "Sciences Politiques"],
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1541679486598-5b8a1c9ce379?q=80&w=800&auto=format&fit=crop",
    international: true,
  },
  {
    id: "mcgill",
    name: "McGill University",
    location: "Montréal, Canada",
    region: "international",
    programs: ["Ingénierie", "Médecine", "Commerce", "Arts"],
    employmentRate: 92,
    specializations: ["Intelligence Artificielle", "Neuroscience", "Management International", "Génie Biomédical"],
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=800&auto=format&fit=crop",
    international: true,
  },
];

const internationalScholarships: Scholarship[] = [
  {
    id: "erasmus",
    name: "Erasmus Mundus",
    country: "Union Européenne",
    amount: "€24,000/an",
    requirements: ["Baccalauréat avec mention", "DELF B2 ou IELTS"],
    deadline: "15 janvier 2025",
    link: "#erasmus"
  },
  {
    id: "fulbright",
    name: "Bourse Fulbright",
    country: "États-Unis",
    amount: "$40,000/an",
    requirements: ["Baccalauréat avec mention très bien", "TOEFL iBT 90+"],
    deadline: "1 février 2025",
    link: "#fulbright"
  },
  {
    id: "chevening",
    name: "Chevening Scholarships",
    country: "Royaume-Uni",
    amount: "£30,000/an",
    requirements: ["Licence", "IELTS 6.5+", "Expérience professionnelle"],
    deadline: "3 novembre 2024",
    link: "#chevening"
  },
  {
    id: "daad",
    name: "DAAD Scholarships",
    country: "Allemagne",
    amount: "€850/mois",
    requirements: ["Baccalauréat avec mention", "Allemand B1 ou Anglais B2"],
    deadline: "15 octobre 2024",
    link: "#daad"
  },
];

// Sample Admission Criteria
const admissionCriteria: AdmissionCriteria[] = [
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
];

// Export the sample data
export const sampleData = {
  universities,
  internationalScholarships,
  admissionCriteria
};
