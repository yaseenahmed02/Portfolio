import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import me2 from "../assets/me2.png"; // Assuming me2 is the larger image
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-r from-purple-600 to-indigo-600"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Hey, I'm Yaseen Ahmed
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            Embrace brilliance and innovation. With an entrepreneurial spirit
            and tech prowess, I bring transformative solutions that shape a
            brighter tomorrow. Let's collaborate and exceed expectations on this
            exhilarating journey.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-cyan-500 cursor-pointer hover:bg-cyan-600"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div className="relative mt-8 md:mt-12">
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
