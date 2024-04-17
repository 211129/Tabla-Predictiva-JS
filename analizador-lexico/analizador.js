import { tabla as parserTable, tokensTerminales } from "./gramatica.js";

function isTerminal(token) {
  return tokensTerminales.has(token);
}

export function analizador(inputList) {
  let history = "";
  inputList.push("$");
  const stack = ["$", "E"];

  while (stack.length > 0) {
    const a = inputList[0];
    const X = stack[stack.length - 1];
    console.log(stack)
    history += `Pila: ${stack} | Entrada: ${a}\n`;

    if (isTerminal(X)) {
      if (X === a) {
        stack.pop();
        inputList.shift();
      } else {
        return {
          success: false,
          message: `Error, se esperaba ${X}`,
          history: history,
        };
      }
    } else {
      try {
        if (Array.isArray(parserTable[X][a])) {
          stack.pop();
          stack.push(...parserTable[X][a].slice().reverse());
        } else {
          return {
            success: false,
            message: `Error, se esperaba ${toString(parserTable[X])}`,
            history: history,
          };
        }
      } catch (error) {
        return {
          success: false,
          message: `Error, se esperaba ${toString(parserTable[X])}`,
          history: history,
        };
      }
    }
  }

  return { success: true, message: "Gramatica correcta", history: history };
}