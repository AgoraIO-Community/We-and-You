<template>
  <div id="app">
    <link rel="stylesheet" href="./src/assets/css/main.css">
    <router-view/>
  </div>
</template>

<script>
import firebase from "@/firebase/init.js";
export default {
  name: "App"
};
</script>

<style>
/* =========================================================================== */
/*  Main Page                                                                  */
/* =========================================================================== */
#main-page-text-box {
  padding-top: 250px;
  text-align: center;
  font-size: 100%;
}

#main-page-text-box p {
  color: white;
  font-size: 24px;
  margin-top: 50px;
}

#main-page-company-name {
  padding-top: 50px;
  margin-left: 75px;
  float: left;
  font-size: 20px;
}

#main-page-nav-bar {
  margin-left: 75px;
}

#main-page-nav-bar li {
  padding-top: 50px;
  margin-right: 75px;
  float: right;
  list-style: none;
}

#not-main-page-company-name {
  padding-top: 20px;
  margin-left: 75px;
  float: left;
  font-size: 20px;
}

#not-main-page-nav-bar {
  margin-left: 75px;
}

#not-main-page-nav-bar li {
  padding-top: 20px;
  margin-right: 75px;
  float: right;
  list-style: none;
}

/* =========================================================================== */
/*  About                                                                      */
/* =========================================================================== */
#about-us {
  height: 100%;
}

/* =========================================================================== */
/*  Volunteer                                                                  */
/* =========================================================================== */
#volunteer p {
  margin-bottom: 50px;
}

/* =========================================================================== */
/*  Donate                                                                     */
/* =========================================================================== */
#donate {
  height: 100%;
}

#donate p {
  margin-bottom: 50px;
}

#donate-button {
  outline: none;
  float: none;
  margin-right: 0px;
}

/* =========================================================================== */
/*  Form                                                                       */
/* =========================================================================== */
#contact-form {
  margin-bottom: 300px;
}

.span-one-of-three {
  float: left;
  text-align: right;
  width: 25%;
  margin-right: 5%;
}

.span-two-of-three {
  float: right;
  width: 60%;
  margin-right: 10%;
}

input[type="number"],
select,
textarea {
  width: 500px;
  padding: 10px 10px;
  margin-bottom: 15px;
  font-size: 80%;

  border-radius: 3px;
  border: 1px solid #cccccc;
}

select {
  width: 523px;

  color: #777777;
}

textarea {
  width: 500px;
  height: 100px;

  font-family: "Lato";
}

#age-label {
  padding-top: 5px;
}

#language-label {
  padding-top: 20px;
}

input[type="submit"]:not(hover) {
  float: right;
  margin-right: 100px;
  font-size: 125%;
  padding: 8px 60px;

  color: #ffffff;
  border-radius: 200px;
  /* background-color: #6c6c6c;
  border: 1px solid #6c6c6c; */
  transition: background-color 0.2s;
}

input[type="submit"]:hover,
input[type="submit"]:active {
  /* background-color: #028bde; */
  transition: background-color 0.2s;
}

/* =========================================================================== */
/*  Education                                                                  */
/* =========================================================================== */
#education {
  height: 100%;
  text-align: justify;
}

#education li,
#notes li {
  margin-bottom: 50px;
  list-style: none;
  text-align: left;
}

#education p,
#notes p {
  margin-bottom: 50px;
}

#education .non-btn,
#notes .non-btn {
  color: #000000;
}

#education .list-bulleted li,
#notes .list-bulleted li {
  list-style: disc;
}

/* =========================================================================== */
/*  Test                                                                       */
/* =========================================================================== */
#test {
  text-align: left;
}

#question1 {
  margin-top: 25px;
  padding-left: 50px;
}

/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 50px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eeeeee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #cccccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #028bde;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 8px;
  left: 8px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: white;
}

/* =========================================================================== */
/*  Dashboard                                                                  */
/* =========================================================================== */
#dashboard {
  height: 100%;
  width: 100%;
  padding: 100px 0px;
}

#middle {
  float: left;
  margin-left: 30px;
}

#right {
  float: right;
  margin-right: 10px;
}

#quote {
  font-size: 36px;
  margin-top: -500px;
  margin-bottom: 500px;
}

#call:not(hover) {
  border: 2px solid #2c2c2c;
  border-radius: 10px;
  font-size: 500%;
  transition: background-color 0.2s;
}

#call:hover {
  background-color: #7d7;
  cursor: pointer;
  transition: background-color 0.2s;
}

#dashboard .rect {
  margin: 100px 2%;
  border: 2px solid #000000;
}

.rect {
  width: 96%;
  height: 600px;
  background-color: #eeeeee;
}

/* =========================================================================== */
/*  Request                                                                    */
/* =========================================================================== */
#callrequest form {
  margin-bottom: 200px;
}

#request-info {
  width: 96%;
  margin: 0 2%;
  padding: 20px;
  border: 2px solid #000000;
  border-radius: 10px;
  text-align: justify;
}

/* =========================================================================== */
/*  Suspended                                                                  */
/* =========================================================================== */
#suspended-link {
  color: #028bde;
}

/* =========================================================================== */
/*  Rate                                                                       */
/* =========================================================================== */
#rate {
  height: 100%;
}

#rate span {
  text-align: justify;
}

#rate-form {
  margin-left: 40%;
}

#message-label {
  margin-left: 140px;
  margin-bottom: -50px;
}

.button-social:not(hover) {
  color: #2d2d2d;
  transition: color 0.2s;
}

.button-social:hover {
  color: #028bde;
  cursor: pointer;
  transition: color 0.2s;
}
/* =========================================================================== */
/*  Footer                                                                     */
/* =========================================================================== */
footer {
  height: 200px;

  color: #ffffff;
}

#copyright {
  padding-top: 100px;
  margin-bottom: 20px;
  text-align: center;
}

#footer-links {
  float: left;
  margin-right: -234px;
}

.footer-info {
  font-size: 70%;
  margin-left: 50px;
  margin-top: 20px;
}

/* =========================================================================== */
/* HTML                                                                        */
/* =========================================================================== */
* {
  margin: 0;
  padding: 0;
}

html {
  color: #777777;
  font-size: 20px;
  font-weight: 300;
  overflow-x: hidden;
  background-color: #000000;
  text-rendering: optimizeLegibility;
  font-family: "Lato", "Arial", sans-serif;
}

/* =========================================================================== */
/* Reusable                                                                    */
/* =========================================================================== */

h1,
h2 {
  font-weight: 300;
  text-transform: uppercase;
}

h1 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 300%;
  word-spacing: 4px;
  letter-spacing: 1px;

  color: #ffffff;
}

h2 {
  font-size: 200%;
  word-spacing: 4px;
  letter-spacing: 1px;

  text-align: center;
  color: #2d2d2d;
}

h2:after {
  height: 3px;
  width: 100px;
  margin: 30px auto 60px auto;

  content: " ";
  display: block;
  background-color: #028bde;
}

section {
  width: 80%;
  padding: 100px 10%;
  background-color: #ffffff;
  text-align: center;
}

p {
  font-size: 24px;
}

ion-icon {
  font-size: 300%;
  color: #028bde;
}

.block {
  margin-bottom: 200px;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  float: right;
  margin-right: 30px;
  margin-top: -3px;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  display: none;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #b50000;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #3abf0a;
}

input:focus + .slider {
  box-shadow: 0 0 1px #3abf0a;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

/* =========================================================================== */
/* Buttons                                                                     */
/* =========================================================================== */
.btn {
  font-weight: 300;
  padding: 10px 40px;
  border-radius: 200px;

  text-decoration: none;
  display: inline-block;
  color: #ffffff;
  cursor: pointer;
}

.btn-full {
  margin-right: 15px;
  color: #ffffff;
  background-color: #028bde;
  transition: color 0.2s, background-color 0.2s;
}

.btn-full:hover,
.btn-full:active {
  color: #ffffff;
  background-color: #036daf;
  transition: color 0.2s, background-color 0.2s;
}

.btn-empty:link,
.btn-empty:visited {
  color: #ffffff;
  border: 1px solid #6c6c6c;
  background-color: transparent;
  transition: color 0.2s, border 0.2s, background-color 0.2s;
}

.btn-empty:hover,
.btn-empty:active {
  color: #ffffff;
  background-color: #6c6c6c;
  transition: color 0.2s, border 0.2s, background-color 0.2s;
}
/* =========================================================================== */
/* Links                                                                       */
/* =========================================================================== */
.non-btn {
  padding: 8px 0px;
  cursor: pointer;
  color: #ffffff;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.2s;
}

.non-btn:hover,
.non-btn:active {
  border-bottom: 2px solid #028bde;
  transition: border-bottom 0.2s;
}

/* =========================================================================== */
/* Header                                                                      */
/* =========================================================================== */

#main-page {
  height: 100vh;
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),
    url("https://financialtribune.com/sites/default/files/field/image/17january/12_mental_2.jpg");
}

#not-main-page {
  height: 10vh;
  background: black;
}
</style>

