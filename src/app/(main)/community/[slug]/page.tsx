"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import CommentArticles from "@/components/CommentArticles";
function QuestionDetail() {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop() || "";
  return (
    <div className="w-full">
      <div className=" max-w-5xl mx-auto border-l-[1px] border-solid border-gray-300">
        <div className="mx-4">
          <div className="flex justify-between">
            <p className="font-medium text-2xl my-4 text-shadow-md">
              Mới bắt đầu tập gym thì nên tập những bài nào để giảm mỡ bụng và
              tránh chấn thương?
            </p>
            <Button className="rounded-xl font-medium justify-center my-4 bg-blue-700  text-white px-3 py-2 text-sm leading-none">
              Ask Question
            </Button>
          </div>
          <div className="flex gap-4 text-sm border-b-[1px] border-solid border-gray-200  py-4">
            <div className="flex gap-1">
              <span className="opacity-70">Asked</span>
              <span>today</span>
            </div>
            <div className="flex gap-1">
              <span className="opacity-70">Modified</span>
              <span>today</span>
            </div>
            <div className="flex gap-1">
              <span className="opacity-70">Viewed</span>
              <span>14 times</span>
            </div>
          </div>
          <div className="my-2 flex gap-4">
            <div className="max-w-[70%] ">
              <p className="my-2">
                I am using Conan (version 2.15.1) to install Boost in a Debian
                Bullseye Docker container. I am able to do that successfully
                with the command conan install --build "*" . (build everything
                from source). However, if I use the command conan install
                --build missing . (build packages from source whose binary
                package is not found) I get the following error:
              </p>
              <div className="text-sm flex justify-between my-4">
                <div className="flex gap-2 font-semibold">
                  <a
                    href="/"
                    className="px-1 py-0.5 bg-gray-200 cursor-pointer rounded text-xs"
                  >
                    Javascript
                  </a>
                  <a
                    href="/"
                    className="px-1 py-0.5 bg-gray-200 cursor-pointer rounded text-xs"
                  >
                    Reactjs
                  </a>
                  <a
                    href="/"
                    className="px-1 py-0.5 bg-gray-200 cursor-pointer rounded text-xs"
                  >
                    Nodejs
                  </a>
                </div>
              </div>
              <div className="my-4">
                {/* Thẻ user info */}
                <div className="flex justify-end">
                  <a
                    href="/"
                    className="px-2 py-2 bg-blue-50 rounded text-xs w-52 inline-block"
                  >
                    <p className="text-gray-500 mb-1">asked 29 mins ago</p>
                    <div className="flex items-center gap-2">
                      <Image
                        className="w-7 h-7 rounded"
                        width={28}
                        height={28}
                        src="/images/avatar-default.jpg"
                        alt="avatar_default"
                      />
                      <div className="text-sm">
                        <p className="text-blue-500 hover:underline">
                          Huy Hoàng
                        </p>
                        <div className="flex gap-1 text-[11px] items-center">
                          <span className="font-bold text-black">1,007</span>
                          <span className="text-yellow-500">● 5</span>
                          <span className="text-gray-400">● 32</span>
                          <span className="text-orange-300">● 60</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Comment component nằm dưới */}
                <div className="mt-4">
                  <CommentArticles />
                </div>
              </div>
            </div>

            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionDetail;
