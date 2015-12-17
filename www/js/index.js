
var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	},

	onSuccess: function(position) {
	   /* alert('Latitude: '          + position.coords.latitude          + '\n' +
			  'Longitude: '         + position.coords.longitude         + '\n' +
			  'Altitude: '          + position.coords.altitude          + '\n' +
			  'Accuracy: '          + position.coords.accuracy          + '\n' +
			  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
			  'Heading: '           + position.coords.heading           + '\n' +
			  'Speed: '             + position.coords.speed             + '\n' +
			  'Timestamp: '         + position.timestamp                + '\n');*/

		center = { lat: position.coords.latitude, lng: position.coords.longitude};
		debug.innerHTML += "<p>geo success: " + position.coords.latitude + "," + position.coords.longitude + "</p>";

		map.setCenter(center); 

		/*dataFile = "data/fakeData.json";					// the file we'll be fetching from

		$.getJSON(dataFile, function(data) {				// ajax load

			console.log("data file loaded successfully");
			properties = data.properties;					// place data in global variable
			sites = data.sites;						
			plotSites();
		})
		.fail(function() {

			console.log("could not load data file, check filename and directory");
		});*/

	},

	onError: function(error) {
		debug.innerHTML += "<p>geo error</p>";
	}
};




var debug;

var center;
var map;
var mapReady = false;


debug = document.getElementsByClassName('debug')[0];
debug.innerHTML = "<p>debugging</p>";



function initMap() {

	map = new google.maps.Map(document.getElementsByClassName('map')[0], {
		center: {lat: 40.7053111, lng: -74.2581807},
		zoom: 13,
		disableDefaultUI: true
	});

	google.maps.event.addListenerOnce(map, 'idle', function(){
		mapReady = true;
	});

	navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
}
