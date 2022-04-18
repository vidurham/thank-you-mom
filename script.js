var familyPicEl = document.querySelector("#family-picture");
var thanksEl = document.querySelector("#thank-you-text");
var currentDay = document.querySelector("#current-day");
var openingEl = document.querySelector(".opening");
var resultsEl = document.querySelector(".results");
var buttonEl = document.querySelector('#btn');

var today = moment().format("dddd MMMM Do, YYYY");

var makeDay = function() {
    currentDay.append(today);
};

var buildResults = function() {
    openingEl.classList.add("none");
    resultsEl.classList.remove("none");
};

buttonEl.addEventListener('click', function () {
    buildResults();
});

makeDay();