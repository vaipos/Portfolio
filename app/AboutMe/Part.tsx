// AboutMe/Part.jsx
import Link from "next/link";
import React from "react";

const Part = () => {
  return (
    <div className="h-screen mt-[10%] mx-[11%]" id="about-me">
      <div className="mockup-browser border border-indigo-300 shadow-2xl h-[80%] flex flex-col">
        <div className="mockup-browser-toolbar">
          <div className="input border border-indigo-300">
            https://AboutVaishnavi.com
          </div>
        </div>
        <div className="px-[4%] py-[4%] border-t border-indigo-900 flex-grow flex">
          <div className="w-[55%] flex flex-col">
            <div className="ml-[2%]">
              <div className="font-bold text-[4vw] mb-[2%]">About me</div>
              <div className="mb-[2%]">
                <div className="flex">
                  <Link href="https://github.com/vaipos" className="mr-[3%] w-[48%]">
                    <div className="stats shadow">
                      <div className="stat">
                        <div className="stat-title">Projects</div>
                        <div className="stat-value">20+ Projects</div>
                        <div className="stat-desc">Click to view GitHub</div>
                      </div>
                    </div>
                  </Link>
                  <div className="w-[48%]">
                    <div className="stats shadow">
                      <div className="stat">
                        <div className="stat-title">Experience</div>
                        <div className="stat-value">3+ Years </div>
                        <div className="stat-desc">
                          Internships, Organizations, and more.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-slate-900 flex-grow ml-[2%] border">
              {/* Empty div for border */}
            </div>
          </div>
          <div className="bg-slate-100 p-[5%] text-[1.05vw] rounded-lg mx-[2%] w-[40%]">
            The gentle hum of the city at dawn provides a soothing backdrop to
            the early risers who tread its quiet streets. As the first light of
            day begins to cast a golden glow, shadows stretch long and the air
            is filled with a crisp, invigorating chill. The gentle hum of the
            city at dawn provides a soothing backdrop to the early risers who
            tread its quiet streets. As the first light of day begins to cast a
            golden glow, shadows stretch long
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part;
