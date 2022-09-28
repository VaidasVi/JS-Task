/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const generateCarCard = (cardList) => {
  const outputContainer = document.getElementById("output");

  cardList.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const brandName = document.createElement("h2");
    brandName.innerText = card.brand;

    const container = document.createElement("div");
    container.setAttribute("id", "card-container");

    const list = document.createElement("ol");
    // console.log(card.model);
    card.models.map((model) => {
      const listItem = document.createElement("li");
      listItem.textContent = model;
      list.append(listItem);
    });

    container.append(list);
    cardDiv.append(brandName, container);

    outputContainer.append(cardDiv);
  });
};

const getCarList = async () => {
  try {
    const respons = await fetch(ENDPOINT);
    const data = await respons.json();
    console.log(data);
    generateCarCard(data);
  } catch (error) {
    console.log(error);
  }
};

getCarList();
