import React from "react";
import {
  BecauseCard,
  FeaturesCard,
  Heading,
  LiabilityMain,
  CorporateNewCard,
  NavigationDots,
  NavigationDots2,
} from "../../../components/Layouts/UtilsLayout";
import {
  BecauseCardMarine,
  BecauseCardMarine2,
  marineInsurance,
} from "../../../utils/constant";
import { faqItemsMarineMain } from "../../../utils/constantFAndQ";
import { MarineLayout } from "../../../components/Layouts/MenuInitialLayouts";
import usePagination from "../../../Hook/UsePaginationHook";

const MarineInsurance = () => {
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
    usePagination(BecauseCardMarine, conditions);

  const {
    currentSet: currentSet1,
    totalSets: totalSets1,
    handleSetChange: handleSetChange1,
    VisibleArr: VisibleArr1,
    NavigationDotsData: NavigationDotsData1,
  } = usePagination(BecauseCardMarine2, conditions);

  return (
    <>
      <MarineLayout
        fqarr={faqItemsMarineMain}
        title={"Marine Insurance"}
        item={[
          {
            name: "Home",
            path: "/",
          },
        ]}
      >
        <div className="flex flex-col gap-8 w-full ">
          <CorporateNewCard
            base_name="Marine Insurance"
            scrollNone={true}
            arr={marineInsurance}
            title={"Navigate the comprehensive meaning of Marine Insurance"}
            desc="A specific kind of insurance known as marine insurance policy covers risks related to maritime activities and the movement of products and merchandise by train, air, sea, or land. It provides monetary security to companies and people against losses or harm to ships, cargo, and liabilities associated with the maritime industry."
            desc2="Marine insurance coverage can protect against a variety of risks, such as collisions, theft, piracy, accidents, and natural catastrophes, guaranteeing that cargo shipments and maritime operations are protected against unanticipated incidents."
            maxH={"md:max-h-[450px]"}
          />
        </div>

        <div className="flex flex-col gap-8 w-full ">
          <div className="flex flex-col items-center">
            <Heading title={"Protect these with your Marine Insurance Plan"} />
            <p>
              Businesses can safeguard a number of facets of their maritime
              operations with a Marine Insurance policy, such as:
            </p>
          </div>
          <div className="relative flex gap-5 w-full justify-center items-center  flex-col sm:flex-row ">
            {VisibleArr().map((val, ind) => (
              <BecauseCard
                key={ind}
                title={val?.title}
                desc={val?.desc}
                img={val?.img}
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

        <div className="flex flex-col gap-4 w-full  ">
          <Heading
            title={
              "Businesses should check these before having a Marine Insurance Plan."
            }
          />
          <div className="relative flex gap-5 w-full justify-center md:justify-between flex-wrap md:flex-wrap lg:flex-nowrap">
            {VisibleArr1()?.map((v, i) => (
              <FeaturesCard
                widthClass="max-w-full md:max-w-[450px] min-w-full md:min-w-[280px] "
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
      </MarineLayout>
    </>
  );
};

export default MarineInsurance;
