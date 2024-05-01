/* Exercise 1
Objective: Create a FizzBuzz program to practice loops and conditionals.
Instructions: Write a JavaScript program that prints numbers from 1 to 100
For multiples of 3, print "Fizz" instead of the number.
For multiples of 5, print "Buzz" instead of the number.
For numbers that are multiples of both 3 and 5, print "FizzBuzz.” */
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}

/* Exercise 2
1. The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.

The value saved to kelvin will stay constant. Choose the variable type with this in mind.

2. Write a comment above that explains this line of code.

3. Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.

Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.

4. Write a comment above that explains this line of code.

5. Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.

Fahrenheit = Celsius * (9/5) + 32

6. Write a comment above that explains this line of code.

7. When you convert from Celsius to Fahrenheit, you often get a decimal number. (Don't worry about this just yet). Log the temperature in farenheit to the console. */

// creating constant variable of Kelvin
const kelvin = 293;
// creating celcius by subtracting the value of that from Kelvin
const celcius = kelvin - 273;
// this value will change so let's choose let
let fahrenheit = celcius * (9 / 5) + 35;
//round down to the nearest number
fahrenheit = Math.floor(fahrenheit);
console.log("The temperature is " + fahrenheit + " degress Fahrenheit");

/* Exercise 3
In this activity, the user is prompted to enter a score. Based on the score entered, the code uses conditional statements (if, else if, and else) to determine the corresponding grade. 
If the score is 90 or above, it assigns the grade 'A'. If the score is between 80 and 89, it assigns the grade 'B'. If the score is between 70 and 79, it assigns the grade 'C'. If the score is between 60 and 69, it assigns the grade 'D'. 
Otherwise, if the score is below 60, it assigns the grade 'F'. The grade is then printed to the console. */
let score = parseInt(prompt("Enter the score:"));
let grade;

if (score >= 90) {
	grade = "A";
} else if (score >= 80) {
	grade = "B";
} else if (score >= 70) {
	grade = "C";
} else if (score >= 60) {
	grade = "D";
} else {
	grade = "F";
}

console.log("The grade for the score " + score + " is: " + grade);

/* Exercise 4
Create a JavaScript program that prints all the numbers between a given range. 
Prompt the user to enter the starting and ending numbers for the range. 
Use a loop to iterate through the numbers in the range. Print each number in the console. */
let start = parseInt(prompt("Enter the starting number:"));
let end = parseInt(prompt("Enter the ending number:"));

for (let i = start; i <= end; i++) {
	console.log(i);
}

/* Exercise 5
Objective: Practice loops and conditionals in JavaScript
Instructions: Write a JavaScript function that finds the largest number in an array of integers */

function findLargestNumber(arr) {
	let largest = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > largest) {
			largest = arr[i];
		}
	}
	return largest;
}

const numbers = [12, 45, 29, 56, 18, 72];
console.log(findLargestNumber(numbers)); // Output should be 72
