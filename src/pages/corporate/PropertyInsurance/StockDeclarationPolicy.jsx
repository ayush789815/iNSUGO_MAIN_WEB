import React from "react";
import { PropertyLayout } from "../../../components/Layouts/MenuInitialLayouts";
import { faqItemsPropertyStockdeclaration } from "../../../utils/constantFAndQ";
import {
  FeaturesCard,
  Heading,
  NavigationDots,
  NavigationDots2,
} from "../../../components/Layouts/UtilsLayout";
import { FCStockdeclaration } from "../../../utils/constant";
import usePagination from "../../../Hook/UsePaginationHook";

const StockDeclarationPolicy = () => {
  const conditions = [
    {
      count: 4,
      width: 1023,
    },
    {
      count: 2,
      width: 639,
    },
  ];

  const { currentSet,totalSets, handleSetChange, VisibleArr, NavigationDotsData } =
    usePagination(FCStockdeclaration, conditions);
  return (
    <PropertyLayout
      fqarr={faqItemsPropertyStockdeclaration}
      title={"Stock declaration Policy"}
      obj={{
        title: "What is it?",
        desc: "Businesses can protect their stock or inventory by periodically declaring its value through the use of a stock declaration policy. This insurance requires the insured to report the value of their stock at regular periods, usually annually or quarterly, in lieu of providing a fixed sum insured. The declared value is then used to compute the premium, giving enterprises with varying stock levels flexibility.",
      }}
    >
      <div className="flex flex-col gap-8 w-full ">
        <div className="flex flex-col items-center">
          <Heading
            title={
              "What type of Shipment is not covered under Stock Declaration Policy?"
            }
          />
          <p>
            Certain perishable or high-risk shipments might not be covered by
            the stock declaration policy. As examples, consider:
          </p>
        </div>
        <div className="relative gap-5 w-full grid grid-cols-1 sm:grid-cols-2 MD:grid-cols-2 lg:grid-cols-4  ">
          {VisibleArr().map((val, ind) => (
            <FeaturesCard
              widthClass="max-w-full "
              shadow={"0px 0px 2px 0px #00000029"}
              key={ind}
              desc={val?.desc}
              title={val?.title}
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
        <div className="flex flex-col items-center">
          <Heading
            title={"Can your business do the Stock Declaration Policy?"}
          />
          <p className="text-center">
            A Stock Declaration Policy is an option available to most businesses
            that have stock or inventory. Businesses with varying stock levels
            or seasonal fluctuations in inventory value may consider this
            policy. It offers affordability and flexibility in contrast to
            conventional fixed-sum insurance plans.
          </p>
        </div>
      </div>
    </PropertyLayout>
  );
};

export default StockDeclarationPolicy;
