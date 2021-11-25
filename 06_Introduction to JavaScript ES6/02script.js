// var tweet = prompt("Compose your tweet: ");
// var tweetCount = tweet.length;
// alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining.")
// var tweetUnder140 = tweet.slice(0, 140);
// alert(tweetUnder140);

// alert(prompt("Compose your tweet:").slice(0,140));

// var name = "Angela";
// console.log(name.slice(0, 1)); // 0 - 1 = 1 so you'll get 1 characters out
// console.log(name.slice(5, 6)); // 5 - 6 = 1 so you'll get 1 characters out
// console.log(name.slice(0, 3)); // 0 - 3 = 3 so you'll get 3 characters out
// console.log(name.slice(1, 5)); // 5 - 1 = 4 so you'll get 4 characters out

// var name = "Alejandro";
// name.toUpperCase();

// 1 Create a var that stores the name that the user enters via input.
var name = prompt("What is your name?");
// 2 Capitalise the first letter of their name.
//a Isolate the first character
firstChar = name.slice(0,1);
// b Turn the first char to upper case
firstChar = firstChar.toUpperCase();
// c Isolate the rest of the name
var restOfName = name.slice(1,name.length);
// d Concactenate the first char with the rest of the char
var capitalizedName = firstChar + restOfName;

//3 We use the capitalised version of their name ot greet them using an alert.
alert("Hello, " + capitalizedName);