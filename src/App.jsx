// src/App.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Home from "./pages/Home";
import AboutSection from "./pages/Aboutus";
import Corporate from "./pages/services/Corporative";
import Individual from "./pages/services/Individual";
// import ProjectInsurance from "./pages/ProjectInsurance";
import ErectAllRisk from "./pages/corporate/ProjectInsurance/ErectAllRisk";
import MoterInsurance from "./pages/Individual/MotorInsurance";
import LifeInsurance from "./pages/Individual/LifeInsurance";
import NotFound from "./pages/NotFound";
import "./App.css";
import ContactUsPage from "./pages/ContactUs";
import ProjectInsurance from "./pages/corporate/ProjectInsurance/ProjectInsurance";
import HomeInsurance from "./pages/Individual/HomeInsurance";
import HealthInsurance from "./pages/Individual/HealthInsurance";
import ChildrenEducationInsurance from "./pages/Individual/ChildrenEducationInsurance";
import CyberInsurance from "./pages/Individual/CyberInsurance";
import TermInsurance from "./pages/Individual/TermInsurance";
import LiabilityInsurance from "./pages/corporate/LiabilityInsurance/LiabilityInsurance";
import DirectorsAndOfficersLiability from "./pages/corporate/LiabilityInsurance/DirectorsAndOfficersLiability";
import ProfessionalIndemnity from "./pages/corporate/LiabilityInsurance/ProfessionalIndemnity";
import ProductLiability from "./pages/corporate/LiabilityInsurance/ProductLiability";
import PublicLiability from "./pages/corporate/LiabilityInsurance/PublicLiability";
import CommercialGeneralLiability from "./pages/corporate/LiabilityInsurance/CommercialGeneralLiability";
import ErrorsAndOmissionsInsurance from "./pages/corporate/LiabilityInsurance/ErrorsAndOmissionsInsurance";
import EmployeeBenefits from "./pages/corporate/EmployeeBenefits/EmployeeBenefits";
import GroupHealthInsurance from "./pages/corporate/EmployeeBenefits/GroupHealthInsurance";
import GroupPersonalAccidentalInsurance from "./pages/corporate/EmployeeBenefits/GroupPersonalAccidentalInsurance";
import GroupTermLifeInsurance from "./pages/corporate/EmployeeBenefits/GroupTermLifeInsurance";
import GroupGratuity from "./pages/corporate/EmployeeBenefits/GroupGratuity";
import MarineInsurance from "./pages/corporate/MarineInsurance/MarineInsurance";
import SalesTurnOverInsurance from "./pages/corporate/MarineInsurance/SalesTurnOverInsurance";
import MarineOpenPolicy from "./pages/corporate/MarineInsurance/MarineOpenPolicy";
import SingleTransitInsurance from "./pages/corporate/MarineInsurance/SingleTransitInsurance";
import PropertyInsurance from "./pages/corporate/PropertyInsurance/PropertyInsurance";
import FirePolicy from "./pages/corporate/PropertyInsurance/FirePolicy";
import StockDeclarationPolicy from "./pages/corporate/PropertyInsurance/StockDeclarationPolicy";
import IndustrialAllRiskInsurance from "./pages/corporate/PropertyInsurance/IndustrialAllRiskInsurance";
import BurglaryInsurance from "./pages/corporate/PropertyInsurance/BurglaryInsurance";
import ContractorAllRiskInsurance from "./pages/corporate/ProjectInsurance/ContractorAllRiskInsurance";
import ContractorsPlantandMachinery from "./pages/corporate/ProjectInsurance/ContractorsPlantandMachinery";
import Media from "./pages/Media";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import ReactGA from "react-ga4";
import CareerDetails from "./pages/CareerDetails";
import CompanyPolicies from "./pages/CompanyPolicies";
import TermsOfServices from "./pages/TermsOfServices";
import { insugoSeoData1 } from "./utils/constant";
import { Helmet, HelmetProvider } from "react-helmet-async";

const routes = [
  { path: "/careers", element: <Careers /> },
  { path: "/company-policies", element: <CompanyPolicies /> },
  { path: "/terms-of-services", element: <TermsOfServices /> },
  { path: "/career-details", element: <CareerDetails /> },
  { path: "/media", element: <Media /> },
  { path: "/blog", element: <Blog /> },
  // { path: "/blog-details/:id", element: <BlogDetails /> },
  { path: "/blog-details/:title", element: <BlogDetails /> },

  // Services
  { path: "/services", element: <Corporate /> },
  { path: "/individuals", element: <Corporate /> },

  { path: "/individual", element: <Individual /> },

  // Project insurance
  { path: "/corporate/project-insurance", element: <ProjectInsurance /> },
  {
    path: "/corporate/project-insurance/erection-all-risk-insurance",
    element: <ErectAllRisk />,
  },
  {
    path: "/corporate/project-insurance/contractor's-all-risk-insurance",
    element: <ContractorAllRiskInsurance />,
  },
  {
    path: "/corporate/project-insurance/contractors-plant-and-machinery",
    element: <ContractorsPlantandMachinery />,
  },

  // Liability insurance
  { path: "/corporate/liability-insurance", element: <LiabilityInsurance /> },
  {
    path: "/corporate/liability-insurance/directors-and-officers-liability",
    element: <DirectorsAndOfficersLiability />,
  },
  {
    path: "/corporate/liability-insurance/errors-and-omissions-insurance",
    element: <ErrorsAndOmissionsInsurance />,
  },
  {
    path: "/corporate/liability-insurance/commercial-general-liability",
    element: <CommercialGeneralLiability />,
  },
  {
    path: "/corporate/liability-insurance/public-liability",
    element: <PublicLiability />,
  },
  {
    path: "/corporate/liability-insurance/product-liability",
    element: <ProductLiability />,
  },
  {
    path: "/corporate/liability-insurance/professional-indemnity",
    element: <ProfessionalIndemnity />,
  },

  // Employee Benefits insurance
  { path: "/corporate/employee-benefits", element: <EmployeeBenefits /> },
  {
    path: "/corporate/employee-benefits/group-health-insurance",
    element: <GroupHealthInsurance />,
  },
  {
    path: "/corporate/employee-benefits/group-personal-accidental-insurance",
    element: <GroupPersonalAccidentalInsurance />,
  },
  {
    path: "/corporate/employee-benefits/group-term-life-insurance",
    element: <GroupTermLifeInsurance />,
  },
  {
    path: "/corporate/employee-benefits/group-gratuity",
    element: <GroupGratuity />,
  },

  // Marine Insurance
  { path: "/corporate/marine-insurance", element: <MarineInsurance /> },
  {
    path: "/corporate/marine-insurance/marine-open-policy-/-cover",
    element: <MarineOpenPolicy />,
  },
  {
    path: "/corporate/marine-insurance/single-transit-insurance",
    element: <SingleTransitInsurance />,
  },
  {
    path: "/corporate/marine-insurance/sales-turn-over-insurance-(stop)",
    element: <SalesTurnOverInsurance />,
  },

  // Property Insurance
  { path: "/corporate/property-insurance", element: <PropertyInsurance /> },
  {
    path: "/corporate/property-insurance/fire-policy",
    element: <FirePolicy />,
  },
  {
    path: "/corporate/property-insurance/stock-declaration-policy",
    element: <StockDeclarationPolicy />,
  },
  {
    path: "/corporate/property-insurance/industrial-all-risk-insurance",
    element: <IndustrialAllRiskInsurance />,
  },
  {
    path: "/corporate/property-insurance/burglary-insurance",
    element: <BurglaryInsurance />,
  },

  // Individual Insurance Route
  { path: "/individual/motor-insurance", element: <MoterInsurance /> },
  { path: "/individual/life-insurance", element: <LifeInsurance /> },
  { path: "/individual/home-insurance", element: <HomeInsurance /> },
  { path: "/individual/health-insurance", element: <HealthInsurance /> },
  {
    path: "/individual/child-education-insurance",
    element: <ChildrenEducationInsurance />,
  },
  { path: "/individual/cyber-insurance", element: <CyberInsurance /> },
  { path: "/individual/term-insurance", element: <TermInsurance /> },
];

function App() {
  const tracking_id = "G-1ZJNRD09RV";
  ReactGA.initialize(tracking_id);
  const { pathname } = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: pathname, title: pathname });
  }, []);

  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  const SEOHelmet = ({ pathname }) => {
    const seoItem = insugoSeoData1?.find((item) => item.path === pathname);

    // Better default data
    const defaultSEO = {
      meta_title: "Insugo Insurance Brokers | Expert Insurance Services",
      meta_description:
        "Leading insurance brokers in AP & Telangana offering comprehensive insurance solutions for individuals and businesses.",
      keyword: "insurance brokers, insurance services, AP, Telangana",
      url: `https://insugo.in${pathname}`,
      og_image: "https://insugo.in/images/default-og-image.jpg", // Must be absolute URL
    };

    const seo = seoItem || defaultSEO;
    const currentUrl = seoItem?.url || `https://insugo.in${pathname}`;

    return (
      <Helmet>
        {/* Basic SEO */}
        <title>{seo.meta_title}</title>
        <meta name="description" content={seo.meta_description} />
        <meta name="keywords" content={seo.keyword || ""} />

        {/* IMPORTANT: Canonical URL must be absolute */}
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.meta_title} />
        <meta property="og:description" content={seo.meta_description} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Insugo Insurance Brokers" />
        {/* CRITICAL: Image must be absolute URL and publicly accessible */}
        <meta
          property="og:image"
          content={seo.og_image || defaultSEO.og_image}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.meta_title} />
        <meta name="twitter:description" content={seo.meta_description} />
        <meta
          name="twitter:image"
          content={seo.og_image || defaultSEO.og_image}
        />
        <meta name="twitter:site" content="@insugo" />

        {/* Additional meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Insugo Insurance Brokers" />

        {/* SOLUTION 3: Add structured data for rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Insugo Insurance Brokers",
            url: "https://insugo.in",
            logo: "https://insugo.in/images/logo.png",
            description: seo.meta_description,
            sameAs: [
              "https://www.facebook.com/insugo",
              "https://www.linkedin.com/company/insugo",
            ],
          })}
        </script>
      </Helmet>
    );
  };
  return (
    <HelmetProvider>
      <SEOHelmet pathname={pathname} />
      {/* {insugoSeoData1
        ?.filter((item) => item.path === pathname)
        ?.map((item) => (
          <Helmet>
            <title>{item.meta_title}</title>
            <meta name="description" content={item.meta_description} />
            <meta name="keywords" content={item?.keyword} />
            <link rel="canonical" href={item?.url} />
          </Helmet>
        ))} */}
      {(() => {
        const seoItem = insugoSeoData1?.find((item) => item.path === pathname);
        return seoItem ? (
          <Helmet>
            <title>{seoItem.meta_title}</title>
            <meta name="description" content={seoItem.meta_description} />
            <meta name="keywords" content={seoItem.keyword} />
            <link rel="canonical" href={seoItem.url} />
          </Helmet>
        ) : null;
      })()}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/about-us" element={<AboutSection />} />

          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
