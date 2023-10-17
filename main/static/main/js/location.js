document.addEventListener('DOMContentLoaded', (event) => {
    var map = L.map('map').setView([51.505, -0.09], 13); // Initial position set to London

    L.tileLayer('https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=0684bf331dbf482a8eac483976c315d8', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Tiles by <a href="https://www.thunderforest.com/">Thunderforest</a>',
        maxZoom: 22,
    }).addTo(map);

    // Function to get and pin the user's location
    function showUserLocation() {
        // Check if the browser supports Geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var userLocation = [position.coords.latitude, position.coords.longitude];

                // Place a marker on the user's position
                L.marker(userLocation).addTo(map)
                    .bindPopup('You are here!')
                    .openPopup();

                // Set the map view to the user's location
                map.setView(userLocation, 13);
            }, function(error) {
                alert('Geolocation error: ' + error.message);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    // Call the function to show the user's location
    showUserLocation();
});
