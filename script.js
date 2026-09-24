// Theme Toggle Logic (Dark / Light)
(function () {
  const currentTheme = localStorage.getItem("theme") || 
    (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  document.documentElement.setAttribute("data-theme", currentTheme);

  window.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      updateBtnIcon(toggleBtn, currentTheme);
      toggleBtn.addEventListener("click", () => {
        const activeTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = activeTheme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateBtnIcon(toggleBtn, newTheme);
      });
    }
  });

  function updateBtnIcon(btn, theme) {
    btn.innerHTML = theme === "light" 
      ? '<span>🌙</span><span>Dark Mode</span>' 
      : '<span>☀️</span><span>Light Mode</span>';
  }
})();
