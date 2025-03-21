
import React, { useState } from "react";
import { CheckCircle, ChevronRight, ChevronLeft, Loader2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

const ScoreBasedForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    section: "",
    overallScore: "",
    mathScore: "",
    physicsScore: "",
    scienceScore: "",
    languageScore: "",
    computerScore: "",
    economicsScore: "",
    philosophyScore: "",
    targetPrograms: [] as string[],
    preferredRegions: [] as string[],
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [eligibilityResults, setEligibilityResults] = useState<any[] | null>(null);

  const totalSteps = 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Accepter uniquement les chiffres et un point pour les nombres décimaux
    if (/^\d*\.?\d*$/.test(value) && parseFloat(value) <= 20) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, category: 'targetPrograms' | 'preferredRegions') => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        [category]: [...prev[category], value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [category]: prev[category].filter((item) => item !== value),
      }));
    }
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Calculer si l'étudiant est éligible pour certaines filières
  const calculateEligibility = () => {
    // Dans une application réelle, cette logique serait plus complexe
    // et basée sur les données réelles du livre d'orientation
    
    const overallScore = parseFloat(formData.overallScore);
    
    // Exemple de seuils d'éligibilité
    const eligibilityThresholds = [
      {
        program: "Médecine", 
        threshold: 16.5, 
        university: "Faculté de Médecine de Tunis",
        chance: overallScore >= 17.5 ? "Élevées" : overallScore >= 16.5 ? "Moyennes" : "Faibles",
        eligibility: overallScore >= 16.5
      },
      {
        program: "Génie Informatique", 
        threshold: 15.2, 
        university: "INSAT",
        chance: overallScore >= 16 ? "Élevées" : overallScore >= 15.2 ? "Moyennes" : "Faibles",
        eligibility: overallScore >= 15.2
      },
      {
        program: "Sciences Économiques", 
        threshold: 13.0, 
        university: "FSEG Tunis",
        chance: overallScore >= 14.5 ? "Élevées" : overallScore >= 13 ? "Moyennes" : "Faibles",
        eligibility: overallScore >= 13.0
      },
      {
        program: "Informatique Appliquée", 
        threshold: 12.5, 
        university: "ISI",
        chance: overallScore >= 14 ? "Élevées" : overallScore >= 12.5 ? "Moyennes" : "Faibles",
        eligibility: overallScore >= 12.5
      },
      {
        program: "Architecture", 
        threshold: 14.8, 
        university: "ENAU",
        chance: overallScore >= 16 ? "Élevées" : overallScore >= 14.8 ? "Moyennes" : "Faibles",
        eligibility: overallScore >= 14.8
      }
    ];
    
    return eligibilityThresholds;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simuler une analyse des données
    setTimeout(() => {
      const results = calculateEligibility();
      setEligibilityResults(results);
      setLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };
  
  // Détermination des champs de score à afficher selon la section
  const getScoreFields = () => {
    const section = formData.section;
    
    if (section === "scientifique" || section === "mathématiques") {
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="mathScore" className="block text-sm font-medium text-gray-700 mb-1">
                Note en Mathématiques
              </label>
              <Input
                id="mathScore"
                name="mathScore"
                type="text"
                value={formData.mathScore}
                onChange={handleNumberInput}
                className="w-full"
                placeholder="Ex: 16.5"
                required
              />
            </div>
            <div>
              <label htmlFor="physicsScore" className="block text-sm font-medium text-gray-700 mb-1">
                Note en Physique
              </label>
              <Input
                id="physicsScore"
                name="physicsScore"
                type="text"
                value={formData.physicsScore}
                onChange={handleNumberInput}
                className="w-full"
                placeholder="Ex: 15.75"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="scienceScore" className="block text-sm font-medium text-gray-700 mb-1">
                Note en Sciences
              </label>
              <Input
                id="scienceScore"
                name="scienceScore"
                type="text"
                value={formData.scienceScore}
                onChange={handleNumberInput}
                className="w-full"
                placeholder="Ex: 14.25"
                required
              />
            </div>
            <div>
              <label htmlFor="languageScore" className="block text-sm font-medium text-gray-700 mb-1">
                Note en Langues
              </label>
              <Input
                id="languageScore"
                name="languageScore"
                type="text"
                value={formData.languageScore}
                onChange={handleNumberInput}
                className="w-full"
                placeholder="Ex: 13.5"
                required
              />
            </div>
          </div>
        </>
      );
    } else if (section === "economie") {
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="economicsScore" className="block text-sm font-medium text-gray-700 mb-1">
                Note en Économie
              </label>
              <Input
                id="economicsScore"
                name="economicsScore"
                type="text"
                value={formData.economicsScore}
                onChange={handleNumberInput}
                className="w-full"
                placeholder="Ex: 16.5"
                required
              />
            </div>
            <div>
              <label htmlFor="mathScore" className="block text-sm font-medium text-gray-700 mb-1">
                Note en Mathématiques
              </label>
              <Input
                id="mathScore"
                name="mathScore"
                type="text"
                value={formData.mathScore}
                onChange={handleNumberInput}
                className="w-full"
                placeholder="Ex: 15.75"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="languageScore" className="block text-sm font-medium text-gray-700 mb-1">
                Note en Langues
              </label>
              <Input
                id="languageScore"
                name="languageScore"
                type="text"
                value={formData.languageScore}
                onChange={handleNumberInput}
                className="w-full"
                placeholder="Ex: 14.25"
                required
              />
            </div>
            <div>
              <label htmlFor="philosophyScore" className="block text-sm font-medium text-gray-700 mb-1">
                Note en Philosophie
              </label>
              <Input
                id="philosophyScore"
                name="philosophyScore"
                type="text"
                value={formData.philosophyScore}
                onChange={handleNumberInput}
                className="w-full"
                placeholder="Ex: 13.5"
                required
              />
            </div>
          </div>
        </>
      );
    } else if (section === "informatique") {
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="computerScore" className="block text-sm font-medium text-gray-700 mb-1">
                Note en Informatique
              </label>
              <Input
                id="computerScore"
                name="computerScore"
                type="text"
                value={formData.computerScore}
                onChange={handleNumberInput}
                className="w-full"
                placeholder="Ex: 17.5"
                required
              />
            </div>
            <div>
              <label htmlFor="mathScore" className="block text-sm font-medium text-gray-700 mb-1">
                Note en Mathématiques
              </label>
              <Input
                id="mathScore"
                name="mathScore"
                type="text"
                value={formData.mathScore}
                onChange={handleNumberInput}
                className="w-full"
                placeholder="Ex: 15.75"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="physicsScore" className="block text-sm font-medium text-gray-700 mb-1">
                Note en Physique
              </label>
              <Input
                id="physicsScore"
                name="physicsScore"
                type="text"
                value={formData.physicsScore}
                onChange={handleNumberInput}
                className="w-full"
                placeholder="Ex: 14.25"
                required
              />
            </div>
            <div>
              <label htmlFor="languageScore" className="block text-sm font-medium text-gray-700 mb-1">
                Note en Langues
              </label>
              <Input
                id="languageScore"
                name="languageScore"
                type="text"
                value={formData.languageScore}
                onChange={handleNumberInput}
                className="w-full"
                placeholder="Ex: 13.5"
                required
              />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className="py-4 px-6 bg-burgundy/10 rounded-lg flex items-center gap-3">
          <AlertCircle className="h-5 w-5 text-burgundy" />
          <p className="text-sm text-burgundy-dark">
            Sélectionnez d'abord votre section pour voir les champs de notes spécifiques.
          </p>
        </div>
      );
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {!isSubmitted ? (
        <div className="glass-card rounded-2xl p-8 shadow-lg animate-fade-in">
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <React.Fragment key={index}>
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${
                      step > index + 1 
                        ? "bg-gold" 
                        : step === index + 1 
                        ? "bg-burgundy-dark" 
                        : "bg-gray-300"
                    }`}
                  >
                    {step > index + 1 ? <CheckCircle className="h-5 w-5" /> : index + 1}
                  </div>
                  {index < totalSteps - 1 && (
                    <div 
                      className={`h-1 flex-1 ${
                        step > index + 1 ? "bg-gold" : "bg-gray-300"
                      }`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Section & Scores</span>
              <span className="flex-1 text-center">Préférences</span>
              <span>Confirmation</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Section et Notes */}
            {step === 1 && (
              <div className="space-y-6 animate-slide-up">
                <h2 className="text-2xl font-serif font-semibold text-burgundy-dark mb-6">Votre profil académique</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="section" className="block text-sm font-medium text-gray-700 mb-1">
                      Section au baccalauréat
                    </label>
                    <select
                      id="section"
                      name="section"
                      value={formData.section}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy"
                      required
                    >
                      <option value="" disabled>Sélectionnez votre section</option>
                      <option value="scientifique">Sciences Expérimentales</option>
                      <option value="mathématiques">Mathématiques</option>
                      <option value="technique">Technique</option>
                      <option value="economie">Économie et Gestion</option>
                      <option value="lettres">Lettres</option>
                      <option value="sport">Sport</option>
                      <option value="informatique">Informatique</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="overallScore" className="block text-sm font-medium text-gray-700 mb-1">
                      Moyenne générale au baccalauréat
                    </label>
                    <Input
                      id="overallScore"
                      name="overallScore"
                      type="text"
                      value={formData.overallScore}
                      onChange={handleNumberInput}
                      className="w-full"
                      placeholder="Ex: 15.25"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Entrez votre moyenne sur 20 avec jusqu'à deux décimales.
                    </p>
                  </div>
                  
                  {/* Champs de notes spécifiques selon la section */}
                  {getScoreFields()}
                </div>
              </div>
            )}

            {/* Step 2: Préférences */}
            {step === 2 && (
              <div className="space-y-6 animate-slide-up">
                <h2 className="text-2xl font-serif font-semibold text-burgundy-dark mb-6">Vos préférences</h2>
                
                <div className="space-y-6">
                  <div>
                    <p className="block text-sm font-medium text-gray-700 mb-3">
                      Domaines qui vous intéressent (sélectionnez au moins deux)
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Ingénierie", "Médecine", "Informatique", "Gestion",
                        "Économie", "Sciences", "Commerce", "Architecture", 
                        "Langues", "Droit", "Pharmacie", "Journalisme"
                      ].map((program) => (
                        <label key={program} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            value={program}
                            checked={formData.targetPrograms.includes(program)}
                            onChange={(e) => handleCheckboxChange(e, "targetPrograms")}
                            className="rounded text-burgundy focus:ring-burgundy h-4 w-4"
                          />
                          <span>{program}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="block text-sm font-medium text-gray-700 mb-3">
                      Régions préférées (sélectionnez au moins une)
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Grand Tunis", "Nord", "Nord-Ouest", "Sahel", 
                        "Centre", "Sud", "Sud-Ouest", "Indifférent"
                      ].map((region) => (
                        <label key={region} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            value={region}
                            checked={formData.preferredRegions.includes(region)}
                            onChange={(e) => handleCheckboxChange(e, "preferredRegions")}
                            className="rounded text-burgundy focus:ring-burgundy h-4 w-4"
                          />
                          <span>{region}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Résumé et Confirmation */}
            {step === 3 && (
              <div className="space-y-6 animate-slide-up">
                <h2 className="text-2xl font-serif font-semibold text-burgundy-dark mb-6">Résumé de vos informations</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-medium text-burgundy mb-4">Profil académique</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Section</p>
                        <p className="font-medium">{formData.section}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Moyenne générale</p>
                        <p className="font-medium">{formData.overallScore}</p>
                      </div>
                      
                      {formData.mathScore && (
                        <div>
                          <p className="text-sm text-gray-500">Note en Mathématiques</p>
                          <p className="font-medium">{formData.mathScore}</p>
                        </div>
                      )}
                      
                      {formData.physicsScore && (
                        <div>
                          <p className="text-sm text-gray-500">Note en Physique</p>
                          <p className="font-medium">{formData.physicsScore}</p>
                        </div>
                      )}
                      
                      {/* Ajouter d'autres notes selon ce qui a été rempli */}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-medium text-burgundy mb-4">Préférences</h3>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Domaines d'intérêt</p>
                      <div className="flex flex-wrap gap-2">
                        {formData.targetPrograms.map((program, index) => (
                          <span key={index} className="px-2 py-1 bg-burgundy/10 text-burgundy rounded-full text-xs">
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Régions préférées</p>
                      <div className="flex flex-wrap gap-2">
                        {formData.preferredRegions.map((region, index) => (
                          <span key={index} className="px-2 py-1 bg-burgundy/10 text-burgundy rounded-full text-xs">
                            {region}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-burgundy/10 p-4 rounded-lg">
                    <p className="text-sm text-burgundy-dark">
                      Veuillez vérifier attentivement les informations ci-dessus avant de soumettre votre demande d'orientation.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-1 text-burgundy font-medium hover:text-burgundy-light transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" /> Précédent
                </button>
              ) : (
                <div></div>
              )}
              
              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn-primary"
                >
                  Suivant <ChevronRight className="h-5 w-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn-primary flex items-center gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> Analyse en cours...
                    </>
                  ) : (
                    "Obtenir mes recommandations"
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      ) : (
        // Résultats après la soumission
        <div className="space-y-8 animate-fade-in">
          <div className="glass-card rounded-2xl p-8 shadow-lg text-center">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-serif font-semibold text-burgundy-dark mb-3">Analyse complétée</h2>
            <p className="text-gray-600 mb-6">
              Avec une moyenne de <span className="font-semibold">{formData.overallScore}</span>, 
              voici les filières pour lesquelles vous êtes éligible selon les critères d'admission officiels.
            </p>
          </div>
          
          {/* Affichage des résultats d'éligibilité */}
          <div id="recommendations" className="glass-card rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-serif font-semibold text-burgundy-dark mb-6">
              Votre éligibilité aux filières
            </h3>
            
            <div className="space-y-4">
              {eligibilityResults?.map((result, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg border ${
                    result.eligibility 
                      ? "border-green-200 bg-green-50" 
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-burgundy-dark">{result.program}</h4>
                    <span 
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        result.eligibility 
                          ? "bg-green-100 text-green-800" 
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {result.eligibility ? "Éligible" : "Non éligible"}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">
                    {result.university}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm mt-3">
                    <div>
                      <p className="text-gray-500">Seuil minimal</p>
                      <p className="font-medium">{result.threshold}/20</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Chances d'admission</p>
                      <p 
                        className={`font-medium ${
                          result.chance === "Élevées" 
                            ? "text-green-600" 
                            : result.chance === "Moyennes" 
                            ? "text-orange-500" 
                            : "text-red-500"
                        }`}
                      >
                        {result.chance}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                }}
                className="btn-outline"
              >
                Refaire la simulation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreBasedForm;
