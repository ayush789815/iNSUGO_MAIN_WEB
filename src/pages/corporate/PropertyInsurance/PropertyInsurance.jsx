import React from "react";
import { PropertyLayout } from "../../../components/Layouts/MenuInitialLayouts";
import { faqItemsPropertyMain } from "../../../utils/constantFAndQ";
import {
  FeaturesCard,
  Heading,
  NavigationDots,
  NavigationDots2,
} from "../../../components/Layouts/UtilsLayout";
import { FCProperty } from "../../../utils/constant";
import usePagination from "../../../Hook/UsePaginationHook";

const PropertyInsurance = () => {
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
    usePagination(FCProperty, conditions);
  return (
    <>
      <PropertyLayout
        fqarr={faqItemsPropertyMain}
        title={"Property Insurance"}
        obj={{
          title: "Why does a business need Property Insurance?",
          desc: "To protect the physical assets and investments against a variety of dangers and calamities, businesses need property insurance. Buildings, machinery, inventory, and other tangible assets are covered by property insurance, which guards against losses brought on by theft, vandalism, fire, natural disasters, and other unanticipated circumstances like property insurance for home loan. Businesses run the risk of suffering large financial losses that could endanger the operations and sustainability if the business doesn't have enough property insurance.",
        }}
        item={[
          {
            name: "Home",
            path: "/",
          },
        ]}
      >
        <div className="flex flex-col gap-4 w-full  ">
          <Heading
            title={"What to check in the Property Insurance Contract?"}
          />
          <div className="relative gap-5 w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {VisibleArr()?.map((v, i) => (
              <FeaturesCard
                widthClass="max-w-full"
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
      </PropertyLayout>
    </>
  );
};

export default PropertyInsurance;
