/* =====================================================
   domHelpers.js
   Small DOM utilities shared by every Lab 05 task.
   Elements are built with textContent (never innerHTML),
   so anything typed by the user is displayed safely.
===================================================== */

/** Creates an element: createElement("div", { className, text, attrs }, ...children) */
export function createElement(tag, { className = "", text = "", attrs = {} } = {}, ...children) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
  element.append(...children);
  return element;
}

/** Removes everything inside a container. */
export const clearElement = (container) => container.replaceChildren();

/** Bootstrap badge, green for good values and red for bad ones. */
export const createBadge = (text, isPositive) =>
  createElement("span", {
    className: `badge ${isPositive ? "text-bg-success" : "text-bg-danger"}`,
    text,
  });

/**
 * Bootstrap card made of titled sections of "label: value" rows.
 * A row value may be a string or a DOM node (for example a badge).
 *
 * card({ title, subtitle, sections: [{ heading, rows: [[label, value], ...] }] })
 */
export function createCard({ title, subtitle = "", sections = [], accent = "primary" }) {
  const header = createElement("div", { className: `card-header text-bg-${accent} fw-semibold`, text: title });
  if (subtitle) header.append(createElement("div", { className: "small fw-normal opacity-75", text: subtitle }));

  const body = sections.map(({ heading, rows }) => {
    const group = createElement("ul", { className: "list-group list-group-flush" });
    if (heading) {
      group.append(createElement("li", {
        className: "list-group-item bg-body-tertiary small text-uppercase fw-semibold text-secondary",
        text: heading,
      }));
    }
    rows.forEach(([label, value]) => {
      const valueNode = value instanceof Node ? value : document.createTextNode(value);
      group.append(createElement("li", { className: "list-group-item result-row" },
        createElement("span", { className: "result-label", text: label }),
        createElement("span", { className: "result-value" }, valueNode)));
    });
    return group;
  });

  return createElement("div", { className: "card shadow-sm lab05-card" }, header, ...body);
}

/**
 * A "terminal" style log panel. Every line is appended the moment it is
 * logged, which makes asynchronous ordering visible on the page.
 * Types: info | step | success | error
 */
export function createLogger(container) {
  return {
    clear: () => clearElement(container),
    log(message, type = "info") {
      container.append(createElement("div", { className: `log-line log-${type}`, text: message }));
      container.scrollTop = container.scrollHeight;
    },
  };
}

/** Disables / enables a group of buttons while async work is running. */
export const setBusy = (buttons, isBusy) =>
  buttons.forEach((button) => { button.disabled = isBusy; });
