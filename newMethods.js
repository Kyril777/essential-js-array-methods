// Remove duplicates in an array.
const flowers = ['lily', 'tulip', 'jasmine', 'tulip'];
const uniqueFlowers = [...new Set(flowers)];

console.log(uniqueFlowers); // Result: ["lily", "tulip", "jasmine"]
