import React from "react";
import Typewriter from "react-ts-typewriter";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-royalBlue text-white flex justify-center items-center" /* Updated background color to royal blue */
    >
      <div className="py-16 rounded-md bg-midnightBlue flex flex-col justify-center items-center w-4/6 transition-all transform hover:scale-105">
        <p className="text-4xl font-bold mb-4 text-luxuryGold">About Me</p>{" "}
        {/* Updated text color */}
        <div className="max-w-[1000px] w-full px-8">
          <div className="sm:text-center">
            <Typewriter
              text="I'm Yaseen Ahmed, a seasoned Tech Visionary and Software Developer. Passionate about technology's transformative potential, I advocate for a mindful approach to innovation. With strong leadership abilities and a diverse skill set, I excel in team environments and foster meaningful connections across cultures. Let's connect for inspiring conversations and potential collaborations — I'm always open for a chat!"
              typingSpeed={70}
              loop={true}
              delay={30000} // 30000 milliseconds = 30 seconds
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
