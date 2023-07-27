import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import me2 from "../assets/me2.png"; // Assuming me2 is the larger image
import { Link } from "react-scroll";
import Typewriter from "react-ts-typewriter";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-royalBlue text-white z-0" /* Updated background and text color */
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-navyBlue">
            {" "}
            {/* Updated text color */}
            <Typewriter
              text="Hey, I'm Yaseen Ahmed"
              typingSpeed={0}
              loop={true}
              delay={30000} // 30000 milliseconds = 30 seconds
            />
          </h2>
          <p className="text-blueGray py-4 max-w-md">
            {" "}
            {/* Updated text color */}
            Embrace brilliance and innovation. With an entrepreneurial spirit
            and tech prowess, I bring transformative solutions that shape a
            brighter tomorrow. Let's collaborate and venture into new frontiers
            on this exciting journey.
          </p>
          <div>
            <Link
              to="about"
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={500}
              className="group text-royalBlue w-fit px-6 py-3 my-2 flex items-center rounded-md dark-luxury-grey cursor-pointer hover:bg-blueGray-900" /* Updated button colors and added new CSS class */
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div className="relative mt-8 md:mt-12 z-0">
          <a
            href="https://www.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_11602236.htm#query=coder%20png&position=7&from_view=search&track=ais"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={me2}
              alt="my profile"
              className="rounded-full h-[400px] w-[400px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] object-cover"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
