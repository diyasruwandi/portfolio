import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";

export const techLogos = [
  {
    node: <SiReact className="text-neutral-500 hover:text-[#61DBFB]" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs className="text-neutral-500 hover:text-white" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript className="text-neutral-500 hover:text-[#3178c6]" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss className="text-neutral-500 hover:text-cyan-500" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },

  {
    node: <SiHtml5 className="text-neutral-500 hover:text-[#E34C26]" />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },

  {
    node: (
      <img
        src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/firebase.svg"
        alt="Firebase"
        className="
        w-13 h-13
        grayscale
        opacity-70
        hover:grayscale-0
        hover:opacity-100
        hover:scale-100
        transition-all
        duration-300
      "
      />
    ),
    title: "Firebase",
    href: "https://firebase.google.com",
  },

  {
    node: (
      <img
        src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/vite.svg"
        alt="Vite"
        className="w-13 h-13 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-100 transition-all duration-300"
      />
    ),
    title: "Vite",
    href: "https://vitejs.dev",
  },
];
