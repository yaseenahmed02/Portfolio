import React from "react";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" w-full flex justify-center items-center flex-col mb-7">
          <p className="text-4xl font-bold inline text-center">Skills</p>
          <p className="py-4 text-2xl text-center">
            Here's a glimpse of the technologies that have sparked my passion
            and ignited my journey of continuous learning
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md hover:scale-110 duration-500 bg-purple-800">
            <p className="my-4">C++</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 bg-purple-800">
            <p className="my-4">C</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 bg-purple-800">
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 bg-purple-800">
            <p className="my-4">Machine Learning</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 bg-purple-800">
            <p className="my-4">Deep Learning</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 bg-purple-800">
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 bg-purple-800">
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 bg-purple-800">
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 bg-purple-800">
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 bg-purple-800">
            <p className="my-4">SQL</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 bg-purple-800">
            <p className="my-4">Flask</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 bg-purple-800">
            <p className="my-4">GIT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
