import React from "react";
import {
  Heading,
  HeroLayout,
  MaxWidthContainerUpdate,
  OpeningCard,
} from "../components/Layouts/UtilsLayout";
import { NewImagePath } from "../utils/imagepath";
import { OpeningPostions } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import useFetchApi from "../Hook/useFetchApi";

const Careers = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useFetchApi({
    path: "careers.php",
    formDataArr: { action: "web_list" },
  });

  return (
    <div className="w-full">
      <HeroLayout
        img={NewImagePath.CareersBgMain}
        title={"Careers"}
        desc1={"Join Our Team at Insugo Insurance Brokers"}
      />
      <MaxWidthContainerUpdate>
        <div className="flex flex-col gap-4 w-full pb-10 ">
          {data?.data?.length > 0 || isLoading ? (
            <>
              <Heading title={"Current Openings"} />
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-2  w-full  "
                style={{
                  rowGap: "2rem",
                }}
              >
                {data?.data?.map((v, i) => (
                  <OpeningCard
                    onClick={() =>
                      navigate("/career-details", { state: { id: v?.id } })
                    }
                    key={i}
                    data={v}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-4 justify-center items-center pb-20 font-bold text-lg md:text-xl xl:text-2xl">
              <h3>Please send us your CV at</h3>
              <h3 className="cursor-pointer">
                <a href="mailto:insugo@gmail.com" className="hover:underline">
                  insugo@gmail.com
                </a>
              </h3>
            </div>
          )}
        </div>
      </MaxWidthContainerUpdate>
    </div>
  );
};

export default Careers;
