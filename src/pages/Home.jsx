import React from "react";
import Hero from "../components/Layouts/Home/Hero";
import AboutUsSection from "../components/Layouts/Home/AboutUs";
import Insurance from "../components/Layouts/Home/Insurance";
import WhyInsugo from "../components/Layouts/Home/WhyInsugo";
// import Form from "../components/Layouts/Home/Form"
import Testimonials from "../components/Layouts/Home/Testimonials";
import Technologies from "../components/Layouts/Home/Technologies";
import { MaxWidthContainer } from "../components/Layouts/UtilsLayout";

const Home = () => {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
      <Hero />
      <MaxWidthContainer>
        <AboutUsSection />
        <Insurance />
      </MaxWidthContainer>
      <WhyInsugo />
      <MaxWidthContainer>
        <Technologies />
        <Testimonials />
      </MaxWidthContainer>
    </div>
  );
};

export default Home;
