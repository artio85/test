var lat,lng;
var cities = [
	{	
		id: 0,
		city: 'Kolomiya',
		lat: 48.53055,
		lng: 25.04027
	},
	{
		id: 1,
		city:'Otynia',
		lat: 48.73767,
		lng: 24.86111,
	},
	{
		id: 2,
		city:'Horodenka',
		lat: 48.67274,
		lng: 25.50163,
	},
	{
		id: 3,
		city:'Sniatyn',
		lat: 48.44692,
		lng: 25.56937,
	},
	{
		id: 4,
		city:'Nadvirna',
		lat: 48.63480,
		lng: 24.56936,
	},
	{
		id: 5,
		city:'Deliatyn',
		lat: 48.5333312,
		lng: 24.6333308,
	}
];

var distance = [];
var nearestTown;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    	var lat = position.coords.latitude;
    	var lng = position.coords.longitude;

        cities.map(index => {
        	distance[index.id] = (Math.sqrt(Math.pow((index.lat - lat), 2)
        	 + Math.pow((index.lng - lng), 2)));
        });
        nearestTown = distance.sort(function(a, b){return a - b})[0];

        console.log(distance);
        console.log(nearestTown);
});
} else { 
        console.log("Geolocation is not supported by this browser.");
}



