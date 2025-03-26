
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrientationForm from "../components/orientation/OrientationForm";
import ScoreBasedForm from "../components/orientation/ScoreBasedForm";
import AdmissionThresholds from "../components/orientation/AdmissionThresholds";
import { GraduationCap, BookOpen, Calculator } from "lucide-react";

const Orientation = () => {
  const [activeTab, setActiveTab] = useState("score-based");

  return (
    <Layout>
      <div className="container mx-auto py-24 px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-burgundy-dark mb-4">
            Découvrez votre parcours universitaire idéal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Orientez votre avenir académique en fonction de vos résultats au baccalauréat, 
            de vos centres d'intérêt et des critères d'admission officiels.
          </p>
        </div>

        <Tabs 
          defaultValue="score-based" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-5xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-xl shadow-md">
              <TabsTrigger 
                value="score-based" 
                className="data-[state=active]:bg-burgundy-dark data-[state=active]:text-white"
              >
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <Calculator className="h-4 w-4" />
                  <span>Admission par score</span>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="interest-based"
                className="data-[state=active]:bg-burgundy-dark data-[state=active]:text-white"
              >
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Par intérêt</span>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="thresholds"
                className="data-[state=active]:bg-burgundy-dark data-[state=active]:text-white"
              >
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Seuils d'admission</span>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="score-based" className="mt-0">
            <div className="py-6">
              <p className="mb-8 text-center text-gray-600 max-w-3xl mx-auto">
                Entrez vos scores au baccalauréat pour déterminer les filières et universités 
                auxquelles vous êtes éligible selon les critères d'admission officiels.
              </p>
              <ScoreBasedForm />
            </div>
          </TabsContent>
          
          <TabsContent value="interest-based" className="mt-0">
            <div className="py-6">
              <p className="mb-8 text-center text-gray-600 max-w-3xl mx-auto">
                Trouvez votre orientation basée sur vos centres d'intérêt, 
                compétences et préférences académiques.
              </p>
              <OrientationForm />
            </div>
          </TabsContent>
          
          <TabsContent value="thresholds" className="mt-0">
            <div className="py-6">
              <p className="mb-8 text-center text-gray-600 max-w-3xl mx-auto">
                Consultez les seuils d'admission et critères requis pour chaque filière
                selon le guide d'orientation officiel.
              </p>
              <AdmissionThresholds />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Orientation;
