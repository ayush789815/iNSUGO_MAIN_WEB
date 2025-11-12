import React from "react";
import { PropertyLayout } from "../../../components/Layouts/MenuInitialLayouts";
import { faqItemsPropertyBurglary } from "../../../utils/constantFAndQ";
import { BCBurglary, FCBurglary } from "../../../utils/constant";
import {
  BecauseCard,
  FeaturesCard,
  Heading,
  NavigationDots,
  NavigationDots2,
} from "../../../components/Layouts/UtilsLayout";
import usePagination from "../../../Hook/UsePaginationHook";

const BurglaryInsurance = () => {
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

  const { currentSet,totalSets, handleSetChange, VisibleArr, NavigationDotsData } =
    usePagination(FCBurglary, conditions);

  const {
    currentSet: currentSet1,
    totalSets: totalSets1,
    handleSetChange: handleSetChange1,
    VisibleArr: VisibleArr1,
    NavigationDotsData: NavigationDotsData1,
  } = usePagination(BCBurglary, conditions);
  return (
    <>
      <PropertyLayout
        fqarr={faqItemsPropertyBurglary}
        title={"Burglary Insurance"}
        obj={{
          title: "What is it?",
          desc: "Burglary Insurance is designed to protect businesses and individuals from the financial losses that can result from theft or break-ins. This policy covers stolen goods, damage to property, and other associated risks. By offering comprehensive coverage, It ensures that your assets are safeguarded against the unpredictable nature of burglaries, allowing you to focus on your business with peace of mind.",
        }}
      >
        <div className="flex flex-col gap-8 w-full ">
          <Heading title={"If You Run This Business, Go for It"} />
          <div className="relative flex gap-5 w-full justify-center flex-col sm:flex-row items-center">
            {VisibleArr1().map((val, ind) => (
              <BecauseCard
                key={ind}
                title={val?.title}
                desc={val?.desc}
                img={val?.img}
              />
            ))}
             {NavigationDotsData1()?.length > 1 && (
              <>
                {NavigationDotsData1().map((_, index) => (
                  <NavigationDots2
                    left={"hidden md:block left-1 md:-left-10"}
                    right={"hidden md:block right-1 md:-right-10"}
                    totalSets={totalSets1}
                    key={index}
                    index={index}
                    currentSet={currentSet1}
                    condition={index + 1 === currentSet1}
                    handleDotClick={handleSetChange1}
                  />
                ))}
              </>
            )}
          </div>
          {NavigationDotsData1()?.length > 1 && (
            <div className="flex justify-center items-center gap-2 sm:gap-2 mt-6 sm:mt-8">
              {NavigationDotsData1().map((_, index) => (
                <NavigationDots
                  key={index}
                  index={index}
                  condition={index + 1 === currentSet1}
                  handleDotClick={handleSetChange1}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-8 w-full ">
          <Heading title={"When Does Your Business Need It?"} />
          <div className={`relative gap-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`}>
            {VisibleArr().map((val, ind) => (
              <FeaturesCard
                widthClass="max-w-full md:max-w-[350px] min-w-full md:min-w-[250px] animate-fadeInLeft"
                shadow={"0px 0px 2px 0px #00000029"}
                key={ind}
                desc={val?.desc}
                title={val?.title}
              />
            ))}
             {NavigationDotsData()?.length > 1 && (
              <>
                {NavigationDotsData().map((_, index) => (
                  <NavigationDots2
                    left={"hidden md:block left-1 md:-left-10"}
                    right={"hidden md:block right-1 md:-right-10"}
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
        </div>
      </PropertyLayout>
    </>
  );
};

export default BurglaryInsurance;
