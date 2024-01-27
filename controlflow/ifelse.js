// true || false;        // true
// 10 > 5 || 10 > 20;    // true
// false || false;       // false
// 10 > 100 || 10 > 20;  // false

const isTaskCompleted = false;
if (isTaskCompleted) {
  console.log('Task completed');
} 
else {
  console.log('Task incomplete');
}

// else if case

const size = 10;

if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}

// Switch case

const food = 'salad';

switch (food) {
  case 'oyster':
    console.log('The taste of the sea 🦪');
    break;
  case 'pizza':
    console.log('A delicious pie 🍕');
    break;
  default:
    console.log('Enjoy your meal');
}

/*Truthy and Falsy
In JavaScript, values evaluate to true or false when evaluated as Booleans.

Values that evaluate to true are known as truthy
Values that evaluate to false are known as falsy
Falsy values include false, 0, empty strings, null undefined, and NaN. All other values are truthy.
*/

