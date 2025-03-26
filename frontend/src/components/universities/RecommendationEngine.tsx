
import React, { useState, useEffect } from 'react';
import { useRecommendation } from '@/contexts/RecommendationContext';
import { University } from '@/types/university';
import { Button } from '@/components/ui/button';
import { Star, MapPin, GraduationCap, TrendingUp, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type RecommendationEngineProps = {
  initialPreferences?: {
    programs?: string[];
    region?: string;
    specializations?: string[];
    international?: boolean;
  };
};

const RecommendationEngine: React.FC<RecommendationEngineProps> = ({ 
  initialPreferences = {} 
}) => {
  const { getRecommendations, loading, error } = useRecommendation();
  const [recommendations, setRecommendations] = useState<University[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Customize these preferences based on your UI
  const [preferences, setPreferences] = useState({
    programs: initialPreferences.programs || [],
    region: initialPreferences.region || '',
    specializations: initialPreferences.specializations || [],
    international: initialPreferences.international || false
  });

  const generateRecommendations = async () => {
    try {
      setIsLoading(true);
      const results = await getRecommendations(preferences);
      setRecommendations(results);
      
      toast({
        title: 'Recommandations générées',
        description: `${results.length} universités correspondent à vos critères.`,
        variant: 'default',
      });
    } catch (err) {
      console.error('Error generating recommendations:', err);
      toast({
        title: 'Erreur',
        description: 'Impossible de générer des recommandations. Veuillez réessayer.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Generate initial recommendations if there are initialPreferences
    if (Object.keys(initialPreferences).length > 0) {
      generateRecommendations();
    }
  }, []);

  if (error) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-500">{error}</p>
        <Button 
          variant="outline" 
          onClick={() => window.location.reload()} 
          className="mt-4"
        >
          Réessayer
        </Button>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-serif font-semibold text-burgundy mb-4">
        Recommandations personnalisées
      </h3>
      
      <div className="mb-6">
        <Button 
          variant="gradient-burgundy-gold" 
          onClick={generateRecommendations}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" /> 
              Génération en cours...
            </>
          ) : (
            'Générer mes recommandations'
          )}
        </Button>
      </div>
      
      {recommendations.length > 0 ? (
        <div className="space-y-4">
          <p className="text-sm text-gray-600 mb-4">
            Voici les universités qui correspondent le mieux à votre profil et à vos préférences,
            triées par pertinence:
          </p>
          
          {recommendations.map((university) => (
            <div key={university.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-md overflow-hidden">
                  <img 
                    src={university.image} 
                    alt={university.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-serif font-semibold text-burgundy">{university.name}</h4>
                    <div className="flex items-center gap-1 bg-gold-50 px-2 py-1 rounded text-sm">
                      <Star className="h-3 w-3 text-gold fill-gold" />
                      <span className="font-medium">{university.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin className="h-3 w-3 mr-1" /> {university.location}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                    <div className="flex items-center gap-1">
                      <GraduationCap className="h-3 w-3 text-burgundy" />
                      <span>{university.programs.length} programmes</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3 text-burgundy" />
                      <span>{university.employmentRate}% emploi</span>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <div className="flex flex-wrap gap-1">
                      {university.specializations.slice(0, 3).map((spec, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-burgundy/10 text-burgundy rounded-full text-xs"
                        >
                          {spec}
                        </span>
                      ))}
                      {university.specializations.length > 3 && (
                        <span className="text-xs text-gray-500">+{university.specializations.length - 3}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : loading || isLoading ? (
        <div className="text-center py-8">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-burgundy mb-4" />
          <p className="text-gray-600">Chargement des recommandations...</p>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <p>Générez vos recommandations pour voir les universités qui correspondent à votre profil.</p>
        </div>
      )}
    </div>
  );
};

export default RecommendationEngine;
