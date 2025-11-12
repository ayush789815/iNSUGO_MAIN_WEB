import React from "react";
import {
  FeaturesCard,
  Heading,
  NavigationDots,
  NavigationDots2,
} from "../../../components/Layouts/UtilsLayout";
import { BusinessInsuProduct, imagesProduct } from "../../../utils/constant";
import { faqItemsLiabilityProduct } from "../../../utils/constantFAndQ";
import { LiabilityLayout } from "../../../components/Layouts/MenuInitialLayouts";
import usePagination from "../../../Hook/UsePaginationHook";

const ProductLiability = () => {
  const items = [
    "Launching a new product.",
    "Expanding product lines.",
    "Selling products to the public.",
    "Distributing products internationally.",
    "Entering into contracts requiring liability coverage.",
    "Experiencing past product-related claims.",
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

  const { currentSet,totalSets, handleSetChange, VisibleArr, NavigationDotsData } =
    usePagination(items, conditions);

  return (
    <LiabilityLayout
      fqarr={faqItemsLiabilityProduct}
      title={"Product Liability"}
      obj={{
        title: "Diving into the crux of Product Liability",
        desc: "Product liability insurance is designed to protect your business from financial loss due to claims of injury or damage caused by your products. This insurance covers legal fees, settlements, and other associated costs, providing peace of mind and financial stability. Whether you manufacture, distribute, or sell products, comprehensive product liability insurance is essential for safeguarding your business against unforeseen legal challenges.",
      }}
      prdObj={{
        title:
          "If you run this business, Go for it",
        images: imagesProduct,
        businesses: BusinessInsuProduct,
      }}
    >
      <div className="flex flex-col gap-8 w-full  ">
        <div>
          <Heading title={"When does your business need it?"} />
        </div>
        <div className="relative gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {VisibleArr()?.map((v, i) => (
            <FeaturesCard
              widthClass="max-w-full "
              shadow={"0px 0px 2px 0px #00000029"}
              key={i}
              desc={v}
              title={""}
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
    </LiabilityLayout>
  );
};

export default ProductLiability;
