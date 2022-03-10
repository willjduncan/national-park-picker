const apiKeyNatPark = "XeD3ty79NiWNMwuU7DVhQM9fye0L5RspxNkmYSXe";




var getNatParkInfo = function () {
    var natParkUrl = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=" + apiKeyNatPark;
    fetch(natParkUrl)
        .then(function (response) {
            // request was successful
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
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
    console.log(data);
}

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
    $('input.autocomplete').autocomplete({
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
            "Cabrillo": null,
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
            "Gettysburg National Military Park": null,
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
            "Harpers Ferry": null,
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
            "Organ Pipe Cactus": null,
            "Olympic": null,
            "Petrified Forest": null,
            "Pinnacles": null,
            "Redwood": null,
            "Rocky Mountain": null,
            "Saguaro": null,
            "Sequoia": null,
            "Shenandoah": null,
            "Theodore Roosevelt": null,
            "Valley Forge": null,
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

getNatParkInfo();