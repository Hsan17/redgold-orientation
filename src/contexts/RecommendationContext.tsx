
import React, { createContext, useContext, ReactNode, useState } from 'react';
import { useUniversities } from '@/hooks/useUniversities';
import { University } from '@/types/university';

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
  const { loading, error, getRecommendations } = useUniversities();
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null);

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
