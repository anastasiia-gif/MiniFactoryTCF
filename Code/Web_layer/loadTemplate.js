// loadTemplate.js
window.addEventListener("DOMContentLoaded", () => {
  fetch("template.html")
    .then(res => res.text())
    .then(data => {
      const container = document.createElement("div");
      container.innerHTML = data;
      document.body.insertBefore(container, document.body.firstChild);
    });
});
