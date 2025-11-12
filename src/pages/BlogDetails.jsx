import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { HeroBlogLayout } from "../components/Layouts/UtilsLayout";
import { NewImagePath } from "../utils/imagepath";
import useFetchApi from "../Hook/useFetchApi";
import { decode } from "base-64";

const BlogDetails = () => {
  const { title } = useParams();
  
  // Extract the encoded ID from the end of the slug
  const extractId = (slug) => {
    const parts = slug.split('-');
    let encodedId = parts[parts.length - 1];
    

    while (encodedId.length % 4 !== 0) {
      encodedId += '=';
    }
    
    return encodedId;
  };
  
  const encodedId = extractId(title);
  
  const { data } = useFetchApi({
    path: "blog.php",
    formDataArr: { action: "listbyid", id: decode(encodedId) },
  });
  
  return (
    <div className="">
      <HeroBlogLayout
        img={NewImagePath.BlogInsuBgMain}
        title={data?.data?.title}
      />
      <div className="flex justify-center">
        <div
          className="max-w-6xl mb-10"
          dangerouslySetInnerHTML={{ __html: data?.data?.description }}
        ></div>
      </div>
    </div>
  );
};

export default BlogDetails;

// export default BlogDetails;

{
  /* <div className="flex flex-col max-w-6xl gap-10">
          <div className="text-center">
            Navigating the insurance landscape can be complex, and finding the
            best policy for your needs isn't always straightforward. This is
            where an insurance broker becomes invaluable. But what exactly does
            an insurance broker do, and why should you consider working with
            one?
          </div>

          <div className="flex flex-col gap-8 w-full ">
            <BothSideCard
              className={`flex-col md:flex-row-reverse max-h-full md:max-h-[280px] `}
              content={
                <div className="space-y-4">
                  <Heading
                    title={"What is an Insurance Broker?"}
                    side={"left"}
                  />
                  <p className="text-base md:text-lg text-gray-600">
                    An insurance broker acts as an intermediary between you and
                    insurance companies. Unlike agents who represent a specific
                    insurer, brokers work independently, meaning their goal is
                    to find you the best coverage from a variety of providers.
                    They assess your needs, compare policies, and recommend
                    solutions that fit your budget and requirements.
                  </p>
                </div>
              }
            >
              <div className="flex justify-center">
                <img
loading="lazy"
                  src={NewImagePath?.Blog1Image}
                  alt="Claims Management"
                  className="max-w-full h-auto rounded-lg min-h-[300px] max-h-[350px] min-w-[500px] "
                />
              </div>
            </BothSideCard>
          </div>

          <div className="flex flex-col gap-8 w-full ">
            <Heading
              title={"The Benefits of Using an Insurance Broker"}
              side={"left"}
            />
            <ol className="list-decimal list-inside space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="text-gray-700">
                  <span className="font-bold text-black">
                    {benefit.title}:
                  </span>{" "}
                  {benefit.description}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-8 w-full ">
            <BothSideCard
              className={`flex-col-reverse md:flex-row max-h-full md:max-h-fit `}
              content={
                <div className="space-y-4">
                  <Heading
                    title={"Why You Need an Insurance Broker?"}
                    side={"left"}
                  />
                  <p className="text-base md:text-lg text-gray-600">
                    Insurance policies often contain hidden clauses or
                    exclusions that may not be obvious at first glance. Brokers
                    help you navigate these details, ensuring there are no
                    surprises down the road. Additionally, they can access
                    exclusive deals that may not be available to the general
                    public.
                  </p>
                  <p className="text-base md:text-lg text-gray-600">
                    In short, an insurance broker is your ally in securing
                    comprehensive coverage at a competitive price. Whether
                    you're insuring your home, car, or business, having a broker
                    by your side can provide peace of mind and financial
                    protection.
                  </p>
                </div>
              }
            >
              <div className="flex justify-center">
                <img
loading="lazy"
                  src={NewImagePath?.Blog5Image}
                  alt="Claims Management"
                  className="max-w-full h-auto rounded-lg min-h-[300px] max-h-[350px] min-w-[500px] "
                />
              </div>
            </BothSideCard>
          </div>
        </div> */
}
