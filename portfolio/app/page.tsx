import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import TopNavBar from "./topNavBar";

export default function Home() {
  return (
    <>
      <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
        <h1 className="text-5xl font-bold mb-4">Hi! I'm Ben</h1>
        <p className="text-lg max-w-xl text-center">I am an innovative software developer with a passion for problem solving, collaboration and continuous learning.</p>
        <div className="space-y-4">
        <a 
          href="https://www.linkedin.com/in/ben-hood-webdev" 
          className="text-lg font-semibold hover:text-gray-300"
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/bhood239" 
          className="text-lg font-semibold hover:text-gray-300"
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a 
          href="https://flowcv.com/resume/biabbo28wk" 
          className="text-lg font-semibold hover:text-gray-300"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a 
          href="mailto:benhood97@btinternet.com" 
          className="text-lg font-semibold hover:text-gray-300"
        >
          Email Me
        </a>
      </div>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </>
  )
}