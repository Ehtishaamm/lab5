// JavaScript statement
let message = "JavaScript is working correctly";
// Display result on webpage
document.getElementById("syntaxOutput").textContent =
    message;

var studentName = "Ali";
let semester = 5;
const university = "Air University";


// Display variables
document.getElementById("variableOutput").innerHTML =
    "Student Name: " + studentName +
    "<br>Semester: " + semester +
    "<br>University: " + university;

/* =========================================
   3. HOISTING
========================================= */

// var is hoisted
console.log(hoistedVariable);

var hoistedVariable = "var is hoisted";


/*
   let is also hoisted internally,
   but it cannot be accessed before
   its declaration.

   The following code would produce
   a ReferenceError:

   console.log(letVariable);
   let letVariable = 10;
*/


document.getElementById("hoistingOutput").innerHTML =
    "Using var: <strong>" +
    hoistedVariable +
    "</strong>" +
    "<br><br>" +
    "The declaration of var is hoisted, " +
    "so it can be referenced before its declaration." +
    "<br><br>" +
    "let and const cannot be accessed before " +
    "their declaration.";


/* =========================================
   4. JAVASCRIPT OBJECT
========================================= */

// Create a student object

let student = {
    name: "Ahmed",
    age: 21,
    semester: 5,
    cgpa: 3.45,
    program: "BS Computer Science"
};
// Access object properties
document.getElementById("objectOutput").innerHTML =
    "Name: " + student.name +
    "<br>Age: " + student.age +
    "<br>Semester: " + student.semester +
    "<br>CGPA: " + student.cgpa +
    "<br>Program: " + student.program;

/* =========================================
   5. OPERATORS
========================================= */

// Variables

let a = 10;
let b = 3;


// Arithmetic operators

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let remainder = a % b;


// Comparison operators

let greater = a > b;
let equal = a === b;


// Logical operators

let logicalAnd = (a > 5 && b < 5);
let logicalOr = (a > 20 || b < 5);


document.getElementById("operatorOutput").innerHTML =

    "<strong>Arithmetic Operators</strong>" +

    "<br>" +
    a + " + " + b + " = " + addition +

    "<br>" +
    a + " - " + b + " = " + subtraction +

    "<br>" +
    a + " × " + b + " = " + multiplication +

    "<br>" +
    a + " / " + b + " = " + division +

    "<br>" +
    a + " % " + b + " = " + remainder +

    "<br><br>" +

    "<strong>Comparison Operators</strong>" +

    "<br>" +
    a + " > " + b + " = " + greater +

    "<br>" +
    a + " === " + b + " = " + equal +

    "<br><br>" +

    "<strong>Logical Operators</strong>" +

    "<br>" +
    "(a > 5 && b < 5) = " + logicalAnd +

    "<br>" +
    "(a > 20 || b < 5) = " + logicalOr;


/* =========================================
   6. CONDITIONS
========================================= */

let marks = 78;

let grade;
let status;


// if / else if / else

if (marks >= 80) {

    grade = "A";

}
else if (marks >= 70) {

    grade = "B";

}
else if (marks >= 60) {

    grade = "C";

}
else if (marks >= 50) {

    grade = "D";

}
else {

    grade = "F";

}


// Determine pass/fail

if (marks >= 50) {

    status = "Passed";

}
else {

    status = "Failed";

}


// Display result

document.getElementById("conditionOutput").innerHTML =

    "Student Marks: " + marks +
    "<br>Grade: " + grade +
    "<br>Status: " + status;


/* =========================================
   7. COMBINED STUDENT RESULT
========================================= */

// Student object

let resultStudent = {

    name: "Sara",
    assignment: 18,
    midterm: 22,
    finalExam: 42

};


// Calculate total using arithmetic operator

let total =
    resultStudent.assignment +
    resultStudent.midterm +
    resultStudent.finalExam;


// Determine grade using conditions

let resultGrade;

if (total >= 80) {

    resultGrade = "A";

}
else if (total >= 70) {

    resultGrade = "B";

}
else if (total >= 60) {

    resultGrade = "C";

}
else if (total >= 50) {

    resultGrade = "D";

}
else {

    resultGrade = "F";

}


// Display complete result

document.getElementById("resultOutput").innerHTML =

    "Student: " + resultStudent.name +

    "<br>Assignment: " +
    resultStudent.assignment +

    "<br>Midterm: " +
    resultStudent.midterm +

    "<br>Final Exam: " +
    resultStudent.finalExam +

    "<br><strong>Total Marks: " +
    total +
    "</strong>" +

    "<br><strong>Grade: " +
    resultGrade +
    "</strong>";



/* =====================================================
   LAB 04
   1. ARRAYS
===================================================== */

let lab04Students = [
    "Ali",
    "Ahmed",
    "Sara",
    "Ayesha",
    // Task 1: four additional students
    "Hassan",
    "Fatima",
    "Usman",
    "Zainab"
];

document.getElementById("arrayOutput").innerHTML =

    "Students: " +
    lab04Students.join(", ") +

    "<br><br>" +

    "First Student: " +
    lab04Students[0] +

    "<br>" +

    "Second Student: " +
    lab04Students[1] +

    "<br>" +

    "Total Students: " +
    lab04Students.length;




   /* =====================================================
   2. ARRAY METHODS
===================================================== */

let lab04Courses = [
    "Web Development",
    "Database Systems",
    "Artificial Intelligence"
];


// Add an item
lab04Courses.push("Computer Vision");


// Check whether an item exists
let lab04HasAI =
    lab04Courses.includes(
        "Artificial Intelligence"
    );


// Display result
document.getElementById(
    "arrayMethodsOutput"
).innerHTML =

    "Courses: " +
    lab04Courses.join(", ") +

    "<br><br>" +

    "Total Courses: " +
    lab04Courses.length +

    "<br><br>" +

    "Artificial Intelligence exists: " +
    lab04HasAI;

/* =====================================================
   3. FOR LOOP
===================================================== */

let lab04ForLoopResult = "";

for (
    let i = 0;
    i < lab04Students.length;
    i++
) {

    lab04ForLoopResult +=

        "Student " +
        (i + 1) +
        ": " +
        lab04Students[i] +
        "<br>";
}


document.getElementById(
    "forLoopOutput"
).innerHTML =
    lab04ForLoopResult;


/* =====================================================
   4. FOR...OF LOOP
===================================================== */

let lab04ForOfResult = "";

for (
    let lab04Student of lab04Students
) {

    lab04ForOfResult +=
        lab04Student +
        "<br>";
}


document.getElementById(
    "forOfOutput"
).innerHTML =
    lab04ForOfResult;



/* =====================================================
   5. FOR...IN LOOP
===================================================== */

let lab04StudentInfo = {

    name: "Ahmed",
    age: 21,
    department: "Computer Science",
    semester: 6

};


let lab04ForInResult = "";


for (
    let lab04Key in lab04StudentInfo
) {

    lab04ForInResult +=

        lab04Key +
        ": " +
        lab04StudentInfo[lab04Key] +
        "<br>";
}


document.getElementById(
    "forInOutput"
).innerHTML =
    lab04ForInResult;





/* =====================================================
   6. FOREACH
===================================================== */

let lab04ForEachResult = "";


lab04Students.forEach(
    function(student, index) {

        lab04ForEachResult +=

            (index + 1) +
            ". " +
            student +
            "<br>";

    }
);


document.getElementById(
    "forEachOutput"
).innerHTML =
    lab04ForEachResult;



/* =====================================================
   7. FUNCTIONS
===================================================== */

function lab04CalculateTotal(
    assignment,
    midterm,
    finalExam
) {

    let total =
        assignment +
        midterm +
        finalExam;

    return total;
}


let lab04StudentTotal =
    lab04CalculateTotal(
        18,
        22,
        42
    );


document.getElementById(
    "functionOutput"
).innerHTML =

    "Assignment Marks: 18" +

    "<br>" +

    "Midterm Marks: 22" +

    "<br>" +

    "Final Exam Marks: 42" +

    "<br><br>" +

    "<strong>Total Marks: " +
    lab04StudentTotal +
    "</strong>";



/* =====================================================
   8. ARROW FUNCTIONS
===================================================== */

const lab04CalculateAverage =
    (mark1, mark2, mark3) => {

        return (
            mark1 +
            mark2 +
            mark3
        ) / 3;

    };


let lab04Average =
    lab04CalculateAverage(
        18,
        22,
        42
    );


document.getElementById(
    "arrowOutput"
).innerHTML =

    "Marks: 18, 22, 42" +

    "<br>" +

    "Average: " +

    lab04Average.toFixed(2);




/* =====================================================
   9. ES6 CLASS
===================================================== */

class Lab04Student {

    constructor(
        name,
        semester,
        cgpa
    ) {

        this.name = name;
        this.semester = semester;
        this.cgpa = cgpa;

    }


    getStatus() {

        if (this.cgpa >= 2.0) {

            return "Active";

        }
        else {

            return "Academic Warning";

        }

    }

}


let lab04StudentRecord =
    new Lab04Student(
        "Ahmed",
        6,
        3.45
    );


document.getElementById(
    "classOutput"
).innerHTML =

    "Name: " +
    lab04StudentRecord.name +

    "<br>" +

    "Semester: " +
    lab04StudentRecord.semester +

    "<br>" +

    "CGPA: " +
    lab04StudentRecord.cgpa +

    "<br>" +

    "Status: " +
    lab04StudentRecord.getStatus();

/* =====================================================
   10. OBJECT DESTRUCTURING
===================================================== */

const lab04StudentData = {

    name: "Sara",
    semester: 6,
    cgpa: 3.75

};


const {
    name: lab04Name,
    semester: lab04Semester,
    cgpa: lab04CGPA
} = lab04StudentData;


document.getElementById(
    "destructuringOutput"
).innerHTML =

    "Name: " +
    lab04Name +

    "<br>" +

    "Semester: " +
    lab04Semester +

    "<br>" +

    "CGPA: " +
    lab04CGPA;




/* =====================================================
   11. TERNARY OPERATOR
===================================================== */

const lab04Marks = 78;


const lab04Status =
    lab04Marks >= 50
        ? "Passed"
        : "Failed";


document.getElementById(
    "ternaryOutput"
).innerHTML =

    "Marks: " +
    lab04Marks +

    "<br>" +

    "Status: " +
    lab04Status;



/* =====================================================
   12. MAP(), FILTER() AND FIND()
===================================================== */

const lab04MarksList = [
    45,
    55,
    72,
    81,
    38
];

const lab04UpdatedMarks =
    lab04MarksList.map(
        mark => mark + 5
    );

const lab04PassedMarks =
    lab04MarksList.filter(
        mark => mark >= 50
    );

const lab04FirstHighMark =
    lab04MarksList.find(
        mark => mark >= 70
    );


document.getElementById(
    "advancedArrayOutput"
).innerHTML =

    "Original Marks: " +
    lab04MarksList.join(", ") +

    "<br><br>" +

    "After map() (+5): " +
    lab04UpdatedMarks.join(", ") +

    "<br><br>" +

    "Passed Marks using filter(): " +
    lab04PassedMarks.join(", ") +

    "<br><br>" +

    "First Mark >= 70 using find(): " +
    lab04FirstHighMark;



/* =====================================================
   12. FINAL STUDENT PERFORMANCE DASHBOARD
===================================================== */

const lab04StudentRecords = [

    {
        name: "Ali",
        semester: 6,
        marks: 82
    },

    {
        name: "Ahmed",
        semester: 5,
        marks: 67
    },

    {
        name: "Sara",
        semester: 6,
        marks: 91
    },

    {
        name: "Ayesha",
        semester: 4,
        marks: 48
    },

    // Task 5: additional students (total = 6)
    {
        name: "Hassan",
        semester: 5,
        marks: 74
    },

    {
        name: "Fatima",
        semester: 3,
        marks: 55
    }

];


/* =====================================================
   GRADE CALCULATION FUNCTION
===================================================== */

function lab04CalculateGrade(marks) {

    if (marks >= 80) {

        return "A";

    }
    else if (marks >= 70) {

        return "B";

    }
    else if (marks >= 60) {

        return "C";

    }
    else if (marks >= 50) {

        return "D";

    }
    else {

        return "F";

    }

}

/* =====================================================
   STATUS USING ARROW FUNCTION + TERNARY
===================================================== */

const lab04GetStatus =
    marks =>
        marks >= 50
            ? "Passed"
            : "Failed";





/* =====================================================
   CREATE DASHBOARD
===================================================== */

let lab04DashboardOutput = "";

lab04StudentRecords.forEach(
    student => {

        const {
            name: lab04Name,
            semester: lab04Semester,
            marks: lab04StudentMarks
        } = student;


        const lab04Grade =
            lab04CalculateGrade(
                lab04StudentMarks
            );


        const lab04StudentStatus =
            lab04GetStatus(
                lab04StudentMarks
            );


        lab04DashboardOutput +=

            "<div class='border rounded p-3 mb-3'>" +

                "<h5>" +
                    lab04Name +
                "</h5>" +

                "<p>" +

                    "<strong>Semester:</strong> " +
                    lab04Semester +

                    "<br>" +

                    "<strong>Marks:</strong> " +
                    lab04StudentMarks +

                    "<br>" +

                    "<strong>Grade:</strong> " +
                    lab04Grade +

                    "<br>" +

                    "<strong>Status:</strong> " +
                    lab04StudentStatus +

                "</p>" +

            "</div>";

    }
);



/* =====================================================
   DISPLAY DASHBOARD
===================================================== */

document.getElementById(
    "studentDashboardOutput"
).innerHTML =
    lab04DashboardOutput;


/* =====================================================
   LAB 04 TASKS
===================================================== */


/* =====================================================
   TASK 1 - UNIVERSITY STUDENT MANAGEMENT SYSTEM
===================================================== */

// Array of student objects
const task1Students = [

    { name: "Ali",    rollNumber: "BSCS-001", department: "Computer Science",     semester: 6, cgpa: 3.45 },
    { name: "Ahmed",  rollNumber: "BSCS-002", department: "Computer Science",     semester: 5, cgpa: 2.80 },
    { name: "Sara",   rollNumber: "BSCS-023", department: "Software Engineering", semester: 6, cgpa: 3.75 },
    { name: "Ayesha", rollNumber: "BSCS-004", department: "Data Science",         semester: 4, cgpa: 1.85 },
    { name: "Hassan", rollNumber: "BSCS-005", department: "Cyber Security",       semester: 5, cgpa: 2.25 },
    { name: "Fatima", rollNumber: "BSCS-006", department: "Computer Science",     semester: 3, cgpa: 3.10 }

];


// Function: academic status
function task1GetAcademicStatus(cgpa) {

    if (cgpa >= 3.00) {
        return "Excellent";
    }
    else if (cgpa >= 2.50) {
        return "Good";
    }
    else if (cgpa >= 2.00) {
        return "Satisfactory";
    }
    else {
        return "Academic Warning";
    }

}


// Arrow function + ternary: eligibility for the next semester
const task1GetEligibility =
    cgpa =>
        cgpa >= 2.00
            ? "Eligible"
            : "Not Eligible";


let task1Output = "";

task1Students.forEach(
    student => {

        // Object destructuring
        const {
            name,
            rollNumber,
            department,
            semester,
            cgpa
        } = student;

        const academicStatus =
            task1GetAcademicStatus(cgpa);

        const eligibility =
            task1GetEligibility(cgpa);

        // Bootstrap card
        task1Output +=
            "<div class='col-md-6'>" +
                "<div class='card h-100 shadow-sm'>" +
                    "<div class='card-body'>" +
                        "<h5 class='card-title'>" + name + "</h5>" +
                        "<p class='card-text mb-0'>" +
                            "<strong>Roll No:</strong> " + rollNumber + "<br>" +
                            "<strong>Department:</strong> " + department + "<br>" +
                            "<strong>Semester:</strong> " + semester + "<br>" +
                            "<strong>CGPA:</strong> " + cgpa.toFixed(2) + "<br>" +
                            "<strong>Status:</strong> " + academicStatus + "<br>" +
                            "<strong>Eligibility:</strong> " +
                            "<span class='badge " +
                                (eligibility === "Eligible" ? "bg-success" : "bg-danger") +
                            "'>" + eligibility + "</span>" +
                        "</p>" +
                    "</div>" +
                "</div>" +
            "</div>";

    }
);

document.getElementById("task1Output").innerHTML = task1Output;


/* =====================================================
   TASK 2 - ONLINE COURSE REGISTRATION SYSTEM
===================================================== */

// Store the courses in an array
let task2Courses = [
    "Web Development",
    "Database Systems",
    "Artificial Intelligence",
    "Computer Networks",
    "Software Engineering"
];


// Display all available courses using a for loop
let task2AvailableList = "";

for (let i = 0; i < task2Courses.length; i++) {

    task2AvailableList +=
        (i + 1) + ". " + task2Courses[i] + "<br>";

}


// Add a new course using push()
task2Courses.push("Data Structures");

// Course list right after push() (6 courses)
const task2AfterPush = task2Courses.join(", ");

// Remove the last course using pop()
const task2RemovedCourse = task2Courses.pop();

// Check availability using includes()
const task2HasAI =
    task2Courses.includes("Artificial Intelligence");


// Function: total number of registered courses (uses for...of)
function task2CalculateTotalCourses(courses) {

    let count = 0;

    for (let course of courses) {
        count++;
    }

    return count;

}


// Arrow function + ternary: Full-Time or Part-Time
const task2GetStudentStatus =
    totalCourses =>
        totalCourses >= 4
            ? "Full-Time"
            : "Part-Time";


const task2TotalCourses =
    task2CalculateTotalCourses(task2Courses);

const task2StudentStatus =
    task2GetStudentStatus(task2TotalCourses);


// Final course list displayed using forEach()
let task2FinalList = "";

task2Courses.forEach(
    (course, index) => {

        task2FinalList +=
            (index + 1) + ". " + course + "<br>";

    }
);


// Extra example: a student registered in only 3 courses
const task2PartTimeExample =
    task2GetStudentStatus(
        task2CalculateTotalCourses(
            task2Courses.slice(0, 3)
        )
    );


document.getElementById("task2Output").innerHTML =

    "<h5>Available Courses</h5>" +
    task2AvailableList +

    "<br>" +
    "<strong>push():</strong> Data Structures added (" +
    "<em>" + task2AfterPush + "</em>)<br>" +
    "<strong>pop():</strong> " + task2RemovedCourse + " removed" +

    "<br><br>" +
    "<h5>Final Course List</h5>" +
    task2FinalList +

    "<br>" +
    "<strong>Total Registered Courses:</strong> " +
    task2TotalCourses + "<br>" +

    "<strong>Artificial Intelligence Available:</strong> " +
    (task2HasAI ? "Yes" : "No") + "<br>" +

    "<strong>Student Status:</strong> " +
    task2StudentStatus + "<br>" +

    "<small class='text-muted'>(A student registered in only 3 courses would be: " +
    task2PartTimeExample + ")</small>";


/* =====================================================
   TASK 3 - EXAMINATION AND RESULT PROCESSING SYSTEM
===================================================== */

const task3Students = [

    { name: "Sara",   rollNumber: "BSCS-023", assignment: 18, midterm: 22, finalExam: 42 },
    { name: "Ali",    rollNumber: "BSCS-001", assignment: 15, midterm: 20, finalExam: 38 },
    { name: "Ahmed",  rollNumber: "BSCS-002", assignment: 12, midterm: 18, finalExam: 33 },
    { name: "Hassan", rollNumber: "BSCS-005", assignment: 14, midterm: 16, finalExam: 25 },
    { name: "Ayesha", rollNumber: "BSCS-004", assignment: 8,  midterm: 12, finalExam: 20 }

];


// Function: total marks
function task3CalculateTotal(assignment, midterm, finalExam) {

    return assignment + midterm + finalExam;

}

// Arrow function: average
const task3CalculateAverage =
    (assignment, midterm, finalExam) =>
        (assignment + midterm + finalExam) / 3;

// Function: grade
function task3CalculateGrade(total) {

    if (total >= 80) {
        return "A";
    }
    else if (total >= 70) {
        return "B";
    }
    else if (total >= 60) {
        return "C";
    }
    else if (total >= 50) {
        return "D";
    }
    else {
        return "F";
    }

}


// Results are stored so a for loop can count them afterwards
const task3Results = [];
let task3Output = "";

task3Students.forEach(
    student => {

        // Object destructuring
        const {
            name,
            rollNumber,
            assignment,
            midterm,
            finalExam
        } = student;

        const total =
            task3CalculateTotal(assignment, midterm, finalExam);

        const average =
            task3CalculateAverage(assignment, midterm, finalExam);

        const grade =
            task3CalculateGrade(total);

        // Ternary operator: Pass / Fail
        const status =
            total >= 50
                ? "Passed"
                : "Failed";

        task3Results.push({ name, status });

        task3Output +=
            "<div class='col-md-6'>" +
                "<div class='card h-100 shadow-sm'>" +
                    "<div class='card-body'>" +
                        "<h5 class='card-title'>Student: " + name + "</h5>" +
                        "<p class='card-text mb-0'>" +
                            "<strong>Roll No:</strong> " + rollNumber + "<br>" +
                            "<strong>Assignment:</strong> " + assignment + "<br>" +
                            "<strong>Midterm:</strong> " + midterm + "<br>" +
                            "<strong>Final Exam:</strong> " + finalExam + "<br>" +
                            "<strong>Total:</strong> " + total + "<br>" +
                            "<strong>Average:</strong> " + average.toFixed(2) + "<br>" +
                            "<strong>Grade:</strong> " + grade + "<br>" +
                            "<strong>Status:</strong> " +
                            "<span class='badge " +
                                (status === "Passed" ? "bg-success" : "bg-danger") +
                            "'>" + status + "</span>" +
                        "</p>" +
                    "</div>" +
                "</div>" +
            "</div>";

    }
);

document.getElementById("task3Output").innerHTML = task3Output;


// Additional challenge: count passed students with a for loop
let task3Passed = 0;

for (let i = 0; i < task3Results.length; i++) {

    if (task3Results[i].status === "Passed") {
        task3Passed++;
    }

}

document.getElementById("task3Summary").innerHTML =
    "<strong>Total Students:</strong> " + task3Results.length + "<br>" +
    "<strong>Passed Students:</strong> " + task3Passed + "<br>" +
    "<strong>Failed Students:</strong> " + (task3Results.length - task3Passed);


/* =====================================================
   TASK 4 - UNIVERSITY STUDENT PERFORMANCE DASHBOARD
===================================================== */

// 1. ES6 class
class Student {

    constructor(
        name,
        rollNumber,
        department,
        semester,
        cgpa,
        marks
    ) {

        this.name = name;
        this.rollNumber = rollNumber;
        this.department = department;
        this.semester = semester;
        this.cgpa = cgpa;
        this.marks = marks;

    }

}

// At least six objects created from the class
const task4Students = [

    new Student("Ali",    "BSCS-001", "Computer Science",     6, 3.45, 82),
    new Student("Ahmed",  "BSCS-002", "Computer Science",     5, 2.80, 67),
    new Student("Sara",   "BSCS-003", "Software Engineering", 6, 3.75, 91),
    new Student("Ayesha", "BSCS-004", "Data Science",         4, 1.85, 48),
    new Student("Hassan", "BSCS-005", "Cyber Security",       5, 2.25, 74),
    new Student("Fatima", "BSCS-006", "Computer Science",     3, 3.10, 58)

];


// 2. Grade calculation function
function task4CalculateGrade(marks) {

    if (marks >= 80) {
        return "A";
    }
    else if (marks >= 70) {
        return "B";
    }
    else if (marks >= 60) {
        return "C";
    }
    else if (marks >= 50) {
        return "D";
    }
    else {
        return "F";
    }

}

// 3. Academic status: arrow function + ternary
const task4GetStatus =
    cgpa =>
        cgpa >= 2.0
            ? "Eligible"
            : "Academic Warning";


// 4. for...in: display the properties of one student object
let task4InfoResult =
    "<strong>Object information (for...in) - first student:</strong><br>";

for (let key in task4Students[0]) {

    task4InfoResult +=
        key + ": " + task4Students[0][key] + "<br>";

}

document.getElementById("task4Info").innerHTML = task4InfoResult;


// 6. Array methods: manage departments with push() and includes()
const task4Departments = [];

task4Students.forEach(
    student => {

        if (!task4Departments.includes(student.department)) {
            task4Departments.push(student.department);
        }

    }
);


// 5. forEach(): display every student as a card
let task4Output = "";

task4Students.forEach(
    student => {

        // Object destructuring
        const {
            name,
            rollNumber,
            department,
            semester,
            cgpa,
            marks
        } = student;

        const grade = task4CalculateGrade(marks);
        const status = task4GetStatus(cgpa);

        task4Output +=
            "<div class='col-md-6'>" +
                "<div class='card h-100 shadow-sm'>" +
                    "<div class='card-body'>" +
                        "<h5 class='card-title'>Student: " + name + "</h5>" +
                        "<p class='card-text mb-0'>" +
                            "<strong>Roll No:</strong> " + rollNumber + "<br>" +
                            "<strong>Department:</strong> " + department + "<br>" +
                            "<strong>Semester:</strong> " + semester + "<br>" +
                            "<strong>CGPA:</strong> " + cgpa.toFixed(2) + "<br>" +
                            "<strong>Marks:</strong> " + marks + "<br>" +
                            "<strong>Grade:</strong> " + grade + "<br>" +
                            "<strong>Status:</strong> " +
                            "<span class='badge " +
                                (status === "Eligible" ? "bg-success" : "bg-warning text-dark") +
                            "'>" + status + "</span>" +
                        "</p>" +
                    "</div>" +
                "</div>" +
            "</div>";

    }
);

document.getElementById("task4Output").innerHTML = task4Output;


// Final dashboard statistics
// for loop: count passed students (marks >= 50)
let task4Passed = 0;

for (let i = 0; i < task4Students.length; i++) {

    if (task4Students[i].marks >= 50) {
        task4Passed++;
    }

}

// for...of: calculate the average marks
let task4MarksSum = 0;

for (let student of task4Students) {

    task4MarksSum += student.marks;

}

document.getElementById("task4Stats").innerHTML =
    "<strong>Final Dashboard Statistics</strong><br>" +
    "Total Students: " + task4Students.length + "<br>" +
    "Passed Students: " + task4Passed + "<br>" +
    "Failed Students: " + (task4Students.length - task4Passed) + "<br>" +
    "Average Marks: " + (task4MarksSum / task4Students.length).toFixed(2) + "<br>" +
    "Departments: " + task4Departments.join(", ");
