/*
More JS Array Methods 
*/

/* Merging an array. */
// Previous method. Merging an array with the concat() function.
const friends1 = ['Rachel', "Monica", "Phoebe"];
const friends2 = ["Ross", "Chandler", "Joey"];
const mergedArray = friends1.concat(friends2);
console.log(mergedArray); // output: ["Rachel", "Monica", "Phoebe", "Ross", "Chandler", "Joey"]

// Later method. Mergin an array with a spread operator. 
const friends1 = ['Rachel', "Monica", "Phoebe"];
const friends2 = ["Ross", "Chandler", "Joey"];
const mergedArray = [...friends2, ...friends1];
console.log(mergedArray); // output: ["Ross", "Chandler", "Joey", "Rachel", "Monica", "Phoebe"]


/* Deep copy. */ 
// Shallow copy creates a new array with same values. Changes in the objects within the original array will hold true shallow copy. 
const originalArray = [44, 55, { a: 27 }];
const shallowCopy = originalArray.slice();
console.log(shallowCopy); // output: [44, 55, { a: 4 }]

// Deep copy creates a new object independent copy of the original object.
const originalArray = [44, 55, { a: 27 }];
originalArray[2].a = 53;
const deepCopy = JSON.parse(JSON.stringify(originalArray));
console.log(deepCopy); // output: [44, 55, { a: 53 }]


/* Converting arrays to strings using the join() function. */
// Use join() function to convert an array into a string.
const keywordsArray = ['investing', 'articles', 'the-history-of-bitcoin'];
const keywordString = keywordsArray.join(', ');
console.log(keywordString); // output: "investing, articles, the-history-of-bitcoin"


// Use the join() method to create a URL address.
const queryParamsArray = [ 'investing', 'articles','the-history-of-bitcoin',];
const queryString = queryParamsArray.join('/');
const url = 'https://money.usnews.com/' + queryString;
console.log(url); // output: "https://money.usnews.com/investing/articles/the-history-of-bitcoin"





