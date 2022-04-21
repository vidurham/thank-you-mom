var familyPicEl = document.querySelector("#family-picture");
var thanksEl = document.querySelector("#thank-you-text");
var currentDay = document.querySelector("#current-day");
var openingEl = document.querySelector(".opening");
var resultsEl = document.querySelector(".results");
var buttonEl = document.querySelector('#btn');

var today = moment().format("dddd MMMM Do, YYYY");
var date = moment().format("MMMM Do, YYYY");

var makeDay = function() {
    currentDay.append(today);
};

var picture = function() {
    if (date === "April 18th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 19th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic2.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for taking care of the Sharonville Eagles. That place was awesome when we ran it' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 20th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic3.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for taking care of the Sharonville Eagles. That place was awesome when we ran it' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 21st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic4.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the rides to and from Fenwick.' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 22nd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic5.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for helping me get through skewl' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 23rd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic6.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the orange chicken you've made me' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 24th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic7.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for Bailey.... I miss Bailey' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 25th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic8.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for letting Joe wear football pants to the zoo as a kid. That kid is funny!' -Vincent";
        thanksEl.append(quote1);
    }
};

var buildResults = function() {
    openingEl.classList.add("none");
    resultsEl.classList.remove("none");
};

buttonEl.addEventListener('click', function () {
    buildResults();
    picture();
});

makeDay();