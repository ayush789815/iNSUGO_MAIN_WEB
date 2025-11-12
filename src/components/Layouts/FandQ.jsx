import React from "react";
import { ExpendableList, Heading } from "./UtilsLayout";
import { AboutUs } from "../../utils/imagepath";

const FandQSection = React.memo(({ arr, img = AboutUs.Fram9, alt = "" }) => {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-12 md:py-16 relative mt-5 md:mt-10 lg:mt-20 overflow-hidden rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px]">
      {/* ✅ Image tag with alt text for accessibility */}
      {img && (
        <img
          src={img}
          alt={alt || "Insugo"}
          className="absolute inset-0 w-full h-full object-cover "
        />
      )}

      {/* ✅ Overlay to replicate backgroundBlendMode */}
      <div className="absolute inset-0 bg-[#333333] opacity-90 rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px] z-0"></div>

      {/* ✅ Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <Heading
            title={
              <>
                Have Questions?{" "}
                <span className="text-primary">we've got answers!</span>
              </>
            }
            className="text-3xl md:text-4xl font-bold text-white mb-2"
          />
        </div>

        <div className="space-y-4">
          {arr.map((item, index) => (
            <ExpendableList
              key={index}
              question={item.question}
              answer={item.answer}
              points={item?.points || []}
            />
          ))}
        </div>
      </div>
    </div>

    // <div
    //   className="px-4 md:px-6 lg:px-8 py-12 md:py-16 relative mt-5 md:mt-10 lg:mt-20"
    //   style={{
    //     backgroundImage: `url(${img})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundBlendMode: "overlay",
    //     backgroundColor: "rgba(0, 0, 0, 0.5)",
    //   }}
    // >
    //   <div className="absolute inset-0 bg-[#333333] opacity-60 rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px]"></div>
    //   <div className="relative z-10 max-w-4xl mx-auto">
    //     <div className="text-center mb-8 md:mb-12">
    //       <Heading
    //         title={
    //           <>
    //             Have Questions?{" "}
    //             <span className="text-primary"> we've got answers!</span>
    //           </>
    //         }
    //         className={"text-3xl md:text-4xl font-bold text-white mb-2"}
    //       />
    //     </div>

    //     <div className="space-y-4">
    //       {arr.map((item, index) => (
    //         <ExpendableList
    //           key={index}
    //           question={item.question}
    //           answer={item.answer}
    //           points={item?.points || []}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
});

export default FandQSection;
