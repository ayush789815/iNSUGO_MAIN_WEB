import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const MyModal = React.memo(
  ({ isOpen, setIsOpen, title, children, CancelClick,scallClass }) => {
    useEffect(() => {
      if (isOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }

      // Cleanup function to remove the class when the component unmounts
      return () => {
        document.body.classList.remove("overflow-hidden");
      };
    }, [isOpen]);

    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        setIsOpen(false);
      }
    };

    return (
      <>
        {isOpen && (
          <div
            className="fixed inset-0 z-[1050] flex items-center justify-center overflow-hidden outline-none focus:outline-none modal-overlay"
            // onClick={handleOutsideClick}
          >
            {/* Non-clickable & non-scrollable background */}
            <div className="fixed inset-0 bg-black opacity-50 pointer-events-none"></div>

            {/* Modal content */}
            <div className={`relative w-[90%] xl:w-[60%] mx-auto my-6 max-h-[90%] overflow-y-auto scrollbar-none bg-white border-2 border-gray-200 shadow-md rounded-lg z-[1051] ${scallClass}`}>
              {/* Modal header */}
              <div className="px-4 py-2 border-b border-gray-200 flex items-center justify-between">
                <h3 className={`${scallClass ? "text-2xl":"text-lg"} font-bold text-gray-900`}>{title}</h3>
                <IoMdClose
                  cursor={"pointer"}
                  color="#000"
                  size={20}
                  onClick={() => {
                    setIsOpen(false);
                    if (CancelClick) {
                      CancelClick();
                    }
                  }}
                />
              </div>

              {/* Modal content */}
              {children}
            </div>
          </div>
        )}
      </>
    );
  }
);

export default MyModal;


// import React, { useEffect } from "react";
// import { IoMdClose } from "react-icons/io";

// const MyModal = React.memo(
//   ({ isOpen, setIsOpen, title, children, CancelClick }) => {
//     useEffect(() => {
//       if (isOpen) {
//         document.body.classList.add("overflow-hidden");
//       } else {
//         document.body.classList.remove("overflow-hidden");
//       }

//       // Cleanup function to remove the class when component unmounts
//       return () => {
//         document.body.classList.remove("overflow-hidden");
//       };
//     }, [isOpen]);

//     const handleOutsideClick = (e) => {
//       if (e.target.classList.contains("modal-overlay")) {
//         setIsOpen(false);
//       }
//     };

//     return (
//       <>
//         {isOpen && (
//           <div
//             className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none modal-overlay scrollbar-none"
//             onClick={handleOutsideClick}
//           >
//             <div className="fixed inset-0 bg-black opacity-50 modal-overlay"></div>
//             <div className="relative w-[90%] xl:w-[60%] mx-auto my-6 max-h-[90%] overflow-y-scroll scrollbar-none">
//               <div className="relative flex flex-col bg-white border-2 border-gray-200 shadow-md rounded-lg md:min-w-full">
//                 {/* Modal header */}
//                 <div className="px-4 py-2 border-b border-gray-200 flex items-center justify-between">
//                   <h3 className="text-lg font-medium text-gray-900">{title}</h3>
//                   <IoMdClose
//                     cursor={"pointer"}
//                     color="#000"
//                     size={20}
//                     onClick={() => {
//                       setIsOpen(false);
//                       if (CancelClick) {
//                         CancelClick();
//                       }
//                     }}
//                   />
//                 </div>

//                 {children}
//               </div>
//             </div>
//           </div>
//         )}
//       </>
//     );
//   }
// );

// export default MyModal;




// import React from "react";
// import { IoMdClose } from "react-icons/io";

// const MyModal = React.memo(
//   ({ isOpen, setIsOpen, title, children, CancelClick }) => {
//     const handleOutsideClick = (e) => {
//       if (e.target.classList.contains("modal-overlay")) {
//         setIsOpen(false);
//       }
//     };
//     return (
//       <>
//         {isOpen && (
//           <div
//             className="fixed inset-0 z-50  flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none modal-overlay scrollbar-none"
//             onClick={handleOutsideClick}
//           >
//             <div className="fixed inset-0 bg-black opacity-50 modal-overlay"></div>
//             <div className="relative w-[90%] xl:w-[60%] mx-auto my-6 max-h-[90%] overflow-y-scroll scrollbar-none">
//               <div className="relative flex flex-col bg-white border-2 border-gray-200 shadow-md rounded-lg  md:min-w-full">
//                 {/* Modal header */}
//                 <div className="px-4 py-2 border-b border-gray-200 flex items-center justify-between">
//                   <h3 className="text-lg font-medium text-gray-900">{title}</h3>
//                   <IoMdClose
//                     cursor={"pointer"}
//                     color="#000"
//                     size={20}
//                     onClick={() => {
//                       setIsOpen(false);
//                       if (CancelClick) {
//                         CancelClick();
//                       }
//                     }}
//                     className=""
//                   />
//                 </div>

//                 {children}
//               </div>
//             </div>
//           </div>
//         )}
//       </>
//     );
//   }
// );

// export default MyModal;
