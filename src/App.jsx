import "./App.css";
import { useCatImages } from "./useCatImages.jsx";
import { useCatFact } from "./hooks/useCatFact.jsx";

function App() {
  const { fact, refreshRandomFact } = useCatFact();
  const { image } = useCatImages({ fact: fact });

  const handleClick = async () => {
    refreshRandomFact();
  };

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
