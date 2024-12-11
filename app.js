console.log("Testing")
const toggles = document.querySelectorAll(".display-toggle");
toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
    });
});
