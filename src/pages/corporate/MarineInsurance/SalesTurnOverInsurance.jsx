import React from "react";
import {
  CorporateNewCard,
  FeaturesCard,
  Heading,
  LiabilityMain,
  NavigationDots,
  NavigationDots2,
} from "../../../components/Layouts/UtilsLayout";
import { faqItemsStop } from "../../../utils/constantFAndQ";
import {
  FCMarineSTOP,
  FCMarineSTOP2,
  marineInsurance,
} from "../../../utils/constant";
import { MarineLayout } from "../../../components/Layouts/MenuInitialLayouts";
import usePagination from "../../../Hook/UsePaginationHook";

const SalesTurnOverInsurance = () => {
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
    usePagination(FCMarineSTOP2, conditions);
  return (
    <>
      <MarineLayout
        fqarr={faqItemsStop}
        title={"Sales Turn Over Insurance (STOP)"}
      >
        <div className="flex flex-col gap-8 w-full ">
          <CorporateNewCard
             base_name="Marine Insurance"
            scrollNone={true}
            arr={marineInsurance}
            title={"What is it?"}
            desc="Sales Turnover Insurance, or STOP for short, in marine insurance policy is a type of specialty insurance meant to shield companies against monetary losses brought on by a decline in sales turnover. This kind of insurance covers decreased income resulting from things like a drop in demand, changes in the market, or unanticipated circumstances that affect how businesses operate."
            desc2="In order for STOP to function, the covered business must make up the difference between its sales turnover and a predefined reference level. Usually, previous sales data or anticipated revenue goals serve as the foundation for this reference level. The insurance policy pays out a certain amount in the case of a covered loss to assist the company in keeping up its financial operations and stability during hard times."
            maxH={"md:max-h-[450px]"}
          />
        </div>
        <div className="flex flex-col gap-8 w-full ">
          <div className="flex flex-col items-center">
            <Heading title={"What type of businesses can have STOP?"} />
            <p>
              Many different types of businesses in a variety of industries can
              benefit from Sales Turnover Insurance under marine insurance
              policy, including:
            </p>
          </div>
          <div className=" gap-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4">
            {FCMarineSTOP.map((val, ind) => (
              <FeaturesCard
                widthClass="max-w-full  "
                shadow={"0px 0px 2px 0px #00000029"}
                key={ind}
                desc={val?.desc}
                title={val?.title}
              />
            ))}
          </div>
          <p className="mt-2 text-center">
            STOP is beneficial for any firm that depends on steady sales revenue
            to keep things running smoothly and profitably. It provides
            financial protection against unforeseen circumstances, shifting
            market conditions, and other elements that can cause a drop in sales
            turnover.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full  ">
          <Heading title={"Why does your business need this?  "} />
          <div className="relative gap-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {VisibleArr()?.map((v, i) => (
              <FeaturesCard
                widthClass="max-w-full "
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
      </MarineLayout>
    </>
  );
};

export default SalesTurnOverInsurance;
