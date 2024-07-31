import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited ? "visited" : "not-visted"}`}>
      <img src={flags.png} alt="" />
      <h3>{name.common}</h3>
      <p>Area: {area}</p>
      <p>Population: {population}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button style={{ marginRight: "10px" }} onClick={handleVisited}>
        {visited ? "Visited" : "Going"}
      </button>
      {visited ? "Already Visited" : "I want to Visit"}
    </div>
  );
};

export default Country;
