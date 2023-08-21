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


// Convert string into an array
const string = "RESPECT";
const array = Array.from(string);
console.log(array); // Output: ["R", "E", "S", "P", "E", "C", "T"]

// Convert Set into an array
const things = new Set(["borders", "washers", "strawberries", "net", "calculator"]);
const arry = Array.from(things);
console.log(arry); // Output: ["borders", "washers", "strawberries", "net", "calculator"]


// Destructure an array by assigning a destructuring assignment. Simply leave an empty string if blank.
const ranking = ["Sundown", "Slider", "", "Jester", "Merlin"];
const [fifth, fourth, third, second, first] = ranking;

console.log(first); // Output: "Merlin"
console.log(second); // Output: "Jester"
console.log(third); // Output: ""


// Destructure an array by assigning a destructuring assignment. Simply leave an empty string if blank.
const pilot = {
  name: 'Pete Maverick',
  address: '',
  yearsOfService: 39,
  rank: 'Captain'
};

const {name, address, yearsOfService, rank} = pilot;

console.log(name); // Output: "Pete Maverick"
console.log(address); // Output: ""
console.log(yearsOfService); // Output: 39
console.log(rank); // Output: "Captain"


