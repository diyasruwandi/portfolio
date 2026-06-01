import kakikita from "../assets/img/projek/kakikita.png";
import websmk from "../assets/img/projek/websmk.png";
import diet from "../assets/img/projek/diet.png";
import porto from "../assets/img/projek/porto.png";
import cek from "../assets/img/projek/cekom.png";
import cekom2 from "../assets/img/projek/cekom2.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string[];
  link?: string;
  tags: string[];
  type?: "web" | "mobile";
};

export const projectData: Project[] = [
  {
    id: "kakikita",
    title: "E-Commerce KakiKita",
    description:
      "An e-commerce shoe store website with a modern and responsive design, featuring product catalogs, search, shopping cart, checkout, and an admin dashboard.",
    image: [kakikita],
    link: "https://kakikita.my.id/",
    tags: ["Laravel", "PHP", "Tailwind"],
  },
  {
    id: "websmk",
    title: "Web Profile SMK Harber Tegal",
    description:
      "A modern and responsive school profile website that provides information about the school profile, study programs, news, gallery, and school contact information online.",
    image: [websmk],
    link: "https://smkharbertegal.sch.id/",
    tags: ["Wordpress", "PHP", "MySQL"],
  },
  {
    id: "diet",
    title: "AI Rekomendasi Diet",
    description:
      "An AI-powered diet recommendation website built using Ollama and the Mistral model to provide interactive meal planning and diet recommendations.",
    image: [diet],
    link: "https://github.com/diyasruwandi/AI-DIET-DAN-WORKOUT.git",
    tags: ["Python", "Flask", "Ollama", "Mistral"],
  },

  {
    id: "porto",
    title: "My Portfolio",
    description:
      "A modern and responsive personal portfolio website to showcase projects, skills, and contact information professionally.",
    image: [porto],
    link: "https://www.diyasruwandi.my.id/",
    tags: ["React", "Tailwind", "Typescript", "Vite"],
  },

  {
    id: "cekom2",
    title: "Cek Komposisi Mobile App",
    description:
      "CekKomposisi is a mobile application that implements OCR using PyTesseract to detect text on food packaging and automatically display the scan results. The app also includes daily sugar, salt, and fat intake tracking features with percentage progress charts.",
    image: [cek, cekom2],
    link: "https://github.com/NanaIkhwan/DailyNutry.git",
    tags: ["Flutter", "Flask", "PyTesseract", "ML"],
    type: "mobile",
  },
];
