var FamilyPicEl = document.querySelector("#family-picture");
var ThanksEl = document.querySelector("#thank-you-text");
var CurrentDay = document.querySelector("#current-day");
var openingEl = document.querySelector(".opening");
var resultsEl = document.querySelector(".results");
var buttonEl = document.querySelector('#btn');

var today = moment().format("dddd MMMM Do, YYYY");


var buildResults = function() {
    openingEl.classList.add("none");
    resultsEl.classList.remove("none");
};

CurrentDay.append(today)

buttonEl.addEventListener('click', function () {
    buildResults();
});
