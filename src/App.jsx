import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { defaultExternalConditions } from "vite";

const CAT_END_POINT_FACT = "https://catfact.ninja/fact";
const CAT_END_POINT_IMAGE = `https://cataas.com/cat/says/${"first word"}?fontSize=50&fontColor=red&json=true`;

function App() {
  const [fact, setFact] = useState("lorem ipso cat fat");
  const [image, setImage] = useState(null);
  useEffect(() => {
    fetch(CAT_END_POINT_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact);
        const firstWord = fact.split(' ')[0]
        console.log(firstWord);
        
      });

    fetch(CAT_END_POINT_IMAGE)
      .then((res) => res.json())
      .then((data) => {
        setImage(data.fact);
      });
  }, []);

  return (
    <>
      <h1>App de gatitos </h1>
      {fact && <p>{ fact }</p>}
      <img src={image} alt="imagen gato naranja" />
    </>
  );
}

export default App;
