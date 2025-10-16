import { Aprendiz, NivelEducativo } from "./aprendiz.js";

export const ap = new Aprendiz(
    "Hector Gustavo",
    "Serrano Gutierrez",
    "avatar.png",
    30,
    NivelEducativo.POSGRADO);
console.log(ap);