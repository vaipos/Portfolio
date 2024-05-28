
"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [stickyPosition, setStickyPosition] = useState({ top: "-100vh", opacity: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsScrolled(scrollHeight > 0);

      if (scrollHeight > 0) {
        setStickyPosition({ top: "1rem", opacity: 1 });
      } else {
        setStickyPosition({ top: "-100vh", opacity: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {!isScrolled ? (
        <div className="navbar px-8 pr-14 bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>About</a>
                </li>
              </ul>
            </div>
            <div className=" p-4 ml-1 rounded-lg font-bold  hover:bg-slate-100 ">
              Vaishnavi Pasumarthi
            </div>
          </div>

          <div className="navbar-center">
            <img src="/3.png" className=" -my-8 scale-50 w-36"></img>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle hover:shadow-indigo-200 hover:shadow-md hover:bg-white">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.388-1.333-1.758-1.333-1.758-1.09-.745.083-.729.083-.729 1.204.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.305.762-1.605-2.665-.304-5.467-1.333-5.467-5.931 0-1.31.467-2.381 1.235-3.221-.124-.303-.535-1.521.117-3.167 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.004.404 2.292-1.553 3.298-1.23 3.298-1.23.653 1.646.242 2.864.118 3.167.77.84 1.235 1.911 1.235 3.221 0 4.609-2.806 5.624-5.479 5.922.43.371.814 1.103.814 2.222v3.293c0 .32.192.694.799.576C20.565 21.797 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </button>
            <button className="btn mx-3 btn-ghost btn-circle hover:shadow-indigo-200 hover:shadow-md hover:bg-white">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452H16.86V14.8c0-1.348-.025-3.086-1.879-3.086-1.879 0-2.168 1.462-2.168 2.978v5.758h-3.594V9h3.448v1.561h.05c.48-.915 1.648-1.878 3.394-1.878 3.63 0 4.3 2.39 4.3 5.493v6.277zM5.337 7.433c-1.148 0-2.079-.931-2.079-2.078 0-1.148.931-2.079 2.079-2.079 1.148 0 2.079.931 2.079 2.079 0 1.147-.931 2.078-2.079 2.078zm1.794 13.019H3.542V9h3.589v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.726v20.547C0 23.224.792 24 1.771 24h20.451C23.208 24 24 23.224 24 22.273V1.726C24 .774 23.208 0 22.225 0z" />
                </svg>
              </a>
            </button>
            <button className="btn btn-ghost btn-circle hover:shadow-indigo-200 hover:shadow-md hover:bg-white">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      ) :
      (
      
        <div
        className=" z-50 my-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md"
        style={stickyPosition}
      >
        <button className="btn join-item">Button</button>
        <button className="btn join-item">Button</button>
        <button className="btn join-item">Button</button>
      </div>
      )}
    </>
  );
};

export default Navbar;