import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { imagePath } from "@utils/imagepath.js";
import { ChevronUp, ChevronRight } from "lucide-react";
// import Button from "../../components/ui/Button";
import ToggleButton from "../../ui/ToggleButton";
import Button from "../../ui/Button";
import { MenuItem, MenuWrapper } from "../UtilsLayout";
import { HandleScrollForm } from "../../../utils/UtilsFuctions";
import {
  corporateMenuItems,
  individualMenuItems,
} from "../../../utils/constant";

const Navbar = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState(null);

  const navigate = useNavigate();

  let submenuTimeout;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  // const handleServicesMouseEnter = () => {
  //   clearTimeout(submenuTimeout);
  //   setIsServicesOpen(true);
  //   setActiveSubmenu(false);
  //   setActiveMobileSubmenu(false);
  //   setActiveNestedSubmenu(false);
  // };

  // const handleServicesMouseLeave = () => {
  //   submenuTimeout = setTimeout(() => setIsServicesOpen(false), 200);
  // };

  const handleMenuMouseEnter = (menu) => {
    clearTimeout(submenuTimeout);
    setActiveSubmenu(menu);
  };

  const handleMenuMouseLeave = () => {
    submenuTimeout = setTimeout(() => {
      setActiveSubmenu(null);
      setActiveNestedSubmenu(null);
    }, 200);
  };

  const handleNestedSubmenuMouseEnter = (submenu) => {
    setActiveNestedSubmenu(submenu);
  };

  useEffect(() => {
    return () => clearTimeout(submenuTimeout);
  }, []);

  return (
    <nav
      style={{
        zIndex: 51,
      }}
      className="h-auto xl:h-[88px] bg-[#333333] text-white px-6 py-3 md:px-16 lg:px-24 flex items-center justify-between  z-50 fixed w-full"
    >
      <Link to="/" className="ml-[-0.5rem] md:ml-[-1rem] lg:ml-[-1.5rem]">
        <img
          loading="lazy"
          src={imagePath.logo}
          alt="Logo"
          className="h-8 md:h-10 lg:h-14 xl:h-16 w-auto"
        />
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden xl:flex justify-center items-center space-x-5 2xl:space-x-8 text-base font-medium h-full">
        <Link to="/about-us" className="hover:text-primary cursor-pointer ">
          About Us
        </Link>
        <li
          className="hover:text-primary cursor-pointer relative group  h-full flex justify-between items-center"
          // onMouseEnter={handleServicesMouseEnter}
          // onMouseLeave={handleServicesMouseLeave}
          onClick={() => navigate("/services")}
        >
          <span className="flex items-center gap-1">Services</span>
        </li>
        <li
          className="hover:text-primary cursor-pointer relative  h-full flex justify-between items-center"
          onMouseEnter={() => handleMenuMouseEnter("corporate")}
          onMouseLeave={handleMenuMouseLeave}
        >
          <span className="flex items-center gap-1">
            Corporate Insurance
            {/* {activeSubmenu === "corporate" && <ChevronUp className="w-4 h-4" />} */}
            <ChevronUp
              style={{
                transform:
                  activeSubmenu === "corporate"
                    ? "rotate(0deg)"
                    : "rotate(180deg)",
              }}
              className="w-4 h-4"
            />
          </span>
          {activeSubmenu === "corporate" && (
            <MenuWrapper>
              {Object.entries(corporateMenuItems).map(([category, items]) => (
                <li
                  key={category}
                  className="mb-2 hover:bg-gray-700 rounded px-2 py-1 relative"
                  onMouseEnter={() => handleNestedSubmenuMouseEnter(category)}
                >
                  <Link
                    to={`/corporate/${category
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="flex items-center justify-between w-full hover:text-primary"
                  >
                    {category}

                    {/* <ChevronRight className="w-4 h-4" /> */}
                    <ChevronUp
                      style={{
                        transform:
                          activeNestedSubmenu === category
                            ? "rotate(180deg)"
                            : "rotate(90deg)",
                      }}
                      className="w-4 h-4"
                    />
                  </Link>
                  {activeNestedSubmenu === category && (
                    <MenuWrapper side={"105%"}>
                      {items.map((item, i) => (
                        <MenuItem
                          onClick={handleMenuMouseLeave}
                          key={i}
                          title={item}
                          to={`/corporate/${category
                            .toLowerCase()
                            .replace(/\s+/g, "-")}/${item
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        />
                      ))}
                    </MenuWrapper>
                  )}
                </li>
              ))}
            </MenuWrapper>
          )}
        </li>
        <li
          className="hover:text-primary cursor-pointer relative  h-full flex justify-between items-center"
          onMouseEnter={() => handleMenuMouseEnter("individual")}
          onMouseLeave={handleMenuMouseLeave}
        >
          <span className="flex items-center gap-1">
            Individual Insurance
            <ChevronUp
              style={{
                transform:
                  activeSubmenu === "individual"
                    ? "rotate(0deg)"
                    : "rotate(180deg)",
              }}
              className="w-4 h-4"
            />
          </span>
          {activeSubmenu === "individual" && (
            <MenuWrapper>
              {individualMenuItems.map((item, i) => (
                <MenuItem
                  onClick={handleMenuMouseLeave}
                  key={i}
                  title={item}
                  to={`/individual/${item.toLowerCase().replace(/\s+/g, "-")}`}
                />
              ))}
            </MenuWrapper>
          )}
        </li>
        {/* <li className="hover:text-primary cursor-pointer">Careers</li> */}
        <li className="hover:text-primary cursor-pointer  h-full flex justify-between items-center">
          <Link to="/media" className="hover:text-primary cursor-pointer">
            Media
          </Link>
        </li>
        <li className="hover:text-primary cursor-pointer  h-full flex justify-between items-center">
          <Link to="/blog" className="hover:text-primary cursor-pointer">
            Blog
          </Link>
        </li>
        <li className="hover:text-primary cursor-pointer  h-full flex justify-between items-center">
          <Link to="/contact-us" className="hover:text-primary cursor-pointer">
            Contact Us
          </Link>
        </li>
      </ul>

      <div className="hidden xl:block mr-[-0.5rem] md:mr-[-1rem] lg:mr-[-1.5rem]">
        <Button className="text-sm px-4 py-2" onClick={HandleScrollForm}>
          Get A Quote
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="xl:hidden">
        <ToggleButton isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-2/3 bg-[#333333] text-white p-8 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 shadow-lg overflow-y-auto`}
      >
        <div className="flex justify-between items-center mb-8">
          {/* <h2 className="text-xl font-bold">Menu</h2> */}
          <p className="text-xl font-bold">Menu</p>
          <ToggleButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        <ul className="space-y-6 text-lg font-medium">
          <li className="hover:text-primary cursor-pointer">
            <Link to="/about-us" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          {/* <li>
            <div
              className="flex items-center justify-between hover:text-primary cursor-pointer"
              onClick={() =>
                setActiveMobileSubmenu(
                  activeMobileSubmenu === "services" ? null : "services"
                )
              }
            >
              <span>Services</span>
              <ChevronUp
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeMobileSubmenu === "services" ? "rotate-0" : "rotate-180"
                }`}
              />
            </div>
            {activeMobileSubmenu === "services" && (
              <ul className="mt-2 ml-4 space-y-2">
                <li className="hover:text-primary">
                  <Link onClick={toggleMenu} to="/services">
                    Corporate
                  </Link>
                </li>
                <li className="hover:text-primary">
                  <Link onClick={toggleMenu} to="/individual">
                    Individual
                  </Link>
                </li>
              </ul>
            )}
          </li> */}
          <li className="hover:text-primary cursor-pointer">
            {/* Media */}
            <Link
              onClick={toggleMenu}
              to="/services"
              className="hover:text-primary cursor-pointer"
            >
              Services
            </Link>
          </li>
          {/* Mobile Corporate Insurance Dropdown */}
          <li>
            <div
              className="flex items-center justify-between hover:text-primary cursor-pointer"
              onClick={() =>
                setActiveMobileSubmenu(
                  activeMobileSubmenu === "corporate" ? null : "corporate"
                )
              }
            >
              <span>Corporate Insurance</span>
              <ChevronUp
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeMobileSubmenu === "corporate"
                    ? "rotate-0"
                    : "rotate-180"
                }`}
              />
            </div>
            {activeMobileSubmenu === "corporate" && (
              <ul className="mt-2 ml-4 space-y-4">
                {Object.entries(corporateMenuItems).map(([category, items]) => (
                  <li key={category} className="mt-2 ">
                    <Link
                      className="flex items-center justify-between hover:text-primary cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveNestedSubmenu(
                          activeNestedSubmenu === category ? null : category
                        );
                      }}
                    >
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMenu();
                          navigate(
                            `/corporate/${category
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`
                          );
                        }}
                      >
                        {category}
                      </span>
                      <ChevronUp
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeNestedSubmenu === category
                            ? "rotate-0"
                            : "rotate-180"
                        }`}
                      />
                    </Link>
                    {activeNestedSubmenu === category && (
                      <ul className="mt-2 ml-4 space-y-2">
                        {items.map((item) => (
                          <li key={item} className="hover:text-primary">
                            <Link
                              onClick={toggleMenu}
                              to={`/corporate/${category
                                .toLowerCase()
                                .replace(/\s+/g, "-")}/${item
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* Mobile Individual Insurance Dropdown */}
          <li>
            <div
              className="flex items-center justify-between hover:text-primary cursor-pointer"
              onClick={() =>
                setActiveMobileSubmenu(
                  activeMobileSubmenu === "individual" ? null : "individual"
                )
              }
            >
              <span>Individual Insurance</span>
              <ChevronUp
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeMobileSubmenu === "individual"
                    ? "rotate-0"
                    : "rotate-180"
                }`}
              />
            </div>
            {activeMobileSubmenu === "individual" && (
              <ul className="mt-2 ml-4 space-y-2">
                {individualMenuItems.map((item) => (
                  <li key={item} className="hover:text-primary">
                    <Link
                      onClick={toggleMenu}
                      to={`/individual/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="hover:text-primary cursor-pointer">
            {/* Media */}
            <Link
              onClick={toggleMenu}
              to="/media"
              className="hover:text-primary cursor-pointer"
            >
              Media
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              to="/contact-us"
              className="hover:text-primary cursor-pointer"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              to="/blog"
              className="hover:text-primary cursor-pointer"
            >
              Blog
            </Link>
          </li>
          <li>
            <Button
              className="w-full"
              onClick={() => {
                HandleScrollForm();
                toggleMenu();
              }}
            >
              Get A Quote
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;
