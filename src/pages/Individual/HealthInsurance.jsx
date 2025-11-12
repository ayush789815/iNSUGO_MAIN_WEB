import React from "react";
import {
  BackImageListCard,
  BasicListLife,
  BothSideCard,
  ExclusionList,
  FeaturesCard,
  Heading,
  HeroLayout,
  MaxWidthContainer,
  NavigationDots,
  NavigationDots2,
  ProjectCard2WithImages,
} from "../../components/Layouts/UtilsLayout";
import { NewImagePath } from "../../utils/imagepath";
import FandQSection from "../../components/Layouts/FandQ";
import {
  ClausestoKnowHealthData,
  FeaturesCardHealthData,
} from "../../utils/constant";
import { faqItemsHealth } from "../../utils/constantFAndQ";
import usePagination from "../../Hook/UsePaginationHook";

const HealthInsurance = () => {
  const conditions1 = [
    {
      count: 4,
      width: 1023,
    },
    {
      count: 3,
      width: 767,
    },
    {
      count: 2,
      width: 639,
    },
  ];

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

  const items = [
    [
      "Financial safety against unforeseen health care costs.",
      "Access to a large healthcare provider network.",
      "Coverage of services for preventive care.",
      "Comfort in knowing you're protected in the event of disease or accident.",
      "Tax savings on premium payments under the Income Tax Act's Section 80D.",
    ],
    [
      "Pre Existing health issues.",
      "Cosmetic operations.",
      "Substitute medical treatments.",
      "Non-allopathic medical treatments.",
      "Injuries resulting from dangerous conduct.",
      "Self-harm incidents.",
    ],
  ];
  const { currentSet, handleSetChange, VisibleArr, NavigationDotsData } =
    usePagination(FeaturesCardHealthData, conditions);

  const {
    currentSet: currentSet1,
    totalSets: totalSets1,
    handleSetChange: handleSetChange1,
    VisibleArr: VisibleArr1,
    NavigationDotsData: NavigationDotsData1,
  } = usePagination(ClausestoKnowHealthData, conditions1);

  return (
    <>
      <HeroLayout
        img={NewImagePath.healthInsuBgMain}
        title={"Health Insurance"}
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
              className={"flex-col xl:flex-row-reverse "}
              content={
                <div className="flex justify-center items-center">
                  <img
                    loading="lazy"
                    className="max-h-[450px] "
                    src={NewImagePath?.health1Image}
                    alt="Benefits of having Health Insurance."
                  />
                </div>
              }
            >
              <div className=" text-center md:text-left " style={{ flex: 2 }}>
                <Heading
                  title={"Why do you need a Health Insurance?"}
                  side={"left"}
                />
                <p>
                  Health insurance provides access to high-quality healthcare as
                  well as financial protection against the erratic costs of
                  medical care. It is the true savior today to fight against
                  these costs. Health insurance quotes differ from person to
                  person as it depends upon the information you provide to your
                  insurer and the coverage you select. Protection to people and
                  families from the burden of excessive medical costs,
                  guaranteeing that necessary surgeries and treatments are
                  affordable and unaffected by financial hardship.
                </p>
                <p className="pt-4">
                  In addition to reducing financial concerns, it gives you a
                  sense of empowerment and security, enabling you to put your
                  health and well-being first without worrying about mounting
                  medical debt. Essentially, health insurance is a lifeline that
                  will help you to have better, more fulfilling lives. It is
                  more than just a policy.
                </p>

                <p className="font-bold pt-4">
                  How much Health Insurance coverage should I choose?
                </p>
                <p className="pt-4">
                  A few things that affect the coverage are your age, health
                  history, and financial situation. Selecting a coverage amount
                  that sufficiently safeguards the medical requirements of you
                  and your family is crucial.
                </p>
              </div>
            </BothSideCard>
          </div>

          <ProjectCard2WithImages
            one
            title={"How to reduce Health Insurance Quotes?"}
            images={[
              {
                src: NewImagePath?.healthInsuSideImage,
                alt: "Health Insurance",
              },
            ]}
            arr={FeaturesCardHealthData}
          />

          {/* <div className="flex flex-col gap-8 w-full  ">
            <div>
              <Heading
                className={
                  "text-md md:text-lg lg:text-xl xl:text:xl font-bold text-center p-5"
                }
                title={"How to reduce Health Insurance Quotes?"}
              />
            </div>
            <div className="gap-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {VisibleArr()?.map((v, i) => (
                <FeaturesCard
                bg={"#E9E9E9"}
                  widthClass="max-w-full"
                  shadow={"0px 0px 2px 0px #00000029"}
                  key={i}
                  desc={v?.desc}
                  title={""}
                />
              ))}
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
          </div> */}

          <div className="flex flex-col gap-8 w-full  ">
            <div>
              <Heading py={"py-1"} title={"Clauses to know"} />
            </div>

            <div className="relative gap-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
              {VisibleArr1()?.map((v, i) => (
                <FeaturesCard
                  bg={"#E9E9E9"}
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

          {/* <div className="flex flex-col gap-8 w-full ">
            <BothSideCard
              className={
                "flex-col-reverse md:flex-row max-h-full md:max-h-[280px]"
              }
              content={
                <div style={{ flex: 2 }} className=" flex-1 ">
                  <div className="flex flex-col gap-4 pl-2">
                    {[
                      "Benefits for having Health Insurance.",
                      "Exclusions in Health Insurance. ",
                    ].map((v, i) => (
                      <BasicListLife bg={"#F2F0F0"} key={i} desc={v} />
                    ))}
                  </div>
                </div>
              }
            >
              <ExclusionList
                doFontSize={"1rem"}
                flexCount={3}
                color={"#fff"}
                bgImage={NewImagePath?.healthInsuBgSecond}
                listItom={[
                  "Financial safety against unforeseen health care costs.",
                  "Access to a large healthcare provider network.",
                  "Coverage of services for preventive care.",
                  "Comfort in knowing you're protected in the event of disease or accident.",
                  "Tax savings on premium payments under the Income Tax Act's Section 80D.",
                ]}
              />
            </BothSideCard>
          </div> */}
          <BackImageListCard
            imgAlt={"Health Insurance"}
            leftArr={[
              "Benefits for having Health Insurance.",
              "Exclusions in Health Insurance. ",
            ]}
            rightArr={items}
            bgImg={NewImagePath?.healthInsuBgSecond}
          />
        </div>
      </MaxWidthContainer>

      <FandQSection arr={faqItemsHealth} alt={"Health Insurance"} />
    </>
  );
};

export default HealthInsurance;
