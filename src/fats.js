import { CAT_END_POINT_FACT} from "./CAT_END_POINT_IMAGE_Part1.jsx";


export const changeFact = async () => {
    const res = await fetch(CAT_END_POINT_FACT);
    const data = await res.json();
    const newFact = data.fact;
    return newFact;
};
