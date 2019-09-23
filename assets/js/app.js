$(document).ready(function(){//I need jquery to run!

	console.log("testing...");
	var config ={
		apiKey: "AIzaSyBv57BMT1hFCKmHUgNRW46VTxHNuEVRxUA",
		authDomain: "blacksher-trian-schedule.firebaseapp.com",
		databaseURL:"https://blacksher-trian-schedule.firebaseio.com/",
		projectId:"blacksher-trian-schedule",
		storageBucket: "blacksher-trian-schedule.appspot.com",
		messagingSenderId: "738813261960"
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

		 database.ref().on("child_added", function(childSnapshot){
			var firstTrainNew = moment(childSnapshot.val().firstTrain, "hh:mm").subtract(1, "years");
        // Difference between the current and firstTrain
        var diffTime = moment().diff(moment(firstTrainNew), "minutes");
        var remainder = diffTime % childSnapshot.val().frequency;
        // Minutes until next train
        var minAway = childSnapshot.val().frequency - remainder;
        // Next train time
        var nextTrain = moment().add(minAway, "minutes");
        nextTrain = moment(nextTrain).format("hh:mm");


			var newrow = $("#new-row")

			newrow.append("<tr><td>" + childSnapshot.val().name +
			"</td><td>" + childSnapshot.val().destination +
			"</td><td>" + childSnapshot.val().frequency +
			"</td><td>" + nextTrain + 
			"</td><td>" + minAway + "</td></tr>");



		 });

	});


});