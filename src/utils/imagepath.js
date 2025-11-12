// Importing images for technologies
import hdfcErgo from "../assets/Tec1.png";
import hdfcLife from "../assets/Tec2.png";
import digit from "../assets/Tec3.png";
import edelweiss from "../assets/Tec4.png";

export const companies = [
  { id: 1, image: hdfcErgo, alt: "Company 1" },
  { id: 2, image: hdfcLife, alt: "Company 2" },
  { id: 4, image: edelweiss, alt: "Company 4" },
  { id: 3, image: digit, alt: "Company 3" },
  { id: 5, image: edelweiss, alt: "Company 8" },
  { id: 6, image: hdfcLife, alt: "Company 6" },
  { id: 7, image: digit, alt: "Company 7" },
];

// Importing images for cards
import amico from "../assets/amico.png";
import amico1 from "../assets/amico1.png";
import rafiki from "../assets/rafiki.png";

export const cards = [
  {
    image: amico,
    title: "Solution Driven Approach",
    description:
      "We have a team that has decades of experience in Insurance. With this experience, our only aim is to drive solutions to your insurance complexities.",
  },
  {
    image: amico1,
    title: "Operational Efficiency",
    description:
      "With the plan, systematic approach has efficiency at every level of the process.",
  },
  {
    image: rafiki,
    title: "Network",
    description:
      "As we are a long-standing player in this industry, the connections are huge. These will address all your queries relating to insurance and claims in the quickest possible time.",
  },
];

// Importing images for various components
import Logo from "../assets/InsugoLogoUpdate.svg";
import HeroImage from "../assets/Group1.png";
import HeroImage4 from "../assets/hero2.png";
import HeroImage1 from "../assets/Frame1.png";
import HeroImage2 from "../assets/Frame2.png";
// import FooterMap from "../assets/FooterMap.png";

// New Hero BG

import newHeroBG1 from "../assets/umbrella.png";
import newHeroBG2 from "../assets/banner_bg-1.png";
import newHeroBG3 from "../assets/banner_bg-2.png";
import newHeroBG4 from "../assets/banner_bg-3.png";
import newHeroBG5 from "../assets/banner_bg-4.png";

// New Hero Content img
import newHeroImg1 from "../assets/banner_img_1-1.png";
import newHeroImg2 from "../assets/banner_img_1-2.png";
import newHeroImg3 from "../assets/banner_img_1-3.png";
import newHeroImg4 from "../assets/banner_img_1-4.png";
import newHeroImg5 from "../assets/banner_img_1-5.png";
import newHeroImg6 from "../assets/banner_img_1-6.png";

export const imagePath = {
  // Navbar.jsx
  logo: Logo,
  // hero.jsx
  Hero: HeroImage,
  Hero2: HeroImage4,

  // About insugo layout
  About1: HeroImage1,
  About2: HeroImage2,

  // New Hero BG

  newHeroBG1,
  newHeroBG2,
  newHeroBG3,
  newHeroBG4,
  newHeroBG5,

  // New Hero Content img

  newHeroImg1,
  newHeroImg2,
  newHeroImg3,
  newHeroImg4,
  newHeroImg5,
  newHeroImg6,

  // Footer.jsx
  // location: FooterMap,
};

// Importing images for testimonials
// export const testimonials = [
//   {
//     name: "Priya Menon",
//     rating: 5,
//     text: "When I had to file a claim for my car insurance, I was worried it would be a tedious process. But Insugo stepped in and handled everything efficiently. They were available every step of the way and ensured my claim was processed quickly. I'm grateful for their exceptional service!",
//   },
//   {
//     name: "Ankita Sharma",
//     rating: 5,
//     text: "I recently purchased my health insurance and I must say, their team made the process seamless and stress-free. They explained the policies in detail, helped me compare plans, and ensured I made an informed decision. It's rare to find such personalized service in today's digital age. Highly recommended!",
//   },
//   {
//     name: "Rajesh Kumar",
//     rating: 5,
//     text: "Our company had been struggling to find a comprehensive group insurance plan for our employees. Insugo not only provided us with multiple options but also tailored a solution that fits our budget and meets our employees' needs. Their attention to detail and commitment to customer satisfaction are unmatched.",
//   },
//   {
//     name: "Rajesh Kumar",
//     rating: 5,
//     text: "Our company had been struggling to find a comprehensive group insurance plan for our employees. Insugo not only provided us with multiple options but also tailored a solution that fits our budget and meets our employees' needs. Their attention to detail and commitment to customer satisfaction are unmatched.",
//   },
//   {
//     name: "Rajesh Kumar",
//     rating: 5,
//     text: "Our company had been struggling to find a comprehensive group insurance plan for our employees. Insugo not only provided us with multiple options but also tailored a solution that fits our budget and meets our employees' needs. Their attention to detail and commitment to customer satisfaction are unmatched.",
//   },
//   {
//     name: "Rajesh Kumar",
//     rating: 5,
//     text: "Our company had been struggling to find a comprehensive group insurance plan for our employees. Insugo not only provided us with multiple options but also tailored a solution that fits our budget and meets our employees' needs. Their attention to detail and commitment to customer satisfaction are unmatched.",
//   },
// ];

// Importing images for services
import Frame6 from "../assets/icon/icon_motor.png";
import Frame6_yellow from "../assets/icon/home_page/icon_home_motor.png";
import Frame7 from "../assets/icon/icon_health.png";
import Frame7_yellow from "../assets/icon//home_page/icon_home_health.png";
import Frame8 from "../assets/icon/icon_cyber.png";
import Frame8_yellow from "../assets/icon//home_page/icon_home_cyber.png";
import Frame9 from "../assets/icon/icon_pet.png";
import Frame9_yellow from "../assets/icon//home_page/icon_home_pet.png";
import Frame10 from "../assets/icon/icon_engineering.png";
import Frame10_yellow from "../assets/icon//home_page/icon_home_engineering.png";
import Frame11 from "../assets/icon/icon_liability.png";
import Frame11_yellow from "../assets/icon//home_page/icon_home_liability.png";
import Frame12 from "../assets/icon/icon_property.png";
import Frame12_yellow from "../assets/icon//home_page/icon_home_property.png";
import Frame13 from "../assets/icon/icon_fleet.png";
import Frame13_yellow from "../assets/icon//home_page/icon_home_fleet.png";

export const insuranceOptions = [
  {
    name: "Motor Insurance",
    path: "/individual/motor-insurance",
    icon: Frame6,
    icon_yellow: Frame6_yellow,
  },
  {
    name: "Health Insurance",
    path: "/individual/health-insurance",
    icon: Frame7,
    icon_yellow: Frame7_yellow,
  },
  {
    name: "Cyber Insurance",
    path: "/individual/cyber-insurance",
    icon: Frame8,
    icon_yellow: Frame8_yellow,
  },
  { name: "Pet Insurance", path: "", icon: Frame9, icon_yellow: Frame9_yellow },
  {
    name: "Engineering Insurance",
    path: "",
    icon: Frame10,
    icon_yellow: Frame10_yellow,
  },
  {
    name: "Liability Insurance",
    path: "/corporate/liability-insurance",
    icon: Frame11,
    icon_yellow: Frame11_yellow,
  },
  {
    name: "Property Insurance",
    path: "/corporate/property-insurance",
    icon: Frame12,
    icon_yellow: Frame12_yellow,
  },
  {
    name: "Fleet Insurance",
    path: "",
    icon: Frame13,
    icon_yellow: Frame13_yellow,
  },
];

// Importing images for AboutUs screen
import BusinessPeople1 from "../assets/aboutUs/BusinessPeople1.png";
import Icon1 from "../assets/icon/au_1.png";
import Icon2 from "../assets/icon/au_2.png";
import Icon3 from "../assets/icon/au_3.png";
import Icon4 from "../assets/icon/au_4.png";
import TrustShield from "../assets/aboutUs/TrustShield.png";
import Businesspeople2 from "../assets/aboutUs/Businesspeople2.png";
import ContactUsFrame from "../assets/aboutUs/ContactUsFrame.png";

// Importing images for project insurance
import ProjectInsurance1 from "../assets/ProjectInsurance/ProjectInsurance1.png";
import Business1 from "../assets/ProjectInsurance/Business1.png";
import Business2 from "../assets/ProjectInsurance/Business2.png";
import Business3 from "../assets/ProjectInsurance/Business3.png";
import Group28 from "../assets/ProjectInsurance/Group28.png";
import Group29 from "../assets/ProjectInsurance/Group29.png";
import Group30 from "../assets/ProjectInsurance/Group30.png";

// Importing images for risk insurance
import RiskInsurance1 from "../assets/ProjectInsurance/RiskInsurance/RiskInsurance1.png";
import RiskInsurance2 from "../assets/ProjectInsurance/RiskInsurance/RiskInsurance2.png";
import RiskInsurance3 from "../assets/ProjectInsurance/RiskInsurance/RiskInsurance3.png";
import RiskInsurance3_1 from "../assets/ProjectInsurance/RiskInsurance/renewable.png";
import RiskInsurance3_2 from "../assets/ProjectInsurance/RiskInsurance/infra.png";
import RiskInsurance3_3 from "../assets/ProjectInsurance/RiskInsurance/international.png";

import RiskInsurance4 from "../assets/ProjectInsurance/RiskInsurance/RiskInsurance4.png";
import RiskInsurance5 from "../assets/ProjectInsurance/RiskInsurance/RiskInsurance5.png";
import RiskInsurance6 from "../assets/ProjectInsurance/RiskInsurance/RiskInsurance6.png";

export const AboutUs = {
  Frame1: BusinessPeople1,
  Fram2: Icon1,
  Fram3: Icon2,
  Fram4: Icon3,
  Fram5: Icon4,
  Fram6: TrustShield,
  Fram7: Businesspeople2,
  Fram8: ContactUsFrame,
  // Project Insurance
  Fram9: ProjectInsurance1,
  Fram10: Business1,
  Fram11: Business2,
  Fram12: Business3,
  Fram13: Group28,
  Fram14: Group29,
  Fram15: Group30,
  // Risk Insurance
  Fram16: RiskInsurance1,
  Fram17: RiskInsurance2,
  Fram18: RiskInsurance3,
  Fram18_1: RiskInsurance3_1,
  Fram18_2: RiskInsurance3_2,
  Fram18_3: RiskInsurance3_3,

  Fram19: RiskInsurance4,
  Fram20: RiskInsurance5,
  Fram21: RiskInsurance6,
};

// Importing images for services
import grp1 from "../assets/icon/icon_si_inspect.png";
import grp2 from "../assets/icon/icon_si_asess.png";
import grp3 from "../assets/icon/icon_si_identify.png";
import grp4 from "../assets/icon/icon_si_health.png";
import grp5 from "../assets/icon/icon_si_home.png";
import grp6 from "../assets/icon/icon_si_children.png";
import grp7 from "../assets/icon/icon_si_life.png";
import grp8 from "../assets/icon/icon_s_eng.png";
import grp9 from "../assets/icon/icon_si_motor.png";
import IndividualFram1 from "../assets/Services/IndividualFram1.png";
import IndividualFram2 from "../assets/Services/IndividualFram2.png";
import CorporateFram1 from "../assets/Services/CorporateFram1.png";
import CorporateFram2 from "../assets/Services/CorporateFram2.png";
import grp11 from "../assets/icon/icon_s_eng.png";
import grp12 from "../assets/icon/icon_s_liab.png";
import grp13 from "../assets/icon/icon_s_eb.png";
import grp14 from "../assets/icon/icon_s_marine.png";
import grp15 from "../assets/icon/icon_s_property.png";
import grp16 from "../assets/icon/icon_s_cyber.png";
import grp17 from "../assets/icon/icon_s_machinery.png";
import grp18 from "../assets/icon/icon_s_trade.png";
import grp19 from "../assets/icon/icon_s_professional.png";
import grp20 from "../assets/icon/icon_s_longterm.png";
import grp21 from "../assets/icon/icon_s_event.png";
import grp22 from "../assets/icon/icon_s_travel.png";
import grp23 from "../assets/icon/icon_s_product.png";
import grp24 from "../assets/icon/icon_s_crime.png";
import grp25 from "../assets/icon/icon_s_fleet.png";
import grp26 from "../assets/icon/icon_s_truck.png";

import Fram29 from "../assets/icon/icon_si_pricing.png";
import Fram30 from "../assets/icon/icon_si_policy_mgt.png";
import Fram31 from "../assets/icon/icon_si_managing.png";
import Fram32 from "../assets/icon/icon_si_bridging.png";

export const IndividualInsurance = {
  Frame1: grp1,
  Fram2: grp2,
  Fram3: grp3,
  Fram4: grp4,
  Fram5: grp5,
  Fram6: grp6,
  Fram7: grp7,
  Fram8: grp8,
  FrameM9: grp9,
  Fram9: IndividualFram1,
  Fram10: IndividualFram2,
  Fram11: CorporateFram1,
  Fram12: CorporateFram2,
  Fram13: grp11,
  Fram14: grp12,
  Fram15: grp13,
  Fram16: grp14,
  Fram17: grp15,
  Fram18: grp16,
  Fram19: grp17,
  Fram20: grp18,
  Fram21: grp19,
  Fram22: grp20,
  Fram23: grp21,
  Fram24: grp22,
  Fram25: grp23,
  Fram26: grp24,
  Fram27: grp25,
  Fram28: grp26,
  Fram29,
  Fram30,
  Fram31,
  Fram32,
};

// Importing background images
import motorbg from "../assets/HeroBg/mototrbg.png";

export const BackgroundData = {
  motorBg: motorbg,
};

// export const MotorInsuranceImg = {
//   BecauseCard1: BecauseCard1,
//   BecauseCard2: BecauseCard2,
//   BecauseCard3: BecauseCard3,
//   electricVehicel: electricVehicel,
//   havingTwoVehiler: havingTwoVehiler,
// };

// Naveen New Paths

// other Images

import line1 from "../assets/Line23.png";
import line2 from "../assets/Line24.png";

// Motor Insurance
import BecauseCard1 from "../assets/IndividualInsurance/MotorInsurance/MotorInsurance1.png";
import BecauseCard2 from "../assets/IndividualInsurance/MotorInsurance/MotorInsurance2.png";
import BecauseCard3 from "../assets/IndividualInsurance/MotorInsurance/MotorInsurance5.png";
import electricVehicel from "../assets/IndividualInsurance/MotorInsurance/MotorInsurance6.png";
import havingTwoVehiler from "../assets/IndividualInsurance/MotorInsurance/MotorInsurance3.png";

// Life Insurance

import life1Image from "../assets/IndividualInsurance/LifeInsurance/life1.png";
import life2Image from "../assets/IndividualInsurance/LifeInsurance/life2.png";
import lifeBgMain from "../assets/IndividualInsurance/LifeInsurance/lifeBackground.png";
import lifeBgsecond from "../assets/IndividualInsurance/LifeInsurance/LifeBackground2.png";

//  Home Insurance
import homeInsuBgMain from "../assets/IndividualInsurance/HomeInsurance/home_bg.png";
import home1Image from "../assets/IndividualInsurance/HomeInsurance/hme_3d.png";
import home2Image from "../assets/IndividualInsurance/HomeInsurance/need_financial.png";
import home3Image from "../assets/IndividualInsurance/HomeInsurance/need_mortgage.png";
import home4Image from "../assets/IndividualInsurance/HomeInsurance/need_liability.png";
import home5Image from "../assets/IndividualInsurance/HomeInsurance/peace.png";
import home6Image from "../assets/IndividualInsurance/HomeInsurance/property.png";
import home7Image from "../assets/IndividualInsurance/HomeInsurance/legal.png";
import homeInsuBgSecond from "../assets/IndividualInsurance/HomeInsurance/home_bg2.png";

// Health Insurance
import healthInsuBgMain from "../assets/IndividualInsurance/HelthInsurance/health_bg.png";
import health1Image from "../assets/IndividualInsurance/HelthInsurance/health_vector.png";
import healthInsuBgSecond from "../assets/IndividualInsurance/HelthInsurance/health_bg2.png";
import healthInsuSideImage from "../assets/IndividualInsurance/HelthInsurance/healthinsurance.png";

// Child Insurance
import childInsuBgMain from "../assets/IndividualInsurance/ChildEducationInsurance/edu_bg.png";
import child1Image from "../assets/IndividualInsurance/ChildEducationInsurance/edu_vector.png";
import child2Image from "../assets/IndividualInsurance/ChildEducationInsurance/edu_assess.png";
import child3Image from "../assets/IndividualInsurance/ChildEducationInsurance/edu_providers.png";
import child4Image from "../assets/IndividualInsurance/ChildEducationInsurance/edu_agreement.png";

import child5Icon from "../assets/IndividualInsurance/ChildEducationInsurance/edu_icon_1.png";
import child6Icon from "../assets/IndividualInsurance/ChildEducationInsurance/edu_icon_2.png";
import child7Icon from "../assets/IndividualInsurance/ChildEducationInsurance/edu_icon_3.png";

// Cyber Insurance
import cyberInsuBgMain from "../assets/IndividualInsurance/CyberInsurance/cyber_bg.png";
import Cyber1Image from "../assets/IndividualInsurance/CyberInsurance/cyber_coverage.png";
import Cyber2Image from "../assets/IndividualInsurance/CyberInsurance/cyber_personalized.png";
import Cyber3Image from "../assets/IndividualInsurance/CyberInsurance/cyber_financial.png";
import Cyber4Image from "../assets/IndividualInsurance/CyberInsurance/cyber_peaseofmind.png";
import Cyber5Image from "../assets/IndividualInsurance/CyberInsurance/cyber_1_side.png";
import Cyber6Image from "../assets/IndividualInsurance/CyberInsurance/cyber_2_side.png";

//  Liability Insurance

import liabilityInsuBgMain from "../assets/CorporateInsurance/LiabilityInsurance/bg.png";

// Errors & omissions Liability Insurance

import Error1Image from "../assets/CorporateInsurance/LiabilityInsurance/error/1.png";
import Error2Image from "../assets/CorporateInsurance/LiabilityInsurance/error/2.png";
import Error3Image from "../assets/CorporateInsurance/LiabilityInsurance/error/3.png";

// Commercial Insurance

import Commercial1Image from "../assets/CorporateInsurance/LiabilityInsurance/commercial/4.png";
import Commercial2Image from "../assets/CorporateInsurance/LiabilityInsurance/commercial/5.png";
import Commercial3Image from "../assets/CorporateInsurance/LiabilityInsurance/commercial/6.png";

// Product Insurance

import Product1Image from "../assets/CorporateInsurance/LiabilityInsurance/product/7.png";
import Product2Image from "../assets/CorporateInsurance/LiabilityInsurance/product/8.png";
import Product3Image from "../assets/CorporateInsurance/LiabilityInsurance/product/9.png";

// Employee Benifits main
import EmployeeInsuBgMain from "../assets/CorporateInsurance/EmployeeBenefits/bg.png";

// Marine Insurance

import MarineInsuBgMain from "../assets/CorporateInsurance/MarineInsurance/bg.png";

import Marine1Image from "../assets/CorporateInsurance/MarineInsurance/watercraft.png";
import Marine2Image from "../assets/CorporateInsurance/MarineInsurance/cargo.png";
import Marine3Image from "../assets/CorporateInsurance/MarineInsurance/marine_liabilites.png";
import Marine4Image from "../assets/CorporateInsurance/MarineInsurance/hull_mach_marine_i.png";

// Property Insurance

import PropertyInsuBgMain from "../assets/CorporateInsurance/PropertyInsurance/bg.png";
import Property1Image from "../assets/CorporateInsurance/PropertyInsurance/retail.png";
import Property2Image from "../assets/CorporateInsurance/PropertyInsurance/warehouse.png";
import Property3Image from "../assets/CorporateInsurance/PropertyInsurance/office.png";
import Property4Image from "../assets/CorporateInsurance/PropertyInsurance/jewellers.png";
import Property5Image from "../assets/CorporateInsurance/PropertyInsurance/cash.png";

// Project Insurance
// Contractor P & M

import ContractorPandM1Image from "../assets/CorporateInsurance/ProjectInsurance/contractorpandm/1.png";
import ContractorPandM2Image from "../assets/CorporateInsurance/ProjectInsurance/contractorpandm/2.png";
import ContractorPandM3Image from "../assets/CorporateInsurance/ProjectInsurance/contractorpandm/3.png";

// Contractor Risk

import ContractorRiskM1Image from "../assets/CorporateInsurance/ProjectInsurance/contractorrisk/1.png";
import ContractorRiskM2Image from "../assets/CorporateInsurance/ProjectInsurance/contractorrisk/2.png";
import ContractorRiskM3Image from "../assets/CorporateInsurance/ProjectInsurance/contractorrisk/3.png";
import ContractorRiskM4Image from "../assets/CorporateInsurance/ProjectInsurance/contractorrisk/contractual.png";
import ContractorRiskM5Image from "../assets/CorporateInsurance/ProjectInsurance/contractorrisk/construction.png";
import ContractorRiskM6Image from "../assets/CorporateInsurance/ProjectInsurance/contractorrisk/project.png";
import ContractorRiskM7Image from "../assets/CorporateInsurance/ProjectInsurance/contractorrisk/protection.png";
import ContractorRiskM8Image from "../assets/CorporateInsurance/ProjectInsurance/contractorrisk/risk.png";

// Media

import MediaInsuBgMain from "../assets/insugo_media/m_bg.png";
import Media1Image from "../assets/insugo_media/m1.png";
import Media2Image from "../assets/insugo_media/m2.png";
import Media3Image from "../assets/insugo_media/m3.png";
import Media4Image from "../assets/insugo_media/m4.png";
import Media5Image from "../assets/insugo_media/m5.png";
import Media6Image from "../assets/insugo_media/m6.png";

// Careers

import CareersBgMain from "../assets/careers_bg.png";

import BlogInsuBgMain from "../assets/insugo_blog/bg.png";
import Blog1Image from "../assets/insugo_blog/blog_1.png";
import Blog2Image from "../assets/insugo_blog/blog_2.png";
import Blog3Image from "../assets/insugo_blog/blog_3.png";
import Blog4Image from "../assets/insugo_blog/blog_4.png";
import Blog5Image from "../assets/insugo_blog/fullblog/img_2.png";

// Full Blog
// import Blog5Image from "../assets/insugo_blog/blog_1.png";
// import Blog6Image from "../assets/insugo_blog/blog_1.png";

// Services

import servicesImg1 from "../assets/Services/services_img1.png";
import servicesImg2 from "../assets/Services/services_img2.png";

// Icons

// Project Insurance

import piIcon1 from "../assets/icon/icon_project_insurance/icon_pi_erectall.png";
import piIcon1_yellow from "../assets/icon/icon_project_insurance/yellow_icon/icon_pi_erectpng.png";
import piIcon2 from "../assets/icon/icon_project_insurance/icon_pi_contractorsrisk.png";
import piIcon2_yellow from "../assets/icon/icon_project_insurance/yellow_icon/icon_pi_contractor_allrisk.png";
import piIcon3 from "../assets/icon/icon_project_insurance/icon_pi_contractors_pnm.png";
import piIcon3_yellow from "../assets/icon/icon_project_insurance/yellow_icon/contractor_pnm.png";

// Liability Insurance
import liIcon1 from "../assets/icon/icon_liability_insurance/icon_li_directors.png";
import liIcon1_yellow from "../assets/icon/icon_liability_insurance/yellow_icon/icon_li_directors.png";
import liIcon2 from "../assets/icon/icon_liability_insurance/icon_li_errors.png";
import liIcon2_yellow from "../assets/icon/icon_liability_insurance/yellow_icon/icon_li_errors.png";
import liIcon3 from "../assets/icon/icon_liability_insurance/icon_li_commercial.png";
import liIcon3_yellow from "../assets/icon/icon_liability_insurance/yellow_icon/icon_li_commercial.png";
import liIcon4 from "../assets/icon/icon_liability_insurance/icon_li_public.png";
import liIcon4_yellow from "../assets/icon/icon_liability_insurance/yellow_icon/icon_li_public.png";
import liIcon5 from "../assets/icon/icon_liability_insurance/icon_li_product.png";
import liIcon5_yellow from "../assets/icon/icon_liability_insurance/yellow_icon/icon_li_product.png";
import liIcon6 from "../assets/icon/icon_liability_insurance/icon_li_professional.png";
import liIcon6_yellow from "../assets/icon/icon_liability_insurance/yellow_icon/icon_li_professional.png";

// Employee Insurance
import eiIcon1 from "../assets/icon/icon_employee_benefits/icon_eb_group_health.png";
import eiIcon1_yellow from "../assets/icon/icon_employee_benefits/yellow_icon/icon_eb_group_health.png";
import eiIcon2 from "../assets/icon/icon_employee_benefits/icon_eb_accidental.png";
import eiIcon2_yellow from "../assets/icon/icon_employee_benefits/yellow_icon/icon_eb_group_accidental.png";
import eiIcon3 from "../assets/icon/icon_employee_benefits/icon_eb_group_life.png";
import eiIcon3_yellow from "../assets/icon/icon_employee_benefits/yellow_icon/icon_eb_group_termlife.png";
import eiIcon4 from "../assets/icon/icon_employee_benefits/icon_eb_gratuity.png";
import eiIcon4_yellow from "../assets/icon/icon_employee_benefits/yellow_icon/icon_eb_group_gratuity.png";

// Marine Insurance
import miIcon1 from "../assets/icon/icon_marine_insurance/icon_mi_open_policy.png";
import miIcon1_yellow from "../assets/icon/icon_marine_insurance/yellow_icon/icon_mi_marine_open_policy.png";
import miIcon2 from "../assets/icon/icon_marine_insurance/icon_mi_single_transit.png";
import miIcon2_yellow from "../assets/icon/icon_marine_insurance/yellow_icon/icon_mi_single_transit.png";
import miIcon3 from "../assets/icon/icon_marine_insurance/icon_mi_stop.png";
import miIcon3_yellow from "../assets/icon/icon_marine_insurance/yellow_icon/icon_mi_stop.png";

// Property Insurance

import propirtyIcon1 from "../assets/icon/icon_property_insurance/icon_pri_fire.png";
import propirtyIcon1_yellow from "../assets/icon/icon_property_insurance/yellow_icon/icon_pri_fire.png";
import propirtyIcon2 from "../assets/icon/icon_property_insurance/icon_pri_stock.png";
import propirtyIcon2_yellow from "../assets/icon/icon_property_insurance/yellow_icon/icon_pri_stock.png";
import propirtyIcon3 from "../assets/icon/icon_property_insurance/icon_pri_industrial.png";
import propirtyIcon3_yellow from "../assets/icon/icon_property_insurance/yellow_icon/icon_pri_industrial.png";
import propirtyIcon4 from "../assets/icon/icon_property_insurance/icon_pri_burglary.png";
import propirtyIcon4_yellow from "../assets/icon/icon_property_insurance/yellow_icon/icon_pri_burglary.png";

// Footer Icons

import FooterInstaIcon from "../assets/icon/footer_icons/icon_insta.png";
import FooterWhatsAppIcon from "../assets/icon/footer_icons/icon_whatsapp.png";
import FooterLinkDinIcon from "../assets/icon/footer_icons/icon_linkedin.png";

export const NewImagePath = {
  // Motor Insurance
  BecauseCard1: BecauseCard1,
  BecauseCard2: BecauseCard2,
  BecauseCard3: BecauseCard3,
  electricVehicel: electricVehicel,
  havingTwoVehiler: havingTwoVehiler,

  // Life Insurance
  lifeInsuBackground: lifeBgMain,
  life1Image: life1Image,
  life2Image: life2Image,
  lifeBgsecond: lifeBgsecond,

  //  Home Insurance
  homeInsuBgMain: homeInsuBgMain,
  home1Image: home1Image,
  home2Image: home2Image,
  home3Image: home3Image,
  home4Image: home4Image,
  home5Image,
  home6Image,
  home7Image,
  homeInsuBgSecond: homeInsuBgSecond,

  // Health Insurance
  healthInsuBgMain: healthInsuBgMain,
  health1Image: health1Image,
  healthInsuBgSecond: healthInsuBgSecond,
  healthInsuSideImage,

  // Child Insurance
  childInsuBgMain: childInsuBgMain,
  child1Image: child1Image,
  child2Image: child2Image,
  child3Image: child3Image,
  child4Image: child4Image,
  child5Icon: child5Icon,
  child6Icon: child6Icon,
  child7Icon: child7Icon,

  // Cyber Insurance

  cyberInsuBgMain: cyberInsuBgMain,
  Cyber1Image: Cyber1Image,
  Cyber2Image: Cyber2Image,
  Cyber3Image: Cyber3Image,
  Cyber4Image,
  Cyber5Image,
  Cyber6Image,

  // Corporate Insurance

  //  Liability Insurance
  liabilityInsuBgMain: liabilityInsuBgMain,

  // Errors & omissions Liability Insurance
  Error1Image: Error1Image,
  Error2Image: Error2Image,
  Error3Image: Error3Image,

  // Commercial Insurance

  Commercial1Image: Commercial1Image,
  Commercial2Image: Commercial2Image,
  Commercial3Image: Commercial3Image,

  // Product Insurance

  Product1Image: Product1Image,
  Product2Image: Product2Image,
  Product3Image: Product3Image,

  // Employee Benifits Insurance

  EmployeeInsuBgMain: EmployeeInsuBgMain,

  // Marine Insurance
  MarineInsuBgMain: MarineInsuBgMain,
  Marine1Image: Marine1Image,
  Marine2Image: Marine2Image,
  Marine3Image: Marine3Image,
  Marine4Image: Marine4Image,

  // Property Insurance

  PropertyInsuBgMain: PropertyInsuBgMain,
  Property1Image: Property1Image,
  Property2Image: Property2Image,
  Property3Image: Property3Image,
  Property4Image: Property4Image,
  Property5Image: Property5Image,

  // Project Insurance
  // Contractor P & M

  ContractorPandM1Image: ContractorPandM1Image,
  ContractorPandM2Image: ContractorPandM2Image,
  ContractorPandM3Image: ContractorPandM3Image,

  // Contractor Risk

  ContractorRiskM1Image: ContractorRiskM1Image,
  ContractorRiskM2Image: ContractorRiskM2Image,
  ContractorRiskM3Image: ContractorRiskM3Image,
  ContractorRiskM4Image: ContractorRiskM4Image,
  ContractorRiskM5Image: ContractorRiskM5Image,
  ContractorRiskM6Image: ContractorRiskM6Image,
  ContractorRiskM7Image: ContractorRiskM7Image,
  ContractorRiskM8Image: ContractorRiskM8Image,

  // Other Images
  // Media

  MediaInsuBgMain: MediaInsuBgMain,
  Media1Image: Media1Image,
  Media2Image: Media2Image,
  Media3Image: Media3Image,
  Media4Image: Media4Image,
  Media5Image: Media5Image,
  Media6Image: Media6Image,

  // Careers

  CareersBgMain: CareersBgMain,

  // Blog Page

  BlogInsuBgMain: BlogInsuBgMain,
  Blog1Image: Blog1Image,
  Blog2Image: Blog2Image,
  Blog3Image: Blog3Image,
  Blog4Image: Blog4Image,
  Blog5Image,

  // Servicess New
  servicesImg1,
  servicesImg2,

  // icons for corporate

  piIcon1,
  piIcon1_yellow,
  piIcon2,
  piIcon2_yellow,
  piIcon3,
  piIcon3_yellow,

  liIcon1,
  liIcon1_yellow,
  liIcon2,
  liIcon2_yellow,
  liIcon3,
  liIcon3_yellow,
  liIcon4,
  liIcon4_yellow,
  liIcon5,
  liIcon5_yellow,
  liIcon6,
  liIcon6_yellow,

  eiIcon1,
  eiIcon1_yellow,
  eiIcon2,
  eiIcon2_yellow,
  eiIcon3,
  eiIcon3_yellow,
  eiIcon4,
  eiIcon4_yellow,

  miIcon1,
  miIcon1_yellow,
  miIcon2,
  miIcon2_yellow,
  miIcon3,
  miIcon3_yellow,

  propirtyIcon1,
  propirtyIcon1_yellow,
  propirtyIcon2,
  propirtyIcon2_yellow,
  propirtyIcon3,
  propirtyIcon3_yellow,
  propirtyIcon4,
  propirtyIcon4_yellow,

  StepsLine1: line1,
  StepsLine2: line2,

  // Footer Icons
  FooterInstaIcon,
  FooterWhatsAppIcon,
  FooterLinkDinIcon,
};
