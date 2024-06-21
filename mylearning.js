//Capitalizing the first letter in a sentence
const sentence = 'my we all grow old and healthy'
function capLetters(str){
    const words = str.split(" ")
    console.log(words)
    return words.map((word)=> word[0].toUpperCase()+word.slice(1)).join(" ")
}



console.log(capLetters(sentence))

//capitalize the first letter in a word
function capFirst(str){
    const fords = str.split("")
    console.log(fords)
    const newFords = [fords[0].toUpperCase()].concat(fords.slice(1)).join("")
  
    return newFords
}
const doctor = 'react'
console.log(capFirst(doctor))

//FizzBuzz
function FizzBuzz(num){
    //Check if input is valid    
    if(num<=0){
        console.log('Enter a valid positive number')
        return;
    }
    //Loop from 1 to number entered
    for(let i=1;i<=num;i++){ 
    if(i % 3===0 && i % 5 ===0 ){
        console.log ('FizzBuzz')
    }else if(i%3===0){
        console.log (i + " "+'Fizz')
    }else if(i%5===0){
        console.log (i+ " "+'Buzz')
    }else{
       console.log(i+ " " + 'Not Fizz or Buzz')
    }
}
}

FizzBuzz(10)

//Reverse a string

function reverse(str){
    const revert = str.split("").reverse().join("")
    return revert
}

console.log(reverse('cordula'))

//Factorialise
function factorialise(num){
    if(num === 0)return 1
    return num*factorialise(num-1)
}
//5*(5-1)

console.log(factorialise(5))

//palidrome
function isPali(str){
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()//Using regular expression
    return cleanedStr === cleanedStr.split("").reverse().join("")
}

console.log(isPali('A man, a plan,a canal, Panama'))


//Longest word
function longestWord(str){
    return Math.max(...str.split(" ").map(word=>word.length))

}
console.log(longestWord('The fox communications over the fence'))

//Intermediate Difficulty functions 
function sumAll(arr){
    const [min,max]=[Math.min(...arr), Math.max(...arr)]
    let sum = 0
    for(let i = min;i<=max;i++){
        sum += i
    }
    return sum

}
console.log(sumAll([1,2]))

//Function destroyer:
function destroyer(arr, ...valsToRemove){
    return arr.filter(item=>!valsToRemove.includes(item))

}
console.log(destroyer([1,2,3,1,2,3],2,3))

//Whats in the name function
function whatIsInTheName(collection,source,){
    const sourceKeys = Object.keys(source)
    return collection.filter(obj=>sourceKeys.every(key=>obj[key]===source[key]))

}
console.log(whatIsInTheName(
    [{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }],
    { last: 'Capulet' }))





//Function for smallest commons
function smallCommons(arr){
    const[min,max]= [Math.min(...arr),Math.max(...arr)]
    let scm = max
    for(let i = max; i>=min;i--){
        if(scm % i !==0){
            scm += max
            i=max
        }
    }
    return scm
}

console.log(smallCommons([1,4]))