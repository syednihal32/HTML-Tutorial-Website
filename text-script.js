document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("darkModeToggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    // Check for saved theme preference
    if (localStorage.getItem("theme") === "light") {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        toggleSwitch.checked = false;
        themeIcon.textContent = "☀️"; // Sun for Light Mode
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        toggleSwitch.checked = true;
        themeIcon.textContent = "🌙"; // Moon for Dark Mode
    }

    // Toggle theme
    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            themeIcon.textContent = "🌙"; // Set to Moon icon
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            themeIcon.textContent = "☀️"; // Set to Sun icon
            localStorage.setItem("theme", "light");
        }
    });
});
