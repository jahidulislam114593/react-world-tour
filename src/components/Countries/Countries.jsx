import { useState, useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    // Check if the country is already in the list to avoid duplicates
    if (!visitedCountries.some((c) => c.cca3 === country.cca3)) {
      setVisitedCountries((prevVisited) => [...prevVisited, country]);
    }
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h3>Visited: {visitedCountries.length}</h3>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>
              {country.name.common}
              {/* <img
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                style={{ width: "100px", height: "100px" }}
              /> */}
            </li>
          ))}
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
