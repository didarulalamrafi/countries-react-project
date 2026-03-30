import React, { useState } from "react";

const Country = ({ country }) => {
  // console.log(country);
  const [vistied, setVisited] = useState(false);
  const vistedCountry = () => {
    // 1st system
    // if (vistied) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // 2nd system
    // setVisited(vistied ? false : true);

    // 3rd and easy system
    setVisited(!vistied);
  };
  return (
    <div className={`card ${vistied && "visited-country"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <div className="card-info" id="text-position">
        <h5 className="margin0">Name: {country.name.common}</h5>
        <h5 className="margin0">Population: {country.population.population}</h5>
        <h5 className="margin0">
          Area: {country.area.area}{" "}
          {country.area.area > 30000 ? "Big Country" : "Small Country"}{" "}
        </h5>
        <h5 className="margin0">Capital: {country.capital.capital}</h5>
        <h5 className="margin0">
          continents : {country.continents.continents}
        </h5>
        <button onClick={vistedCountry}>
          {vistied ? "Visited" : "Not Visited"}
        </button>
      </div>
    </div>
  );
};

export default Country;
