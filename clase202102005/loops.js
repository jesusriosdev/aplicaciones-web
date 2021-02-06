var students = ["jose", "gerardo", "alex", "david"];

function greetStudent(student) {
    console.log(`Hi, ${student}`)
}

for (var i = 0; i < students.length; i++) {
    greetStudent(students[i]);
}

for (var student of students) {
    greetStudent(student);
}

while (students.length > 0) {
    console.log(students);
    var student = students.shift();
    greetStudent(student);
}