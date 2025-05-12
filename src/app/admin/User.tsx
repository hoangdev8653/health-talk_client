import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getAllUserThunk } from "@/stores/thunks/user";
import formatDate from "@/utils/formatDate";
import Image from "next/image";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { IoMdLock } from "react-icons/io";

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
import { CiSearch } from "react-icons/ci";

function User() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.user);
  useEffect(() => {
    dispatch(getAllUserThunk());
  }, []);
  const filteredUsers = data?.data?.content?.filter((item: any) =>
    item?.username?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl p-6 my-8 w-full">
      <div className="flex justify-between">
        <p className="font-bold text-xl mx-4">All Users</p>
        <div className="flex gap-2 items-center">
          <div className="flex items-center border border-gray-400 rounded-full px-2 py-1 w-72 bg-gray-200">
            <CiSearch className="text-2xl text-black font-bold cursor-pointer hover:opacity-60" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search By Username"
              className="bg-gray-200 rounded-full px-1.5 py-1 focus:outline-none w-full"
            />
          </div>

          <a href="http://localhost:3000/post">
            <button className="bg-blue-500 hover:bg-blue-600 rounded-2xl text-white font-semibold px-5 py-2  shadow-md transition">
              New User
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
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Role
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
            {filteredUsers?.map((item: any, index: number) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
              >
                <th className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <Image
                    className="object-cover w-36 h-36 rounded-full text-center mx-auto"
                    width={100}
                    height={100}
                    src="/images/avatar-default.jpg"
                    alt={item?.id}
                  />
                </th>
                <td className="px-6 py-4 text-center">{item?.username}</td>
                <td className="px-6 py-4 text-center">{item?.email}</td>
                <td className="px-6 py-4 text-center">{item?.role}</td>
                <td className="px-6 py-4 text-center">
                  {formatDate(item?.createdAt)}
                </td>
                <td className="px-6 py-4  text-center ">
                  <div className="flex gap-2 justify-center">
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
                                  <label>User name</label>
                                  <input
                                    title="user name"
                                    type="text"
                                    className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black"
                                  />
                                </div>
                                <div className="w-1/2">
                                  <label>Email</label>
                                  <input
                                    title="Email"
                                    type="email"
                                    className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black"
                                  />
                                </div>
                              </div>
                              <div className="my-4 flex gap-2">
                                <div className="w-1/2 ">
                                  <label form="user">Role</label>
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
                    <IoMdLock className="text-2xl text-blue-500 hover:opacity-65 cursor-pointer" />
                    <MdDeleteForever className="text-2xl text-red-600 hover:opacity-65 cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <>
          <div className="flex justify-center items-center my-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2">
              Previous
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2">
              Next
            </button>
          </div>
        </>
      </div>
    </div>
  );
}

export default User;
