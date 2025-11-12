import { useState, useEffect } from "react";

const useScreenSizes = (breakpoints = []) => {
  const getScreenSizes = () =>
    breakpoints.reduce((acc, bp) => {
      acc[`isGreaterThan${bp}`] = window.innerWidth > bp;
      return acc;
    }, {});

  const [screenSizes, setScreenSizes] = useState(getScreenSizes);

  useEffect(() => {
    const handleResize = () => {
      setScreenSizes(getScreenSizes());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints]);

  return screenSizes;
};

export default useScreenSizes;
