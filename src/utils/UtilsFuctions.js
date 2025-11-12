export const HandleScrollForm = () => {
    const element = document.getElementById('formdata');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/';
      setTimeout(() => {
        const element = document.getElementById('formdata');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200); 
    }
  };

  export const validateFunction = (data, fields) => {
    const errors = {};
  
    fields.forEach((field) => {
      if (!data[field] || data[field].trim() === "") {
        // errors[`${field}_err`] = `${field.replaceAll("_", " ")} is required`;
        errors[`${field}_err`] = `${field.replace(/_/g, " ")} is required`;

      } else {
        
        switch (field) {
          case "email":
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data[field])) {
              errors[`${field}_err`] = "Invalid email address";
            }
            break;
          case "mobile":
            const mobileRegex = /^[0-9]{10}$/;
            if (!mobileRegex.test(data[field])) {
              errors[`${field}_err`] = "Invalid mobile number";
            }
            break;
          case "pincode":
            const pincodeRegex = /^[0-9]{6}$/; // Adjust regex if needed for different formats
            if (!pincodeRegex.test(data[field])) {
              errors[`${field}_err`] = "Invalid pincode (must be 6 digits)";
            }
            break;
          default:
            break;
        }
      }
    });

    // fields.forEach((field) => {
    //   if (!data[field] || data[field].trim() === "") {
    //     errors[`${field}_err`] = `${field.replace('_', ' ')} is required`;
    //   } else {
    //     switch (field) {
    //       case "email":
    //         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //         if (!emailRegex.test(data[field])) {
    //           errors[`${field}_err`] = "Invalid email address";
    //         }
    //         break;
    //       case "mobile":
    //         const mobileRegex = /^[0-9]{10}$/;
    //         if (!mobileRegex.test(data[field])) {
    //           errors[`${field}_err`] = "Invalid mobile number";
    //         }
    //         break;
    //       default:
    //         break;
    //     }
    //   }
    // });
  
    return errors;
  };
  
  export const CreateFormDatawithThisvalues = (data, keys) => {
    const formData = new FormData();
    keys.forEach((key) => {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    });
    return formData;
  };

  export const AllFeildEmptyObj = (data) => {
    const obj = {};
    Object.keys(data).forEach((key) => {
      obj[key] = "";
    });
    return obj;
  };