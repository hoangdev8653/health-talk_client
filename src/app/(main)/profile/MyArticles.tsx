import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getArticlesByUserThunk } from "@/stores/thunks/article";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MyArticles() {
  const dispacth = useAppDispatch();
  const { data } = useAppSelector((state) => state.article);

  useEffect(() => {
    dispacth(getArticlesByUserThunk());
  }, []);

  return (
    <div className="w-full h-auto">
      <h1
        style={{ textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)" }}
        className=" font-medium text-3xl my-4 "
      >
        My Articles
      </h1>
      {data &&
        data?.data?.content?.map((item: any, index: number) => (
          <div key={index} className=" flex gap-2 my-4 tablet:block">
            <div className="w-2/5 tablet:w-full justify-center">
              <Image
                width={200}
                height={200}
                src={item?.image}
                alt={item?.slug}
                className="w-[90%] h-[300px] tablet:w-full object-cover "
              />
            </div>
            <div className="flex-1 tablet:w-full justify-center text-center my-auto">
              <p className="text-2xl uppercase tablet:my-1 font-bold tablet:text-lg">
                {item?.title}
              </p>

              <div className="text-xl my-2 tablet:my-1 tablet:text-base">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {item.content.length > 100
                    ? item.content.slice(0, 200) + "..."
                    : item.content}
                </ReactMarkdown>
              </div>
              <button>
                <a href={`http://localhost:3000/home/${item?.slug}`}>
                  <p className="uppercase text-xl p-3 border-2 border-gray-400 hover:opacity-70 tablet:text-base tablet:p-2">
                    Đọc Thêm
                  </p>
                </a>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default MyArticles;
