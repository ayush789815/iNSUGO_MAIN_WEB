import React, { useCallback, useState } from "react";
import { IndividualInsurance } from "@utils/imagepath.js";
import {
  Heading,
  HeroLayoutBig,
  IconWithHeadCard,
  InsuranceAuditCard,
  ManagingClaimsCard,
  NavigationDots,
} from "../../components/Layouts/UtilsLayout";
import { IndividualServices, ServiceItems } from "../../utils/constant";
import usePagination from "../../Hook/UsePaginationHook";
// import Form from '../components/Layouts/Home/Form';
// // import Form from '../Layouts/Home/Form';

const Individual = () => {
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

  const { currentSet, handleSetChange, VisibleArr, NavigationDotsData } =
    usePagination(ServiceItems, conditions);

  return (
    <>
      <HeroLayoutBig
        img={IndividualInsurance.Fram9}
        title="Services"
        mbClass=""
        Breadcrumb={{
          name: "Individual Insurance",
          item: [
            {
              name: "Home",
              path: "/",
            },
          ],
        }}
      />
      <div className="mt-10 md:mt-10 flex flex-col gap-10 md:gap-10 lg:gap-20 px-3 md:px-10 lg:px-16 xl:px-36 xxl:px-40">
        <div className="flex flex-col gap-8 w-full">
          <Heading title="Insurance Products For Individuals" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 sm:gap-6 lg:gap-8 w-full">
            {IndividualServices.map((option, index) => (
              <IconWithHeadCard
                key={index}
                icon={option.icon}
                name={option.title}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <Heading title="Covering Your Insurance Gaps- Insurance Audit" />
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Audit process for your Policy is like finding the hurdles. The
            process works on all the policies, annual premiums, increased
            coverage with improved features, cross-product benefits, enhanced
            coverage for the same premium, etc. Our only objective is to bring
            in the right solution that maps your present risk tolerance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {VisibleArr().map((item, index) => (
              <InsuranceAuditCard
                key={index}
                // title={item.title}
                desc={item.description}
                img={item.image}
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
        </div>
        <ManagingClaimsCard
          title="Managing the Claims"
          desc1="With the optimum operational efficiency we work on bringing forth exceptional claim services. Claim management differs from person to person and we are committed to constantly improving the claim management services."
          desc2="The term here is determined to jointly deliver a distinct tailor-made solution that addresses the delayed claim process."
          desc3="Reducing Claim Cycle time and Loss Ratio, in mind we work only to deliver you the solution."
          img={IndividualInsurance.Fram10}
        />
      </div>
    </>
  );
};

export default Individual;
