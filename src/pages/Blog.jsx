import React, { useState } from "react";
import {
  BlogCard,
  HeroLayout,
  MaxWidthContainerUpdate,
} from "../components/Layouts/UtilsLayout";
import { NewImagePath } from "../utils/imagepath";
import Button from "../components/ui/Button";
import useFetchApi from "../Hook/useFetchApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Blog = () => {
  const [loadMore, setLoadMore] = useState(false);
  const { data, isLoading } = useFetchApi({
    path: "blog.php",
    formDataArr: { action: "list", limit: 1000, page: 1 },
  });

  return (
    <div className="w-full">
      <HeroLayout
        img={NewImagePath.BlogInsuBgMain}
        title={"Blog"}
        desc1={"Bridging the Gap Between Risk and Peace of Mind"}
      />

      <MaxWidthContainerUpdate>
        {/* 🔹 Shimmer when loading */}
        {isLoading ? (
          <div className="flex flex-col gap-6 mb-10"> 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="p-4 border rounded-lg shadow-md bg-gray-600"
                >
                  <Skeleton height={200} className="rounded-lg" />
                  <div className="mt-4">
                    <Skeleton height={20} width="60%" />
                    <Skeleton height={15} width="80%" />
                    <Skeleton height={15} width="70%" />
                  </div>
                </div>
              ))}

             
            </div>
          </div>
        ) : data?.data?.length > 0 ? (
          // 🔹 When data exists
          <div className="flex flex-col gap-4 w-full mb-10">
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full"
              style={{
                rowGap: "2rem",
              }}
            >
              {data?.data
                ?.slice(0, loadMore ? data?.data?.length : 4)
                ?.map((v, i) => (
                  <BlogCard key={i} data={v} />
                ))}
            </div>
            {data?.data?.length > 4 && (
              <div className="flex justify-center py-10">
                <Button
                  width={"max-w-fit"}
                  bg={"#333333"}
                  color={"#fff"}
                  onClick={() => {
                    setLoadMore(!loadMore);
                  }}
                >
                  LOAD MORE
                </Button>
              </div>
            )}
          </div>
        ) : (
          // 🔹 When no data found
         <div className="flex flex-col gap-6 mb-10"> 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="p-4 border rounded-lg shadow-md bg-gray-600"
                >
                  <Skeleton height={200} className="rounded-lg" />
                  <div className="mt-4">
                    <Skeleton height={20} width="60%" />
                    <Skeleton height={15} width="80%" />
                    <Skeleton height={15} width="70%" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </MaxWidthContainerUpdate>
    </div>
  );
};

export default Blog;
