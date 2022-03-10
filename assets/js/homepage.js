const apiKeyNatPark = "XeD3ty79NiWNMwuU7DVhQM9fye0L5RspxNkmYSXe";
var resultsEl = document.querySelector("#results");
//codes
var parks = [
    {
    "name" : "Gateway Arch",
    "code" : "jeff"
    },
    {
    "name" : "Indiana Dunes",
    "code" : "indu"
    },
    {
    "name" : "White Sands",
    "code" : "whsa"
    },
    {
    "name" : "Acadia",
    "code" : "acad"
    },
    {
    "name" : "Arches",
    "code" : "arch"
    },
    {
    "name" : "Badlands",
    "code" : "badl"
    },
    {
    "name" : "Big Bend",
    "code" : "bibe"
    },
    {
    "name" : "Glacier",
    "code" : "glac"
    },
    {
    "name" : "Glacier Bay",
    "code" : "glba"
    },
    {
    "name" : "Biscayne",
    "code" : "bisc"
    },
    {
    "name" : "Black Canyon of the Gunnison",
    "code" : "blca"
    },
    {
    "name" : "Bryce Canyon",
    "code" : "brca"
    },
    {
    "name" : "Canyonlands",
    "code" : "cany"
    },
    {
    "name" : "Capitol Reef",
    "code" : "care"
    },
    {
    "name" : "Carlsbad Caverns",
    "code" : "cave"
    },
    {
    "name" : "Channel Islands",
    "code" : "chis"
    },
    {
    "name" : "Congaree",
    "code" : "cong"
    },
    {
    "name" : "Crater Lake",
    "code" : "crla"
    },
    {
    "name" : "Cuyahoga Valley",
    "code" : "cuva"
    },
    {
    "name" : "Death Valley",
    "code" : "deva"
    },
    {
    "name" : "Denali",
    "code" : "dena"
    },
    {
    "name" : "Dry Tortugas",
    "code" : "drto"
    },
    {
    "name" : "Everglades",
    "code" : "ever"
    },
    {
    "name" : "Gates of the Arctic",
    "code" : "gaar"
    },
    {
    "name" : "Grand Canyon",
    "code" : "grca"
    },
    {
    "name" : "Grand Teton",
    "code" : "grte"
    },
    {
    "name" : "Great Basin",
    "code" : "grba"
    },
    {
    "name" : "Great Sand Dunes",
    "code" : "grsa"
    },
    {
    "name" : "Great Smoky Mountains",
    "code" : "grsm"
    },
    {
    "name" : "Guadalupe Mountains",
    "code" : "gumo"
    },
    {
    "name" : "Haleakala",
    "code" : "hale"
    },
    {
    "name" : "Hawaii Volcanoes",
    "code" : "havo"
    },
    {
    "name" : "Hot Springs",
    "code" : "hosp"
    },
    {
    "name" : "Isle Royale",
    "code" : "isro"
    },
    {
    "name" : "Joshua Tree",
    "code" : "jotr"
    },
    {
    "name" : "Katmai",
    "code" : "katm"
    },
    {
    "name" : "Kenai Fjords",
    "code" : "kefj"
    },
    {
    "name" : "Kings Canyon",
    "code" : "seki"
    },
    {
    "name" : "Kobuk Valley",
    "code" : "kova"
    },
    {
    "name" : "Lake Clark",
    "code" : "lacl"
    },
    {
    "name" : "Lassen Volcanic",
    "code" : "lavo"
    },
    {
    "name" : "Mammoth Cave",
    "code" : "maca"
    },
    {
    "name" : "Mesa Verde",
    "code" : "meve"
    },
    {
    "name" : "Mount Rainier",
    "code" : "mora"
    },
    {
    "name" : "American Samoa",
    "code" : "npsa"
    },
    {
    "name" : "North Cascades",
    "code" : "noca"
    },
    {
    "name" : "Olympic",
    "code" : "olym"
    },
    {
    "name" : "Petrified Forest",
    "code" : "pefo"
    },
    {
    "name" : "Pinnacles",
    "code" : "pinn"
    },
    {
    "name" : "Redwood",
    "code" : "redw"
    },
    {
    "name" : "Rocky Mountain",
    "code" : "romo"
    },
    {
    "name" : "Saguaro",
    "code" : "sagu"
    },
    {
    "name" : "Sequoia",
    "code" : "seki"
    },
    {
    "name" : "Shenandoah",
    "code" : "shen"
    },
    {
    "name" : "Theodore Roosevelt",
    "code" : "thro"
    },
    {
    "name" : "Virgin Islands",
    "code" : "viis"
    },
    {
    "name" : "Voyageurs",
    "code" : "voya"
    },
    {
    "name" : "Wind Cave",
    "code" : "wica"
    },
    {
    "name" : "Wrangell-St. Elias",
    "code" : "wrst"
    },
    {
    "name" : "Yellowstone",
    "code" : "yell"
    },
    {
    "name" : "Yosemite",
    "code" : "yose"
    },
    {
    "name" : "Zion",
    "code" : "zion"
    },
    {
    "name" : "New River Gorge",
    "code" : "neri"
    }
]


var getNatParkInfo = function() {
    var natParkUrl = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=" + apiKeyNatPark;
    fetch(natParkUrl)
        .then(function(response) {
            // request was successful
            if (response.ok) {
                response.json().then(function(data) {
                console.log(data);
                displayNatParkInfo(data);
            });
            } else {
                alert('Error: National Park Not Found');
            }
        })
        .catch(function(error) {
        alert("Unable to connect to National Park API");
    });
};

var displayNatParkInfo = function(data) {
    console.log(data);
    //Display National Park name as a title
    var name = data.data[0].fullName;
    var titleEl = document.createElement("h2");
    titleEl.textContent = name;
    resultsEl.append(titleEl);
    //display description beneath the title
    var description = data.data[0].description;
    var descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;
    resultsEl.append(descriptionEl);
    //display address
    console.log(data.data[0].addresses[0]);
    var line1 = data.data[0].addresses[0].line1;
    var line2 = data.data[0].addresses[0].line2;
    var city = data.data[0].addresses[0].city;
    var state = data.data[0].addresses[0].stateCode;
    var zip = data.data[0].addresses[0].postalCode;
    var addressTitleEl = document.createElement("span");
    addressTitleEl.textContent = "Address: ";
    addressTitleEl.setAttribute("style", "font-weight:bold;");
    var addressEl = document.createElement("span");
    addressEl.textContent = line1 + ", " + line2 + ", " + city + ", " + state + " " + zip;
    addressEl.setAttribute("style", "font-style:italic;");
    var allAddressEl = document.createElement("p");
    allAddressEl.append(addressTitleEl);
    allAddressEl.append(addressEl);
    resultsEl.append(allAddressEl);
    //display hours of operation
    console.log(data.data[0].operatingHours[0].standardHours);
    var hours = data.data[0].operatingHours[0].standardHours;
    for (var i =0; i<hours.length;i++) {
    }


    
}


getNatParkInfo();