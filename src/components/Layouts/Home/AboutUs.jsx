import React from "react";
import { imagePath } from "../../../utils/imagepath";
import Button from "../../ui/Button";
import { Heading } from "../UtilsLayout";
import { useNavigate } from "react-router-dom";

const AboutUsSection = React.memo(() => {
  const navigate = useNavigate();
  return (
    <section className=" text-black flex items-center justify-center h-auto ">
      <div className="container max-w-full lg:max-w-[auto] xl:max-w-[1200px] mx-auto px-2 lg:px-4 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-0 md:gap-8 lg:gap-12">
          {/* Left Side - Images */}
          <div className="pb-16 md:pb-0 flex flex-col items-center md:items-start order-2 lg:order-1">
            <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-2xl mx-auto">
              <div className="relative w-full flex flex-row md:flex-row gap-3 md:gap-10 justify-center sm:justify-start">
                <img
                  loading="lazy"
                  src={imagePath.About1}
                  alt="First Illustration"
                  className="w-[170px] sm:w-[210px] md:w-2/3 lg:w-2/4 max-w-sm h-auto  z-0 transform translate-y-16 sm:translate-y-12"
                />
                <img
                  loading="lazy"
                  src={imagePath.About2}
                  alt="Second Illustration"
                  className="w-[170px] sm:w-[210px] md:w-2/3 lg:w-2/4 max-w-sm h-auto sm:-ml-8 sm:-mt-8 z-10"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="pb-0  md:pb-10 lg:pb-0 flex flex-col justify-center items-center lg:items-start lg:justify-start text-center md:text-left order-1 lg:order-2">
            {/* <h1 className=" text-center lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              About Insugo
            </h1> */}
            <Heading
              title={"About Insugo - Insurance Brokers in Hyderabad and AP"}
            />
            <p className="  text-center lg:text-left  text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed max-w-[80%] lg:max-w-2xl mx-auto md:mx-0">
              One of the kinds of insurance brokers that makes insurance easy
              and accessible to everyone. With the digital idea and the
              experience, we are closing all the gaps you face while having
              insurance. Suited for everyone.
            </p>
            <div className="  text-center lg:text-left  flex justify-center md:justify-start">
              <Button onClick={() => navigate("/about-us")}>About Us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutUsSection;
