import React from "react";
import {
  BlogComponent,
  Heading,
  StepperMain,
} from "../../../components/Layouts/UtilsLayout";
import { faqItemsEmployeeGroupGratuity } from "../../../utils/constantFAndQ";
import { EmployeeBenLayout } from "../../../components/Layouts/MenuInitialLayouts";
const GroupGratuity = () => {
  return (
    <>
      <EmployeeBenLayout
        fqarr={faqItemsEmployeeGroupGratuity}
        title={"Group Gratuity"}
        obj={{
          title: "What is it?",
          desc: "Group gratuities are retirement benefit plans that companies offer to their staff members; these plans are usually offered as long-term savings options. By saving up a percentage of an employee's salary during their job, it is intended to give them financial security when they retire. Upon retirement or resignation, the accrued money is given to the employees as a lump sum gratuity payment, along with any interest or investment returns.",
        }}
        maxH={"md:max-h-[300px]"}
      >
        <div className="flex flex-col gap-8 w-full ">
          <div className="flex flex-col items-center gap-2">
            <Heading title={"How does this operate?"} />
            <p>Group Gratuity scheme works in the following ways:</p>
          </div>
          <StepperMain />
        </div>
        <div className="flex flex-col gap-4 w-full  ">
          <BlogComponent
            title="Number of employees in a group allowed?"
            desc="The number of workers permitted in each group under a group gratuity plan may differ based on the plan's terms and conditions as well as the guidelines established by the financial institution or insurance provider overseeing the fund. Larger companies usually have more than one group, each with a different number of employees enrolled, in order to allow for more effective scheme management and administration."
            desc2="The typical employees count each group is between 10 and 50 people. This figure, however, may be changed in accordance with the needs of the insurance provider or financial institution overseeing the plan, the organization's size, and the required level of administrative efficiency. Employers must speak with their insurance company or financial counselor to figure out the best group size for their unique situation."
          />
        </div>
      </EmployeeBenLayout>
    </>
  );
};

export default GroupGratuity;
