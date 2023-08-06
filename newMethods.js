// Remove duplicates in an array.
const flowers = ['lily', 'tulip', 'jasmine', 'tulip'];
const uniqueFlowers = [...new Set(flowers)];

console.log(uniqueFlowers); // Result: ["lily", "tulip", "jasmine"]


// Find out the minimum and maximum values of an array.
const values = [156725, 191437, 111019, 187721, 176003, 124958];
let minimum = Math.min(...values);
let maximum = Math.max(...values);

console.log(minimum); // Output: 111019
console.log(maximum); // Output: 191437
