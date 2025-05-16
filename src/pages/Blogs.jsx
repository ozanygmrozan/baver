import React from "react";
import AboutUs2 from "../components/AboutUs2/AboutUs2"
import VideoWithTestimonials from "../components/VideoWithTestimonials/VideoWithTestimonials"
import Services from "../components/Service/Services";
import Team from "../components/Team/Team"
import Blogs4 from "../components/Blogs4/Blogs4";

const BlogPage = () => {


  return (
    <>
    <AboutUs2 />
    <Services  lines/>
    <VideoWithTestimonials />
    <Team />
    <Blogs4 />
    </>
  );
};

export const Head = () => {
  return (
    <>
      <title>Vie - Home 4 Dark</title>
    </>
  )
}

export default BlogPage;
