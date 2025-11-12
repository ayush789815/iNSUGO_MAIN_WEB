import React from "react";
import FandQSection from "./FandQ";
import {
  BecauseCardFull,
  CorporateNewCard,
  Heading,
  HeroLayout,
  LiabilityMain,
  MaxWidthContainer,
  MaxWidthContainerUpdate,
  ProjectCard2WithImages,
} from "./UtilsLayout";
import { AboutUs, NewImagePath } from "../../utils/imagepath";
import {
  IdeasEmployeeMain,
  IdeasLiabilityMain,
  ProjectInsuranceMain,
  PropertyInsurance,
} from "../../utils/constant";

const LiabilityLayout = React.memo(
  ({
    title,
    children,
    fqarr = [],
    obj,
    prdObj,
    maxH = "md:max-h-[250px]",
    item = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Liability Insurance",
        path: "/corporate/liability-insurance",
      },
    ],
  }) => {
    return (
      <>
        <HeroLayout
          img={NewImagePath.liabilityInsuBgMain}
          title={title}
          Breadcrumb={{
            name: title,
            item: item,
          }}
        />
        <MaxWidthContainerUpdate>
          {obj && (
            <div className="flex flex-col gap-8 w-full -px-3 ">
              <CorporateNewCard
                scrollNone={false}
                maxH={maxH}
                arr={IdeasLiabilityMain}
                title={obj?.title}
                desc={obj?.desc}
                base_name="Liability Insurance"
                desc2={obj?.desc2}
              />
            </div>
          )}
          {prdObj && (
            <ProjectCard2WithImages
              title={prdObj?.title}
              desc={prdObj?.desc}
              images={prdObj?.images}
              arr={prdObj?.businesses}
            />
          )}

          {/* {service && (
            <BecauseCardFull
              title={service?.title}
              arr={service?.service}
            />
          )}
          {normalBlog && (
            <div className="flex flex-col gap-8 w-full ">
              <Heading title={normalBlog?.title} />
              <p className="text-center"> {normalBlog?.desc}</p>
            </div>
          )} */}

          {children}
        </MaxWidthContainerUpdate>
        <FandQSection arr={fqarr} alt={title} />
      </>
    );
  }
);

const EmployeeBenLayout = React.memo(
  ({
    title,
    children,
    fqarr = [],
    obj,
    maxH = "md:max-h-[250px]",
    item = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Employee Benefits",
        path: "/corporate/employee-benefits",
      },
    ],
  }) => {
    return (
      <>
        <HeroLayout
          img={NewImagePath.EmployeeInsuBgMain}
          title={title}
          Breadcrumb={{
            name: title,
            item: item,
          }}
        />
        <MaxWidthContainerUpdate>
          {obj && (
            <div className="flex flex-col gap-8 w-full ">
              <CorporateNewCard
                scrollNone={true}
                maxH={maxH}
                arr={IdeasEmployeeMain}
                title={obj?.title}
                desc={obj?.desc}
                desc2={obj?.desc2}
                base_name="Employee Benefits"
              />
            </div>
          )}
          {children}
        </MaxWidthContainerUpdate>
        <FandQSection arr={fqarr} alt={title} />
      </>
    );
  }
);

const MarineLayout = React.memo(
  ({
    title,
    children,
    fqarr = [],
    item = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Marine Insurance",
        path: "/corporate/marine-insurance",
      },
    ],
  }) => {
    return (
      <>
        <HeroLayout
          img={NewImagePath.MarineInsuBgMain}
          title={title}
          Breadcrumb={{
            name: title,
            item: item,
          }}
        />
        <MaxWidthContainerUpdate>{children}</MaxWidthContainerUpdate>
        <FandQSection arr={fqarr} alt={title} />
      </>
    );
  }
);

const PropertyLayout = React.memo(
  ({
    title,
    children,
    fqarr = [],
    obj = {},
    item = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Property Insurance",
        path: "/corporate/property-insurance",
      },
    ],
  }) => {
    return (
      <>
        <HeroLayout
          img={NewImagePath.PropertyInsuBgMain}
          title={title}
          Breadcrumb={{
            name: title,
            item: item,
          }}
        />
        <MaxWidthContainerUpdate>
          <div className="flex flex-col gap-8 w-full ">
            <CorporateNewCard
              base_name="Property Insurance"
              scrollNone={true}
              arr={PropertyInsurance}
              title={obj?.title}
              desc={obj?.desc}
              desc2={obj?.desc2}
            />
          </div>
          {children}
        </MaxWidthContainerUpdate>
        <FandQSection arr={fqarr} alt={title} />
      </>
    );
  }
);

const ProjectLayout = React.memo(
  ({
    title,
    children,
    fqarr = [],
    obj,
    prdObj,
    service,
    normalBlog,
    item = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Project Insurance",
        path: "/corporate/project-insurance",
      },
    ],
  }) => {
    return (
      <>
        <HeroLayout
          img={AboutUs.Frame1}
          title={title}
          alt={title}
          Breadcrumb={{
            name: title,
            item: item,
          }}
        />
        <MaxWidthContainerUpdate>
          {obj && (
            <div className="flexflex-col gap-8 w-full min-w-full ">
              <CorporateNewCard
                base_name="Project Insurance"
                arr={ProjectInsuranceMain}
                title={obj?.title}
                desc={obj?.desc}
                desc2={obj?.desc2}
              />
            </div>
          )}
          {prdObj && (
            <ProjectCard2WithImages
              title={prdObj?.title}
              images={prdObj?.images}
              arr={prdObj?.businesses}
            />
          )}
          {service && (
            <BecauseCardFull
              title={service?.title}
              arr={service?.service}
              show={service?.show}
            />
          )}
          {normalBlog && (
            <div className="flex flex-col gap-8 w-full ">
              <Heading title={normalBlog?.title} />
              <p className="text-center"> {normalBlog?.desc}</p>
            </div>
          )}

          {children}
        </MaxWidthContainerUpdate>
        <FandQSection arr={fqarr} alt={title} />
      </>
    );
  }
);

export {
  MarineLayout,
  PropertyLayout,
  ProjectLayout,
  LiabilityLayout,
  EmployeeBenLayout,
};
