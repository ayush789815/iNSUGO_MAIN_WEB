import React from "react";
import {
  BackImageListCard,
  BothSideCard,
  FactsAndFictionCard,
  FeaturesCard,
  Heading,
  HeroLayout,
  MaxWidthContainer,
} from "../../components/Layouts/UtilsLayout";
import { NewImagePath } from "../../utils/imagepath";
import {
  FactsAndFictionLife,
  FeaturesCardLifeData,
} from "../../utils/constant";
import FandQSection from "../../components/Layouts/FandQ";
import { faqItemsLife } from "../../utils/constantFAndQ";

const LifeInsurance = () => {
  const items = [
    [
      "Financial Protection for Your Loved Ones",
      "Income Replacement",
      "Debt Repayment",
      "Estate Planning Tool",
      "Tax Benefits",
    ],
    [
      "A Secure Financial Future for Your Family",
      "Replacement of Income",
      "Paying Off Debt",
      "Planning an Estate",
    ],
    [
      "Coverage for a Limited Time Only",
      "Reasonably priced premiums",
      "Replacement of Income for Dependents",
    ],
    [
      "Lifetime Coverage with Cash Value Accumulation",
      "Provides Savings and Investment Opportunities",
      "Flexibility in Premium Payments",
    ],
    [
      "Evaluate Your Financial Objectives and Needs",
      "Establish the Duration and Amount of Coverage",
      "Compare Insurer Quotes from Several Companies",
      "Take Into Account More Riders for Better Coverage",
      "Examine and comprehend the terms and conditions of the policy.",
    ],
    [
      "Assess Your Financial Circumstance",
      "Establish Your Investment and Savings Objectives",
      "Select the Appropriate Savings Insurance (Universal or Whole Life).",
      "Recognize investment options and the accumulation of cash value.",
      "Examine the Benefits and Features of the Policy",
    ],
  ];
  return (
    <>
      <HeroLayout
        img={NewImagePath.lifeInsuBackground}
        title={"Life Insurance"}
        subtitle={"Protect your loved ones by Life Insurance"}
        desc1={
          "In the case of your death, life insurance offers your loved ones a vital safety net by guaranteeing their financial security and stability. It is critical to comprehend life insurance in order to protect your family's future. "
        }
        // desc2={"Home / Life Insurance"}
        Breadcrumb={{
          mt: "mt-6",
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
              className={"flex-col-reverse md:flex-row "}
              content={
                <div className="flex justify-center items-center">
                  <img
                    loading="lazy"
                    className="max-h-[450px] "
                    src={NewImagePath?.life1Image}
                    alt="Benefits of having Life Insurance."
                  />
                </div>
              }
            >
              <div className=" text-center md:text-left " style={{ flex: 2 }}>
                <Heading
                  title={
                    "Secure your family future by Understanding and Picking the right Life Insurance Option."
                  }
                  side={"left"}
                />
                <p>
                  It might be difficult to navigate the life insurance market,
                  but if you are well-informed, you can protect your family's
                  financial future by making wise choices. Examine your
                  alternatives and select the one that best suits your
                  requirements.
                </p>
              </div>
            </BothSideCard>
          </div>

          <div className="flex flex-col gap-8 w-full  ">
            <div>
              {/* <Heading py={"py-1"} title={"Life Insurance 101: "} /> */}
              <Heading
                py={"py-1 px-0 md:px-32"}
                title={
                  "Everything you need to know about life insurance before buying."
                }
              />
              <h6 className="text-center py-1 mt-3">
                There are three types of life insurance: universal, whole, and
                term.
              </h6>
            </div>
            <div className="flex gap-5 w-full justify-center md:justify-between flex-wrap md:flex-wrap lg:flex-nowrap">
              {FeaturesCardLifeData?.map((v, i) => (
                <FeaturesCard
                  bg="#E9E9E9"
                  shadow={"0px 0px 2px 0px #00000029"}
                  key={i}
                  desc={v?.desc}
                  title={v?.title}
                />
              ))}
            </div>
          </div>
          <BackImageListCard
            imgAlt={"Life Insurance"}
            scroll={"overflow-y-scroll left-scrollbar max-h-200px"}
            leftArr={[
              "Essentials of life insurance",
              "Benefits of life insurance",
              "Why do you need Term Insurance?",
              "Why you need Savings Insurance",
              "Step-by-step guide on choosing the right Term Insurance",
              "Step-by-step guide on choosing the Saving Insurance",
            ]}
            rightArr={items}
            bgImg={NewImagePath?.lifeBgsecond}
          />

          {/* <div
            style={{ boxShadow: "0px 0px 4px 0px #00000029" }}
            className="flex flex-col gap-8 w-full rounded-[12px] px-3 lg:px-20 pt-5 pb-10"
          >
            <Heading title={"Facts and Fiction"} />
            <div className="flex flex-col gap-4">
              {FactsAndFictionLife?.map((v, i) => (
                <FactsAndFictionCard
                  key={i}
                  faction={` ${v?.Fiction}`}
                  fact={` ${v?.Fact}`}
                />
              ))}
            </div>
          </div> */}

          <div className="flex flex-col gap-8 w-full items-center">
            <BothSideCard
              className={"flex-col md:flex-row   max-w-4xl "}
              content={
                <div className="flex justify-center items-center">
                  <img
                    loading="lazy"
                    className="max-h-[280px]"
                    src={NewImagePath?.life2Image}
                    alt="Insure every stage of your life"
                  />
                </div>
              }
            >
              <div className=" text-center md:text-left " style={{ flex: 2 }}>
                <Heading
                  title={
                    " Insure every stage of your life:  From Young Professional to Retirement. "
                  }
                  side={"left"}
                />
                <p>
                  Every stage of life benefits from having life insurance, which
                  offers you and your loved ones security in terms of finances
                  and protection. Regardless of your stage of life—career
                  launch, parenthood, or retirement—life insurance can be a
                  suitable option.
                </p>
              </div>
            </BothSideCard>
          </div>
        </div>
      </MaxWidthContainer>
      <FandQSection arr={faqItemsLife} alt={"Life Insurance"} />
    </>
  );
};

export default LifeInsurance;
