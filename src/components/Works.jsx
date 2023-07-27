import React from "react";
import code from "../assets/code2.png";
import riscvImage from "../assets/riscv.png";
import math_img from "../assets/math.png";
import server from "../assets/server.jpg";
import tv from "../assets/tv.jpg";
import portfolio from "../assets/portfolio.jpg";

const Works = () => {
  return (
    <div
      name="work"
      className="w-full bg-royalBlue text-white p-4 pt-[60px] pb-16" // Updated background color class
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline text-center">
            Selected Projects
          </p>
          <p className="py-4 text-2xl text-center">
            Innovative Solutions, Crafted with Code: Discover My Selected
            Software Projects
          </p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${riscvImage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-white tracking-wider">
                RISC-V Assembler
              </span>
              <p className="text-center">An open-source RISC-V Assembler</p>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/yaseenahmed02/RISC-V-Assembler"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${math_img})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-white tracking-wider">
                Linear System Solver
              </span>
              <p className="text-center">
                A linear-system solver using Cramer's Algorithm
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/yaseenahmed02/Cramers-Rule"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${server})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col ">
              <span className="text-lg font-bold text-white tracking-wider">
                NetClock
              </span>
              <p className="text-center">A distributed clock server</p>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/yaseenahmed02/NetClock"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${tv})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-white tracking-wider">
                CheapTalk
              </span>
              <p className="text-center">
                A server for a retro style messaging application
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/yaseenahmed02/CheapTalk"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-white tracking-wider">
                Portfolio
              </span>
              <p className="text-center">
                A splendidly chique personal portfolio
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/yaseenahmed02/Portfolio"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Works;
