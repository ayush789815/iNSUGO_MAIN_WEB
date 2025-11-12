import React from "react";
import {
  FeaturesCard,
  Heading,
  CorporateNewCard,
  // MarineLayout,
  NavigationDots,
  NavigationDots2,
} from "../../../components/Layouts/UtilsLayout";
import { faqItemsMarineOpenPolicy } from "../../../utils/constantFAndQ";
import {
  FCMarineOpen,
  FCMarineOpen2,
  marineInsurance,
} from "../../../utils/constant";
import { MarineLayout } from "../../../components/Layouts/MenuInitialLayouts";
import usePagination from "../../../Hook/UsePaginationHook";

const MarineOpenPolicy = () => {
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
    usePagination(FCMarineOpen2, conditions);
  return (
    <MarineLayout fqarr={faqItemsMarineOpenPolicy} title={"Marine Open Policy / Cover"}>
      <div className="flex flex-col gap-8 w-full ">
        <CorporateNewCard
          base_name="Marine Insurance"
          scrollNone={true}
          arr={marineInsurance}
          title={"What is it?"}
          desc="One kind of insurance policy that is frequently utilized in maritime freight transportation is the Marine Open Policy / Cover. It offers protection for products and shipments whether they are traveling by train, road, air, or sea. "
          desc2="A Marine Insurance Policy is an ongoing insurance contract that offers continuous coverage for several shipments over a predetermined period, usually one year, as opposed to special voyage policies that cover individual shipments."
          maxH={"md:max-h-[450px]"}
        />
      </div>

      <div className="flex flex-col gap-8 w-full ">
        <div className="flex flex-col items-center">
          <Heading
            title={"What type of businesses can have Marine Open Policy / Cover?"}
          />
          <p>
            A variety of companies engaged in international trade, shipping, and
            logistics can benefit from the Marine Open Policy / Cover, including:
          </p>
        </div>
        <div className=" gap-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4">
          {FCMarineOpen.map((val, ind) => (
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
          A Marine Open Policy / Cover can be advantageous to any company that
          frequently imports or exports goods and merchandise and needs ongoing
          coverage for its cargo shipments.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full  ">
        <Heading title={"Why does your business need this? "} />
        <div className=" relative gap-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {VisibleArr()?.map((v, i) => (
            <FeaturesCard
              widthClass="max-w-full  "
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
  );
};

export default MarineOpenPolicy;
