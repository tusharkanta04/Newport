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
  // Add more blog posts here//
  {
  title: "Will AI Replace Programmers in the Next 10 Years?",
  date: "July 2025",
  tag: "AI & Coding",
  content: `
    <p>Artificial Intelligence is evolving at an astonishing pace. From writing code to generating entire applications, tools like ChatGPT, GitHub Copilot, and others are transforming software development. But the big question is: <strong>will AI completely replace programmers in the next 10 years—or sooner?</strong></p>

    <h2 How Far Has AI Come in Coding?</h2>
    <p>AI is already reshaping programming through:</p>
    <ul>
      <li>GitHub Copilot auto-completing code and generating functions</li>
      <li>AI models like ChatGPT writing full-stack apps</li>
      <li>No-code platforms like Bubble enabling app creation without coding</li>
    </ul>

    <h2 What AI <em>Can</em> Do</h2>
    <ul>
      <li Generate repetitive and boilerplate code</li>
      <li Debug and optimize existing code</li>
      <li Understand large codebases using context</li>
      <li Act as a coding assistant (pair programmer)</li>
    </ul>

    <h2 What AI <em>Can’t</em> Do (Yet)</h2>
    <ul>
      <li Deep problem-solving and creative thinking</li>
      <li System architecture and product design</li>
      <li Human collaboration and team dynamics</li>
      <li Take accountability for outcomes</li>
    </ul>

    <h2> Will AI Replace Programmers in 10 Years?</h2>
    <p><strong>Short answer:</strong> No. But the role of programmers will evolve significantly.</p>
    <ul>
      <li> Entry-level jobs may decline as AI handles basic tasks</li>
      <li> AI-assisted developers will be in high demand</li>
      <li> Focus will shift toward design, ethics, and product thinking</li>
      <li> Coding will become more accessible for non-tech users</li>
    </ul>

    <h2> How Can You Future-Proof Yourself?</h2>
    <ul>
      <li> Learn how AI works (LLMs, prompt engineering, Copilot, etc.)</li>
      <li> Master system design and architectural skills</li>
      <li> Sharpen real-world logic and problem-solving</li>
      <li> Build communication, leadership, and teamwork skills</li>
      <li> Keep coding and build your unique developer edge</li>
    </ul>

    <h2> Final Thoughts</h2>
    <p>
      AI won’t replace programmers—<strong>but programmers who use AI will replace those who don’t</strong>. The next decade will redefine what it means to be a developer, making the profession more strategic and creative than ever.
    </p>

    <p> Written by Tusharkanta Behera — Software Developer & AI Explorer</p>
  `,
  },
// Add more blog posts here
];
