import React, { useCallback, useState } from "react";
import {
  BothSideCard,
  ExpendableList,
  Heading,
  HeroLayout,
  MaxWidthContainerUpdate,
  OpeningCard,
} from "../components/Layouts/UtilsLayout";
import { NewImagePath } from "../utils/imagepath";
import { base_url, OpeningPostions } from "../utils/constant";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useLocation, useNavigate } from "react-router-dom";
import useFetchApi from "../Hook/useFetchApi";
import moment from "moment";
import { toast } from "react-toastify";

const CareerDetails = () => {
  const [addData, setAddData] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = location.state || {};

  const { data } = useFetchApi({
    path: "careers.php",
    formDataArr: { action: "listbyid", id: id },
  });
  const updatedData = data?.data;

  const handleChange = useCallback((value, key, okey1, okey2) => {
    setAddData((prevData) => ({
      ...prevData,
      [key]: value,
      [`${key}_err`]: "",
      [okey1]: "",
      [okey2]: "",
    }));
  }, []);

  const validation = () => {
    const errors = {};
    if (!addData?.first_name) {
      errors.first_name_err = "Please Enter First Name";
    }
    if (!addData?.last_name) {
      errors.last_name_err = "Please Enter Last Name";
    }
    if (!addData?.mobile) {
      errors.mobile_err = "Please Enter Mobile";
    } else if (addData?.mobile?.length != 10) {
      errors.mobile_err = "Please Enter valid mobile no.";
    }
    if (!addData?.email) {
      errors.email_err = "Please Enter Email";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(addData.email)
    ) {
      errors.email_err = "Please Enter a valid Email address.";
    }

    if (addData?.linkdin && !addData?.linkdin.startsWith("https://")) {
      errors.linkdin_err = "Please Enter valid Linkdin Id";
    }
    if (!addData?.file?.name) {
      errors.file_err = "Please Select File";
    }

    return errors;
  };

  const handleSubmit = async () => {
    const errors = validation();

    if (Object.keys(errors).length == 0) {
      try {
        const body = new FormData();
        body.append("action", "job_apply");
        body.append("job_id", id);
        body.append(
          "full_name",
          `${addData?.first_name} ${addData?.last_name}`
        );
        body.append("email", addData?.email);
        body.append("phone_number", addData?.mobile);
        body.append("linkedin_profile", addData?.linkdin);
        body.append("resume", addData?.file);
        setLoading(true);
        const response = await fetch(base_url + "insugo/" + "careers.php", {
          method: "POST",
          body: body,
        });
        const res = await response.json();
        if (res.success) {
          toast.success(res.message);
          navigate("/");
          setAddData({});
        } else if (!res.success) {
          toast.error(res.message);
        }
      } catch (error) {
        console.log("error ====", error);
      } finally {
        setLoading(false);
      }
    } else {
      setAddData({ ...addData, ...errors });
    }
  };
  return (
    <div className="w-full">
      <HeroLayout
        img={NewImagePath.CareersBgMain}
        title={"Careers"}
        desc1={"Join Our Team at Insugo Insurance Brokers"}
      />
      <MaxWidthContainerUpdate>
        <div className="flex flex-col gap-4 min-w-full flex-1 items-center p-3 md:p-2">
          <BothSideCard
            content={
              <div className="flex flex-col justify-start flex-1 gap-4">
                {/* <h2 className="text-md md:text-xl lg:text-2xl xl:text-3xl font-bold text-center pb-3">
                  Join Our Team – Apply Now
                </h2>
                <h2 className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold ">
                  Job Title : {updatedData?.title}
                </h2>

                <h2 className="text-sm md:text-md lg:text-lg xl:text-xl ">
                  📍 Location: {updatedData?.job_type} ({updatedData?.location})
                </h2>
                <h2 className="text-sm md:text-md lg:text-lg xl:text-xl ">
                  🕒 Job Type: {updatedData?.job_description}
                </h2>
                <h2 className="text-sm md:text-md lg:text-lg xl:text-xl ">
                  📅 Application Deadline: [{" "}
                  {moment(updatedData?.deadline).format("DD/MM/YYYY")} ]
                </h2> */}
                <p className="text-md md:text-xl lg:text-2xl xl:text-3xl font-bold text-center pb-3">
                  Join Our Team – Apply Now
                </p>
                <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold ">
                  Job Title : {updatedData?.title}
                </p>

                <p className="text-sm md:text-md lg:text-lg xl:text-xl ">
                  📍 Location: {updatedData?.job_type} ({updatedData?.location})
                </p>
                <p className="text-sm md:text-md lg:text-lg xl:text-xl ">
                  🕒 Job Type: {updatedData?.job_description}
                </p>
                <p className="text-sm md:text-md lg:text-lg xl:text-xl ">
                  📅 Application Deadline: [{" "}
                  {moment(updatedData?.deadline).format("DD/MM/YYYY")} ]
                </p>
              </div>
            }
            className={"flex-col xl:flex-col w-full"}
          >
            <div className="flex flex-col gap-2  flex-1">
              <ExpendableList
                question={"Job Overview "}
                answer={updatedData?.overview}
              />
              <ExpendableList
                question={"Responsibilities "}
                htmlData={updatedData?.responsibility}
              />
              <ExpendableList
                question={"Qualifications"}
                htmlData={updatedData?.qualification}
              />
            </div>
          </BothSideCard>
        </div>
        <div className="flex flex-col gap-4 min-w-full flex-1 mb-10 justify-center items-center">
          <form className="w-full max-w-full bg-white shadow-2xl rounded-lg p-4 border-2 border-gray-200">
            <Heading title={"Application Form"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                onChange={(e) => handleChange(e.target.value, "first_name")}
                error={addData?.first_name_err}
                value={addData?.first_name}
                label="First Name"
                id="firstName"
                placeholder="Jack"
              />
              <Input
                onChange={(e) => handleChange(e.target.value, "last_name")}
                error={addData?.last_name_err}
                value={addData?.last_name}
                label="Last Name"
                id="lastName"
                placeholder="Dsouza"
              />
              <Input
                onChange={(e) => handleChange(e.target.value, "mobile")}
                error={addData?.mobile_err}
                value={addData?.mobile}
                label="Mobile Number"
                id="mobile"
                placeholder="0123456789"
                type="tel"
              />
              <Input
                onChange={(e) => handleChange(e.target.value, "email")}
                error={addData?.email_err}
                value={addData?.email}
                label="Email Id"
                id="email"
                placeholder="jack.d@gmail.com"
                type="email"
              />
              <Input
                onChange={(e) => handleChange(e.target.value, "linkdin")}
                error={addData?.linkdin_err}
                value={addData?.linkdin}
                label="Linkdin"
                id="http"
                placeholder="Linkdin URL"
                type="text"
              />
              <Input
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setAddData({ ...addData, file }); // Update the file state
                }}
                multiple={false} // Allows only one file
                error={addData?.file_err} // Display error if any
                label="Upload Resume"
                id="file"
                placeholder="Choose a file"
                type="file"
              />
            </div>
            <div className="mt-8 text-center">
              <Button disable={loading} onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </MaxWidthContainerUpdate>
    </div>
  );
};

export default CareerDetails;
