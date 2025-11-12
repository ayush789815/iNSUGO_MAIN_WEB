import React from "react";

const Select = React.memo(
  ({
    label,
    id,
    options,
    className = "",
    placeholder = "Choose an option",
    isRequired = false,
    disabled = false,
    error,
    ...props
  }) => {
    return (
      <div>
        {label && (
          <label
            htmlFor={id}
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            {label}
          </label>
        )}
        <select
          id={id}
          required={isRequired}
          disabled={disabled}
          className={`mt-1 block w-full border-2 border-gray-300 rounded-lg shadow-sm p-3 text-lg focus:ring-primary focus:border-primary ${className}`}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options}
        </select>
        {error && (
          <label className="block text-lg text-red-400 mb-2">{error}</label>
        )}
      </div>
    );
  }
);

export default Select;
