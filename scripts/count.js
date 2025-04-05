document.addEventListener("DOMContentLoaded", () => {
    const count = localStorage.getItem("reviewCount") || 0;
    const countDisplay = document.getElementById("rev-count");
    if (countDisplay) {
        countDisplay.textContent = count;
    }
});