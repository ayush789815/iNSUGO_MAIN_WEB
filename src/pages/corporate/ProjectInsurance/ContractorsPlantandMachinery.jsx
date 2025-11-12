import React from "react";
import { ProjectLayout } from "../../../components/Layouts/MenuInitialLayouts";
import { faqItemscontractorsPlantmachinery } from "../../../utils/constantFAndQ";
import {
  businessesContractorPlantMachinery,
  imagesContractorPlantMachinery,
} from "../../../utils/constant";

const ContractorsPlantandMachinery = () => {
  return (
    <ProjectLayout
      fqarr={faqItemscontractorsPlantmachinery}
      title={"Contractors Plant & Machinery"}
      obj={{
        title: "What is it?",
        desc: "Contractors Plant & Machinery Insurance, also known as CP&M Insurance, is a type of insurance that protects costly equipment and machinery used in construction, engineering, and other industries. CP&M Insurance guarantees that organizations can continue to operate effectively even when faced with unforeseen setbacks.",
      }}
      prdObj={{
        title:
          "If you run this business, go for Contractors plant & machinery Insurance. ",
        images: imagesContractorPlantMachinery,
        businesses: businessesContractorPlantMachinery,
      }}
      normalBlog={{
        title: "When Does Your Business Need It?",
        desc: "Contractors Plant & Machinery Insurance is required for any business that acquires or operates heavy equipment or machinery. CP&M Insurance is critical for protecting your assets and reducing financial risks. Furthermore, if your company relies on equipment-intensive projects, operates in high-risk settings, or is vulnerable to theft, vandalism, or natural catastrophes, CP&M Insurance becomes even more important for protecting your investments and ensuring business continuity.",
      }}
    />
  );
};

export default ContractorsPlantandMachinery;
