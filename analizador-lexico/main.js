import { analizador } from "./analizador.js";
import { separarElementos } from "./utils.js";

const analyzeBtn = document.getElementById("analyze-btn");

analyzeBtn.addEventListener("click", () => {
  const codeContent = document.getElementById("code");
  const inputList = separarElementos(codeContent.value);
  const respuesta = analizador(inputList);

  const output = document.getElementById("output");
  output.textContent = respuesta.message + "\n" + respuesta.history;
  console.log(respuesta)
  // alert(respuesta.message + "\n" + respuesta.history);
});
