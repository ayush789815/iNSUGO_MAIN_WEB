import React, { useState } from "react";
import { AboutUs } from "@utils/imagepath.js";

import {
  BasicList,
  BecauseCard,
  BothSideCard,
  ExclusionList,
  FeaturesCard,
  Heading,
  HeroLayout,
  MaxWidthContainer,
  NavigationDots,
  NavigationDots2,
} from "../../components/Layouts/UtilsLayout";
import { BackgroundData, NewImagePath } from "../../utils/imagepath";
import {
  BecauseCardData,
  ElectricVehicelData,
  ExecutionMotorData,
  // faqItemsMotor,
  FeaturesCardData,
  HavingTwoVehiler,
  LimitationData,
} from "../../utils/constant";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import FandQSection from "../../components/Layouts/FandQ";
import { faqItemsMotor } from "../../utils/constantFAndQ";
import usePagination from "../../Hook/UsePaginationHook";

const MoterInsurance = () => {
  const conditions = [
    {
      count: 4,
      width: 1023,
    },
    {
      count: 3,
      width: 767,
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
  } = usePagination(FeaturesCardData, conditions);
  return (
    <>
      <HeroLayout
        img={BackgroundData.motorBg}
        title={"Motor Insurance"}
        desc1={
          "An essential financial instrument, motor insurance shields drivers from unanticipated mishaps and hazards related to vehicle ownership and operation. Owning a car, motorcycle, or any other type of motorized vehicle requires insurance coverage to protect your investment and lessen financial obligations in the event of theft, damage, or accidents.Compare motor insurance quotes before buying any motor insurance policy. "
        }
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
          <div className="flex flex-col gap-8 w-full  ">
            <Heading title={"Features of Motor Car Insurance"} />
            <div className="relative gap-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {VisibleArr()?.map((v, i) => (
                <FeaturesCard
                  widthClass="max-w-full hover:bg-primary"
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

          <div className="flex flex-col gap-8 w-full ">
            <Heading title={"Inclusion, Exclusion of Motor Car Insurance"} />
            <div className="flex gap-5 w-full flex-col md:flex-row justify-center">
              {ExecutionMotorData?.map((v, i) => (
                <ExclusionList
                  alt={"Motor Insurance"}
                  bg={v?.bg}
                  color={v?.color}
                  key={i}
                  icon={
                    i == 0 ? (
                      <IoCheckmarkOutline color="#fff" size={30} />
                    ) : i == 1 ? (
                      <RxCross2 color="#fff" size={30} />
                    ) : (
                      ""
                    )
                  }
                  listItom={v?.data}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full ">
            <Heading title={"You must have Motor Car Insurance. Because :- "} />
            <div className="flex gap-5 w-full justify-center items-center flex-col md:flex-row ">
              {BecauseCardData.map((val, ind) => (
                <BecauseCard
                  key={ind}
                  title={val?.title}
                  desc={val?.desc}
                  img={val?.img}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full ">
            <BothSideCard
              className={"flex-col md:flex-row"}
              content={
                <div
                  className="text-[20px] md:text-[24px] lg:text-[30px] text-center md:text-left font-bold"
                  style={{ flex: 2 }}
                >
                  Consider the Important sections before buying an Motor Car
                  insurance This impacts your current Motor Car Insurance.
                </div>
              }
            >
              <div style={{ flex: 4 }} className="flex flex-col gap-4">
                {LimitationData.map((v, i) => (
                  <BasicList key={i} title={v?.title} desc={v?.desc} />
                ))}
              </div>
            </BothSideCard>
          </div>

          <div className="flex flex-col gap-8 w-full ">
            <Heading
              title={"Benefits of having Electric Vehicle Car Insurance. "}
            />
            <BothSideCard
              className={"flex-col md:flex-row-reverse "}
              content={
                <div className="flex justify-center items-center">
                  <img
                    loading="lazy"
                    className="max-h-[450px] "
                    src={NewImagePath?.electricVehicel}
                    alt="Benefits of having Electric Vehicle Car Insurance."
                  />
                </div>
              }
            >
              <div style={{ flex: 4 }} className="flex flex-col gap-4">
                {ElectricVehicelData.map((v, i) => (
                  <BasicList key={i} title={v?.title} desc={v?.desc} />
                ))}
              </div>
            </BothSideCard>
          </div>

          <div className="flex flex-col gap-8 w-full mb-20">
            <Heading
              title={"Benefits of having insurance for two wheelers. "}
            />
            <BothSideCard
              className={"flex-col md:flex-row "}
              content={
                <img
                  loading="lazy"
                  className="max-h-[330px] "
                  src={NewImagePath?.havingTwoVehiler}
                  alt="Benefits of having insurance for two wheelers."
                />
              }
            >
              <div style={{ flex: 4 }} className="flex flex-col gap-4">
                {HavingTwoVehiler.map((v, i) => (
                  <BasicList key={i} title={v?.title} desc={v?.desc} />
                ))}
              </div>
            </BothSideCard>
          </div>
        </div>
      </MaxWidthContainer>
      <FandQSection
        arr={faqItemsMotor}
        img={AboutUs.Fram9}
        alt={"Motor Insurance"}
      />
    </>
  );
};

export default MoterInsurance;
