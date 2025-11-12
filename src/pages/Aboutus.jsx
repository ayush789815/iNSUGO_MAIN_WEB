import React from "react";
import { AboutUs } from "@utils/imagepath.js";
import {
  Heading,
  Heading2,
  HeroLayout,
} from "../components/Layouts/UtilsLayout";
import Navbar from "../components/Layouts/Home/Navbar";
// import Form from '../components/Layouts/Home/Form';
// // import Form from '../Layouts/Home/Form';
// // import Form from '../../Layouts/Home/Form';

const AboutSection = () => {
  return (
    <>
      <div className="w-full mb-20">
        <div className="h-full relative">
          <HeroLayout
            mbClass={""}
            img={AboutUs.Frame1}
            title={"About Us"}
            desc1={
              "One of the kinds of insurance brokers that makes insurance easy and accessible to everyone. With the digital idea and the experience, we are closing all the gaps you face while having insurance Suited for everyone."
            }
          />

          {/* Icons container - Separate from main container */}
          {/* <div className="relative xl:absolute w-full xl:-bottom-28 mt-10 xl:mt-0  z-20 mb-12">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 xl:gap-12 px-4 max-w-7xl mx-auto">
              {[
                { icon: AboutUs.Fram2, alt: "Home Insurance" },
                { icon: AboutUs.Fram3, alt: "Umbrella Insurance" },
                { icon: AboutUs.Fram4, alt: "Business Insurance" },
                { icon: AboutUs.Fram5, alt: "Shield Insurance" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-36 h-36  sm:w-40 sm:h-40 md:w-64 md:h-40 bg-[#333333] rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <img
loading="lazy"
                    src={item.icon}
                    alt={item.alt}
                    className="w-20 h-16 sm:w-24 sm:h-18 md:w-32 md:h-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Company Description - Adjusted spacing */}
        <div className="container mx-auto px-4 py-0 md:py-12 max-w-7xl mt-0 lg:mt-20">
          <div className="flex flex-col lg:flex-row items-start lg:space-x-12 ">
            <div className="lg:w-1/2 text-left ">
              {/* <h2 className=" text-xl w-full lg:w-4/5  lg:text-2xl xl:text-4xl font-extrabold text-black leading-snug tracking-wide">
                Our company is 100% innovation and support based, that drives
                evaluation.
              </h2> */}
              <p className=" text-xl w-full lg:w-4/5  lg:text-2xl xl:text-4xl font-extrabold text-black leading-snug tracking-wide">
                Our company is 100% innovation and support based, that drives
                evaluation.
              </p>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <p className="text-lg  text-gray-800 leading-relaxed tracking-wide ">
                Our goal is to simplify solutions for everyone. Operating within
                a corporate environment, our company consists of specialized
                departments, including consultation, underwriting, and expert
                guidance. Our top management prioritizes innovation, ensuring
                that every solution remains accessible and efficient.
              </p>
            </div>
          </div>
        </div>

        {/* Company Image Section */}
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 ">
            <div className="lg:w-1/2">
              <img
                loading="lazy"
                src={AboutUs.Fram6}
                alt="Company Image"
                className="w-full h-[400px] object-cover rounded-lg "
                style={{
                  filter: "brightness(0.9)", // Adjust brightness for shading
                }}
              />
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <Heading2 side={"left"} title=" Honesty is the policy we pick." />

              {/* <h2 className="text-4xl font-extrabold text-black leading-snug tracking-wide">
               Honesty is the policy we pick.
             </h2> */}
              <p className="text-lg text-gray-800 leading-relaxed tracking-wide mt-4">
                As an IRDAI-mandated insurance broker, we operate with
                transparency, offering insurance solutions with no hidden
                charges. Committed to integrity, we work solely within the
                insurance domain—We represent You!
              </p>
            </div>
          </div>
        </div>

        {/* Final Section */}
        <div
          className="relative w-full max-w-7xl mx-auto bg-gray-700 rounded-[50px] overflow-hidden"
          style={{
            backgroundColor: AboutUs.Fram7 ? "" : "#333", // fallback
          }}
        >
          {/* Accessible background image */}
          {AboutUs.Fram7 && (
            <img
              src={AboutUs.Fram7}
              alt="Team working together at Insugo office"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-70 rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px]"></div>

          {/* Content */}
          <div className="relative flex justify-center items-center py-20 px-4 text-center max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto bg-[#89898966] py-4 px-2 rounded-[30px]">
              <Heading
                className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold mb-6"
                title="We are not just a Company"
              />
              <p className="text-white text-lg mb-8 leading-relaxed">
                Before founding Insugo, the founder spent 20 years as an
                insurance expert across multiple companies. Recognizing industry
                gaps and complex solutions, the idea for Insugo was born—built
                to serve, represent, and prioritize customers above all else.
              </p>
            </div>
          </div>
        </div>

        {/* <div
          className="relative w-full max-w-7xl mx-auto bg-gray-700 rounded-[50px] overflow-hidden"
          style={{
            backgroundImage: `url(${AboutUs.Fram7})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70 rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px]"></div>

          <div className=" relative flex justify-center items-center  py-20 px-4 text-center max-w-6xl mx-auto ">
            <div className="max-w-4xl mx-auto bg-[#89898966] py-4 px-2  rounded-[30px]">
              {/* <h2 className="text-white text-4xl font-bold mb-6">
                We are not just a Company
              </h2> *
              <Heading
                className={
                  "text-white text-2xl lg:text-3xl xl:text-4xl font-bold mb-6"
                }
                title="We are not just a Company"
              />
              <p className="text-white text-lg mb-8 leading-relaxed">
                Before founding Insugo, the founder spent 10 years as an
                insurance expert across multiple companies. Recognizing industry
                gaps and complex solutions, the idea for Insugo was born—built
                to serve, represent, and prioritize customers above all else.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default AboutSection;
