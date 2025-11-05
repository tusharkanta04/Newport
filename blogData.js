// blogData.js

const blogPosts = [
  {
    title: " How I Built This Site",
    date: "July 2024",
    tag: "WebDev",
    content: `
      <p>Creating this website was a hands-on way for me to apply what I’ve learned as a frontend developer. I wanted something minimal, fast, and personal — yet powerful enough to grow with my ideas. Here's how I built it:</p>

      <h3> Planning & Design</h3>
      <p>I started by sketching a simple layout — a clean homepage, a blog section to share my thoughts, and a project page to showcase my work. I focused on simplicity, readability, and responsiveness.</p>

      <h3> Tools & Technologies Used</h3>
      <ul>
        <li><strong>HTML & CSS:</strong> For structure and styling. I used custom CSS to control layout, fonts, spacing, and responsive design without relying on heavy frameworks.</li>
        <li><strong>JavaScript:</strong> For interactivity like dark mode, blog rendering, and theme persistence using <code>localStorage</code>.</li>
        <li><strong>Lucide Icons:</strong> For clean, modern icons (moon/sun toggle, like buttons, etc.).</li>
        <li><strong>Firebase Firestore:</strong> To power the like button on blog posts with real-time updates.</li>
        <li><strong>Modular JS Files:</strong> I separated logic into 3 js Files to keep the code clean and scalable.</li>
      </ul>

      <h3> Dark Mode</h3>
      <p>Dark mode support was built using a simple toggle button. The user's preference is saved to localStorage, so it stays even when navigating pages.</p>

      <h3> Blog Posts</h3>
      <p>I didn’t want to manually create multiple HTML pages for blogs. So, I built a dynamic blog renderer that fetches blog data from a JavaScript array and injects it into the DOM. This keeps content organized and easy to update.</p>

      <h3> Like Button with Firebase</h3>
      <p>Each blog post includes a like button connected to Firebase. It supports:</p>
      <ul>
        <li>Real-time like updates</li>
        <li>Preventing repeated likes using localStorage</li>
        <li>Animated heart when clicked</li>
      </ul>

      <h3> Mobile-Friendly</h3>
      <p>The site is fully responsive and works beautifully on all screen sizes. I tested it across devices to make sure it looks and feels good everywhere.</p>
      <p>Overall, this project was a great way to apply my skills and create something I’m proud of. I hope it inspires others to build their own personal sites!</p>
      <p>Thanks for reading!</p>
    `,
  },
 

