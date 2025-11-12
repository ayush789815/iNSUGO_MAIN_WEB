import React, { useCallback, useState } from "react";
// import Button from '../../Button';
// import Input from '../../Input';
import Button from "../../ui/Button";
import Select from "../../ui/Select";
import Input from "../../ui/Input";
import { Heading, Heading3 } from "../UtilsLayout";
import stateData from "../../../utils/State.json";
import {
  AllFeildEmptyObj,
  CreateFormDatawithThisvalues,
  validateFunction,
} from "../../../utils/UtilsFuctions";
import { base_url } from "../../../utils/constant";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Form = React.memo(
  ({
    className = "py-16",
    gap = "gap-6",
    rows = 6,
    modal = false,
    setOpen,
  }) => {
    const [addData, setAddData] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // ✅ Validation function for live validation onChange
    const validateField = (key, value) => {
      let error = "";
      switch (key) {
        case "first_name":
        case "last_name":
          if (!value.trim()) error = "This field is required";
          else if (!/^[A-Za-z\s]+$/.test(value))
            error = "Only letters are allowed";
          break;
        case "email":
          if (!value.trim()) error = "Email is required";
          else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value))
            error = "Invalid email format";
          break;
        case "mobile":
          if (!value.trim()) error = "Mobile number is required";
          else if (!/^[0-9]{10}$/.test(value))
            error = "Enter a valid 10-digit number";
          break;
        case "state":
          if (!value.trim()) error = "State is required";
          break;
        case "city":
          if (!value.trim()) error = "City is required";
          break;
        case "insurance_type":
          if (!value.trim()) error = "Please select an insurance type";
          break;
        case "type_of_insurance":
          if (!value.trim()) error = "Type of insurance is required";
          break;
        case "message":
          if (!value.trim()) error = "Message is required";
          else if (value.length < 10)
            error = "Message should be at least 10 characters";
          break;
        default:
          break;
      }
      return error;
    };

    const submitForm = async () => {
      const error = validateFunction(addData, [
        "first_name",
        "last_name",
        "mobile",
        "email",
        "state",
        "city",
        "insurance_type",
        "type_of_insurance",
        // "message",
      ]);

      if (Object.keys(error).length == 0) {
        const body = CreateFormDatawithThisvalues(addData, [
          "first_name",
          "last_name",
          "mobile",
          "email",
          "state",
          "city",
          "insurance_type",
          "type_of_insurance",
          "message",
        ]);

        body.append("type", "contact_us");

        try {
          setLoading(true);
          const response = await fetch(
            base_url + "insugo/" + "contact_us.php",
            {
              method: "POST",
              body: body,
            }
          );
          const res = await response.json();
          if (res.success) {
            toast.success(res.message);
            navigate("/");
            if (setOpen) {
              localStorage.setItem("hasSeenPopup", "true");
              setOpen(false);
            }
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

    const handleChange = useCallback((value, key, okey1, okey2) => {
      const errMsg = validateField(key, value);
      setAddData((prevData) => ({
        ...prevData,
        [key]: value,
        [`${key}_err`]: errMsg,
        [okey1]: "",
        [okey2]: "",
      }));
    }, []);

    return (
      <div id="formdata" className={`flex flex-col items-center ${className}`}>
        <form className="w-full max-w-5xl bg-white shadow-2xl rounded-lg p-4 border-2 border-gray-200">
          <Heading3
            title={"Secure Your Future: Start with a Quick Quote!"}
            py={modal ? "py-3 text-lg !md:text-xl" : ""}
          />
          <div className={`grid grid-cols-1 md:grid-cols-2 ${gap}`}>
            <Input
              onChange={(e) => handleChange(e.target.value, "first_name")}
              error={addData?.first_name_err}
              value={addData?.first_name}
              label="First Name*"
              id="firstName"
              placeholder="Jack"
            />
            <Input
              onChange={(e) => handleChange(e.target.value, "last_name")}
              error={addData?.last_name_err}
              value={addData?.last_name}
              label="Last Name*"
              id="lastName"
              placeholder="Dsouza"
            />
            <Input
              onChange={(e) => handleChange(e.target.value, "mobile")}
              error={addData?.mobile_err}
              value={addData?.mobile}
              label="Mobile Number*"
              id="mobile"
              placeholder="0123456789"
              type="tel"
            />
            <Input
              onChange={(e) => handleChange(e.target.value, "email")}
              error={addData?.email_err}
              value={addData?.email}
              label="Email Id*"
              id="email"
              placeholder="jack.d@gmail.com"
              type="email"
            />
            <Select
              onChange={(e) => handleChange(e.target.value, "state", "city")}
              error={addData?.state_err}
              value={addData?.state}
              label="State*"
              id="state"
              options={Object.keys(stateData ?? {}) // Ensure stateData is not undefined
                .sort((a, b) => a.localeCompare(b)) // No need for additional null check
                .map((v, i) => (
                  <option key={i} value={v}>
                    {v}
                  </option>
                ))}
            />
            <Select
              onChange={(e) => handleChange(e.target.value, "city")}
              error={addData?.city_err}
              value={addData?.city}
              label="City*"
              id="city"
              options={(stateData?.[addData?.state] ?? []) // Ensure valid array before sorting
                .sort((a, b) => a.localeCompare(b))
                .map((v, i) => (
                  <option key={i} value={v}>
                    {v}
                  </option>
                ))}
            />

            <Select
              placeholder={"Select"}
              onChange={(e) => handleChange(e.target.value, "insurance_type")}
              error={addData?.insurance_type_err}
              value={addData?.insurance_type}
              label="Insurance Type*"
              id="insurance_type"
              options={
                <>
                  <option value={"Corporate"}>Corporate</option>
                  <option value={"Individual"}>Individual</option>
                </>
              }
            />
            <Input
              onChange={(e) =>
                handleChange(e.target.value, "type_of_insurance")
              }
              error={addData?.type_of_insurance_err}
              value={addData?.type_of_insurance}
              label="Type of Insurance*"
              id="type_of_insurance"
              placeholder="Type of Insurance"
              type="text"
            />
            {/* <Input
            onChange={(e) => handleChange(e.target.value, "full_name")}
            error={addData?.full_name_err}
            value={addData?.full_name}
            label="Full Name"
            id="firstName"
            placeholder="Jack"
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
            onChange={(e) => handleChange(e.target.value, "mobile")}
            error={addData?.mobile_err}
            value={addData?.mobile}
            label="Mobile Number"
            id="mobile"
            placeholder="0123456789"
            type="tel"
          />
          <Select
            onChange={(e) => handleChange(e.target.value, "city")}
            error={addData?.city_err}
            value={addData?.city}
            label="City"
            placeholder={"City"}
            id="city"
            options={
              <>
                {Object.values(stateData)?.flat()
                  .sort((a, b) => a.localeCompare(b))
                  ?.map((val, ind) => (
                    <option key={ind} value={val}>
                      {val}
                    </option>
                  ))}
              </>
            }
          />
          <Input
            onChange={(e) => handleChange(e.target.value, "pincode")}
            error={addData?.pincode_err}
            value={addData?.pincode}
            label="Pin Code "
            id="pincode"
            placeholder="123456"
            type="text"
          />
          <Select
            placeholder={"Select"}
            onChange={(e) => handleChange(e.target.value, "insurance_type")}
            error={addData?.insurance_type_err}
            value={addData?.insurance_type}
            label="Insurance Type"
            id="insurance_type"
            options={
              <>
                <option value={"Corporate"}>Corporate</option>
                <option value={"Individual"}>Individual</option>
              </>
            }
          /> */}
          </div>

          <div className="mt-6">
            <label
              htmlFor="query"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Ask Query
            </label>
            <textarea
              onChange={(e) => handleChange(e.target.value, "message")}
              value={addData?.message}
              id="query"
              placeholder="Send Message"
              rows={rows}
              className="mt-1 block w-full border-2 border-gray-300 rounded-lg shadow-sm p-3 text-lg focus:ring-primary focus:border-primary"
            />
            {addData?.message_err && (
              <label className="block text-lg  text-red-400 mb-2">
                {addData?.message_err}
              </label>
            )}
          </div>

          <div className="mt-8 text-center">
            <Button disable={loading} onClick={submitForm}>
              Get a Quote
            </Button>
          </div>
        </form>
      </div>
    );
  }
);

export default Form;
