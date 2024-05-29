import React from "react";
import Chunk from "./Chunk";
import Navbar from "./Navbar";

const TopSection = () => {
  return (
    <>
      <div id="top-section">
        <Navbar />
        <Chunk />
      </div>
    </>
  );
};

export default TopSection;
