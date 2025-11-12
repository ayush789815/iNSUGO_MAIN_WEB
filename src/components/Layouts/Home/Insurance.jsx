import React from "react";
import { insuranceOptions } from "@utils/imagepath.js";
import { Heading, Heading2, IconWithHeadCard } from "../UtilsLayout";
import Button from "../../ui/Button";
import { HandleScrollForm } from "../../../utils/UtilsFuctions";

const InsuranceSolutions = React.memo(() => {
  return (
    // Root container with strict width control and no overflow
    <div className="w-screen max-w-full overflow-hidden bg-white mt-12 lg:mt-28">
      {/* Inner container with explicit max-width */}
      <div className="w-full min-w-[300px] max-w-[100vw] mx-auto">
        {/* Content wrapper with controlled padding */}
        <div className="w-full max-w-6xl mx-auto  px-3 sm:px-4">
          {/* Header content with controlled width */}
          <div className="w-full max-w-3xl mx-auto text-center">
            <Heading2 title={"Insurance Simplified Solutions"} />

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 text-center">
              Multiple insurance products often create confusion. Let the
              insurance experts guide you to pick the best suitable plans. With
              us, find the assistance that makes your insurance plans smart,
              practical, and helpful.
            </p>
          </div>

          {/* Grid with explicit small screen handling */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
            {insuranceOptions.map((option, index) => (
              <IconWithHeadCard
                bg={"#E9E9E9"}
                hoverIffect
                key={index}
                icon={option.icon}
                name={option.name}
                path={option?.path}
                icon_yellow={option?.icon_yellow}
              />
            ))}
          </div>

          <div className="w-full text-center my-4 sm:my-6">
            <Button className="text-sm px-4 py-2" onClick={HandleScrollForm}>
              Get In Touch To Know More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default InsuranceSolutions;
