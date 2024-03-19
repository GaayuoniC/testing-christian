//Creating and array from existing array

function chunk(array, size) {
  const results = []; //Create and empty array to hold future arrays
  let index = 0;
  //Using while loop here:
  while (index < array.length) {
    results.push(array.slice(index, index + size));
    index += size; //Making sure that the loop does not run infinitely
  }

  return results;
}
console.log(chunk([1, 2, 3, 4, 5, 6], 3));

//Capitalize the first character of each word in the sentence
const sentence = "hello my lovely people in the house";
function capitalize(str) {
  const words = str.split(" "); //Give space and it will be split into words
  //const results = [];
  //   for (let word of words) {
  //     results.push(word[0].toUpperCase() + word.slice(1));
  //   }
  //One liner with map method
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");

  //return results.join(" "); //Join the arrays here with space
}

console.log(capitalize(sentence));

//Anagram function
//Create another function to be used within the anagram function
function charMap(str) {
  const charmap = {};
  str = str.toLowerCase().replace(/[\W]/g, ""); //Using regular expression
  for (let char of str) {
    charmap[char] = ++charmap[char] || 1;
  }
  return charmap;
}
function anagram(strA, strB) {
  //Step 1: Build character map for string A
  const charmapA = charMap(strA); //Using the function from above!

  //Step 2: Build character map for string B
  const charmapB = charMap(strB);
  //Step 3 : Compare each character in both char maps
  if (Object.keys(charmapA).length === Object.keys(charmapB).length) return;
}
console.log(anagram("CODING Money", "Money coding"));
