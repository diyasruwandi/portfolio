import cloud from "../assets/img/certificate/CloudAdvanced.png";
import computer from "../assets/img/certificate/ComputerNetwork.png";
import css from "../assets/img/certificate/CSSBasic.png";
import reactbs from "../assets/img/certificate/ReactBasic.png";
import responsive from "../assets/img/certificate/ResponsiveWebCertificate.png";

export type Certificate = {
  id: string;
  title: string;
  image: string;
  link: string;
};

export const certificateData: Certificate[] = [
  {
    id: "cloud-advanced",
    title: "Cloud Advanced",
    image: cloud,
    link: "https://drive.google.com/file/d/1KYimzlgiZz_JXfCS3Hrb7YaMGeYrAlGf/view?usp=sharing",
  },
  {
    id: "computer-network",
    title: "Computer Network",
    image: computer,
    link: "https://drive.google.com/file/d/1udYCMc8NHrGyB1A89UVXa6JieQVL0xrr/view?usp=sharing",
  },
  {
    id: "css-basic",
    title: "CSS Basic",
    image: css,
    link: "https://www.hackerrank.com/certificates/iframe/678f41b2bb58",
  },
  {
    id: "react-basic",
    title: "React Basic",
    image: reactbs,
    link: "https://www.hackerrank.com/certificates/iframe/ccee9e3b2a54",
  },
  {
    id: "responsive-web",
    title: "Responsive Web",
    image: responsive,
    link: "https://www.freecodecamp.org/certification/yassrwndi/responsive-web-design",
  },
];
