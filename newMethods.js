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


// The push() functions adds new items to the end of an array.
const presidents = ["Kennedy", "Washington", "Jefferson", "Roosevelt"];
presidents.push("Bush", "Polk");

console.log(presidents); // Output: [ "Kennedy", "Washington", "Jefferson", "Roosevelt", "Bush", "Polk" ]


// The flatMap() method combines flat() and map().
const scouts = [ {name: 'Keenan', badges: ['heart', 'star']}, {name: 'Avery', badges: ['cub', 'star']};
const scoutsBages = scouts.flatMap(item => item.badges);

console.log(scoutsBadges); // Ouput: ["heart", "star", "cub", "star"]
