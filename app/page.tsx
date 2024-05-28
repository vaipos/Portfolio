import React from "react";
import Part from "./AboutMe/Part";
import Chunk from "./Top/Chunk";
import Footer from "./Top/Footer";

import Navbar from "./Top/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <Chunk />
      <Part/>
      <Footer/>

 
    </>
  );
};

export default page;
