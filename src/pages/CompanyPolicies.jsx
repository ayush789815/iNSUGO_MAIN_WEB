import React from "react";
import { MaxWidthContainerUpdate } from "../components/Layouts/UtilsLayout";
import useFetchApi from "../Hook/useFetchApi";

const CompanyPolicies = () => {
  const { data } = useFetchApi({
    path: "policy.php",
    formDataArr: { action: "list" },
  });

  return (
    <MaxWidthContainerUpdate>
      <div className="p-6  min-h-screen">
        <div dangerouslySetInnerHTML={{ __html: data?.data?.description }} />
      </div>
    </MaxWidthContainerUpdate>
  );
};

export default CompanyPolicies;
