import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowDown, faBook } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center bg-black text-white"
      >
        <h1 className="text-5xl font-bold mb-4">Hi! I'm Ben</h1>
        <p className="text-lg max-w-xl text-center">
          I am an innovative software developer with a passion for problem
          solving, collaboration and continuous learning.
        </p>
        <div className="flex justify-between w-full max-w-md mx-auto">
          <a
            href="https://www.linkedin.com/in/ben-hood-webdev"
            className="text-lg font-semibold hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
          </a>
          <a
            href="https://github.com/bhood239"
            className="text-lg font-semibold hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="text-4xl" />
          </a>
          <a
            href="https://flowcv.com/resume/biabbo28wk"
            className="text-lg font-semibold hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faBook} className="text-4xl" />
          </a>
          <a
            href="mailto:benhood97@btinternet.com"
            className="hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
          </a>
        </div>
        <div className="m-24">
          <FontAwesomeIcon
            icon={faArrowDown}
            className="text-4xl animate-up-down"
          />
        </div>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
