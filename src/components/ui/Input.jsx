import React from "react";

const Input = React.memo(
  ({
    label,
    id,
    placeholder,
    type = "text",
    className = "",
    isRequired = false,
    maxLength,
    ariaLabel,
    accept,
    error,
    ...props
  }) => {
    return (
      <div>
        {label ? (
          <label
            htmlFor={id}
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            {label}
          </label>
        ) : (
          <input aria-label={ariaLabel} />
        )}
        <input
        accept={accept}
          type={type}
          id={id}
          placeholder={placeholder}
          required={isRequired}
          maxLength={maxLength}
          className={`mt-1 block w-full border-2 border-gray-300 rounded-lg shadow-sm px-3 py-2 text-lg focus:ring-primary focus:border-primary ${className}`}
          {...props}
        />
        {error && (
          <label
           
            className="block text-lg  text-red-400 mb-2"
          >
            {error}
          </label>
        )}
      </div>
    );
  }
);

export default Input;
