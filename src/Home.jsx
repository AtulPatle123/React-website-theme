import React from "react";
import Common from "./Common";
import header from "../src/images/service1.jpg";
const Home = () => {
  return (
    <>

   <Common 
     name="Grow your business with"
     imgsrc ={header}
     visit="/service"
     btnname = "Get Started"
     />
      
    </>
  );
};

export default Home;
