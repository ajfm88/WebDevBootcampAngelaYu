var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + random1 + ".png";
var randomDiceImage2 = "dice" + random2 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;
var randomImageSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0]
var image2 = document.querySelectorAll("img")[1]

image1.setAttribute("src", randomImageSource1)
image2.setAttribute("src", randomImageSource2)

if (random1 > random2) {
    document.querySelector('h1').innerHTML = "🚩Player 1 Wins!";
} else if (random2 > random1) {
    document.querySelector('h1').innerHTML = "Player 2 Wins!🚩";
} else {
    document.querySelector('h1').innerHTML = "Draw!";
}