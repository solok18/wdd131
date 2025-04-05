const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("product");



    // This will generate the defualt placeholder
    // const defualtOption = document.createElement("option");
    // defualtOption.value = "";
    // defualtOption.textContent = "Choose a Product...";
    // defualtOption.disabled = true;
    // defualtOption.selected = true;
    // select.appendChild(defualtOption);

    // Here we will create each item
    products.forEach(product => {
        const opt = document.createElement("option");
        opt.value = product.id;
        opt.textContent = product.name;
        select.appendChild(opt);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", () =>{
            let count = Number(localStorage.getItem("reviewCount")) || 0;
            localStorage.setItem("reviewCount", count + 1);
        });
    }
  });