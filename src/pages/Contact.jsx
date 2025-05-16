import React from "react";
import Intro3 from "../components/Intro3/Intro3";/* 
import Works2 from "../components/Works2/Works2"; */
import Numbers2 from "../components/Numbers2/Numbers2";
import Team from "../components/Team/Team";
import Blogs3 from "../components/Blogs3/Blogs3";

const Homepage3 = () => {


  return (
    <>
    <Intro3 />{/* 
    <Works2 /> */}
    <Numbers2 />
    <Team />
    <Blogs3 />
    </>
  );
};

export const Head = () => {
  return (
    <>
      <title>Vie - Home 3 Dark</title>
    </>
  )
}

export default Homepage3;
