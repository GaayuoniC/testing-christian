//concatening string into one sentence
let text = "This is a very nice day";
text += " and its also very hot";

console.log(text);

//tricks and vital

console.log(10 / 2);

let x = 10;

x **= 5;

console.log(x);

//using double quotes inside a single quote
console.log('he is very much a "punk"');

function toCelcius(number) {
  return (5 / 9) * number - 32;
}

console.log(toCelcius(100));

//capitalize the first character in a sentence

let myText = "hello world of javascript";

const capSentence = myText.charAt(0).toUpperCase() + myText.slice(1);

console.log(capSentence);

//reversing a string of a sentence!

const reverseSentence = myText.split("").reverse().join("");
console.log(reverseSentence);

let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(-12, -6);
console.log(part);

//Template literal strings with back ticks
let text2 = `The quick
brown fox
jumps over the lazy
dog`;

//use the $ symbol for variable strings:
let firstName = "Robert";
let lastName = "Abongo";
let fullDetails = `Welcome ${firstName}, ${lastName}`;

console.log(fullDetails);

//Expressions are allowed in template strings:
let price = 10;
let VAT = 0.25;

let total = `Total: ${price * (1 + VAT).toFixed(2)}`;

console.log(total);

//Write a function that implements range without using loop:

const range = (start, end) => {
  let result = [...Array(end - start + 1).keys()].map((el) => el + 1);
  return result;
};

console.log(range(1, 50));

for (let a = 1; a <= 50; a++) {
  console.log(a);
}

//Learning by just playing around with ideas

function range1(b) {
  let result;
  if (b <= 0) {
    return console.log(b);
  }
  for (let i = 1; i <= b; i++) {
    result = console.log(i);
  }
  return result;
}
range1(5);

//Reverse a string
function reverseStr(str) {
  // let reversed = str.split("").reverse().join("");
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}
console.log(reverseStr("Money"));

//Reverse an array
const azonto = [2, 3, 4, 5, 6, 7];
function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray(azonto));

//Reverse an interger
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n); //To turn the string back into a number
  //Math.sign() is an inbuilt method for determining neg or positive values as input
}

console.log(reverseInt(-981));

//Palidrome function
function palidrome(str) {
  const reversed = str.split("").reverse().join("");
  if (reversed === str) {
    return true;
  }
  return false;
}
console.log(palidrome("kayak"));

//Character most common in a string

const maxC = "abcccccccdeeeeeeeeeeeeeeee";
function maxChar(str) {
  const charMap = {};
  let max = 0; //set a variable for counting the max number
  let maxText;
  for (let char of str) {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
      //One liner code: "charMap[char]= ++charMap[char] || 1"  NOTE!
    } else {
      charMap[char] = 1;
    }
  }

  // //Older method of looping through an object:
  // for (const [key, value] of Object.entries(charMap)) {
  //   //console.log(key, value);
  //   if (value > max) {
  //     max = value;
  //     maxText = key;
  //   }
  // }
  // return maxText; //object is finally populated with the key value pairs

  //Modern method version:
  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxText = key;
    }
  }
  return maxText;
}
console.log(maxChar(maxC));
