/*
JS finding methods.
*/

// Use indexOf() to find the index of the first occurence of an element in an array.
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];

let colorPosition = colors.indexOf('green');
console.log(colorPosition); // Output: 3


// Use lastIndexOf() to find the last occurence of an element in an array. If element is not in array, then return -1/
const colors = ['blue', 'white', 'yellow', 'green', 'blue', 'indigo', 'violet' ];

let colorLastOccurence = colors.lastIndexOf('blue');
console.log(colorLastOccurence); // Output: 3 

let colorLastOccurence = colors.lastIndexOf('black');
console.log(colorLastOccurence); // Output: -1 


// Use length function to find the length of an array.
const colors = ['brown', 'pink', 'purple', 'maroon', 'aqua'];

let colorsName = colors.length;
console.log(colorsName); // Output: 5


// Use at() to find the element of an array based on its position.
const colors = ['brown', 'pink', 'purple', 'maroon', 'aqua'];

let colorsName = colors.at(2);
console.log(colorsName); // Output: "purple" 


// Use length function to find the length of an array.
const colors = ['brown', 'pink', 'purple', 'maroon', 'aqua'];

let colorsInclude1 = colors.includes('maroon');
console.log(colorsInclude1); // Output: true

let colorsInclude2 = colors.includes('green');
console.log(colorsInclude2); // Output: false
