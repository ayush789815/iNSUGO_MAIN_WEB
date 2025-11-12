import React from "react";
import {
  BlogComponent,
  FeaturesCard,
  Heading,
} from "../../../components/Layouts/UtilsLayout";
import {
  FCClaimDirectors,
} from "../../../utils/constant";
import { faqItemsLiabilityDirector } from "../../../utils/constantFAndQ";
import { LiabilityLayout } from "../../../components/Layouts/MenuInitialLayouts";

const DirectorsAndOfficersLiability = () => {
  return (
    <>
      <LiabilityLayout
        fqarr={faqItemsLiabilityDirector}
        title={"Directors & officers Liability"}
        obj={{
          title: "What is it?",
          desc: "Directors and Officers Liability Insurance is a form of insurance coverage that protects a company's directors, officers, and executives (as well as the company itself) from legal obligations resulting from management decisions and acts. ",
          desc2:
            " This insurance covers claims of improper conduct, errors, omissions, breaches of duty, mismanagement, or negligence done by directors and officers while performing their duties.",
        }}
      >
        <div className="flex flex-col gap-4 w-full  ">
          <div className="flex flex-col items-center">
            <Heading title={"Who will get the claim for this Liability?"} />
            <p className="text-center">
              Claims under Directors and Officers Liability Insurance can be
              filed by a variety of parties, including shareholders, employees,
              creditors, customers, competitors, regulatory authorities, and
              other stakeholders who allege wrongdoing or harm caused by company
              directors and officers' actions or decisions. The policy covers
              the insured :
            </p>

            <div className="flex py-5 gap-5 w-full justify-center md:justify-between flex-wrap md:flex-wrap lg:flex-nowrap">
              {FCClaimDirectors?.map((v, i) => (
                <FeaturesCard
                  shadow={"0px 0px 2px 0px #00000029"}
                  key={i}
                  desc={v?.desc}
                  // title={v?.title}
                />
              ))}
            </div>
            <p className="text-center pt-3">
              This insurance provides financial protection against legal
              expenditures and damages resulting from covered claims.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full  ">
          <BlogComponent
            title="When to seek for this claim?"
            desc=" Directors and Officers' Liability when directors, officers, or
                executives are accused of improper activities or face legal
                responsibilities as a result of their management roles, they
                should file insurance claims. It is critical to contact the
                insurance provider as soon as you become aware of any
                prospective claims or legal threats."
            desc1=" Seeking D&O insurance coverage early in the claims process
                enables for timely assistance in managing legal defense
                expenses, negotiating settlements, and safeguarding directors
                and officers' personal assets from financial loss."
          />
        </div>
      </LiabilityLayout>

    </>
  );
};

export default DirectorsAndOfficersLiability;
