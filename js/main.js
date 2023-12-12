// 1 ci /
function compareStudents(a, b) {
    if (a.grade > b.grade) return "a b-den boyukdur";
    if (a.grade === b.grade) return "beraber";
    return "a b-den kicikdir";
}

console.log(compareStudents(students[0], students[1]));

// 2 ci /
let cutindeks = students.filter((student, index) => index === 9)[0];
console.log(cutindeks);

// 3 cu
let tekid = students.filter((student, index, array) => 
    array.findIndex(findStudent => findStudent.id === student.id) === index);
console.log(tekid);
// 4 cu
let yasi20olan = students.filter(student => student.age > 20);
console.log(yasi20olan);
// 5 ci
let grade90olan = students.filter(student => student.id < 10 && student.grade >= 90);
console.log(grade90olan);
// 6 ci
let grade100olan = students.filter(student => student.grade === 100 || student.grade === 95);
console.log(grade100olan);
