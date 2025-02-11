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

type categoryValue = {
  id: string;
  name: string;
};

const mdParser = new MarkdownIt();

const PostEditor: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("Sức Khỏe");
  const [image, setImage] = useState<string | null>(null);
  const [markdown, setMarkdown] = useState<string>("");
  const dispatch = useAppDispatch();

  const { data, error, loading } = useAppSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategoryThunk());
  }, [dispatch]);

  // Xử lý khi người dùng chọn ảnh
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Tạo URL tạm thời để xem trước
    }
  };

  // Xử lý khi người dùng submit bài viết
  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const postData = {
      title,
      category,
      content: markdown,
      image,
    };
    console.log(postData.content);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded mt-2">
      <h2 className="text-2xl font-bold mb-4">Tạo bài viết mới</h2>

      <form onSubmit={handleSubmit}>
        {/* Tiêu đề bài viết */}
        <label className="block font-semibold">Tiêu đề bài viết:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-4 bg-white"
          placeholder="Nhập tiêu đề..."
          required
        />

        {/* Chọn chủ đề */}
        <label className="block font-semibold">Chủ đề:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-full mb-4 bg-white text-black"
        >
          {data &&
            data?.content.map((item: categoryValue, index: number) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
        </select>

        {/* Upload ảnh */}
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

        {/* Markdown Editor */}
        <label className="block font-semibold">Nội dung bài viết:</label>
        <MdEditor
          value={markdown}
          style={{ height: "300px" }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={({ text }) => setMarkdown(text)}
        />

        {/* Hiển thị Markdown Preview */}
        <h3 className="text-xl font-bold mt-6">Xem trước nội dung:</h3>
        <div className="border p-4 rounded shadow-md bg-gray-50">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>

        {/* Nút Đăng bài */}
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Đăng bài
        </button>
      </form>
    </div>
  );
};

export default PostEditor;
