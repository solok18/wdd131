const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Add more temple objects here...
    {
      templeName: "Guatemala City Guatemala",
      location: "Guatemala City, Guatemala",
      dedicated: "1984, December, 14",
      area: 11610,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-6415-main.jpg"
    },
    {
      templeName: "Quetzaltenango Guatemala",
      location: "Quetzaltenango, Guatemala",
      dedicated: "2011, December, 11",
      area: 21085,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/quetzaltenango-guatemala-temple/quetzaltenango-guatemala-temple-15696-main.jpg"
    },
    {
      templeName: "Cobán Guatemala",
      location: "Cobán, Guatemala",
      dedicated: "2024, June, 9",
      area: 8772,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-46348-main.jpg"
    },
  ];


createTempleCards(temples);

const oldTemples = document.querySelector("#oldTemples");
const newTemples = document.querySelector("#newTemples");
const largeTemples = document.querySelector("#largeTemples");
const smallTemples = document.querySelector("#smallTemples");

oldTemples.addEventListener("click", () => {
  createTempleCards(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
});
newTemples.addEventListener("click", () => {
  createTempleCards(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
});
largeTemples.addEventListener("click", () => {
  createTempleCards(temples.filter(temple => temple.area > 90000));
});
smallTemples.addEventListener("click", () => {
  createTempleCards(temples.filter(temple => temple.area < 10000));
});

function createTempleCards(filteredTemples) {
    document.querySelector(".temple-gallery").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
        
        document.querySelector(".temple-gallery").appendChild(card);
    });
}