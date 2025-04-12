const caliTemples = [
        {
            name : "Bakersfield",
            location: "California",
            addresses: "Stockdale Highway and Jewetta Avenue, Bakersfield, California",
            phone: "n/a",
            announcement: "2 April 2023",
            grounbraking: "n/a",
            siteDedication:"n/a",
            dedication: "n/a",
            decicatedBy: "n/a",
            imageurl : "images/bakersfield-temple.webp"
        },
        {
            name : "Modesto",
            location: "California",
            addresses: "Adjacent to 4300 Dale Road,  Modesto, California",
            phone: "n/a",
            announcement: "3 April 2022",
            grounbraking: "7 October 2023",
            siteDedication:"Gary B. Sabin",
            dedication: "n/a",
            decicatedBy: "n/a",
            imageurl : "images/modesto-temple.webp"
        },
        {
            name : "Newport Beach",
            location: "California",
            addresses: "2300 Bonita Canyon Dr, Newport Beach, California  92660-9118",
            phone: "(+1) 949-644-1820",
            announcement: "21 April 2001",
            grounbraking: "15 August 2003",
            siteDedication:"Duane B. Gerrard",
            dedication: "28 August, 2005",
            decicatedBy: "Gordon B. Hinckley",
            imageurl : "images/newport-beach-temple.webp"
        },
        {
            name : "Oakland",
            location: "California",
            addresses: "4770 Lincoln Ave, Oakland, California  94602-2535",
            phone: "(+1) 510-531-3200",
            announcement: "23 January 1961",
            grounbraking: "26 May 1962",
            siteDedication:"David O. McKay",
            dedication: "17-19 November, 1964",
            decicatedBy: "David O. McKay",
            imageurl : "images/oakland-temple.webp"
        },
        {
            name : "Redland",
            location: "California",
            addresses: "1761 Fifth Ave, Redlands, California  92374-5503",
            phone: "(+1) 909-389-7369",
            announcement: "21 April 2001",
            grounbraking: "1 December 2001",
            siteDedication:"Dieter F. Uchtdorf",
            dedication: "14 September, 2003",
            decicatedBy: "Gordon B. Hinckley",
            imageurl : "images/redlands-temple.webp"
        },
        {
            name : "Feather River",
            location: "California",
            addresses: "1470 Butte House Road, Yuba City, California  95993",
            phone: "(+1) 530-491-2710",
            announcement: "7 October 2018",
            grounbraking: "18 July 2020",
            siteDedication:"Paul H. Watkins",
            dedication: "8 October, 2023",
            decicatedBy: "Ulisses Soares",
            imageurl : "images/feather-river-temple.webp"
        },
        {
            name : "Sacramento",
            location: "California",
            addresses: "2110 California Cir, Rancho Cordova, California  95742-6415",
            phone: "(+1) 916-357-5870",
            announcement: "21 April 2001",
            grounbraking: "22 August 2004",
            siteDedication:"Gordon B. Hinckley",
            dedication: "3 September, 2006",
            decicatedBy: "Gordon B. Hinckley",
            imageurl : "images/sac-temple.webp"
        },
        {
            name : "San Diego",
            location: "California",
            addresses: "7474 Charmant Dr, San Diego, California  92122-5000",
            phone: "(+1) 858-622-0991",
            announcement: "7 April 1984",
            grounbraking: "27 February 1988",
            siteDedication:"Ezra Taft Benson",
            dedication: "25-30 April 1993",
            decicatedBy: "Gordon B. Hinckley",
            imageurl : "images/san-diego-temple.webp"
        },
        {
            name : "San Jose",
            location: "California",
            addresses: "771 West Fremont Avenue, Sunnyvale, California",
            phone: "n/a",
            announcement: " 2 April 2023",
            grounbraking: "n/a",
            siteDedication:"n/a",
            dedication: "n/a",
            decicatedBy: "n/a",
            imageurl : "images/san-jose-temple.webp"
        },
        {
            name : "Fresno",
            location: "California",
            addresses: "6290 N Valentine Ave, Fresno, California  93711",
            phone: "(+1) 559-437-9451",
            announcement: "8 January 1999",
            grounbraking: "20 March 1999",
            siteDedication:"John B. Dickson",
            dedication: "9 April, 2000",
            decicatedBy: "Gordon B. Hinckley",
            imageurl : "images/fresno-temple.webp"
        },
        {
            name : "Los Angeles",
            location: "California",
            addresses: "10777 Santa Monica Blvd, Los Angeles, California  90025-4718",
            phone: "(+1) 310-474-5569",
            announcement: "6 March 1937",
            grounbraking: "22 September 1951",
            siteDedication:"David O. McKay",
            dedication: "11-14 March, 1956",
            decicatedBy: "David O. McKay",
            imageurl : "images/los-angeles-temple.webp"
        },
        {
            name : "Yorba Linda",
            location: "California",
            addresses: "17130 Bastanchury Road, Yorba Linda, California",
            phone: "n/a",
            announcement: "4 April 2021",
            grounbraking: "18 June 2022",
            siteDedication:"Mark A. Bragg",
            dedication: "n/a",
            decicatedBy: "n/a",
            imageurl : "images/yorba-linda-temple.webp"
        }
        
    ];
    createTempleCards(caliTemples);

    function createTempleCards(filteredTemples) {
        document.querySelector(".cali-temples").innerHTML = "";
        filteredTemples.forEach(temple => {
            let card = document.createElement("section");
            let name = document.createElement("h3");
            let location = document.createElement("p");
            let announce = document.createElement("p");
            let phone = document.createElement("p");
            let grounbraking = document.createElement("p");
            let siteDedication = document.createElement("p");
            let dedication = document.createElement("p");
            let decicatedBy = document.createElement("p");
            let img = document.createElement("img");
    
            name.textContent = `${temple.name} ${temple.location} Temple`;
            location.innerHTML = `<span class="label">Address:</span> ${temple.addresses}`;
            announce.innerHTML = `<span class="label">Announced on:</span> ${temple.announcement}`;
            phone.innerHTML = `<span class="label">Phone:</span> ${temple.phone}`;
            grounbraking.innerHTML = `<span class="label">Groundbraking:</span> ${temple.grounbraking}`;
            siteDedication.innerHTML = `<span class="label">Site Dedication by:</span> ${temple.siteDedication}`;
            dedication.innerHTML = `<span class="label">Dedication date:</span> ${temple.dedication}`;
            decicatedBy.innerHTML = `<span class="label">Dedicated by:</span> ${temple.decicatedBy}`;
            img.setAttribute("src", temple.imageurl);
            img.setAttribute("alt", `${temple.name} Temple`);
            img.setAttribute("loading", "lazy");
            // img.setAttribute("width", "300")
            // img.setAttribute("height", "200")
            
            card.appendChild(name);
            card.appendChild(img);
            card.appendChild(location);
            card.appendChild(announce);
            card.appendChild(phone);
            card.appendChild(grounbraking);
            card.appendChild(siteDedication);
            card.appendChild(dedication);
            card.appendChild(decicatedBy);
            // card.appendChild(img);
            
            document.querySelector(".cali-temples").appendChild(card);

            console.log("Image path:", temple.imageurl);
        });
    }