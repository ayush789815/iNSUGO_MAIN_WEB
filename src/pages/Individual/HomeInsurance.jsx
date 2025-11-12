import React, { useState } from "react";
import {
  BackImageListCard,
  BasicListLife,
  BecauseCard,
  BothSideCard,
  ConditionIcons,
  ExclusionList,
  Heading,
  HeroLayout,
  MaxWidthContainer,
  NavigationDots,
  NavigationDots2,
} from "../../components/Layouts/UtilsLayout";
import { NewImagePath } from "../../utils/imagepath";
import FandQSection from "../../components/Layouts/FandQ";
import {
  BecauseCardHome,
  ExecutionHomeData,
  // faqItemsHome,
} from "../../utils/constant";
import { faqItemsHome } from "../../utils/constantFAndQ";
import usePagination from "../../Hook/UsePaginationHook";

const HomeInsurance = () => {
  const [show, setshow] = useState(1);
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
  } = usePagination(BecauseCardHome, conditions);

  const items = [
    [
      "Homeowners",
      "Condo Owners",
      "Renters (through renter's insurance)",
      "Landlords",
      "Vacation Home Owners",
    ],
    [
      "Assess Your Coverage Needs",
      "Understand Policy Limits and Deductibles",
      "Review Coverage Options and Add-Ons",
      "Compare Quotes from Different Insurers",
      "Check the Reputation and Financial Stability of Insurers",
      "Understand Policy Terms and Conditions",
    ],
  ];
  return (
    <>
      <HeroLayout
        img={NewImagePath.homeInsuBgMain}
        title={"Home Insurance"}
        // desc2={"Home / Home Insurance"}
        Breadcrumb={{
          item: [
            {
              name: "Home",
              path: "/",
            },
          ],
        }}
      />
      <MaxWidthContainer>
        <div className=" flex flex-col  gap-5 md:gap-10 lg:gap-20 px-3 md:px-10 lg:px-16 xl:px-36 xxl:px-40">
          <div className="flex flex-col gap-8 w-full ">
            <BothSideCard
              className={"flex-col md:flex-row-reverse "}
              content={
                <div className="flex justify-center items-center">
                  <img
                    loading="lazy"
                    className="max-h-[450px] "
                    src={NewImagePath?.home1Image}
                    alt="Benefits of having Home Insurance."
                  />
                </div>
              }
            >
              <div className=" text-center md:text-left " style={{ flex: 2 }}>
                <Heading title={"What is Home Insurance?"} side={"left"} />
                <p>
                  Home insurance, often known as homeowners insurance or
                  apartment building insurance, provides complete security for a
                  homeowner's most important asset, their home, and is an
                  essential financial precaution. This insurance covers personal
                  belongings inside the home as well as damages to the
                  property's structure against a range of unanticipated
                  occurrences and hazards.
                </p>
                <p className="pt-4">
                  These can include liability claims in the event that someone
                  is hurt on the property, theft, vandalism, and damage from
                  natural catastrophes like storms and fires. Furthermore,
                  mortgage lenders frequently mandate homeowners to obtain home
                  insurance, giving homeowners piece of mind that their finances
                  are safeguarded. With options for additional coverage and
                  deductibles, the policies are flexible, enabling homeowners to
                  match their coverage to their own requirements and financial
                  constraints.
                </p>
              </div>
            </BothSideCard>
          </div>
          <div className="flex flex-col gap-8 w-full ">
            <Heading title={"Why do you need this?"} />
            <div className="relative flex gap-5 w-full justify-center items-center flex-col sm:flex-row ">
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

          <div className="flex flex-col gap-8 w-full ">
            {/* <Heading title={"Inclusion, Exclusion of Motor Car Insurance"} /> */}
            <div className="flex gap-5 w-full flex-col md:flex-row justify-center">
              {ExecutionHomeData?.map((v, i) => (
                <ExclusionList
                  alt={"Home Insurance"}
                  bg={v?.bg}
                  color={v?.color}
                  key={i}
                  icon={<ConditionIcons i={i} />}
                  listItom={v?.data}
                />
              ))}
            </div>
          </div>

          {/* <div className="flex flex-col gap-8 w-full ">
            <BothSideCard
              className={
                "flex-col-reverse md:flex-row max-h-full md:max-h-[280px]"
              }
              content={
                <div style={{ flex: 2 }} className="flex-1 ">
                  <div className="flex flex-col gap-4 pl-2">
                    {[
                      "Who is eligible to buy Home Insurance?",
                      "Consider these before buying a Home Insurance",
                    ].map((v, i) => (
                      <BasicListLife
                        onClick={() => setshow(i + 1)}
                        bg={"#ffcc29"}
                        key={i}
                        active={show == i + 1}
                        desc={v}
                      />
                    ))}
                  </div>
                </div>
              }
            >
              <ExclusionList
                doFontSize={"1rem"}
                flexCount={3}
                color={"#fff"}
                bgImage={NewImagePath?.homeInsuBgSecond}
                listItom={items[show - 1]}
              />
            </BothSideCard>
          </div> */}

          <BackImageListCard
            imgAlt={"Home Insurance"}
            leftArr={[
              "Who is eligible to buy Home Insurance?",
              "Consider these before buying a Home Insurance",
            ]}
            rightArr={items}
            bgImg={NewImagePath?.homeInsuBgSecond}
          />
        </div>
      </MaxWidthContainer>
      <FandQSection arr={faqItemsHome} alt={"Home Insurance"} />
    </>
  );
};

export default HomeInsurance;
