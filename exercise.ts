// Number 1 - Multiplication Table

function multiply(num:number){

    for(let i=1;i<=10;i++){

        let result = i * num;
        console.log(num + " x " + i + " = " + result);
    }
}

multiply(9);

// Number 2 - Checking Palindrome

function palindrome(word: string){

    // Convert the string to array of character
    const charArray = word.split('');

    // Reverse the char Array
    const reversedArray = charArray.reverse();

    // Join the array back
    const reversedWord = reversedArray.join('');

    if(word === reversedWord){
        return console.log(word + " is a palindrome");
    }

    else {
        return console.log(word + " is not a palindrome");
    }
}

palindrome("madam");

// Number 3 - Convert Centimeter to Kilometer

function kilometer(num: number){

    let result = num / 100000;

    return console.log(result + " km");
}

kilometer(100000);

// Number 4 - Currency Format (IDR)

const _number3 = 1000;

let numberToCurrency = _number3.toLocaleString("in-ID", {
    style: "currency",
    currency: "IDR",
});

console.log(numberToCurrency);


// Number 5 - Remove First Occurence

const _string5: string = "Hello World";
const searchString: string = "o";

console.log(_string5.replace(searchString, ""));



// Number 6 - Swap Case

let wording = "The QuiCk BrOwN Fox";
let converted = "";

for (let i = 0; i<wording.length;i++){
    if (wording[i] === wording[i].toUpperCase()){
        converted += wording[i].toLowerCase();
    } else {
        converted += wording[i].toUpperCase();
    }
}

// Display Result
console.log(converted);

// Number 7 - Find the Largest

let num1 = 42;
let num2 = 27;

if(num1 > num2){
    console.log(num1 + " -> " +num2);
} else if (num1 === num2){
    console.log(num1 + " = " + num2);
} else if (num1 < num2){
    console.log(num1 + " <- " +num2);
}

// Number 8 - Sort Three Number

num1 = 42;
num2 = 27;
let num3 = 18;

// Num 1 is greatest
if(num1 >= num2 && num1 >= num3){
    if(num2>=num3){
        console.log(num1,num2,num3);
    } else {
        console.log(num1,num3,num2);
    }

  // Num 2 is greatest
} else if(num2 >= num1 && num2 >= num3){
    if(num1>=num3){
        console.log(num2,num1,num3);
    } else {
        console.log(num2,num3,num1);
    }

  // Num 3 is greatest
} else if(num3 >= num1 && num3 >= num2) {
    if(num1>=num2){
        console.log(num3,num1,num2);
    } else {
        console.log(num3,num2,num1);
    }
}

// Number 9 - Check Data Type

let input = "hello";

if(typeof(input) === "string"){
    console.log(1);
} else if(typeof(input) === "number"){
    console.log(2);
} else {
    console.log(3);
}


// Number 10 

let sentence = "An apple a day keeps the doctor away";
let star = "";

for (let i=0;i<sentence.length;i++){
    if(sentence[i]==='a' || sentence[i]==='A'){
        star += "*";
    }
    else {
        star += sentence[i];
    }
}

console.log(star);