import React from "react";
import { MaxWidthContainerUpdate } from "../components/Layouts/UtilsLayout";

const TermsOfServices = () => {
  const terms = [
    {
      title: "Acceptance of Terms",
      description:
        "By using our services, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.",
    },
    {
      title: "User Responsibilities",
      description:
        "Users must provide accurate information and ensure that their account credentials remain secure. Any misuse of the service is strictly prohibited.",
    },
    {
      title: "Intellectual Property",
      description:
        "All content, trademarks, and data provided by our company are the property of the company and may not be used without explicit permission.",
    },
    {
      title: "Termination of Service",
      description:
        "We reserve the right to suspend or terminate accounts that violate our policies, misuse our platform, or engage in unlawful activities.",
    },
    {
      title: "Limitation of Liability",
      description:
        "Our company is not responsible for any indirect or incidental damages that result from the use of our services.",
    },
  ];

  return (
    <MaxWidthContainerUpdate>
      <div className="p-6  min-h-screen">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Terms of Service
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {terms.map((term, index) => (
            <div key={index} className="mb-6 border-b pb-4 last:border-none">
              {/* <h2 className="text-xl font-semibold text-gray-800">{term.title}</h2> */}
              <p className="text-xl font-semibold text-gray-800">
                {term.title}
              </p>
              <p className="text-gray-600 mt-2">{term.description}</p>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthContainerUpdate>
  );
};

export default TermsOfServices;
