const apiKeyNatPark = "XeD3ty79NiWNMwuU7DVhQM9fye0L5RspxNkmYSXe";

 


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
}

getNatParkInfo();