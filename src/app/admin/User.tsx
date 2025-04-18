import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getAllUserThunk } from "@/stores/thunks/user";
import { CiSearch } from "react-icons/ci";
import formatDate from "@/utils/formatDate";
import Image from "next/image";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { usePagination } from "@/hooks/usePagination";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function User() {
  const [sortOrder, setSortOrder] = useState("newest");
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUserThunk());
  }, []);

  const sortUsers = useMemo(() => {
    if (!data?.data?.content) return [];
    return [...data?.data?.content].sort((a, b) => {
      return sortOrder === "newest"
        ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  }, [sortOrder, data]);

  return (
    <div className="bg-white rounded-2xl p-6 my-8 w-full">
      <div className="flex justify-between">
        <p className="font-bold text-xl mx-4">All Users</p>
        <div className="flex gap-2 ">
          <div className="flex items-center border-[1px] border-solid border-gray-400 rounded-full px-2 py-1 w-72 bg-gray-200">
            <CiSearch className="text-2xl text-gray-800 cursor-pointer" />
            <input
              type="text"
              placeholder="Search By Name Product"
              className="bg-gray-200 rounded-full px-1.5 py-1 focus:outline-none "
            />
          </div>
          <div className="flex items-center">
            <span>Sort by</span>
            <select
              title="sort by"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border p-1 bg-white text-black"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
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
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {sortUsers?.map((item: any, index: number) => (
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
                          <AlertDialogHeader>
                            <AlertDialogDescription>
                              <div className="bg-gray-100 ">
                                <div className="my-4">
                                  <label>Old Password</label>
                                  <input
                                    title="old password"
                                    type="password"
                                    className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black"
                                  />
                                </div>

                                <div className="my-4">
                                  <label>New Password</label>
                                  <input
                                    title="old password"
                                    type="password"
                                    className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid"
                                  />
                                </div>
                                <div className="my-4">
                                  <label>Confirm New Password</label>
                                  <input
                                    title="old password"
                                    type="password"
                                    className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid"
                                  />
                                </div>
                              </div>
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="bg-red-500 text-white rounded font-semibold ">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction className="bg-green-500 text-black font-semibold rounded">
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                    {/* <MdEdit className="text-2xl text-green-600 hover:opacity-65 cursor-pointer" /> */}
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
            {/* {usePagination({
              totalItems: 10,
              itemsPerPage: 4,
              currentPage: 1,
              siblingCount: 2,
            })} */}
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
