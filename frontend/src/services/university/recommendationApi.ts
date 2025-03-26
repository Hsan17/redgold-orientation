
import { University } from "@/types/university";
import { supabase, TABLES } from "@/lib/supabase";

// Recommendation algorithm using Supabase filters
export async function getRecommendedUniversities(
  userPreferences: {
    programs?: string[];
    region?: string;
    specializations?: string[];
    international?: boolean;
  }
): Promise<University[]> {
  // Start building the query
  let query = supabase.from(TABLES.UNIVERSITIES).select('*');
  
  // Apply filters based on preferences
  if (userPreferences.international !== undefined) {
    query = query.eq('international', userPreferences.international);
  }
  
  if (userPreferences.region) {
    query = query.eq('region', userPreferences.region);
  }
  
  // Execute the query
  const { data, error } = await query;
  
  if (error) {
    console.error('Error getting recommended universities:', error);
    return [];
  }
  
  let recommendations = data || [];
  
  // Apply program and specialization filters in-memory
  // (because they're arrays in our model and need more complex filtering)
  if (userPreferences.programs && userPreferences.programs.length > 0) {
    recommendations = recommendations.filter(university => 
      university.programs.some(program => 
        userPreferences.programs?.some(p => 
          program.toLowerCase().includes(p.toLowerCase())
        )
      )
    );
  }
  
  if (userPreferences.specializations && userPreferences.specializations.length > 0) {
    recommendations = recommendations.filter(university => 
      university.specializations.some(spec => 
        userPreferences.specializations?.some(s => 
          spec.toLowerCase().includes(s.toLowerCase())
        )
      )
    );
  }
  
  // Sort by employment rate and rating (simple scoring)
  recommendations.sort((a, b) => {
    const scoreA = (a.employmentRate * 0.6) + (a.rating * 10 * 0.4);
    const scoreB = (b.employmentRate * 0.6) + (b.rating * 10 * 0.4);
    return scoreB - scoreA; // Higher score first
  });
  
  return recommendations;
}
