var guestList = ['Angela', 'Jack', 'Pam', 'James', 'Lara', 'Jason'];
console.log(guestList);

console.log(guestList[0])

var guestName = prompt("What is your name? ");

if (guestList.includes(guestName)) {
    alert("Welcome!");
} else {
    alert("Sorry, maybe next time.")
};