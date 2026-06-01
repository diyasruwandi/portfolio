import profileImg from "../assets/img/person/profile.jpeg";
import Skills from "./Skills";
import TextType from "./TextType";
import { Dock, DockIcon } from "./ui/dock";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
const Header = () => {
  return (
    <div id="container" className="mb-10 mt-6 p-4 md:p-8 lg:pr-0">
      <section className="space-y-4 bg-cover bg-no-repeat">
        <div className="flex items-center justify-start gap-4">
          <div className="z-10 rounded-full border-2 border-white shadow-md dark:border-neutral-800 overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={profileImg}
                alt="profile"
                className="rounded-full duration-700 ease-in-out w-20 h-25 lg:hover:scale-110 object-cover object-center"
              />
            </div>
          </div>
          <div className="flex flex-col z-10 font-sans text-xl font-bold lg:text-3xl">
            <TextType
              text={[
                "Frontend Developer",
                "Hi I'm Diyas Ruwandi",
                "Freelancer",
              ]}
              className="text-white"
              typingSpeed={60}
            />
            <ul className="mt-2 text-xs ml-5 flex list-disc flex-col gap-1 marker:text-neutral-600 dark:text-neutral-400 lg:flex-row lg:gap-2">
              <li className="lg:mr-8">
                <span className="relative inline-flex w-fit overflow-hidden">
                  <span className="transform-none will-change-auto">
                    Freelancer
                  </span>
                </span>
              </li>
              <li>
                <span className="relative inline-flex w-fit overflow-hidden">
                  <span className="transform-none will-change-auto">
                    Based in Tegal 🇮🇩
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-4 mt-1  ">
          <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose text-justify">
            <span>
              I’m an Informatics Engineering student with a strong interest in
              web development. I am currently focusing on learning and deepening
              my skills in the React framework, building modern, responsive, and
              user-friendly web applications. I am passionate about continuously
              improving my technical abilities and staying up to date with the
              latest trends in front-end development.
            </span>
          </p>
          <Dock
            direction="middle"
            iconSize={38}
            iconMagnification={54}
            className="mt-4 border-neutral-700 bg-neutral-900/60"
          >
            <DockIcon
              onClick={() => window.open("https://github.com/diyasruwandi")}
              className="text-neutral-300 hover:text-white"
            >
              <FaGithub size={22} />
            </DockIcon>
            <DockIcon
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/diyas-ruwandi-285118295/",
                )
              }
              className="text-blue-400 hover:text-blue-300"
            >
              <FaLinkedin size={22} />
            </DockIcon>
            <DockIcon
              onClick={() =>
                window.open(
                  "https://www.instagram.com/yassrwnd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                )
              }
              className="text-pink-400 hover:text-pink-300"
            >
              <FaInstagram size={22} />
            </DockIcon>
            <DockIcon
              onClick={() => window.open("mailto:diyasruwandi273@gmail.com")}
              className="text-emerald-400 hover:text-emerald-300"
            >
              <CgMail size={24} />
            </DockIcon>
          </Dock>
        </div>
      </section>
      <div
        className="my-4 border-t border-gray-300 dark:border-neutral-300"
        id="breakline"
      ></div>
      <Skills />
    </div>
  );
};

export default Header;
