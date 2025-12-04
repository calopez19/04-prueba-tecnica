import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { changeFact } from "./fats.js";
import { useCatImages } from "./useCatImages.jsx";


function App() {
  const [fact, setFact] = useState("");
  const [factError, setFactError] = useState();
  const {image} = useCatImages({ fact:fact })

  const handleClick = () => {
    changeFact().then((newFact) => {
      setFact(newFact)
    })
  };

  useEffect(() => {
    changeFact().then((newFact) => {
      setFact(newFact)
    })
  }, []);


  return (
    <>
      <h1>App de gatitos </h1>
      <button onClick={handleClick}>change fact</button>
      <section
        style={{
          paddingTop: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>{fact}</p>
        {image && (
          <img
            src={image}
            alt="imagen gato naranja"
            style={{ height: "400px", width: "auto" }}
          />
        )}
      </section>
    </>
  );
}

export default App;
