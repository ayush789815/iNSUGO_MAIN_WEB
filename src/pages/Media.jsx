import React, { useState } from "react";
import {
  HeroLayout,
  MaxWidthContainerUpdate,
  MediaCard,
} from "../components/Layouts/UtilsLayout";
import { NewImagePath } from "../utils/imagepath";
import Button from "../components/ui/Button";
import useFetchApi from "../Hook/useFetchApi";
import MyModal from "../components/MyModal";
import { base_url } from "../utils/constant";

const Media = () => {
  const [url, setUrl] = useState({});
  const [open, setOpen] = useState(false);

  const { data } = useFetchApi({
    path: "media.php",
    formDataArr: { action: "web_list" },
  });
  return (
    <>
      <HeroLayout
        img={NewImagePath.MediaInsuBgMain}
        title={"Media"}
        desc1={"Life At Insugo"}
      />
      <MaxWidthContainerUpdate>
        {data?.data?.length > 0 ? (
          <div className="pb-10 mb-20">
            <MediaCard
              title={"Video Gallery"}
              data={data?.data.filter((v, i) => v?.type == "video")}
              type={"video"}
              setUrl={setUrl}
              setOpen={setOpen}
            />
            <MediaCard
              title={"Image Gallery"}
              data={data?.data.filter((v, i) => v?.type == "image")}
              type={"image"}
              setUrl={setUrl}
              setOpen={setOpen}
            />
          </div>
        ) : (
          <p className="pb-10 mb-20 xl:text-3xl lg:text-xl font-bold text-lg text-center">
            No Data Found
          </p>
        )}

        {/* <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-3 gap-y-5 justify-center min-w-full">
          {data?.data
            ?.slice(0, loadMore ? data?.data?.length : 6)
            .map((v, i) => (
              <img
loading="lazy"
                onClick={() => {
                  setUrl(v);
                  setOpen(true);
                }}
                key={i}
                className={"rounded-[10px] w-full md:w-auto cursor-pointer"}
                src={v?.image}
                alt={v?.alt_text}
              />
            ))}
        </div>
        <div className="flex justify-center">
          {data?.data?.length > 6 && (
            <Button
              width={"max-w-fit "}
              bg={"#333333"}
              color={"#fff"}
              onClick={() => {
                setLoadMore(!loadMore);
              }}
            >
              {loadMore ? "Show Less" : "Load More"}
            </Button>
          )}
        </div> */}
      </MaxWidthContainerUpdate>

      <MyModal
        title={url?.title}
        isOpen={open}
        setIsOpen={setOpen}
        CancelClick={() => setUrl({})}
      >
        {url?.type == "video" ? (
          <div
            style={{ width: "100%", height: "100%" }}
            dangerouslySetInnerHTML={{
              __html: url?.video_url?.replace(
                /<iframe /,
                '<iframe class="w-full h-full" style="width:100%; height:100%; min-height:50vh" '
              ),
            }}
          />
        ) : url?.type == "image" ? (
          <img
            loading="lazy"
            className={
              "rounded-[10px] !h-full !w-full md:w-full cursor-pointer"
            }
            src={base_url + "insugo/" + url?.image}
            alt={url?.alt_text}
          />
        ) : (
          ""
        )}
      </MyModal>
    </>
  );
};

export default Media;

{
  /* <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-3 gap-y-5 justify-center min-w-full">
          {images?.slice(0, loadMore ? images?.length : 2).map((v, i) => (
            <div
              key={i}
              className={`flex ${
                i % 2 == 0 ? `flex-col` : `flex-col md:flex-col-reverse`
              } gap-5 flex-1 w-full sm:min-w-[300px] xl:min-w-[400px] lg:min-w-[350px] justify-center items-center `}
            >
              <img
loading="lazy"
                className={"rounded-[24px] rounded-br-none  "}
                src={v?.images[0]?.img}
                alt={v?.alt}
              />
              <div className="flex gap-2 md:gap-2 flex-row sm:flex-row justify-center ">
                {v?.images[1]?.img && (
                  <img
loading="lazy"
                    className={
                      "rounded-[24px] w-1/2 object-fill md:max-h-auto md:w-auto  rounded-bl-none"
                    }
                    src={v?.images[1]?.img}
                    alt={v?.alt}
                  />
                )}

                {v?.images[2]?.img && (
                  <img
loading="lazy"
                    className={
                      "rounded-[24px]  w-1/2 object-fill md:max-h-auto md:w-auto  rounded-bl-none "
                    }
                    src={v?.images[2]?.img}
                    alt={v?.alt}
                  />
                )}
              </div>
            </div>
          ))}
        </div> */
}
{
  /* <div className="flex flex-wrap gap-2 gap-y-5 justify-center"> */
}
