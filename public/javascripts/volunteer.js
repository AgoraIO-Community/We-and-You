$(() => {
	var admin, db, docArr, myDoc;
	var req = new XMLHttpRequest();
	req.addEventListener("load", (x) => {
		admin = JSON.parse(x.currentTarget.responseText);
		// console.log(x.currentTarget.responseText);
		var app = firebase.initializeApp(admin); // connect to cloud Firebase app with habitree's credentials

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
				alert("Welcome to We & You, " + user.displayName); // welcomes new user
				myDoc.set({ // lays out format for new user document
					firstName: user.displayName.split(" ")[0],
					lastName: user.displayName.split(" ")[1],
				});
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
