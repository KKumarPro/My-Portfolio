import Work1 from "../../assets/Glimmer.png"; 
import Work2 from "../../assets/reuseIT.png"; 
import Work3 from "../../assets/train.png"; 

const Menu = [
  {
    id: 1,
    image: Work1,
    title: "Glimmer — Cosmic Social Platform",
    category: ["Full Stack", "React", "WebSockets"],
    repositoryUrl: "https://github.com/KKumarPro/GlimmerNotes",
    description:
      "A full-stack social platform featuring real-time chat, ephemeral messaging, 3D visualizations with Three.js, and AI-powered interactions using Google Gemini API.",
    featured: true,
   },
  {
    id: 2,
    image: Work2,
    title: "reuseIT Electronics",
    category: ["Full Stack", "Web3", "AI"],
    repositoryUrl: "https://github.com/KKumarPro/reuseIT",
    description:
      "A platform for buying and selling refurbished electronics with crypto-based authentication, AI shopping assistant, auction system, and NFT-based reward milestones.",
  },
  {
    id: 3,
    image: Work3,
    title: "AI-Powered Train Traffic Control",
    category: ["Backend", "AI"],
    repositoryUrl: "https://github.com/KKumarPro/AI-Powered-Train-Traffic-Control",
    description:
      "An AI-based simulation system using genetic algorithms to resolve train scheduling conflicts, built with Java and Spring Boot.",
  },
];

export default Menu;
