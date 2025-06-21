"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getAllArticleThunk } from "@/stores/thunks/article";
import formatDate from "@/utils/formatDate";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTrigger,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CiSearch } from "react-icons/ci";

function Article() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const dispatch = useAppDispatch();
  const { allArticles } = useAppSelector((state) => state.article);

  useEffect(() => {
    dispatch(getAllArticleThunk());
  }, [dispatch]);

  const filteredArticles =
    allArticles?.data?.content?.filter((article: any) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="w-full">
      <div className="bg-white dark:bg-[#181818] rounded-2xl p-6 my-8 w-full">
        <div className="flex justify-between">
          <p className="font-bold text-xl mx-4">Danh sách bài viết</p>

          <div className="flex gap-2">
            <div className="flex items-center border border-gray-400 rounded-full px-2 py-1 w-72 bg-gray-200">
              <CiSearch className="text-2xl text-black font-bold cursor-pointer hover:opacity-60" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search By Name Article"
                className="bg-gray-200 rounded-full px-1.5 py-1 focus:outline-none w-full dark:text-black"
              />
            </div>
            <a href="/post">
              <button className="bg-blue-500 hover:bg-blue-600 rounded-2xl text-white font-semibold px-5 py-2 shadow-md transition">
                New Article
              </button>
            </a>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full my-2 h-[550px] overflow-y-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3 text-center">Image</th>
                <th className="px-6 py-3 text-center">Title</th>
                <th className="px-6 py-3 text-center">Category</th>
                <th className="px-6 py-3 text-center">Author</th>
                <th className="px-6 py-3 text-center">Created At</th>
                <th className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredArticles.map((item: any, index: number) => (
                <tr
                  key={item?.id ?? index}
                  className=" odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                >
                  <td className="text-center px-6 py-4">
                    <Image
                      className="object-cover w-36 h-36"
                      width={100}
                      height={100}
                      src={item?.image || "/images/article_default.jpg"}
                      alt={item?.slug}
                    />
                  </td>
                  <td className="px-6 py-4 text-center">{item?.title}</td>
                  <td className="px-6 py-4 text-center">
                    {item?.Category?.name}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {item?.User?.username}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {formatDate(item?.createdAt)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex gap-2 justify-center">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <MdEdit
                            className="text-2xl text-green-600 hover:opacity-65 cursor-pointer"
                            onClick={() => setSelectedArticle(item)}
                          />
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-gray-100">
                          <AlertDialogTitle className="text-xl font-bold mb-4 text-center text-gray-800">
                            Chỉnh sửa bài viết
                          </AlertDialogTitle>
                          <AlertDialogDescription asChild>
                            <div>
                              <div className="my-4 flex gap-2">
                                <div className="w-1/2">
                                  <label>Tiêu đề</label>
                                  <input
                                    title="title"
                                    type="text"
                                    className="px-3 py-2 w-full border border-gray-200 bg-white text-black"
                                    defaultValue={selectedArticle?.title}
                                  />
                                </div>
                                <div className="w-1/2">
                                  <label>Tác giả</label>
                                  <input
                                    title="user"
                                    type="text"
                                    className="px-3 py-2 w-full border border-gray-200 bg-white text-black"
                                    defaultValue={
                                      selectedArticle?.User?.username
                                    }
                                  />
                                </div>
                              </div>
                              <div className="my-4 flex gap-2">
                                <div className="w-1/2">
                                  <label>Chuyên mục</label>
                                  <select
                                    title="category"
                                    className="w-full border border-gray-200 bg-white text-black p-2"
                                    defaultValue={
                                      selectedArticle?.Category?.name
                                    }
                                  >
                                    <option value="user">user</option>
                                    <option value="admin">admin</option>
                                  </select>
                                </div>
                                <div className="w-1/2">
                                  <label>Trạng thái</label>
                                  <input
                                    title="status"
                                    type="text"
                                    className="px-3 py-2 w-full border border-gray-200 bg-white text-black"
                                    defaultValue={selectedArticle?.status}
                                  />
                                </div>
                              </div>
                            </div>
                          </AlertDialogDescription>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="bg-red-500 text-white rounded font-semibold">
                              Hủy
                            </AlertDialogCancel>
                            <AlertDialogAction className="bg-green-500 text-black font-semibold rounded">
                              Lưu
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <MdDeleteForever
                            className=" text-2xl text-red-600 opacity-100 hover:opacity-65 cursor-pointer"
                            // onClick={() => setSelectedUser(item)}
                          />
                        </AlertDialogTrigger>{" "}
                        <AlertDialogContent className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                          <AlertDialogTitle className="text-xl font-bold mb-6 text-center text-gray-800">
                            Xác nhận xóa bài viết
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Bạn có chắc chắn muốn xóa bài viết{" "}
                            <span className="font-semibold">{item?.title}</span>{" "}
                            không?
                          </AlertDialogDescription>
                          <AlertDialogFooter className="flex justify-end gap-4">
                            <AlertDialogCancel className="bg-gray-300 text-black font-semibold rounded-lg px-6 py-2 hover:bg-gray-400 transition">
                              Hủy
                            </AlertDialogCancel>
                            <AlertDialogAction
                              // onClick={() => handleDeleteCategory(item?.id)}
                              className="bg-red-500 text-white font-semibold rounded-lg px-6 py-2 hover:bg-red-600 transition"
                            >
                              Xóa
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredArticles.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-4">
                    Không tìm thấy bài viết nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Article;
