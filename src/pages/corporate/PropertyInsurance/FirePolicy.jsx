import React from "react";
import { PropertyLayout } from "../../../components/Layouts/MenuInitialLayouts";
import { faqItemsPropertyFirePolicy } from "../../../utils/constantFAndQ";
import {
  FeaturesCard,
  Heading,
  NavigationDots,
  NavigationDots2,
} from "../../../components/Layouts/UtilsLayout";
import { FCFireProperty } from "../../../utils/constant";
import usePagination from "../../../Hook/UsePaginationHook";

const FirePolicy = () => {
  const conditions = [
    {
      count: 4,
      width: 1023,
    },
    {
      count: 2,
      width: 639,
    },
  ];

  const { currentSet,totalSets, handleSetChange, VisibleArr, NavigationDotsData } =
    usePagination(FCFireProperty, conditions);
  return (
    <PropertyLayout
      fqarr={faqItemsPropertyFirePolicy}
      title={"Fire Policy"}
      obj={{
        title: "What is it?",
        desc: "An insurance policy that is expressly created to cover losses resulting from fire-related incidents is known as a fire policy. By compensating for losses or damages to the insured property brought on by fire, lightning, explosion, or other fire-related risks, it provides businesses, homeowners, and property owners with financial security.",
      }}
    >
      <div className="flex flex-col gap-8 w-full ">
        <div className="flex flex-col items-center">
          <Heading title={"What type of businesses use Fire Policy?"} />
          <p>
            Fire policies are used by a variety of companies in a range of
            industries to safeguard their assets. These could consist of:
          </p>
        </div>
        <div className="relative gap-5 w-full grid grid-cols-1 sm:grid-cols-2 MD:grid-cols-2 lg:grid-cols-4 ">
          {VisibleArr().map((val, ind) => (
            <FeaturesCard
              widthClass="max-w-full"
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

      <div className="flex flex-col gap-8 w-full ">
        <div className="flex flex-col items-center">
          <Heading title={"When does a business need a Fire Policy?"} />
          <p className="text-center">
            A business usually requires a fire policy if it owns or occupies
            real estate that is susceptible to fire damage or destruction. To
            protect against the financial consequences of fire-related
            catastrophes, which can result in major property damage, business
            interruption, and financial losses, it is imperative to have a fire
            policy in place.
          </p>
        </div>
      </div>
    </PropertyLayout>
  );
};

export default FirePolicy;
