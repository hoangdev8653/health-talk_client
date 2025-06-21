"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getAllCategoryThunk } from "@/stores/thunks/category";
import Image from "next/image";
import { createArticleThunk } from "@/stores/thunks/article";
import Loading from "@/components/Loading";
import { toast } from "react-toastify";

type categoryValue = {
  id: string;
  name: string;
};
const mdParser = new MarkdownIt();

const PostEditor: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const category = useAppSelector((state) => state.category);
  const article = useAppSelector((state) => state.article);
  const [categoryId, setCategoryId] = useState<string>(
    category?.data?.data?.content[0]?.id
  );
  const [image, setImage] = useState<string | null>(null);
  const [markdown, setMarkdown] = useState<string>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategoryThunk());
  }, [dispatch]);

  useEffect(() => {
    if (article.data || article.error) {
      setTitle("");
      setCategoryId(category?.data?.data?.content[0]?.id);
      setImage(null);
      setMarkdown("");
    }
  }, [article.data, article.error]);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fileInput = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    const file = fileInput?.files?.[0];

    const formData = new FormData();
    formData.append("title", title);
    formData.append("categoryId", categoryId);
    formData.append("content", markdown);
    if (file) {
      formData.append("image", file);
    }
    console.log("formData", formData);

    const result = await dispatch(createArticleThunk(formData));

    // if (result.type === "article/create/fulfilled") {
    //   toast.success("Tạo mới bài viết thành công");
    // }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded mt-2">
      {category.loading || article.loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Tạo bài viết mới</h2>

          <form onSubmit={handleSubmit}>
            <label className="block font-semibold">Tiêu đề bài viết:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 w-full mb-4 bg-white"
              placeholder="Nhập tiêu đề..."
              required
            />

            <label className="block font-semibold">Chủ đề:</label>
            <select
              title="Chọn chủ đề"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="border p-2 w-full mb-4 bg-white text-black"
            >
              {category.data &&
                category.data.data?.content?.map(
                  (item: categoryValue, index: number) => (
                    <option key={index} value={item?.id}>
                      {item?.name}
                    </option>
                  )
                )}
            </select>
            <label className="block font-semibold">Hình ảnh:</label>
            <input
              placeholder="Hình ảnh"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-4"
            />
            {image && (
              <Image
                width={400}
                height={400}
                src={image}
                alt="Preview"
                className="w-full h-[400px] object-cover mb-4 "
              />
            )}
            <label className="block font-semibold">Nội dung bài viết:</label>
            <MdEditor
              value={markdown}
              style={{ height: "300px" }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={({ text }) => setMarkdown(text)}
            />

            <h3 className="text-xl font-bold mt-6">Xem trước nội dung:</h3>
            <div className="border p-4 rounded shadow-md bg-gray-50">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
              </ReactMarkdown>
            </div>

            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:opacity-80"
            >
              Đăng bài
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default PostEditor;
