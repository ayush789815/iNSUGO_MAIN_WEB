import React from "react";
import Button from "../../ui/Button.jsx";
import { NavigationDots } from "../UtilsLayout.jsx";
import { HandleScrollForm } from "../../../utils/UtilsFuctions.js";
import { MainPageData } from "../../../utils/constant.js";
import usePagination from "../../../Hook/UsePaginationHook.js";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Hero = React.memo(() => {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        style={{ borderRadius: "0 0 50px 50px" }}
        className="mySwiper min-h-full xl:min-h-[600px]"
      >
        {MainPageData?.map((v, i) => (
          <SwiperSlide key={i}>
            {/* <section
              style={{
                backgroundImage: `url(${v?.bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: v?.bgImg ? "" : "#fff",
                width: "100%",
              }}
              className="pt-10 md:pt-0 text-white flex flex-col items-center justify-center min-h-[600px]"
            > */}
            <section
              className="pt-10 md:pt-0 text-white flex flex-col items-center justify-center min-h-[600px] relative overflow-hidden"
              style={{
                backgroundColor: v?.bgImg ? "" : "#fff",
                width: "100%",
              }}
            >
              {/* Accessible image */}
              {v?.bgImg && (
                <>
                  <img
                    src={v?.bgImg}
                    alt="Insugo Home"
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                  />
                  {/* Optional overlay */}
                  <div className="absolute inset-0 bg-black opacity-50 -z-10" />
                </>
              )}
              <div
                style={{
                  opacity: v?.opacity == 0 ? 0 : 0.5,
                }}
                className={`absolute inset-0 ${
                  v?.bgImg ? "bg-[#333333]" : ""
                }  rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px]`}
              ></div>
              <div
                style={{ color: v?.color ? v?.color : "#fff" }}
                className="z-10 px-4 sm:px-6 lg:px-16 flex items-center"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                  {/* Content */}
                  <div className="text-left space-y-3 md:space-y-6 py-2 md:py-0">
                    <p className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                      {v?.title}
                    </p>
                    {/* <Heading title={"Covering Your Risks"} side={'left'}/> */}
                    <p className="text-sm sm:text-md lg:text-3xl opacity-90 max-w-2xl mt-0 md:mt-auto font-semibold">
                      {v?.desc}
                    </p>
                    <div className="pt-4">
                      <Button onClick={HandleScrollForm}>Get A Quote</Button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex justify-center md:justify-end order-first md:order-last">
                    {v?.img && (
                      <img
                        loading="lazy"
                        src={v?.img}
                        alt="Insugo Home"
                        className="w-full md:w-11/12 lg:w-full h-auto object-contain max-h-80 md:max-h-96"
                      />
                    )}
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
        {/* <style jsx>{`
          :global(.swiper-pagination-bullet) {
            @apply h-2 sm:h-3 rounded-full bg-gray-300 w-4 sm:w-6 transition-all duration-300;
          }
          :global(.swiper-pagination-bullet-active) {
            @apply bg-primary w-8 sm:w-10;
          }
        `}</style> */}
      </Swiper>
    </>
  );
});

export default Hero;
{
  /* 
{NavigationDotsData()?.length > 1 && (
  <div className="flex justify-center items-center gap-2 sm:gap-2 mt-6 sm:mt-8">
    {NavigationDotsData().map((_, index) => (
      <NavigationDots
        key={index}
        index={index}
        condition={index + 1 === currentSet}
        handleDotClick={handleSetChange}
      />
    ))}
  </div>
)} */
}

// import React from "react";
// import Button from "../../ui/Button.jsx";
// import {  NavigationDots } from "../UtilsLayout.jsx";
// import { HandleScrollForm } from "../../../utils/UtilsFuctions.js";
// import { MainPageData } from "../../../utils/constant.js";
// import usePagination from "../../../Hook/UsePaginationHook.js";

// const Hero = React.memo(() => {
//   const conditions = [
//     {
//       count: 1,
//       width: 1,
//     },
//   ];
//   const { currentSet, handleSetChange, VisibleArr, NavigationDotsData } =
//     usePagination(MainPageData, conditions);

//   return (
//     <section
//       className="pt-10 md:pt-0 bg-[#333333] text-white flex flex-col items-center justify-center min-h-[600px]"
//       style={{ borderRadius: "0 0 50px 50px" }}
//     >
//       {VisibleArr()?.map((v, i) => (
//         <div className="container mx-auto px-4 sm:px-6 lg:px-16" key={i}>
//           <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//             {/* Content */}
//             <div className="text-left space-y-3 md:space-y-6 py-2 md:py-0">
//               <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
//                 {v?.title}
//               </h1>
//               {/* <Heading title={"Covering Your Risks"} side={'left'}/> */}
//               <p className="text-sm sm:text-md lg:text-3xl font-light opacity-90 max-w-2xl mt-0 md:mt-auto">
//                 {v?.desc}
//               </p>
//               <div className="pt-4">
//                 <Button onClick={HandleScrollForm}>Get A Quote</Button>
//               </div>
//             </div>

//             {/* Image */}
//             <div className="flex justify-center md:justify-end order-first md:order-last">
//               <img
// loading = "lazy";
//                 src={v?.img}
//                 alt="Hero Illustration"
//                 className="w-full md:w-11/12 lg:w-full h-auto object-contain max-h-96 md:max-h-full"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//       {NavigationDotsData()?.length > 1 && (
//         <div className="flex justify-center items-center gap-2 sm:gap-2 mt-6 sm:mt-8">
//           {NavigationDotsData().map((_, index) => (
//             <NavigationDots
//               key={index}
//               index={index}
//               condition={index + 1 === currentSet}
//               handleDotClick={handleSetChange}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// });

// export default Hero;
