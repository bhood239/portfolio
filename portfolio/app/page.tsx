"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowDown,
  faArrowUp,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col justify-start items-center bg-black text-white mt-14"
      >
        <div className="flex justify-center items-center ml-4 mr-4 mb-4 flex-col">
          <Image
            src="/ben-skiing.jpg"
            height={600}
            width={600}
            alt="ben skiing"
            className="rounded-lg"
          />
          <div className="flex flex-col">
            <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
            <span className="text-lg font-semibold text-gray-300">
              That's me!
            </span>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4 ml-4 mr-4">Hi! I'm Ben</h1>
        <p className="text-lg max-w-xl text-center ml-4 mr-4">
          I am an innovative software developer with a passion for problem
          solving, collaboration and continuous learning.
        </p>
        <div className="flex justify-between w-full max-w-md mx-auto mt-10 ml-4 mr-4">
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
        <div className="m-10">
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
