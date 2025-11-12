import React from "react";
import {
  CorporateNewCard,
  FeaturesCard,
  Heading,
  LiabilityMain,
  NavigationDots,
  NavigationDots2,
} from "../../../components/Layouts/UtilsLayout";
import {
  faqItemsSingleTransit,
} from "../../../utils/constantFAndQ";
import { MarineLayout } from "../../../components/Layouts/MenuInitialLayouts";
import {
  FCMarineSingleTransitInsurance,
  FCMarineSingleTransitInsurance2,
  marineInsurance,
} from "../../../utils/constant";
import usePagination from "../../../Hook/UsePaginationHook";

const SingleTransitInsurance = () => {
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
    usePagination(FCMarineSingleTransitInsurance2, conditions);

  return (
    <>
      <MarineLayout
        fqarr={faqItemsSingleTransit}
        title={"Single Transit Insurance"}
      >
        <div className="flex flex-col gap-8 w-full ">
          <CorporateNewCard
            base_name="Marine Insurance"
            scrollNone={true}
            arr={marineInsurance}
            title={"What is it?"}
            desc="When items or merchandise are being transferred from one place to another, single transit insurance offers coverage for them. It provides monetary security against merchandise loss or damage while it is being transported by air, sea, or land. This marine insurance policy offers coverage for the whole transit period and is usually obtained for individual shipments or cargo transfers."
            maxH={"md:max-h-[450px]"}
          />
        </div>

        <div className="flex flex-col gap-8 w-full ">
          <div className="flex flex-col items-center">
            <Heading
              title={
                "What type of businesses can have Single Transit Insurance?"
              }
            />
            <p>
              Businesses engaged in the import, export, or domestic
              transportation of goods might benefit from Single Transit
              Insurance. This comprises:
            </p>
          </div>
          <div className=" gap-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4">
            {FCMarineSingleTransitInsurance.map((val, ind) => (
              <FeaturesCard
                widthClass="max-w-full"
                shadow={"0px 0px 2px 0px #00000029"}
                key={ind}
                desc={val?.desc}
                title={val?.title}
              />
            ))}
          </div>
          <p className="mt-2 text-center">
            Single transit insurance is a useful tool for businesses that
            frequently move items between locations since it offers protection
            from the possibility of loss or damage while in transit.
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
      </MarineLayout>
    </>
  );
};

export default SingleTransitInsurance;
