import React from "react";
import {
  BlogComponent,
} from "../../../components/Layouts/UtilsLayout";
import { faqItemsEmployeeGroupHealth } from "../../../utils/constantFAndQ";
import { EmployeeBenLayout } from "../../../components/Layouts/MenuInitialLayouts";

const GroupHealthInsurance = () => {
  return (
    <>
      <EmployeeBenLayout
        fqarr={faqItemsEmployeeGroupHealth}
        title={"Group Health Insurance"}
        obj={{
          title: "An Idea",
          desc: "Group health insurance and group health insurance for small business is a kind of coverage that offers financial security and medical benefits to a number of individuals, usually workers or members of an organization. Compared to individual health insurance plans, it gives comprehensive health coverage at a reduced rate.",
        }}
        maxH={"md:max-h-[200px]"}
      >
        <div className="flex flex-col gap-4 w-full  ">
          <BlogComponent
            title="What type of employees can have this insurance?"
            desc="Typically, members of an organization or workers of a corporation can get group health insurance. Part-time and full-time workers, as well as occasionally their dependents like spouses and kids, may be eligible. Retired individuals may also be covered by certain group health insurance programs."
          />
        </div>

        <div className="flex flex-col gap-4 w-full  ">
          <BlogComponent
            title="How many group members are allowed under one insurance? "
            desc="Depending on the insurance provider, the details of the policy, and the size of the group requesting coverage, there may be a limit on the number of group members covered by a single insurance policy. Small groups with as little as two or three members and huge groups with hundreds or thousands of members can both be covered by group health insurance coverage."
          />
        </div>
      </EmployeeBenLayout>
    </>
  );
};

export default GroupHealthInsurance;
