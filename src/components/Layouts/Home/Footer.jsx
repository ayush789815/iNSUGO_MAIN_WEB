import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { imagePath } from "@utils/imagepath.js";
import { RiWhatsappFill } from "react-icons/ri";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import { FooterIcon, MenuItem, MenuWrapper } from "../UtilsLayout";
import {
  corporateMenuItems,
  individualMenuItems,
} from "../../../utils/constant";
import { NewImagePath } from "../../../utils/imagepath";

const Footer = React.memo(() => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState(null);

  let submenuTimeout;

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

  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <footer className="bg-[#333333] text-white overflow-scroll">
      {/* Map Image */}

      {pathname != "/contact-us" ? (
        ""
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4118.678104761695!2d78.390894!3d17.439037499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9383d4effad5%3A0xefdcea5843dba77d!2sINSUGO%20INSURANCE%20BROKERS%20PRIVATE%20LTD!5e1!3m2!1sen!2sin!4v1735737291738!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{
            border: 0,
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}

      {/* Main Content - Using 8 column grid */}
      <div className="container px-4 sm:px-24 py-12 max-w-full">
        {/* Logo Section */}
        {/* <div className="mb-12">
          <img
loading="lazy"
            src={imagePath.logo}
            alt="INSUGO - EASE OF INSURANCE"
            // className="h-12 sm:h-16 lg:h-20"
            className="h-8 md:h-10 lg:h-14 xl:h-16"
          />
          <h2 className="max-w-[180px] text-center mt-3 text-3xl">IRDAI</h2>
        </div> */}
        <div className="mb-12 flex flex-col items-start">
          <img
            loading="lazy"
            src={imagePath.logo}
            alt="INSUGO - EASE OF INSURANCE"
            className="h-8 md:h-10 lg:h-14 xl:h-16"
          />
          {/* <h2 className="max-w-fit text-center mt-3 text-lg md:text-md lg:text-lg xl:text-xl">
            IRDA License No : 694
          </h2> */}
          <p className="max-w-fit text-center mt-3 text-lg md:text-md lg:text-lg xl:text-xl">
            IRDA License No : 694
          </p>
        </div>

        {/* Grid Section - 8 columns with proper spacing */}
        <div className="grid grid-cols-12 gap-8">
          {/* Reach Us At - Spans 3 columns */}
          <div className="col-span-6 md:col-span-3">
            <h4 className="text-primary font-bold text-xl lg:text-2xl mb-6">
              Reach Us At
            </h4>
            <address className="text-base lg:text-lg not-italic leading-relaxed">
              <p className="mb-1">Corporate Office</p>
              <p className="mb-1">4th Floor,</p>
              <p className="mb-1">KTC Illumination,</p>
              <p className="mb-1"> 509 & 510, Vittal Rao Nagar, Madhapur,</p>
              <p>Hyderabad - 500081, Telangana</p>
            </address>
          </div>

          {/* Quick Links - Spans 2 columns */}
          <div className="col-span-6 md:col-span-3">
            <h4 className="text-primary font-bold text-xl lg:text-2xl mb-6">
              About Insugo
            </h4>
            <ul className="text-base lg:text-lg space-y-3">
              <li
                onClick={() => navigate("/about-us")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                About Us
              </li>

              <li
                onClick={() => navigate("/careers")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Careers
              </li>
              <li
                onClick={() => navigate("/media")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Media
              </li>
              <li
                onClick={() => navigate("/terms-of-services")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Terms of Service
              </li>
            </ul>
          </div>

          {/* Quick Links - Spans 2 columns */}
          <div className="col-span-6 md:col-span-3">
            <h4 className="text-primary font-bold text-xl lg:text-2xl mb-6">
              Quick Links
            </h4>
            <ul className="text-base lg:text-lg space-y-3">
              <li className="hover:text-primary transition-colors cursor-pointer">
                Services
              </li>
              {/* <li
                onClick={() => navigate("/services")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Corporate Insurance
              </li> */}
              <li
                className="hover:text-primary cursor-pointer relative  h-full w-[170px] md:w-[220px]"
                onMouseEnter={() => handleMenuMouseEnter("corporate")}
                onMouseLeave={handleMenuMouseLeave}
              >
                <span className="flex items-center justify-between gap-1  w-[170px] md:w-[220px]">
                  Corporate Insurance
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
                  <MenuWrapper top={true}>
                    {Object.entries(corporateMenuItems).map(
                      ([category, items]) => (
                        <li
                          key={category}
                          className="mb-2 hover:bg-gray-700 rounded px-2 py-1 relative"
                        >
                          <span
                            // to={`/corporate/${category
                            //   .toLowerCase()
                            //   .replace(/\s+/g, "-")}`}
                            className="flex items-center justify-between w-full hover:text-primary"
                          >
                            <span
                              onClick={() =>
                                navigate(
                                  `/corporate/${category
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`
                                )
                              }
                            >
                              {category}
                            </span>

                            <ChevronUp
                              onMouseEnter={() =>
                                handleNestedSubmenuMouseEnter(category)
                              }
                              style={{
                                transform:
                                  activeNestedSubmenu === category
                                    ? "rotate(180deg)"
                                    : "rotate(90deg)",
                              }}
                              className="w-4 h-4"
                            />
                          </span>
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
                      )
                    )}
                  </MenuWrapper>
                )}
              </li>
              {/* <li
                onClick={() => navigate("/individual")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Individual Insurance
              </li> */}
              <li
                onMouseLeave={handleMenuMouseLeave}
                className="hover:text-primary cursor-pointer relative  h-full flex justify-between items-center w-[170px] md:w-[220px]"
              >
                <span
                  onMouseEnter={() => handleMenuMouseEnter("individual")}
                  className="flex items-center gap-1 w-[170px] md:w-[220px] justify-between"
                >
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
                  <MenuWrapper top={true}>
                    {individualMenuItems.map((item, i) => (
                      <MenuItem
                        onClick={handleMenuMouseLeave}
                        key={i}
                        title={item}
                        to={`/individual/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      />
                    ))}
                  </MenuWrapper>
                )}
              </li>
              {/* <li className="hover:text-primary transition-colors cursor-pointer">Media</li> */}
              <li
                onClick={() => navigate("/blog")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Blog
              </li>
              <li
                onClick={() => navigate("/contact-us")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Contact Us
              </li>
            </ul>
          </div>

          {/* Contact Us - Spans 3 columns */}
          <div className="col-span-6 md:col-span-3">
            <h4 className="text-primary font-bold text-xl lg:text-2xl mb-6">
              Contact Us
            </h4>
            <ul className="text-base lg:text-lg space-y-3">
              {/* <li className="flex items-center gap-3">
                <MdEmail className="text-primary" size={24} />
                <span className="hover:text-primary transition-colors cursor-pointer">
                  info@insugo.in
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="text-primary" size={24} />
                <span className="hover:text-primary transition-colors cursor-pointer">
                  040-43464206
                </span>
              </li> */}
              <li className="flex items-center gap-3">
                <MdEmail className="text-primary" size={24} />
                <a
                  href="mailto:info@insugo.in"
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  info@insugo.in
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MdPhone className="text-primary" size={24} />
                <a
                  href="tel:04043464206"
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  040-43464206
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FooterIcon
                  src={NewImagePath?.FooterWhatsAppIcon}
                  alt="Whatsapp"
                />
                <span className="hover:text-primary transition-colors cursor-pointer">
                  <a href="https://wa.me/9676056688" target="_blank">
                    9676056688
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FooterIcon
                  src={NewImagePath?.FooterLinkDinIcon}
                  alt="Linkdin"
                />
                <span className="hover:text-primary transition-colors cursor-pointer">
                  {/* <a href="https://www.linkedin.com/company/insugo-insurance-brokers-pvt-ltd/" target="_blank"> */}

                  <a
                    href="https://www.linkedin.com/company/insugo-insurance-brokers-pvt-ltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    insugoinsurance
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FooterIcon
                  src={NewImagePath?.FooterInstaIcon}
                  alt="Instagram"
                />
                <span className="hover:text-primary transition-colors cursor-pointer">
                  <a
                    href="https://www.instagram.com/itsusinsugo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    insugoinsurance
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-primary text-black text-sm sm:text-base py-4 px-8 text-center">
        ©2025 InsuGo Insurance Brokers Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  );
});

export default Footer;
