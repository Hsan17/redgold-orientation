
import { UniversityService, sampleData } from '@/services/university';

export async function initializeSupabaseDatabase() {
  console.log('Initializing Supabase database with sample data...');
  
  try {
    await UniversityService.initializeDatabase(
      sampleData.universities,
      sampleData.internationalScholarships,
      sampleData.admissionCriteria
    );
    console.log('Database initialization completed successfully!');
    return true;
  } catch (error) {
    console.error('Failed to initialize database:', error);
    return false;
  }
}
