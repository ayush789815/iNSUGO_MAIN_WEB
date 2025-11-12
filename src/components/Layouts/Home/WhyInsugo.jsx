import React from "react";
import { cards } from "../../../utils/imagepath";
import { Heading, Heading2, Heading3 } from "../UtilsLayout";
// import { cards } from "../../utils/imagepath.js";

const WhyInsugo = React.memo(() => {
  return (
    <section
      className="bg-gray-100 py-8 md:py-12 why_insugo"
      // style={{
      //   borderTopLeftRadius: "100px",
      //   borderTopRightRadius: "100px",
      // }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <Heading2 title={"Why Insugo?"} />

        <div className="mt-5 md:mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <div
              style={{
                boxShadow: " 0px 0px 8px 0px #0000001F",
              }}
              key={index}
              className="relative bg-white p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto w-full max-w-sm rounded-t-[90px] md:rounded-t-[100px] rounded-b-xl mt-24 min-h-[300px] md:min-h-auto"
            >
              {/* Icon Container */}
              <div className="absolute -top-[4.5rem] md:-top-[5.8rem] left-1/2 transform -translate-x-1/2">
                <img
                  loading="lazy"
                  src={card.image}
                  alt={card.title}
                  className="w-32  md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                />
              </div>

              {/* Content Container */}
              <div className="pt-12 md:pt-16">
                <Heading3
                  className={
                    "text-lg md:text-xl lg:text-xl xl:text-2xl font-bold py-5 text-left"
                  }
                  side={"left"}
                  title={card.title}
                />
                <p className="text-base md:text-lg text-gray-600">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default WhyInsugo;
