
// Chapter 1
function Hell() {
    alert("Hello,Would")
}


// Chapter 2

// Example 1
function chap2_1() {
    let result = 5 + 3;
    alert(result); 
 }
 
 
 //  Example 2
 function chap2_2() {
    let isEqual = 2 === 3;
    alert(isEqual); 
 }
 
 // Example 3
 function chap2_3() {
    let isTrue = true && false;
    console.log(isTrue); 
 }
 
 // Example 4
 function chap2_4() {
    let isTru = true || false;
    alert(isTru); 
 }
 
 // Example 5
 function chap2_5() {
    let isTre = !true;
    alert(isTre); 
 }
 
 // Example 6:
 function chap2_6() {
    let age = parseInt(prompt("Enter your age:"));
    let message = age > 18 ? "You are an adult." : "You are a junior.";
    alert(message);  
 }
 
 // Example 7: 
 function chap2_7() {
    let num = 10;
    let strNum = "5";
    alert(num > strNum); 
 }
 
 // Example 8: 
 function chap2_8() {
    let x = 8;
    let y = x--; 
    alert(`Postfix: x=${x}, y=${y}`);
 }
 
 function chap2_9() {
    let x = 15;
    let y = --x; 
    alert(`Prefix: x=${x}, y=${y}`);
 }
 

 
// Chapter 3:

// Example 1: 
function chap3_1() {
    const age = 3000;
    const message = `My age is ${age} years. I live in Mogadishu.`;
    alert(message);
}

// Exmaple 2:
function chap3_2() {
    let a = 5;
    let b = 10;
    [a, b] = [b, a];
    alert(`After swapping: a = ${a}, b = ${b}`);
}

 // Example 3: Swapping Variables (Arithmetic)
function chap3_3() {
    let a = 5;
    let b = 10;

    a = a + b; 

    b = a - b; 

    a = a - b; 

    alert(`After swapping: a = ${a}, b = ${b}`);
}

// Example 4: If Statement
function chap3_4() {
    let number = parseInt(prompt("Enter an integer:"));

    if (number >= 0) {
        alert(`You entered a positive integer: ${number}`);
    } else {
        if (outputElement) {
            outputElement.innerHTML = `You entered a negative integer: ${number}`;
        } 
    }
}

  // Example 5: If-Else Statement
function chap3_5() {
    let number = parseInt(prompt("Enter an integer:"));

    if (isNaN(number)) {
        alert("Invalid input. Please enter a valid integer.");
        return;
    }

    if (number % 2 === 0) {
        alert(`${number} is an even number.`);
    } else {
        alert(`${number} is an odd number.`);
    }
}
  // Example 6: Nested If
function chap3_6() {
    let marks = parseInt(prompt("Enter the student's marks (0-100):"));

    // Check if the marks are within a valid range
    if (marks >= 0 && marks <= 100) {
        if (marks >= 90) {
            alert("Grade: A");
        } else if (marks >= 80) {
            alert("Grade: B");
        } else if (marks >= 70) {
            alert("Grade: C");
        } else if (marks >= 60) {
            alert("Grade: D");
        } else {
            alert("Grade: F");
        }
    } else {
        // Handle invalid input
        alert("Please enter valid marks between 0 and 100.");
    }
}

 // Example 6: Switch Statement
function chap3_7() {
    let day = parseInt(prompt("Enter a number for the day of the week (1-7):"));

    if (isLaL(day)) {
        alert("Invalid input. Please enter a number between 1 and 7.");
        return;
    }
    switch (day) {
        case 1:
            alert("It's Saturday.");
            break;
        case 2:
            alert("It's Sunday.");
            break;
        case 3:
            alert("It's Monday.");
            break;
        case 4:
            alert("It's Tuesday.");
            break;
        case 5:
            alert("It's Wednesday.");
            break;
        case 6:
            alert("It's Thursday.");
            break;
        case 7:
            alert("It's Friday.");
            break;
        default:
            alert("Please enter a valid day between 1 and 7.");
    }
}
 
 // Example 8: For Loop
function chap3_8() {
    let sum = 0;
    let num = parseInt(prompt("Enter a positive integer:"));

    if (num > 0) {
        for (let count = 1; count <= num; ++count) {
            sum += count;
        }
        alert(`The sum of integers from 1 to ${num} is: ${sum}`);
    } else {
        alert("Please enter a positive integer.");
    }
}


// chapter 4

// Example 1: Basic Function
function chap4_1() {
    alert("Hello, world!"); 
}

// Example 2: Function with Parameter
function chapterfour01(name) {
    alert(`Hello, ${name}!`); 
}

// Call the function
Gren("Mohamed");
// Example 3: Function with Return
function chap4_2(a, b) {
    return a + b;
}

function chap4_3() {
    const results = chap4_2(3, 5);  
    alert(`The result is: ${results}`);
}

// Example 4: Global and Local Scope
var globalVariable = "I'm in global scope";

function chap4_4() {
    alert(globalVariable);  
}

chap4_4();  
alert(globalVariable);  

// Local variable inside a function
function chap4_5() {
    var localVariable = "I'm in local scope";
    alert(localVariable); 
}

printLocal(); 

// Block scope variable
if (true) {
    let blockVariable = "I'm in block scope";
    alert(blockVariable); 
}

const sayHelloArrow = () => "Hello, world!";
alert(sayHelloArrow()); 

const doubleNumber = (number) => number * 2;
alert(doubleNumber(3)); 

const addNumbers = (a, b) => a + b;
alert(addNumbers(3, 5)); 

function chap4_6(callback = () => {
    alert("Default callback executed.");
}) {
    alert("Doing something...");
    callback(); 
}

doSomething();

doSomething(() => {
    alert("Custom callback executed!");
});

function chap4_7() {
   alert("Operation complete!");
}

doSomething(onComplete);

// Example 7: 
setTimeout(() => {
   alert("This is an arrow function callback executed after 2 seconds.");
}, 2000);

setTimeout(function () {
   alert("This is a regular function callback executed after 2 seconds.");
}, 2000);




//Chapter 5
//Exmaples

// Chapter : Five
// Exmaples
// Global array for reuse
const fruits = ["apple", "banana", "mango"];
const numbers = [1, 2, 3];

// Example Functions
function chapterfive1() {
  const names = ["Mohamet", "Ali"];
  document.getElementById("chapter05").innerHTML = names.join(", ");
}

function chapterfive2() {
  const names = new Array("Mohamet", "Ali");
  document.getElementById("chapter05").innerHTML = names.join(", ");
}

function chapterfive3() {
  const myArray = [];
  myArray[0] = "first";
  myArray[1] = "second";
  document.getElementById("chapter05").innerHTML = myArray.join(", ");
}

function chapterfive4() {
  const arrayFromStr = Array.from("Hello");
  document.getElementById("chapter05").innerHTML = arrayFromStr.join(", ");
}

function chapterfive5() {
  const sourceArray = [1, 2, 3];
  const newArray = [...sourceArray]; // Spread Operator
  document.getElementById("chapter05").innerHTML = newArray.join(", ");
}

function chapterfive6() {
  const myArray = Array.of(1, 2, 3);
  document.getElementById("chapter05").innerHTML = myArray.join(", ");
}

function chapterfive7() {
  document.getElementById("chapter05").innerHTML = fruits.join(", ");
}

function chapterfive8() {
  document.getElementById("chapter05").innerHTML = fruits[0];
}

// Array Methods
function chapterfive11() {
  const localFruits = [...fruits];
  localFruits.push("mango");
  document.getElementById("arrayOutput").innerHTML = localFruits.join(", ");
}

function chapterfive12() {
  const localFruits = [...fruits];
  localFruits.unshift("Apple");
  document.getElementById("arrayOutput").innerHTML = localFruits.join(", ");
}

function chapterfive13() {
  const localFruits = [...fruits];
  localFruits[1] = "mango";
  document.getElementById("arrayOutput").innerHTML = localFruits.join(", ");
}

function chapterfive14() {
  const localFruits = [...fruits];
  localFruits.pop();
  document.getElementById("arrayOutput").innerHTML = localFruits.join(", ");
}

function chapterfive15() {
  const localFruits = [...fruits];
  localFruits.shift();
  document.getElementById("arrayOutput").innerHTML = localFruits.join(", ");
}

function chapterfive16() {
  const localFruits = [...fruits];
  localFruits.splice(1, 2); // Removes 2 elements starting at index 1
  document.getElementById("arrayOutput").innerHTML = "Updated Fruits: " + localFruits.join(", ");
}

// Iteration Examples
function displayForLoop() {
  let result = "Fruits using For Loop:<br>";
  for (let i = 0; i < fruits.length; i++) {
    result += fruits[i] + "<br>";
  }
  document.getElementById("arrayOutput").innerHTML = result;
}

function displayForEach() {
  let result = "Fruits using forEach Method:<br>";
  fruits.forEach(function (fruit) {
    result += fruit + "<br>";
  });
  document.getElementById("arrayOutput").innerHTML = result;
}

function displayForOf() {
  let result = "Fruits using for...of Loop:<br>";
  for (const fruit of fruits) {
    result += fruit + "<br>";
  }
  document.getElementById("arrayOutput").innerHTML = result;
}

function displayMap() {
  const squaredNumbers = numbers.map((num) => num * num);
  document.getElementById("arrayOutput").innerHTML = 
    "Squared Numbers: " + squaredNumbers.join(", ");
}

//Chapter 6
//Exmaples


// Chapter : Sex
//Exmaples:1

let ContectElement = document.getElementById("content");
ContectElement.style.background = "blue";
ContectElement.style.color = "white";


//Exmaples:2
let boxElements = document.getElementsByClassName("box");
for (let i = 0; i < boxElements.length; i++) {
   boxElements[i].style.border = "3px dashed black";
}

let paragraphElements = document.getElementsByTagName("h4");
for (let i = 0; i < paragraphElements.length; i++) {
   paragraphElements[i].style.fontStyle = "italic";
   paragraphElements[i].style.margin = "10px";
   paragraphElements[i].style.color = "red";
}



// Create a new <p> element
let createElement = document.createElement("p");
createElement.textContent = "This is a new paragraph."; 

// Append the new element
document.body.appendChild(createElement); 

// Select the first 
const element1 = document.querySelector("p");
console.log(element1); 

// elements in the document
let allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs); 

//
let allBoxes = document.querySelectorAll("div.box");
console.log(allBoxes); 


// chapter 7

// Example 1: Button Click
const element = document.getElementById("MyButtom");
element.addEventListener("click", myFunction);

function myFunction() {
  alert("Button Clicked!");
}

// Example 2: Mouse Events
const element3 = document.getElementById("myElement");
element3.addEventListener("mouseover", function () {
  element3.style.backgroundColor = "green";
});
element3.addEventListener("mouseout", function () {
  element3.style.backgroundColor = "blue";
});

// Example 3: Keyboard Events
const textInput = document.getElementById("textInput");
const outputDiv = document.getElementById("output");

textInput.addEventListener("keydown", function (event) {
  outputDiv.innerText = `Keydown: ${event.key}`;
});
textInput.addEventListener("keypress", function (event) {
  outputDiv.innerText += `\nKeypress: ${event.key}`;
});
textInput.addEventListener("keyup", function (event) {
  outputDiv.innerText += `\nKeyup: ${event.key}`;
});

// Example 4: Focus and Blur Events
const textInput1 = document.getElementById("textInput1");
const output2Div = document.getElementById("output2");

textInput1.addEventListener("focus", function () {
  updateOutput2("Element focused!", "focused");
});
textInput1.addEventListener("blur", function () {
  updateOutput2("Element blurred!", "blurred");
});

function updateOutput2(message, className) {
  output2Div.innerText = message;
  output2Div.className = className;
}

// Example 5: Form and Input Events
const textInput0 = document.getElementById("textInput0");
const outputDiv4 = document.getElementById("output4");
const form = document.getElementById("myForm");

textInput0.addEventListener("input", function () {
  if (textInput0.value !== "") {
    updateOutput4("Input changed!", "valid");
  } else {
    updateOutput4("Input changed with empty", "invalid");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  updateOutput4("Form submitted!", "valid");
});

function updateOutput4(message, className) {
  outputDiv4.innerText = message;
  outputDiv4.className = className;
}
