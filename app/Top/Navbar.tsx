// Navbar.jsx
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [stickyPosition, setStickyPosition] = useState({
    top: "-100vh",
    opacity: 0,
  });

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                  <a onClick={() => scrollToSection("about-me")}>About Me</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("activities")}>Activities</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("tech-stacks")}>Tech Stacks</a>
                </li>
              </ul>
            </div>
            <div className="p-4 ml-1 rounded-lg font-bold hover:bg-slate-100">
              Vaishnavi Pasumarthi
            </div>
          </div>

          <div className="navbar-center">
            <img src="/3.png" className="-my-8 scale-50 w-36"></img>
          </div>
          <div className="navbar-end">
            <button
              className="btn btn-ghost btn-circle hover:shadow-indigo-200 hover:shadow-md hover:bg-white"
              onClick={() => scrollToSection("top-section")}
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
                  d="M10 20v-6h4v6m5 0v-8h3L12 3 2 12h3v8z"
                />
              </svg>
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
      ) : (
        <div
          className="z-50 my-10 justify-between fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-50 p-4 rounded-lg shadow-md"
          style={stickyPosition}
        >
          <button className="join-item mx-5">
            <div className="dropdown bg-base-200 rounded-full">
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
                className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a onClick={() => scrollToSection("about-me")}>About Me</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("activities")}>Activities</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("tech-stacks")}>Tech Stacks</a>
                </li>
              </ul>
            </div>
          </button>
          <button
            className="btn join-item mr-5"
            onClick={() => scrollToSection("top-section")}
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
                d="M10 20v-6h4v6m5 0v-8h3L12 3 2 12h3v8z"
              />
            </svg>
          </button>
          <button className="join-item mr-5">
            <button className="btn btn-circle">
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
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
