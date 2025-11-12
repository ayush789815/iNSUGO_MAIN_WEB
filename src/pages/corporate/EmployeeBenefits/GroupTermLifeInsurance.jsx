import React from "react";
import {
  BlogComponent,
  FeaturesCard,
  Heading,
  NavigationDots,
  NavigationDots2,
} from "../../../components/Layouts/UtilsLayout";
import { FCGroupTermsLife } from "../../../utils/constant";
import { faqItemsEmployeeGroupTermLife } from "../../../utils/constantFAndQ";
import { EmployeeBenLayout } from "../../../components/Layouts/MenuInitialLayouts";
import usePagination from "../../../Hook/UsePaginationHook";

const GroupTermLifeInsurance = () => {
  const conditions = [
    {
      count: 4,
      width: 1023,
    },
    {
      count: 3,
      width: 768,
    },
    {
      count: 2,
      width: 639,
    },
  ];

  const { currentSet,totalSets, handleSetChange, VisibleArr, NavigationDotsData } =
    usePagination(FCGroupTermsLife, conditions);

  return (
    <EmployeeBenLayout
      fqarr={faqItemsEmployeeGroupTermLife}
      title={"Group Term Life Insurance"}
      obj={{
        title: "What is it?",
        desc: "An employer or organization can obtain group term life insurance to protect a group of people, usually employees or members. In the event that an insured person passes away during the duration of the policy, it provides a death benefit to their beneficiaries. The beneficiaries of the insured are financially protected by this benefit, which is often paid out as a lump sum and is not subject to taxes.",
        desc2:
          "Group Term Life Insurance is more accessible and cost-effective than individual life insurance policies since it does not require medical underwriting for each participant. Because of the group dynamic and negotiated rates, employers frequently include this insurance in their benefits package to entice and keep workers. The term life insurance quotes offer valuable coverage at a lower cost.            ",
      }}
      maxH={"md:max-h-[450px]"}
    >
      <div className="flex flex-col gap-4 w-full  ">
        <div className="flex flex-col items-center">
          <Heading
            title={"What type of accidents are covered in this insurance?"}
          />
          <p className="text-center">
            Generally, death from a variety of accidents is covered by group
            term life insurance, including but not limited to:
          </p>

          <div className="relative py-5 gap-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {VisibleArr()?.map((v, i) => (
              <FeaturesCard
                widthClass="max-w-full"
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
          <p className="text-center pt-3">
            The particular coverage and exclusions may change based on the
            insurance provider and the policy's terms.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full  ">
        <BlogComponent
          title="Number of employees in a group allowed?"
          desc="The number of workers who can be covered by Group Term Life Insurance in a group may differ based on the insurance company and the details of the policy. In general, small organizations with as few as two or three members and bigger groups with hundreds or thousands of members are covered by group insurance policies."
        />
      </div>
    </EmployeeBenLayout>
  );
};

export default GroupTermLifeInsurance;
