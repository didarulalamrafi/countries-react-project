import React, { use } from "react";
import Country from "./Country/Country";

const Countries = ({ countriesPromise }) => {
  const countris = use(countriesPromise);
  const countiesData = countris.countries;
  //   console.log(countiesData);
  return (
    <div>
      <h1>Countries : {countiesData.length}</h1>
      <div className="cards">
        {countiesData.map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
