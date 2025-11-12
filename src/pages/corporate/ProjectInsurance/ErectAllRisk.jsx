import React from "react";
import { faqItemsRisk } from "../../../utils/constantFAndQ";
import { ProjectLayout } from "../../../components/Layouts/MenuInitialLayouts";
import {
  businessesErectionAllRisk,
  imagesErectionAllRisk,
  insuranceServicesErectionAllRisk,
} from "../../../utils/constant";

const ErectAllRisk = () => {
  return (
    <ProjectLayout
      fqarr={faqItemsRisk}
      title={"Erection All Risk insurance"}
      obj={{
        title: "What is it?",
        desc: "Erection All Risk (EAR) Insurance protects projects involving the installation, assembly, or construction of machinery, equipment, or structures. It covers losses arising from the erection process, including physical damage to the project, equipment, and machinery. Coverage begins when materials are unloaded at the construction site and continues until the completed project is handed over to the client.",
      }}
      prdObj={{
        title: "If you run this business, Go for It",
        images: imagesErectionAllRisk,
        businesses: businessesErectionAllRisk,
      }}
      service={{
        title: "When Does Your Business Need It? ",
        service: insuranceServicesErectionAllRisk,
        show: true,
      }}
    />
  );
};

export default ErectAllRisk;
