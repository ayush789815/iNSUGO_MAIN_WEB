import React from "react";

const Button = React.memo(
  ({
    children,
    variant = "primary",
    className = "",
    borderRadius = "0px 50px 50px 50px",
    type = "button",
    width = "",
    disable = false,
    bg = "",
    color = "",

    ...props
  }) => {
    const baseStyles = "font-semibold px-6 py-3 transition duration-300";
    const variants = {
      primary: "bg-primary text-black hover:bg-primary",
      secondary: "bg-gray-600 text-white hover:bg-gray-700",
    };

    return (
      <button
        type={type}
        disabled={disable}
        className={`${baseStyles} ${variants[variant]} ${className} ${width}`}
        style={{
          borderRadius,
          background: bg,
          color: color,
          opacity: disable ? 0.5 : 1,
          cursor: disable ? "not-allowed" :"pointer",
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
