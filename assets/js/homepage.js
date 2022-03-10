const apiKeyNatPark = "XeD3ty79NiWNMwuU7DVhQM9fye0L5RspxNkmYSXe";
var resultsEl = document.querySelector("#results");


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
    var allAddressEl = document.createElement("p");
    var addressEl = document.createElement("span");
    addressEl.textContent = line1 + ", " + line2 + ", " + city + ", " + state + " " + zip;
    addressEl.setAttribute("style", "font-style:italic;");
    allAddressEl.textContent = "Address: ";
    allAddressEl.append(addressEl);
    resultsEl.append(allAddressEl);


    
}

getNatParkInfo();