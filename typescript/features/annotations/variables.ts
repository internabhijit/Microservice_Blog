let apples = 10;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// build in object
let now: Date = new Date();

// array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: {x: number; y:number} = {
    x: 10,
    y: 20
}

// Functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// When to use annotations
// 1) Functions that return the 'any' type
const json = '{"x":10,"y":12}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initalize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === "green") {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [10,-2,3];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}