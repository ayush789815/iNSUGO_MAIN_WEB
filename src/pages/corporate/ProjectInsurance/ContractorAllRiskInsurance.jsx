import React from "react";
import { ProjectLayout } from "../../../components/Layouts/MenuInitialLayouts";
import { faqItemscontractorsRisk } from "../../../utils/constantFAndQ";
import {
  businessesContractorAllRisk,
  imagesContractorAllRisk,
  insuranceServicesContractorAllRisk,
} from "../../../utils/constant";

const ContractorAllRiskInsurance = () => {
  return (
    <>
      <ProjectLayout
        fqarr={faqItemscontractorsRisk}
        title={"Contractor’s All Risk Insurance"}
        obj={{
          title: "What is it?",
          desc: "Contractors All Risk Insurance provides combined protection against loss or damage in respect to contractual works, construction of plan and equipment or construction machinery. This insurance provides coverage on the damages from the construction phase until the project’s handover or takeover. ",
        }}
        prdObj={{
          title: "If you run this business, go for CAR insurance.",
          images: imagesContractorAllRisk,
          businesses: businessesContractorAllRisk,
        }}
        service={{
          title: "When Does Your Business Need It?",
          service: insuranceServicesContractorAllRisk,
          show: true,
        }}
      />
    </>
  );
};

export default ContractorAllRiskInsurance;
