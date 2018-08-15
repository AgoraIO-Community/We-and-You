$(() => {
	var admin, db, docArr, myDoc;
	var req = new XMLHttpRequest();
	req.addEventListener("load", (x) => {
		admin = JSON.parse(x.currentTarget.responseText);
		// console.log(x.currentTarget.responseText);
		var app = firebase.initializeApp(admin); // connect to cloud Firebase app with we&you's credentials

		db = firebase.firestore(); // connect to cloud Firestore database
		docArr = []; // array of user documents in database
		myDoc = ""; // document for current signed in user

		db.collection('users').get()
			.then((snapshot) => {
				snapshot.forEach((doc) => {
					docArr.push(doc.id); // adds all document ID's to docArr
				});
			});
	});
	req.open("GET", "/efa562b4e3da7df859dd7ebdbfb70618");
	req.send();

	var signStatus = false;
	$("#sign").click(() => {
		signInButton();
	});

	function signInButton() {
		const provider = new firebase.auth.GoogleAuthProvider(); // sign in with firebase
		firebase.auth().signInWithPopup(provider).then((result) => {
			var user = result.user; // sets current user to whoever signed in
			myDoc = db.collection("users").doc(user.uid); // sets or creates doc for user
			$("#sign").html("<h2>" + user.displayName + "</h1>"); // puts user's name on sign in button
			if (!docArr.includes(user.uid)) { // if new user
				alert("Welcome to We & You, " + user.displayName.split(" ")[0]); // welcomes new user
				myDoc.set({ // la ys out format for new user document
					firstName: user.displayName.split(" ")[0],
					lastName: user.displayName.split(" ")[1],
				});

				// ask demographic questions
				// submit answers to firebase w/ Next button
				// leads them to page for tutorial
				// take 20 question quiz after tutorial
				// schedule meeting to be verified
				// after verification, set fb VER to "true"
				// now when they sign in to /help, 
					// lets them into helper console with video chat and load balancing
				// click "ready for caller", sets fb READY to "true"

				// caller opens /call
				// put in basic demographics
				// click get in contact
				// if a volunteer is available, his token is given
				// else, put in line and given waiting screen

				// when someone calls, fb function goes through all documents with "READY" true
				// caller is given token based on a ready helper's fb id
				// caller has 30 seconds to hit "join", and enter the call
				// if caller doesn't join and others are waiting in line behind caller,
					// next in line receives token of volunteer and has 30 seconds
					// caller gets sent back 1 in line
				// if caller joins
					// set READY to "false"
				// when call is over, READY remains false until volunteer clicks "ready for caller" again

			}

			else {
				alert("Welcome back, " + user.displayName); // welcomes previous user
				myDoc.get().then(doc => {
					var entries = Object.entries(doc.data());
					console.log(doc.data());
				});
			}
		}).catch((error) => { console.log(error) });
	}
});
