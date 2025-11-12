// import { useState, useCallback, useEffect } from "react";

// function usePagination(arr, conditions) {
//   const [currentSet, setCurrentSet] = useState(1);
//   const [width, setWidth] = useState(window.innerWidth);
//   const [totalSets, setTotalSets] = useState(1); // New state for total sets


//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     let total = 1; // Default to 1 set
//     for (let condition of conditions) {
//       if (width > condition.width) {
//         total = Math.ceil(arr.length / condition.count);
//         break;
//       }
//     }
//     setTotalSets(total);
//   }, [arr, width, conditions]); // Update total sets when dependencies change

//   const handleSetChange = (index) => {
//     setCurrentSet(index);
//   };

//   const VisibleArr = useCallback(() => {
//     for (let condition of conditions) {
//       if (width > condition.width) {
//         const startIndex = (currentSet - 1) * condition.count;
//         return arr.slice(startIndex, startIndex + condition.count);
//       }
//     }
//     return arr.slice(currentSet - 1, currentSet);
//   }, [currentSet, arr, width, conditions]);

//   // const NavigationDotsData = useCallback(() => {
//   //   return Array(totalSets).fill();
//   // }, [totalSets]);
//     const NavigationDotsData = useCallback(() => {
//     for (let condition of conditions) {
//       if (width > condition.width) {
//         setCurrentSet(Array(Math.ceil(arr.length / condition.count)).fill())
//         return Array(Math.ceil(arr.length / condition.count)).fill();
//       }
//     }
//     return Array(arr.length).fill();
//   }, [arr, width, conditions]);

//   return {
//     currentSet,
//     handleSetChange,
//     VisibleArr,
//     NavigationDotsData,
//     totalSets, // Now returning total sets
//   };
// }

// export default usePagination;

import { useState, useCallback, useEffect } from "react";
import { NavigationDots } from "../components/Layouts/UtilsLayout";

function usePagination(arr, conditions) {
  const [currentSet, setCurrentSet] = useState(1);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle set change
  const handleSetChange = (index) => {
    setCurrentSet(index);
  };

  const VisibleArr = useCallback(() => {
    for (let condition of conditions) {
      if (width > condition.width) {
        const startIndex = (currentSet - 1) * condition.count;
        return arr.slice(startIndex, startIndex + condition.count);
      }
    }
    // Default condition if no conditions match
    return arr.slice(currentSet - 1, currentSet);
  }, [currentSet, arr, width, conditions]);

  const NavigationDotsData = useCallback(() => {
    for (let condition of conditions) {
      if (width > condition.width) {
        return Array(Math.ceil(arr.length / condition.count)).fill();
      }
    }
    return Array(arr.length).fill();
  }, [arr, width, conditions]);

  const totalSets = NavigationDotsData()?.length;

  return {
    currentSet,
    handleSetChange,
    totalSets,
    VisibleArr,
    NavigationDotsData,
  };
}

export default usePagination;
