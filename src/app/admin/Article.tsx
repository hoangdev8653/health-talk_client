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
} from "@/components/ui/alert-dialog";
import { CiSearch } from "react-icons/ci";

function Article() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const { allArticles } = useAppSelector((state) => state.article);

  useEffect(() => {
    dispatch(getAllArticleThunk());
  }, [dispatch]);

  const filteredArticles = allArticles?.data?.content?.filter((article: any) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl p-6 my-8 w-full">
        <div className="flex justify-between">
          <p className="font-bold text-xl mx-4">All Articles</p>
          <div className="flex gap-2">
            <div className="flex items-center border border-gray-400 rounded-full px-2 py-1 w-72 bg-gray-200">
              <CiSearch className="text-2xl text-black font-bold cursor-pointer hover:opacity-60" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search By Title Article"
                className="bg-gray-200 rounded-full px-1.5 py-1 focus:outline-none w-full"
              />
            </div>
            <a href="/post">
              <button className="bg-blue-500 hover:bg-blue-600 rounded-2xl text-white font-semibold px-5 py-2 shadow-md transition">
                New Article
              </button>
            </a>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full my-2">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
              {filteredArticles?.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="odd:bg-white even:bg-gray-100 border-b border-gray-200 dark:border-gray-700"
                >
                  <td className="text-center px-6 py-4">
                    <Image
                      className="object-cover w-36 h-36"
                      width={100}
                      height={100}
                      src={item.image}
                      alt={item.slug}
                    />
                  </td>
                  <td className="px-6 py-4 text-center">{item.title}</td>
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
                        <AlertDialogTrigger>
                          <MdEdit className="text-2xl text-green-600 hover:opacity-65 cursor-pointer" />
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-gray-100">
                          <AlertDialogDescription>
                            <div className="my-4 flex gap-2">
                              <div className="w-1/2">
                                <label>Title</label>
                                <input
                                  title="title"
                                  type="text"
                                  className="px-3 py-2 w-full border border-gray-200 bg-white text-black"
                                />
                              </div>
                              <div className="w-1/2">
                                <label>User</label>
                                <input
                                  title="user"
                                  type="text"
                                  className="px-3 py-2 w-full border border-gray-200 bg-white text-black"
                                />
                              </div>
                            </div>
                            <div className="my-4 flex gap-2">
                              <div className="w-1/2">
                                <label>Category</label>
                                <select
                                  title="category"
                                  className="w-full border border-gray-200 bg-white text-black p-2"
                                >
                                  <option value="user">user</option>
                                  <option value="admin">admin</option>
                                </select>
                              </div>
                              <div className="w-1/2">
                                <label>Status</label>
                                <input
                                  title="email"
                                  type="email"
                                  className="px-3 py-2 w-full border border-gray-200 bg-white text-black"
                                />
                              </div>
                            </div>
                          </AlertDialogDescription>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="bg-red-500 text-white rounded font-semibold">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction className="bg-green-500 text-black font-semibold rounded">
                              Save
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      <MdDeleteForever className="text-2xl text-red-600 hover:opacity-65 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
              {filteredArticles?.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-4">
                    No articles found.
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
