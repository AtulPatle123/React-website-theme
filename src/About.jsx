import React from "react";
import Common from "./Common";
import header from "../src/images/service1.jpg";

const About = () => {
  return (
    <>
     <Common 
     name="Welcome to About Page"
     imgsrc ={header}
     visit="/contact"
     btnname = "Contact Now"
     />
    </>
  );
};

export default About;
