
import React, { useState } from "react";
import { CheckCircle, ChevronRight, ChevronLeft, Loader2 } from "lucide-react";

const OrientationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    section: "",
    subjects: [] as string[],
    strengths: [] as string[],
    interests: [] as string[],
    location: "",
    studyYears: "",
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, category: 'subjects' | 'strengths' | 'interests') => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 2000);
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
                        ? "bg-burgundy" 
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
              <span>Profil</span>
              <span>Académique</span>
              <span>Intérêts</span>
              <span>Préférences</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6 animate-slide-up">
                <h2 className="text-2xl font-serif font-semibold text-burgundy mb-6">Votre profil académique</h2>
                
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
                      <option value="scientifique">Scientifique</option>
                      <option value="mathématiques">Mathématiques</option>
                      <option value="technique">Technique</option>
                      <option value="economie">Économie et Gestion</option>
                      <option value="lettres">Lettres</option>
                      <option value="sport">Sport</option>
                      <option value="informatique">Informatique</option>
                    </select>
                  </div>
                  
                  <div>
                    <p className="block text-sm font-medium text-gray-700 mb-3">
                      Matières préférées (sélectionnez au moins deux)
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {["Mathématiques", "Physique", "Chimie", "Biologie", "Informatique", "Économie", "Littérature", "Langues", "Histoire", "Géographie", "Philosophie", "Arts"].map((subject) => (
                        <label key={subject} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            value={subject}
                            checked={formData.subjects.includes(subject)}
                            onChange={(e) => handleCheckboxChange(e, "subjects")}
                            className="rounded text-burgundy focus:ring-burgundy h-4 w-4"
                          />
                          <span>{subject}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Academic Strengths */}
            {step === 2 && (
              <div className="space-y-6 animate-slide-up">
                <h2 className="text-2xl font-serif font-semibold text-burgundy mb-6">Vos points forts</h2>
                
                <div className="space-y-4">
                  <p className="block text-sm font-medium text-gray-700 mb-3">
                    Compétences (sélectionnez celles qui vous correspondent le mieux)
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Analyse", "Résolution de problèmes", "Mémorisation", "Expression écrite", 
                      "Expression orale", "Créativité", "Organisation", "Travail en équipe", 
                      "Leadership", "Programmation", "Dessin/Design", "Communication", 
                      "Négociation", "Prise de décision", "Recherche", "Adaptabilité"
                    ].map((strength) => (
                      <label key={strength} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          value={strength}
                          checked={formData.strengths.includes(strength)}
                          onChange={(e) => handleCheckboxChange(e, "strengths")}
                          className="rounded text-burgundy focus:ring-burgundy h-4 w-4"
                        />
                        <span>{strength}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Interests */}
            {step === 3 && (
              <div className="space-y-6 animate-slide-up">
                <h2 className="text-2xl font-serif font-semibold text-burgundy mb-6">Vos centres d'intérêt</h2>
                
                <div className="space-y-4">
                  <p className="block text-sm font-medium text-gray-700 mb-3">
                    Domaines qui vous intéressent (sélectionnez au moins trois)
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Sciences", "Technologie", "Ingénierie", "Médecine", "Droit", 
                      "Commerce", "Finance", "Marketing", "Art et Design", "Littérature", 
                      "Langues étrangères", "Enseignement", "Environnement", "Politique", 
                      "Médias", "Agriculture", "Architecture", "Psychologie", "Sociologie", 
                      "Tourisme", "Sport", "Mode"
                    ].map((interest) => (
                      <label key={interest} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={(e) => handleCheckboxChange(e, "interests")}
                          className="rounded text-burgundy focus:ring-burgundy h-4 w-4"
                        />
                        <span>{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Preferences */}
            {step === 4 && (
              <div className="space-y-6 animate-slide-up">
                <h2 className="text-2xl font-serif font-semibold text-burgundy mb-6">Vos préférences</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Région préférée pour étudier
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy"
                      required
                    >
                      <option value="" disabled>Sélectionnez une région</option>
                      <option value="tunis">Grand Tunis</option>
                      <option value="nord">Nord</option>
                      <option value="nord-ouest">Nord-Ouest</option>
                      <option value="sahel">Sahel</option>
                      <option value="centre">Centre</option>
                      <option value="sud">Sud</option>
                      <option value="indifferent">Indifférent</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="studyYears" className="block text-sm font-medium text-gray-700 mb-1">
                      Durée d'études préférée
                    </label>
                    <select
                      id="studyYears"
                      name="studyYears"
                      value={formData.studyYears}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy"
                      required
                    >
                      <option value="" disabled>Sélectionnez une durée</option>
                      <option value="2-3">2-3 ans (Licence)</option>
                      <option value="5">5 ans (Master)</option>
                      <option value="7+">7+ ans (Doctorat)</option>
                      <option value="indifferent">Indifférent</option>
                    </select>
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
        // Success message after form submission
        <div className="glass-card rounded-2xl p-8 shadow-lg text-center animate-fade-in">
          <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-serif font-semibold text-burgundy mb-3">Analyse complétée avec succès!</h2>
          <p className="text-gray-600 mb-6">
            Vos informations ont été analysées. Découvrez nos recommandations personnalisées ci-dessous.
          </p>
          <div className="pt-4">
            <a href="#recommendations" className="btn-primary">
              Voir mes recommandations
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrientationForm;
