import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="h-11 bg-gradient-to-b from-black to-white"></div>
      <section className="py-16 px-4 bg-white text-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">
            Here&apos;s a quick overview about me.
          </h1>
          <p className="text-lg leading-relaxed">
            I am a skilled Full Stack Developer with a passion for creating
            dynamic and user-friendly web applications. With a background in
            hospitality, management, and recruitment, I&apos;ve spent the last
            few years honing in on my people skills and developed a strong
            foundation in team collaboration, project management, and
            problem-solving. I specialize in React, Node.js and Ruby on Rails
            and have a growing expertise in TypeScript and Next.js. I thrive
            under tight deadlines and enjoy continuously learning and adapting
            to overcome challenges. Outside of tech, I&apos;m an avid fan of
            outdoor activities, particularly skiing, and I&apos;m always eager
            to connect with others who share my enthusiasm for innovation and
            the great outdoors.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-8 mt-10 text-center">
            Technologies I use:
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faJs} className="text-5xl" />
              <p className="mt-2 text-center">Javascript</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={"/ruby.png"}
                height={40}
                width={40}
                alt="ruby crystal"
              />
              <p className="mt-2 text-center">Ruby</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={"/typescript(1).png"}
                height={40}
                width={40}
                alt="typescript logo"
              />
              <p className="mt-2 text-center">Typescript</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faReact} className="text-5xl" />
              <p className="mt-2 text-center">React</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={"/nextjs.png"}
                height={40}
                width={40}
                alt="nextjs icon"
              />
              <p className="mt-2 text-center">Next.js</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={"/expressjs.png"}
                height={40}
                width={40}
                alt="express.js icon"
              />
              <p className="mt-2 text-center">Express.js</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={"/rails.png"}
                height={40}
                width={40}
                alt="rails icon"
              />
              <p className="mt-2 text-center">Rails</p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-11 bg-gradient-to-b from-white to-black"></div>
    </div>
  );
}
