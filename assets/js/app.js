$(document).ready(function(){//I need jquery to run!

	console.log("testing...");
	var config ={
		apiKey = "AIzaSyBv57BMT1hFCKmHUgNRW46VTxHNuEVRxUA",
		authDomain = "blacksher-trian-schedule.firebaseapp.com",
		databaseURL = "https://blacksher-trian-schedule.firebaseio.com/",
		projectId = "blacksher-trian-schedule",
		storageBucket = "blacksher-trian-schedule.appspot.com",
		messagingSenderId = "738813261960"
	};
	firebase.initializeApp(config);

	var database = firebase.database();

	var name;
	var destination;
	var firstTrain;
	var frequency;

	$("#add-user").on("click", function(){
		event.preventDefault();

	})


});