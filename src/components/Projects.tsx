import React, { useEffect } from "react";
import products from "./ProjectData";
import { Link } from "react-router-dom";
import { SparklesCore } from "./sparkle";
const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full fixed"
          particleColor="#FFFFFF"
        />
      </div>
      <div
        className="mt-5 min-h-screen  flex flex-col items-center"
        id="project"
      >
        <div className="max-w-[80vw]">
          <h2 className="text-5xl font-bold text-center text-white project-heading my-16">
            Something I have{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">
              Created
            </span>{" "}
          </h2>
          <div className=" flex flex-wrap gap-x-8 gap-y-16 items-center justify-center my-32">
            {products.map((project: any, index: number) => (
              <div
                id="project-card"
                key={index}
                className="relative hover:scale-105 transition-all duration-200 flex w-96 flex-col rounded-xl bg-white   border-gray-200 text-gray-700 shadow-md "
              >
                <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                  <img
                    src={project.thumbnail}
                    alt="project"
                    className="object-cover object-center w-[300px] h-full"
                  />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {project.title}
                    <Link
                      to={project.link}
                      className="text-blue-500 float-right text-sm mt-1"
                    >
                      Visit
                    </Link>
                  </h5>
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {project.description}
                  </p>
                </div>
                <div className="p-6 pt-0 flex gap-4 flex-wrap items-center justify-center">
                  {project.tech.map((skill: any, index: number) => (
                    <button className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
                      <img src={`${skill}.png`} alt="" height={20} width={20} />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
