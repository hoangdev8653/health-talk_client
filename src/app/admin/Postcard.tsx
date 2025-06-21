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
import React, { useEffect, useState } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { getAllPostcardThunk } from "@/stores/thunks/postcard";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import Image from "next/image";
import formatDate from "@/utils/formatDate";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

function Postcard() {
  const dispatch = useAppDispatch();
  const postcard = useAppSelector((state) => state.postcard);
  const [searchTerm, setSearchTerm] = React.useState("");
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllPostcardThunk());
    };
    fetchData();
  }, []);

  const filteredPostcards = postcard?.data?.data?.content?.filter((item: any) =>
    item?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="bg-white dark:bg-[#181818] rounded-2xl p-6 my-8 w-full">
        <div className="flex justify-between">
          <p className="font-bold text-xl mx-4">Danh sách Poscard</p>
          <div className="flex gap-2 items-center">
            <div className="flex items-center border border-gray-400 rounded-full px-2 py-1 w-72 bg-gray-200">
              <CiSearch className="text-2xl text-black font-bold cursor-pointer hover:opacity-60" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search By Name Postcard"
                className="bg-gray-200 rounded-full px-1.5 py-1 focus:outline-none w-full dark:text-black"
              />
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="bg-blue-500 hover:bg-blue-600 rounded-2xl text-white font-semibold px-5 py-2  shadow-md transition">
                  New Postcard
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-gray-100 w-[700px] max-w-[700px]">
                <AlertDialogTitle className="text-xl font-bold mb-4 text-center text-gray-800">
                  Tạo chuyên mục mới
                </AlertDialogTitle>
                <form
                // onSubmit={handleSubmit(onSubmit)}
                >
                  <AlertDialogDescription asChild>
                    <div className="bg-gray-100 w-full px-6">
                      <div className="my-4 flex gap-2 ">
                        <div className="w-1/2">
                          <label>Name</label>
                          <input
                            // {...register("name")}
                            title="Name"
                            type="text"
                            className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black"
                          />
                          {/* {errors.name && (
                                      <p className="text-red-500 text-sm mt-1">
                                        {errors.name.message}
                                      </p>
                                    )} */}
                        </div>
                        <div className="w-1/2">
                          <label>Image</label>
                          <input
                            // {...register("image")}
                            title="image"
                            type="file"
                            name="image"
                            accept="image/*"
                            // onChange={handleFileChange}
                          />
                          {/* {errors.image && (
                                      <p className="text-red-500 text-sm mt-1">
                                        {errors.image.message}
                                      </p>
                                    )} */}
                        </div>
                      </div>
                      <div className="my-4 ">
                        <label className="block font-semibold text-slate-700">
                          Description
                        </label>
                        <textarea
                          // {...register("description")}
                          title="description"
                          className="p-2 border-solid border-2 border-gray-100 rounded w-full h-40 focus:outline-none"
                        />
                        {/* {errors.description && (
                                    <p className="text-red-500 text-sm mt-1">
                                      {errors.description.message}
                                    </p>
                                  )} */}
                      </div>
                    </div>
                  </AlertDialogDescription>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-red-500 text-white rounded font-semibold ">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      type="submit"
                      className="bg-green-500 text-black font-semibold rounded"
                    >
                      Save
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </form>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full my-2 h-[550px] overflow-y-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3 text-center">Title</th>
                <th className="px-6 py-3 text-center">Image</th>
                <th className="px-6 py-3 text-center">Decription</th>
                <th className="px-6 py-3 text-center">CreatedAt</th>
                <th className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredPostcards?.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                >
                  <td className="px-6 py-4 text-center">{item?.title}</td>
                  <td className="text-center px-6 py-4">
                    <Image
                      className="object-cover w-48 h-36"
                      width={100}
                      height={100}
                      src={item?.image}
                      alt={item?.id}
                    />
                  </td>
                  <td className="px-6 py-4 text-center">
                    {item?.decription?.slice(0, 100)}...
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
                          <AlertDialogTitle className="text-xl font-bold mb-4 text-center text-gray-800">
                            Chỉnh sửa Postcard
                          </AlertDialogTitle>
                          <div className="bg-gray-100 w-full">
                            <div className="my-4 flex gap-2">
                              <div className="w-1/2">
                                <label>Title</label>
                                <input
                                  title="title"
                                  type="text"
                                  className="px-3 py-2 w-full border-gray-200 border bg-white text-black"
                                />
                              </div>
                              <div className="w-1/2">
                                <label>User</label>
                                <input
                                  title="user"
                                  type="text"
                                  className="px-3 py-2 w-full border-gray-200 border bg-white text-black"
                                />
                              </div>
                            </div>
                            <div className="my-4 flex gap-2">
                              <div className="w-1/2">
                                <label>Category</label>
                                <select
                                  title="role"
                                  className="w-full border-gray-200 border bg-white text-black p-2"
                                >
                                  <option value="user">user</option>
                                  <option value="admin">admin</option>
                                </select>
                              </div>
                              <div className="w-1/2">
                                <label>Status</label>
                                <input
                                  title="status"
                                  type="text"
                                  className="px-3 py-2 w-full border-gray-200 border bg-white text-black"
                                />
                              </div>
                            </div>
                          </div>
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
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <MdDeleteForever
                            className=" text-2xl text-red-600 opacity-100 hover:opacity-65 cursor-pointer"
                            // onClick={() => setSelectedUser(item)}
                          />
                        </AlertDialogTrigger>{" "}
                        <AlertDialogContent className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                          <AlertDialogTitle className="text-xl font-bold mb-6 text-center text-gray-800">
                            Xác nhận xóa Postcard
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Bạn có chắc chắn muốn xóa Postcard{" "}
                            <span className="font-semibold">{item?.title}</span>{" "}
                            không?
                          </AlertDialogDescription>
                          <AlertDialogFooter className="flex justify-end gap-4">
                            <AlertDialogCancel className="bg-gray-300 text-black font-semibold rounded-lg px-6 py-2 hover:bg-gray-400 transition">
                              Hủy
                            </AlertDialogCancel>
                            <AlertDialogAction
                              // onClick={() => handleDeleteUser(item?.id)}
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Postcard;
