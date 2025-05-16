import React, { useEffect, useRef } from "react";
import Services from "../components/services/services";
import Works from "../components/Works/Works";
import AboutUs from "../components/Abouts/abouts";
import Numbers from "../components/Numbers/Number";
import VideoWithTestimonials from "../components/VideoWithTestimonials/VideoWithTestimonials";
import SkillsCircle from "../components/SkillsCircle/SkillsCircle";/* 
import IntroWithSlider from "../components/IntroWithSlider/IntroWithSlider"; */
import Clients from "../components/Clients/Clients";
import Blogs1 from "../components/Blogs1/Blogs1";
import CallToAction from "../components/CallToAction/CallToAction";

const Homepage = () => {
  const element = document.getElementById("exampleElement");
  if (element) {
    element.classList.add("newClass");
  }

  const fixedSlider = useRef(null);
  const MainContent = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const slidHeight = fixedSlider.current
        ? fixedSlider.current.offsetHeight
        : 0;

      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }

      if (navbarRef.current) {
        navbarRef.current.classList.toggle(
          "nav-scroll",
          window.pageYOffset > 300
        );
      }
    };

    const intervalId = setInterval(handleScroll, 1000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <>{/* 
      <IntroWithSlider sliderRef={fixedSlider} /> */}
      <div ref={MainContent} className="main-content">
        <AboutUs />
        <Services />
        <Works />
        <Numbers />
        <VideoWithTestimonials />
        <SkillsCircle theme="dark" />
        <Clients />
        <Blogs1 />
        <CallToAction />
      </div>
    </>
  );
};

export const Head = () => {
  return (
    <>
      <title>Vie - Home 1 Dark</title>
    </>
  );
};

export default Homepage;
