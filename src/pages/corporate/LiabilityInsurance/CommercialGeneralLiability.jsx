import React from "react";
import {
  FeaturesCard,
  Heading,
  NavigationDots,
  NavigationDots2,
} from "../../../components/Layouts/UtilsLayout";
import {
  FCBussnessCommercial,
  GeneralLiabilityCommercial,
  imagesCommercial,
} from "../../../utils/constant";
import { faqItemsLiabilityCommercial } from "../../../utils/constantFAndQ";
import { LiabilityLayout } from "../../../components/Layouts/MenuInitialLayouts";
import usePagination from "../../../Hook/UsePaginationHook";

const CommercialGeneralLiability = () => {
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
  } = usePagination(FCBussnessCommercial, conditions);

  return (
    <LiabilityLayout
      fqarr={faqItemsLiabilityCommercial}
      title={"Commercial General Liability"}
      obj={{
        title: "What is it?",
        desc: "Commercial General Liability (CGL) Insurance is a fundamental business insurance policy that protects against various liability risks. It covers claims related to bodily injury, property damage, and personal injury arising from business operations, products, or premises. CGL insurance also covers legal expenses, settlements, and judgments resulting from third-party lawsuits alleging negligence or misconduct by the insured business.",
      }}
      prdObj={{
        title:
          "If you run this business, it is important to have Commercial General Liability.",
        desc: "Commercial General Liability insurance shields businesses from the financial ramifications of liability claims in a variety of industries. Among the companies that CGL insurance covers are:",
        images: imagesCommercial,
        businesses: GeneralLiabilityCommercial,
      }}
    >
      <div className="flex flex-col gap-4 w-full  ">
        <div className="flex flex-col items-center">
          <Heading title={"When does your business need it??"} />
          <p className="max-w-4xl text-center">
            To reduce liability risks and safeguard its financial interests,
            your company requires Commercial General Liability insurance in a
            number of situations. Here are a few situations in which your
            company may want CGL insurance:
          </p>

          <div className="relative py-5 gap-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {VisibleArr()?.map((v, i) => (
              <FeaturesCard
                widthClass={"max-w-full "}
                shadow={"0px 0px 2px 0px #00000029"}
                key={i}
                desc={v?.desc}
                // title={v?.title}
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
      </div>
    </LiabilityLayout>
  );
};

export default CommercialGeneralLiability;
