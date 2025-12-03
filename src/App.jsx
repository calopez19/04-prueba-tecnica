import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

const CAT_END_POINT_IMAGE_Part1 = "https://cataas.com/cat/says/";
const CAT_END_POINT_IMAGE_Part2 = "?fontSize=50&fontColor=red&json=true";
const CAT_END_POINT_FACT = "https://catfact.ninja/fact";

function App() {
  const [fact, setFact] = useState("");
  const [image, setImage] = useState(null);
  const [factError, setFactError] = useState();

  const changeFact = () => {
    fetch(CAT_END_POINT_FACT)
      .then((res) => res.json())
      .then((data) => {
        const newFact = data.fact;
        setFact(newFact);
        const firstThreeWords = newFact.split(" ").slice(0, 3).join(" ");
        console.log(firstThreeWords);
      });
  };


  const handleClick = () => {
    changeFact();
  };


  useEffect(() => {
    changeFact();
  }, []);

  useEffect(() => {
    if (!fact) return;
    const firstThreeWords = fact.split(" ").slice(0, 3).join(" ");
    fetch(
      `${CAT_END_POINT_IMAGE_Part1}${firstThreeWords}${CAT_END_POINT_IMAGE_Part2}`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImage(`${url}`);
      });
  }, [fact]);

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
