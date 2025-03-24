
// Re-export all functionality from the service modules
import { 
  getAllUniversities, 
  getUniversityById, 
  getUniversitiesByRegion, 
  getUniversitiesByProgram,
  createUniversity,
  updateUniversity,
  deleteUniversity,
  getInternationalUniversities,
  getNationalUniversities
} from './universityApi';

import { 
  getAllScholarships, 
  getScholarshipById,
  createScholarship,
  updateScholarship,
  deleteScholarship,
  getScholarshipsByCountry
} from './scholarshipApi';

import { getAllAdmissionCriteria, getAdmissionCriteriaBySection } from './admissionApi';
import { getRecommendedUniversities } from './recommendationApi';
import { initializeDatabase, checkTablesExist, createTables, checkDataExists, forceReinitializeDatabase } from './databaseApi';
import { verifyAndInitializeDatabase, generateDatabaseReport } from './dbVerification';
import { sampleData } from './sampleData';

// Export combined service
export const UniversityService = {
  // Universities
  getAllUniversities,
  getUniversityById,
  getUniversitiesByRegion,
  getUniversitiesByProgram,
  createUniversity,
  updateUniversity,
  deleteUniversity,
  getInternationalUniversities,
  getNationalUniversities,
  
  // Scholarships
  getAllScholarships,
  getScholarshipById,
  createScholarship,
  updateScholarship,
  deleteScholarship,
  getScholarshipsByCountry,
  
  // Admission criteria
  getAllAdmissionCriteria,
  getAdmissionCriteriaBySection,
  
  // Recommendations
  getRecommendedUniversities,
  
  // Database initialization and verification
  initializeDatabase,
  checkTablesExist,
  createTables,
  checkDataExists,
  forceReinitializeDatabase,
  verifyAndInitializeDatabase,
  generateDatabaseReport
};

// Export sample data
export { sampleData };
