import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getAllCategoryThunk } from "@/stores/thunks/category";
import formatDate from "@/utils/formatDate";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { MdDeleteForever, MdEdit } from "react-icons/md";

function Category() {
  const [sortOrder, setSortOrder] = useState("newest");

  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategoryThunk());
  }, []);
  const sortedCategory = useMemo(() => {
    if (!data?.data?.content) return [];
    return [...data.data.content].sort((a, b) => {
      return sortOrder === "newest"
        ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  }, [data, sortOrder]);

  return (
    <div className="bg-white rounded-2xl  p-6 my-8 w-full">
      <div className="flex justify-between">
        <p className="font-bold text-xl mx-4">All Categorys</p>
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
                Description
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
            {sortedCategory?.map((item: any, index: number) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
              >
                <th className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <Image
                    className="object-cover w-36 h-36"
                    width={100}
                    height={100}
                    src={item?.image}
                    alt={item?.slug}
                  />
                </th>
                <td className="px-6 py-4 text-center">{item?.name}</td>
                <td className="px-6 py-4 text-center">
                  {item?.description?.slice(0, 100)} ...
                </td>

                <td className="px-6 py-4  text-center">
                  {formatDate(item?.createdAt)}
                </td>
                <td className="px-6 py-4  text-center ">
                  <div className="flex gap-2">
                    <MdEdit className="text-2xl text-green-600 hover:opacity-65 cursor-pointer" />
                    <MdDeleteForever className="text-2xl text-red-600 hover:opacity-65 cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Category;
