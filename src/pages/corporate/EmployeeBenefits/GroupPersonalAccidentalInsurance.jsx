import React from "react";
import {
  BlogComponent,
  FeaturesCard,
  Heading,
  NavigationDots,
  NavigationDots2,
} from "../../../components/Layouts/UtilsLayout";
import { FCGroupPersonalAccidental } from "../../../utils/constant";
import { faqItemsEmployeeGroupPersonalAccidental } from "../../../utils/constantFAndQ";
import { EmployeeBenLayout } from "../../../components/Layouts/MenuInitialLayouts";
import usePagination from "../../../Hook/UsePaginationHook";

const GroupPersonalAccidentalInsurance = () => {
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
    usePagination(FCGroupPersonalAccidental, conditions);

  return (
    <EmployeeBenLayout
      fqarr={faqItemsEmployeeGroupPersonalAccidental}
      title={"Group Personal Accidental Insurance"}
      obj={{
        title: "What is it?",
        desc: "A type of insurance coverage known as group accident insurance is intended to shield policyholders financially in the event that one of their covered incidents causes an unintentional death, or disability. In order to reduce the financial burden of unforeseen accidents, it provides benefits to the insured or their beneficiaries. ",
      }}
      maxH={"md:max-h-[250px]"}
    >
      <div className="flex flex-col gap-4 w-full  ">
        <div className="flex flex-col items-center">
          <Heading
            title={"What type of accidents are covered in this insurance?"}
          />
          <p className="text-center">
            Typically, group personal accident insurance covers a range of
            accident scenarios, such as but not restricted to:
          </p>

          <div className="relative py-5 gap-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {VisibleArr()?.map((v, i) => (
              <FeaturesCard
                widthClass="max-w-full"
                shadow={"0px 0px 2px 0px #00000029"}
                key={i}
                desc={v?.desc}
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
            Depending on the insurance provider and the particular terms and
            circumstances of the policy, the coverage may change.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full  ">
        <BlogComponent
          title="Number of employees in a group allowed?"
          desc="The number of workers who can be covered by Group Personal Accident Insurance in a group can change based on the insurance company and the details of the policy. In general, small organizations with as few as two or three members and bigger groups with hundreds or thousands of members are covered by group insurance policies."
        />
      </div>
    </EmployeeBenLayout>
  );
};

export default GroupPersonalAccidentalInsurance;
