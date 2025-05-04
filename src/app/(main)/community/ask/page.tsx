"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getAllTagsThunk } from "@/stores/thunks/tag";

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

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold my-6 text-2xl">Ask a public question</h1>
        <div className="flex gap-4">
          <div className="w-[70%]">
            <div className="border-solid border-2 border-gray-200">
              <form className="mx-4">
                <div className="my-2">
                  <label className="font-bold text-xl">Title *</label>
                  <p>
                    Be specific and imagine you're asking a question to another
                    person
                  </p>
                  <input
                    title="title"
                    className="rounded px-2 py-1 border-solid border-gray-100 w-full border-2"
                    placeholder="e.g is there an R function for finding the index of an element in a vector?"
                  />
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
                    title="content"
                    className="p-2 border-solid border-2 border-gray-100 rounded w-full h-40 focus:outline-none"
                  />
                </div>

                <div className="my-2">
                  <label className="block font-semibold text-slate-700 mb-1">
                    Tags (click to select):
                  </label>
                  <div className="flex flex-wrap gap-2 my-3">
                    {tag?.data?.data?.content?.map(
                      (item: any, index: number) => {
                        const isSelected = selectedTags.includes(item.title);
                        return (
                          <p
                            key={index}
                            onClick={() => toggleTag(item.title)}
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
                </div>

                <div className="my-4">
                  <Button className="bg-blue-300 px-2.5 py-1.5 rounded-xl hover:bg-blue-200">
                    Create Question
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Ask;
