import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /* initialisation des states "bucket" (pour stocket la réponse du back-end) et "cart" (pour stocker le contenu du panier) */
  const [bucket, setBucket] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://cindewi-deliveroo-backend.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Hero data={data} />
            <Menu data={data} bucket={bucket} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
