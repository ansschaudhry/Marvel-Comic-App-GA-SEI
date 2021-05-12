import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import Superhero from "./Superhero";
import SuperheroFullInfo from "./SuperheroFullInfo"
import { Route } from "react-router-dom";


function SuperheroDatabase() {
  const [superheros, setSuperheros] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchSuperheros = async () => {
      const resp = await axios.get(baseURL, config);
      setSuperheros(resp.data.records);
    };
    fetchSuperheros();
  }, [toggleFetch]);

  return (
    <div>
      <h1 id="superhero-database-title">Superhero Database</h1>
      <main id="superhero-database-container">
          {superheros.map((superhero) => (
            <Superhero
              superhero={superhero}
              setToggleFetch={setToggleFetch}
            />
          ))}
      </main>
      <Route path="/superhero-full-info">
        <SuperheroFullInfo  />
      </Route>
    </div>
  );
}

export default SuperheroDatabase;