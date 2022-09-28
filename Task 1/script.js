/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("output").innerHTML = "";

  const kg = Number(document.getElementById("search").value);

  // Converting kg to lb, g, oz

  const lb = (kg * 2.2046).toFixed(2);
  const g = (kg / 0.001).toFixed(2);
  const oz = (kg * 35.274).toFixed(2);

  // Creating elements for outputing conversion results
  const conversionOutput = document.createElement("div");
  conversionOutput.setAttribute("id", "conversion");

  const h3 = document.createElement("h3");
  h3.innerText = "Converted Values:";

  const lbOutput = document.createElement("p");
  const gOutput = document.createElement("p");
  const ozOutput = document.createElement("p");

  lbOutput.innerText = `1. ${kg} kilograms is equal to ${lb} pounds.`;
  gOutput.innerText = `2. ${kg} kilograms is equal to ${g} grams.`;
  ozOutput.innerText = `3. ${kg} kilograms is equal to ${lb} ounces.`;

  conversionOutput.append(h3, lbOutput, gOutput, ozOutput);

  document.getElementById("output").append(conversionOutput);
});
