var x = true; // var must not be used
let number = 10;
let number2 = "20";
const name = "juan";
let result = number + number2; // concatenation

console.log("result", result);

number = 20;

// name = "pedro"; // this is an error, const is not reasignable
console.log("number: ", number);

number = "10";

console.log("number: ", number);

console.log("Variables: ", x, number, name);