import React from "react";
import {
  FeaturesCard,
  Heading,
  NavigationDots,
  NavigationDots2,
} from "../../../components/Layouts/UtilsLayout";
import {
  SeekofClaimPublicData,
  TypeOfCorporatesPublicData,
} from "../../../utils/constant";
import { faqItemsLiabilityPublic } from "../../../utils/constantFAndQ";
import { LiabilityLayout } from "../../../components/Layouts/MenuInitialLayouts";
import usePagination from "../../../Hook/UsePaginationHook";

const PublicLiability = () => {
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
    usePagination(TypeOfCorporatesPublicData, conditions);
  return (
    <LiabilityLayout
      fqarr={faqItemsLiabilityPublic}
      title={"Public Liability"}
      obj={{
        title: "What is it?",
        desc: "A sort of insurance coverage known as public liability insurance protects companies and individuals from monetary losses brought on by property damage or bodily harm to third parties that occurs on their property or as a result of their business operations.",
        desc2:
          "It covers costs paid in defending against liability claims made by members of the public, clients, customers, or guests who sustain injuries or property damage as a result of the insured's negligence or other activities. These costs include legal fees, compensation payments, and other expenditures.",
      }}
      maxH={"md:max-h-[300px]"}
    >
      <div className="flex flex-col gap-4 w-full  ">
        <Heading title={" Type of Corporates who can register? "} />
        <div className="relative gap-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {VisibleArr()?.map((v, i) => (
            <FeaturesCard
              widthClass={"max-w-full "}
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

      <div className="flex flex-col gap-4 w-full  ">
        <div className="flex flex-col items-center">
          <div>
            <Heading title={" When to seek for this claim?"} />
          </div>
          <p className="max-w-4xl text-center">
            When your company is faced with liability claims or litigation
            resulting from third-party bodily harm or property damage, you
            should pursue Public Liability Insurance claims. Here are some
            situations in which you ought to file a claim for this liability:
          </p>
        </div>
        <div className="flex gap-5 w-full justify-center md:justify-between flex-wrap md:flex-wrap lg:flex-nowrap  mt-5">
          {SeekofClaimPublicData?.map((v, i) => (
            <FeaturesCard
              widthClass={
                "max-w-full md:max-w-[350px] min-w-full md:min-w-[280px]"
              }
              shadow={"0px 0px 2px 0px #00000029"}
              key={i}
              desc={v?.desc}
              title={""}
            />
          ))}
        </div>
      </div>
    </LiabilityLayout>
  );
};

export default PublicLiability;
