/* =====================================================
   lab05.js  -  Lab 05 (loaded with type="module")
   ES6 Features, Modules, Callbacks, Promises, Async/Await

   Task 1  University Course Enrollment Manager
   Task 2  Student Utility Module
   Task 3  Online Examination Workflow
   Task 4  University Result Portal
===================================================== */

// Task 2: default import + named imports, one of them with an alias (as)
import formatStudentResult, {
  DEPARTMENT_NAME,
  calculateTotal,
  calculateAverage as computeAverage,
  getGrade,
  getStatus,
} from "./studentUtils.js";

import { verifyStudent, loadExamPaper, submitAnswers, generateResult } from "./examWorkflow.js";
import { findStudent, calculateResult, studentDatabase } from "./resultService.js";
import { createElement, clearElement, createBadge, createCard, createLogger, setBusy } from "./domHelpers.js";

const byId = (id) => document.getElementById(id);

/* =====================================================
   TASK 1 - University Course Enrollment Manager
   Spread operator, rest parameters, default parameters,
   template literals
===================================================== */

/** Rest parameter: collects every course after the name into an array. */
function enrollStudent(name, ...courses) {
  return `${name} enrolled in ${courses.length} course(s): ${courses.join(", ")}`;
}

/** Arrow function + rest parameter. */
const calculateAverageCGPA = (...cgpas) =>
  cgpas.reduce((sum, cgpa) => sum + cgpa, 0) / cgpas.length;

/** Default parameter: department falls back to "Computer Science". */
function getStudentInfo(name, department = "Computer Science") {
  return `${name} - Department: ${department}`;
}

function runEnrollmentManager() {
  const coreCourses = ["Web Development", "Database Systems", "Data Structures"];
  const electiveCourses = ["Artificial Intelligence", "Computer Networks", "Cloud Computing"];
  const student = { name: "Ali", rollNumber: "BSCS-001", department: "Computer Science", semester: 6 };
  const cgpaHistory = [2.85, 3.1, 3.25, 3.0, 3.75, 3.45];

  // 1. Merge two arrays with spread
  const allCourses = [...coreCourses, ...electiveCourses];

  // 2. Copy with spread, then change the COPY only
  const extendedCourses = [...allCourses, "Software Engineering"];

  // 3. New student object: spread the old one, override semester, add cgpa
  const updatedStudent = { ...student, semester: student.semester + 1, cgpa: cgpaHistory.at(-1) };

  // 4. Rest parameter: two core courses (spread from slice) + one elective
  const enrollmentMessage = enrollStudent(student.name, ...coreCourses.slice(0, 2), electiveCourses[0]);

  // 5 & 6. Average and highest CGPA
  const averageCGPA = calculateAverageCGPA(...cgpaHistory);
  const highestCGPA = Math.max(...cgpaHistory);

  const card = createCard({
    title: "Course Enrollment Manager",
    subtitle: `${student.name} (${student.rollNumber})`,
    sections: [
      {
        heading: "Courses (spread operator)",
        rows: [
          ["Core Courses", coreCourses.join(", ")],
          ["Elective Courses", electiveCourses.join(", ")],
          [`All Courses (${allCourses.length})`, allCourses.join(", ")],
          [`Copy after adding a course (${extendedCourses.length})`, extendedCourses.join(", ")],
          ["Original unchanged", `Original still has ${allCourses.length} courses`],
        ],
      },
      {
        heading: "Student object (spread)",
        rows: [
          ["Original Student", `${student.name}, Semester ${student.semester}`],
          ["Updated Student", `${updatedStudent.name}, Semester ${updatedStudent.semester}, CGPA ${updatedStudent.cgpa.toFixed(2)}`],
        ],
      },
      {
        heading: "Rest parameters",
        rows: [
          ["Enrollment", enrollmentMessage],
          ["CGPA values", cgpaHistory.map((cgpa) => cgpa.toFixed(2)).join(", ")],
          ["Average CGPA", averageCGPA.toFixed(2)],
          ["Highest CGPA", highestCGPA.toFixed(2)],
        ],
      },
      {
        heading: "Default parameter",
        rows: [
          ["Department (default)", getStudentInfo(student.name)],
          ["Department (given)", getStudentInfo("Sara", "Software Engineering")],
        ],
      },
    ],
  });

  byId("task1Output").replaceChildren(card);
}

/* =====================================================
   TASK 2 - Student Utility Module
   Named / default / aliased imports, forEach, destructuring
===================================================== */

function runUtilityModule() {
  const students = [
    { name: "Sara",   rollNumber: "BSCS-023", assignment: 17, midterm: 26, finalExam: 39 },
    { name: "Ahmed",  rollNumber: "BSCS-002", assignment: 14, midterm: 21, finalExam: 32 },
    { name: "Ayesha", rollNumber: "BSCS-014", assignment: 10, midterm: 14, finalExam: 24 },
    { name: "Ali",    rollNumber: "BSCS-001", assignment: 18, midterm: 25, finalExam: 39 },
  ];

  byId("task2Department").textContent = `Department: ${DEPARTMENT_NAME}`;
  const grid = byId("task2Output");
  clearElement(grid);

  students.forEach(({ name, rollNumber, assignment, midterm, finalExam }) => {
    const total = calculateTotal(assignment, midterm, finalExam);
    const average = computeAverage(assignment, midterm, finalExam); // aliased import
    const grade = getGrade(total);
    const status = getStatus(total);
    const hasPassed = status === "Pass";

    const card = createCard({
      title: formatStudentResult(name, rollNumber, total), // default import
      accent: hasPassed ? "success" : "danger",
      sections: [{
        rows: [
          ["Average", average.toFixed(2)],
          ["Grade", createBadge(grade, hasPassed)],
          ["Status", createBadge(status, hasPassed)],
        ],
      }],
    });
    grid.append(createElement("div", { className: "col-md-6 col-xl-3" }, card));
  });
}

/* =====================================================
   TASK 3 - Online Examination Workflow
   Callbacks, nested callbacks, error-first callbacks
===================================================== */

function setUpExamWorkflow() {
  const logger = createLogger(byId("task3Log"));
  const validButton = byId("examValidBtn");
  const emptyButton = byId("examEmptyBtn");
  const buttons = [validButton, emptyButton];

  function runExamWorkflow(rollNumber) {
    const startTime = performance.now();
    const secondsSinceStart = () => {
      const seconds = Number(((performance.now() - startTime) / 1000).toFixed(1));
      return `${seconds} ${seconds === 1 ? "second" : "seconds"}`;
    };

    logger.clear();
    setBusy(buttons, true);

    /*
     * CALLBACK HELL: every step can only start inside the callback of the
     * previous one, so the code keeps drifting to the right (the "pyramid of
     * doom"). The more steps we add, the harder it is to read, to handle
     * errors in and to change - which is why this style is called callback hell.
     * Promises and async/await (Task 4) solve this problem.
     */
    verifyStudent(rollNumber, (error, verifiedMessage) => {
      if (error) {
        // Error-first callback: stop here, the remaining steps never run.
        logger.log(`Error: ${error}`, "error");
        setBusy(buttons, false);
        return;
      }
      logger.log(`Step 1: ${verifiedMessage} (after ${secondsSinceStart()})`, "step");

      loadExamPaper((paperMessage) => {
        logger.log(`Step 2: ${paperMessage} (after ${secondsSinceStart()})`, "step");

        submitAnswers((submitMessage) => {
          logger.log(`Step 3: ${submitMessage} (after ${secondsSinceStart()})`, "step");

          generateResult((resultMessage) => {
            logger.log(`Step 4: ${resultMessage} (after ${secondsSinceStart()})`, "step");
            logger.log("Exam completed successfully!", "success");
            setBusy(buttons, false);
          });
        });
      });
    });

    // This line sits AFTER verifyStudent() in the code, yet it is printed
    // first: setTimeout() does not block, so the workflow runs asynchronously.
    logger.log("Exam workflow started...", "info");
  }

  validButton.addEventListener("click", () => runExamWorkflow("BSCS-001"));
  emptyButton.addEventListener("click", () => runExamWorkflow(""));
}

/* =====================================================
   TASK 4 - University Result Portal
   Promises, async/await, Promise.all, DOM manipulation
===================================================== */

/** Full detail card for one student (Parts A, B and C). */
function createStudentCard(student, result) {
  const { name, rollNumber, department, semester } = student;
  const { total, average, grade, status } = result;
  const hasPassed = status === "Pass";

  return createCard({
    title: `Student: ${name}`,
    accent: hasPassed ? "success" : "danger",
    sections: [{
      rows: [
        ["Roll No", rollNumber],
        ["Department", department],
        ["Semester", `${semester}`],
        ["Total", `${total}`],
        ["Average", average.toFixed(2)],
        ["Grade", createBadge(grade, hasPassed)],
        ["Status", createBadge(status, hasPassed)],
      ],
    }],
  });
}

/** Compact one-line card used by "Load All Results". */
function createSummaryCard({ name, rollNumber }, { grade, status }) {
  const hasPassed = status === "Pass";
  return createElement("div", {
    className: `summary-card ${hasPassed ? "summary-pass" : "summary-fail"}`,
  },
    createElement("strong", { text: name }),
    createElement("span", { className: "text-secondary", text: rollNumber }),
    createElement("span", { text: `Grade: ${grade}` }),
    createBadge(status, hasPassed));
}

const createMessage = (text, className) => createElement("div", { className: `portal-message ${className}`, text });

/* ---------- Part A: promise chain  ---------- */
function showResultWithPromises(rollNumber, output, buttons) {
  setBusy(buttons, true);
  output.replaceChildren(createMessage("Searching...", "message-info"));

  findStudent(rollNumber)
    // Promise.all keeps the student and its result together in a flat chain.
    .then((student) => Promise.all([student, calculateResult(student)]))
    .then(([student, result]) => {
      output.append(createStudentCard(student, result));
    })
    .catch((error) => {
      output.append(createMessage(`Error: ${error}`, "message-error"));
    })
    .finally(() => {
      output.append(createMessage("Search completed", "message-info"));
      setBusy(buttons, false);
    });
}

/* ---------- Part B: async / await  ---------- */
async function showResult(rollNumber, output) {
  output.replaceChildren(createMessage("Searching...", "message-info"));

  try {
    const student = await findStudent(rollNumber);
    const result = await calculateResult(student);
    output.append(createStudentCard(student, result));
  } catch (error) {
    output.append(createMessage(`Error: ${error}`, "message-error"));
  } finally {
    output.append(createMessage("Search completed", "message-info"));
  }
}

/* ---------- Part D: load every result at the same time  ---------- */
async function loadAllResults(output, statsOutput) {
  output.replaceChildren(createMessage("Loading all results...", "message-info"));
  clearElement(statsOutput);
  const startTime = performance.now();

  try {
    // map() starts one calculateResult() per student; Promise.all waits for all
    // of them together, so five 1-second tasks take about 1 second, not 5.
    const results = await Promise.all(studentDatabase.map((student) => calculateResult(student)));
    const seconds = ((performance.now() - startTime) / 1000).toFixed(1);

    clearElement(output);
    studentDatabase.forEach((student, index) => output.append(createSummaryCard(student, results[index])));

    const passed = results.filter(({ status }) => status === "Pass").length;
    const stats = [
      ["Total Students", results.length, "stat-total"],
      ["Passed Students", passed, "stat-pass"],
      ["Failed Students", results.length - passed, "stat-fail"],
    ];
    statsOutput.append(
      createElement("h4", { className: "stats-title", text: "Final Statistics" }),
      createElement("div", { className: "stats-grid" },
        ...stats.map(([label, value, className]) =>
          createElement("div", { className: `stat-tile ${className}` },
            createElement("div", { className: "stat-value", text: `${value}` }),
            createElement("div", { className: "stat-label", text: label })))),
      createElement("p", { className: "stats-note", text: `All ${results.length} results were calculated in parallel in ${seconds} seconds.` }));
  } catch (error) {
    output.replaceChildren(createMessage(`Error: ${error}`, "message-error"));
  }
}

function setUpResultPortal() {
  // Part A buttons
  const chainOutput = byId("task4ChainOutput");
  const chainButtons = [byId("chainFoundBtn"), byId("chainMissingBtn")];
  byId("chainFoundBtn").addEventListener("click", () => showResultWithPromises("BSCS-001", chainOutput, chainButtons));
  byId("chainMissingBtn").addEventListener("click", () => showResultWithPromises("BSCS-999", chainOutput, chainButtons));

  // Part C: search form calls the async showResult()
  const form = byId("searchForm");
  const input = byId("rollNumberInput");
  const searchButton = byId("searchBtn");
  const searchOutput = byId("task4SearchOutput");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const rollNumber = input.value.trim();
    if (!rollNumber) {
      searchOutput.replaceChildren(createMessage("Error: Please enter a roll number", "message-error"));
      input.focus();
      return;
    }
    setBusy([searchButton], true);
    await showResult(rollNumber, searchOutput);
    setBusy([searchButton], false);
  });

  // Part D: load all results
  const loadAllButton = byId("loadAllBtn");
  loadAllButton.addEventListener("click", async () => {
    setBusy([loadAllButton], true);
    await loadAllResults(byId("task4AllOutput"), byId("task4Stats"));
    setBusy([loadAllButton], false);
  });
}

/* =====================================================
   START
===================================================== */
runEnrollmentManager();
runUtilityModule();
setUpExamWorkflow();
setUpResultPortal();
