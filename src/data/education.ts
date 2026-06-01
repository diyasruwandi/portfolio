export type Education = {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
};

export const educationData: Education[] = [
  {
    period: "2023–Present",
    degree: "Bachelor's Degree in Informatics Engineering",
    institution: "Universitas Harkat Negeri",
    location: "Tegal",
    description:
      "Gained comprehensive knowledge in software development, algorithms, and systems design. Contributed to various web development projects, enhancing skills in both front-end and back-end technologies.",
  },
  {
    period: "2019–2022",
    degree: "MIPA",
    institution: "SMA Negeri 2 Tegal",
    location: "Tegal",
    description:
      "Specialized in the science track (IPA), focusing on subjects like biology, chemistry, and physics. Developed a strong foundation in analytical thinking and problem-solving.",
  },
];
