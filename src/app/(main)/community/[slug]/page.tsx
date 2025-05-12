"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getQuestionBySlugThunk } from "@/stores/thunks/question";
import {
  getAnswerBySlugThunk,
  createAnswerThunk,
} from "@/stores/thunks/answer";
import formatDate from "@/utils/formatDate";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { articleValidate } from "@/validations/article";
import { FaAngleDown } from "react-icons/fa";
import { getLocalStorage } from "@/lib/localStorage";

function QuestionDetail() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const question = useAppSelector((state) => state.question);
  const answer = useAppSelector((state) => state.answer);
  const slug = pathname?.split("/").pop() || "";
  const user = getLocalStorage("user");

  // console.log(answer.data);

  useEffect(() => {
    if (slug) {
      dispatch(getQuestionBySlugThunk(slug));
      dispatch(getAnswerBySlugThunk(slug));
    }
  }, [slug, dispatch]);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(articleValidate.reviewArticle),
  });

  const content = watch("content");

  const onSubmit = async (value: any) => {
    const result = await dispatch(
      createAnswerThunk({
        ...value,
        questionId: question?.data?.data?.content?.id,
      })
    );
    if (result.payload) {
      reset();
    }
  };

  return (
    <div className="w-full">
      <div className=" max-w-5xl mx-auto border-l-[1px] border-solid border-gray-300">
        <div className="mx-4">
          <div className="flex justify-between">
            <p className="font-medium text-2xl my-4 text-shadow-md">
              {question?.data?.data?.content?.title}
            </p>
            <Button className="rounded-xl font-medium justify-center my-4 bg-blue-700  text-white px-3 py-2 text-sm leading-none">
              Ask Question
            </Button>
          </div>
          <div className="flex gap-4 text-sm border-b-[1px] border-solid border-gray-200  py-4">
            <div className="flex gap-1">
              <span className="opacity-70">Asked</span>
              <span>
                {formatDate(question?.data?.data?.content?.createdAt)}
              </span>
            </div>
            <div className="flex gap-1">
              <span className="opacity-70">Modified</span>
              <span>today</span>
            </div>
            <div className="flex gap-1">
              <span className="opacity-70">Viewed</span>
              <span>{question?.data?.data?.content?.views} times</span>
            </div>
          </div>
          <div className="my-2 flex gap-4">
            <div className="max-w-[70%] ">
              <p className="my-2">{question?.data?.data?.content?.content}</p>
              <div className="text-sm flex justify-between my-4">
                <div className="flex gap-2 font-semibold">
                  {question?.data?.data?.content?.tags?.map(
                    (item: any, index: number) => {
                      <a
                        key={index}
                        href="/"
                        className="px-1 py-0.5 bg-gray-200 cursor-pointer rounded text-xs"
                      >
                        {item?.title}
                      </a>;
                    }
                  )}
                </div>
              </div>
              <div className="my-4">
                <div className="flex justify-end">
                  <a
                    href="/"
                    className="px-2 py-2 bg-blue-50 rounded text-xs w-52 inline-block"
                  >
                    <p className="text-gray-500 mb-1 mx-auto text-center">
                      asked{" "}
                      {formatDate(question?.data?.data?.content?.createdAt)}{" "}
                    </p>
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
                          {question?.data?.data?.content?.User?.username}
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
                <div className="mt-4">
                  <div className="w-full flex gap-2 my-6">
                    <div>
                      <Image
                        width={48}
                        height={48}
                        src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_s48x48&_nc_cat=1&ccb=1-7&_nc_sid=22ec41&_nc_ohc=zZKR384LhekQ7kNvgFEZ1HE&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&edm=AJqh0Q8EAAAA&_nc_gid=A5RU23Zff_zA6eAYjgFGt3M&oh=00_AYCf1KUwEx-mG0ahUNMriw4SEW_AwzarvJEYWAjjLS3M-Q&oe=67C7D8FA"
                        alt="avatar_defaut"
                      />
                    </div>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      style={{ background: "#f5f6f7" }}
                      className="flex-1 relative h-24 border-[1px]"
                    >
                      <input
                        {...register("content")}
                        className="w-full border-[1px] border-gray-300 min-h-10 text-base px-2 py-3 focus:outline-none "
                        type="text"
                        placeholder="Add a comment..."
                      />

                      <button
                        disabled={
                          !content?.trim() && content?.length < 3 ? true : false
                        }
                        style={
                          !content || content.trim().length < 3
                            ? { backgroundColor: "#9cb4d8" }
                            : { backgroundColor: "blue" }
                        }
                        className="cursor-default float-right px-2 py-1 text-white font-semibold m-2 rounded"
                      >
                        Post
                      </button>
                    </form>
                  </div>
                </div>
                {answer?.data?.length > 0 ? (
                  <>
                    {answer?.data &&
                      answer?.data.map((item: any, index: number) => (
                        <div key={index}>
                          <div className="border-b-2 border-gray-300 opacity-70"></div>
                          <div className="flex gap-2 my-4">
                            <div className="avatar cursor-pointer">
                              <Image
                                width={48}
                                height={48}
                                src={
                                  item.User?.image ||
                                  "https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_s48x48&_nc_cat=1&ccb=1-7&_nc_sid=22ec41&_nc_ohc=zZKR384LhekQ7kNvgFEZ1HE&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&edm=AJqh0Q8EAAAA&_nc_gid=A5RU23Zff_zA6eAYjgFGt3M&oh=00_AYCf1KUwEx-mG0ahUNMriw4SEW_AwzarvJEYWAjjLS3M-Q&oe=67C7D8FA"
                                }
                                alt={item?.User?.id}
                              />
                            </div>
                            <div className="flex-1 block relative ">
                              <p className="font-semibold text-blue-800 ">
                                {item?.User?.username
                                  ? item?.User?.username
                                  : user.username}
                              </p>
                              <p className="text-sm my-1 text-gray-500">
                                {item?.content}
                              </p>
                              <div className="flex gap-2 text-xs ">
                                <span className="text-blue-500 cursor-pointer hover:underline">
                                  Like
                                </span>
                                <span className="text-blue-500 cursor-pointer hover:underline">
                                  Reply
                                </span>
                                <span className="text-gray-400 ">
                                  {formatDate(item?.createdAt)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </>
                ) : (
                  <>
                    <div>
                      <p>Bạn hãy là người đầu tiên bình luận về bài viết</p>
                    </div>
                  </>
                )}
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
