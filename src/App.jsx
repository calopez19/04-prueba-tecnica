import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { changeFact } from "./fats.js";
import { CAT_END_POINT_IMAGE_Part1, CAT_END_POINT_IMAGE_Part2 } from "./CAT_END_POINT_IMAGE_Part1.jsx";

function App() {
  const [fact, setFact] = useState("");
  const [image, setImage] = useState(null);
  const [factError, setFactError] = useState();

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
