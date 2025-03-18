import React from "react";
import SimpleSlider from "./Slick";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
        autoPlay={true}
      >
        {data?.data?.content?.map((item: ArticleData, index: number) => (
          <div key={item.id} className=" w-full p-2 focus:border-none">
            <Image
              width={315}
              height={550}
              className="object-cover w-full h-[460px] relative focus:outline-none"
              src={item.image}
              alt={item.id}
            />
            <div className="w-[300px] absolute top-1/4 mx-5 ">
              <div className=" text-white text-center ">
                <h2 className="my-1 text-lg font-semibold">{item.title}</h2>
                <div className="text-sm font-medium text-white text-center my-4">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {item.content.length > 100
                      ? item.content.slice(0, 200) + "..."
                      : item.content}
                  </ReactMarkdown>
                </div>
                <a
                  href={`http://localhost:3000/home/${item.slug}`}
                  className="px-4 py-3 border-solid border-2 border-white text-lg font-semibold hover:opacity-75 cursor-pointer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </SimpleSlider>
    </div>
  );
}

export default ArticlePreviewBanner;
