import React, { use, useState } from "react";
import Country from "./Country/Country";

const Countries = ({ countriesPromise }) => {
  const countris = use(countriesPromise);
  const countiesData = countris.countries;
  //   console.log(countiesData);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const vistiedHandler =(country)=>{
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries);
    console.log("Visted:", country.name.common);
  };
  
  const flagsHandler = (flag)=>{
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag)
    // console.log("Flage added", flag)
  }

  return (
    <div>
      <h1> Total Countries : {countiesData.length}</h1>
      <h2>Total Visited Country : {visitedCountries.length} </h2>
      <h2>Visited Flag: {visitedFlags.length}</h2>
      <ol>
        {
          visitedCountries.map(country => <li>{country.name.common}</li>)
        }
      </ol>

      <div className="flag">
        {
          visitedFlags.map((flag, index)=> <img src={flag} key={index
            
          }></img>)
        }
      </div>

      <div className="cards">
        {countiesData.map((country) => (
          <Country key={country.ccn3.ccn3} country={country} vistiedHandler={vistiedHandler} flagsHandler={flagsHandler}> </Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
