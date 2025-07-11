// Apply dark mode immediately on page load before rendering
(function () {
  const userTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (userTheme === "dark" || (!userTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
  }
})();
