import { CAT_END_POINT_FACT} from "./constans.js";


export const changeFact = async () => {
    const res = await fetch(CAT_END_POINT_FACT);
    const data = await res.json();
    const newFact = data.fact;
    return newFact;
};
