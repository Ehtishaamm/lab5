/* =====================================================
   studentUtils.js
   Reusable helpers for the student portal (Lab 05, Task 2)
   Named exports: DEPARTMENT_NAME, calculateTotal,
                  calculateAverage, getGrade, getStatus
   Default export: formatStudentResult
===================================================== */

/** Department shown at the top of the portal. */
export const DEPARTMENT_NAME = "Computer Science";

/** Minimum total marks required to pass. */
const PASSING_MARKS = 50;

/**
 * Grade scale, ordered from the highest boundary to the lowest.
 * The first row whose `min` is reached decides the grade.
 */
const GRADE_SCALE = [
  { min: 80, grade: "A" },
  { min: 70, grade: "B" },
  { min: 60, grade: "C" },
  { min: 50, grade: "D" },
];

/** Adds any number of marks together (rest parameter). */
export function calculateTotal(...marks) {
  return marks.reduce((sum, mark) => sum + mark, 0);
}

/** Average of any number of marks (arrow function, rest parameter). */
export const calculateAverage = (...marks) =>
  marks.length === 0 ? 0 : calculateTotal(...marks) / marks.length;

/** Converts marks into a letter grade: A, B, C, D or F. */
export function getGrade(marks) {
  const match = GRADE_SCALE.find(({ min }) => marks >= min);
  return match ? match.grade : "F";
}

/** Pass / Fail decided with the ternary operator (arrow function). */
export const getStatus = (marks) =>
  marks >= PASSING_MARKS ? "Pass" : "Fail";

/** Default export: one-line, human readable result summary. */
export default function formatStudentResult(name, rollNumber, total) {
  return `${name} - ${rollNumber} - Total: ${total}`;
}
