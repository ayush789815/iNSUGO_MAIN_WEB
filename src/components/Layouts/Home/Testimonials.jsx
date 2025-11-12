import React from "react";
// import { testimonials } from "../../utils/imagepath.js";
import {
  Heading,
  Heading3,
  NavigationDots,
  NavigationDots2,
  TestimonialCard,
} from "../UtilsLayout";
import usePagination from "../../../Hook/UsePaginationHook";
import useFetchApi from "../../../Hook/useFetchApi";
import Button from "../../ui/Button";

const TestimonialCarousel = React.memo(() => {
  const { data } = useFetchApi({
    path: "testimonial.php",
    formDataArr: { action: "testimonial_list" },
  });
  const conditions = [
    {
      count: 3,
      width: 1023,
    },
    {
      count: 2,
      width: 660,
    },
  ];

  const {
    currentSet,
    totalSets,
    handleSetChange,
    VisibleArr,
    NavigationDotsData,
  } = usePagination(data?.data || [], conditions);

  return (
    <>
      {data?.data?.length > 0 && (
        <div className="flex flex-col gap-4 md:gap-10  px-3 sm:px-5 overflow-hidden w-full pb-10">
          <Heading3 title={"What Our Customers Say About Us!"} />
          <div>
            <div className="relative place-items-center p-4 mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 px-4 max-w-7xl mx-auto ">
              {VisibleArr().map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
              {NavigationDotsData()?.length > 1 && (
                <>
                  {NavigationDotsData().map((_, index) => (
                    <NavigationDots2
                      left={"hidden md:block left-1 md:-left-5 z-50  "}
                      right={"hidden md:block right-1 md:-right-5 z-50  "}
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

            {/* Navigation dots */}
            {NavigationDotsData()?.length > 1 && (
              <div className="mt-10 flex justify-center items-center gap-2 sm:gap-4  sm:mt-20">
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
            <div className="flex justify-center mt-10">
              <Button
                onClick={() =>
                  window.open("https://g.co/kgs/ji7YVZa", "_blank")
                }
              >
                See More Reviews
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default TestimonialCarousel;
