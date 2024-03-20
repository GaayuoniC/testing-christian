//
function symdiff(...args) {
  //concate all the arrays into one
  const mergedArr = args.reduce((acc, arr) => acc.concat(arr), []);
  //console.log(mergedArr);
  //Filter out common elements:
  const uniqueArr = mergedArr.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  //console.log(uniqueArr);

  //Filter elements that appear more than once

  const diffsym = uniqueArr.filter((value) => {
    const occurances = mergedArr.filter((element) => element === value).length;
    return occurances === 1;
  });

  return diffsym;
}

const a = [1, 2, 3];
const b = [5, 2, 1, 4];
//const c = [1, 3, 5];

const results = symdiff(a, b);
console.log(results);

const finals = b.reduce((acc, i) => acc + i, 0); //Reduce method!!

console.log(finals);
