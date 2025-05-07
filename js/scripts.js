document.addEventListener("DOMContentLoaded", () => {    
    const statContainer = document.getElementById("stats-card-container");
    const historyContainer = document.getElementById("history-card-container");

   if (statContainer) {
    fetch("https://api.thedogapi.com/v1/breeds?limit=25&page=0", {
        headers: {
            "x-api-key": "live_YPYDKMlU4Jof3tE9DLcLTXBxJRbWnqVeabUI9luBfCN4VqL9PHGcnePaZAZcuHIQ"
        }
    })  
      .then((response) => response.json())
      .then((stat) => {
        console.log(stat);
        stat.slice(0, 25).forEach((dog) => {
            createStatCard(dog);
        });
        })
      .catch((error) => {
        console.error("Error fetching dog breed stat data:", error);
        });

    function createStatCard(dog) {
        const card = document.createElement("div");
        card.classList.add("dog-card");

        card.innerHTML = `
        <h2>${dog.name}</h2>
        <img src="${
          dog.image?.url || "https://via.placeholder.com/150"
        }" alt="${dog.name}" />
        <p><strong>Weight: </strong> ${
          dog.weight?.imperial || "Unknown"
        } lbs</p>
        <p><strong>Height: </strong>${
          dog.height?.imperial || "Unknown"
        } inches</p>
        <p><strong>Life Span: </strong>${dog.life_span || "Unknown"} </p>
        <p><strong>Temperament: </strong>${dog.temperament || "Unknown"}</p> 
        `;

        statContainer.appendChild(card);
        }
    }
    
    if (historyContainer) {
    fetch("https://api.thedogapi.com/v1/breeds?limit=25&page=0", {
        headers: {
        "x-api-key":
          "live_YPYDKMlU4Jof3tE9DLcLTXBxJRbWnqVeabUI9luBfCN4VqL9PHGcnePaZAZcuHIQ",
      },
  })
      .then((response) => response.json())
      .then((history) => {
        console.log(history);
        history.slice(0, 25).forEach((dog) => {
        createHistoryCard(dog);
      });
    })
      .catch((error) => {
      console.error("Error fetching dog breed history data:", error);
    });

  function createHistoryCard(dog) {
    const card = document.createElement("div");
    card.classList.add("dog-card");

    card.innerHTML = `
        <h2>${dog.name}</h2>
        <img src="${
          dog.image?.url || "https://via.placeholder.com/150"
        }" alt="${dog.name}" />
        <p><strong>Origin: </strong>${dog.origin || "Unknown"}</p>
        <p><strong>Breed group: </strong>${dog.breed_group || "Unknown"}</p>
        <p><strong>Bred for: </strong>${dog.bred_for || "Unknown"}</p> 
    `;

    historyContainer.appendChild(card);
    }
  }

  // Random dog image called from a different API and displayed on Home page
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("random-dog").src = data.message;
    })
    .catch((error) => console.error("Error fetching dog image:", error));
});
