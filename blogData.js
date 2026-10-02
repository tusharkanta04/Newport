const blogPosts = [
 {
  title: " How I Built My Portfolio Website",
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
 ```javascript
{
  title: "Ganesh Puja — A Few Days Back Home",
  date: "September 2026",
  tag: "Life",
  content: `
    <p>Some festivals feel different when you celebrate them at home. This Ganesh Puja, I got the chance to go back to my hometown, <strong>Golabandha</strong>, and honestly, it felt really good to be there.</p>

    <p>The moment I reached home, I could feel that familiar atmosphere. The decorations, lights, music, people gathering around the puja, and the excitement everywhere brought back a lot of childhood memories. It felt like I had taken a small break from my regular life and stepped back into a place that always feels close to my heart.</p>

    <p>I didn't just go there to attend the puja. I got involved in the celebrations and participated wherever I could. Helping with the preparations, spending time around the puja, and being part of everything made the experience much more special.</p>

    <p>The best part was probably spending time with my friends. We talked about random things, laughed a lot, walked around, took some photos, and simply enjoyed being together. Nothing extraordinary happened, but somehow those simple moments became the ones I enjoyed the most.</p>

    <p>Being back in Golabandha also made me realize how much I sometimes miss the simplicity of home. When life gets busy with work and responsibilities, we don't always notice how much we miss familiar places and familiar people.</p>

    <p>Ganesh Puja wasn't just a festival for me this time. It was a small reminder of where I come from, the people I grew up around, and the memories that are still a part of me.</p>

    <p>Eventually, I had to return to my regular routine, but I came back with a happy mind and some really good memories.</p>

    <p><strong>Sometimes, you don't need a big trip or an expensive vacation to feel refreshed. Sometimes, going back home for a few days is enough. ❤️</strong></p>
  `
}
```

   // Add more blog posts here 
];

   
