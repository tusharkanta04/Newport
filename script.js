// ==========================
//  Apply Dark Mode Immediately
// ==========================
(function () {
  const userTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (userTheme === "dark" || (!userTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
  }
})();

// 🌙 Theme Toggle Setup
const toggleThemeBtn = document.getElementById("toggle-theme");
const introText = document.getElementById("intro-text");

function updateIntroText(isDark) {
  if (!introText) return;
  introText.textContent = isDark
    ? "My downtime usually includes cricket matches, writing blogs, and getting lost in great films."
    : "Who loves crafting clean, responsive, and user-friendly web experiences.";
}

function updateTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  toggleThemeBtn.innerHTML = `<i data-lucide="${isDark ? "sun" : "moon"}"></i>`;
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateIntroText(isDark);
  lucide.createIcons();
}

// Set initial theme on load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
}

const currentDark = document.documentElement.classList.contains("dark");
if (toggleThemeBtn) {
  toggleThemeBtn.innerHTML = `<i data-lucide="${currentDark ? "sun" : "moon"}"></i>`;
  toggleThemeBtn.addEventListener("click", updateTheme);
}
updateIntroText(currentDark);
lucide.createIcons();

// ==========================
//  Page-Specific Logic
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  // ----- Blog Page -----
  const blogList = document.getElementById("blog-list");
  if (typeof blogPosts !== "undefined" && blogList) {
    blogList.innerHTML = ""; // Clear existing

    blogPosts.forEach(post => {
      const blogEl = document.createElement("section");
      blogEl.className = "blog-card";
      blogEl.innerHTML = `
        <h3 class="text-xl font-semibold">${post.title}</h3>
        <small class="text-sm text-muted">${post.date} • ${post.tag}</small>
        <div class="blog-content mt-2">${post.content}</div>
      `;
      blogList.appendChild(blogEl);
    });

    if (window.lucide) lucide.createIcons();
  }
});
