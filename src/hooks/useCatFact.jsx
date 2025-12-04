import { useState, useEffect } from "react";
import { changeFact } from "../fats";

export function useCatFact() {
  const [fact, setFact] = useState();
  const refreshRandomFact = () => {
    changeFact().then((newFact) => {
      setFact(newFact);
    });
  };
  useEffect(refreshRandomFact, []);

  return { fact, refreshRandomFact };
}
