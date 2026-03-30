import { Suspense } from "react";
import Countries from "./countris/countris";
import "./App.css";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>Please wait...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
