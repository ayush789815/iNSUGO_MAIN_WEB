import React from "react";

import { faqItemsProjectInsu } from "../../../utils/constantFAndQ";
import { ProjectLayout } from "../../../components/Layouts/MenuInitialLayouts";
import {
  businessesProjectInsurance,
  imagesProjectInsurance,
  insuranceServicesProjectInsurance,
} from "../../../utils/constant";

const ProjectInsurance = () => {
  return (
    <ProjectLayout
      fqarr={faqItemsProjectInsu}
      title={"Project Insurance"}
      obj={{
        title: "Diving into the Crux of Project Insurance",
        desc: "Project insurance is a specialized coverage designed to protect against risks associated with specific projects. It offers comprehensive project insurance policies that cover property damage, liability, and financial losses due to project delays or interruptions. This ensures that projects can proceed smoothly without unforeseen financial setbacks. ",
      }}
      prdObj={{
        title: "If You Run This Business, Go for It",
        images: imagesProjectInsurance,
        businesses: businessesProjectInsurance,
      }}
      service={{
        title: "When Does Your Business Need It? ",
        service: insuranceServicesProjectInsurance,
      }}
      item={[
        {
          name: "Home",
          path: "/",
        },
      ]}
    />
  );
};

export default ProjectInsurance;
