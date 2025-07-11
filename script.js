// 🌙 Theme Toggle Setup
const toggleThemeBtn = document.getElementById("toggle-theme");
const introText = document.getElementById("intro-text");

function updateIntroText(isDark) {
  if (!introText) return;
  introText.textContent = isDark
    ? "My downtime usually includes cricket matches, writing blogs, and getting lost in great films."
    : "Who loves crafting clean, responsive, and user-friendly web experiences."
}

function updateTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  toggleThemeBtn.innerHTML = `<i data-lucide="${isDark ? "sun" : "moon"}"></i>`;
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateIntroText(isDark);
  lucide.createIcons();
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
}

const currentDark = document.documentElement.classList.contains("dark");
toggleThemeBtn.innerHTML = `<i data-lucide="${currentDark ? "sun" : "moon"}"></i>`;
updateIntroText(currentDark);
lucide.createIcons();
toggleThemeBtn.addEventListener("click", updateTheme);

// ==========================
//  Blog Renderer + Sorter
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const blogList = document.getElementById("blog-list");
  const sortSelect = document.getElementById("sort-select");

  function parseDate(dateStr) {
    return new Date(Date.parse(dateStr + " 1"));
  }

  function renderPosts(posts) {
    blogList.querySelectorAll(".blog-card").forEach(el => el.remove());

    posts.forEach(post => {
      const postEl = document.createElement("section");
      postEl.className = "blog-card";

      postEl.innerHTML = `
        <div class="blog-card-header">
          <h3>${post.title}</h3>
          <div class="meta">
            <span class="date">${post.date}</span>
            <span class="tag">#${post.tag}</span>
          </div>
        </div>
        <div class="blog-content">${post.content}</div>
        <div class="like-box" data-post="${post.title}">
          <button class="like-btn">❤️</button>
          <span class="like-count">0</span>
        </div>
      `;

      blogList.appendChild(postEl);
    });

    if (window.lucide) lucide.createIcons();

    // Attach Like Button Events with Firebase and Effects
    document.querySelectorAll(".like-box").forEach(box => {
      const postId = box.getAttribute("data-post");
      const likeBtn = box.querySelector(".like-btn");
      const likeCount = box.querySelector(".like-count");
      const postRef = firebase.firestore().collection("likes").doc(postId);
      const likedKey = `liked_${postId}`;

      // Real-time updates
      postRef.onSnapshot(doc => {
        likeCount.textContent = doc.exists ? doc.data().count || 0 : 0;
      });

      likeBtn.addEventListener("click", () => {
        const alreadyLiked = localStorage.getItem(likedKey);

        postRef.get().then(doc => {
          let count = doc.exists ? doc.data().count || 0 : 0;

          if (alreadyLiked) {
            // Unlike
            count = Math.max(0, count - 1);
            postRef.set({ count });
            localStorage.removeItem(likedKey);
            likeBtn.classList.remove("liked");
          } else {
            // Like
            count = count + 1;
            postRef.set({ count });
            localStorage.setItem(likedKey, "true");
            likeBtn.classList.add("liked");
            showSparkle(likeBtn);
          }
        });
      });
    });
  }

  function sortPosts(order) {
    const sorted = [...blogPosts].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return order === "newest" ? dateB - dateA : dateA - dateB;
    });
    renderPosts(sorted);
  }

  if (blogList && typeof blogPosts !== "undefined") {
    sortPosts("newest");

    if (sortSelect) {
      sortSelect.addEventListener("change", () => {
        sortPosts(sortSelect.value);
      });
    }
  }
});