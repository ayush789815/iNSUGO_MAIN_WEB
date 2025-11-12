import React from "react";
import {
  BecauseCard,
  BothSideCard,
  FeaturesCard,
  Heading,
  HeroLayout,
  MaxWidthContainer,
} from "../../components/Layouts/UtilsLayout";
import { NewImagePath } from "../../utils/imagepath";
import {
  BecauseCardChild,
  FeaturesCardChildData,
  successfulChildData,
} from "../../utils/constant";
import FandQSection from "../../components/Layouts/FandQ";
import { faqItemsChild } from "../../utils/constantFAndQ";

const ChildrenEducationInsurance = () => {
  return (
    <>
      <HeroLayout
        img={NewImagePath.childInsuBgMain}
        title={"Children’s Education Insurance"}
        subtitle={"Secure Your Child’s future: Power of Education Insurance"}
        // desc2={"Home / Children’s Education Insurance"}
        Breadcrumb={{
          mt: "mt-6",
          item: [
            {
              name: "Home",
              path: "/",
            },
          ],
        }}
        desc1={
          "One of the most crucial choices you will ever have to make as a parent is to invest in your child's education. With a children education insurance plan, you can proactively ensure that your child's academic career continues unhindered in the face of life's uncertainties. "
        }
      />
      <MaxWidthContainer>
        <div className=" flex flex-col  gap-5 md:gap-10 lg:gap-20 px-3 md:px-10 lg:px-16 xl:px-36 xxl:px-40">
          <div className="flex flex-col gap-8 w-full  ">
            <div>
              <Heading
                title={"How education insurance can help you plan ahead?"}
              />
            </div>
            <div className="flex gap-5 w-full justify-center md:justify-between flex-wrap md:flex-wrap lg:flex-nowrap">
              {FeaturesCardChildData?.map((v, i) => (
                <FeaturesCard
                  widthClass="max-w-full md:max-w-[450px] min-w-full md:min-w-[280px] "
                  shadow={"0px 0px 2px 0px #00000029"}
                  key={i}
                  desc={v?.desc}
                  title={v?.title}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full ">
            <BothSideCard
              className={"flex-col-reverse md:flex-row "}
              content={
                <div className="flex justify-center items-center">
                  <img
                    loading="lazy"
                    className="max-h-[400px] "
                    src={NewImagePath?.child1Image}
                    alt="Benefits of having Children Education Insurance."
                  />
                </div>
              }
            >
              <div className=" text-center md:text-left " style={{ flex: 2 }}>
                <Heading
                  title={"Why is Education Insurance essential?"}
                  side={"left"}
                />
                <p>
                  The secret to maximizing your child's potential and
                  guaranteeing their future is education. Your child's ambitions
                  for education won't ever be hampered by a lack of funds thanks
                  to education insurance. It gives your child the confidence and
                  drive to pursue their aspirations by giving them a steady
                  source of funding.
                </p>
              </div>
            </BothSideCard>
          </div>
          <div className="flex flex-col gap-8 w-full ">
            <Heading
              title={
                "How to empower education with right Educational Insurance?"
              }
            />
            <div className="flex gap-5 w-full justify-center items-center flex-col md:flex-row ">
              {BecauseCardChild.map((val, ind) => (
                <BecauseCard
                  key={ind}
                  title={val?.title}
                  desc={val?.desc}
                  img={val?.img}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full  ">
            <div>
              <Heading title={"Plan the successful educational insurance"} />
            </div>
            <div className="flex gap-5 w-full justify-center md:justify-between flex-wrap md:flex-wrap lg:flex-nowrap">
              {successfulChildData?.map((v, i) => (
                <FeaturesCard
                  icon={
                    <img
                      loading="lazy"
                      src={v?.img}
                      className="max-w-8 max-h-8"
                      alt={v?.title}
                    />
                  }
                  widthClass="max-w-full md:max-w-[450px] min-w-full md:min-w-[280px] "
                  shadow={"0px 0px 2px 0px #00000029"}
                  key={i}
                  desc={v?.desc}
                  title={v?.title}
                />
              ))}
            </div>
          </div>
        </div>
      </MaxWidthContainer>
      <FandQSection arr={faqItemsChild} alt={"Children Education Insurance"} />
    </>
  );
};

export default ChildrenEducationInsurance;
