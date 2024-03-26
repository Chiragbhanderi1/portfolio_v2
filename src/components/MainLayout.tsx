import React, { useEffect } from "react";
import { HeroParallax } from "./parallex";
import Skills from "./Skills";
import Contact from "./Contact";

const MainLayout = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <>
      <div id="hero">
        <div className="content">
          <div className="hero-card">
            <div className="fade-done">
              <h2 className="name">CHIRAG BHANDERI</h2>
            </div>
            <div className="fade-done">
              <h3 className="jobtitle">Software Developer</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100vh]">
        <HeroParallax />
      </div>
      <Skills />
      <Contact />
    </>
  );
};

export default MainLayout;
