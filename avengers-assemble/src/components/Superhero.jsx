import axios from "axios";
import { baseURL, config } from "../services";
import { Link } from "react-router-dom";

function Superhero(props) {
  const deleteSuperhero = async () => {
    const specificURL = `${baseURL}/${props.superhero.id}`;
    await axios.delete(specificURL, config);
    props.setToggleFetch((curr) => !curr);
  };

  const { alias, image, real_name, origin } = props.superhero.fields;

  return (
    <div id="superhero-card">
      <img src={image} alt="Superhero"></img>
      <h3>{alias}</h3>
      <h4>{real_name}</h4>
      <h4>From: {origin}</h4>
      <Link to="/superhero-full-info">
        <button id="superhero-database-more-info">More Info</button>
      </Link>
      <button id="superhero-database-delete" onClick={deleteSuperhero}>
        Remove
      </button>
    </div>
  );
}

export default Superhero;
