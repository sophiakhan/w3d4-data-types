// truly empty data type
var emptyGlass  = null; 

// truly undefined data type
var outspace;

// truly true & truly false aka boolean
var truth = true; 
var news = false; 

// numbers 
2
10.4324324
0.654
-432

console.log('2' + '2'); // concatenates the string

console.log(Number('2') + Number('2')); // converts to actual numbers
// every input field on a form is actually a string value, so you might need to convert those to Numbers (wrap input from the user)

// math
var cosmos = Math.random() * 100; 
console.log(cosmos);

var ceil = Math.ceil(cosmos); 
console.log(ceil);

var floor = Math.floor(cosmos);
console.log(floor); 

//strings
var doubleQuotedString = "hello";
var singleQuotedString = 'hello';
var multiLineString = `hello
hello`;

var iAmWhispering = 'I AM WHISPERING';
iAmWhispering = iAmWhispering.toLowerCase();


var iAmShouting = 'i am shouting';
iAmShouting = iAmShouting.toUpperCase();


var word = 'Hat';
word = word.slice(1, 2); 

console.log(word.length); // will output the length of the word in the console - replace 'word' with variable 

var place = 'The Iron Yard';

console.log(place.slice(place.length - 4)); 

var headline = 'the day was cold';
var firstLetter = headline.slice(0, 1).toUpperCase(); 
headline = firstLetter + headline.slice(1); 

function iCap(headline) {
    var firstLetter = headline.slice(0, 1).toUpperCase(); 
    headline = firstLetter + headline.slice(1); 

    return headline;
}

var userInput = '     Sophie  '; 
userInput = userInput.trim();
// trims excess space

var sayItAgain = 'Hacked.';
sayItAgain = sayItAgain.repeat(500); 
// repeats the string the amount of times designated in the call

var address = '543543 Main Street';
var hasStreet = address.includes('Street');
//checks if the string has the word 'street' in it 


var phoneNumber = '(888) 123-1234';
var isCorrectPhoneNumber = phoneNumber.match(/\d/g).length === 10;
//checks to see if there is 10 digits in the phone number 

var greeting = 'hey world';
greeting = greeting.replace('hey', 'hello');
console.log(greeting); 


// dates

Date.now(); // this is a mess

var moment = require('moment');

// currency
// account.js

// arrays
var listofThings = ['Cheese', 'Pepperoni', 'Crust', 'Sauce'];

console.log(listofThings[0]); 
console.log(listofThings.length); 
console.log(listofThings.reverse()); 
console.log('A sentance of characters'.split('')); // splits a string into an array by letter
console.log('A sentance of characters'.split(' ')); // splits a string into an array by words
console.log('A sentance of characters'.split(' ').reverse().join(' ')); // splits a string into an array, reverses it, and joins back together


// objects
var anObject = {
    name: 'Sophie'
};

anObject.name;
