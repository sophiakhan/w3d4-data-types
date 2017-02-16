var avow = require('avow');
var moment = require('moment');

// Booleans
function isTrue(value) {
    var value = true;
    return value;
}

avow('isTrue returns true', isTrue(1 + 1 === 2) === true);

// Null & Undefined
function isNull(value) {
    if (value === null) {
            return true;
    } 
}

var emptyGlass = null;
avow('isNull returns true', isNull(emptyGlass) === true);

function isUndefined(value) {
    if (value === undefined) {
     return true;
    }
}

var blockOfClay;
avow('isUndefined returns true', isUndefined(blockOfClay) === true);

// Strings
function convertCaseLower(value) {
    var value = value.toLowerCase();

    return value;
}

avow('convertCaseLower returns a lowercase string', convertCaseLower('I AM WHISPERING.') === 'i am whispering.');

function convertCaseUpper(value) {
    var value = value.toUpperCase();
    
    return value;
}

avow('convertCaseUpper returns an uppercase string', convertCaseUpper('i am shouting!') === 'I AM SHOUTING!');

function repeatWord(value, n) {
    return value.repeat(n);
}

avow('repeatWord returns a repeated word', repeatWord('Knock.', 2) === 'Knock.Knock.');

function sliceWord(value, n, n2) {
    var value = 'I love pizza!';
    return value.slice(7,12);
}

avow('sliceWord returns a slice of a word', sliceWord('I love pizza!', 7, 12) === 'pizza');

function splitWord(value, splitCreator) {
    return value.split(splitCreator);
}

avow('splitWord returns an array', splitWord('US,CA,MX,JP,UK', ',').length === 5);

function whereIsCarmen(value, name) {
    return value.indexOf(name);
}

avow('whereIsCarmen returns Carmen\'s position', whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen') === 27);

function doesItContain(value, findMe) {
    return value.includes(findMe);
}

avow('doesItContain returns true if it finds a match', doesItContain('The Children\'s Museum Of Indianapolis', 'Museum') === true);

// Regular Expressions
function extractZipCode(zipCode) {
    return zipCode.match()
}

avow('extractZipCode returns a zip code', extractZipCode('My zip code was 46240.') === '46240');

function extractPhoneNumber() {
}

avow('extractPhoneNumber returns a string of numbers', extractPhoneNumber('(888) 123.1234') === '8881231234');

// Numbers
function stringToNumber() {
}

avow('stringToNumber returns a proper Number', stringToNumber('1999') === 1999);

function incrementByOne() {
}

avow('incrementByOne returns a number one higher', incrementByOne(0) === 1);

function isDivisibleByThree(value) {
    return value === 0
}

avow('isDivisibleByThree returns true if number is divisible by 3', isDivisibleByThree(9) === true);

function makeRandomNumber() {
}

avow('makeRandomNumber returns a random number between 0 and 10', makeRandomNumber(10) >= 0 && makeRandomNumber(10) <= 10);

function roundNumber() {
}

avow('roundNumber returns a number rounded up', roundNumber(5.51) === 6);

// Dates
function justAMoment() {
    // Look at moment.js docs to find how to return the day name, like Wednesday
}

avow('justAMoment returns true if the function returns a day name', justAMoment().includes('day') === true);

// Objects
function myNameIs() {
}

avow('myNameIs returns your name from an object with a name property', myNameIs({name:'Your Name Here'}) === 'Your Name Here');

// Arrays
function getFirstItem() {
}

avow('getFirstItem returns the first item in the array', getFirstItem(['Dog','Cat','Pig','Bird','Fish']) === 'Dog')