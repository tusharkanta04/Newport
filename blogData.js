const blogPosts = [
 {
  title: "How I Built My Portfolio Website",
  date: "March 2024",
  tag: "WebDev",
  content: `
    <p>Building my personal portfolio website was an exciting journey that helped me improve my frontend development skills while creating a space to showcase my projects and progress as a developer.</p>

    <p>I started by planning the structure of the website. I wanted it to be simple, responsive, and professional, with three main sections: Home, Projects, and Blog. I used <strong>HTML</strong> to build the layout of each page and created separate files for better organization.</p>

    <p>For styling, I used <strong>CSS</strong> with custom variables to support both light and dark mode themes. I designed a clean navigation bar, responsive layouts, blog cards, and project sections. Media queries were added to make sure the website looks good on mobile devices as well.</p>

    <p>To make the website interactive, I used <strong>JavaScript</strong>. One of the key features I added was the dark mode toggle, which stores the user's theme preference using <strong>localStorage</strong>. This means the selected theme remains the same even after refreshing the page.</p>

    <p>Another interesting part was building the blog section dynamically. Instead of writing each blog post directly in HTML, I stored blog post data inside a JavaScript array and rendered each blog card dynamically using DOM manipulation. This made the blog section scalable and easier to manage.</p>

    <p>I also integrated <strong>Lucide Icons</strong> for theme toggle icons and used a profile image to personalize the homepage. To keep the code clean, I separated the logic into different files such as <strong>style.css</strong>, <strong>script.js</strong>, <strong>theme.js</strong>, and <strong>blogData.js</strong>.</p>

    <p>One challenge I faced was making sure all JavaScript files loaded in the correct order, especially for rendering blog posts. I learned that <strong>blogData.js</strong> must load before <strong>script.js</strong>, otherwise the blog content would not display.</p>

    <p>This project taught me a lot about structuring frontend projects, handling dynamic content, and improving user experience with features like dark mode and responsive design. More importantly, it gave me a platform to present my work and document my journey as a developer.</p>

    <p>In the future, I plan to improve this portfolio by adding animations, better project showcases, and backend integration for managing blog posts more efficiently.</p>
  `}
   // Add more blog posts here 
];

   
