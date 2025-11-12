import React from "react";
import { PropertyLayout } from "../../../components/Layouts/MenuInitialLayouts";
import { faqItemsPropertyIndustrialAllRisk } from "../../../utils/constantFAndQ";
import {
  FeaturesCard,
  Heading,
  NavigationDots,
  NavigationDots2,
} from "../../../components/Layouts/UtilsLayout";
import {
  FCIndustrialAllRisk,
  FCIndustrialAllRisk2,
} from "../../../utils/constant";
import usePagination from "../../../Hook/UsePaginationHook";

const IndustrialAllRiskInsurance = () => {
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
  } = usePagination(FCIndustrialAllRisk2, conditions);
  return (
    <>
      <PropertyLayout
        fqarr={faqItemsPropertyIndustrialAllRisk}
        title={"Industrial All Risk Insurance"}
        obj={{
          title: "What is it?",
          desc: "An extensive insurance plan called Industrial All Risk Insurance (IARI) is made to cover a variety of hazards and dangers that industrial enterprises may encounter. It helps organizations minimize financial losses and preserve operational continuity by providing insurance against property damage, business disruption, and liability resulting from unanticipated events.",
        }}
      >
        <div className="flex flex-col gap-8 w-full ">
          <div className="flex flex-col items-center">
            <Heading
              title={
                "What type of industries are covered in Industrial All Risk Insurance?"
              }
            />
            <p>
              A wide range of industries are covered by Industrial All Risk
              Insurance, including but not limited to:
            </p>
          </div>
          <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 MD:grid-cols-2 lg:grid-cols-4 ">
            {FCIndustrialAllRisk.map((val, ind) => (
              <FeaturesCard
                widthClass="max-w-full "
                shadow={"0px 0px 2px 0px #00000029"}
                key={ind}
                desc={val?.desc}
                title={val?.title}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full ">
          <Heading
            title={"Coverage taken care by Industrial All Risk Insurance."}
          />
          <div className="relative gap-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {VisibleArr().map((val, ind) => (
              <FeaturesCard
                widthClass="max-w-full  "
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

export default IndustrialAllRiskInsurance;
