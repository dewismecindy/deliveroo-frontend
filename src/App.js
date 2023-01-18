import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [bucket, setBucket] = useState([
    "bonjour",
    "hello",
    "buenas dias",
    "guttentag",
  ]);

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
