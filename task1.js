// Task 1: Choose appropriate names for variables and create them in the code.
// 1. Create a variable to store the creation date of the file.
// 2. Create a variable to store the file name.
// 3. Create a variable to store the number of errors.

let fileCreationDate = "23-01-2025";
let fileName = "task1.js";
let errorCount = 0;

// Task 2: Declare two variables: login and name
// 1. Assign your name to the variable 'name'
// 2. Copy the value from 'name' into 'login'
// 3. Print the value of the 'login' variable to the console

let login;
let Name = "Polina";
login = Name;
console.log(login);


// Task 3: Create 3 variables in one line with different values

let Cat = "Basya", Dog = "Cutie", Duck = "Puppy"; 

// Task 4: Create a variable named myUndefined and set its value to undefined without using the word "undefined"

let myUndefined;

// Task 5: You need to write the string "I'm lovin' it!" to the variable resultLine
// Do not modify the values of the variables line1, line2, and line3.

let line1 = "Lovin";
let line2 = "It!";
let line3 = "I'm";

let resultLine = line3+" "+line1+" "+line2;  
console.log(resultLine);  // Outputs: "I'm Lovin It!"

// Task 6: You need to store the string "70" in the variable digits
// Use the variables x, y, z, an empty string, and string concatenation.

let x = 3;
let y = 4;
let z = 0;

let digits = (x + y) + "" + z;  // Concatenate the variables to form the string "70"
console.log(digits);  // Outputs: "70"

// Task 7: 
// You need to assign the number 100500 to the variable hugeAmount.
// Use the variables bigAmount, greatAmount, and convert the strings to numbers.
// Declare and initialize the hugeAmount variable in a single statement.

// --- Do not modify the values of the variables bigAmount and greatAmount.
// --- Use bigAmount, greatAmount, and the Integer() method to initialize the hugeAmount variable.

let bigAmount = "500";
let greatAmount = "100000";

let hugeAmount = parseInt(bigAmount) + parseInt(greatAmount);  // Integer is not defined so changed it
console.log(hugeAmount);  // Outputs: 100500

// Task 8: Modify the code so that instead of the string values, the length of each string is printed
// Do not modify the value of the emptyString variable.
// For the three strings passed to console.log, call the length method.

let emptyString = "";

console.log(emptyString.length);  // Outputs: 0
console.log("Think Different".length);  // 15
console.log((emptyString + 2 + 2 + "22").length);  // 4 0+1+2

// Task 9: Modify the code so that all letters in these strings are in lowercase
// Do not modify the values of the title, degree, and career variables.
// For the four strings passed to console.log, call the toLowerCase() method.

let title = "Senior Lead Principal Data Analyst";
let degree = "In college, I Majored in Economics Science and Minored in Musician Studies.";
let career = "Data Scientist With 3+ Years of Experience in Big Data Analytics.";

console.log("RESUME".toLowerCase());
console.log("TITLE: " + title.toLowerCase());
console.log("DEGREE: " + degree.toLowerCase());
console.log("CAREER: " + career.toLowerCase());


//OR if ALL strings values should be lowercase
//console.log("RESUME".toLowerCase());
//console.log(("TITLE: " + title).toLowerCase());
//console.log(("DEGREE: " + degree).toLowerCase());
//console.log(("CAREER: " + career).toLowerCase());


// Task 10: Modify the code so that all letters in these strings are in uppercase
// Do not modify the values of the caps and usa variables.
// Call the toUpperCase() method for the three strings passed to console.log.

let caps = "if I type in caps ";
let fbi = "fbi";

console.log(fbi.toUpperCase());
console.log("Гекльберрі Фінн".toUpperCase());
console.log((caps + "they know I mean business").toUpperCase());

// Task 11: Add multiplication, division, and subtraction operations.
// Display the results in two ways: using concatenation and using template strings.

let inputX = 2;
let inputY = 3;

console.log(inputX * inputY)
console.log(`${inputX / inputY}`)
console.log(inputX - inputY)
console.log(`${inputX - inputY}`)


// Task 12: Initialize the message variable. The value should be created using both template strings and concatenation.
// The string value should be based on the variables name, age, company, and position.

let name = "Maxim";
let age = 29;
let company = "Apple";
let position = "QA";

let message = `${name} ${age}` + " " + company + " " + position;
console.log(message);

// Task 13: Using typeof Operator
// 1. Declare variables to store the following values: a number, a string, a boolean, an undefined value, and a null value.
// 2. Use the typeof operator to check the data type of each variable.
// 3. Print the data types to the console.

let number = 5;
let string = "HI";
let boolean = true;
let undefined;
let nullValue = null;

console.log(typeof(number));
console.log(typeof(string));
console.log(typeof(boolean));
console.log(typeof(undefined));
console.log(typeof(nullValue));


// Task 14: Arithmetic Operations
// 1. Declare two variables with numeric values.
// 2. Perform addition, subtraction, multiplication, division, and modulus operations on them.
// 3. Print the results to the console.

let xu = 10;
let yu = 20;
console.log(xu + yu);
console.log(xu - yu);
console.log(xu * yu);
console.log(xu / yu);
console.log(xu + yu);
console.log(xu % yu);

// Task 15: Using Logical AND (&&)
// 1. Declare two boolean variables with any values (true or false).
// 2. Use the && operator to combine the variables and store the result in a new variable.
// 3. Print the result.

let pillow = false;
let cup = true;
let pillowcup = pillow && cup;
console.log(pillowcup);

// // Task 16: Using Logical OR (||)
// 1. Declare two boolean variables with any values (true or false).
// 2. Use the || operator to combine the variables and store the result in a new variable.
// 3. Print the result.

let garland = true;
let tree = false;
let christmas = garland || tree;
console.log(christmas);

// Task 17: Logical NOT (!)
// 1. Declare a boolean variable and assign it any value (true or false).
// 2. Use the ! operator to invert the value and store it in a new variable.
// 3. Print both the original and inverted values.

let orange = true;
let apple = !orange;
console.log(orange, apple);

// Task 18: Using typeof with Expressions
// 1. Perform any arithmetic operation (e.g., addition, subtraction).
// 2. Use the typeof operator to find the type of the result.
// 3. Print the result and its type.

let math = 15 + 37;
console.log(math, typeof(math));

// Task 19: Combining Logical and Arithmetic Operators
// 1. Declare three variables: two numbers and one boolean.
// 2. Use arithmetic operators to create an expression (e.g., add the two numbers).
// 3. Use a logical operator to combine the result with the boolean value.
// 4. Print the final result.

let numberOne = 8;
let numberTwo = 88;
let booleanOne = false;
let numberOneTwo = numberOne + numberTwo;
//let numberBool = numberOneTwo > 10 || booleanOne;
console.log(numberOneTwo > 10 || booleanOne);
//console.log(numberBool);

// Task 20: Exploring typeof with Strings and Numbers
// 1. Declare a variable with a string that looks like a number (e.g., "42").
// 2. Check the type of the variable.
// 3. Perform an arithmetic operation on the string and print the result and its new type.

let fake = "66";
typeof(fake);
let newFake = Number(fake) + 4
console.log(newFake, typeof(newFake));