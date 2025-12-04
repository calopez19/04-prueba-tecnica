import { useState, useEffect } from "react";
import { CAT_END_POINT_IMAGE_Part1, CAT_END_POINT_IMAGE_Part2 } from "./constans";

export function useCatImages({ fact }) {
  const [image, setImage] = useState(null);
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

  return { image };
}
