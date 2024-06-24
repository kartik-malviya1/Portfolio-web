import project_1 from "../assets/projects/Project-todo.png"
import project_2 from "../assets/projects/Project-web.png"
import project_3 from "../assets/projects/project-4.jpg"
import project_4 from "../assets/projects/Portfolio.png"
export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React js as well as back-end technologies like Node.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, Express.js and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project_4,
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React.js", "Tailwind CSS"],
    url: "https://portfolio-kartik-m.vercel.app"
  },
  {
    title: "To-Do List webApp",
    image: project_1,
    description: "A To-Do List WebApp.",
    technologies: ["HTML", "CSS", "React.js", "Tailwind CSS"],
    url: "https://todo-list-projects.vercel.app"
  },
  {
    title: "Blogging Platform",
    image: project_3,
    description: "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React.js", "Express", "MongoDB"],
    url: ""
  },
  {
    title: "Weather App",
    image: project_2,
    description: "A Weather App with real-time weather info fetching data using an API.",
    technologies: ["React.js", "Tailwind CSS"],
    url: "https://weather-app-project-s.vercel.app"
  }
];


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  email: "work.kartik.malviya@gmail.com",
};