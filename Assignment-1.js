
//Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.

function squareOfNumber(number, print) {
    print(number*number);
  }
  
  function printSquare(result) {
    console.log('The Square is:', result);
  }
  
squareOfNumber(10, printSquare);
  
//An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents 
//the first letter of both the arguments. 

// Ex : For the arguments Roger and Waters, the function returns ‘RW’. Write this function.

const fullName = (firstName, lastName) => firstName[0] + lastName[0];
console.log(fullName('Chikoti', 'Saiteja')); 
