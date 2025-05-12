"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getAllTagsThunk } from "@/stores/thunks/tag";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createQuestionThunk } from "@/stores/thunks/question";
import { questionValidate } from "@/validations/question";

function Ask() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const tag = useAppSelector((state) => state.tag);

  useEffect(() => {
    dispatch(getAllTagsThunk());
  }, [dispatch]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(questionValidate.createQuestion),
  });

  const onSubmit = async (value: any) => {
    console.log("onSubmit called");

    if (selectedTags.length === 0) {
      alert("Please select at least one tag.");
      return;
    }
    const result = await dispatch(
      createQuestionThunk({
        ...value,
        tags: selectedTags,
      })
    );

    if (result.payload) {
      reset();
      setSelectedTags([]);
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <div
          style={{
            backgroundImage:
              "url(https://cdn.sstatic.net/Img/ask/background.svg?v=c56910988bdf)",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full bg-no-repeat flex"
        >
          <h1 className="font-bold my-10 text-2xl">Ask a public question</h1>
        </div>
        <div className="flex gap-4">
          <div className="w-[70%]">
            <div className="border-solid border-2 border-gray-200">
              <form onSubmit={handleSubmit(onSubmit)} className="mx-4">
                <div className="my-2">
                  <label className="font-bold text-xl">Title *</label>
                  <p>
                    Be specific and imagine you're asking a question to another
                    person
                  </p>
                  <input
                    {...register("title")}
                    title="title"
                    className={`rounded px-2 py-1 border-solid border-gray-100 w-full border-2 ${
                      errors.title ? "border-red-500" : ""
                    }`}
                    placeholder="e.g is there an R function for finding the index of an element in a vector?"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div className="my-2">
                  <label className="block font-semibold text-slate-700">
                    Content *
                  </label>
                  <p>
                    Be specific and imagine you're asking a question to another
                    person
                  </p>
                  <textarea
                    {...register("content")}
                    title="content"
                    className={`p-2 border-solid border-2 rounded w-full h-40 focus:outline-none ${
                      errors.content ? "border-red-500" : "border-gray-100"
                    }`}
                  />
                  {errors.content && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.content.message}
                    </p>
                  )}
                </div>

                <div className="my-2">
                  <label className="block font-semibold text-slate-700 mb-1">
                    Tags (click to select):
                  </label>
                  <div className="flex flex-wrap gap-2 my-3">
                    {tag?.data?.data?.content?.map(
                      (item: any, index: number) => {
                        const isSelected = selectedTags.includes(item.id);
                        return (
                          <p
                            key={index}
                            onClick={() => toggleTag(item.id)}
                            className={`px-2 py-1 rounded cursor-pointer border ${
                              isSelected
                                ? "bg-gray-300 text-white "
                                : "bg-gray-100 text-black"
                            }`}
                          >
                            {item.title}
                          </p>
                        );
                      }
                    )}
                  </div>
                  {selectedTags.length === 0 && (
                    <p className="text-red-500 text-sm mt-1">
                      Please select at least one tag.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-green-600 px-2.5 py-2 rounded-xl hover:bg-green-500 my-4"
                >
                  Create Question
                </button>
              </form>
            </div>
          </div>
          <div className="flex-1">
            <div className="">
              <h2 className="text-xl font-semibold mb-3">Câu hỏi thường gặp</h2>
              <div className="space-y-2">
                <details className="border p-3 rounded-md">
                  <summary className="font-medium cursor-pointer">
                    Làm sao để viết bài mới?
                  </summary>
                  <p className="mt-2 text-sm text-gray-600">
                    Vào mục "Bài viết" → "Tạo mới".
                  </p>
                </details>
                <details className="border p-3 rounded-md">
                  <summary className="font-medium cursor-pointer">
                    Cách chỉnh sửa bài viết đã đăng?
                  </summary>
                  <p className="mt-2 text-sm text-gray-600">
                    Chọn bài viết → Nhấn "Chỉnh sửa".
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ask;
