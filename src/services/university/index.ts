
// Re-export all functionality from the service modules
import { getAllUniversities, getUniversityById, getUniversitiesByRegion, getUniversitiesByProgram } from './universityApi';
import { getAllScholarships, getScholarshipById } from './scholarshipApi';
import { getAllAdmissionCriteria, getAdmissionCriteriaBySection } from './admissionApi';
import { getRecommendedUniversities } from './recommendationApi';
import { initializeDatabase } from './databaseApi';
import { sampleData } from './sampleData';

// Export combined service
export const UniversityService = {
  // Universities
  getAllUniversities,
  getUniversityById,
  getUniversitiesByRegion,
  getUniversitiesByProgram,
  
  // Scholarships
  getAllScholarships,
  getScholarshipById,
  
  // Admission criteria
  getAllAdmissionCriteria,
  getAdmissionCriteriaBySection,
  
  // Recommendations
  getRecommendedUniversities,
  
  // Database initialization
  initializeDatabase
};

// Export sample data
export { sampleData };
