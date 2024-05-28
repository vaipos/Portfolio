"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Chunk = () => {
  return (
    <div className="">
    <div className=" flex flex-col md:flex-row items-center justify-between h-screen">
      <div className=" px-10 md:w-1/2 lg:w-2/5 text-center md:text-left md:pr-12 -mt-[13%]">
        <div className="ml-[10%] -mr-[90%]">
          <div className="text-2xl p-4">Hello 👋, I'm</div>
          <div className="text-5xl md:text-8xl font-bold p-4">
            <div>Vaishnavi</div>
            <div>Pasumarthi</div>
          </div>
          <div className="typing-animation-container ml-4">
            <TypeAnimation
              sequence={[
                // Web Development
                "And I have experience in developing web apps with Python",
                1000,
                "And I have experience in developing web apps with Java",
                1000,
                "And I have experience in developing web apps with JavaScript",
                1000,
                "And I have experience in developing web apps with Express.JS",
                1000,
                "And I have experience in developing web apps with React.JS",
                1000,
                "And I have experience in developing web apps with Node.JS",
                1000,
                "And I have experience in developing web apps with MongoDB",
                1000,
                // ML Models
                "And I have experience in developing ML models with TensorFlow",
                1000,
                "And I have experience in developing ML models with PyTorch",
                1000,
                "And I have experience in developing ML models with OpenCV",
                1000,
                "And I have experience in developing ML models with SVM",
                1000,
                // Data Analysis
                "And I have experience in data analysis with SQL",
                1000,
                "And I have experience in data analysis with SQLite",
                1000,
                "And I have experience in data analysis with Tableau",
                1000,
                "And I have experience in data analysis with R",
                1000,
                "And I have experience in data analysis with Chart.JS",
                1000,
                "And I have experience in data analysis with Handlebars",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "150%" }}
              repeat={Infinity}
            />
          </div>
          <div className="mt-12 ml-2 flex justify-center md:justify-start">
            <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-emerald-700">
              Download Resume
            </button>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ml-7 bg-emerald-200 hover:btn-outline hover:bg-white">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 lg:w-2/5 md:mt-0 ">
        <img
          src="/profile.jpg"
          className="mx-auto w-full rounded-full object-cover -mt-[26%]"
          alt="Profile"
          style={{ maxWidth: "500px" }}
        />
      </div>
      
    </div>
    <div className="flex justify-center items-center h-24 animate-bounce animate-infinite -mt-[12%]  cursor-pointer">
      <svg
        className="w-12 h-12 text-black"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 16L6 10L7.41 8.59L12 13.17L16.59 8.59L18 10L12 16Z"
          fill="currentColor"
        />
      </svg>
    </div>
    </div>
  );
};

export default Chunk;