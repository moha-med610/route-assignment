/**
 * 1- convert string to number
 * @returns 130
 */
let str = "123";
let convertNum = Number(str);

console.log(convertNum + 7);

/**
 * 2- check is a given variable is falsy
 * @returns Invalid
 */
function checkFalsy(val) {
  if (val == false) {
    return "Invalid";
  } else {
    return val;
  }
}
console.log(checkFalsy(0));

/**
 * 3- use for loop to print all numbers between 1, 10 and skipping even numbers
 * @returns odd numbers
 */
for (let num = 1; num <= 10; num++) {
  if (num % 2 == 0) {
    continue;
  }
  console.log(num);
}

/**
 * 4- create an array of numbers and return only even numbers using filter method
 * @returns even numbers
 */
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((ele) => {
  if (ele % 2 == 0) {
    return ele;
  }
});
console.log(evenNumbers);

/**
 * 5- use spread operator to merge two arrays
 * @returns spread Array
 */
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let spreadArray = [...arr1, ...arr2];
console.log(spreadArray);

/**
 * 6- use switch statement to return day of weeks
 * @returns day of week
 */
let day = 7;
switch (day) {
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("monday");
    break;
  case 3:
    console.log("tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log("thursday");
    break;
  case 6:
    console.log("friday");
    break;
  case 7:
    console.log("saturday");
    break;

  default:
    console.log("Invalid day");
}

/**
 * 7- create an array of strings and return their length using map
 * @returns length of array
 */
let arrString = ["a", "ab", "abc"];
let arrLength = arrString.map((e) => {
  return e.length;
});
console.log(arrLength);

/**
 * 8- write a function that checks if a number is divisible by 3, 5
 * @returns if number divisible by 3, 5 return 'Divisible by both'
 */
function checkNumberDivisible(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "Divisible by both";
  } else {
    return "Number is Not divisible by both";
  }
}
console.log(checkNumberDivisible(15));

/**
 * 9- write a function using arrow syntax to return the square of a number
 * @returns square of number
 */
let squareNumber = (num) => num ** 2;
console.log(squareNumber(5));

/**
 * 10- write a function that destructure an object to extract values
 * @returns formatted String
 */
function formattedString() {
  const person = { name: "john", age: 25 };
  console.log(`${person.name} is ${person.age} years old`);
}
formattedString();

/**
 * 11- write function that accepts multiple parameters
 * @returns their sum
 */
function sumNumbers(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}
console.log(sumNumbers(1, 2, 3, 4, 5));

/**
 * 12- write function that return promise which resolves after 3s
 * @returns Success
 */
// 1- way one
function promise() {
  setTimeout(() => console.log("Success from function"), 3000);
}
promise();

/**
 * 13- write function to find the largest number in array
 * @returns largest number
 */
function findLargestNumber(...numbers) {
  return Math.max(...numbers);
}
console.log(findLargestNumber(1, 2, 3, 5, 6, 7, 10));

/**
 * 14- write function that takes an object
 * @returns an array containing only it's key
 */
function objectKey() {
  const person = {
    name: "john",
    age: 30,
  };

  return Object.keys(person);
}
console.log(objectKey());

/**
 * write a function that splits a string into an array of words based on spaces
 * @returns array form staring
 */
function splitArray() {
  const string = "The quick brown fox";

  return string.split(" ");
}
console.log(splitArray());
