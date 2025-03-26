export const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/data"); // Assure-toi que l'URL correspond à ton endpoint Flask
      if (!response.ok) throw new Error("Erreur lors de la récupération des données");
      return await response.json();
    } catch (error) {
      console.error("Erreur API :", error);
      return { data: "Erreur lors du chargement des données" };
    }
  };
  