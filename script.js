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
    if (date === "May 1st, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic3.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for taking care of the Sharonville Eagles. That place was awesome when we ran it' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 2nd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic4.jpeg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the rides to and from Fenwick.' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 3rd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic5.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for helping me get through skewl' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 4th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic6.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the orange chicken you've made me' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 5th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic187.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for waking up at 3 in the morning to check my blood sugars (and Joe's!)' -Jess";
        thanksEl.append(quote1);
    }
    if (date === "May 6th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic8.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for letting Joe wear football pants to the zoo as a kid. That kid is funny!' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 7th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 8th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 9th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 10th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 11th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 12th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 13th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 14th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 15th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 16th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 17th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 18th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 19th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 20th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 21st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 22nd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 23rd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 24th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 25th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 26th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 27th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 28th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 29th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 30th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "May 31st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 1st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 2nd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 3rd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 4th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 5th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 6th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 7th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 8th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 9th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 10th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 11th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 12th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 13th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 14th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 15th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 16th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 17th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 18th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 19th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 20th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 21st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 22nd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 23rd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 24th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 25th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 26th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 27th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 28th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 29th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "June 30th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 1st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic3.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for taking care of the Sharonville Eagles. That place was awesome when we ran it' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 2nd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic4.jpeg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the rides to and from Fenwick.' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 3rd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic5.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for helping me get through skewl' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 4th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic6.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the orange chicken you've made me' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 5th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic7.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for Bailey.... I miss Bailey' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 6th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic8.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for letting Joe wear football pants to the zoo as a kid. That kid is funny!' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 7th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 8th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 9th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 10th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 11th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 12th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 13th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 14th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 15th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 16th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 17th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 18th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 19th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 20th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 21st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 22nd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 23rd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 24th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 25th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 26th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 27th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 28th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 29th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 30th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "July 31st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 1st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic3.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for taking care of the Sharonville Eagles. That place was awesome when we ran it' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 2nd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic4.jpeg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the rides to and from Fenwick.' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 3rd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic5.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for helping me get through skewl' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 4th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic6.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the orange chicken you've made me' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 5th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic7.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for Bailey.... I miss Bailey' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 6th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic8.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for letting Joe wear football pants to the zoo as a kid. That kid is funny!' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 7th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 8th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 9th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 10th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 11th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 12th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 13th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 14th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 15th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 16th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 17th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 18th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 19th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 20th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 21st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 22nd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 23rd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 24th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 25th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 26th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 27th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 28th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 29th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 30th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "August 31st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 1st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic3.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for taking care of the Sharonville Eagles. That place was awesome when we ran it' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 2nd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic4.jpeg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the rides to and from Fenwick.' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 3rd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic5.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for helping me get through skewl' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 4th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic6.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the orange chicken you've made me' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 5th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic7.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for Bailey.... I miss Bailey' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 6th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic8.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for letting Joe wear football pants to the zoo as a kid. That kid is funny!' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 7th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 8th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 9th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 10th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 11th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 12th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 13th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 14th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 15th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 16th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 17th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 18th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 19th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 20th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 21st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 22nd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 23rd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 24th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 25th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 26th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 27th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 28th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 29th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "September 30th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 1st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic3.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for taking care of the Sharonville Eagles. That place was awesome when we ran it' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 2nd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic4.jpeg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the rides to and from Fenwick.' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 3rd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic5.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for helping me get through skewl' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 4th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic6.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the orange chicken you've made me' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 5th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic7.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for Bailey.... I miss Bailey' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 6th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic8.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for letting Joe wear football pants to the zoo as a kid. That kid is funny!' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 7th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 8th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 9th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 10th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 11th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 12th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 13th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 14th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 15th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 16th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 17th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 18th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 19th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 20th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 21st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 22nd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 23rd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 24th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 25th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 26th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 27th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 28th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 29th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 30th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "October 31st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 1st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic3.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for taking care of the Sharonville Eagles. That place was awesome when we ran it' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 2nd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic4.jpeg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the rides to and from Fenwick.' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 3rd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic5.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for helping me get through skewl' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 4th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic6.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the orange chicken you've made me' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 5th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic7.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for Bailey.... I miss Bailey' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 6th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic8.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for letting Joe wear football pants to the zoo as a kid. That kid is funny!' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 7th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 8th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 9th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 10th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 11th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 12th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 13th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 14th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 15th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 16th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 17th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 18th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 19th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 20th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 21st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 22nd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 23rd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 24th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 25th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 26th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 27th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 28th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 29th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "November 30th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 1st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic3.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for taking care of the Sharonville Eagles. That place was awesome when we ran it' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 2nd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic4.jpeg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the rides to and from Fenwick.' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 3rd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic5.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for helping me get through skewl' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 4th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic6.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the orange chicken you've made me' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 5th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic7.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for Bailey.... I miss Bailey' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 6th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic8.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for letting Joe wear football pants to the zoo as a kid. That kid is funny!' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 7th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 8th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 9th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 10th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 11th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 12th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 13th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 14th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 15th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 16th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 17th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 18th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 19th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 20th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 21st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 22nd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 23rd, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 24th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 25th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 26th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 27th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 28th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 29th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 30th, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "December 31st, 2022") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 1st, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic3.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for taking care of the Sharonville Eagles. That place was awesome when we ran it' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 2nd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic4.jpeg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the rides to and from Fenwick.' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 3rd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic5.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for helping me get through skewl' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 4th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic6.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the orange chicken you've made me' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 5th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic7.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for Bailey.... I miss Bailey' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 6th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic8.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for letting Joe wear football pants to the zoo as a kid. That kid is funny!' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 7th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 8th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 9th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 10th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 11th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 12th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 13th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 14th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 15th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 16th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 17th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 18th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 19th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 20th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 21st, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 22nd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 23rd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 24th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 25th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 26th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 27th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 28th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 29th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 30th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "January 31st, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 1st, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic3.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for taking care of the Sharonville Eagles. That place was awesome when we ran it' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 2nd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic4.jpeg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the rides to and from Fenwick.' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 3rd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic5.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for helping me get through skewl' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 4th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic6.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the orange chicken you've made me' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 5th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic7.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for Bailey.... I miss Bailey' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 6th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic8.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for letting Joe wear football pants to the zoo as a kid. That kid is funny!' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 7th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 8th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 9th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 10th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 11th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 12th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 13th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 14th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 15th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 16th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 17th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 18th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 19th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 20th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 21st, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 22nd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 23rd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 24th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 25th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 26th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 27th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "February 28th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 1st, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic3.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for taking care of the Sharonville Eagles. That place was awesome when we ran it' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 2nd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic4.jpeg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the rides to and from Fenwick.' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 3rd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic5.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for helping me get through skewl' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 4th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic6.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the orange chicken you've made me' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 5th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic7.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for Bailey.... I miss Bailey' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 6th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic8.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for letting Joe wear football pants to the zoo as a kid. That kid is funny!' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 7th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 8th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 9th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 10th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 11th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 12th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 13th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 14th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 15th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 16th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 17th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 18th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 19th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 20th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 21st, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 22nd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 23rd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 24th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 25th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 26th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 27th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 28th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 29th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 30th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "March 31st, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 1st, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic3.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for taking care of the Sharonville Eagles. That place was awesome when we ran it' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 2nd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic4.jpeg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the rides to and from Fenwick.' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 3rd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic5.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for helping me get through skewl' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 4th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic6.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for all the orange chicken you've made me' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 5th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic7.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for Bailey.... I miss Bailey' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 6th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic8.jpg";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thanks for letting Joe wear football pants to the zoo as a kid. That kid is funny!' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 7th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 8th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 9th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 10th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 11th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 12th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 13th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 14th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 15th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 16th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 17th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 18th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 19th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 20th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 21st, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 22nd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 23rd, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 24th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 25th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 26th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 27th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 28th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 29th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
        thanksEl.append(quote1);
    }
    if (date === "April 30th, 2023") {
        var img1 = document.createElement("img");
        img1.src = "./images/pic1.JPG";
        familyPicEl.append(img1);
        var quote1 = document.createElement("p");
        quote1.innerHTML = "'Thank you for always throwing the best parties. I love coming home and getting to see all of our friends and family' -Vincent";
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