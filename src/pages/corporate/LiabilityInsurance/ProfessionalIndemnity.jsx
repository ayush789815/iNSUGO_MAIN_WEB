import React from "react";
import {
  ConditionIcons,
  ExclusionList,
  Heading,
} from "../../../components/Layouts/UtilsLayout";
import { ExecutionProfessionalData } from "../../../utils/constant";
import { faqItemsLiabilityProfessional } from "../../../utils/constantFAndQ";
import { LiabilityLayout } from "../../../components/Layouts/MenuInitialLayouts";

const ProfessionalIndemnity = () => {
  return (
    <LiabilityLayout
      fqarr={faqItemsLiabilityProfessional}
      title={"Professional indemnity"}
      obj={{
        title: "What is it? ",
        desc: "Professional indemnity insurance (PII) shields professionals financially from client or third-party claims of carelessness, mistakes, or omissions. It pays for court expenses and compensation claims brought about by expert counsel or services",
      }}
    >
      <div className="flex flex-col gap-8 w-full ">
        <Heading
          title={
            "Inclusions and Exclusions in Professional Indemnity Insurance"
          }
        />
        <div className="flex gap-5 w-full flex-col md:flex-row justify-center">
          {ExecutionProfessionalData?.map((v, i) => (
            <ExclusionList
              alt={"Professional indemnity insurance"}
              bg={v?.bg}
              color={v?.color}
              key={i}
              icon={<ConditionIcons i={i} />}
              listItom={v?.data}
            />
          ))}
        </div>
      </div>
    </LiabilityLayout>
  );
};

export default ProfessionalIndemnity;
