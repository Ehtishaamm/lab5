/* =====================================================
   examWorkflow.js
   Callback based exam steps (Lab 05, Task 3).
   Every step simulates work with setTimeout() and calls
   its callback when it has finished.
===================================================== */

/**
 * Step 1 - ERROR-FIRST callback: callback(error, data).
 * error is null on success, otherwise it holds the message.
 */
export function verifyStudent(rollNumber, callback) {
  setTimeout(() => {
    if (!rollNumber || rollNumber.trim() === "") {
      callback("Roll number is required", null);
      return;
    }
    callback(null, `Student ${rollNumber} verified`);
  }, 1000);
}

/** Step 2 - finishes after 1.5 seconds. */
export function loadExamPaper(callback) {
  setTimeout(() => callback("Exam paper loaded"), 1500);
}

/** Step 3 - finishes after 2 seconds. */
export function submitAnswers(callback) {
  setTimeout(() => callback("Answers submitted"), 2000);
}

/** Step 4 - finishes after 1 second. */
export function generateResult(callback) {
  setTimeout(() => callback("Result generated: 82 marks"), 1000);
}
