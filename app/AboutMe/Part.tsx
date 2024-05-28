import Link from "next/link";
import React from "react";

const Part = () => {
  return (
    <div className="h-screen mt-44 mx-44">
      <div className="flex">
        <div className="">
          <div className="font-bold text-5xl mb-10">About me</div>
          <div className="flex mb-10">
            <Link href="https://github.com/vaipos" className=" mr-[3%]">
              <div className=" stats shadow ">
                <div className="stat ">
                  <div className="stat-title">Projects</div>
                  <div className="stat-value">20+ Projects</div>
                  <div className="stat-desc">Click to view GitHub</div>
                </div>
              </div>
            </Link>

            <div className="stats shadow">
              <div className="stat w-full ">
                <div className="stat-title">Experience</div>
                <div className="stat-value">3+ Years </div>
                <div className="stat-desc">
                  Internships, Organizations, and more.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mockup-code bg-primary text-primary-content">
            <pre>
              <code>can be any color!</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 p-20  text-lg rounded-lg">
        The gentle hum of the city at dawn provides a soothing backdrop to the
        early risers who tread its quiet streets. As the first light of day
        begins to cast a golden glow, shadows stretch long and the air is filled
        with a crisp, invigorating chill. The gentle hum of the city at dawn
        provides a soothing backdrop to the early risers who tread its quiet
        streets. As the first light of day begins to cast a golden glow, shadows
        stretch long
      </div>
    </div>
  );
};

export default Part;
