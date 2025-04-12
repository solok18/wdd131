const caliLocations = [
    {
        name : "Bakersfield",
        
        fact1:"Bakersfield is renowned as the birthplace of the 'Bakersfield Sound' a distinctive genre of country music made popular by artists like Buck Owens and Merle Haggard.",
        fact2:"The city is a significant agricultural hub, notably home to the nation's two largest carrot growers.",
        food1: "Mossman's Westchester Coffee Shop",
        foodUrl1:"",
        food2:"Luigi's Restaurant and Delicatessen",
        foodUrl2:"",
        location1:"Best Western Plus Hill House",
        locationUrl1:"",
        location2:"La Quinta Inn by Wyndham Bakersfield South",
        locationsUrl2:""
    },
    {
        name : "Modesto",
        
        fact1:"Modesto is famously known as the hometown of filmmaker George Lucas and the setting for his film 'American Graffiti.'",
        fact2:"The city's official motto, 'Water Wealth Contentment Health,' reflects its rich agricultural history and community values.",
        food1: "Dewz Restaurant",
        foodUrl1:"",
        food2:"Harvest Moon",
        foodUrl2:"",
        location1:"Days Inn by Wyndham Modesto",
        locationUrl1:"",
        location2:"Motel 6 Modesto",
        locationsUrl2:""
    },
    {
        name : "Newport Beach",
        
        fact1:"Newport Beach is renowned for its picturesque harbor, which is one of the largest recreational boat harbors on the U.S. west coast.",
        fact2:"The city is famous for its upscale shopping destinations, including Fashion Island, an open-air lifestyle center featuring luxury boutiques and restaurants.",
        food1: "The Crab Cooker",
        foodUrl1:"",
        food2:"Harvest Moon",
        foodUrl2:"",
        location1:"Best Western Plus Newport Mesa Inn",
        locationUrl1:"",
        location2:"Holiday Inn Express Newport Beach",
        locationsUrl2:""
    },
    {
        name : "Oakland",
        
        fact1:"Oakland is home to one of the busiest ports in the United States, serving as a major trade gateway for the Pacific Rim.",
        fact2:"The city is known for its diverse arts and culture scene, boasting more than 50 distinct neighborhoods, each with its own unique character.",
        food1: "Bellagio Restaurant and Wine Bar",
        foodUrl1:"",
        food2:"Daughter Thai Kitchen",
        foodUrl2:"",
        location1:"La Quinta Inn by Wyndham Oakland Airport Coliseum",
        locationUrl1:"",
        location2:"Motel 6 Oakland Embarcadero",
        locationsUrl2:""
    },
    {
        name : "Redland",
        
        fact1:"Redlands earned the nickname 'The City of Beautiful Homes' due to its well-preserved historic architecture and charming neighborhoods.",
        fact2:"The city was once known as the 'Navel Orange Capital of the World,'' reflecting its significant role in the citrus industry.",
        food1: "Caprice Café",
        foodUrl1:"",
        food2:"The Eating Room",
        foodUrl2:"",
        location1:"Comfort Suites Redlands",
        locationUrl1:"",
        location2:"Country Inn & Suites by Radisson, San Bernardino (Redlands)",
        locationsUrl2:""
    },
    {
        name : "Feather River",
        
        fact1:"The Feather River is the principal tributary of the Sacramento River, flowing approximately 73 miles from its headwaters to the Sacramento River.",
        fact2:"It was one of the first rivers designated as part of the National Wild and Scenic Rivers System in 1968, highlighting its environmental significance. ",
        food1: "The Exchange",
        foodUrl1:"",
        food2:"Jenn's Cafe",
        foodUrl2:"",
        location1:"Motel 6 Oroville",
        locationUrl1:"",
        location2:"Econo Lodge Inn & Suites Yuba City",
        locationsUrl2:""
    },
    {
        name : "Sacramento",
        
        fact1:"Sacramento, the capital city of California, is located at the confluence of the Sacramento and American Rivers.",
        fact2:"The city is known for its diverse population and is considered one of the most ethnically and racially integrated cities in the U.S",
        food1: "The Firehouse Restaurant",
        foodUrl1:"",
        food2:"Tower Cafe",
        foodUrl2:"",
        location1:"HI Sacramento Hostel",
        locationUrl1:"",
        location2:"Oasis Inn Sacramento- Elk Grove",
        locationsUrl2:""
    },
    {
        name : "San Diego",
        
        fact1:"San Diego is renowned for its beautiful beaches and near-perfect weather, making it a popular tourist destination.",
        fact2:"The city is home to a significant military presence, including the U.S. Navy and Marine Corps.",
        food1: "Dockside 1953",
        foodUrl1:"",
        food2:"Provisional Kitchen, Cafe, and Mercantile",
        foodUrl2:"",
        location1:"The Lafayette Hotel and Club",
        locationUrl1:"",
        location2:"Kings Inn San Diego",
        locationsUrl2:""
    },
    {
        name : "San Jose",
        
        fact1:"San Jose is the largest city in Northern California by both population and area, serving as a major hub for the technology industry in Silicon Valley.",
        fact2:"Founded in 1777, San Jose is California's oldest civilian settlement and was the site of the state's first capital.",
        food1: "Adega",
        foodUrl1:"",
        food2:"LUNA Mexican Kitchen - The Alameda",
        foodUrl2:"",
        location1:"Wyndham Garden San Jose Airport",
        locationUrl1:"",
        location2:"Hotel Elan",
        locationsUrl2:""
    },
    {
        name : "Fresno",
        
        fact1:"Fresno is the fifth-most populous city in California and serves as the economic hub of the San Joaquin Valley.",
        fact2:"Founded in 1872 by the Central Pacific Railroad, Fresno rapidly grew as an agricultural center due to the fertile soil of the region.",
        food1: "Sam's Italian Deli and Market",
        foodUrl1:"",
        food2:"Pismo's Coastal Grill",
        foodUrl2:"",
        location1:"Hampton Inn Fresno Airport",
        locationUrl1:"",
        location2:"Best Western PLUS Fresno Inn",
        locationsUrl2:""
    },
    {
        name : "Los Angeles",
        
        fact1:"Los Angeles is the second-most populous city in the United States, with an estimated 3.8 million residents as of 2020.",
        fact2:"The city is renowned as the entertainment capital of the world, home to Hollywood and numerous film and television studios.",
        food1: "n/naka",
        foodUrl1:"",
        food2:"Bavel",
        foodUrl2:"",
        location1:"Freehand Los Angeles",
        locationUrl1:"",
        location2:"PodShare Venice",
        locationsUrl2:""
    },
    {
        name : "Yorba Linda",
        
        fact1:"Yorba Linda is known as the 'Land of Gracious Living,'' reflecting its strong sense of community and small-town character.",
        fact2:"The city is the birthplace of Richard Nixon, the 37th President of the United States, and hosts his presidential library and museum.",
        food1: "The Wild Artichoke",
        foodUrl1:"",
        food2:"Terra Wood-Fired Kitchen",
        foodUrl2:"",
        location1:"Extended Stay America Orange County - Yorba Linda",
        locationUrl1:"",
        location2:"Ayres Suites Yorba Linda",
        locationsUrl2:""
    }
    
];
createLocationCards(caliLocations);

function createLocationCards(filteredLocations) {
    document.querySelector(".cali-locations").innerHTML = "";
    filteredLocations.forEach(location => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let fact1 = document.createElement("p");
        let fact2 = document.createElement("p");
        let food1 = document.createElement("p");
        let food2 = document.createElement("p");
        let lodging1 = document.createElement("p");
        let lodging2 = document.createElement("p");
        // let area = document.createElement("p");
        // let img = document.createElement("img");

        name.textContent = location.name;
        fact1.innerHTML = `<span class="label">Fact:</span> ${location.fact1}`;
        fact2.innerHTML = `<span class="label">Fact:</span> ${location.fact2}`;
        food1.innerHTML = `<span class="label">Food:</span> <a href="${location.foodUrl1}" target="_blank"> ${location.food1}</a>`;
        food2.innerHTML = `<span class="label">Food:</span> ${location.food2}`;
        lodging1.innerHTML = `<span class="label">Lodging:</span> ${location.location1}`;
        lodging2.innerHTML = `<span class="label">Lodging:</span> ${location.location2}`;
        // img.setAttribute("src", location.imageurl);
        // img.setAttribute("alt", `${location.name} location`);
        // img.setAttribute("loading", "lazy");
        // img.setAttribute("width", "300")
        // img.setAttribute("height", "200")

        card.appendChild(name);
        card.appendChild(fact1);
        card.appendChild(fact2);
        card.appendChild(food1);
        card.appendChild(food2);
        card.appendChild(lodging1);
        card.appendChild(lodging2);
        // card.appendChild(area);
        // card.appendChild(img);
        
        document.querySelector(".cali-locations").appendChild(card);

        // console.log("Image path:", location.imageurl);
    });
}