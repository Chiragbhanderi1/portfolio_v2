import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="min-h-[90vh] flex items-center justify-center">
        <section className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2 ">
              <div>
                <h2 className="text-xl  font-bold leading-2 text-white sm:text-2xl lg:text-3xl">
                  Hey 👋 I am
                </h2>
                <h2 className="text-3xl mt-5  font-bold leading-2 text-white sm:text-4xl lg:text-5xl">
                  Chirag Bhanderi
                </h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-400 md:mt-8">
                  I'm Chirag Bhanderi, a seasoned web developer proficient in
                  both MERN (MongoDB, Express.js, React, Node.js) and MEVN
                  (MongoDB, Express.js, Vue.js, Node.js) stacks. With a track
                  record of contributing to multiple startup projects and
                  working as a freelancer, I bring a wealth of experience in
                  creating dynamic and efficient web applications. My commitment
                  lies in delivering top-notch solutions that align with client
                  objectives and industry standards.
                </p>

                <p className="mt-4 text-xl text-gray-200 md:mt-8">
                  <span className="relative inline-block">
                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-cyan-700"></span>
                    <span className="relative"> Have a question? </span>
                  </span>
                  <br className="block sm:hidden" /> Ask me on{" "}
                  <Link
                    to="/#contact"
                    title=""
                    className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                  >
                    Here
                  </Link>
                </p>
              </div>

              <div className="relative md:ml-20">
                <img
                  className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                  alt=""
                />

                <img
                  className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-125"
                  src="/chirag_cutout.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <h2 className="text-2xl  font-bold leading-2 my-16 text-white sm:text-4xl lg:text-5xl">
        🌿🌊 My
        <span className="text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">
          Journey
        </span>{" "}
        🌿🌊
      </h2>
      <ol className="relative border-s border-gray-200 w-5/6 md:w-1/2 mb-16">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
            Present
          </time>
          <h3 className="text-lg font-semibold text-white">
            Continuos Learning with freelancing projects
          </h3>
          <p className="mb-4 text-base font-normal text-gray-400">
          Continuing from Citynect, I delved into Vue.js and Laravel, crafting several projects. Despite challenges, I began freelancing, though success hasn't fully materialized yet. But I'm committed and pushing forward.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
            July 2023
          </time>
          <h3 className="text-lg font-semibold text-white">
            Product Development Internship
          </h3>
          <p className="mb-4 text-base font-normal text-gray-400">
            In june 2023, I got the chance to create the product for the
            CITYNECT. I redesigned the existing app and added more creativity
            and functionality to it. It's currenlty serving at{" "}
            <a
              href="https://citynect.in/"
              target="_blank"
              className="text-cyan-500"
            >
              Citynect.in
            </a>
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
            January 2023
          </time>
          <h3 className="text-lg font-semibold text-white">
            Full Stack Internship
          </h3>
          <p className="mb-4 text-base font-normal text-gray-400">
            After my 1st internship I dived into Javascript frameworks (ReactJs,
            NextJs, ExpressJs). Soon I got 6 months Internship at Techno It Hub.
            I created APIs in ExpressJs and the admin panel in React js.
          </p>
          <a
            href="https://drive.google.com/file/d/1p2TtT3PQMRWmpZ8H6hFVb5tefUv1Opby/view?usp=sharing"
            target="_blank"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "
          >
            Certificate{" "}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
            July 2022
          </time>
          <h3 className="text-lg font-semibold text-white">
            First Internship
          </h3>
          <p className="mb-4 text-base font-normal text-gray-400">
            After Learning basics ( HTML,CSS & Javascript ). I got my first
            Internship at intership studio where I designed the E-Commerse
            website.
          </p>
          <a
            href="https://drive.google.com/file/d/1p2TtT3PQMRWmpZ8H6hFVb5tefUv1Opby/view?usp=sharing"
            target="_blank"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "
          >
            Certificate{" "}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-500">
            March 2021
          </time>
          <h3 className="text-lg font-semibold text-white">
            Started Learning Web Developement
          </h3>
          <p className="text-base font-normal text-gray-400">
            During my second year of college I started learning web development
            from the Internet.
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-500">
            September 2020
          </time>
          <h3 className="text-lg font-semibold text-white">
            L.D.C.E. (Electronics & Communication)
          </h3>
          <p className="text-base font-normal text-gray-400">
            Starting my engineering in electronics and communication at L.D.
            College of engineering Ahemdabad
          </p>
        </li>
      </ol>
    </div>
  );
};

export default About;
