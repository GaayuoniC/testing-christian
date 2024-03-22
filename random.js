const side1 = 5;
const side2 = 6;
const side3 = 7;

const s = (side1 + side2 + side3) / 2;
console.log(s);
//Heron's formula to calculate the area of a trinagle

const area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area);

//Capitalizing a string and reverse it as well
function capitalizeStr(str) {
  const cap = str
    .replace(/[\W]/g, "") //regular expression
    .toUpperCase()
    .split("")
    .reverse()
    .join("");
  return cap;
}

console.log(capitalizeStr("Alger"));

//  Write a JavaScript program to compute the sum of all
//the digits that occur in a given string.
function sumOfStringValues(str) {
  let sum = 0; //to hold the sum of the values
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      sum += parseInt(str[i]);
    }
  }
  return sum;
}
console.log(sumOfStringValues("ab4c3krec3"));

//A function that capitalize the first letter of a word in a sentence

function firstLetterCaps(str) {
  const sentenceGroup = str.split(" ");

  return sentenceGroup
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
}

const exam = "the things that you do everyday";

console.log(firstLetterCaps(exam));

//Sum of integers of a number
function sumOfInt(n) {
  let results = 0;
  if (n <= 0) {
    return n;
  }

  for (let i = 0; i <= n; i++) {
    results += i;
  }

  return results;
}
console.log(sumOfInt(8));

//breakup url into an array
// function breakUpUrl(str) {
//   const broken = str.replace(/[\W]/g, " ").split(",");

//   return broken;
// }

const url = "https://outlook.live.com/mail/0/inbox/";

function breakUpUrl(str) {
  var data = str.split("://").slice(0, 1);
  //console.log(data);
  var protocol = str.split("/").slice(2, 4);
  // console.log(protocol);

  return data + "," + " " + protocol;
}
console.log(breakUpUrl(url));

//Second version, which is more dynamic
function breakUrl(url) {
  //Regular expression to mart the url parts:
  const urlPartsRegex = /^(.*?):\/\/(.*?)\/(.*?)$/;

  //Extract the parts using the regex:
  const match = url.match(urlPartsRegex);

  //Empty array to store the url parts:
  const urlParts = [];

  //Pushing parts into the array urlParts:
  if (match) {
    urlParts.push(match[1]); //protocol
    urlParts.push(match[2]); //domain
    if (match[3]) {
      urlParts.push(match[3]); //path
    }
  }
  return urlParts;
}

console.log(breakUrl(url));

//Check if all numbers are the same:
function test_same_digit(num) {
  const first = num % 10; //Extracting the last digit as a reference
  while (num) {
    if (num % 10 !== first) return false;
    num = Math.floor(num / 10);
  }

  return true;
}

console.log(test_same_digit(1234)); //returns false
console.log(test_same_digit(1111)); // returns true
