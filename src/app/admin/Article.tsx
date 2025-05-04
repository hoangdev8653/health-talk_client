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
import FormSearch from "@/components/formSearch";

function Article() {
  const dispatch = useAppDispatch();
  const { allArticles } = useAppSelector((state) => state.article);
  useEffect(() => {
    dispatch(getAllArticleThunk());
  }, []);

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl  p-6 my-8 w-full">
        <div className="flex justify-between">
          <p className="font-bold text-xl mx-4">All Articles </p>
          <div className="flex gap-2 ">
            <FormSearch placholder="Search By Name Product" />
            <a href="http://localhost:3000/post">
              <button className="bg-blue-500 hover:bg-blue-600 rounded-2xl text-white font-semibold px-5 py-2  shadow-md transition">
                New Article
              </button>
            </a>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full my-2">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3  text-center">
                  Image
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Author
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  CreateAt
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allArticles?.data?.content?.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-900 border-b dark:border-gray-700 border-gray-200"
                >
                  <th className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <Image
                      className="object-cover w-36 h-36"
                      width={100}
                      height={100}
                      src={item.image}
                      alt={item.slug}
                    />
                  </th>
                  <td className="px-6 py-4 text-center">{item?.title}</td>
                  <td className="px-6 py-4 text-center">
                    {item?.Category?.name}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {item?.User?.username}
                  </td>
                  <td className="px-6 py-4  text-center">
                    {formatDate(item?.createdAt)}
                  </td>
                  <td className="px-6 py-4  text-center ">
                    <div className="flex gap-2">
                      <div>
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <MdEdit className="text-2xl text-green-600 hover:opacity-65 cursor-pointer" />
                          </AlertDialogTrigger>

                          <AlertDialogContent className="bg-gray-100">
                            <AlertDialogDescription>
                              <div className="bg-gray-100 w-full">
                                <div className="my-4 flex gap-2">
                                  <div className="w-1/2">
                                    <label>Title</label>
                                    <input
                                      title="title"
                                      type="text"
                                      className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black"
                                    />
                                  </div>
                                  <div className="w-1/2">
                                    <label>User</label>
                                    <input
                                      title="user"
                                      type="text"
                                      className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black"
                                    />
                                  </div>
                                </div>
                                <div className="my-4 flex gap-2">
                                  <div className="w-1/2 ">
                                    <label form="user">Category</label>
                                    <select
                                      title="role"
                                      className="gap-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black p-2"
                                      id="user"
                                      name="carlist"
                                      form="carform"
                                    >
                                      <option value="user">user</option>
                                      <option value="admnin">admin</option>
                                    </select>
                                  </div>
                                  <div className="w-1/2">
                                    <label>status</label>
                                    <input
                                      title="Email"
                                      type="email"
                                      className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black"
                                    />
                                  </div>
                                </div>
                              </div>
                            </AlertDialogDescription>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="bg-red-500 text-white rounded font-semibold ">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction className="bg-green-500 text-black font-semibold rounded">
                                Save
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                      <MdDeleteForever className="text-2xl text-red-600 hover:opacity-65 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Article;
