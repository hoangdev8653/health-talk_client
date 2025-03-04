"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import SimpleSlider from "@/components/Slick";
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

function Article({ data, itemToShow = 3 }: Props) {
  return (
    <div className="overflow-hidden ">
      <SimpleSlider slidesToScroll={1} slidesToShow={itemToShow}>
        {data?.data?.content?.map((item: ArticleData, index: number) => (
          <div key={item.id} className=" w-full min-h-[500px] p-4">
            <Link href={`http://localhost:3000/home/${item.slug}`}>
              <Image
                width={315}
                height={550}
                className="object-cover w-[315px] h-[200px]"
                src={item.image}
                alt="logo"
              />
              <div className=" my-2">
                <h2 className="my-1 text-lg">{item.title}</h2>
                <div className="text-base" style={{ color: "#666" }}>
                  <p className="my-2">
                    by {item.User.username} | <span>{item.Category.name}</span>
                  </p>
                  <div className="text-sm font-medium">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {item.content.length > 100
                        ? item.content.slice(0, 200) + "..."
                        : item.content}
                    </ReactMarkdown>
                  </div>
                  <span className="text-rose-400 hover:underline cursor-pointer">
                    read more
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </SimpleSlider>
    </div>
  );
}

export default Article;
