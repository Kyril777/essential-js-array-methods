/* Essential JS Array Methods */

/* The map() method allows you to take one array and convert it into a new array. Each item in the new array will be the result of a function. */
/* Let us find the square value for each element in the array. */

const array1 = [1, 2, 3, 4];
const square = array1.map(x => x * x);

console.log(square); // Output: [1, 4, 9, 16]


/* Create a new array for a shopping list.  */
const array2 = [
    {item: 'Eggs', price: 4.99},
    {item: 'Milk', price: 7.57},
    {item: 'Tuna', price: 2.59},
    {item: 'Steak', price: 12.73},
    {item: 'Towels', price: 15.99},
    {item: 'Potatoes', price: 10.39}
]

/* The filter() item sorts each item based on what we specify. */
/* Let us "filter" all of items that cost more than 10.00 in the new array. */

const filteredArray = array2.filter((commodity) => {
    return commodity.price >= 10;
})

console.log(filteredArray); // Output: [{ item: "Steak", price: 12.73 }, { item: "Towels", price: 15.99, { item: "Potatoes", price: 10.39 }]



/* The find() method finds a single object in an array. */
/* Let's "find" for the item steak. */

const foundItem = array2.find((commodity) => {
    return commodity.item === 'Steak';
  });
  
console.log(foundItem); // Output: { item: "Steak", price: 12.73 }


/* Sometimes we just want to know if an item is contained inside of an array, which is what the some() function can do. */
/* We will use the some() function to find out if there are "some" items that have a price of at least 20.00. */

const costsOverTwenty = array2.some((commodity) => {
    return commodity.price >= 20;
  });
  
console.log(costsOverTwenty); // Output: false


/* The forEach() function allows us to find the name of each entry in the array. */
/* Let us use the forEach() to find out the items in the shopping list without the prices. */

array2.forEach((commodity) => {
    console.log(commodity.item)
 }); // Output: "Eggs" "Milk" "Tuna" "Steak" "Towels" "Potatoes"


/* The every() function checks for the existence of at least one item. */
/* We will use the every function to find if every item costs less than 16.00 */

array2.every((commodity) => {
    console.log(commodity.price <= 16.00) 
}); // Output: true

/* Let us also find if every item costs less than 2.00. */
array2.every((commodity) => {
    console.log(commodity.price <= 2.00)
});  // Output: false



/* The reduce() function returns a combination of all the of all those different operations. */
/* We will use the reduce() function to find out our total item. */

const total = array2.reduce((currentTotal, commodity) => {
    return commodity.price + currentTotal;
}, 0);

console.log(total); // Output: 54.260000000000005


/* The includes() method helps us find if an item is "included" in the array. */
/* We will have new array of the first 20 prime numbers. We want to know if 33 is in the array, */

const array3 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]
const includesThirtyOne = array3.includes(31);

console.log(includesThirtyOne); // Output: true


// The reduce() method returns a single value: the function's accumulated result. 
// Use the reduce method to aggregate all figures in an array and subtract the last figure on the array.
const figures = [100, 50, 10];
const reduced_figures = figures.reduce(subtracter);
function subtracter(total, num) {
  return total - num;
}

console.log(reduced_figures); // Output: 100

// Use the reduce method to aggregate all figures in an array.
const figures = [100, 50, 10];
const reduced_figures = figures.reduce(adder);
function adder(total, num) {
  return total + num;
}

console.log(reduced_figures); // Output: 160


// Use reduce() function to join string elenets.
const message = ["Jason ", "does ", "the ", "bone."];

function joinStrings(acc, curr) {
  return acc + curr;
}

let joinedString = message.reduce(joinStrings);
console.log(joinedString); // Output: "Jason does the bone."


// Use reduce() function to find produce the minimum and maximum values of an array.
function minMaxValues(figures) {
	return figures.reduce((accumulate, currentValue) => {
  	accumulate[0] = ( accumulate[0] === undefined || currentValue < accumulate[0] ) ? currentValue : accumulate[0] 
    accumulate[1] = ( accumulate[1] === undefined || currentValue > accumulate[1] ) ? currentValue : accumulate[1]
    return accumulate;
    }, []);
}

const results = minMaxValues([21, 101, 7, 75, 61, 39]);
console.log(results); // Output: [7, 101]
