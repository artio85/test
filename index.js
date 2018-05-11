var cities = require('./cities.json'):


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    	distance = [];
    	nearestCity = '';
    	lat = position.coords.latitude;
    	lng = position.coords.longitude;

        cities.map(index => {
        	distance[index.id] = (Math.sqrt(Math.pow((index.lat - lat), 2)
        	 + Math.pow((index.lng - lng), 2)));
        });

        nearestDistance = Math.min.apply(null,distance);

        for (i = 0; i < distance.length ; i++){
        	if (distance[i] == nearestDistance) {
        		nearestCity = cities[i].city;
        	}
        }

        console.log('Your location: ' , 'lat: ' , lat, ' lng: ', lng);
        console.log('Closest City(village): ', nearestCity);
});
} else { 
        console.log("Geolocation is not supported by this browser.");
}





