import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-royalBlue text-white z-50">
      <div>
        <h1 className="font-thin text-2xl italic font-serif">YA</h1>
      </div>
      {/* menu */}
      <ul className="hidden md:flex gap-x-8">
        <li className="nav-item">
          <Link to="" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <div
        className={`mobile-menu ${nav ? "active" : ""}`}
        onClick={handleClick}
      >
        <ul>
          <li>
            <Link onClick={handleClick} to="" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
        </ul>
      </div>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-white"
              href="http://linkedin.com/in/yaseen-ahmed-8604601a4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#14202E]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/yaseenahmed02"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#88A9C3]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="mailto:yahme02@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2B4257]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/resume.pdf"
              download="Yaseen Ahmed - Resume.pdf"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
