import React from "react";
import {
  BlogComponent,
  FeaturesCard,
  Heading,
} from "../../../components/Layouts/UtilsLayout";
import {
  // faqItemsLiabilityMain,
  FCLiaMain,
} from "../../../utils/constant";
import { faqItemsLiabilityMain } from "../../../utils/constantFAndQ";
import { LiabilityLayout } from "../../../components/Layouts/MenuInitialLayouts";

const LiabilityInsurance = () => {
  return (
    <LiabilityLayout
      fqarr={faqItemsLiabilityMain}
      title={"Liability Insurance"}
      obj={{
        title: "An Idea",
        desc: "This type of insurance provides coverage for legal fees, settlement costs, and damages awarded in court, assisting firms in mitigating the financial risks associated with legal responsibilities. With liability insurance in place, businesses can operate with confidence, knowing that they are protected from unanticipated incidents that could interrupt operations and financial stability.",
      }}
      item={[
        {
          name: "Home",
          path: "/",
        },
      ]}
    >
      <div className="flex flex-col gap-4 w-full  ">
        <BlogComponent
          title="Why does your corporate house need this?"
          desc={
            " Without sufficient liability coverage, your company may face costly regulatory fines, litigation, and brand image damage. Liability insurance protects against a variety of hazards, including accidents, negligence claims, product flaws, and advertising liability. Investing in liability insurance can help your company reduce financial risks, safeguard its bottom line, and maintain stakeholder trust."
          }
        />
      </div>

      <div className="flex flex-col gap-8 w-full  ">
        <div>
          <Heading title={"You should consider this before signing."} />
        </div>
        <div className="flex gap-5 w-full justify-center md:justify-between flex-wrap md:flex-wrap lg:flex-nowrap">
          {FCLiaMain?.map((v, i) => (
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
    </LiabilityLayout>
  );
};

export default LiabilityInsurance;
