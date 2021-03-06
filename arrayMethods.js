/*
Essential JS Array Methods 
*/

/* The map() method allows you to take one array and convert it into a new array. Each item in the new array will be the result of a function. */
/* Let us find the square value for each element in the array. */

const array1 = [1, 2, 3, 4];

const square = array1.map(x => x * x);

console.log(square);

/* Let us create a new array for a shopping list.  */

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

console.log(filteredArray);


/* The find() method finds a single object in an array. */
/* Let's "find" for the item steak. */

const foundItem = array2.find((commodity) => {
    return commodity.item === 'Steak';
  });
  
console.log(foundItem);


/* Sometimes we just want to know if an item is contained inside of an array, which is what the some() function can do. */
/* We will use the some() function to find out if there are "some" items that have a price of at least 20.00. */

const costsOverTwenty = array2.some((commodity) => {
    return commodity.price >= 20;
  });
  
console.log(costsOverTwenty);


/* The forEach() function allows us to find the name of each entry in the array. */
/* Let us use the forEach() to find out the items in the shopping list without the prices. */

array2.forEach((commodity) => {
    console.log(commodity.item)
 });


 /* The every() function checks for the existence of at least one item. */
 /* We will use the every function to find if there is an item that costs 7.57. */

 const hasSevenFiftySeven = array2.every((commodity) => {
    return commodity.price == 7.57;
});

console.log(hasSevenFiftySeven);

/* Let us also find if there is an item that costs 9.99. */

const hasNineNinetyNine = array2.every((commodity) => {
    return commodity.price == 9.99;
});

console.log(hasNineNinetyNine);


/* The reduce() function returns a combination of all the of all those different operations. */
/* We will use the reduce() function to find out our total item. */

const total = array2.reduce((currentTotal, commodity) => {
    return commodity.price + currentTotal;
}, 0);

console.log(total);


/* The includes() method helps us find if an item is "included" in the array. */
/* We will have new array of the first 20 prime numbers. We want to know if 33 is in the array, */

const array3 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]

const includesThirtyThree = array3.includes(33);

console.log(includesThirtyThree);
