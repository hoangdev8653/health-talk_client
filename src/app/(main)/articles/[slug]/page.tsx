"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllArticleBySlugCategoryThunk } from "@/stores/thunks/article";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import Loading from "@/components/Loading";

interface ArticleData {
  content: string;
  id: string;
  title: string;
  image: string;
  slug: string;
  Category?: {
    id: string;
    name: string;
    image?: string;
  };
  User?: {
    id: string;
    username: string;
  };
}

const Category: React.FC = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const article = useAppSelector((state) => state.article);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (slug) {
      dispatch(getAllArticleBySlugCategoryThunk(slug));
    }
  }, [slug, dispatch]);

  const categoryName =
    article?.data?.data?.content?.[0]?.Category?.name || "Loading...";
  const categoryImage =
    article?.data?.data?.content?.[0]?.Category?.image || "/default-image.jpg";

  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto my-10">
        <h1
          style={{ textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)" }}
          className="font-medium text-3xl my-4"
        >
          {isClient ? categoryName : "Loading..."}
        </h1>
      </div>

      <div className="my-8">
        <Image
          src={categoryImage}
          alt={categoryName}
          width={800}
          height={400}
          className="w-full h-[700px] object-cover "
        />
      </div>

      <div className="w-4/5 mx-auto">
        <div className="grid grid-cols-3 gap-8 my-4 tablet:grid-cols-1">
          {article?.data?.data?.content?.map(
            (item: ArticleData, index: number) => (
              <div key={index} className="item border-2 border-gray-300">
                <a href={`/home/${item.slug}`}>
                  <div>
                    <Image
                      width={400}
                      height={250}
                      className="object-cover w-full h-[180px]"
                      src={item.image || "/default-image.jpg"}
                      alt={item.slug}
                    />
                    <div className="mx-4 my-2">
                      <h2 className="my-1 font-bold">{item.title}</h2>
                      <div className="text-sm text-gray-600">
                        <p>by {item.User?.username || "Unknown"}</p>
                        <div>
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {item.content.length > 100
                              ? item.content.slice(0, 200) + "..."
                              : item.content}
                          </ReactMarkdown>
                        </div>
                        <span className="text-rose-400 hover:underline cursor-pointer">
                          Read more
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            )
          ) || (
            <>
              <Loading />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
