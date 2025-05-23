"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getAllQuestionThunk } from "@/stores/thunks/question";
import { getAllTagsThunk } from "@/stores/thunks/tag";
import formatDate from "@/utils/formatDate";
import Link from "next/link";
import useLocalStorageUser from "@/components/UseLocalStorageUser";

function Community() {
  const dispatch = useAppDispatch();
  const question = useAppSelector((state) => state.question);
  const tag = useAppSelector((state) => state.tag);
  const [sortOrder, setSortOrder] = useState<string>("newest");
  const user = useLocalStorageUser();

  useEffect(() => {
    dispatch(getAllQuestionThunk());
    dispatch(getAllTagsThunk());
  }, []);

  const formatData = question?.data?.data?.content ?? [];
  const sortValue = [...formatData].sort((a: any, b: any) => {
    return sortOrder === "newest"
      ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  return (
    <div className="w-full ">
      <div className="max-w-5xl mx-auto  border-l-[1px] border-solid border-gray-300">
        <div className="flex justify-between mx-4">
          <p className="font-medium text-2xl my-4 text-shadow-md">
            Newest Questions
          </p>
          <Link
            href={user ? "/community/ask" : "/login"}
            className="rounded-xl font-medium justify-center my-4 bg-blue-700 text-white px-3 py-4 text-sm leading-none"
          >
            Ask Question
          </Link>
        </div>
        <div className="flex gap-4 flex-wrap ">
          <div className="w-full md:w-[70%] ">
            <div className="flex justify-between">
              <p className="my-2 mx-4">{sortValue?.length} questions</p>
              <div className="flex items-center">
                <span>Sort by</span>
                <select
                  title="sort by"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="border p-1 bg-white text-black"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>
            {sortValue?.map((item: any, index: number) => (
              <div
                key={index}
                className=" border-solid border-t-2  border-gray-300 opacity-60 "
              >
                <div className="flex my-4 gap-4 max-w-[95%] mx-auto justify-between">
                  <div className="w-[10%] text-xs leading-6">
                    <p>0 Votes</p>
                    <p>{item?.answerCount} answers</p>
                    <p>{item?.views} views</p>
                  </div>

                  <div className="flex-1">
                    <Link
                      href={`/community/${item?.slug}`}
                      className="text-blue-700 text-base hover:opacity-75 block"
                    >
                      {item?.title}
                    </Link>
                    <p className="text-sm my-1 line-clamp-2 h-[40px] overflow-hidden">
                      {item?.content}
                    </p>

                    <div className="text-sm flex justify-between">
                      <div className="flex gap-2 font-semibold flex-wrap">
                        {item?.tags?.map((tag: any, index: number) => (
                          <div
                            key={index}
                            className="px-1 py-0.5 bg-gray-200 cursor-pointer rounded text-xs"
                          >
                            {tag?.title}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-1 text-sm">
                        <Image
                          className="w-5 h-5 rounded"
                          width={100}
                          height={100}
                          src={
                            item?.User?.image || "/images/avatar_default.jpg"
                          }
                          alt={item?.User?.id || "avatar default"}
                        />
                        <span className="text-blue-400">
                          {item?.User?.username}
                        </span>
                        <span className="font-semibold">1,007 asked</span>
                        <span className="font-semibold">
                          {formatDate(item?.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <div className="my-2">
              <p>Related Tags</p>
              {tag?.data?.data?.content?.map((item: any, index: number) => (
                <div key={index} className="flex flex-wrap gap-2 my-3">
                  <div className=" flex gap-1 text-sm">
                    <p className="px-1 py-0.5 bg-gray-200 cursor-pointer rounded ">
                      {item?.title}
                    </p>
                    {/* <span className="opacity-60 my-0.5">x</span>
                    <span className="opacity-60 my-0.5">2531221</span> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
