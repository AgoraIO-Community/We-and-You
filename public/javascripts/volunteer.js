$(() => {
    var app = firebase.initializeApp({
        apiKey: "AIzaSyD9DeyZDsZDvzZXy0HzWN3jQ2uXckR9qes",
        authDomain: "weandyou-7c667.firebaseapp.com",
        databaseURL: "https://weandyou-7c667.firebaseio.com",
        projectId: "weandyou-7c667",
        storageBucket: "weandyou-7c667.appspot.com",
        messagingSenderId: "64203246790"
	}); // connect to cloud Firebase app with habitree's credentials

    console.log("fun pug")
    console.log($("#buttlol"))

    $("#buttlol").click(() => {
        console.log("YA BOIIII")
    })
});