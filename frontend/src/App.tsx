
import { useEffect, useState } from "react";
import { fetchData } from "./services/api"; // Import de la fonction API

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Orientation from "./pages/Orientation";
import Universities from "./pages/Universities";
import Career from "./pages/Career";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData().then(response => setData(response.data));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/orientation" element={<Orientation />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* Affichage des données reçues de Flask */}
          <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Mon site avec React + Flask</h1>
            <p>{data}</p>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};


export default App;
