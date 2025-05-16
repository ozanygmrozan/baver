import React from "react";
import Intro2 from "../components/Intro2/Intro2";
import Services from "../components/Service/Services";
import Video2 from "../components/Video2/Video2";
import Team2 from "../components/Team2/Team2";
import Blogs2 from "../components/Blogs2/Blogs2";
import CallToAction from "../components/CallToAction/CallToAction";

const AboutPage = () => {
  return (
    <>
      <Intro2 />
      <Services />{/* 
      <Video2 /> */}
      <Team2 />
      <Blogs2 />
      <CallToAction />
    </>
  );
};

export const Head = () => {
  return (
    <>
      <title>Vie - Home 2 Dark</title>
    </>
  );
};

export default AboutPage;
