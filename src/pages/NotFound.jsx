import React from "react";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-xl md:text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <Button onClick={() => navigate("/")}>Back to Home</Button>
    </div>
  );
};

export default NotFound;
