document.querySelectorAll(".table-toggle").forEach((button) => {
  const targetId = button.getAttribute("aria-controls");
  const target = document.getElementById(targetId);
  const label = button.querySelector("span");

  if (!target || !label) {
    return;
  }

  button.addEventListener("click", () => {
    const willExpand = button.getAttribute("aria-expanded") !== "true";

    button.setAttribute("aria-expanded", String(willExpand));
    target.hidden = !willExpand;
    label.textContent = willExpand ? "Hide full table" : "Show full table";
  });
});
