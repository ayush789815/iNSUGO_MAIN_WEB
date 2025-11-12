import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "./Home/Navbar";
import Footer from "./Home/Footer";
import Form from "./Home/Form";
import MyModal from "../MyModal";

const Layout = React.memo(() => {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check localStorage to see if the popup has already been shown
  useEffect(() => {
    // const hasSeenPopup = localStorage.getItem("hasSeenPopup");

    const hasSeenPopup = JSON.parse(localStorage.getItem("hasSeenPopup"));

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 120000); // 2 minutes delay (120000 ms)

      return () => clearTimeout(timer);
    }
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToForm = () => {
    const element = document.getElementById("formdata");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle popup close
  const handleClosePopup = () => {
    setOpen(false);
    localStorage.setItem("hasSeenPopup", "true"); // Store in localStorage so it doesn't show again
  };

  return (
    <div className="bg-[#F8F8F8] relative">
      <Navbar onScroll={handleScrollToForm} />
      <main className="pt-14 sm:pt-16 md:pt-16 lg:pt-16 xl:pt-20">
        <Outlet />
      </main>

      {pathname.includes("about-us") ||
      pathname.includes("contact-us") ||
      pathname.includes("media") ||
      pathname.includes("careers") ||
      pathname.includes("career-details") ||
      pathname.includes("company-policies") ||
      pathname.includes("terms-of-services") ||
      pathname.includes("blog") ||
      pathname.includes("blog-details") ? null : (
        <Form />
      )}

      <Footer />

      {/* Go to Top Button */}
      {showScrollTop && (
        <button
          style={{
            zIndex: 100,
          }}
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-3 bg-[#FFCC29] text-white p-4 rounded-full shadow-lg transition-all hover:bg-[#FFCC29]"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}

      {/* Modal Pop-up after 2 mins */}
      <MyModal
        scallClass={`scale-[.95] md:scale-[.85] lg:scale-[.8] xl:scale-[.7]`}
        title={"Contact Form"}
        isOpen={open}
        setIsOpen={setOpen}
        CancelClick={handleClosePopup}
      >
        <Form className={""} gap={"gap-2"} rows={2} modal setOpen={setOpen} />
      </MyModal>
    </div>
  );
});

export default Layout;

// // src/Layouts/Layout.jsx
// import React from "react";
// import { Outlet, useLocation } from "react-router-dom"; // Import Outlet
// import Navbar from "./Home/Navbar";
// import Footer from "./Home/Footer";
// import Form from "./Home/Form";

// const Layout = React.memo(() => {
//   const { pathname } = useLocation();
//   const handleScrollToForm = () => {
//     const element = document.getElementById("formdata");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   return (
//     <div className="bg-[#F8F8F8]">
//       <Navbar onScroll={handleScrollToForm} />
//       <main className=" pt-14 sm:pt-16 md:pt-16 lg:pt-16  xl:pt-20 ">
//         <Outlet />
//       </main>
//       {pathname == "/about-us" ||
//       pathname == "/contact-us" ||
//       pathname == "/media" ||
//       pathname == "/careers" ||
//       pathname == "/career-details" ||
//       pathname == "/company-policies" ||
//       pathname == "/terms-of-services" ||
//       pathname == "/blog" ||
//       // pathname == "/blog-details"
//       pathname.includes("blog-details") ? (
//         ""
//       ) : (
//         <Form />
//       )}
//       <Footer />
//     </div>
//   );
// });

// export default Layout;
