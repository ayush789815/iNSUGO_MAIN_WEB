import React from "react";
import { FeaturesCard, Heading, NavigationDots, NavigationDots2 } from "../../../components/Layouts/UtilsLayout";
import {
  BusinessesEmployeeBenefit,
  EmployeeBenefit,
} from "../../../utils/constant";
import { faqItemsEmployeeMain } from "../../../utils/constantFAndQ";
import { EmployeeBenLayout } from "../../../components/Layouts/MenuInitialLayouts";
import usePagination from "../../../Hook/UsePaginationHook";

const EmployeeBenefits = () => {

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
    usePagination(EmployeeBenefit, conditions);

    const { currentSet :currentSet1,totalSets:totalSets1, handleSetChange:handleSetChange1, VisibleArr:VisibleArr1, NavigationDotsData:NavigationDotsData1 } =
    usePagination(BusinessesEmployeeBenefit, conditions);
  return (
    <>
      <EmployeeBenLayout
        fqarr={faqItemsEmployeeMain}
        title={"Employee Benefits"}
        obj={{
          title: "An Idea",
          desc: "Employee benefits are a range of non-wage payments that are given to workers on top of their base pay. Employers provide these perks in an effort to draw in, inspire, and keep talent while also raising worker happiness and wellbeing.",
        }}
        maxH={"md:max-h-[200px]"}
        item={[
          {
            name: "Home",
            path: "/",
          },
        ]}
      >
        <div className="flex flex-col gap-4 w-full  ">
          <Heading title={"Why do you need Employee Benefit Insurance?"} />
          <div className="relative gap-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {VisibleArr()?.map((v, i) => (
              <FeaturesCard
                widthClass="max-w-full"
                shadow={"0px 0px 2px 0px #00000029"}
                key={i}
                desc={v?.desc}
                title={v?.title}
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
          {NavigationDotsData()?.length > 1 &&
          <div className="flex justify-center items-center gap-2 sm:gap-2 mt-6 sm:mt-8">
            {NavigationDotsData().map((_, index) => (
              <NavigationDots
              key={index}
              index={index}
              condition={index + 1 === currentSet}
              handleDotClick={handleSetChange}
              />
            ))}
          </div>}
        </div>
        <div className="flex flex-col gap-4 w-full  ">
          <Heading
            title={
              " Businesses should check these before having employee benefit insurance"
            }
          />
          <div className="relative gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {VisibleArr1()?.map((v, i) => (
              <FeaturesCard
                widthClass="max-w-full  "
                shadow={"0px 0px 2px 0px #00000029"}
                key={i}
                desc={v?.desc}
                title={v?.title}
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
          {NavigationDotsData1()?.length > 1 &&
          <div className="flex justify-center items-center gap-2 sm:gap-2 mt-6 sm:mt-8">
            {NavigationDotsData1().map((_, index) => (
              <NavigationDots
              key={index}
              index={index}
              condition={index + 1 === currentSet1}
              handleDotClick={handleSetChange1}
              />
            ))}
          </div>}
        </div>
      </EmployeeBenLayout>
    </>
  );
};

export default EmployeeBenefits;
