import React from "react";
import SimpleSlider from "./Slick";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

interface Props {
  data?: any;
  itemToShow?: number;
}

interface ArticleData {
  content: string;
  id: string;
  title: string;
  image: string;
  slug: string;
  Category: {
    id: string;
    name: string;
  };
  User: {
    id: string;
    username: string;
  };
}
function ArticlePreviewBanner({ data, itemToShow = 1 }: Props) {
  return (
    <div className="overflow-hidden justify-center">
      <SimpleSlider
        dots={true}
        slidesToScroll={1}
        slidesToShow={itemToShow}
        autoPlay={false}
      >
        {data?.data?.content?.map((item: ArticleData, index: number) => (
          <div key={index} className=" w-full p-2 focus:border-none ">
            <Image
              width={315}
              height={550}
              className="object-cover w-full h-[460px] relative focus:outline-none"
              src={item?.image || "/images/avatar_default.jpg"}
              alt={item?.id || "default Image"}
            />

            <div className="w-[90%] max-w-[300px] mx-5  absolute top-1/4 animate-fade-in">
              <div className="text-white text-center">
                <h2 className="my-1 text-base sm:text-lg font-semibold">
                  {item?.title}
                </h2>
                <div className="text-xs sm:text-sm font-medium text-white text-center my-4">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {item?.content.length > 100
                      ? item?.content.slice(0, 200) + "..."
                      : item?.content}
                  </ReactMarkdown>
                </div>
                <Link
                  href={`/home/${item?.slug}`}
                  className="px-3 py-2 sm:px-4 sm:py-3 border-solid border-2 border-white text-sm sm:text-lg font-semibold hover:opacity-75 cursor-pointer"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </SimpleSlider>
    </div>
  );
}

export default ArticlePreviewBanner;
