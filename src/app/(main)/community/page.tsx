"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";
import sortValue from "@/components/SortValue";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getAllQuestionThunk } from "@/stores/thunks/question";
import { getAllTagsThunk } from "@/stores/thunks/tag";
import formatDate from "@/utils/formatDate";

function Community() {
  const dispatch = useAppDispatch();
  const question = useAppSelector((state) => state.question);
  const tag = useAppSelector((state) => state.tag);

  useEffect(() => {
    dispatch(getAllQuestionThunk());
    dispatch(getAllTagsThunk());
  }, []);

  // console.log(question.data.data.content);

  return (
    <div className="w-full ">
      <div className="max-w-5xl mx-auto  border-l-[1px] border-solid border-gray-300">
        <div className="flex justify-between mx-4">
          <p className="font-medium text-2xl my-4 text-shadow-md">
            Newest Questions
          </p>
          <Button className="rounded-xl font-medium justify-center my-4 bg-blue-700  text-white px-3 py-2 text-sm leading-none">
            Ask Question
          </Button>
        </div>
        <div className="flex gap-4 flex-wrap ">
          <div className="w-full md:w-[70%] ">
            <div className="flex justify-between">
              <p className="my-2 mx-4">
                {question?.data?.data?.content?.length} questions
              </p>
              <div className="flex items-center">
                <span>Sort by</span>
                <select
                  title="sort by"
                  //   value={sortOrder}
                  //   onChange={(e) => onChange(e.target.value)}
                  className="border p-1 bg-white text-black"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>
            {question?.data?.data?.content?.map((item: any, index: number) => (
              <div className=" border-solid border-t-2  border-gray-300 opacity-60 ">
                <div className="flex my-4 gap-2 max-w-[95%] mx-auto">
                  <div className="w-1/6 text-xs leading-6">
                    <p>0 Votes</p>
                    <p>0 answers</p>
                    <p>2 views</p>
                  </div>

                  <div>
                    <a
                      href={`http://localhost:3000/community/${item?.slug}`}
                      className="text-blue-700 text-base hover:opacity-75 "
                    >
                      {item?.title}
                    </a>
                    <p className="text-sm my-1 line-clamp-2">{item?.content}</p>

                    <div className="text-sm flex  justify-between">
                      <div className="flex gap-2 font-semibold">
                        {item?.tags?.map((tag: any, index: number) => (
                          <a
                            href={`http://localhost:3000/community/taged/${item?.slug}`}
                            key={index}
                            className="px-1 py-0.5 bg-gray-200 cursor-pointer rounded text-xs"
                          >
                            {tag?.title}
                          </a>
                        ))}
                      </div>
                      <div className="flex gap-1 text-sm">
                        <Image
                          className="w-5 h-5 rounded"
                          width={100}
                          height={100}
                          src="/images/avatar-default.jpg"
                          alt="avatar_default"
                        />
                        <span className="text-blue-400">
                          {item?.User.username}
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
                <div className="flex flex-wrap gap-2 my-3">
                  <a
                    href={`http://localhost:3000/community/taged/${item?.slug}`}
                    className=" flex gap-1 text-sm"
                  >
                    <p className="px-1 py-0.5 bg-gray-200 cursor-pointer rounded ">
                      {item?.title}
                    </p>
                    <span className="opacity-60 my-0.5">x</span>
                    <span className="opacity-60 my-0.5">2531221</span>
                  </a>
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
