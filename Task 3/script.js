/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const generateCards = (cards) => {
  const outputContainer = document.getElementById("output");
  outputContainer.innerHTML = "";

  //   document.getElementById("message").style.display = "none";

  cards.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const img = document.createElement("img");
    img.setAttribute("src", card.avatar_url);

    const container = document.createElement("div");
    container.classList.add("container");

    const userName = document.createElement("h2");
    userName.classList.add("user-name");
    userName.innerText = card.login;

    container.append(userName);
    cardDiv.append(img, container);

    outputContainer.append(cardDiv);
  });
};

document.getElementById("btn").addEventListener("click", async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    console.log(data);

    generateCards(data);
  } catch (error) {
    console.log(error);
  }
});
