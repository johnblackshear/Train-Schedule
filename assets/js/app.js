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
	var frequency = 0;

	$("#add-user").on("click", function(){
		event.preventDefault();

		 name = $("#name-input").val().trim();
		 destination = $("#destination-input").val().trim();
		 firstTrain = $("#first-train").val().trim();
		 frequency = $("#frequency-input").val().trim();

		 database.ref().push({
			 name: name,
			 destination: destination,
			 firstTrain: firstTrain,
			 frequency: frequency,
			 dateAdded: firebase.database.ServerValue.TIMESTAMP
		 });
		 $("form")[0].reset();

	});


});