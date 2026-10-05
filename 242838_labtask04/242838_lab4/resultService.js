/* =====================================================
   resultService.js
   Simulated asynchronous "database" for the Result Portal
   (Lab 05, Task 4). Both functions return Promises.
===================================================== */

import { calculateTotal, calculateAverage, getGrade, getStatus } from "./studentUtils.js";

/** The simulated database. Marks add up to a total out of 100. */
export const studentDatabase = [
  { name: "Ali",    rollNumber: "BSCS-001", department: "Computer Science", semester: 6, assignment: 18, midterm: 25, finalExam: 39 },
  { name: "Ahmed",  rollNumber: "BSCS-002", department: "Computer Science", semester: 6, assignment: 14, midterm: 21, finalExam: 32 },
  { name: "Sara",   rollNumber: "BSCS-023", department: "Computer Science", semester: 5, assignment: 17, midterm: 26, finalExam: 39 },
  { name: "Ayesha", rollNumber: "BSCS-014", department: "Computer Science", semester: 4, assignment: 10, midterm: 14, finalExam: 24 },
  { name: "Hassan", rollNumber: "BSCS-031", department: "Computer Science", semester: 7, assignment: 16, midterm: 22, finalExam: 34 },
];

/**
 * Looks a student up by roll number (case-insensitive).
 * Resolves with the student after 1 second, or rejects with "Student not found".
 */
export function findStudent(rollNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const wanted = String(rollNumber).trim().toUpperCase();
      const student = studentDatabase.find((entry) => entry.rollNumber.toUpperCase() === wanted);
      if (student) {
        resolve(student);
      } else {
        reject("Student not found");
      }
    }, 1000);
  });
}

/**
 * Calculates total, average, grade and status after 1 second.
 * Marks are collected into an array and spread into the helpers.
 */
export function calculateResult(student) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { assignment, midterm, finalExam } = student; // object destructuring
      const marks = [assignment, midterm, finalExam];

      if (marks.some((mark) => typeof mark !== "number" || Number.isNaN(mark))) {
        reject("Marks are missing or invalid");
        return;
      }

      const total = calculateTotal(...marks); // spread
      resolve({
        total,
        average: calculateAverage(...marks),
        grade: getGrade(total),
        status: getStatus(total),
      });
    }, 1000);
  });
}
