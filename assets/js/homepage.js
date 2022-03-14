const apiKeyNatPark = "XeD3ty79NiWNMwuU7DVhQM9fye0L5RspxNkmYSXe";
var resultsEl = document.querySelector("#results");
var searchBtnEl = document.querySelector("#search");
var nameInputEl = document.querySelector("#park-name");
var alertsEl = document.querySelector("#alerts");
var activitiesEl = document.querySelector("#activities");
var toursEl = document.querySelector("#tours");
var addParkEl = document.querySelector("#add-park");
var storeHighEl = document.querySelector(".store-high");
var storeMedEl = document.querySelector(".store-med");
var storeLowEl = document.querySelector(".store-low");
var apiKeyWeather = "VDnb8aw7KhRDLBsowfaPixWuDjegRJ83";
var forecastContainerEl = document.querySelector("#fiveday-container");
var forecastTitle = document.querySelector("#forecast");
var i = 0;
//park codes
var parks = [
    {
        "name": "Gateway Arch",
        "code": "jeff"
    },
    {
        "name": "Indiana Dunes",
        "code": "indu"
    },
    {
        "name": "White Sands",
        "code": "whsa"
    },
    {
        "name": "Acadia",
        "code": "acad"
    },
    {
        "name": "Arches",
        "code": "arch"
    },
    {
        "name": "Badlands",
        "code": "badl"
    },
    {
        "name": "Big Bend",
        "code": "bibe"
    },
    {
        "name": "Glacier",
        "code": "glac"
    },
    {
        "name": "Glacier Bay",
        "code": "glba"
    },
    {
        "name": "Biscayne",
        "code": "bisc"
    },
    {
        "name": "Black Canyon of the Gunnison",
        "code": "blca"
    },
    {
        "name": "Bryce Canyon",
        "code": "brca"
    },
    {
        "name": "Canyonlands",
        "code": "cany"
    },
    {
        "name": "Capitol Reef",
        "code": "care"
    },
    {
        "name": "Carlsbad Caverns",
        "code": "cave"
    },
    {
        "name": "Channel Islands",
        "code": "chis"
    },
    {
        "name": "Congaree",
        "code": "cong"
    },
    {
        "name": "Crater Lake",
        "code": "crla"
    },
    {
        "name": "Cuyahoga Valley",
        "code": "cuva"
    },
    {
        "name": "Death Valley",
        "code": "deva"
    },
    {
        "name": "Denali",
        "code": "dena"
    },
    {
        "name": "Dry Tortugas",
        "code": "drto"
    },
    {
        "name": "Everglades",
        "code": "ever"
    },
    {
        "name": "Gates of the Arctic",
        "code": "gaar"
    },
    {
        "name": "Grand Canyon",
        "code": "grca"
    },
    {
        "name": "Grand Teton",
        "code": "grte"
    },
    {
        "name": "Great Basin",
        "code": "grba"
    },
    {
        "name": "Great Sand Dunes",
        "code": "grsa"
    },
    {
        "name": "Great Smoky Mountains",
        "code": "grsm"
    },
    {
        "name": "Guadalupe Mountains",
        "code": "gumo"
    },
    {
        "name": "Haleakala",
        "code": "hale"
    },
    {
        "name": "Hawai’i Volcanoes",
        "code": "havo"
    },
    {
        "name": "Hot Springs",
        "code": "hosp"
    },
    {
        "name": "Isle Royale",
        "code": "isro"
    },
    {
        "name": "Joshua Tree",
        "code": "jotr"
    },
    {
        "name": "Katmai",
        "code": "katm"
    },
    {
        "name": "Kenai Fjords",
        "code": "kefj"
    },
    {
        "name": "Kings Canyon",
        "code": "seki"
    },
    {
        "name": "Kobuk Valley",
        "code": "kova"
    },
    {
        "name": "Lake Clark",
        "code": "lacl"
    },
    {
        "name": "Lassen Volcanic",
        "code": "lavo"
    },
    {
        "name": "Mammoth Cave",
        "code": "maca"
    },
    {
        "name": "Mesa Verde",
        "code": "meve"
    },
    {
        "name": "Mount Rainier",
        "code": "mora"
    },
    {
        "name": "American Samoa",
        "code": "npsa"
    },
    {
        "name": "North Cascades",
        "code": "noca"
    },
    {
        "name": "Olympic",
        "code": "olym"
    },
    {
        "name": "Petrified Forest",
        "code": "pefo"
    },
    {
        "name": "Pinnacles",
        "code": "pinn"
    },
    {
        "name": "Redwood",
        "code": "redw"
    },
    {
        "name": "Rocky Mountain",
        "code": "romo"
    },
    {
        "name": "Saguaro",
        "code": "sagu"
    },
    {
        "name": "Sequoia",
        "code": "seki"
    },
    {
        "name": "Shenandoah",
        "code": "shen"
    },
    {
        "name": "Theodore Roosevelt",
        "code": "thro"
    },
    {
        "name": "Virgin Islands",
        "code": "viis"
    },
    {
        "name": "Voyageurs",
        "code": "voya"
    },
    {
        "name": "Wind Cave",
        "code": "wica"
    },
    {
        "name": "Wrangell-St. Elias",
        "code": "wrst"
    },
    {
        "name": "Yellowstone",
        "code": "yell"
    },
    {
        "name": "Yosemite",
        "code": "yose"
    },
    {
        "name": "Zion",
        "code": "zion"
    },
    {
        "name": "New River Gorge",
        "code": "neri"
    }
]
// END ARRAY OF PARK CODES

var clearItems = function () {
    while (resultsEl.firstChild) {
        resultsEl.removeChild(resultsEl.firstChild);
    };
    while (alertsEl.firstChild) {
        alertsEl.removeChild(alertsEl.firstChild);
    };
    while (activitiesEl.firstChild) {
        activitiesEl.removeChild(activitiesEl.firstChild);
    };
    while (toursEl.firstChild) {
        toursEl.removeChild(toursEl.firstChild);
    };
    while (addParkEl.firstChild) {
        addParkEl.removeChild(addParkEl.firstChild);
    };
};

//BEGIN FETCH AND DISPLAY FOR BASIC NAT PARK INFO
var getNatParkInfo = function (code) {
    var natParkUrl = "https://developer.nps.gov/api/v1/parks?parkCode=" + code + "&api_key=" + apiKeyNatPark;
    fetch(natParkUrl)
        .then(function (response) {
            // request was successful
            if (response.ok) {
                response.json().then(function (data) {
                    displayNatParkInfo(data);
                });
            } else {
                alert('Error: National Park Not Found');
            }
        })
        .catch(function (error) {
            alert("Unable to connect to National Park API");
        });
};

var displayNatParkInfo = function (data) {
    console.log("BASIC INFO: ");
    console.log(data);
    $("#desc-link").removeClass("hide");
    //Display National Park name as a title
    var name = data.data[0].fullName;
    var titleEl = document.createElement("h2");
    titleEl.textContent = name;
    titleEl.setAttribute("id", "desc-header");
    resultsEl.append(titleEl);
    //display description beneath the title
    var description = data.data[0].description;
    var descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;
    resultsEl.append(descriptionEl);
    //display address
    var line1 = data.data[0].addresses[0].line1;
    var line2 = data.data[0].addresses[0].line2;
    var city = data.data[0].addresses[0].city;
    var state = data.data[0].addresses[0].stateCode;
    var zip = data.data[0].addresses[0].postalCode;
    var addressTitleEl = document.createElement("span");
    addressTitleEl.textContent = "Address: ";
    addressTitleEl.setAttribute("style", "font-weight:bold;");
    var addressEl = document.createElement("span");
    if (!line2) {
        addressEl.textContent = line1 + ", " + city + ", " + state + " " + zip;
    } else {
        addressEl.textContent = line1 + ", " + line2 + ", " + city + ", " + state + " " + zip;
    }
    addressEl.setAttribute("style", "font-style:italic;");
    var allAddressEl = document.createElement("p");
    allAddressEl.append(addressTitleEl);
    allAddressEl.append(addressEl);
    resultsEl.append(allAddressEl);
    //display directions
    var directions = data.data[0].directionsInfo;
    var directionsEl = document.createElement("p");
    directionsEl.textContent = directions;
    resultsEl.append(directionsEl);
    //display new pictures for slider
    console.log("IMAGES: ");
    console.log(data.data[0].images);
    var images = data.data[0].images;
    for (var i = 0; i < 4; i++) {
        //post imgs
        var index = ("img" + i);
        document.getElementById(index).src = images[i].url;
        //post names for imgs
        var indexN = ("imgName" + i);
        document.getElementById(indexN).textContent = images[i].title;
        //post descriptions for imgs
        var indexD = ("descr" + i);
        document.getElementById(indexD).textContent = images[i].caption;
    }
    //replace links in the footer for nps, rec.gov, and npmaps to reflect the searched park
    var newUrl = data.data[0].url;
    $("#nat-park-site").attr("href", newUrl);
    var parkName = $("#results").find("h2").text();
    $("#rec-site").attr("href", "https://www.recreation.gov/search?q=" + parkName);
    var parkSearchArr = parkName.split(" National Park");
    var parkSearchCode = parkSearchArr[0];
    parkSearchCode = parkSearchCode.toLowerCase();
    parkSearchCode = parkSearchCode.replaceAll(" ","-");
    parkSearchCode = parkSearchCode.replaceAll("ʻ","");
    // parkSearchCode = parkSearchCode.join("");

    $("#map-site").attr("href", "http://npmaps.com/" + parkSearchCode + "/")
}
//END FETCH AND DISPLAY OF BASIC PARK INFO 

// BEGIN FETCH AND DISPLAY OF PARK ALERTS
var getNatParkAlerts = function (code) {
    var natParkUrl = "https://developer.nps.gov/api/v1/alerts?parkCode=" + code + "&api_key=" + apiKeyNatPark;
    fetch(natParkUrl)
        .then(function (response) {
            // request was successful
            if (response.ok) {
                response.json().then(function (data) {
                    displayNatParkAlerts(data);
                });
            } else {
                alert('Error: National Park Not Found');
            }
        })
        .catch(function (error) {
            alert("Unable to connect to National Park API");
        });
};

var displayNatParkAlerts = function (data) {
    // console.log(data);
    var alertArr = data.data;
    for (var i = 0; i < alertArr.length; i++) {
        var alertTitle = alertArr[i].title;
        var alertTitleEl = document.createElement("p");
        alertTitleEl.innerHTML = '<a class="btn-floating pulse"><i class="material-icons alert">priority_high</i></a> ALERT: ' + alertTitle;
        //alertTitleEl.textContent = "ALERT: " + alertTitle;
        alertTitleEl.setAttribute("style", "color: red");
        alertsEl.append(alertTitleEl);
        //<a class="btn-floating pulse"><i class="material-icons">priority_high</i></a>
    }
}
//END FETCH AND DISPLAY OF NAT PARK ALERTS

//BEGIN FETCH AND DISPLAY OF THINGS TO DO
var getNatParkToDos = function (code) {
    var natParkUrl = "https://developer.nps.gov/api/v1/thingstodo?parkCode=" + code + "&api_key=" + apiKeyNatPark;
    fetch(natParkUrl)
        .then(function (response) {
            // request was successful
            if (response.ok) {
                response.json().then(function (data) {
                    displayNatParkToDos(data);
                });
            } else {
                alert('Error: National Park Not Found');
            }
        })
        .catch(function (error) {
            alert("Unable to connect to National Park API");
        });
};

var displayNatParkToDos = function (data) {
    console.log("TO DOS: ");
    console.log(data);
    $("#toDos-link").removeClass("hide");
    var toDoArr = data.data;
    var toDoEl = document.createElement("h3");
    if (!toDoArr[0]) {
        toDoEl.textContent = "No Recommended Activities";
    } else {
        //Add a photo of the first activity to the page
        toDoEl.textContent = "Recommended Activities";
        var imgEl = document.createElement("img");
        imgEl.src = toDoArr[0].images[0].url;
        imgEl.alt = toDoArr[0].images[0].altText;
        imgEl.setAttribute("style", "display:block; width:auto; height:450px");
        toDoEl.setAttribute("style", "text-decoration:underline");
        toDoEl.append(imgEl);
    }
    toDoEl.setAttribute("id", "activities-header");
    activitiesEl.append(toDoEl);
    //get title, duration, description, and season description
    for (var i = 0; i < toDoArr.length; i++) {
        //get activity title
        var toDoTitle = toDoArr[i].title;
        var toDoTitleEl = document.createElement("h5");
        toDoTitleEl.textContent = toDoTitle + " ";
        //if there is a duration mentioned in the data, append it to the end of the activity title
        var toDoLengthEl = document.createElement("span");
        if (toDoArr[i].duration) {
            toDoLengthEl.textContent = " Duration: " + toDoArr[i].duration;
            toDoLengthEl.setAttribute("style", "font-weight:bold; font-size:.65em");
            toDoTitleEl.append(toDoLengthEl);
        }
        //add the short description
        var toDoDesc = toDoArr[i].shortDescription;
        var toDoDescEl = document.createElement("p");
        toDoDescEl.textContent = toDoDesc;
        //add season description
        var seasonDescEl = document.createElement("p");
        $(seasonDescEl).html(toDoArr[i].seasonDescription);
        toDoDescEl.append(seasonDescEl);
        //append to page
        activitiesEl.append(toDoTitleEl);
        activitiesEl.append(toDoDescEl);
    }
}
//END FETCH AND DISPLAY OF THINGS TO DO

//BEGIN FETCH AND DISPLAY OF TOURS
var getNatParkTours = function (code) {
    var natParkUrl = "https://developer.nps.gov/api/v1/tours?parkCode=" + code + "&api_key=" + apiKeyNatPark;
    fetch(natParkUrl)
        .then(function (response) {
            // request was successful
            if (response.ok) {
                response.json().then(function (data) {
                    displayNatParkTours(data);
                });
            } else {
                alert('Error: National Park Not Found');
            }
        })
        .catch(function (error) {
            alert("Unable to connect to National Park API");
        });
};

var displayNatParkTours = function (data) {
    console.log("TOURS: ");
    console.log(data);
    $("#tours-link").removeClass("hide");
    var toursArr = data.data;
    var toursTitleEl = document.createElement("h3");
    if (!toursArr[0]) {
        toursTitleEl.textContent = "No Tours Available";
    } else {
        toursTitleEl.textContent = "Tours";
    }
    toursEl.setAttribute("id", "tours-header");
    toursEl.append(toursTitleEl);
    //get title, duration, durationUnit, description, 
    for (var i = 0; i < toursArr.length; i++) {
        //get tour title
        var tourNameEl = document.createElement("h5");
        tourNameEl.textContent = toursArr[i].title + " ";
        //append duration to the tour title
        var tourLengthEl = document.createElement("span");
        if (toursArr[i].durationUnit === "m") {
            tourLengthEl.textContent = " Duration: " + toursArr[i].durationMin + " - " + toursArr[i].durationMax + " minutes";
        } else if (toursArr[i].durationUnit === "h") {
            tourLengthEl.textContent = " Duration: " + toursArr[i].durationMin + " - " + toursArr[i].durationMax + " hours";
        } else {
            tourLengthEl.textContent = " Duration Unspecified";
        }
        tourLengthEl.setAttribute("style", "font-weight:bold; font-size:.65em");
        tourNameEl.append(tourLengthEl);
        //get tour description
        var tourDescEl = document.createElement("p");
        tourDescEl.textContent = toursArr[i].description;
        //append to the page
        toursEl.append(tourNameEl);
        toursEl.append(tourDescEl);
    }
}
//END FETCH AND DISPLAY OF TOURS

var addParkPrompt = function(submission) {
    addParkEl.textContent = "Add " + submission + " National Park to your Must-Visit list?"
    $(".choices").removeClass("hide");
}

//TO HANDLE THE PARK SUBMISSION BUTTON
var formSubmitHandler = function (event) {
    event.preventDefault();
    // get value from input element
    var submission = nameInputEl.value.trim();
    var park = parks.find(park => park.name === submission);
    console.log(park.name);
    //If the user wrote a park, empty the input section and get the nat park info
    if (submission) {
    clearItems();
    getNatParkInfo(park.code);
    getNatParkAlerts (park.code);
    getNatParkToDos (park.code);
    getNatParkTours(park.code);
    addParkPrompt(submission);
    get5Day(park.name);
    nameInputEl.value = "";
    } else {
        alert("Please enter a National Park.");
    }
};


//Slideshow of NP photos
$(document).ready(function () {
    $('.slider').slider({
        full_width: true,
        height: 500,
        interval: 8000
    });
});
$(document).ready(function () {


});

// Input-search NP form
$(document).ready(function () {
    $('input#park-name').autocomplete({
        data: {
            "Denali": null,
            "Gates of the Arctic": null,
            "Glacier Bay": 'https://placehold.it/250x250',
            "Acadia": null,
            "American Samoa": null,
            "Arches": null,
            "Badlands": null,
            "Big Bend": null,
            "Biscayne": null,
            "Black Canyon of the Gunnison": null,
            "Bryce Canyon": null,
            // "Cabrillo": null,
            "Canyonlands": null,
            "Capitol Reef": null,
            "Carlsbad Caverns": null,
            "Channel Islands": null,
            "Congaree": null,
            "Crater Lake": null,
            "Cuyahoga Valley": null,
            "Death Valley": null,
            "Denali": null,
            "Dry Tortugas": null,
            "Everglades": null,
            "Gates of the Arctic": null,
            "Gateway Arch": null,
            // "Gettysburg National Military Park": null,
            "Glacier": null,
            "Glacier Bay": null,
            "Grand Canyon": null,
            "Grand Teton": null,
            "Great Basin": null,
            "Great Sand Dunes": null,
            "Great Smoky Mountains": null,
            "Guadalupe Mountains": null,
            "Haleakala": null,
            "Hawai’i Volcanoes": null,
            // "Harpers Ferry": null,
            "Hot Springs": null,
            "Isle Royale": null,
            "Joshua Tree": null,
            "Katmai": null,
            "Kenai Fjords": null,
            "Kings Canyon": null,
            "Kobuk Valley": null,
            "Lake Clark": null,
            "Lassen Volcanic": null,
            "Mammoth Cave": null,
            "Mesa Verde": null,
            "Mount Rainier": null,
            "North Cascades": null,
            // "Organ Pipe Cactus": null,
            "Olympic": null,
            "Petrified Forest": null,
            "Pinnacles": null,
            "Redwood": null,
            "Rocky Mountain": null,
            "Saguaro": null,
            "Sequoia": null,
            "Shenandoah": null,
            "Theodore Roosevelt": null,
            // "Valley Forge": null,
            "Virgin Islands": null,
            "Voyageurs": null,
            "Wind Cave": null,
            "Wrangell–St. Elias": null,
            "Yellowstone": null,
            "Yosemite": null,
            "Zion": null,
        },
    });
});



///
var createCards = function () {
    //debugger;
    for (let i = 0; i < 2; i++) {
        //get code for each NP
        var parkCard = parks[i].code;
        //get data for each NP
        getNPInfo(parkCard);

        function getNPInfo (code) {
            var natParkUrl = "https://developer.nps.gov/api/v1/parks?parkCode=" + code + "&api_key=" + apiKeyNatPark;
            fetch(natParkUrl)
                .then(function (response) {
                    // request was successful
                    if (response.ok) {
                        response.json().then(function (data) {
                            fillCards(data);
                        });
                    } else {
                        alert('Error: National Park Not Found');
                    }
                })
                .catch(function (error) {
                    alert("Unable to connect to National Park API");
                });
        };

        function fillCards(data) {
            //get img, imgName and descr for each card on homepage
            var images = data.data[0].images;

            //post imgs
            var index = ("cardImg" + i);
            document.getElementById(index).src = images[i].url;
            //post names for imgs
            var indexN = ("cardName" + i);
            document.getElementById(indexN).textContent = images[i].title;
            //post descriptions for imgs
            var indexD = ("cardDescr" + i);
            document.getElementById(indexD).textContent = images[i].caption;

        }
    }
}
//
createCards();


$("#check").click(function(){
    var parkName = $("#results").find("h2").text();
    var priority = $('input[name=priority]:checked', '.choices').val()
    console.log(parkName);
    console.log(priority);
    localStorage.setItem(parkName, JSON.stringify(priority));
    loadParks();
    // localStorage.setItem
        
});

var loadParks = function(){
    while (storeHighEl.firstChild) {
        storeHighEl.removeChild(storeHighEl.firstChild);
    };
    storeHighEl.textContent= "High Priority Parks";
    while (storeMedEl.firstChild) {
        storeMedEl.removeChild(storeMedEl.firstChild);
    };
    storeMedEl.textContent= "Medium Priority Parks";
    while (storeLowEl.firstChild) {
        storeLowEl.removeChild(storeLowEl.firstChild);
    };
    storeLowEl.textContent= "Low Priority Parks";
    for (var i=0; i<localStorage.length;i++) {
        if (localStorage.key(i).match("National Park")) {
            // console.log(localStorage.key(i));
            var storedPark = localStorage.key(i);
            var storedParkEl = document.createElement("li");
            storedParkEl.textContent = storedPark;
            var storedPriority = JSON.parse(localStorage.getItem(storedPark));
            // console.log(storedPriority);
            if (storedPriority === "High Priority") {
                $(".store-high").removeClass("hide");
                storeHighEl.append(storedParkEl);
            }else if (storedPriority === "Medium Priority") {
                $(".store-med").removeClass("hide");
                storeMedEl.append(storedParkEl);
            }else if (storedPriority === "Low Priority") {
                $(".store-low").removeClass("hide");
                storeLowEl.append(storedParkEl);
            }
        }
    }
    $(".list-header li").addClass("list-item");
}

//Weather API
var get5Day = function(city){
    var apiKey = "4ab2d4e1d400c9fddaeddcbd67c21dac"
    var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            display5Day(data);
           console.log(data);
        });
    });
};

var display5Day = function(weather){
    forecastContainerEl.textContent = ""
    forecastTitle.textContent = "5-Day Forecast:";
    console.log(weather);
    var forecast = weather.list;
        for(var i=5; i < forecast.length; i=i+8){
       var dailyForecast = forecast[i];
        
       
       var forecastEl=document.createElement("div");
       forecastEl.classList = "card bg-primary text-light m-2";

       var forecastDate = document.createElement("h5")
       forecastDate.textContent= moment.unix(dailyForecast.dt).format("MMM D, YYYY");
       forecastDate.classList = "card-header text-center"
       forecastEl.appendChild(forecastDate);

       var weatherIcon = document.createElement("img")
       weatherIcon.classList = "card-body text-center";
       weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}@2x.png`);  

       //append weather
       forecastEl.appendChild(weatherIcon);
       
       //make element for temp
       var forecastTempEl=document.createElement("span");
       forecastTempEl.classList = "card-body text-center";
       forecastTempEl.textContent = dailyForecast.main.temp + " °F";
        forecastEl.appendChild(forecastTempEl);

       var forecastHumEl=document.createElement("span");
       forecastHumEl.classList = "card-body text-center";
       forecastHumEl.textContent = dailyForecast.main.humidity + "  %";
       forecastEl.appendChild(forecastHumEl);

       //append forcast to div
        forecastContainerEl.appendChild(forecastEl);
    }


var addParkPrompt = function (submission) {
    addParkEl.textContent = "Add " + submission + " National Park to your Must-Visit list?"
    $(".choices").removeClass("hide");

}
searchBtnEl.addEventListener("click", formSubmitHandler);
loadParks();





function addStoredParkToCard(parkName) {

    //get code for each NP
    var park = parkName.replace(' National Park', '');

    function isPark(NP) {
        return NP.name === park;
    }
    console.log(parks.find(isPark).code);
    var parkCode = parks.find(isPark).code;

    //get data for each NP
    getNPInfo(parkCode);

    function getNPInfo(code) {

        var natParkUrl = "https://developer.nps.gov/api/v1/parks?parkCode=" + code + "&api_key=" + apiKeyNatPark;
        fetch(natParkUrl)
            .then(function (response) {
                // request was successful
                if (response.ok) {
                    response.json().then(function (data) {
                        fillCards(data);
                    });
                } else {
                    alert('Error: National Park Not Found');
                }
            })
            .catch(function (error) {
                alert("Unable to connect to National Park API");
            });
        };
        
        function fillCards(data) {

        // //get img, imgName and descr for each card on homepage
         var images = data.data[0].images;
        //create card append it to container and fill up with info from local storage
        $('#cardParent').append(
            $('<div/>')
            .addClass("col s5 m5 hoverable cardConteiner")
            
            .append(
                $('<div/>')
                .addClass("card")
            
                .append(
                    $('<div/>')
                    .addClass("card-image")
                    
                    .append(
                        $('<img/>')
                        .attr("id", "cardImg" + i)
                        .attr("src", images[i].url)
                        .addClass("aspect-ratio")
                    )
                    .append(
                        $('<span/>')
                        .attr("id", "cardName" + i)
                        .addClass("card-title")
                        .text(parkName)
                    )
                    //add <a> element 
                )
            )
        );

        $('.card').append(
            $('<div/>')
            .addClass("card-content")
            .append(
                $('<p/>')
                .attr("id", "cardDescr" + i)
                .text(images[i].caption)
            )
        )

        i++;

    }




};

// Create cards of favorite NPs
// var createCards = function () {
//     for (let i = 0; i < 2; i++) {
//         //get code for each NP
//         var parkCard = parks[i].code;
//         //get data for each NP
//         getNPInfo(parkCard);

//         function getNPInfo (code) {
//             var natParkUrl = "https://developer.nps.gov/api/v1/parks?parkCode=" + code + "&api_key=" + apiKeyNatPark;
//             fetch(natParkUrl)
//                 .then(function (response) {
//                     // request was successful
//                     if (response.ok) {
//                         response.json().then(function (data) {
//                             fillCards(data);
//                         });
//                     } else {
//                         alert('Error: National Park Not Found');
//                     }
//                 })
//                 .catch(function (error) {
//                     alert("Unable to connect to National Park API");
//                 });
//         };

//         function fillCards(data) {
//             //get img, imgName and descr for each card on homepage
//             var images = data.data[0].images;

//             //post imgs
//             var index = ("cardImg" + i);
//             document.getElementById(index).src = images[i].url;
//             //post names for imgs
//             var indexN = ("cardName" + i);
//             document.getElementById(indexN).textContent = images[i].title;
//             //post descriptions for imgs
//             var indexD = ("cardDescr" + i);
//             document.getElementById(indexD).textContent = images[i].caption;

//         }
//     }
// }

