import React, { useState } from "react";
import Button from "../components/ui/Button";
import { AboutUs } from "@utils/imagepath.js";
import Input from "../components/ui/Input";
import { Heading, HeroLayoutBig } from "../components/Layouts/UtilsLayout";
import { useNavigate } from "react-router-dom";
import {
  AllFeildEmptyObj,
  CreateFormDatawithThisvalues,
  validateFunction,
} from "../utils/UtilsFuctions";
import { toast } from "react-toastify";
import { base_url } from "../utils/constant";
import { IoLocationSharp } from "react-icons/io5";
import { TbBrandWhatsappFilled, TbMailFilled } from "react-icons/tb";
import { FaMobile } from "react-icons/fa";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [addData, setAddData] = useState({});
  const navigate = useNavigate();

  const handleChange = (value, key, okey1, okey2) => {
    let errorMessage = "";

    // ✅ Frontend Validation
    if (key === "first_name" || key === "last_name") {
      if (!value.trim()) {
        errorMessage = `${key.replace("_", " ")} is required`;
      } else if (!/^[A-Za-z ]+$/.test(value)) {
        errorMessage = "Only alphabets allowed";
      }
    }

    if (key === "email") {
      if (!value.trim()) {
        errorMessage = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.trim())
      ) {
        errorMessage = "Enter a valid email";
      }
    }

    if (key === "mobile") {
      if (!value.trim()) {
        errorMessage = "Mobile number is required";
      } else if (!/^\d{10}$/.test(value)) {
        errorMessage = "Enter valid 10-digit mobile number";
      }
    }

    if (key === "message") {
      if (!value.trim()) {
        errorMessage = "Message is required";
      } else if (value.trim().length < 5) {
        errorMessage = "Message must be at least 5 characters";
      }
    }

    setAddData({
      ...addData,
      [key]: value,
      [`${key}_err`]: errorMessage,
      [okey1]: "",
      [okey2]: "",
    });
  };

  const submitForm = async () => {
    const error = validateFunction(addData, [
      "first_name",
      "last_name",
      "mobile",
      "email",
      "message",
    ]);

    // Manual frontend re-validation before API call
    if (
      !addData.first_name ||
      !addData.last_name ||
      !addData.mobile ||
      !addData.email ||
      !addData.message ||
      addData.first_name_err ||
      addData.last_name_err ||
      addData.mobile_err ||
      addData.email_err ||
      addData.message_err
    ) {
      toast.error("Please Fill All Fields Before Submitting");
      setAddData({ ...addData, ...error });
      return;
    }

    if (Object.keys(error).length == 0) {
      const body = CreateFormDatawithThisvalues(addData, [
        "first_name",
        "last_name",
        "mobile",
        "email",
        "message",
      ]);

      body.append("type", "query");

      try {
        setLoading(true);
        const response = await fetch(base_url + "insugo/" + "contact_us.php", {
          method: "POST",
          body: body,
        });
        const res = await response.json();
        if (res.success) {
          toast.success(res.message);
          navigate("/");
          const obj = await AllFeildEmptyObj(addData);
          setAddData(obj);
        } else if (!res.success) {
          toast.error(res.message);
        }
      } catch (error) {
        console.log("error ===", error);
      } finally {
        setLoading(false);
      }
    } else {
      setAddData({ ...addData, ...error });
    }
  };

  return (
    <>
      <div className=" min-h-screen bg-gray-100 pb-16 md:pb-20 lg:pb-24">
        <HeroLayoutBig
          img={AboutUs.Fram8}
          desc1="We can assist you in selecting the risk coverage schemes to all
              your Life and Non-Life Insurance requirements."
          title="Contact Us"
          mbClass=""
        />

        <div className="relative z-10 max-w-6xl mx-auto px-2 md:px-4 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 mb-10">
          <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg flex flex-col justify-start md:items-center ">
            <div className="flex-1 max-w-[820px] grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-8 md:gap-12 mb-8 md:mb-12">
              <div className="pl-2 sm:pl-4 md:pl-6">
                <p className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  Corporate Office
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <IoLocationSharp
                      color="#FFCC29"
                      className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-[#fff] flex-shrink-0"
                    />
                    <div className="text-sm sm:text-base">
                      <p>4th Floor,</p>
                      <p>KTC Illumination,</p>
                      <p>509 & 510, Vittal Rao Nagar, Madhapur,</p>
                      <p>Hyderabad - 500081, Telangana</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <TbMailFilled
                      color="#FFCC29"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#fff] flex-shrink-0"
                    />
                    <p className="text-sm sm:text-base">info@insugo.in</p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <FaMobile
                      color="#FFCC29"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#fff] flex-shrink-0"
                    />
                    <p className="text-sm sm:text-base">040-45494206</p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <TbBrandWhatsappFilled
                      color="#FFCC29"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#fff] flex-shrink-0"
                    />
                    <p className="text-sm sm:text-base">9676056688</p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block py-3 h-0 sm:h-[110%] flex-none w-[2px] bg-[#33333329]" />

              <div className="pl-2 sm:pl-4 md:pl-6">
                <p className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  Branch
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <IoLocationSharp
                      color="#FFCC29"
                      className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-[#fff] flex-shrink-0"
                    />
                    <div className="text-sm sm:text-base">
                      <p>SRKK Plaza, Shop No-302</p>
                      <p>G.G.Bus Street</p>
                      <p>Near Bank Circle</p>
                      <p>Kothagudem, Vijayawada</p>
                      <p>Andhra Pradesh - 520010</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <TbMailFilled
                      color="#FFCC29"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#fff] flex-shrink-0"
                    />
                    <p className="text-sm sm:text-base">info@insugo.in</p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <FaMobile
                      color="#FFCC29"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#fff] flex-shrink-0"
                    />
                    <p className="text-sm sm:text-base">0866-3559600</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white w-full  ">
              <div>
                <Heading title={"Enquiry"} />
                <form className=" mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <Input
                      onChange={(e) =>
                        handleChange(e.target.value, "first_name")
                      }
                      error={addData?.first_name_err}
                      value={addData?.first_name}
                      label="First Name"
                      id="firstName"
                      placeholder="Jack"
                      className="text-sm sm:text-base"
                    />
                    <Input
                      onChange={(e) =>
                        handleChange(e.target.value, "last_name")
                      }
                      error={addData?.last_name_err}
                      value={addData?.last_name}
                      label="Last Name"
                      id="lastName"
                      placeholder="Dsouza"
                      className="text-sm sm:text-base"
                    />
                    <Input
                      onChange={(e) => handleChange(e.target.value, "mobile")}
                      error={addData?.mobile_err}
                      value={addData?.mobile}
                      label="Mobile Number"
                      id="mobile"
                      placeholder="0123456789"
                      type="tel"
                      className="text-sm sm:text-base"
                    />
                    <Input
                      onChange={(e) => handleChange(e.target.value, "email")}
                      error={addData?.email_err}
                      value={addData?.email}
                      label="Email Id"
                      id="email"
                      placeholder="jack.d@gmail.com"
                      type="email"
                      className="text-sm sm:text-base"
                    />
                  </div>
                  <div className="mb-4 sm:mb-6">
                    <label
                      htmlFor="query"
                      className="block text-base sm:text-lg font-medium text-gray-700 mb-2"
                    >
                      Ask Query
                    </label>
                    <textarea
                      onChange={(e) => handleChange(e.target.value, "message")}
                      value={addData?.message}
                      id="query"
                      placeholder="Send Message"
                      rows="6"
                      className="mt-1 block w-full border-2 border-gray-300 rounded-lg shadow-sm p-2 sm:p-3 text-sm sm:text-lg focus:ring-primary focus:border-primary"
                    />
                    {addData?.message_err && (
                      <label className="block text-lg  text-red-400 mb-2">
                        {addData?.message_err}
                      </label>
                    )}
                  </div>
                  <div className="text-center">
                    <Button
                      disable={loading}
                      onClick={submitForm}
                      className="w-full sm:w-auto"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
