//testimonials.jsx

import {
  AboutUs,
  imagePath,
  IndividualInsurance,
  // NewImagePath,
  NewImagePath,
} from "./imagepath";

// export const base_url = "https://digi.pmpframe.com/api/";
export const base_url = "https://websiteadmin.insugo.in/api/";
// export const base_url = "https://insugo.in/api/";

export const individualMenuItems = [
  "Motor Insurance",
  "Home Insurance",
  "Health Insurance",
  "Life Insurance",
  "Child Education Insurance",
  "Cyber Insurance",
  "Term Insurance"
];

export const corporateMenuItems = {
  "Project Insurance": [
    "Erection All Risk Insurance",
    "Contractor's All Risk Insurance",
    "Contractors Plant and Machinery",
  ],
  "Liability Insurance": [
    "Directors and Officers Liability",
    "Errors and Omissions Insurance",
    "Commercial General Liability",
    "Public Liability",
    "Product Liability",
    "Professional Indemnity",
  ],
  "Employee Benefits": [
    "Group Health Insurance",
    "Group Personal Accidental Insurance",
    "Group Term Life Insurance",
    "Group Gratuity",
  ],
  "Marine Insurance": [
    "Marine Open Policy / Cover",
    "Single Transit Insurance",
    "Sales Turn Over Insurance (STOP)",
  ],
  "Property Insurance": [
    "Fire Policy",
    "Stock Declaration Policy",
    "Industrial All Risk Insurance",
    "Burglary Insurance",
  ],
};

// home Page

export const MainPageData = [
  {
    title: "Covering Your Risks",
    desc: "Secure Your Future by Covering Life’s Uncertainties.",
    img: "",
    bgImg: imagePath.newHeroBG1,
  },
  // {
  //   title: "Covering Your Risks",
  //   desc: "Secure Your Future by Covering Life’s Uncertainties.",
  //   img: imagePath.newHeroImg1,
  //   bgImg: imagePath.newHeroBG2,
  //   opacity: 0,
  //   color: "#000",
  // },
  // {
  //   title: "Covering Your Risks",
  //   desc: "Secure Your Future by Covering Life’s Uncertainties.",
  //   img: imagePath.newHeroImg2,
  //   bgImg: imagePath.newHeroBG3,
  //   opacity: 0,
  //   color: "#000",
  // },
  // {
  //   title: "Covering Your Risks",
  //   desc: "Secure Your Future by Covering Life’s Uncertainties.",
  //   img: imagePath.newHeroImg3,
  //   opacity: 0,
  //   color: "#000",
  //   bgImg: imagePath.newHeroBG4,
  // },
  {
    title: "Covering Your Risks",
    desc: "Secure Your Future by Covering Life’s Uncertainties.",
    img: imagePath.newHeroImg4,
    bgImg: imagePath.newHeroBG5,
  },
  {
    title: "Enjoy Risk - Free Life",
    desc: "At Every Stage, Let Insurance Cover Them.",
    img: imagePath.newHeroImg4,
    bgImg: imagePath.newHeroBG5,
  },
  // {
  //   title: "Bridging the Insurance Gaps. ",
  //   desc: "Providing Seamless Coverage Solutions for a Secure Future.",
  //   img: imagePath.newHeroImg5,
  //   opacity: 0,
  //   color: "#000",
  //   bgImg: "",
  // },
];

// export const MainPageData = [
//   {
//     title: "Covering Your Risks",
//     desc: "Secure Your Future by Covering Life’s Uncertainties.",
//     img: imagePath.Hero,
//     bgImg:"",
//   },
//   {
//     title: "Bridging the Insurance Gaps. ",
//     desc: "Providing Seamless Coverage Solutions for a Secure Future.",
//     img: imagePath.Hero2,
//     bgImg:"",
//   },
// ];

// Services

export const ServiceItems = [
  {
    title: "Inspecting the amount of risk",
    description:
      "Inspecting the amount of risk involved and analyzing the risks.",
    image: IndividualInsurance.Frame1,
  },
  {
    title: "Assessment of coverage",
    description:
      "Assessment of the present insurance coverage and costs involved.",
    image: IndividualInsurance.Fram2,
  },
  {
    title: "Identifying future premium",
    description: "Identifying future premium obligations.",
    image: IndividualInsurance.Fram3,
  },

  // Images Pending from Here

  {
    description: "Pricing and underwriting the products.",
    image: IndividualInsurance.Fram29,
  },
  {
    description:
      "Policy management- creating, communicating, and maintaining policies for an organization",
    image: IndividualInsurance.Fram30,
  },
  {
    description:
      "Managing the uncertainties involved with an insurance portfolio. ",
    image: IndividualInsurance.Fram31,
  },
  {
    description: "Bridging the gap in premiums against risk covered.",
    image: IndividualInsurance.Fram32,
  },
];

// Corporate Items

// Project Insurance

export const ProjectInsuranceMain = [
  {
    name: "Erection All Risk Insurance",
    icon_yellow: NewImagePath?.piIcon1_yellow,
    icon: NewImagePath?.piIcon1,
  },
  {
    name: "Contractor's All Risk Insurance",
    icon_yellow: NewImagePath?.piIcon2_yellow,
    icon: NewImagePath?.piIcon2,
  },
  {
    name: "Contractors Plant and Machinery",
    icon_yellow: NewImagePath?.piIcon3_yellow,
    icon: NewImagePath?.piIcon3,
  },
];

export const imagesProjectInsurance = [
  {
    src: AboutUs.Fram13,
    alt: "Blueprint",
  },
  {
    src: AboutUs.Fram14,
    alt: "Technology",
  },
  {
    src: AboutUs.Fram15,
    alt: "Engineering",
  },
];

export const businessesProjectInsurance = [
  { text: "Construction Companies" },
  { text: "Renewable energy projects" },
  { text: "Engineering firms" },
  { text: "Infrastructure development companies" },
  { text: "IT and software development companies" },
  { text: "Manufacturing plants with special projects" },
  { text: "Healthcare facility construction" },
];

export const insuranceServicesProjectInsurance = [
  {
    title: "Large Scale Construction",
    description:
      "Projects against risks such as property damage, accidents, and delays during major construction projects.",
    image: AboutUs.Fram10,
  },
  {
    title: "Renewable Energy Projects",
    description:
      "Protection against equipment failure, natural disasters, and project delays.",
    image: AboutUs.Fram11,
  },
  {
    title: "Research and Development",
    description:
      "Insurance for project interruptions, equipment failure, and liability during R&D projects.",
    image: AboutUs.Fram12,
  },
];

// Erection All Risk insurance

export const imagesErectionAllRisk = [
  {
    src: AboutUs.Fram19,
    alt: "Blueprint",
  },
  {
    src: AboutUs.Fram20,
    alt: "Technology",
  },
  {
    src: AboutUs.Fram17,
    alt: "Engineering",
  },
];

export const businessesErectionAllRisk = [
  { text: "Construction" },
  { text: "Engineering" },
  { text: "Manufacturing" },
  { text: "Installation Contractors" },
  { text: "Power and Energy" },
  { text: "Oil and Gas" },
  { text: "Telecommunications" },
  { text: "Mining and Extraction" },
];

export const insuranceServicesErectionAllRisk = [
  {
    title: "Industrial Constructions",
    description:
      "Construction of industrial facilities such as power plants, refineries, chemical plants and other complex machinery and structures.",
    image: AboutUs.Fram16,
  },
  {
    title: "Large Scale infrastructure projects",
    description: "Construction of Bridges, Tunnels, Dams and Airports.",
    image: AboutUs.Fram21,
  },
  {
    title: "Commercial Building Constructions",
    description:
      "Construction of High-rise buildings, shopping malls, office complexes, hotels.",
    image: AboutUs.Fram18,
  },
  // Images Pending from Here Done
  {
    title: "Renewable Energy Installation",
    description:
      "Erection of renewable energy infrastructure like wind farms, solar power plants, hydroelectric dams.",
    image: AboutUs.Fram18_1,
  },
  {
    title: "Infrastructure expansion",
    description:
      "Expansion of a manufacturing plant, upgrading a power generation facility, retrofitting a commercial building.",
    image: AboutUs.Fram18_2,
  },
  {
    title: "International Projects",
    description: "High risk associated foreign projects.",
    image: AboutUs.Fram18_3,
  },
];

// Contractor All Risk Insurance

export const imagesContractorAllRisk = [
  {
    src: NewImagePath.ContractorRiskM1Image,
    alt: "contractor's-all-risk-insurance",
  },
  {
    src: NewImagePath.ContractorRiskM2Image,
    alt: "contractor's-all-risk-insurance",
  },
  {
    src: NewImagePath.ContractorRiskM3Image,
    alt: "contractor's-all-risk-insurance",
  },
];

export const businessesContractorAllRisk = [
  { text: "Renovation Contractors" },
  { text: "Manufacturers and Suppliers" },
  { text: "Speciality Contractors" },
  { text: "Engineering Consultancies" },
  { text: "Architectural Firms" },
  { text: "Civil Engineering Firms" },
  { text: "Property Developers" },
  { text: "Construction Managers" },
  { text: "Subcontractors" },
  { text: "General Contractors" },
];

export const insuranceServicesContractorAllRisk = [
  {
    title: "Contractual Requirements",
    description:
      "This secures the contractual obligations and secure the project bids.",
    image: NewImagePath?.ContractorRiskM4Image,
  },
  {
    title: "Construction Projects",
    description:
      " Projects involving construction of buildings, infrastructure or other structures will make CAR insurance essential.",
    image: NewImagePath?.ContractorRiskM5Image,
  },
  {
    title: "Project Financing",
    description:
      " In this case, insurance coverage is provided to safeguard the investment in construction projects. Here, it provides assurance to the stakeholders.",
    image: NewImagePath?.ContractorRiskM6Image,
  },
  // images Pending from here Done
  {
    title: "Protection against Losses",
    description:
      "Protection is provided against perils such as fire, theft, natural disasters, or accidents.",
    image: NewImagePath?.ContractorRiskM7Image,
  },
  {
    title: "Risk Mitigation",
    description:
      "Safeguard the project from accidents, errors or unforeseen events. This serves as the risk management tool and financial protection against all the losses.",
    image: NewImagePath?.ContractorRiskM8Image,
  },
];

// Contractors Plant & Machinery Insurance
export const imagesContractorPlantMachinery = [
  {
    src: NewImagePath?.ContractorPandM1Image,
    alt: "",
  },
  {
    src: NewImagePath?.ContractorPandM2Image,
    alt: "",
  },
  {
    src: NewImagePath?.ContractorPandM3Image,
    alt: "",
  },
];

export const businessesContractorPlantMachinery = [
  { text: "Construction Companies" },
  { text: "Engineering Firms" },
  { text: "Waste Management and Recycling Facilities" },
  { text: "Forestry and Logging Operations" },
  { text: "Marine and Port Operations" },
  { text: "Airport and Aviation Services" },
  { text: "Railway and Transit Projects" },
  { text: "Landscaping and Grounds Maintenance Services" },
  { text: "Equipment Rental Companies" },
  { text: "Industrial Manufacturers" },
  { text: "Mining and Quarrying Operations" },
  { text: "Unity Contractors" },
  { text: "Road Construction Companies" },
  { text: "Excavation Contractors" },
  { text: "Demolition Contractors" },
];

// Liability Insurance

export const IdeasLiabilityMain = [
  // { name: "Liability Insurance", icon: "" },
  {
    name: "Directors & officers Liability",
    icon_yellow: NewImagePath.liIcon1_yellow,
    icon: NewImagePath.liIcon1,
  },
  {
    name: "Errors & omissions Insurance",
    icon_yellow: NewImagePath.liIcon2_yellow,
    icon: NewImagePath.liIcon2,
  },
  {
    name: "Commercial General Liability",
    icon_yellow: NewImagePath.liIcon3_yellow,
    icon: NewImagePath.liIcon3,
  },
  {
    name: "Public Liability",
    icon_yellow: NewImagePath.liIcon4_yellow,
    icon: NewImagePath.liIcon4,
  },
  {
    name: "Product Liability",
    icon_yellow: NewImagePath.liIcon5_yellow,
    icon: NewImagePath.liIcon5,
  },
  {
    name: "Professional indemnity",
    icon_yellow: NewImagePath.liIcon6_yellow,
    icon: NewImagePath.liIcon6,
  },
];

export const FCLiaMain = [
  {
    title: "Company Risk Exposure",
    desc: "To begin, examine your company's risk areas and establish which sorts of liabilities you require coverage for, such as general liability, professional liability, or product liability. ",
  },
  {
    title: "Analyse Policy Terms",
    desc: "Second, carefully analyze the policy's terms, restrictions, and exclusions to determine the breadth of coverage and any limitations. ",
  },
  {
    title: "Understand coverage limits",
    desc: "Consider coverage limits, deductibles, and premium prices to pick a policy that provides appropriate protection at a reasonable price. ",
  },
];

// Directors & officers Liability Insurance

export const FCClaimDirectors = [
  {
    desc: "Directors ",
  },
  {
    desc: "Officers",
  },
  {
    desc: "Executives mentioned in the policy",
  },
  {
    desc: "The corporate body itself",
  },
];

export const whatIsLiabilityDirectors = [
  "Liability Insurance",
  "Errors & omissions Insurance",
  "Commercial General Liability",
  "Public Liability",
  "Product Liability",
  "Professional indemnity",
];

// Errors Liability Insurance

export const OmissionInsuranceError = [
  { text: "Legal Firms" },
  { text: "Accounting Firms" },
  { text: "Consulting Agencies" },
  { text: "Real Estate Agencies" },
  { text: "Financial Advisors" },
  { text: "IT Service Providers" },
  { text: "Marketing Agencies" },
  { text: "Engineering Firms" },
  { text: "Healthcare Providers" },
  { text: "Insurance Agencies" },
];

export const imagesError = [
  {
    src: NewImagePath.Error1Image,
    alt: "errors-and-omissions-insurance",
  },
  {
    src: NewImagePath.Error2Image,
    alt: "errors-and-omissions-insurance",
  },
  {
    src: NewImagePath.Error3Image,
    alt: "errors-and-omissions-insurance",
  },
];

// Commercial Insurance

export const GeneralLiabilityCommercial = [
  { text: "Retail Stores" },
  { text: "Restaurants and Cafes" },
  { text: "Contractors and Construction Firms" },
  { text: "Manufacturers and Distributors" },
  { text: "Healthcare Providers" },
  { text: "Nonprofit Organizations" },
  { text: "Professional Service Providers" },
  { text: "Landlords and Property Owners" },
  { text: "Event Organizers" },
  { text: "Technology Companies" },
];

export const imagesCommercial = [
  {
    src: NewImagePath.Commercial1Image,
    alt: "commercial-general-liability",
  },
  {
    src: NewImagePath.Commercial2Image,
    alt: "commercial-general-liability",
  },
  {
    src: NewImagePath.Commercial3Image,
    alt: "commercial-general-liability",
  },
];

export const FCBussnessCommercial = [
  {
    desc: "Interacting with clients, customers, or visitors on your premises ",
  },
  {
    desc: "Providing services or delivering products to clients",
  },
  {
    desc: "Hosting events or gatherings where there is a risk of accidents or injuries",
  },
  {
    desc: "Renting or leasing commercial space or equipment.",
  },
  {
    desc: "Engaging in advertising or marketing activities that could lead to claims of defamation or copyright infringement.",
  },
  {
    desc: "Contractual obligations requiring proof of liability insurance coverage.",
  },
];

// Public Insurance

export const TypeOfCorporatesPublicData = [
  {
    title: "Retail Stores",
    desc: "Including supermarkets, boutiques, and department stores.",
  },
  {
    title: "Restaurants and Cafes",
    desc: "Offering food and beverage services to the public.",
  },
  {
    title: "Hotels and Hospitality Businesses",
    desc: "Providing accommodation, dining, and entertainment services.",
  },
  {
    title: "Event Venues",
    desc: "Hosting concerts, conferences, weddings, and other events.",
  },
  {
    title: "Construction and Trades Businesses",
    desc: "Engaged in building, renovation, or maintenance activities.",
  },
  {
    title: "Healthcare Facilities",
    desc: "Including hospitals, clinics, and medical practices.",
  },
  {
    title: "Fitness Centers and Gyms",
    desc: "Offering exercise facilities and fitness classes to members of the public.",
  },
  {
    title: "Entertainment and Leisure Facilities",
    desc: "Such as amusement parks, cinemas, and sports stadiums.",
  },
];

export const SeekofClaimPublicData = [
  {
    desc: "Accidents that happen on your company property, such slip-and-falls or injuries brought on by defective machinery.",
  },
  {
    desc: "Property damage brought on by your company's activities, goods, or services.",
  },
  {
    desc: "Legal issues involving clients, consumers, or members of the public who claim harmful circumstances, inadequate warnings, or negligence.",
  },
];

// Prodct Insurance

export const BusinessInsuProduct = [
  { text: "Essential for manufacturers, distributors, and retailers." },
  { text: "Protects against claims of injury or damage from product use." },
  { text: "Covers legal fees, settlements, and judgments." },
  { text: "Provides financial security and peace of mind." },
  { text: "Helps maintain business reputation and customer trust." },
  // { text: "Provides financial security and peace of mind." },
  // { text: "Provides financial security and peace of mind." },
  // { text: "Provides financial security and peace of mind." },
  // { text: "Provides financial security and peace of mind." },
];

export const imagesProduct = [
  {
    src: NewImagePath.Product1Image,
    alt: "product-liability",
  },
  {
    src: NewImagePath.Product2Image,
    alt: "product-liability",
  },
  {
    src: NewImagePath.Product3Image,
    alt: "product-liability",
  },
];

// Professional Insurance

export const ExecutionProfessionalData = [
  {
    color: "#FFCC29",
    bg: "#fff",
    data: [
      "mistakes or inaccuracies in expert counsel or services.",
      "breach of the terms of the contract.",
      "violation of fiduciary obligations or duties.",
      "assertions that are false or deceptive.",
      "breaking rules or professional norms.",
    ],
  },
  {
    color: "#333333",
    bg: "#F2F0F0",
    data: [
      "intentional deception or dishonesty.",
      "claims resulting from deliberate misconduct or illegal activity.",
      "Liability for property damage or personal injury (not covered by other insurance).",
      "Claims arising from contractual disagreements that are not specifically connected to expert services.",
      "claims resulting from actions taken beyond the purview of the insured enterprise or profession.",
    ],
  },
];

// Employee Benifits

export const IdeasEmployeeMain = [
  {
    name: "Group Health Insurance",
    icon_yellow: NewImagePath.eiIcon1_yellow,
    icon: NewImagePath.eiIcon1,
  },
  {
    name: "Group Personal Accidental Insurance",
    icon_yellow: NewImagePath.eiIcon2_yellow,
    icon: NewImagePath.eiIcon2,
  },
  {
    name: "Group Term Life Insurance",
    icon_yellow: NewImagePath.eiIcon3_yellow,
    icon: NewImagePath.eiIcon3,
  },
  {
    name: "Group Gratuity",
    icon_yellow: NewImagePath.eiIcon4_yellow,
    icon: NewImagePath.eiIcon4,
  },
];

export const EmployeeBenefit = [
  {
    title: "Financial Security",
    desc: "Employee Benefits Insurance guarantees that workers and their families will have access to necessary resources in trying times by protecting them financially against unanticipated events like illness, disability, or death.",
  },
  {
    title: "Talent Attraction and Retention",
    desc: "Providing extensive benefits to workers, such as insurance, will assist companies in drawing in top talent and keeping hold of competent workers, which will increase productivity and competitiveness within the company.",
  },
  {
    title: "Workplace Well-Being",
    desc: "Employees' physical, emotional, and financial well-being is enhanced by having access to insurance benefits including health, life, and disability insurance. This also lowers stress levels and boosts job satisfaction.",
  },
  {
    title: "Compliance and Legal regulations",
    desc: "In order to ensure compliance with legal duties, providing specific employee benefits, such health insurance, may be required by labor laws or regulatory regulations. ",
  },
  {
    title: "Tax Advantages",
    desc: "Benefits related to taxes: Employers may be able to deduct the payments for Employee Benefits Insurance, which could result in cost savings and provide financial incentives for providing full benefit packages",
  },
];

export const BusinessesEmployeeBenefit = [
  {
    title: "Needs evaluation",
    desc: "To ascertain the best insurance coverage alternatives and perks to include in the plan, conduct a thorough assessment of the needs and preferences of the employees.",
  },
  {
    title: "Cost analysis",
    desc: "To guarantee affordability and budgetary compliance, assess the costs related to offering employee benefits, such as insurance premiums, administrative expenditures, and any potential tax ramifications.",
  },
  {
    title: "Requirements for Compliance",
    desc: "To guarantee adherence to labor laws and industry rules, familiarize yourself with the legal and regulatory standards governing employee benefits, including insurance coverage.",
  },
  {
    title: "Choosing an Insurance Provider",
    desc: "To ensure top-notch coverage and assistance for staff, pick a respectable insurance company with expertise in employee benefits and a history of dependable service and claims handling.",
  },
];

// Group Personal Accidental Insurance

export const FCGroupPersonalAccidental = [
  {
    desc: "Falling from traffic incidents ",
  },
  {
    desc: "Unintentional drowning",
  },
  {
    desc: "Poisoning by accident",
  },
  {
    desc: "Fires",
  },
  { desc: "Accidents involving sports" },
  { desc: "Accidents at work" },
  { desc: "Violent or abusive acts" },
  { desc: "Unintentional injuries sustained when traveling" },
];

// Group Terms Life Insurance

export const FCGroupTermsLife = [
  {
    desc: "Unintentional injuries",
  },
  {
    desc: "Diseases or health issues",
  },
  {
    desc: "Natural catastrophes",
  },
  {
    desc: "Violent or criminal acts",
  },
  { desc: "Accidents involving transportation" },
  { desc: "Workplace dangers" },
];

// Group Gratuity Insurance

export const GratuitySteps = [
  {
    title: "Enrollment",
    description:
      "As part of the broader benefits package for workers, employers usually enrol their staff members in the Group Gratuity system.",
  },
  {
    title: "Enrollment",
    description:
      "On behalf of their employees, employers regularly pay contributions to the Group Gratuity fund. These payments, which are generally made as a percentage of the workers' pay, are placed into a special gratuity fund that is overseen by a financial institution or an insurance provider.",
  },
  {
    title: "Investment",
    description:
      "To produce returns and expand the fund over time, contributions made to the Group Gratuity fund are placed in a diverse range of assets, including stocks, bonds, and other securities.",
  },
  {
    title: "Accumulation",
    description:
      "Contributions made by workers during the duration of their employment, along with any interest or investment returns, are accumulated in the Group Gratuity fund.",
  },
  {
    title: "Payout",
    description:
      "Employees may be entitled to a lump sum gratuity payment from the Group Gratuity fund upon retirement, resignation, or attaining the specified vesting time. The duration of service, pay, and total cash in the fund are among the elements that determine how much of a gratuity is given to an employee.",
  },
];

// Marine Insurance

export const marineInsurance = [
  {
    name: "Marine Open Policy / Cover",
    icon_yellow: NewImagePath.miIcon1_yellow,
    icon: NewImagePath.miIcon1,
  },
  {
    name: "Single Transit Insurance",
    icon_yellow: NewImagePath.miIcon2_yellow,
    icon: NewImagePath.miIcon2,
  },
  {
    name: "Sales Turn Over Insurance (STOP)",
    icon_yellow: NewImagePath.miIcon3_yellow,
    icon: NewImagePath.miIcon3,
  },
];

export const BecauseCardMarine = [
  {
    title: "Watercraft and Vessels",
    desc: "Protection against liability, loss, or damage resulting from collisions, accidents, or natural disasters for boats, ships, and other marine vessels.",
    img: NewImagePath?.Marine1Image,
  },
  {
    title: "Cargo and freight",
    desc: "The protection of products and merchandise from dangers like theft, damage, or loss while transportation by land, air, sea, or train.",
    img: NewImagePath?.Marine2Image,
  },
  {
    title: "Marine Liabilities",
    desc: "Protection against liabilities resulting from maritime operations, such as general average contributions, pollution, bodily harm, salvage, and third-party property damage.",
    img: NewImagePath?.Marine3Image,
  },
  // images Pending From here Done
  {
    title: "Hull and Machinery",
    desc: "Insurance that covers a ship's hull and machinery against physical harm, repairs, or total losses brought on by mishaps or hazards at sea.",
    img: NewImagePath?.Marine4Image,
  },
];

export const BecauseCardMarine2 = [
  {
    title: "Coverage Options",
    desc: "Consider the coverage options—including coverage limits, deductibles, and policy features—that are offered by the Marine Insurance plan to make sure they satisfy the unique demands and specifications of the company.",
  },
  {
    title: "Limitations & Exclusions",
    desc: "Examine the policy's exclusions and restrictions to see which risks or hazards might not be covered by the insurance, and decide whether you need to get additional coverage.",
  },
  {
    title: "Policy Requirements",
    desc: "Learn about the terms and conditions of the Marine Insurance plan, including what is required for processing claims, what evidence is needed, and how to comply with safety and security laws.",
  },
  {
    title: "Provider of Insurance",
    desc: "To guarantee dependable coverage, prompt claims processing, and continuous assistance for your maritime operations, select a respectable and knowledgeable insurance company with experience in marine insurance.",
  },
];

// Open Marine Insurance

export const FCMarineOpen = [
  {
    desc: "Exporters and importers",
  },
  {
    desc: "Producers Distributors Forwarders of freight",
  },
  {
    desc: "Trading firms",
  },
  {
    desc: "Companies that handle logistics and transportation",
  },
];

export const FCMarineOpen2 = [
  {
    title: "Continuous Coverage",
    desc: "For firms that move cargo frequently, a Marine Open Policy / Cover offers continuous coverage for several shipments over a predetermined period of time, providing convenience and peace of mind.",
  },
  {
    title: "Cost Savings",
    desc: "Compared to getting separate insurance for each cargo, firms can frequently save money by acquiring a Marine Open Policy / Cover. Lower administrative expenses and premiums may arise from this.",
  },
  {
    title: "Flexibility",
    desc: "Marine Open Policies provide for the customization of coverage limits, deductibles, and other policy elements to meet the unique needs and requirements of the covered firm.",
  },
  {
    desc: "By offering protection against unanticipated events like accidents, theft, or natural catastrophes, Marine Open Policies assist businesses in reducing the financial risk associated with loss or damage to cargo during transportation.",
    title: "Risk management",
  },
  {
    desc: "Providing insurance coverage for the cargo during transit is a requirement found in many contracts pertaining to the sale or acquisition of goods. Businesses can satisfy their contractual responsibilities and adhere to industry standards by implementing a Marine Open Policy / Cover.",
    title: "Compliance",
  },
];

// Open Marine Insurance

export const FCMarineSingleTransitInsurance = [
  {
    desc: "Exporters and importers",
  },
  {
    desc: "Producers ",
  },
  {
    desc: "Distributors",
  },
  {
    desc: "Forwarders of freight",
  },
];

export const FCMarineSingleTransitInsurance2 = [
  {
    title: "Financial Protection",
    desc: "Your company is shielded from financial damages resulting from loss or damage during transportation by Single transportation Insurance, which covers the value of the products being transported.",
  },
  {
    title: "Risk management",
    desc: "Your company can lessen the financial effect of unanticipated events during transit by assigning the risk of loss or damage to an insurance provider.",
  },
  {
    title: "Contractual Requirements",
    desc: "A lot of agreements pertaining to the sale or purchase of products stipulate that the seller or buyer must insure the goods while they are in transit. Single Transit Insurance in marine insurance policy  assists companies in carrying out these contractual duties.",
  },
  {
    title: "Comfort",
    desc: "Having Single Transit Insurance lowers the financial risk involved in carrying precious cargo by providing businesses with the assurance that their products are safeguarded against loss or damage while in transit.",
  },
];

// STOP Insurance

export const FCMarineSTOP = [
  {
    desc: "Manufacturers and retailers",
  },
  {
    desc: "Distributors",
  },
  {
    desc: "providers of services",
  },
  {
    desc: "Merchants in bulk",
  },
];

export const FCMarineSTOP2 = [
  {
    title: "Financial Protection",
    desc: "STOP helps firms lessen the financial effect of lower sales turnover by acting as a safety net against revenue losses.",
  },
  {
    title: "Business Continuity",
    desc: "By implementing STOP, companies can continue to operate and supply cash amid downturns in the economy or unstable markets.",
  },
  {
    title: "Risk management",
    desc: "STOP gives companies the financial stability and peace of mind they need by transferring the risk of a decline in sales turnover to an insurance company.",
  },
  {
    title: "Competitive advantage",
    desc: "Having STOP coverage shows stakeholders—lenders, investors, and clients—that your company is solvent and ready to handle unforeseen difficulties.",
  },
];

// Property Insurance

export const PropertyInsurance = [
  {
    name: "Fire Policy",
    icon_yellow: NewImagePath.propirtyIcon1_yellow,
    icon: NewImagePath?.propirtyIcon1,
  },
  {
    name: "Stock declaration Policy",
    icon_yellow: NewImagePath.propirtyIcon2_yellow,
    icon: NewImagePath?.propirtyIcon2,
  },
  {
    name: "Industrial All Risk Insurance",
    icon_yellow: NewImagePath.propirtyIcon3_yellow,
    icon: NewImagePath?.propirtyIcon3,
  },
  {
    name: "Burglary Insurance",
    icon_yellow: NewImagePath.propirtyIcon4_yellow,
    icon: NewImagePath?.propirtyIcon4,
  },
];

export const FCProperty = [
  {
    title: "Coverage",
    desc: "Verify that the insurance offers sufficient coverage for all of your assets and property, including buildings, furniture, machinery, and stock.",
  },
  {
    title: "Policy Limits",
    desc: "Check your policy limits to make sure they will cover the cost of replacing or repairing your belongings in the event of a loss.",
  },
  {
    title: "Deductibles",
    desc: "Recognize the amounts that are deductible for various kinds of losses and assess how they will affect your actual out-of-pocket costs.",
  },
  {
    title: "Exclusions",
    desc: "In case of home loan read the property insurance for home loan policy carefully for any restrictions or exclusions that might affect coverage for particular risks or kinds of property.",
  },
  {
    title: "Premiums",
    desc: "To ascertain whether the policy provides good value for the money, assess the premium prices and take into account variables like coverage limits, deductibles, and risk factors.",
  },
  {
    title: "Extra Topics Covered",
    desc: "Find out what extra coverages or endorsements are available to improve your defense against particular risks or liabilities.",
  },
];

// Fire Insurance
export const FCFireProperty = [
  {
    desc: "production sites",
  },
  {
    desc: "Storage facilities and warehouses",
  },
  {
    desc: "retail establishments",
  },
  {
    desc: "office structures",
  },
  { desc: "Restaurants and lodging facilities" },
  { desc: "Apartment complexes and residential buildings" },
];

// Stock Declaration Insurance
export const FCStockdeclaration = [
  {
    desc: "Dangerous materials",
  },
  {
    desc: "Animals",
  },
  {
    desc: "Perishable food products",
  },
  {
    desc: "Delicate or fragile goods",
  },
  {
    desc: "Valuable goods that need to be handled or transported differently",
  },
];

// Industrial All Risk  Insurance
export const FCIndustrialAllRisk = [
  {
    desc: "Producing",
  },
  {
    desc: "Petrochemicals",
  },
  {
    desc: "Medications",
  },
  {
    desc: "Construction Utilities and Energy",
  },
];

export const FCIndustrialAllRisk2 = [
  {
    title: "Property Damage",
    desc: "Protection against loss or damage to insured property brought on by explosions, fires, natural catastrophes, vandalism, and other risks.",
  },
  {
    title: "Business Interruption",
    desc: "Reimbursement for Continual Expenses and Lost Income in the Event that Covered Perils Cause Interruptions or Suspend Business Operations.",
  },
  {
    title: "Unplanned Breakdown",
    desc: "Protection against unplanned and unintentional breakdowns of machinery and equipment, including replacement or repair expenses.",
  },
  {
    title: "Third-Party Liability",
    desc: "Protection against legal obligations resulting from property damage or bodily harm inflicted onto third parties as a consequence of the operations of the insured business.",
  },
  {
    title: "Extra Coverages",
    desc: "Terrorism insurance, inland transit insurance, and inventory or stock loss coverage are examples of optional coverages.",
  },
];

// Industrial All Risk  Insurance
export const FCBurglary = [
  {
    desc: "When your business involves storing high-value items on-site.",
  },
  {
    desc: "If you operate in an area with a high crime rate.",
  },
  {
    desc: "When your business premises contain expensive equipment or technology.",
  },
  {
    desc: "If you want to protect against both theft and property damage during a break-in.",
  },
  { desc: "When you handle cash or valuables that are vulnerable to theft." },
];

export const BCBurglary = [
  {
    img: NewImagePath?.Property1Image,
    desc: "Retail stores with valuable inventory.",
  },
  {
    img: NewImagePath?.Property2Image,
    desc: "Warehouses storing high-value goods",
  },
  {
    img: NewImagePath?.Property3Image,
    desc: "Offices with expensive equipment.",
  },
  // images Pending from Here Done
  {
    img: NewImagePath?.Property4Image,
    desc: "Jewellers and other high-risk businesses.",
  },
  {
    img: NewImagePath?.Property5Image,
    desc: "Any business that handles cash or valuable assets on-site.",
  },
];

// Others

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
// ];

export const FeaturesCardData = [
  {
    title: "Own Damage Coverage",
    desc: "Protects your vehicle against damages caused by accidents, theft, vandalism, and natural disasters.",
  },
  {
    title: "Third-Party Liability",
    desc: "Covers legal liabilities for bodily injury or property damage caused to third parties in accidents involving your vehicle.",
  },
  {
    title: "Personal Accident Cover",
    desc: "Provides compensation for injuries or death of the driver and passengers in the insured vehicle.",
  },
  {
    title: "Add-On Coverage Options",
    desc: "Optional add-ons such as zero depreciation cover, roadside assistance, engine protection, and consumable expenses coverage enhance the scope of protection.",
  },
  {
    title: "No Claim Bonus",
    desc: "Offers rewards in the form of premium discounts for claim-free years, encouraging safe driving habits.",
  },
];

export const FeaturesCardLifeData = [
  {
    title: "Reportage Amount",
    desc: "Reportage Amount: Calculating the required amount of coverage based on predicted spending, debts, and income.",
  },
  {
    title: "Premiums",
    desc: "Recognizing the various payment methods and how premiums are determined.",
  },
  {
    title: "Insurance Riders",
    desc: "Extra features that you might include in your insurance to improve coverage.",
  },
  {
    title: "Claims Process",
    desc: "Understanding the steps involved in submitting a claim and how beneficiaries are compensated.",
  },
];

export const FeaturesCardHealthData = [
  {
    desc: "Choose an improved deductible to minimize the cost of your premiums.",
  },
  {
    desc: "Keep up a healthy lifestyle to mitigate your chance of getting sick.",
  },
  {
    desc: "To get the best deals, compare estimates from several insurance providers.",
  },
  {
    desc: "For tax benefits, think about starting a Health Savings Account (HSA).",
  },
  {
    desc: "For cheaper prices, select a plan with a smaller network coverage area.",
  },
];

export const CoverageCyberData = [
  {
    title: "Data Breach",
    desc: "Pays for costs incurred in identifying, addressing, and alerting parties harmed by data breaches.",
  },
  {
    title: "Identity Theft",
    desc: "Financial security against the expenses of regaining your identity and reputation in the event of identity theft.",
  },
  {
    title: "Cyber Extortion",
    desc: "Insurance against financial losses brought on by cyber extortion, including ransomware attacks.",
  },
  {
    title: "Legal Support",
    desc: "Assisting with the cost of defending against lawsuits resulting from cyber-attacks.",
  },
  {
    title: "Cyber Fraud",
    desc: "Compensation for monetary damages resulting from fraudulent internet transactions, phishing schemes, and unapproved transactions.",
  },
];
export const CoverageCyberData2 = [
  {
    title: "Financial Safety",
    desc: "Protect yourself from the high price of data leaks and cyberattacks.",
  },
  {
    title: "Tailored Coverage",
    desc: "Tailor your insurance to meet your unique online risks and needs.",
  },
  {
    title: "Identity Restoration",
    desc: "If your identity or reputation has been compromised, get help restoring it.",
  },
  {
    title: "Legal Support",
    desc: "Get assistance with costs and fees associated with defending against lawsuits resulting from cyber events.",
  },
  {
    title: "All-inclusive Support",
    desc: "Get resources for data recovery, cyber-extortion cases, and forensic inquiries.",
  },
  {
    title: "24/7 Support",
    desc: "Take advantage of round-the-clock advice and support from professionals in cyber insurance.",
  },
  {
    title: "Family Coverage",
    desc: "Provide your loved ones with additional defense against cybercrimes and internet hazards.",
  },
  {
    title: "Data Breach Response",
    desc: "Use quick and efficient reaction techniques to lessen the effects of data breaches.",
  },
  {
    title: "Risk management",
    desc: " To lessen the possibility of recurring events, learn important cyber hygiene measures.",
  },
];

export const successfulChildData = [
  {
    title: "Start Early",
    desc: "To take full advantage of compound interest and long-term savings, start investing in school insurance as soon as possible.",
    img: NewImagePath?.child5Icon,
  },
  {
    title: "Regular Reviews",
    desc: "Make sure your education insurance coverage is still in line with your changing financial circumstances and educational objectives by reviewing it on a regular basis.",
    img: NewImagePath?.child6Icon,
  },
  {
    title: "Remain Up to Date",
    desc: "To make well-informed decisions regarding your child's future, be informed on changes to market trends and regulations pertaining to education insurance.",
    img: NewImagePath?.child7Icon,
  },
];

export const FeaturesCardChildData = [
  {
    title: "Financial Readiness",
    desc: "Set aside money for your child's educational costs, such as books, extracurricular activities, and tuition.",
  },
  {
    title: "Long-Term Savings",
    desc: "Establish a special education fund that increases with time to give your child a solid financial starting point for their future aspirations.",
  },
  {
    title: "Protection Against Uncertainties",
    desc: " Protect your child's scholastic trajectory against unanticipated circumstances like illness, incapacity, or income loss.",
  },
];

export const ClausestoKnowHealthData = [
  {
    title: "Pre-existing conditions clause",
    desc: "Indicates coverage exclusions or limits for illnesses that didn't exist when the policy went into effect.",
  },
  {
    title: "Waiting period clause",
    desc: "Requires the provision of certain benefits, such coverage for pre-existing conditions, for a predetermined amount of time following the start of the policy.",
  },
  {
    title: "Co-payment or co-insurance clause",
    desc: "These require the insured party to pay a portion of their eligible medical costs out of pocket, usually following their completion of the deductible.",
  },
  {
    title: "Exclusions clause",
    desc: "It enumerates particular medical procedures, services, or ailments that are not covered by the insurance policy.",
  },
  {
    title: "Grace period clause",
    desc: "It permits non-payment of premiums for a predetermined amount of time following the premium due date, during which the coverage is still in effect.",
  },
  {
    title: "Renewability clause",
    desc: "outlines the circumstances in which the insurance may be extended, including clauses pertaining to premium modifications ",
  },
];

export const ExecutionHomeData = [
  {
    color: "#FFCC29",
    bg: "#fff",
    icon: `IoCheckmarkOutline `,
    data: [
      "Fire and Smoke Damage",
      "Windstorm and Hail Damage",
      "Theft and Vandalism",
      "Water Damage (excluding floods)",
      "Explosion Damage",
      "Falling Objects",
      "Electrical Surge Damage",
      "Impact Damage",
      "Riot or Civil Commotion",
      "Accidental Damage",
    ],
  },
  {
    color: "#333333",
    icon: `IoCheckmarkOutline`,
    bg: "#F2F0F0",
    data: [
      "Earthquake and Flood Damage",
      "War and Nuclear Hazards",
      "Intentional Damage",
      "Wear and Tear",
      "Neglect or Lack of Maintenance",
      "Business Activities",
    ],
  },
];

export const ExecutionMotorData = [
  {
    color: "#FFCC29",
    bg: "#fff",
    icon: `IoCheckmarkOutline `,
    data: [
      "Accidental Damage",
      "Theft",
      "Fire",
      "Natural Calamities (e.g., floods, earthquakes)",
      "Third-Party Liability",
      "Personal Accident Cover for Driver and Passengers",
    ],
  },
  {
    color: "#333333",
    icon: `IoCheckmarkOutline`,
    bg: "#F2F0F0",
    data: [
      ,
      "Wear and Tear",
      "Mechanical Breakdown",
      "Driving Under the Influence of Alcohol or Drugs",
      "Racing or Speeding",
      "Intentional Damage",
      "Consequential Losses",
    ],
  },
];

export const BecauseCardCyber = [
  {
    title: "Comprehensive Coverage",
    desc: "Identity theft, data breaches, and online fraud are just a few of the financial losses that cyber insurance in India protects you against.",
    img: NewImagePath?.Cyber1Image,
  },
  {
    title: "Personalized Protection",
    desc: "Tailored insurance provides a customized layer of security by guaranteeing that your particular internet threats are covered.",
    img: NewImagePath?.Cyber2Image,
  },
  {
    title: "Financial Security",
    desc: "Insurance coverage can lessen the financial impact of a cyber attack by paying for costs like data recovery, forensic investigations, and legal fees.",
    img: NewImagePath?.Cyber3Image,
  },
  // Images Pending from Here Done
  {
    title: "Peace of Mind",
    desc: "You may navigate the online world with confidence knowing that you're ready for unforeseen digital risks since you have cyber insurance.",
    img: NewImagePath?.Cyber4Image,
  },
];

export const BecauseCardChild = [
  {
    title: "Assess Your Needs",
    desc: "Considering things like inflation and projected costs, figure out how much coverage is needed to help your child achieve their learning objectives.",
    img: NewImagePath?.child2Image,
  },
  {
    title: "Providers of Research",
    desc: "Look into school insurance companies to discover a plan that offers complete coverage and fits your budget.",
    img: NewImagePath?.child3Image,
  },
  {
    title: "Personalize Your Agreement",
    desc: "Customize your education insurance policy to meet your unique requirements, including changing the coverage amount or including extra riders for increased security.",
    img: NewImagePath?.child4Image,
  },
];

export const BecauseCardHome = [
  {
    title: "Financial Protection",
    desc: "Your house and possessions are covered by home insurance against unforeseen circumstances that can necessitate expensive repairs or replacements.",
    img: NewImagePath?.home2Image,
  },
  {
    title: "Mortgage Requirement",
    desc: "In order to be eligible for a mortgage, homeowners are frequently required by lenders to have insurance.",
    img: NewImagePath?.home3Image,
  },
  {
    title: "Liability Coverage",
    desc: "This protects you from being held liable for someone else's medical bills or legal fees if they are hurt on your property.",
    img: NewImagePath?.home4Image,
  },
  // Images Pending from Here done
  {
    title: "Peace of Mind",
    desc: "Knowing that you are financially shielded against a variety of hazards is one of the benefits of having house insurance.",
    img: NewImagePath?.home5Image,
  },
  {
    title: "Property Value",
    desc: "It aids in preserving the worth of the money you invested in your house and belongings.",
    img: NewImagePath?.home6Image,
  },
  {
    title: "Legal Requirement",
    desc: "State or local legislation may occasionally mandate the purchase of home insurance.",
    img: NewImagePath?.home7Image,
  },
];

export const BecauseCardData = [
  {
    title: "Legal Requirement",
    desc: "In order to drive on public roads, one must be in possession of legal automobile insurance.",
    img: NewImagePath?.BecauseCard1,
  },
  {
    title: "Financial Protection",
    desc: "Offers security against unanticipated mishaps, expensive repairs, and legal obligations.",
    img: NewImagePath?.BecauseCard2,
  },
  {
    title: "Comfort",
    desc: "Provides comfort in knowing that you are covered financially in the event of any accidents while driving.",
    img: NewImagePath?.BecauseCard3,
  },
];

export const LimitationData = [
  {
    title: "Policy limitations: ",
    desc: "o make sure you have enough protection, check the policy limitations for own damage and third-party responsibility.",
  },
  {
    title: "Add-Ons: ",
    desc: "Consider optional add-ons in light of your needs and driving style",
  },
  {
    title: "Claim Process: ",
    desc: "Recognize the insurer's claim settlement ratio and the documentation requirements that must be met.",
  },
  {
    title: "Terms and Conditions of the Policy: ",
    desc: "To prevent any surprises while filing a claim, carefully read the policy's terms, conditions, and exclusions.",
  },
];

export const ElectricVehicelData = [
  {
    title: "Reduced Premiums : ",
    desc: "Because electric cars are less likely to be involved in accidents and are more environmentally friendly, they frequently qualify for lower premiums.",
  },
  {
    title: "Specialized Coverage : ",
    desc: "Certain insurance companies provide coverage specific to electric vehicles, such as covering for charging station damage and battery damage.",
  },
  {
    title: "Impact on the environment : ",
    desc: "Encouragement of the use of electric vehicles lowers carbon emissions and advances sustainability.",
  },
  {
    title: "Creative Solutions :",
    desc: " Insurance firms may provide creative solutions that are suited to the particular requirements of owners of electric vehicles. Examples of these creative solutions include extended battery warranties and roadside help for problems relating to charging.",
  },
  {
    title: "Future-Proofing : ",
    desc: "Purchasing auto insurance for electric vehicles puts you in line with international initiatives to shift towards greener and cleaner mobility options.",
  },
];

export const HavingTwoVehiler = [
  {
    title: "Cost-Effectiveness :",
    desc: " For car owners, two-wheeler insurance is a cost-effective choice because it usually has cheaper rates than four-wheeler insurance.",
  },
  {
    title: "Comprehensive Coverage : ",
    desc: "Provides financial protection while riding by guarding against theft, collisions, third-party liabilities, and personal injuries to the rider.",
  },
  {
    title: "Convenience : ",
    desc: "Gives riders and their families peace of mind by providing hassle-free coverage for recreational and commute rides.",
  },
];

export const CorporativeServices = [
  {
    title: "Engineering Insurance",
    icon: IndividualInsurance.Fram13,
    active: true,
  },
  {
    title: "Liability Insurance",
    icon: IndividualInsurance.Fram14,
  },
  {
    title: "Employee Benefits",
    icon: IndividualInsurance.Fram15,
  },
  {
    title: "Marine Insurance",
    icon: IndividualInsurance.Fram16,
  },
  {
    title: "Property Insurance",
    icon: IndividualInsurance.Fram17,
  },
  {
    title: "Cyber Insurance",
    icon: IndividualInsurance.Fram18,
  },
  {
    title: "Machinery Breakdown Insurance",
    icon: IndividualInsurance.Fram19,
  },
  {
    title: "Trade Credit Insurance",
    icon: IndividualInsurance.Fram20,
  },
  {
    title: "Professional Indemnity Insurance",
    icon: IndividualInsurance.Fram21,
  },
  {
    title: "Long Term Home Insurance",
    icon: IndividualInsurance.Fram22,
  },
  {
    title: "Event Insurance",
    icon: IndividualInsurance.Fram23,
  },
  {
    title: "Travel Insurance",
    icon: IndividualInsurance.Fram24,
  },
  {
    title: "Product Liability",
    icon: IndividualInsurance.Fram25,
  },
  {
    title: "Commercial Crime Insurance",
    icon: IndividualInsurance.Fram26,
  },
  {
    title: "Jeweller's Block Insurance",
    icon: IndividualInsurance.Fram13,
  },
  {
    title: "Fleet",
    icon: IndividualInsurance.Fram27,
  },
  {
    title: "Individual Trucks Insurance",
    icon: IndividualInsurance.Fram28,
  },
];

export const IndividualServices = [
  {
    title: "Motor Insurance",
    icon: IndividualInsurance.FrameM9,
    active: true,
  },
  {
    title: "Home Insurance",
    icon: IndividualInsurance.Fram5,
  },
  {
    title: "Health Benefits",
    icon: IndividualInsurance.Fram4,
  },
  {
    title: "Life Insurance",
    icon: IndividualInsurance.Fram7,
  },
  {
    title: "Children Education Insurance",
    icon: IndividualInsurance.Fram6,
  },
];

export const FactsAndFictionLife = [
  {
    Fiction: "Only senior citizens should have life insurance.",
    Fact: "Your loved ones' finances are protected by life insurance",
  },
  {
    Fiction: "The average person cannot afford life insurance.",
    Fact: "A variety of life insurance policy types are available to meet different demands and financial constraints.",
  },
  {
    Fiction:
      "Only those with substantial financial obligations or dependents need life insurance.",
    Fact: " Life insurance has the potential to grow in value over time and be utilized as an investment instrument",
  },
  {
    Fiction:
      "If you have enough assets or resources to support your family after your death, you don't need life insurance.",
    Fact: "Benefits from life insurance policies are often tax-free for recipients, giving them a source of income during trying times",
  },
];

// Hiring Careers

export const OpeningPostions = [
  {
    post_name: "Insurance Sales Representative",
    Res: [
      "Build and maintain client relationships.",
      "Assess clients' insurance needs and provide tailored solutions.",
      "Meet sales targets and contribute to company growth. Qualifications:",
      "Proven experience in insurance sales or a related field.",
      "Strong communication and negotiation skills.",
      "License in insurance sales is preferred.",
    ],
    location: "Remote/On-site",
  },
  {
    post_name: "Claims Adjuster",
    Res: [
      "Build and maintain client relationships.",
      "Assess clients' insurance needs and provide tailored solutions.",
      "Meet sales targets and contribute to company growth. Qualifications:",
      "Proven experience in insurance sales or a related field.",
      "Strong communication and negotiation skills.",
      "License in insurance sales is preferred.",
    ],
    location: "Remote/On-site",
  },
  {
    post_name: "Insurance Sales Representative",
    Res: [
      "Build and maintain client relationships.",
      "Assess clients' insurance needs and provide tailored solutions.",
      "Meet sales targets and contribute to company growth. Qualifications:",
      "Proven experience in insurance sales or a related field.",
      "Strong communication and negotiation skills.",
      "License in insurance sales is preferred.",
    ],
    location: "Remote/On-site",
  },
  {
    post_name: "Claims Adjuster",
    Res: [
      "Build and maintain client relationships.",
      "Assess clients' insurance needs and provide tailored solutions.",
      "Meet sales targets and contribute to company growth. Qualifications:",
      "Proven experience in insurance sales or a related field.",
      "Strong communication and negotiation skills.",
      "License in insurance sales is preferred.",
    ],
    location: "Remote/On-site",
  },
];

// Blog Data

// export const BlogData = [
//   {
//     title: "Understanding the Role of an Insurance Broker and Why You Need One",
//     desc: "Navigating the insurance landscape can be complex, and finding the best policy for your needs isn't always straightforward. This is where an insurance broker becomes invaluable.",
//     img: NewImagePath?.Blog1Image,
//     desc_html: `<div>hello</div>`,
//   },
//   {
//     title: "Top 5 Mistakes to Avoid When Buying Insurance",
//     desc: "Avoid common pitfalls like underinsuring or ignoring policy updates. Many buyers forget to assess their changing needs or misinterpret policy terms. This blog highlights key mistakes and offers strategies to help you make informed decisions.",
//     img: NewImagePath?.Blog2Image,
//     desc_html: `<div>hello</div>`,
//   },
//   {
//     title: "How to Lower Your Insurance Premiums Without Sacrificing Coverage",
//     desc: "Reduce your premiums by bundling policies, increasing deductibles, and maintaining a clean record. Small adjustments can lead to significant savings without compromising the coverage you need.",
//     img: NewImagePath?.Blog3Image,
//     desc_html: `<div>hello</div>`,
//   },
//   {
//     title: "The Importance of Having the Right Insurance Coverage",
//     desc: "Choosing the right insurance can protect your finances and secure your future. A tailored policy ensures you're covered for life's unexpected events, safeguarding your family and assets. Don't overlook the details—personalized insurance is essential.",
//     img: NewImagePath?.Blog4Image,
//     desc_html: `<div>hello</div>`,
//   },
// ];

export const insugoSeoData = [
  {
    sno: 0,
    page: "Home",
    url: "https://insugo.in",
    keyword:
      "InsuGo, Insurance, Life Insurance, Health Insurance, Motor Insurance, Home Insurance, etc.",
    meta_title: "Insugo",
    meta_description: "InsuGo Insurance Brokers Pvt Ltd – Ease of Insurance",
    path: "/",
  },
  {
    sno: 1,
    page: "About us",
    url: "https://insugo.in/about-us",
    keyword: "About Insugo",
    meta_title: "Insugo Insurance Brokers | Trusted Coverage in AP & Telangana",
    meta_description:
      "Insugo offers expert insurance brokerage services, ensuring optimal coverage for individuals and businesses alike. Get a quote today!",
    path: "/about-us",
  },
  {
    sno: 2,
    page: "Services",
    url: "https://insugo.in/services",
    keyword: "Services",
    meta_title: "Corporate & Indiviual Insurance Services | Insugo",
    meta_description:
      "Explore Insugo's range of corporate and individual insurance services, offering customized solutions to meet your unique needs.",
    path: "/services",
  },
  {
    sno: 3,
    page: "Project Insurances",
    url: "https://insugo.in/corporate/project-insurance",
    keyword: "Project Insurance",
    meta_title: "Project Insurance | Secure your projects with Insugo",
    meta_description:
      "Protect your construction projects with Insugo's comprehensive project insurance solutions, ensuring coverage from start to finish.",
    path: "/corporate/project-insurance",
  },
  {
    sno: 4,
    page: "Erection All Risk insurance",
    url: "https://insugo.in/corporate/project-insurance/erection-all-risk-insurance",
    keyword: "Erection All Risks Insurance\r\nErection all risk policy",
    meta_title: "Erection All Risk Insurance for Projects | Insugo",
    meta_description:
      "Get peace of mind with Insugo's EAR Insurance, covering your projects from material arrival to final commissioning.",
    path: "/corporate/project-insurance/erection-all-risk-insurance",
  },
  {
    sno: 5,
    page: "Contractor's All Risk Insurance",
    url: "https://insugo.in/corporate/project-insurance/contractor's-all-risk-insurance",
    keyword:
      "Contractors All Risk Insurance\r\ncontractors all risk policy\r\ncontractors all risk insurance policy",
    meta_title: "Contractors All Risk Insurance | Insugo",
    meta_description:
      "Protect your construction projects with Insugo's comprehensive Contractors All Risk Insurance, covering property damage and third-party liabilities.",
    path: "/corporate/project-insurance/contractor's-all-risk-insurance",
  },
  {
    sno: 6,
    page: "Workmen Compensation Insurance",
    url: "https://insugo.in/corporate/project-insurance/workmen-compensation-insurance",
    keyword:
      "workmen compensation insurance\r\nworkmen compensation insurance policy\r\nworkmen compensation policy",
    meta_title: "Workmen Compensation Insurance | Insugo",
    meta_description:
      "Ensure your workforce is protected with Insugo's workmen compensation insurance, covering employee injuries and legal liabilities.",
    path: "/corporate/project-insurance/workmen-compensation-insurance",
  },
  {
    sno: 7,
    page: "Commercial Vehicle Insurance",
    url: "https://insugo.in/corporate/commercial-vehicle-insurance",
    keyword: "Commercial Vehicle Insurance\r\nCommercial Motor Insurance",
    meta_title: "Commercial Vehicle Insurance | Insugo",
    meta_description:
      "Keep your fleet protected with Insugo's commercial vehicle insurance, offering comprehensive coverage for all types of business vehicles.",
    path: "/corporate/commercial-vehicle-insurance",
  },
  {
    sno: 8,
    page: "Goods in Transit Insurance",
    url: "https://insugo.in/corporate/commercial-vehicle-insurance/goods-in-transit-insurance",
    keyword: "Goods in Transit Insurance\r\nTransit Insurance",
    meta_title: "Goods in Transit Insurance | Insugo",
    meta_description:
      "Secure your cargo during transportation with Insugo's comprehensive goods in transit insurance, protecting against damage and theft.",
    path: "/corporate/commercial-vehicle-insurance/goods-in-transit-insurance",
  },
  {
    sno: 9,
    page: "Marine Cargo Insurance",
    url: "https://insugo.in/corporate/marine-insurance",
    keyword: "Marine Cargo Insurance\r\nMarine Insurance",
    meta_title: "Marine Cargo Insurance | Insugo",
    meta_description:
      "Protect your international shipments with Insugo's marine cargo insurance, ensuring coverage for goods transported by sea, air, or land.",
    path: "/corporate/marine-insurance",
  },
  {
    sno: 10,
    page: "Fire & Burglary Insurance",
    url: "https://insugo.in/corporate/fire-&-burglary-insurance",
    keyword:
      "Fire & Burglary Insurance\r\nFire Insurance\r\nBurglary Insurance",
    meta_title: "Fire & Burglary Insurance | Insugo",
    meta_description:
      "Safeguard your property and assets with Insugo's fire & burglary insurance, providing comprehensive protection against fire, theft, and vandalism.",
    path: "/corporate/fire-&-burglary-insurance",
  },
  {
    sno: 11,
    page: "Directors & Officers Insurance",
    url: "https://insugo.in/corporate/directors-&-officers-insurance",
    keyword: "Directors & Officers Insurance\r\nD&O Insurance",
    meta_title: "Directors & Officers Insurance | Insugo",
    meta_description:
      "Protect your leadership team with Insugo's D&O insurance, covering legal costs and personal liability for directors and officers.",
    path: "/corporate/directors-&-officers-insurance",
  },
  {
    sno: 12,
    page: "Professional Indemnity Insurance",
    url: "https://insugo.in/corporate/professional-indemnity-insurance",
    keyword:
      "Professional Indemnity Insurance\r\nPI Insurance\r\nProfessional Liability Insurance",
    meta_title: "Professional Indemnity Insurance | Insugo",
    meta_description:
      "Shield your professional services with Insugo's professional indemnity insurance, covering errors, omissions, and negligence claims.",
    path: "/corporate/professional-indemnity-insurance",
  },
  {
    sno: 13,
    page: "Product Liability Insurance",
    url: "https://insugo.in/corporate/product-liability-insurance",
    keyword: "Product Liability Insurance",
    meta_title: "Product Liability Insurance | Insugo",
    meta_description:
      "Protect your business from product-related claims with Insugo's product liability insurance, covering defects, design flaws, and injuries.",
    path: "/corporate/product-liability-insurance",
  },
  {
    sno: 14,
    page: "Employee Benefits",
    url: "https://insugo.in/corporate/employee-benefits",
    keyword: "Employee Benefits\r\nGroup Health Insurance",
    meta_title: "Employee Benefits & Group Health Insurance | Insugo",
    meta_description:
      "Enhance your employee benefits package with Insugo's group health insurance and comprehensive employee benefit solutions.",
    path: "/corporate/employee-benefits",
  },
  {
    sno: 15,
    page: "Group Health Insurance",
    url: "https://insugo.in/corporate/employee-benefits/group-health-insurance",
    keyword:
      "Group Health Insurance\r\nCorporate Health Insurance\r\nEmployee Health Insurance",
    meta_title: "Group Health Insurance for Employees | Insugo",
    meta_description:
      "Provide comprehensive healthcare coverage for your employees with Insugo's group health insurance plans, tailored to your company's needs.",
    path: "/corporate/employee-benefits/group-health-insurance",
  },
  {
    sno: 16,
    page: "Group Personal Accident Insurance",
    url: "https://insugo.in/corporate/employee-benefits/group-personal-accident-insurance",
    keyword: "Group Personal Accident Insurance\r\nGPA Insurance",
    meta_title: "Group Personal Accident Insurance | Insugo",
    meta_description:
      "Ensure your employees are protected with Insugo's group personal accident insurance, covering accidental injuries and disabilities.",
    path: "/corporate/employee-benefits/group-personal-accident-insurance",
  },
  {
    sno: 17,
    page: "Group Term Life Insurance",
    url: "https://insugo.in/corporate/employee-benefits/group-term-life-insurance",
    keyword: "Group Term Life Insurance\r\nEmployee Life Insurance",
    meta_title: "Group Term Life Insurance for Employees | Insugo",
    meta_description:
      "Provide financial security to your employees' families with Insugo's group term life insurance, offering affordable life coverage.",
    path: "/corporate/employee-benefits/group-term-life-insurance",
  },
  {
    sno: 18,
    page: "Motor Insurance",
    url: "https://insugo.in/individual/motor-insurance",
    keyword: "Motor Insurance\r\nCar Insurance\r\nVehicle Insurance",
    meta_title: "Motor Insurance - Car & Vehicle Insurance | Insugo",
    meta_description:
      "Get comprehensive motor insurance coverage for your car and vehicles with Insugo, ensuring protection on the road.",
    path: "/individual/motor-insurance",
  },
  {
    sno: 19,
    page: "Car Insurance",
    url: "https://insugo.in/individual/motor-insurance/car-insurance",
    keyword: "Car Insurance\r\nAuto Insurance",
    meta_title: "Car Insurance - Comprehensive Auto Coverage | Insugo",
    meta_description:
      "Protect your car with Insugo's comprehensive car insurance, offering third-party liability, own damage, and zero depreciation coverage.",
    path: "/individual/motor-insurance/car-insurance",
  },
  {
    sno: 20,
    page: "Two Wheeler Insurance",
    url: "https://insugo.in/individual/motor-insurance/two-wheeler-insurance",
    keyword: "Two Wheeler Insurance\r\nBike Insurance\r\nMotorcycle Insurance",
    meta_title: "Two Wheeler Insurance - Bike & Motorcycle Coverage | Insugo",
    meta_description:
      "Secure your two-wheeler with Insugo's bike insurance, providing comprehensive protection for motorcycles and scooters.",
    path: "/individual/motor-insurance/two-wheeler-insurance",
  },
  {
    sno: 21,
    page: "Health Insurance",
    url: "https://insugo.in/individual/health-insurance",
    keyword: "Health Insurance\r\nMedical Insurance",
    meta_title: "Health Insurance - Medical Coverage Plans | Insugo",
    meta_description:
      "Secure your health with Insugo's comprehensive health insurance plans, covering hospitalization, treatments, and medical expenses.",
    path: "/individual/health-insurance",
  },
  {
    sno: 22,
    page: "Individual Health Insurance",
    url: "https://insugo.in/individual/health-insurance/individual-health-insurance",
    keyword: "Individual Health Insurance\r\nPersonal Health Insurance",
    meta_title: "Individual Health Insurance Plans | Insugo",
    meta_description:
      "Get personalized health insurance coverage with Insugo's individual health plans, tailored to your specific medical needs.",
    path: "/individual/health-insurance/individual-health-insurance",
  },
  {
    sno: 23,
    page: "Family Floater Health Insurance",
    url: "https://insugo.in/individual/health-insurance/family-floater-health-insurance",
    keyword: "Family Floater Health Insurance\r\nFamily Health Insurance",
    meta_title: "Family Floater Health Insurance | Insugo",
    meta_description:
      "Protect your entire family with Insugo's family floater health insurance, offering shared coverage for all family members.",
    path: "/individual/health-insurance/family-floater-health-insurance",
  },
  {
    sno: 24,
    page: "Senior Citizen Health Insurance",
    url: "https://insugo.in/individual/health-insurance/senior-citizen-health-insurance",
    keyword: "Senior Citizen Health Insurance\r\nElderly Health Insurance",
    meta_title: "Senior Citizen Health Insurance | Insugo",
    meta_description:
      "Specialized health insurance for senior citizens with Insugo, covering age-related medical conditions and treatments.",
    path: "/individual/health-insurance/senior-citizen-health-insurance",
  },
  {
    sno: 25,
    page: "Critical Illness Insurance",
    url: "https://insugo.in/individual/health-insurance/critical-illness-insurance",
    keyword: "Critical Illness Insurance",
    meta_title: "Critical Illness Insurance | Insugo",
    meta_description:
      "Get financial protection against critical illnesses with Insugo's critical illness insurance, providing lump sum benefits for major diseases.",
    path: "/individual/health-insurance/critical-illness-insurance",
  },
  {
    sno: 26,
    page: "Travel Insurance",
    url: "https://insugo.in/individual/travel-insurance",
    keyword: "Travel Insurance\r\nOverseas Travel Insurance",
    meta_title: "Travel Insurance - Domestic & International Coverage | Insugo",
    meta_description:
      "Travel with confidence using Insugo's travel insurance, covering medical emergencies, trip cancellations, and lost baggage.",
    path: "/individual/travel-insurance",
  },
  {
    sno: 27,
    page: "Domestic Travel Insurance",
    url: "https://insugo.in/individual/travel-insurance/domestic-travel-insurance",
    keyword: "Domestic Travel Insurance\r\nIndia Travel Insurance",
    meta_title: "Domestic Travel Insurance in India | Insugo",
    meta_description:
      "Secure your domestic trips within India with Insugo's domestic travel insurance, covering medical emergencies and trip disruptions.",
    path: "/individual/travel-insurance/domestic-travel-insurance",
  },
  {
    sno: 28,
    page: "International Travel Insurance",
    url: "https://insugo.in/individual/travel-insurance/international-travel-insurance",
    keyword: "International Travel Insurance\r\nOverseas Travel Insurance",
    meta_title: "International Travel Insurance | Insugo",
    meta_description:
      "Protect your international journeys with Insugo's overseas travel insurance, covering medical expenses, emergency evacuation, and more.",
    path: "/individual/travel-insurance/international-travel-insurance",
  },
  {
    sno: 29,
    page: "Personal Accident Insurance",
    url: "https://insugo.in/individual/personal-accident-insurance",
    keyword: "Personal Accident Insurance",
    meta_title: "Personal Accident Insurance | Insugo",
    meta_description:
      "Get comprehensive personal accident insurance with Insugo, providing financial protection against accidental injuries and disabilities.",
    path: "/individual/personal-accident-insurance",
  },
  {
    sno: 30,
    page: "Term Life Insurance",
    url: "https://insugo.in/individual/term-life-insurance",
    keyword: "Term Life Insurance\r\nLife Insurance",
    meta_title: "Term Life Insurance - Affordable Life Coverage | Insugo",
    meta_description:
      "Secure your family's future with Insugo's term life insurance, offering high coverage at affordable premiums for financial protection.",
    path: "/individual/term-life-insurance",
  },
  {
    sno: 31,
    page: "Home Insurance",
    url: "https://insugo.in/individual/home-insurance",
    keyword: "Home Insurance\r\nProperty Insurance",
    meta_title: "Home Insurance - Protect Your Property | Insugo",
    meta_description:
      "Safeguard your home and belongings with Insugo's comprehensive home insurance, covering structure, contents, and personal liability.",
    path: "/individual/home-insurance",
  },
  {
    sno: 32,
    page: "Cyber Insurance",
    url: "https://insugo.in/corporate/cyber-insurance",
    keyword: "Cyber Insurance\r\nCyber Liability Insurance",
    meta_title: "Cyber Insurance - Digital Risk Protection | Insugo",
    meta_description:
      "Protect your business from cyber threats with Insugo's cyber insurance, covering data breaches, cyber attacks, and digital liabilities.",
    path: "/corporate/cyber-insurance",
  },
  {
    sno: 33,
    page: "General Liability Insurance",
    url: "https://insugo.in/corporate/general-liability-insurance",
    keyword: "General Liability Insurance\r\nPublic Liability Insurance",
    meta_title: "General Liability Insurance | Insugo",
    meta_description:
      "Protect your business with Insugo's general liability insurance, covering third-party claims, property damage, and bodily injury.",
    path: "/corporate/general-liability-insurance",
  },
  {
    sno: 34,
    page: "Contact Us",
    url: "https://insugo.in/contact",
    keyword: "Contact Insugo\r\nInsugo Contact",
    meta_title: "Contact Insugo - Get Insurance Quotes & Support",
    meta_description:
      "Contact Insugo for expert insurance advice and quotes. Reach out to our insurance brokers in AP & Telangana for personalized service.",
    path: "/contact",
  },
];

export const insugoSeoData1 = [
  {
    sno: 0,
    page: "Home",
    url: "https://insugo.in",
    keyword:
      "InsuGo, Insurance, Life Insurance, Health Insurance, Motor Insurance, Home Insurance, etc.",
    meta_title: "Trusted Insurance Brokers Hyderabad & Andhra Pradesh | Insugo",
    meta_description:
      "Looking for a reliable insurance brokers in Hyderabad? Insugo offers expert best insurance solutions for corporates and individuals across Andhra Pradesh.",
    path: "/",
  },
  {
    sno: 1,
    page: "About us",
    url: "https://insugo.in/about-us",
    keyword: "About Insugo",
    meta_title: "Insugo – Easy, Reliable Insurance You Can Trust",
    meta_description:
      "Insugo was built by an insurance expert to make things simple. We focus on solving your problems and putting your needs first.",
    path: "/about-us",
  },
  {
    sno: 2,
    page: "Services",
    url: "https://insugo.in/services",
    keyword: "",
    meta_title: "Insurance Audit & Broking Services in Hyderabad & AP | Insugo",
    meta_description:
      "Get expert insurance audit services from Insugo. We help corporates and individuals in Hyderabad and Andhra Pradesh identify risk gaps & optimize policies.",
    path: "/services",
  },
  {
    sno: 3,
    page: "Project Insurances",
    url: "https://insugo.in/corporate/project-insurance",
    keyword: "Project Insurance",
    meta_title: "Project Insurance | Secure your projects with Insugo",
    meta_description:
      "Protect your construction projects with Insugo's comprehensive project insurance solutions, ensuring coverage from start to finish.",
    path: "/corporate/project-insurance",
  },
  {
    sno: 4,
    page: "Erection All Risk insurance",
    url: "https://insugo.in/corporate/project-insurance/erection-all-risk-insurance",
    keyword: "Erection All Risks Insurance Erection all risk policy",
    meta_title: "Erection All Risk Insurance for Projects | Insugo",
    meta_description:
      "Get peace of mind with Insugo's EAR Insurance, covering your projects from material arrival to final commissioning.",
    path: "/corporate/project-insurance/erection-all-risk-insurance",
  },
  {
    sno: 5,
    page: "Contractor’s All Risk Insurance",
    url: "https://insugo.in/corporate/project-insurance/contractor's-all-risk-insurance",
    keyword:
      "Contractors All Risk Insurance contractors all risk policy contractors all risk insurance policy",
    meta_title: "Contractors All Risk Insurance | Insugo",
    meta_description:
      "Protect your construction projects with Insugo's comprehensive Contractors All Risk Insurance, covering property damage and third-party liabilities.",
    path: "/corporate/project-insurance/contractor's-all-risk-insurance",
  },
  {
    sno: 6,
    page: "Contractors Plant & Machinery",
    url: "https://insugo.in/corporate/project-insurance/contractors-plant-and-machinery",
    keyword: "Contractors Plant & Machinery insurance",
    meta_title: "Contractors Plant & Machinery Insurance | Insugo",
    meta_description:
      "Safeguard your construction equipment with Insugo's CPM Insurance. Comprehensive coverage for plant and machinery against unforeseen damages.",
    path: "/corporate/project-insurance/contractors-plant-and-machinery",
  },
  {
    sno: 7,
    page: "Liability Insurance",
    url: "https://insugo.in/corporate/liability-insurance",
    keyword: "Liability Insurance",
    meta_title: "Liability Insurance Services| Insugo ",
    meta_description:
      "Choose Insugo's Liability insurance to defend your business against legal costs, injury claims, and third-party property damage. ",
    path: "/corporate/liability-insurance",
  },
  {
    sno: 8,
    page: "Directors & officers Liability",
    url: "https://insugo.in/corporate/liability-insurance/directors-and-officers-liability",
    keyword:
      "Directors and Officers Insurance Officers Liability Insurance D&O Policy",
    meta_title: "Directors Insurance for Corporate Protection!insugo",
    meta_description:
      "Avoid financial risks for directors and officers. Choose D&O insurance that covers managerial errors, negligence, and lawsuits.",
    path: "/corporate/liability-insurance/directors-and-officers-liability",
  },
  {
    sno: 9,
    page: "Errors & omissions Insurance ",
    url: "https://insugo.in/corporate/liability-insurance/errors-and-omissions-insurance",
    keyword: "Errors and Omissions Insurance E&O insurance",
    meta_title: "Errors & Omissions Insurance | E&O | Insugo",
    meta_description:
      "Insugo offers expert E&O insurance services in India, protecting professionals from negligence claims and service-related liabilities.",
    path: "/corporate/liability-insurance/errors-and-omissions-insurance",
  },
  {
    sno: 10,
    page: "Commercial General Liability",
    url: "https://insugo.in/corporate/liability-insurance/commercial-general-liability",
    keyword:
      "Commercial General Liability Insurance CGL Policy business liability insurance",
    meta_title: "Affordable Commercial Liability Insurance Plans! Insugo",
    meta_description:
      "Looking for reliable Commercial General Liability Insurance in India? Insugo offers tailored solutions to meet your business needs.",
    path: "/corporate/liability-insurance/commercial-general-liability",
  },
  {
    sno: 11,
    page: "Public Liability",
    url: "https://insugo.in/corporate/liability-insurance/public-liability",
    keyword: "Public Liability Insurance PL insurance",
    meta_title: "Public Liability Insurance | Insugo",
    meta_description:
      "With Insugo’s PL insurance, your company is covered against public claims to avoid legal fees, compensation costs, and compliance risks.",
    path: "/corporate/liability-insurance/public-liability",
  },
  {
    sno: 12,
    page: "product liabilty",
    url: "https://insugo.in/corporate/liability-insurance/product-liability",
    keyword: "Product Liability insurance",
    meta_title: "Product Liability Insurance for Businesses | Insugo",
    meta_description:
      "Get product liability insurance online with Insugo. Trusted by Indian businesses for coverage against product-related risks & lawsuits.",
    path: "/corporate/liability-insurance/product-liability",
  },
  {
    sno: 13,
    page: "Professional indemnity",
    url: "https://insugo.in/corporate/liability-insurance/professional-indemnity",
    keyword: "Professional Indemnity Insurance Professional Indemnity Policy",
    meta_title: "Professional Indemnity Insurance | Insugo",
    meta_description:
      "Insugo's professional indemnity insurance safeguards your practice against unforeseen legal challenges. Get a quote now.",
    path: "/corporate/liability-insurance/professional-indemnity",
  },
  {
    sno: 14,
    page: "employee  benefit ",
    url: "https://insugo.in/corporate/employee-benefits",
    keyword: "Employee Benefit Insurance Employee Insurance",
    meta_title: "Corporate Health Insurance Plans | Insugo",
    meta_description:
      "Looking for the best employee insurance solutions? Insugo offers top-tier plans to safeguard your team's well-being.",
    path: "/corporate/employee-benefits",
  },
  {
    sno: 15,
    page: "Group Health Insurance",
    url: "https://insugo.in/corporate/employee-benefits/group-health-insurance",
    keyword:
      "Group health insurance  Group health insurance for small business",
    meta_title: "Group Health Insurance for Small Business | Insugo",
    meta_description:
      "Insugo offers affordable group health plans designed for SMEs. Protect your employees' health and well-being today.",
    path: "/corporate/employee-benefits/group-health-insurance",
  },
  {
    sno: 16,
    page: "Group Personal Accidental Insurance",
    url: "https://insugo.in/corporate/employee-benefits/group-personal-accidental-insurance",
    keyword: "Group Personal Accident Insurance Group Accident Insurance",
    meta_title: "Best Group Personal Accident Insurance ! Insugo ",
    meta_description:
      "Protect your workforce with Group Personal Accident Insurance. Affordable plans for employee safety & security. Get covered today.",
    path: "/corporate/employee-benefits/group-personal-accidental-insurance",
  },
  {
    sno: 17,
    page: "Group Term Life Insurance",
    url: "https://insugo.in/corporate/employee-benefits/group-term-life-insurance",
    keyword: "Group Term Life Insurance Policy",
    meta_title: "Group Term Life Insurance Policy | Insugo",
    meta_description:
      "Give your employees financial security with Insugo's group term life insurance. A smart employee benefit that shows you care.",
    path: "/corporate/employee-benefits/group-term-life-insurance",
  },
  {
    sno: 18,
    page: "Group Gratuity",
    url: "https://insugo.in/corporate/employee-benefits/group-gratuity",
    keyword: "Group Gratuity Insurance",
    meta_title: "Group Gratuity Insurance Plans | Insugo",
    meta_description:
      "Ensure timely gratuity payouts with Insugo's Group Gratuity Insurance. Secure your employees' future and manage liabilities effectively.",
    path: "/corporate/employee-benefits/group-gratuity",
  },
  {
    sno: 20,
    page: "Marine Insurance",
    url: "https://insugo.in/corporate/marine-insurance",
    keyword: "Marine Insurance",
    meta_title: "Marine Insurance | Insugo",
    meta_description:
      "Get reliable marine insurance from Insugo. Protect your cargo, ships, and freight from unforeseen maritime risks.",
    path: "/corporate/marine-insurance",
  },
  {
    sno: 21,
    page: "Marine Open Policy / Cover",
    url: "https://insugo.in/corporate/marine-insurance/marine-open-policy-/-cover",
    keyword: "Marine open policy",
    meta_title: "Marine Open Policy Coverage | Insugo",
    meta_description:
      "Secure your cargo with Insugo's Marine Open Policy. Continuous protection for frequent shipments without the hassle of individual policies.",
    path: "/corporate/marine-insurance/marine-open-policy-/-cover",
  },
  {
    sno: 22,
    page: "Single Transit Insurance",
    url: "https://insugo.in/corporate/marine-insurance/single-transit-insurance",
    keyword: "Transit Insurance single transit insurance",
    meta_title: "Single Transit Insurance | Insugo",
    meta_description:
      "Cover your one-time shipment with Insugo’s single transit insurance. Buy your policy today and ensure safe delivery.",
    path: "/corporate/marine-insurance/single-transit-insurance",
  },
  {
    sno: 23,
    page: "Sales Turn Over Insurance",
    url: "https://insugo.in/corporate/marine-insurance/sales-turn-over-insurance-(stop)",
    keyword: "Sales Turnover Insurance",
    meta_title: "Sales Turnover Insurance (STOP) | Insugo",
    meta_description:
      "Worried about revenue loss? Get Insugo’s STOP insurance and secure your sales turnover. Contact us for a quick consultation!",
    path: "/corporate/marine-insurance/sales-turn-over-insurance-(stop)",
  },
  {
    sno: 24,
    page: "Property Insurance",
    url: "https://insugo.in/corporate/property-insurance",
    keyword: "Property Insurance",
    meta_title: "Property Insurance Coverage | Insugo",
    meta_description:
      "Insugo offers reliable property insurance plans to protect against theft, vandalism, and fire. Secure your property now with our expert solutions.",
    path: "/corporate/property-insurance",
  },
  {
    sno: 25,
    page: "Fire Policy",
    url: "https://insugo.in/corporate/property-insurance/fire-policy",
    keyword: "Fire Insurance  Fire Policy",
    meta_title: "Fire Insurance Policy | Insugo",
    meta_description:
      "Protect your buildings, equipment, and inventory from fire hazards. Don't wait for disaster, get your fire policy today!",
    path: "/corporate/property-insurance/fire-policy",
  },
  {
    sno: 26,
    page: "Stock declaration Policy",
    url: "https://insugo.in/corporate/property-insurance/stock-declaration-policy",
    keyword: "stock declaration policy",
    meta_title: "Stock Declaration Policy | Insugo",
    meta_description:
      "Insugo's stock insurance adapts to your inventory fluctuations. Reliable, cost-effective protection for your business assets. Get started today!",
    path: "/corporate/property-insurance/stock-declaration-policy",
  },
  {
    sno: 27,
    page: "Industrial All Risk Insurance",
    url: "https://insugo.in/corporate/property-insurance/industrial-all-risk-insurance",
    keyword: "Industrial All Risk Insurance IARI",
    meta_title: "Industrial All Risk Insurance | IARI by Insugo",
    meta_description:
      "Keep your industrial assets safe from fire, theft, and natural calamities with a robust IARI plan. Get a free consultation now.",
    path: "/corporate/property-insurance/industrial-all-risk-insurance",
  },
  {
    sno: 28,
    page: "Burglary Insurance",
    url: "https://insugo.in/corporate/property-insurance/burglary-insurance",
    keyword: "Burglary Insurance",
    meta_title: "Burglary Insurance Coverage | Insugo",
    meta_description:
      "Protect your business from unforeseen losses with Insugo's comprehensive burglary insurance. Get a quote now.",
    path: "/corporate/property-insurance/burglary-insurance",
  },
  {
    sno: 29,
    page: "Motor Insurances",
    url: "https://insugo.in/individual/motor-insurance",
    keyword: "Motor Insurance Motor Vehicle Insurance",
    meta_title: "Motor Insurance Plans | Insugo",
    meta_description:
      "Ensure your vehicle's safety with Insugo's trusted motor insurance plans. Quick quotes and easy claims process.",
    path: "/individual/motor-insurance",
  },
  {
    sno: 30,
    page: "Home Insurances",
    url: "https://insugo.in/individual/home-insurance",
    keyword: "Home Insurance House insurance",
    meta_title: "Home Insurance Plans | Insugo",
    meta_description:
      "Explore Insugo's home insurance plans offering comprehensive coverage for your property. Get a quote today!",
    path: "/individual/home-insurance",
  },
  {
    sno: 31,
    page: "Health Insurances",
    url: "https://insugo.in/individual/health-insurance",
    keyword: "Personal Health Insurance Health Insurance Medical Insurance",
    meta_title: "Personal Health Insurance Plans | Insugo",
    meta_description:
      "From hospital bills to diagnostics, cover your health expenses effortlessly with a smart insurance plan. Get your quote today.",
    path: "/individual/health-insurance",
  },
  {
    sno: 32,
    page: "Life Insurances",
    url: "https://insugo.in/individual/life-insurance",
    keyword: "Life Insurance Life Insurance policy",
    meta_title: "Life Insurance Policy | Insugo",
    meta_description:
      "Financial security for your loved ones starts here. Explore flexible life insurance options to match your needs and goals.",
    path: "/individual/life-insurance",
  },
  {
    sno: 33,
    page: "Child Education Insurances",
    url: "https://insugo.in/individual/child-education-insurance",
    keyword: "Education Insurance Children’s Education Insurance",
    meta_title: "Child Education Insurance Plans | Insugo",
    meta_description:
      "Plan ahead for your child's education with insurance that ensures their academic goals are never compromised. Start with a free quote today!",
    path: "/individual/child-education-insurance",
  },
  {
    sno: 34,
    page: "Cyber Insurances",
    url: "https://insugo.in/individual/cyber-insurance",
    keyword: "Cyber Security Insurance cyber insurance Cyber Risk Insurance",
    meta_title: "Cyber Risk Insurance Plans | Insugo",
    meta_description:
      "Safeguard your digital assets with Insugo's cyber insurance. Comprehensive coverage against data breaches, ransomware, and more. Get a quote today!",
    path: "/individual/cyber-insurance",
  },
  {
    sno: 35,
    page: "Contact US ",
    url: "https://insugo.in/contact-us",
    keyword: "Contact us",
    meta_title: "Connect with our Insurance Experts today | Contact us",
    meta_description:
      "Need help with a policy or claim?  Contact us to speak with our experts",
    path: "/contact-us",
  },
];
