import React, { useCallback, useState } from "react";
import { IndividualInsurance } from "@utils/imagepath.js";
import {
  BothSideCard,
  Heading,
  HeroLayoutBig,
  IconWithHeadCard,
  InsuranceAuditCard,
  ManagingClaimsCard,
  NavigationDots,
  NavigationDots2,
} from "../../components/Layouts/UtilsLayout";
import { CorporativeServices, ServiceItems } from "../../utils/constant";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import usePagination from "../../Hook/UsePaginationHook";
import { NewImagePath } from "../../utils/imagepath";

const Corporate = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll
    ? CorporativeServices
    : window?.innerWidth > 1024
    ? CorporativeServices.slice(0, 5)
    : CorporativeServices.slice(0, 4);

  const conditions = [
    {
      count: 3,
      width: 1023,
    },
    {
      count: 2,
      width: 767,
    },
  ];
  const {
    currentSet,
    totalSets,
    handleSetChange,
    VisibleArr,
    NavigationDotsData,
  } = usePagination(ServiceItems, conditions);

  return (
    <>
      <HeroLayoutBig
        img={IndividualInsurance.Fram11}
        title="Services"
        mbClass=""
        Breadcrumb={{
          name: "Services",
          item: [
            {
              name: "Home",
              path: "/",
            },
          ],
        }}
      />

      <div className="mt-10 md:mt-20 flex flex-col gap-10 md:gap-10 lg:gap-20 px-3 md:px-10 lg:px-16 xl:px-36 xxl:px-40">
        <div className="flex flex-col gap-8 w-full ">
          <BothSideCard
            className={`flex-col-reverse md:flex-row max-h-full md:max-h-[280px] `}
            content={
              <div className="space-y-4">
                <Heading
                  title={"Covering Your Insurance Gaps- Insurance Audit"}
                  side={"left"}
                />

                <p className="text-base md:text-lg text-gray-600">
                  Audit process for your Policy is like finding the hurdles. The
                  process works on all the policies, annual premiums, increased
                  coverage with improved features, cross-product benefits,
                  enhanced coverage for the same premium, etc. Our only
                  objective is to bring in the right solution that maps your
                  present risk tolerance.
                </p>
                <p className="text-base md:text-lg text-gray-600"></p>
                <p className="text-base md:text-lg text-gray-600"></p>
              </div>
            }
          >
            <div className="flex justify-center">
              <img
                loading="lazy"
                src={NewImagePath?.servicesImg1}
                alt="Claims Management"
                className="max-w-full h-auto rounded-lg "
              />
            </div>
          </BothSideCard>
        </div>
        {/* <ExclusionList
                    doFontSize={"1rem"}
                    flexCount={3}
                    color={"#fff"}
                    bgImage={bgImg}
                    listItom={rightArr[show - 1]}
                  /> */}

        <div className="flex flex-col gap-8 w-full ">
          {/* <Heading title={"Covering Your Insurance Gaps- Insurance Audit"} />

          <p className="text-base md:text-lg text-gray-600 mb-12 text-center max-w-4xl mx-auto px-4">
            Audit process for your Policy is like finding the hurdles. The
            process works on all the policies, annual premiums, increased
            coverage with improved features, cross-product benefits, enhanced
            coverage for the same premium, etc. Our only objective is to bring
            in the right solution that maps your present risk tolerance.
          </p> */}

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {VisibleArr().map((item, index) => (
              <InsuranceAuditCard
                key={index}
                hoverIffect={true}
                // title={item.title}
                desc={item.description}
                img={item.image}
                bg={"#E9E9E9"}
              />
            ))}
            {NavigationDotsData()?.length > 1 && (
              <>
                {NavigationDotsData().map((_, index) => (
                  <NavigationDots2
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
                  totalSets={totalSets}
                  key={index}
                  index={index}
                  currentSet={currentSet}
                  condition={index + 1 === currentSet}
                  handleDotClick={handleSetChange}
                />
              ))}
            </div>
          )}
        </div>
        <ManagingClaimsCard
          title="Managing the Claims"
          desc1="We optimize efficiency to deliver exceptional claim services, tailoring solutions to individual needs. Our team works collaboratively to reduce delays, minimize claim cycle time, and lower loss ratios, ensuring a seamless and effective claims management experience."
          // desc2="The term here is determined to jointly deliver a distinct tailor-made solution that addresses the delayed claim process."
          // desc3="Reducing Claim Cycle time and Loss Ratio, in mind we work only to deliver you the solution."
          img={NewImagePath.servicesImg2}
        />
      </div>
    </>
  );
};

export default Corporate;
