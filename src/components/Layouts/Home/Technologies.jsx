import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useFetchApi from "../../../Hook/useFetchApi.js";
import useScreenSizes from "../../../Hook/useScreenSizes.js";
import { Heading, Heading3 } from "../UtilsLayout.jsx";
import { base_url } from "../../../utils/constant.js";

const Technologies = React.memo(() => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [swiperKey, setSwiperKey] = useState(0); // Force re-render on data update

  // const { isGreaterThan1024 } = useScreenSizes([1024]);
  const { data } = useFetchApi({
    path: "associate_companies.php",
    formDataArr: { action: "web_list", limit: 10, page: 1 },
  });

  useEffect(() => {
    setSwiperKey((prevKey) => prevKey + 1);
    setTimeout(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
        swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
        swiperRef.current.swiper.navigation.init();
        swiperRef.current.swiper.navigation.update();
      }
    }, 100); // Delay ensures navigation is correctly set up
  }, [data]);

  return (
    <div className="w-full">
      {data?.data?.length > 0 && (
        <div className="max-w-7xl mx-auto px-0 sm:px-4">
          <Heading3 title="Our Associated Companies" />
          <div className="relative">
            <Swiper
              key={swiperKey} // Force re-render on data update
              ref={swiperRef}
              loop={true}
              slidesPerView={4}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={
              //   {clickable:true}
              // }
              modules={[Autoplay, Navigation]}
              className="relative"
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 5 },
                501: { slidesPerView: 3, spaceBetween: 10 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
              }}
            >
              {data?.data?.map((company, i) => (
                <SwiperSlide key={i} className="p-4">
                  <div className="bg-white rounded-lg p-4 sm:p-8 flex items-center justify-center h-40 shadow-md">
                    <img
                      loading="lazy"
                      src={base_url + "insugo/" + company?.image}
                      alt={company?.alt_text}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
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
      )}
    </div>
  );
});

export default Technologies;

// import React, { useRef, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import useFetchApi from "../../../Hook/useFetchApi.js";
// import useScreenSizes from "../../../Hook/useScreenSizes.js";
// import { Heading } from "../UtilsLayout.jsx";

// const Technologies = React.memo(() => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const swiperRef = useRef(null); // Store swiper instance

//   const { isGreaterThan1024 } = useScreenSizes([1024]);
//   const { data } = useFetchApi({
//     path: "associate_companies.php",
//     formDataArr: { action: "web_list", limit: 10, page: 1 },
//   });

//   useEffect(() => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
//       swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
//       swiperRef.current.swiper.navigation.init();
//       swiperRef.current.swiper.navigation.update();
//     }
//   }, [data]); // Run only when data is available

//   return (
//     <div className="w-full">
//       <div className="max-w-7xl mx-auto px-0 sm:px-4">
//         {/* <h2 className="text-xl font-bold text-center mb-4">Our Associated Companies</h2> */}
//         <Heading title={"Our Associated Companies"}/>
//         <div className="relative">
//           <Swiper
//             ref={swiperRef} // Store Swiper instance
//             loop={true}
//             slidesPerView={4}
//             spaceBetween={30}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//             // pagination={{ clickable: true }}
//             modules={[Autoplay, Navigation]}
//             className="relative"
//             // style={{ minHeight: "220px" }}
//             breakpoints={{
//               0: { slidesPerView: 1, spaceBetween: 5 },
//               501: { slidesPerView: 3, spaceBetween: 10 },
//               1024: { slidesPerView: 4, spaceBetween: 30 },
//             }}
//           >
//             {data?.data?.map((company,i) => (
//               <SwiperSlide key={i} className="p-4">
//                 <div className="bg-white rounded-lg p-4 sm:p-8 flex items-center justify-center h-40 shadow-md">
//                   <img
// loading = "lazy";
//                     src={company?.image}
//                     alt={company?.alt_text}
//                     className="max-w-full max-h-full object-contain"
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation Buttons */}
//           <button
//             ref={prevRef}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-black p-3 rounded-full shadow-lg z-10"
//           >
//             <FaArrowLeft size={20} />
//           </button>
//           <button
//             ref={nextRef}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-black p-3 rounded-full shadow-lg z-10"
//           >
//             <FaArrowRight size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default Technologies;
