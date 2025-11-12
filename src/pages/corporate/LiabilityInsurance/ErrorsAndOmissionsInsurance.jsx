import React from "react";
import {
  imagesError,
  OmissionInsuranceError,
} from "../../../utils/constant";
import { faqItemsLiabilityError } from "../../../utils/constantFAndQ";
import { LiabilityLayout } from "../../../components/Layouts/MenuInitialLayouts";
import { BlogComponent } from "../../../components/Layouts/UtilsLayout";

const ErrorsAndOmissionsInsurance = () => {
  return (
    <LiabilityLayout
      fqarr={faqItemsLiabilityError}
      title={"Errors & omissions Insurance"}
      obj={{
        title: "What is it?",
        desc: "Errors & Omissions Insurance, commonly known as Professional Liability Insurance, is a form of insurance policy that protects businesses and professionals from liability claims resulting from alleged errors, mistakes, negligence, or omissions in the services or advice they provide to clients.",
        desc2:
          "E&O insurance covers legal defense costs, settlements, and judgments arising from lawsuits or claims alleging financial losses or damages caused by professional errors or misconduct. This insurance is critical for firms and experts in a variety of professions where the quality of service or advice affects clients' financial well-being.",
      }}
      maxH={"md:max-h-[300px]"}
      prdObj={{
        title: "If you run this business, must have Errors & Omission insurance. ",
        images: imagesError,
        businesses: OmissionInsuranceError,
      }}
    >
      <div className="flex flex-col gap-4 w-full  ">
        <BlogComponent
          title="When does your business need it?"
          desc=" Every time you offer professional services or advise to clients,
                your company needs errors and omissions insurance. This is
                especially true in sectors where mistakes could lead to monetary
                losses or legal ramifications. Having E&O Insurance is crucial
                if you want to shield your company and personal assets from the
                financial ramifications of professional negligence, errors, or
                misconduct, regardless of your role as a consultant, advisor,
                contractor, or service provider. To make sure you are
                sufficiently safeguarded from future claims or litigation, it is
                imperative that you acquire E&O Insurance prior to offering
                services to clients."
        />
      </div>
    </LiabilityLayout>
  );
};

export default ErrorsAndOmissionsInsurance;
