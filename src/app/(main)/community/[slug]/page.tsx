"use client";
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
import useLocalStorageUser from "@/components/UseLocalStorageUser";
import Link from "next/link";

function QuestionDetail() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const question = useAppSelector((state) => state.question);
  const answer = useAppSelector((state) => state.answer);
  const slug = pathname?.split("/").pop() || "";
  const user = useLocalStorageUser();

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
      <div className="max-w-5xl mx-auto border-l-[1px] border-solid border-gray-300 dark:border-gray-600 dark:bg-gray-900 rounded-lg">
        <div className="mx-4">
          <div className="flex justify-between gap-2 items-start">
            <p className="font-medium text-2xl my-4 text-shadow-md dark:text-white">
              {question?.data?.data?.content?.title}
            </p>
            <Link
              href={user ? "/community/ask" : "/login"}
              className="rounded-xl font-medium justify-center my-4 bg-blue-700 text-white px-3 py-4 text-sm leading-none"
              style={{ minWidth: 120, textAlign: "center" }}
            >
              Đặt câu hỏi
            </Link>
          </div>
          <div className="flex gap-4 text-sm border-b-[1px] border-solid border-gray-200 dark:border-gray-700 py-4">
            <div className="flex gap-1">
              <span className="opacity-70 dark:text-gray-300">Asked</span>
              <span className="dark:text-gray-100">
                {formatDate(question?.data?.data?.content?.createdAt)}
              </span>
            </div>
            <div className="flex gap-1">
              <span className="opacity-70 dark:text-gray-300">Modified</span>
              <span className="dark:text-gray-100">today</span>
            </div>
            <div className="flex gap-1">
              <span className="opacity-70 dark:text-gray-300">Viewed</span>
              <span className="dark:text-gray-100">
                {question?.data?.data?.content?.views} times
              </span>
            </div>
          </div>
          <div className="my-2 flex gap-4">
            <div className="max-w-[70%] ">
              <p className="my-2 dark:text-gray-100">
                {question?.data?.data?.content?.content}
              </p>
              <div className="text-sm flex justify-between my-4">
                <div className="flex gap-2 font-semibold flex-wrap">
                  {question?.data?.data?.content?.tags?.map(
                    (item: any, index: number) => (
                      <a
                        key={index}
                        href="/"
                        className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 cursor-pointer rounded text-xs"
                      >
                        {item?.title}
                      </a>
                    )
                  )}
                </div>
              </div>
              <div className="my-4">
                <div className="flex justify-end">
                  <div className="px-2 py-2 bg-blue-50 dark:bg-gray-800 rounded text-xs w-52 inline-block">
                    <p className="text-gray-500 dark:text-gray-300 mb-1 mx-auto text-center">
                      asked{" "}
                      {formatDate(question?.data?.data?.content?.createdAt)}{" "}
                    </p>
                    <div className="flex items-center gap-2">
                      <Image
                        className="w-7 h-7 rounded object-cover"
                        width={28}
                        height={28}
                        src={
                          question?.data?.data?.content?.User?.image ||
                          "/images/avatar_default.jpg"
                        }
                        alt="avatar user"
                      />
                      <div className="text-sm">
                        <p className="text-blue-500 ">
                          {question?.data?.data?.content?.User?.username}
                        </p>
                        <div className="flex gap-1 text-[11px] items-center">
                          <span className="font-bold text-black dark:text-gray-100">
                            1,007
                          </span>
                          <span className="text-yellow-500">● 5</span>
                          <span className="text-gray-400">● 32</span>
                          <span className="text-orange-300">● 60</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full flex gap-2 my-6">
                    <div>
                      <Image
                        className="object-cover"
                        width={48}
                        height={48}
                        src={user?.image || "/images/avatar_default.jpg"}
                        alt="avatar user"
                      />
                    </div>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      style={{ background: "#f5f6f7" }}
                      className="flex-1 relative h-24 border-[1px] dark:bg-gray-800 dark:border-gray-700"
                    >
                      <input
                        {...register("content")}
                        className="w-full border-[1px] border-gray-300 dark:border-gray-700 min-h-10 text-base px-2 py-3 focus:outline-none dark:bg-gray-900 dark:text-white"
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
                          <div className="border-b-2 border-gray-300 dark:border-gray-700 opacity-70"></div>
                          <div className="flex gap-2 my-4">
                            <div className="avatar cursor-pointer">
                              <Image
                                width={48}
                                height={48}
                                src={
                                  user?.image || "/images/avatar_default.jpg"
                                }
                                alt={user?.id ? user?.username : "avatar user"}
                              />
                            </div>
                            <div className="flex-1 block relative ">
                              <p className="font-semibold text-blue-800 dark:text-blue-300">
                                {item?.User?.username
                                  ? item?.User?.username
                                  : user.username}
                              </p>
                              <p className="text-sm my-1 text-gray-500 dark:text-gray-200">
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
                      <p className="dark:text-gray-200">
                        Bạn hãy là người đầu tiên bình luận về bài viết
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex-1">
              <div className="">
                <h2 className="text-xl font-semibold mb-3 dark:text-white">
                  Câu hỏi thường gặp
                </h2>
                <div className="space-y-2">
                  <details className="border p-3 rounded-md dark:bg-gray-800 dark:border-gray-700">
                    <summary className="font-medium cursor-pointer dark:text-gray-100">
                      Làm sao để viết bài mới?
                    </summary>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      Vào mục "Bài viết" → "Tạo mới".
                    </p>
                  </details>
                  <details className="border p-3 rounded-md dark:bg-gray-800 dark:border-gray-700">
                    <summary className="font-medium cursor-pointer dark:text-gray-100">
                      Cách chỉnh sửa bài viết đã đăng?
                    </summary>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      Chọn bài viết → Nhấn "Chỉnh sửa".
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionDetail;
