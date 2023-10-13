//q1?
/* <script>
        function displayCurrentDateTime() {
            const now = new Date();
            const datetimeElement = document.getElementById("datetime");
            datetimeElement.innerHTML = "Current Date & Time: " + now.toLocaleString();
        }

        // Call the function when the page loads
        displayCurrentDateTime();

        // You can also update the time every second using setInterval
        setInterval(displayCurrentDateTime, 1000);
 */
//q2?
        // function greetUser() {
        //     const firstName = document.getElementById("firstName").value;
        //     const lastName = document.getElementById("lastName").value;
        //     const greetingElement = document.getElementById("greeting");

        //     if (firstName && lastName) {
        //         const fullName = `${firstName} ${lastName}`;
        //         greetingElement.textContent = `Hello, ${fullName}!`;
        //     } else {
        //         greetingElement.textContent = "Please enter both your first and last names.";
        //     }
        // }
//q3?
        // function addTwoNumbers() {
        //     const num1 = parseFloat(prompt("Enter the first number:"));
        //     const num2 = parseFloat(prompt("Enter the second number:"));
        
        //     if (!isNaN(num1) && !isNaN(num2)) {
        //         const sum = num1 + num2;
        //         return sum;
        //     } else {
        //         return "Invalid input. Please enter valid numbers.";
        //     }
        // }
        
        // const result = addTwoNumbers();
        // alert("The sum of the two numbers is: " + result);
        
//q4?
// function calculate(num1, num2, operator) {
//     switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             if (num2 === 0) {
//                 return "Division by zero is not allowed.";
//             }
//             return num1 / num2;
//         default:
//             return "Invalid operator. Please use '+', '-', '*', or '/'.";
//     }
// }
// const num1 = parseFloat(prompt("Enter the first number:"));
// const num2 = parseFloat(prompt("Enter the second number:"));
// const operator = prompt("Enter the operator (+, -, *, /):");

// const result = calculate(num1, num2, operator);

// document.write(`Result: ${num1} ${operator} ${num2} = ${result}`);
// //?q5
// function square(number) {
//     return number * number;
// }

// // Example usage:
// const inputNumber = 5;
// const result = square(inputNumber);
// console.log(`The square of ${inputNumber} is ${result}`);

// //?q6
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else if (n < 0) {
//         return "Undefined (Factorial is not defined for negative numbers)";
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// // Example usage:
// const number = 5;
// const result = factorial(number);
// console.log(`The factorial of ${number} is ${result}`);

// //?q7
// function displayCounting(start, end) {
//     if (start > end) {
//         document.write("Start number should be less than or equal to the end number.");
//         return;
//     }

//     for (let i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }

// // Example usage:
// const startNumber = parseInt(prompt("Enter the start number:"));
// const endNumber = parseInt(prompt("Enter the end number:"));

// displayCounting(startNumber, endNumber);

//?q8
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(number) {
//         return number * number;
//     }

//     const baseSquare = calculateSquare(base);
//     const perpendicularSquare = calculateSquare(perpendicular);
//     const hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
    
//     return hypotenuse;
// }

// // Example usage:
// const base = parseFloat(prompt("Enter the length of the base:"));
// const perpendicular = parseFloat(prompt("Enter the length of the perpendicular:"));

// const result = calculateHypotenuse(base, perpendicular);
// console.log(`The hypotenuse of the right-angled triangle is: ${result}`);

//?q9

// function calculateRectangleArea(width, height) {
//     const area = width * height;
//     return area;
// }

// // Example usage with values as arguments
// const area1 = calculateRectangleArea(5, 10);
// console.log(`The area of the rectangle is: ${area1}`);


// function calculateRectangleAreaWithVariables() {
//     const width = 5;
//     const height = 10;
//     const area = width * height;
//     return area;
// }

// // Example usage with values stored in variables
// const area2 = calculateRectangleAreaWithVariables();
// console.log(`The area of the rectangle is: ${area2}`);


//?q10

// function isPalindrome(str) {
//     // Remove spaces and convert to lowercase for accurate comparison
//     str = str.replace(/\s/g, "").toLowerCase();

//     // Reverse the string
//     const reversedStr = str.split("").reverse().join("");

//     // Check if the original and reversed strings are the same
//     return str === reversedStr;
// }

// // Example usage:
// const inputString = prompt("Enter a string to check for palindrome:");
// const result = isPalindrome(inputString);

// if (result) {
//     console.log(`"${inputString}" is a palindrome.`);
// } else {
//     console.log(`"${inputString}" is not a palindrome.`);
// }
//?q11
// function capitalizeFirstLetterOfEachWord(str) {
//     const words = str.split(" ");
//     const capitalizedWords = words.map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return capitalizedWords.join(" ");
// }

// // Example usage:
// const inputString = 'the quick brown fox';
// const outputString = capitalizeFirstLetterOfEachWord(inputString);
// console.log(outputString);

//?q12
// function findLongestWord(str) {
//     const words = str.split(" ");
//     let longestWord = "";

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }

// // Example usage:
// const inputString = 'Web Development Tutorial';
// const longestWord = findLongestWord(inputString);
// console.log(`The longest word in the string is: ${longestWord}`);

//?q13

// function countLetterOccurrences(str, letter) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// // Example usage:
// const inputString = 'JSResourceS.com';
// const targetLetter = 'o';
// const occurrences = countLetterOccurrences(inputString, targetLetter);
// console.log(`The letter '${targetLetter}' appears ${occurrences} times in the string.`);

//?q14

// function calcCircumference(radius) {
//     const circumference = 2 * Math.PI * radius;
//     console.log(`The circumference is ${circumference.toFixed(2)}`);
// }

// function calcArea(radius) {
//     const area = Math.PI * Math.pow(radius, 2);
//     console.log(`The area is ${area.toFixed(2)}`);
// }

// // Example usage:
// const circleRadius = 5;
// calcCircumference(circleRadius);
// calcArea(circleRadius);
