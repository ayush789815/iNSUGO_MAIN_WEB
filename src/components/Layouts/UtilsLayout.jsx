import React, { useEffect, useRef, useState } from "react";
import { Plus, Star } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import {
  base_url,
  GratuitySteps,
  IdeasLiabilityMain,
} from "../../utils/constant";
import { NewImagePath } from "../../utils/imagepath";
import Button from "../../components/ui/Button";
import usePagination from "../../Hook/UsePaginationHook";
import { GoDotFill } from "react-icons/go";
// import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import useScreenSizes from "../../Hook/useScreenSizes";
import { encode } from "base-64";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MaxWidthContainer = React.memo(({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-10xl flex flex-col gap-5 md:gap-10">{children}</div>
    </div>
  );
});

const MaxWidthContainerUpdate = React.memo(({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-10xl flex-1">
        <div className="flex flex-col  gap-5 md:gap-10 lg:gap-20 px-1 md:px-10 lg:px-16 xl:px-36 xxl:px-40">
          {children}
        </div>
      </div>
    </div>
  );
});

const HeroLayout = React.memo(
  ({
    img,
    title,
    alt = "",
    desc1,
    desc2,
    subtitle,
    mbClass = "mb-5 md:mb-24 lg:mb-28",
    Breadcrumb = {},
  }) => {
    const navigate = useNavigate();
    return (
      <div
        className={`h-[500px] md:h-[500px] flex justify-center items-center w-full relative bg-[#333333] rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px] overflow-hidden ${mbClass}`}
      >
        {/* Image as background */}
        <img
          src={img}
          alt={alt || title}
          className="absolute inset-0 w-full h-full object-cover rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px]"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#333333] opacity-80 rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px]"></div>

        {/* Content */}
        <div className="relative z-10 py-12 md:py-16 lg:py-24 px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {title && (
              <Heading
                title={title}
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white py-5 text-center"
              />
            )}
            {subtitle && (
              <h4 className="text-white text-md sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">
                {subtitle}
              </h4>
            )}
            {desc1 && <p className="text-white text-md md:text-xl">{desc1}</p>}
            {desc2 && (
              <p className="text-white text-md md:text-xl mt-5 md:mt-20">
                {desc2}
              </p>
            )}

            {Object.keys(Breadcrumb)?.length > 0 && (
              <p
                className={`text-white text-md md:text-xl ${
                  Breadcrumb?.mt ? Breadcrumb?.mt : ""
                }`}
              >
                {Breadcrumb?.item?.map((v, i) => (
                  <span
                    className="cursor-pointer"
                    key={i}
                    onClick={() => navigate(v?.path)}
                  >
                    {v?.name} /{" "}
                  </span>
                ))}
                {Breadcrumb.name || title}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
);

// const HeroLayout = React.memo(
//   ({
//     img,
//     title,
//     desc1,
//     desc2,
//     subtitle,
//     mbClass = "mb-5 md:mb-24 lg:mb-28",
//     Breadcrumb = {},
//   }) => {
//     const navigate = useNavigate();
//     return (
//       <div
//         className={`h-[500px] md:h-[500px] flex justify-center items-center w-full relative bg-[#333333] rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px]
//          ${mbClass}`}
//         style={{
//           backgroundImage: `url(${img})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-[#333333] opacity-80 rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px]"></div>
//         <div className="relative z-10 py-12 md:py-16 lg:py-24 px-4 md:px-6 text-center">
//           <div className="max-w-4xl mx-auto">
//             {title && (
//               <Heading
//                 title={title}
//                 className={
//                   "text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white py-5 text-center"
//                 }
//               />
//             )}
//             {subtitle && (
//               <h4 className="text-white text-md sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">
//                 {subtitle}
//               </h4>
//             )}
//             {desc1 && <p className="text-white text-md md:text-xl">{desc1}</p>}
//             {desc2 && (
//               <p className="text-white text-md md:text-xl mt-5 md:mt-20">
//                 {desc2}
//               </p>
//             )}

//             {Object.keys(Breadcrumb)?.length > 0 && (
//               <p
//                 className={`text-white text-md md:text-xl ${
//                   Breadcrumb?.mt ? Breadcrumb?.mt : ""
//                 } `}
//               >
//                 {Breadcrumb?.item?.map((v, i) => (
//                   <span
//                     className="cursor-pointer"
//                     key={i}
//                     onClick={() => navigate(v?.path)}
//                   >
//                     {v?.name} /{" "}
//                   </span>
//                 ))}
//                 {Breadcrumb.name || title}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
// );

const HeroBlogLayout = React.memo(
  ({ img, title, alt = "", mbClass = "mb-5" }) => {
    return (
      <div className="flex justify-center">
        <div
          className={`max-w-6xl rounded-[60px] md:rounded-[70px] lg:rounded-[80px] overflow-hidden mt-20 xl:mt-24 h-[500px] md:h-[500px] flex justify-center items-center w-full relative bg-[#333333] ${mbClass}`}
        >
          {/* Background image using img tag */}
          <img
            src={img}
            alt={alt || title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#333333] opacity-80"></div>

          {/* Content */}
          <div className="relative z-10 py-12 md:py-16 lg:py-24 px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              {title && (
                <Heading
                  title={title}
                  className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white py-5 text-center"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

// const HeroBlogLayout = React.memo(({ img, title, mbClass = "mb-5" }) => {
//   return (
//     <div className=" flex justify-center">
//       <div
//         className={`max-w-6xl rounded-[60px] md:rounded-[70px] lg:rounded-[80px] overflow-hidden mt-20 xl:mt-24 h-[500px] md:h-[500px] flex justify-center items-center w-full relative bg-[#333333]
//            ${mbClass}`}
//         style={{
//           backgroundImage: `url(${img})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-[#333333] opacity-80 "></div>
//         <div className="relative z-10 py-12 md:py-16 lg:py-24 px-4 md:px-6 text-center">
//           <div className="max-w-4xl mx-auto">
//             {title && (
//               <Heading
//                 title={title}
//                 className={
//                   "text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white py-5 text-center"
//                 }
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

const HeroLayoutBig = React.memo(
  ({
    img,
    title,
    desc1,
    desc2,
    subtitle,
    mbClass = "mb-16 md:mb-24 lg:mb-28",
    Breadcrumb = {},
  }) => {
    const navigate = useNavigate();
    return (
      <div
        className={`h-[400px] lg:h-[500px] xl:h-[600px] flex justify-center items-center w-full relative bg-[#333333] rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px] overflow-hidden ${mbClass}`}
      >
        {/* Background image using <img> */}
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#333333] opacity-60 rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px]"></div>

        {/* Content */}
        <div className="relative z-10 py-12 md:py-16 lg:py-24 px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {title && (
              <Heading
                title={title}
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white py-5 text-center"
              />
            )}
            {subtitle && (
              <h4 className="text-white text-md sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">
                {subtitle}
              </h4>
            )}
            {desc1 && <p className="text-white text-md md:text-xl">{desc1}</p>}
            {desc2 && (
              <p className="text-white text-md md:text-xl mt-5 md:mt-20">
                {desc2}
              </p>
            )}
            {Object.keys(Breadcrumb)?.length > 0 && (
              <p
                className={`text-white text-md md:text-xl ${
                  Breadcrumb?.mt ? Breadcrumb?.mt : ""
                }`}
              >
                {Breadcrumb?.item?.map((v, i) => (
                  <span
                    className="cursor-pointer"
                    key={i}
                    onClick={() => navigate(v?.path)}
                  >
                    {v?.name} /{" "}
                  </span>
                ))}
                {Breadcrumb.name || title}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
);

// const HeroLayoutBig = React.memo(
//   ({
//     img,
//     title,
//     desc1,
//     desc2,
//     subtitle,
//     mbClass = "mb-16 md:mb-24 lg:mb-28",
//     Breadcrumb = {},
//   }) => {
//     const navigate = useNavigate();
//     return (
//       <div
//         className={` h-[400px] lg:h-[500px] xl:h-[600px] flex justify-center items-center w-full  relative bg-[#333333] rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px] ${mbClass}`}
//         style={{
//           backgroundImage: `url(${img})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-[#333333] opacity-60 rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[50px]"></div>
//         <div className="relative z-10 py-12 md:py-16 lg:py-24 px-4 md:px-6 text-center">
//           <div className="max-w-4xl mx-auto">
//             {title && (
//               <Heading
//                 title={title}
//                 className={
//                   "text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white py-5 text-center"
//                 }
//               />
//             )}
//             {subtitle && (
//               <h4 className="text-white text-md sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">
//                 {subtitle}
//               </h4>
//             )}
//             {desc1 && <p className="text-white text-md md:text-xl">{desc1}</p>}
//             {/* {desc2 && (
//               <p className="text-white text-md md:text-xl mt-5 md:mt-20">
//                 {desc2}
//               </p>
//             )} */}
//             {desc2 && (
//               <p className="text-white text-md md:text-xl mt-5 md:mt-20">
//                 {desc2}
//               </p>
//             )}

//             {Object.keys(Breadcrumb)?.length > 0 && (
//               <p
//                 className={`text-white text-md md:text-xl ${
//                   Breadcrumb?.mt ? Breadcrumb?.mt : ""
//                 } `}
//               >
//                 {Breadcrumb?.item?.map((v, i) => (
//                   <span
//                     className="cursor-pointer"
//                     key={i}
//                     onClick={() => navigate(v?.path)}
//                   >
//                     {v?.name} /{" "}
//                   </span>
//                 ))}
//                 {Breadcrumb.name || title}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
// );

const Heading = React.memo(
  ({ title, side = "center", className, py = "py-5", children }) => {
    return (
      <h1
        className={
          className
            ? className
            : `text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold ${py} text-${side}`
        }
      >
        {title || children}
      </h1>
    );
  }
);
const Heading2 = React.memo(
  ({ title, side = "center", className, py = "py-5", children }) => {
    return (
      <h2
        className={
          className
            ? className
            : `text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold ${py} text-${side}`
        }
      >
        {title || children}
      </h2>
    );
  }
);
const Heading3 = React.memo(
  ({ title, side = "center", className, py = "py-5", children }) => {
    return (
      <h3
        className={
          className
            ? className
            : `text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold ${py} text-${side}`
        }
      >
        {title || children}
      </h3>
    );
  }
);
const Heading4 = React.memo(
  ({ title, side = "center", className, py = "py-5", children }) => {
    return (
      <h4
        className={
          className
            ? className
            : `text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold ${py} text-${side}`
        }
      >
        {title || children}
      </h4>
    );
  }
);

const FeaturesCard = React.memo(
  ({
    title,
    desc,
    shadow = "0px 0px 8px 0px #00000029",
    widthClass = "max-w-full md:max-w-[250px] min-w-full md:min-w-[200px]",
    icon,
    bg,
    hoverBg,
    className
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div
        className={`mx-auto px-3 py-5 rounded-lg flex flex-col gap-3 flex-1 transition-all duration-300 ${widthClass} ${className}`}
        style={{
          boxShadow: shadow,
          backgroundColor: isHovered ? hoverBg : bg,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {icon && <p className="text-sm font-bold text-left">{icon}</p>}
        {title && <p className="text-sm font-bold text-left">{title}</p>}
        {desc && <div className="text-sm text-center">{desc}</div>}
      </div>
    );
  }
);
const ExclusionList = React.memo(
  ({
    icon,
    listItom,
    color = "#000",
    bg = "#fff",
    bgImage,
    flexCount = 1,
    alt,
    doFontSize = "1rem",
  }) => {
    return (
      <div
        className="px-3 py-5 rounded-lg overflow-hidden flex flex-col gap-3 flex-1 relative"
        style={{
          flex: flexCount,
          boxShadow: "0px 0px 8px 0px #00000029",
          backgroundColor: bgImage ? "transparent" : bg,
        }}
      >
        {/* Use <img> as background image */}
        {bgImage && (
          <>
            <img
              src={bgImage}
              alt={alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#333333] opacity-60"></div>
          </>
        )}

        <div className="relative z-10">
          {icon && (
            <div className="flex justify-center items-center flex-1">
              <div
                className="flex justify-center items-center p-2 rounded-full h-[50px] w-[50px]"
                style={{ backgroundColor: color }}
              >
                {icon}
              </div>
            </div>
          )}

          <ul
            className={`custom-list flex flex-col gap-5 ${icon ? "mt-3" : ""}`}
          >
            {listItom.map((v, i) => (
              <li
                key={i}
                className="flex items-center"
                style={{
                  color: bgImage ? color : "#000",
                }}
              >
                <GoDotFill
                  color={bgImage ? color : "#000"}
                  size={doFontSize || 16}
                  style={{ marginRight: "0.5rem" }}
                />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
);

// const ExclusionList = React.memo(
//   ({
//     icon,
//     listItom,
//     color = "#000",
//     bg = "#fff",
//     bgImage,
//     flexCount = 1,
//     doFontSize = "1rem",
//   }) => {
//     const BgImageStyle = {
//       backgroundImage: `url(${bgImage})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//     };
//     return (
//       <div
//         className={
//           "px-3 py-5 rounded-lg overflow-hidden flex flex-col gap-3 flex-1 relative"
//         }
//         style={{
//           flex: flexCount,
//           boxShadow: "0px 0px 8px 0px #00000029",
//           backgroundColor: bg ? bg : "",
//           ...(bgImage && BgImageStyle),
//         }}
//       >
//         {bgImage && (
//           <div className="absolute inset-0 bg-[#333333] opacity-60 "></div>
//         )}
//         <div className="z-10">
//           {icon && (
//             <div className="flex justify-center items-center flex-1">
//               <div
//                 className="flex justify-center items-center p-2 rounded-full h-[50px] w-[50px]"
//                 style={{ backgroundColor: color ? color : "#000" }}
//               >
//                 {icon}
//               </div>
//             </div>
//           )}

//           <ul
//             className={`custom-list flex flex-col gap-5 ${icon ? "mt-3" : ""}`}
//           >
//             {listItom.map((v, i) => (
//               <li
//                 key={i}
//                 className="flex items-center "
//                 style={{
//                   color: bgImage ? color : "#000",
//                 }}
//               >
//                 {/* <span
//                   style={{
//                     color: color ? color : "#000",
//                     fontSize: doFontSize,
//                     marginRight: "0.5em",
//                   }}
//                 >
//                   •
//                 </span> */}
//                 <GoDotFill
//                   color={bgImage ? color : "#000"}
//                   size={doFontSize || 16}
//                   style={{
//                     marginRight: "0.5rem",
//                   }}
//                 />
//                 <span> {v}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// );

const BecauseCard = React.memo(({ title, desc, img }) => {
  return (
    <div
      className="px-3 py-5 rounded-3xl flex flex-col gap-3 flex-1 max-w-[360px] h-full"
      style={{
        boxShadow: "0px 0px 8px 0px #00000029",
        borderRadius: "60px",
      }}
    >
      <div
        style={{ borderRadius: "60px", overflow: "hidden" }}
        className="flex justify-center items-center"
      >
        <img
          loading="lazy"
          src={img}
          alt={title}
          style={{ borderRadius: "60px", width: "100%", height: "auto" }}
        />
      </div>
      <div className="px-3 py-5 flex flex-col gap-3 flex-1">
        <p className="text-sm md:text-lg font-bold text-left">{title}</p>
        <div className="text-sm text-left">{desc}</div>
      </div>
    </div>
  );
});

const BecauseCardFull = React.memo(({ arr, title, show = false }) => {
  const conditions = [
    {
      count: 3,
      width: 1023,
    },
    {
      count: 2,
      width: 639,
    },
  ];

  const {
    currentSet,
    totalSets,
    handleSetChange,
    VisibleArr,
    NavigationDotsData,
  } = usePagination(arr, conditions);

  return (
    <div className="flex flex-col  gap-8 w-full ">
      <Heading title={title} />
      {/* <div className="flex gap-5 w-full justify-center flex-col sm:flex-row h-full "> */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full h-full justify-center">
        {(show ? VisibleArr() : arr)?.map((val, ind) => (
          <div className="flex-1 flex justify-center items-center" key={ind}>
            <BecauseCard
              title={val?.title}
              desc={val?.description}
              img={val?.image}
            />
          </div>
        ))}
        {NavigationDotsData()?.length > 1 && show && (
          <>
            {NavigationDotsData().map((_, index) => (
              <NavigationDots2
                totalSets={totalSets}
                key={index}
                index={index}
                currentSet={currentSet}
                condition={index + 1 === currentSet}
                handleDotClick={handleSetChange}
              />
            ))}
          </>
        )}
      </div>
      {show && (
        <>
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
          )}
        </>
      )}
    </div>
  );
});

const BothSideCard = React.memo(({ content, children, className }) => {
  return (
    <div
      className={`flex gap-4 md:gap-6 lg:gap-20 ${className} justify-between`}
    >
      {content}
      {children}
    </div>
  );
});

const BasicList = React.memo(({ title, desc }) => {
  return (
    <div
      style={{
        boxShadow: "0px 0px 8px 0px #00000029",
        borderRadius: "10px",
      }}
      className="p-3"
    >
      <span className="font-bold">{title}</span> {desc}
    </div>
  );
});

const BasicListLife = React.memo(
  ({ title, desc, bg, shadow, onClick, active }) => {
    return (
      <div
        style={{
          backgroundColor: active ? bg : "",
          boxShadow: shadow,
          cursor: onClick ? "pointer" : "",
        }}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
        className={`p-3 ${
          bg ? `bg-[#F2F0F0]` : ""
        } hover:bg-primary rounded-[8px] hover:rounded-[16px] hover:rounded-br-none ${
          active ? "rounded-br-none" : ""
        }`}
      >
        {title && <span className="font-bold">{title}</span>} {desc}
      </div>
    );
  }
);

const FactsAndFictionCard = React.memo(({ faction, fact }) => {
  return (
    <div className="flex flex-col gap-3 ">
      {faction && (
        <div className="p-3 bg-secondary rounded-[16px] rounded-br-none max-w-full md:max-w-[60%] md:mr-[40%]">
          <span className="font-bold"> Fiction :</span> {faction}
        </div>
      )}
      {fact && (
        <div className=" p-3 bg-primary rounded-[16px] rounded-br-none max-w-full md:max-w-[60%] md:ml-[40%]">
          <span className="font-bold"> Fact :</span> {fact}
        </div>
      )}
    </div>
  );
});

const ExpendableList = React.memo(({ question, answer, points, htmlData }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-[#FFFFFFB2] rounded-lg shadow-lg">
      <button
        className="w-full px-4 md:px-8 py-4 md:py-6 text-left flex justify-between items-center"
        onClick={() => setShow(!show)}
      >
        <span className="font-medium text-lg md:text-xl pr-4">{question}</span>
        <Plus
          className={`w-6 h-6 flex-shrink-0 transform transition-transform cursor-pointer ${
            show ? "rotate-45" : ""
          }`}
        />
      </button>
      {show && (
        <div className="px-4 md:px-8 pb-4 md:pb-6">
          {answer?.split("\n").map((v, i) => (
            <p key={i} className="py-1 text-gray-600 text-base md:text-lg">
              {v}
            </p>
          ))}

          {points?.length > 0 && (
            <ul
              className={`custom-list flex flex-col gap-2 
              `}
            >
              {points?.map((v, i) => (
                <>
                  {
                    <li
                      key={i}
                      className="flex items-center"
                      style={{
                        color: "#000",
                      }}
                    >
                      <span
                        style={{
                          color: "#000",
                          fontSize: "",
                          marginRight: "0.5em",
                        }}
                      >
                        •
                      </span>
                      <span> {v?.split("\n")?.[0]}</span>
                    </li>
                  }
                  {v?.split("\n")?.length > 1 && (
                    <p className="py-1 text-gray-600 text-base md:text-lg">
                      {v?.split("\n")?.[1]}
                    </p>
                  )}
                </>
              ))}
            </ul>
          )}

          {htmlData && (
            <p
              className="up_encoded py-1 px-3 text-gray-600 text-base md:text-lg"
              dangerouslySetInnerHTML={{ __html: htmlData }}
            ></p>
          )}
        </div>
      )}
    </div>
  );
});

const IconWithHeadCard = React.memo(
  ({
    icon,
    name,
    path,
    bg = "",
    onClick,
    active,
    hoverIffect,
    icon_yellow,
  }) => {
    const [activeIndex, setActiveIndex] = useState("");
    const navigate = useNavigate();
    return (
      <div
        style={{
          boxShadow: "0px 0px 4px 0px #0000003D",
          backgroundColor: active || activeIndex == name ? "" : bg,
          // maxWidth: "200px",
          width: "calc(100% - 20px)",
        }}
        onMouseEnter={() => {
          if (hoverIffect) {
            setActiveIndex(name);
          }
        }}
        onMouseLeave={() => {
          if (hoverIffect) {
            setActiveIndex("");
          }
        }}
        onClick={() => {
          if (path) {
            navigate(path);
          }
          if (onClick) {
            onClick();
          }
        }}
        className={`flex flex-col items-center justify-center ${
          active || activeIndex == name ? "bg-primary" : "bg-white"
        } cursor-pointer border border-gray-200 rounded-xl hover: transition-all duration-300 p-2 sm:p-3 w-full  h-full flex-1 `}
      >
        <div className="w-16 md:w-18 lg:w-20 aspect-square mb-4">
          <img
            src={
              (active || activeIndex == name) && icon_yellow
                ? icon_yellow
                : icon
            }
            alt={name}
            className="p-2 w-full h-full object-contain "
          />
        </div>
        {/* <h2  className="text-sm sm:text-base md:text-md lg:text-lg font-bold text-gray-700 text-center">
          {name}
        </h2> */}
        <p className="text-sm sm:text-base md:text-md lg:text-lg font-bold text-gray-700 text-center">
          {name}
        </p>
      </div>
    );
  }
);

const InsuranceAuditCard = React.memo(
  ({ title, desc, img, bg = "", hoverIffect }) => {
    const [activeIndex, setActiveIndex] = useState("");
    return (
      <div
        style={{
          boxShadow: "0px 0px 8px 0px #00000029",
          backgroundColor: activeIndex == title ? "" : bg,
          border: bg ? `2px solid ${bg}` : "",
        }}
        onMouseEnter={() => {
          if (hoverIffect) {
            setActiveIndex(title);
          }
        }}
        onMouseLeave={() => {
          if (hoverIffect) {
            setActiveIndex("");
          }
        }}
        className=" text-left p-8  rounded-xl border-2 border-gray-100 
          hover:shadow-xl transition-all duration-300 
         hover:border-primary  hover:bg-primary group relative 
         hover:-translate-y-1 cursor-pointer "
      >
        <div
          className="w-16 h-16  mb-6 p-4  rounded-full
            group-hover:bg-yellow-100 transition-all duration-300"
        >
          <img src={img} alt={title} className="w-full h-full object-contain" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-600">{desc}</p>
      </div>
    );
  }
);

const ManagingClaimsCard = React.memo(
  ({ title = "Managing the Claims", desc1, desc2, desc3, img }) => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="flex justify-center">
            <img
              src={img}
              alt="Claims Management"
              className="max-w-full h-auto rounded-lg "
            />
          </div>
          <div className="space-y-4">
            <Heading title={title} side={"left"} />
            {desc1 && (
              <p className="text-base md:text-lg text-gray-600">{desc1}</p>
            )}
            {desc2 && (
              <p className="text-base md:text-lg text-gray-600">{desc2}</p>
            )}
            {desc3 && (
              <p className="text-base md:text-lg text-gray-600">{desc3}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
);

const ProjectinsuCard = React.memo(({ title, desc, arr }) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="max-w-7xl mx-auto flex flex-col-reverse  lg:flex-row gap-8 lg:gap-16">
        <div className="w-full lg:w-[500px] space-y-4">
          {arr.map((type) => (
            <div
              key={type}
              style={{
                boxShadow: " 0px 2px 8px 0px #00000029",
              }}
              className="bg-white rounded-2xl  p-4 md:p-6 border border-gray-100"
            >
              <p className="text-lg md:text-xl text-gray-800 font-medium">
                {type}
              </p>
            </div>
          ))}
        </div>

        <div className="flex-1">
          <Heading
            title={title}
            side={"left py-2 md:py-2 max-w-full max-w-[600px]"}
          />
          <p className="text-base md:text-lg text-gray-600 max-w-[600px] leading-relaxed text-justify md:text-left">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
});

const ProjectCard2WithImages = React.memo(
  ({
    one = false,
    two = false,
    images,
    arr,
    title,
    desc,
    title2,
    side = false,
  }) => {
    const conditions = [
      {
        count: two ? 4 : 8,
        width: 1500,
      },
      {
        count: two ? 3 : 6,
        width: 1024,
      },
      {
        count: two ? 1 : 2,
        width: 0,
      },
    ];

    const {
      currentSet,
      totalSets,
      handleSetChange,
      VisibleArr,
      NavigationDotsData,
    } = usePagination(arr, conditions);
    return (
      <div
        className="flex flex-col gap-8 w-full"
        style={{
          gap: "2rem",
        }}
      >
        <div className="flex flex-col gap-5 items-center ">
          {title && (
            <Heading
              className={
                " text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center max-w-full md:max-w-[70%]"
              }
              title={title}
            />
          )}
          {title2 && (
            <Heading
              className={
                " text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center max-w-full md:max-w-[70%]"
              }
              title={title2}
            />
          )}
          {desc && (
            <p
              cla
              className="text-center   px-0 lg:px-10  max-w-full md:max-w-[70%]"
            >
              {desc}
            </p>
          )}
        </div>

        <div
          className={`flex ${
            side
              ? " flex-col-reverse  lg:flex-row-reverse"
              : " flex-col  lg:flex-row"
          } gap-4 lg:gap-8 max-h-full xl:max-h-[450px]   `}
        >
          <div className="flex-1 flex flex-row gap-4 items-center justify-center h-full xl:max-h-[450px]">
            {one || two ? (
              <img
                src={images[0].src}
                alt={images[0].alt || title}
                className={`${
                  one || two
                    ? "rounded-3xl"
                    : "rounded-bl-2xl rounded-tr-3xl rounded-br-3xl"
                } object-cover w-[180px] md:w-[220px] flex-1  h-full  xl:max-h-[500px]`}
              />
            ) : (
              <>
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="rounded-bl-2xl rounded-tr-3xl rounded-br-3xl object-cover w-[180px] md:w-[220px] flex-1  h-full  xl:max-h-[500px] "
                />
                <div className="flex flex-col gap-4 flex-1 ">
                  <img
                    src={images[1].src}
                    alt={images[1].alt}
                    className="max-h-[300px] lg:max-h-[250px]  rounded-tl-3xl rounded-bl-3xl object-cover w-full"
                  />
                  <img
                    src={images[2].src}
                    alt={images[2].alt}
                    className="max-h-[300px] lg:max-h-[250px]  rounded-tl-3xl rounded-bl-3xl  object-cover w-full"
                  />
                </div>
              </>
            )}
          </div>

          <div
            style={{
              flex: two ? 1 : one ? 2 : "",
            }}
            className="flex-1 flex-col gap-4"
          >
            <div
              className={`flex-1 ${
                two
                  ? "grid grid-cols-1 sm:grid-cols-1"
                  : "grid grid-cols-1 sm:grid-cols-2"
              }  gap-4 place-items-center relative`}
            >
              {VisibleArr()?.map((v, i) => (
                <div
                  key={i}
                  className="w-full bg-[#E9E9E9] rounded-xl h-auto lg:h-[100px] p-4 lg:p-6  border border-gray-100 flex justify-start items-center"
                >
                  <span className="text-base md:text-lg text-gray-800">
                    {v?.title && (
                      <span className="text-base font-bold md:text-lg text-gray-800">
                        {v?.title} :
                      </span>
                    )}{" "}
                    {v?.text || v?.desc}
                  </span>
                </div>
              ))}
              {NavigationDotsData()?.length > 1 && (
                <>
                  {NavigationDotsData()?.map((_, index) => (
                    <NavigationDots2
                      left={"left-1 md:-left-5"}
                      right={"right-1 md:-right-5"}
                      totalSets={totalSets}
                      key={index}
                      index={index}
                      currentSet={currentSet}
                      condition={index + 1 === currentSet}
                      handleDotClick={handleSetChange}
                    />
                  ))}
                </>
              )}
            </div>
            {NavigationDotsData()?.length > 1 && (
              <div className="flex justify-center items-center gap-2 sm:gap-2 mt-6 sm:mt-8">
                {NavigationDotsData()?.map((_, index) => (
                  <NavigationDots
                    key={index}
                    index={index}
                    condition={index + 1 === currentSet}
                    handleDotClick={handleSetChange}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

const MenuWrapper = React.memo(
  ({ children, side = "0px", top = false, data = true }) => {
    const topData = side == "0px" ? "full" : "0";
    const pxData = side != "0px" ? 4 : 1;
    return (
      <div
        style={{
          left: side,
          [top ? "bottom" : "top"]: side == "0px" ? "100%" : "0",
          zIndex: 52,
        }}
        className={`absolute  py-4 px-${pxData}   `}
      >
        <ul
          className={
            "bg-[#333333] text-white py-3 px-4 shadow-lg rounded-md border border-[#333333] w-[200px] min-w-max"
          }
        >
          {children}
        </ul>
      </div>
    );
  }
);

const MenuItem = React.memo(({ title, to, onClick }) => {
  return (
    <li
      style={{ cursor: "pointer" }}
      className="mb-2 hover:bg-gray-700 rounded px-2 py-1 cursor-pointer  w-full"
    >
      <Link
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
        cursor={"pointer"}
        style={{ cursor: "pointer" }}
        to={to}
        className=" cursor-pointer block w-full hover:text-primary"
      >
        {title}
      </Link>
    </li>
  );
});

const StarRating = React.memo(({ rating, isActive }) => (
  <div className="flex justify-center gap-1">
    {[...Array(rating)].map((_, index) => (
      <Star
        key={index}
        className={`${
          isActive ? "text-black transform scale-110" : "text-primary"
        } transition-all duration-300`}
        size={isActive ? 24 : 20}
        fill="currentColor"
      />
    ))}
  </div>
));

const NavigationDots = React.memo(
  ({ handleDotClick, index, condition, value }) => {
    return (
      <button
        className={`h-2 rounded-full transition-all duration-300 ${
          condition ? "bg-primary w-8 sm:w-10" : "bg-gray-300 w-4 sm:w-6"
        }`}
        onClick={() => handleDotClick(index + 1)}
        aria-label={`View testimonial ${index + 1}`}
      ></button>
    );
  }
);
const NavigationDots2 = React.memo(
  ({
    handleDotClick,
    currentSet,
    totalSets,
    not_adjust_class,
    left = "left-0 md:left-4",
    right = "right-0 md:right-4",
  }) => {
    return (
      <>
        <button
          onClick={() => {
            if (currentSet == 1) {
              handleDotClick(totalSets);
            } else {
              handleDotClick(currentSet - 1);
            }
          }}
          className={`${left} absolute top-1/2 transform -translate-y-1/2 bg-primary text-black p-3 rounded-full shadow-lg z-10`}
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          // onClick={() => handleDotClick(currentSet + 1)}
          onClick={() => {
            if (currentSet == totalSets) {
              handleDotClick(1);
            } else {
              handleDotClick(currentSet + 1);
            }
          }}
          className={`${right} absolute  top-1/2 transform -translate-y-1/2 bg-primary text-black p-3 rounded-full shadow-lg z-10`}
        >
          <FaArrowRight size={20} />
        </button>
      </>
    );
  }
);

const ConditionIcons = React.memo(({ i }) => {
  return i == 0 ? (
    <IoCheckmarkOutline color="#fff" size={30} />
  ) : i == 1 ? (
    <RxCross2 color="#fff" size={30} />
  ) : (
    ""
  );
});

const BlogComponent = React.memo(
  ({ title, desc, desc1, desc2, desc3, maxW = "max-w-4xl" }) => {
    return (
      <div className="flex flex-col items-center gap-5">
        {title && <Heading title={title} />}
        {desc && <p className={`${maxW} text-center`}>{desc}</p>}
        {desc1 && <p className={`${maxW} text-center `}>{desc1}</p>}
        {desc2 && <p className={`${maxW} text-center `}>{desc2}</p>}
        {desc3 && <p className={`${maxW} text-center `}>{desc3}</p>}
      </div>
    );
  }
);

const LiabilityMain = React.memo(
  ({
    arr = IdeasLiabilityMain,
    title,
    desc,
    desc2,
    maxH = "md:max-h-[300px]",
    scrollNone = false,
    base_name = "",
  }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    return (
      <BothSideCard
        className={`flex-col-reverse md:flex-row max-h-full ${maxH} `}
        content={
          <div
            style={{ flex: 2 }}
            className={`${
              scrollNone ? "" : "overflow-y-scroll left-scrollbar"
            } flex-1 `}
          >
            <div className="flex flex-col gap-4 pl-2 pr-2 pt-1 pb-1">
              {arr.map((v, i) => (
                <React.Fragment key={i}>
                  {pathname ==
                    `/corporate/${v
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/&+/g, "and")}` ||
                  pathname ==
                    `/corporate/${base_name
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/&+/g, "and")}/${v
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/&+/g, "and")}` ? (
                    ""
                  ) : (
                    <BasicListLife
                      onClick={() => {
                        if (v == base_name) {
                          navigate(
                            `/corporate/${v
                              .toLowerCase()
                              .replace(/\s+/g, "-")
                              .replace(/&+/g, "and")}`
                          );
                        } else {
                          navigate(
                            `/corporate/${base_name
                              .toLowerCase()
                              .replace(/\s+/g, "-")
                              .replace(/&+/g, "and")}/${v
                              .toLowerCase()
                              .replace(/\s+/g, "-")
                              .replace(/&+/g, "and")}`
                          );
                        }
                      }}
                      shadow={"0px 2px 8px 0px #00000029"}
                      // bg={"#fff"}
                      desc={v}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        }
      >
        <div className="text-center md:text-left " style={{ flex: 2 }}>
          {title && <Heading py={"pt-0 pb-3"} title={title} side={"left"} />}
          {desc && <p>{desc}</p>}
          {desc2 && <p className="mt-4">{desc2}</p>}
        </div>
      </BothSideCard>
    );
  }
);

const CorporateNewCard = React.memo(
  ({ arr, title, desc, desc2, base_name = "" }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { isGreaterThan1024 } = useScreenSizes([1024]);
    const [swiperKey, setSwiperKey] = useState(0);

    useEffect(() => {
      setSwiperKey((prevKey) => prevKey + 1);
      setTimeout(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
          swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
          swiperRef.current.swiper.navigation.init();
          swiperRef.current.swiper.navigation.update();
        }
      }, 100);
    }, [arr]);
    return (
      <div className="flex flex-col gap-4 md:gap-10">
        <div style={{ flex: 1 }}>
          <div className="flex relative">
            <Swiper
              key={swiperKey}
              ref={swiperRef}
              loop={true}
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay, Navigation]}
              className="corporate_swiper max-w-[60vw]  md:min-w-[100%] lg:min-w-[100%] relative"
              wrapperClass={
                arr.length < 3 && isGreaterThan1024
                  ? "flex justify-center px-4 w-[calc(100% - 30px)]"
                  : " w-[calc(100% - 30px)] px-4"
              }
              centeredSlides={true}
              breakpoints={{
                0: {
                  slidesPerView: 1, // 0px to 500px
                  spaceBetween: 5,
                  centeredSlides: arr?.length > 1,
                },
                501: {
                  slidesPerView: 3, // 501px to 1023px
                  spaceBetween: 10,
                  centeredSlides: arr?.length > 3,
                },
                1024: {
                  // slidesPerView: arr.length > 5 ?  5: arr.length, // 1024px and above
                  slidesPerView: 3, // 1024px and above
                  spaceBetween: 20,
                  centeredSlides: arr?.length > 3,
                },
              }}
            >
              {arr.map((v, i) => (
                <SwiperSlide key={i} style={{ width: "" }}>
                  <IconWithHeadCard
                    hoverIffect
                    active={
                      pathname ==
                      `/corporate/${base_name
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/&+/g, "and")}/${v?.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/&+/g, "and")}`
                    }
                    onClick={() => {
                      if (v?.name == base_name) {
                        navigate(
                          `/corporate/${v?.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/&+/g, "and")}`
                        );
                      } else {
                        navigate(
                          `/corporate/${base_name
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/&+/g, "and")}/${v?.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/&+/g, "and")}`
                        );
                      }
                    }}
                    icon={v?.icon}
                    name={v?.name}
                    bg={"#E9E9E9"}
                    icon_yellow={v?.icon_yellow}
                  />
                </SwiperSlide>
                //   )}
                // </React.Fragment>
              ))}
            </Swiper>
            <button
              ref={prevRef}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-black p-3 rounded-full shadow-lg z-10"
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              ref={nextRef}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-black p-3 rounded-full shadow-lg z-10"
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
        {/* <BothSideCard
        className={`flex-col-reverse md:flex-row max-h-full ${maxH} `}
        content={
          <div
            style={{ flex: 2 }}
            className={`${
              scrollNone ? "" : "overflow-y-scroll left-scrollbar"
            } flex-1 `}
          >
            <div className="flex flex-col gap-4 pl-2 pr-2 pt-1 pb-1">
              {arr.map((v, i) => (
                <React.Fragment key={i}>
                  {pathname ==
                    `/corporate/${v
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/&+/g, "and")}` ||
                  pathname ==
                    `/corporate/${base_name
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/&+/g, "and")}/${v
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/&+/g, "and")}` ? (
                    ""
                  ) : (
                    <BasicListLife
                      onClick={() => {
                        if (v == base_name) {
                          navigate(
                            `/corporate/${v
                              .toLowerCase()
                              .replace(/\s+/g, "-")
                              .replace(/&+/g, "and")}`
                          );
                        } else {
                          navigate(
                            `/corporate/${base_name
                              .toLowerCase()
                              .replace(/\s+/g, "-")
                              .replace(/&+/g, "and")}/${v
                              .toLowerCase()
                              .replace(/\s+/g, "-")
                              .replace(/&+/g, "and")}`
                          );
                        }
                      }}
                      shadow={"0px 2px 8px 0px #00000029"}
                      // bg={"#fff"}
                      desc={v}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        }
      > */}
        <div
          className="text-center md:text-left flex flex-col items-center  "
          style={{ flex: 2 }}
        >
          {title && <Heading py={"pt-0 pb-3"} title={title} side={"left"} />}
          {desc && <p className="max-w-[80%] text-center">{desc}</p>}
          {desc2 && <p className="mt-4">{desc2}</p>}
        </div>
        {/* </BothSideCard> */}
      </div>
    );
  }
);

const StepperMain = React.memo(({ steps = GratuitySteps }) => {
  return (
    <div className="flex flex-col gap-3">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-col gap-3 lg:gap-10  ${
            index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }  `}
        >
          <div
            className={`bg-secondary rounded-[12px]  flex flex-col gap-2 items-center py-3 px-5 flex-1
            ${index % 2 == 0 ? "lg:rounded-br-[0px]" : "rounded-bl-[0px]"}
            `}
          >
            <div className="step-title font-bold">{step.title}</div>
            <div className="step-description">{step.description}</div>
          </div>
          <div
            className={`flex-1 flex ${
              index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <div
              className={`flex-1 border-dashed border-black hidden lg:flex lg:items-center ${
                index % 2 == 0 ? "" : "lg: rotate-180"
              }  `}
              style={{
                display: index + 1 == steps?.length ? "none" : "",
              }}
            >
              <img
                className=""
                alt={step.title}
                src={NewImagePath?.StepsLine1}
              />
            </div>
            <div
              style={{
                display: index + 1 == steps?.length ? "none" : "",
              }}
              className={`flex-1 border-dashed border-black flex   items-end  justify-center  ${
                index % 2 == 0 ? "lg:justify-start" : "lg:justify-end"
              }  `}
            >
              <img
                className="max-w-[15px] lg:max-w-[5px] max-h-[60px] lg:max-h-auto h-full lg:h-1/2 lg:min-h-[50%]"
                // style={{ height: "50%" }}
                alt={step.title}
                src={NewImagePath?.StepsLine2}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

const OpeningCard = React.memo(({ data, onClick }) => {
  return (
    <div
      style={{
        boxShadow: "0px 0px 8px 0px #00000029",
      }}
      className="flex flex-col justify-between p-3 py-6 lg:p-8  rounded-[12px] gap-6 w-full flex-1"
    >
      <div className="flex flex-col gap-6">
        <p className="font-bold">{data?.title}</p>
        <div className="min-w-full min-h-[2px] bg-[#CFCFCF] " />
        <div className="flex gap-5 flex-col">
          <p>Responsibilities:</p>
          <div
            className="up_encoded"
            dangerouslySetInnerHTML={{ __html: data?.responsibility }}
          />
        </div>
        <div className="min-w-full min-h-[2px] bg-[#CFCFCF] " />
      </div>
      <div className="flex justify-between items-center">
        <div>
          Location : {data?.job_type} ({data?.location})
        </div>
        <Button onClick={onClick}>Apply Now</Button>
      </div>
    </div>
  );
});

const BlogCard = React.memo(({ data }) => {
  const navigate = useNavigate();
  
  // Create URL-friendly slug from title and append encoded ID
  const createSlugWithId = (title, id) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    // Remove '=' padding from encoded ID for cleaner URL
    const encodedId = encode(id).replace(/=/g, '');
    return `${slug}-${encodedId}`;
  };

  return (
    <div
      style={{
        boxShadow: "0px 0px 8px 0px #00000029",
      }}
      className="flex flex-col p-3 py-6 lg:p-8 rounded-[12px] gap-6 w-full flex-1 min-w-full"
    >
      <img
        className="rounded-[12px]"
        src={data?.image}
        alt={data?.alt_text}
      />
      <div className="font-bold">{data?.title}</div>
      <div className="line-clamp-2 text-justify">{data?.desc}</div>
      <Button
        width={"max-w-fit"}
        onClick={() => 
          navigate(`/blog-details/${createSlugWithId(data?.title, data?.id)}`)
        }
      >
        Read Full Blog
      </Button>
    </div>
  );
});
const BackImageListCard = React.memo(
  ({ leftArr, rightArr = [], bgImg, scroll = "", imgAlt = "" }) => {
    const [show, setshow] = useState(1);

    return (
      <div className="flex flex-col gap-8 w-full ">
        <BothSideCard
          className={`flex-col-reverse md:flex-row max-h-full md:max-h-[280px] `}
          content={
            <div style={{ flex: 2 }} className={`flex-1 ${scroll}`}>
              <div className={`flex flex-col gap-4 pl-2 `}>
                {leftArr.map((v, i) => (
                  <BasicListLife
                    onClick={() => setshow(i + 1)}
                    bg={"#ffcc29"}
                    key={i}
                    active={show == i + 1}
                    desc={v}
                  />
                ))}
              </div>
            </div>
          }
        >
          <ExclusionList
            doFontSize={"1rem"}
            flexCount={3}
            color={"#fff"}
            bgImage={bgImg}
            alt={imgAlt}
            listItom={rightArr[show - 1]}
          />
        </BothSideCard>
      </div>
    );
  }
);

const TestimonialCard = React.memo(({ testimonial, index }) => {
  const [hoverIndex, sethoverIndex] = useState();

  return (
    <div
      onMouseEnter={() => sethoverIndex(index)}
      onMouseLeave={() => sethoverIndex()}
      className={`transition-all duration-300 p-6 lg:p-8  text-center flex-shrink-0 
                   hover:bg-primary hover:scale-110 hover:text-black rounded-[50px] hover:rounded-tl-[0px]
                  z-50`}
      style={{
        width: "clamp(300px, 23vw, 400px)",
        boxShadow: "0px 0px 2.5px 0px #0000003D",
      }}
    >
      <h4 className="font-bold text-xl lg:text-2xl mb-4">{testimonial.name}</h4>
      <div className="mb-6 text-primary group-hover:hover:text-black">
        <StarRating
          rating={Number(testimonial.rating)}
          isActive={hoverIndex == index}
        />
      </div>
      <p
        className="text-base lg:text-sm"
        style={{ fontSize: hoverIndex == index ? "16px" : "" }}
      >
        {testimonial.short_note}
      </p>
    </div>
  );
});

const FooterIcon = React.memo(({ src, alt, size = 24 }) => (
  <img
    src={src}
    alt={alt}
    className="rounded"
    style={{ width: size, height: size }}
  />
));

const MediaCard = React.memo(
  ({ title, data, onClick, type, setUrl, setOpen, setType }) => {
    const [loadMore, setLoadMore] = useState(false);

    return (
      <>
        {data?.length > 0 && (
          <div className="flex flex-col gap-4">
            {title && <Heading side={"left"}>{title}</Heading>}
            <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-3 gap-y-5 justify-center min-w-full min-h-[300px]">
              {data?.slice(0, loadMore ? data?.length : 6).map((v, i) => (
                <>
                  {type == "video" ? (
                    <div
                      onClick={() => {
                        setUrl(v);
                        setOpen(true);
                      }}
                      style={{ width: "100%", height: "100%" }}
                      dangerouslySetInnerHTML={{
                        __html: v?.video_url.replace(
                          /<iframe /,
                          '<iframe style="border-radius:10px; width:100%; height:100%; pointer-events: none; cursor:pointer;" '
                        ),
                      }}
                    />
                  ) : type == "image" ? (
                    <img
                      onClick={() => {
                        setUrl(v);
                        setOpen(true);
                      }}
                      key={i}
                      className={
                        "rounded-[10px] w-full md:w-auto cursor-pointer"
                      }
                      src={base_url + "insugo/" + v?.image}
                      alt={v?.alt_text}
                    />
                  ) : (
                    ""
                  )}
                </>
              ))}
            </div>
            <div className="flex justify-center">
              {data?.length > 6 && (
                <Button
                  width={"max-w-fit "}
                  bg={"#333333"}
                  color={"#fff"}
                  onClick={() => {
                    setLoadMore(!loadMore);
                  }}
                >
                  {loadMore ? "Show Less" : "Load More"}
                </Button>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
);

export {
  MaxWidthContainer,
  MaxWidthContainerUpdate,
  HeroBlogLayout,
  ConditionIcons,
  BasicListLife,
  FactsAndFictionCard,
  HeroLayout,
  Heading,
  Heading2,
  Heading3,
  Heading4,
  FeaturesCard,
  ExclusionList,
  BecauseCard,
  BothSideCard,
  BasicList,
  ExpendableList,
  HeroLayoutBig,
  IconWithHeadCard,
  InsuranceAuditCard,
  ManagingClaimsCard,
  ProjectinsuCard,
  ProjectCard2WithImages,
  MenuWrapper,
  MenuItem,
  StarRating,
  NavigationDots,
  NavigationDots2,
  BlogComponent,
  LiabilityMain,
  CorporateNewCard,
  StepperMain,
  BecauseCardFull,
  OpeningCard,
  BlogCard,
  BackImageListCard,
  TestimonialCard,
  FooterIcon,
  MediaCard,
};
