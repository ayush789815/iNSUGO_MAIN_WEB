import React from "react";
import {
  BackImageListCard,
  BlogComponent,
  BothSideCard,
  FactsAndFictionCard,
  FeaturesCard,
  Heading,
  HeroLayout,
  MaxWidthContainer,
} from "../../components/Layouts/UtilsLayout";
import { X, Check } from "lucide-react";
import { NewImagePath } from "../../utils/imagepath";
import FandQSection from "../../components/Layouts/FandQ";
import { Heading2 } from "lucide-react";
import { Shield, TrendingUp, TrendingDown } from "lucide-react"; // Add this import at the top

const TermInsurance = () => {
  const featuresData = [
    {
      title: "Level Term Insurance",
      desc: "The most popular form of term life policy is level term insurance, where the premium and the death benefit remain fixed throughout the term.",
      icon: <Shield className="w-12 h-12 text-gray-700 mb-4" />,
    },
    {
      title: "Increasing Term Insurance",
      desc: "An increasing term life insurance is chosen when you anticipate needing more life insurance in the future.",
      icon: <TrendingUp className="w-12 h-12 text-gray-700 mb-4" />,
    },
    {
      title: "Decreasing Term Insurance",
      desc: "A decreasing term insurance plan can help calibrate the sum assured with insurance needs in different stages of life.",
      icon: <TrendingDown className="w-12 h-12 text-gray-700 mb-4" />,
    },
  ];

  const listItems = [
    [
      "Financial Security for Dependents",
      "Affordable and High Sum Assured",
      "Pays Only on Death (No Maturity Value)",
      "Can Supplement Existing Life Insurance",
      "Flexible Terms and Premium Options",
    ],
    [
      "High Coverage at Low Cost",
      "Family's Lifestyle Protected in Your Absence",
      "Peace of Mind",
      "Tax Benefits under Section 80C and 10(10D)",
      "Customizable Through Riders",
    ],
    [
      "Temporary Yet Sufficient Coverage During Earning Years",
      "Best Option for Young Families and New Parents",
      "Protects Against Financial Burdens Like EMIs and School Fees",
      "Ideal for Individuals with Dependents",
      "For pure protection without savings elements, Term Insurance is the smarter choice",
    ],
    [
      "Assess Your Income and Financial Dependents",
      "Calculate Coverage (10–15x Annual Income)",
      "Decide Policy Duration (Till Retirement or Child's Graduation)",
      "Compare Plans Online Based on Premiums and Features",
      "Review Claim Settlement Ratios of Insurers",
      "Add Riders Based on Your Needs",
      "Understand Policy Terms Thoroughly Before Purchase",
    ],
  ];

  const factsAndFiction = [
    {
      Fiction: "Term insurance is a waste because it has no maturity benefit.",
      Fact: "Term insurance offers high protection at the lowest cost—ideal for pure risk cover.",
      icon: <X className="w-6 h-6 text-red-500" />,
    },
    {
      Fiction: "Only people with kids need term insurance.",
      Fact: "Anyone with financial dependents—parents, spouse, or siblings—needs term insurance.",
      icon: <X className="w-6 h-6 text-red-500" />,
    },
    {
      Fiction: "I'm too young for insurance.",
      Fact: "Buying early ensures cheaper premiums and lifelong protection.",
      icon: <X className="w-6 h-6 text-red-500" />,
    },
    {
      Fiction: "Employer provided life cover is sufficient.",
      Fact: "Employer coverage is limited and may not continue if you switch jobs.",
      icon: <X className="w-6 h-6 text-red-500" />,
    },
  ];
  const termFAQs = [
    {
      question: "How do age and health affect term insurance premiums?",
      answer:
        "Younger and healthier individuals typically get lower premiums. Premiums rise with age and health risks.",
    },
    {
      question: "Is a medical exam always required?",
      answer:
        "Some policies offer no-medical-exam options up to a certain sum assured, but full coverage usually requires medical checks.",
    },
    {
      question: "Can I change my coverage later?",
      answer:
        "Once the policy is issued we may not have the option to change the coverage but the payment frequency can be changed (Ex: Monthly, quarterly, half-yearly and Yearly). If we want extra coverage we can opt for another policy.",
    },
    {
      question: "What happens if I outlive my policy?",
      answer:
        "Standard term plans offer no return. However, Return of Premium (ROP) plans refund premiums paid (excluding taxes and charges).",
    },
  ];

  const lifeStageCoverage = [
    {
      stage: "20s–30s",
      desc: "Lock in low premiums while covering education loans or dependent parents",
    },
    {
      stage: "30s–40s",
      desc: "Protect family during high-responsibility years—home loans, school fees, etc",
    },
    {
      stage: "40s–50s",
      desc: "Extend cover till retirement and plan for financial independence for spouse",
    },
    {
      stage: "60+",
      desc: "Consider if dependents still rely on you; term options may be limited",
    },
  ];

  return (
    <>
      <HeroLayout
        img={NewImagePath.lifeInsuBackground}
        title={"Term Insurance"}
        // subtitle={"Protect Your Loved Ones with Term Insurance"}
        // desc1={
        //   "In the event of your untimely passing, term insurance ensures your family's financial stability by offering a lump sum payout. It's one of the simplest and most affordable ways to secure their future and protect their lifestyle."
        // }
        Breadcrumb={{
          mt: "mt-6",
          item: [{ name: "Home", path: "/" }],
        }}
      />

      <MaxWidthContainer>
        <div className="flex flex-col gap-5 md:gap-10 lg:gap-20 px-3 md:px-10 lg:px-16 xl:px-36 xxl:px-40">
          <div className="flex flex-col gap-8 w-full">
            {/* <BlogComponent
              title="Protect Your Loved Ones with Term Insurance – Why It Matters"
              desc="In the event of your untimely passing, term insurance ensures your family's financial stability by offering a lump sum payout. It’s one of the simplest and most affordable ways to secure their future and protect their lifestyle."
            /> */}
            <BothSideCard
              className={"flex-col-reverse md:flex-row"}
              content={
                <div className="flex justify-center items-center">
                  <img
                    loading="lazy"
                    className="max-h-[450px]"
                    src={NewImagePath?.home1Image}
                    alt="Benefits of Term Insurance"
                  />
                </div>
              }
            >
              <div className="text-center md:text-left" style={{ flex: 2 }}>
                <Heading
                  title={
                    "Protect Your Loved Ones with Term Insurance – Why It Matters"
                  }
                  side={"left"}
                />
                <p>
                  In the event of your untimely passing, term insurance ensures
                  your family's financial stability by offering a lump sum
                  payout. It’s one of the simplest and most affordable ways to
                  secure their future and protect their lifestyle.
                </p>
              </div>
            </BothSideCard>
            <BothSideCard
              className={"flex-col-reverse md:flex-row"}
              content={
                <div className="text-center md:text-left" style={{ flex: 2 }}>
                  <Heading
                    title={
                      "Secure Your Family’s Future: Understanding and Choosing the Right Term Insurance"
                    }
                    side={"left"}
                  />
                  <p>
                    While term insurance is straightforward, selecting the right
                    plan involves aligning it with your financial goals,
                    liabilities, and stage of life. By staying informed, you can
                    choose a term plan that gives your loved ones the safety net
                    they deserve.
                  </p>
                </div>
              }
            >
              <div className="flex justify-center items-center">
                <img
                  loading="lazy"
                  className="max-h-[450px]"
                  src={NewImagePath?.life1Image}
                  alt="Benefits of Term Insurance"
                />
              </div>
            </BothSideCard>
          </div>

          <div className="flex flex-col gap-8 w-full">
            <div>
              <Heading
                py={"py-1 px-0 md:px-32"}
                title={"Everything You Need to Know Before Buying"}
              />

              <h6 className="text-center text-2xl font-bold  py-1 mt-3">Types of Term Plans </h6>
            </div>
            <div className="flex gap-5 w-full justify-center md:justify-between flex-wrap md:flex-wrap lg:flex-nowrap">
              {featuresData?.map((v, i) => (
                <FeaturesCard
                  key={i}
                  bg="#E9E9E9"
                  hoverBg="#ffcc29"
                  shadow="0px 0px 4px 0px #00000029"
                  className="min-h-[280px] w-full md:w-[320px] p-6 flex flex-col items-center justify-center "
                  desc={v?.desc}
                  title={v?.title}
                  icon={v?.icon}
                />
              ))}
            </div>
          </div>

          <BackImageListCard
            imgAlt={"Term Insurance"}
            // scroll={"overflow-y-scroll left-scrollbar max-h-200px"}
            leftArr={[
              "Essentials of Term Insurance",
              "Benefits of Term Insurance",
              "Why Do You Need Term Insurance?",
              "Step-by-Step Guide to Term Insurance",
            ]}
            rightArr={listItems}
            bgImg={NewImagePath?.lifeBgSecond}
          />

          <div
            className="flex flex-col gap-8 w-full rounded-[12px] px-3 lg:px-20 pt-5 pb-10 "
          >
            <Heading
              title={"Facts and Fiction"}
              py="py-4"
              className="text-2xl md:text-3xl font-bold text-center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {factsAndFiction?.map((v, i) => (
                <div
                  key={i}
                  className="bg-[#E9E9E9] hover:bg-[#ffcc29] transition-all duration-300 rounded-lg p-6"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-white rounded-full p-2">{v.icon}</div>
                      <div>
                        <h4 className="font-semibold text-lg text-red-500 mb-2">
                          Fiction:
                        </h4>
                        <p className="text-gray-700">{v.Fiction}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-white rounded-full p-2">
                        <Check className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-green-500 mb-2">
                          Fact:
                        </h4>
                        <p className="text-gray-700">{v.Fact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full items-center">
            <BothSideCard
              className={"flex-col md:flex-row max-w-4xl"}
              content={
                <div className="flex justify-center items-center">
                  <img
                    loading="lazy"
                    className="max-h-[280px]"
                    src={NewImagePath?.life2Image}
                    alt="Term Insurance Through Life Stages"
                  />
                </div>
              }
            >
              <div className="text-center md:text-left" style={{ flex: 2 }}>
                <Heading
                  title={"Term Insurance for Every Life Stage"}
                  side={"left"}
                />
                <div className="flex flex-col gap-4">
                  {lifeStageCoverage.map((stage, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <h4 className="font-semibold">{stage.stage}</h4>
                      <p>{stage.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </BothSideCard>
          </div>
        </div>
      </MaxWidthContainer>
      <FandQSection arr={termFAQs} alt={"Term Insurance"} />
    </>
  );
};

export default TermInsurance;
