//  Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.

function Addition(num1: number, num2: number) {
console.log(`The Addition of the two numbers is ${num1 + num2}`);

    return num1 + num2;
}

// Calling the function with two numbers and logging the result
Addition(53, 79); // Outputs 12




// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function greetUser(name: string = "anonymous") {
   
    console.log(`Hello, ${name}!`);
}


greetUser("Nazar Baloch"); 
greetUser();




// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

function squareDeclaration(number: number){
    return number * number;
}


const squareExpression = function(number: number): number {
    return number * number;
};


console.log(squareDeclaration(25)); 
console.log(squareExpression(93)); 
