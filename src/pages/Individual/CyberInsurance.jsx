import React from "react";
import {
  BecauseCard,
  BlogComponent,
  Heading,
  HeroLayout,
  MaxWidthContainer,
  NavigationDots,
  NavigationDots2,
  ProjectCard2WithImages,
} from "../../components/Layouts/UtilsLayout";
import { NewImagePath } from "../../utils/imagepath";
import {
  BecauseCardCyber,
  CoverageCyberData,
  // faqItemsCyber,
} from "../../utils/constant";
import FandQSection from "../../components/Layouts/FandQ";
import { faqItemsCyber } from "../../utils/constantFAndQ";
import usePagination from "../../Hook/UsePaginationHook";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";

const CyberInsurance = () => {
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

  const conditions1 = [
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
    currentSet: currentSet1,
    totalSets: totalSets1,
    handleSetChange: handleSetChange1,
    VisibleArr: VisibleArr1,
    NavigationDotsData: NavigationDotsData1,
  } = usePagination(BecauseCardCyber, conditions1);

  // const { currentSet, handleSetChange, VisibleArr, NavigationDotsData } =
  //   usePagination(CoverageCyberData, conditions);
  // const {
  //   currentSet: currentSet2,
  //   totalSets: totalSets2,
  //   handleSetChange: handleSetChange2,
  //   VisibleArr: VisibleArr2,
  //   NavigationDotsData: NavigationDotsData2,
  // } = usePagination(CoverageCyberData2, conditions);

  // const mainData = [
  //   {
  //     title: "Cyber security for Everyone: ",
  //     title1: "Understand Individual Coverage.",
  //     CS: currentSet,
  //     HSC: handleSetChange,
  //     VA: VisibleArr,
  //     NDD: NavigationDotsData,
  //   },
  //   {
  //     title: "Peace of Mind in the Digital Age- ",
  //     title1: "Benefits of Personal Cyber Insurance.",
  //     CS: currentSet2,
  //     HSC: handleSetChange2,
  //     VA: VisibleArr2,
  //     NDD: NavigationDotsData2,
  //   },
  // ];
  return (
    <>
      <HeroLayout
        img={NewImagePath.cyberInsuBgMain}
        title={"Cyber Insurance"}
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
        <div className=" flex flex-col  gap-5 md:gap-10 lg:gap-20 px-0 md:px-10 lg:px-16 xl:px-36 xxl:px-40">
          <div className="flex flex-col gap-4 w-full px-3">
            <BlogComponent
              title="Protect your Digital Life by Cyber Insurance"
              desc="Protecting your online presence is more important than ever in
                the current digital era. There are several cyberthreats, which
                put both people and companies at danger. By offering both
                financial security and peace of mind against the consequences of
                cyberattacks and data breaches, cyber insurance in India offers
                a proactive solution."
            />
          </div>
          <div className="flex flex-col gap-8 w-full ">
            <Heading
              title={
                "Safeguard your online presence- Why is Cyber Insurance important?"
              }
            />
            <div className="relative flex gap-5 w-full justify-center items-center flex-col sm:flex-row ">
              {VisibleArr1().map((val, ind) => (
                <BecauseCard
                  key={ind}
                  title={val?.title}
                  desc={val?.desc}
                  img={val?.img}
                />
              ))}
              {NavigationDotsData1()?.length > 1 && (
                <>
                  {NavigationDotsData1().map((_, index) => (
                    <NavigationDots2
                      left={"hidden md:block left-1 md:-left-10"}
                      right={"hidden md:block right-1 md:-right-10"}
                      totalSets={totalSets1}
                      key={index}
                      index={index}
                      currentSet={currentSet1}
                      condition={index + 1 === currentSet1}
                      handleDotClick={handleSetChange1}
                    />
                  ))}
                </>
              )}
            </div>
            {NavigationDotsData1()?.length > 1 && (
              <div className="flex justify-center items-center gap-2 sm:gap-2 mt-6 sm:mt-8">
                {NavigationDotsData1().map((_, index) => (
                  <NavigationDots
                    key={index}
                    index={index}
                    condition={index + 1 === currentSet1}
                    handleDotClick={handleSetChange1}
                  />
                ))}
              </div>
            )}
          </div>
          {/* <div className="-mt-28 lg:-mt-16">
            <Swiper
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="cyber_swiper "
            >
              {mainData?.map((v, i) => (
                <SwiperSlide
                  key={i}
                  className="flex flex-col gap-4 w-full px-2"
                >
                  <div className="flex flex-col items-center">
                    <div>
                      <Heading py={"py-2"} title={v?.title} />
                      <Heading py={"py-2"} title={v?.title1} />
                    </div>
                  </div>
                  <div className="gap-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4">
                    {v?.VA()?.map((v, i) => (
                      <FeaturesCard
                        widthClass="max-w-full"
                        shadow={"0px 0px 2px 0px #00000029"}
                        key={i}
                        desc={v?.desc}
                        title={v?.title}
                      />
                    ))}
                  </div>
                  {v?.NDD()?.length > 1 && (
                    <div className="flex justify-center items-center gap-2 sm:gap-2 mt-6 sm:mt-8">
                      {v?.NDD().map((_, index) => (
                        <NavigationDots
                          key={index}
                          index={index}
                          condition={index + 1 === v?.CS}
                          handleDotClick={v?.HSC}
                        />
                      ))}
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}
          <ProjectCard2WithImages
            two
            title={"Cyber security for Everyone:"}
            title2={"Understand Individual Coverage."}
            images={[
              {
                src: NewImagePath?.Cyber5Image,
                alt: "Cyber Insurance",
              },
            ]}
            arr={CoverageCyberData}
          />
          {/* <ProjectCard2WithImages
            two
            side
            title={"Peace of Mind in the Digital Age: "}
            title2={"Benefits of Personal Cyber Insurance."}
            images={[
              {
                src: NewImagePath?.Cyber6Image,
                alt: "Health Insurance",
              },
            ]}
            arr={CoverageCyberData}
          /> */}
        </div>
      </MaxWidthContainer>
      <FandQSection arr={faqItemsCyber} alt={"Cyber Insurance"} />
    </>
  );
};

export default CyberInsurance;

{
  /* <div className="flex flex-col gap-4 w-full  ">
            <div className="flex flex-col items-center">
              <div>
                <Heading py={"py-2"} title={"Cyber security for Everyone: "} />
                <Heading
                  py={"py-2"}
                  title={"Understand Individual Coverage."}
                />
              </div>
              <p className="max-w-4xl text-center">
                By assuming responsibility for your online safety with personal
                cyber insurance, you give yourself the ability to confidently
                traverse the digital terrain. By putting proactive protection in
                place, you can lessen the financial and psychological damage
                caused by cyberattacks and give yourself and your loved ones a
                safer online experience.
              </p>
            </div>
            <div className="gap-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4">
              {VisibleArr()?.map((v, i) => (
                <FeaturesCard
                  widthClass="max-w-full"
                  shadow={"0px 0px 2px 0px #00000029"}
                  key={i}
                  desc={v?.desc}
                  title={v?.title}
                />
              ))}
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
          </div> */
}
