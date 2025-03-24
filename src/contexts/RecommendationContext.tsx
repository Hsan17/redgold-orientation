
import React, { createContext, useContext, ReactNode, useState } from 'react';
import { University } from '@/types/university';
import { UniversityService } from '@/services/university';

type UserPreferences = {
  programs?: string[];
  region?: string;
  specializations?: string[];
  international?: boolean;
};

type RecommendationContextType = {
  loading: boolean;
  error: string | null;
  getRecommendations: (preferences: UserPreferences) => Promise<University[]>;
  saveUserPreferences: (preferences: UserPreferences) => void;
  userPreferences: UserPreferences | null;
};

const RecommendationContext = createContext<RecommendationContextType | undefined>(undefined);

export const RecommendationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null);

  const getRecommendations = async (preferences: UserPreferences): Promise<University[]> => {
    try {
      setLoading(true);
      const recommendations = await UniversityService.getRecommendedUniversities(preferences);
      return recommendations;
    } catch (err) {
      setError(`Erreur: ${err instanceof Error ? err.message : String(err)}`);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const saveUserPreferences = (preferences: UserPreferences) => {
    setUserPreferences(preferences);
    // In a real app, you might save this to localStorage or your database
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
  };

  return (
    <RecommendationContext.Provider
      value={{
        loading,
        error,
        getRecommendations,
        saveUserPreferences,
        userPreferences,
      }}
    >
      {children}
    </RecommendationContext.Provider>
  );
};

export const useRecommendation = () => {
  const context = useContext(RecommendationContext);
  if (context === undefined) {
    throw new Error('useRecommendation must be used within a RecommendationProvider');
  }
  return context;
};
