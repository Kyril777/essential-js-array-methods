// Use Object.groupBy to group students by grade.
const students = [ { id: 1, name: "Rich Halpern", grade: "B" },
{ id: 2, name: "Layla Simmons", grade: "C" },
{ id: 3, name: "Malachi Williams", grade: "A" },
{ id: 4, name: "Susan Crane", grade: "B" },
{ id: 5, name: "Kyle Bertram", grade: "C" },
{ id: 6, name: "Courtney Davenport", grade: "A" } ];

const groupedStudents = Object.groupBy(students, ({ grade }) => grade );

console.log(groupedStudents);

/* Output:
{
  A: [{
  grade: "A",
  id: 3,
  name: "Malachi Williams"
}, {
  grade: "A",
  id: 6,
  name: "Courtney Davenport"
}],
  B: [{
  grade: "B",
  id: 1,
  name: "Rich Halpern"
}, {
  grade: "B",
  id: 4,
  name: "Susan Crane"
}],
  C: [{
  grade: "C",
  id: 2,
  name: "Layla Simmons"
}, {
  grade: "C",
  id: 5,
  name: "Kyle Bertram"
}]
}
*/
