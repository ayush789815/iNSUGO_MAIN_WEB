import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const ToggleButton = React.memo(({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-2xl text-white hover:text-primary transition-colors"
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>
  );
});

export default ToggleButton;
