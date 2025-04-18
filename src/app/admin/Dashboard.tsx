import React from "react";
import {
  MdDeleteForever,
  MdEdit,
  MdOutlineArticle,
  MdOutlineCategory,
} from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Image from "next/image";
import formatDate from "@/utils/formatDate";

function Dashboard() {
  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl flex justify-between p-6">
        <div className="flex gap-2 ">
          <FaRegUser className="w-16 h-16 object-cover my-2 mx-2 rounded-full" />
          <div>
            <p>Total Users</p>
            <p className="font-bold text-xl mx-auto text-center">3</p>
            <p className="font-bold">Total Users</p>
          </div>
        </div>
        <div className="border-r-2 border-solid"></div>
        <div className="flex gap-2">
          <MdOutlineCategory className="w-16 h-16 object-cover my-2 mx-2 rounded-full" />
          <div>
            <p>Total Categorys</p>
            <p className="font-bold text-xl text-center">5</p>
            <p className="font-bold">Total Categorys</p>
          </div>
        </div>
        <div className="border-r-2 border-solid"></div>
        <div className="flex gap-2">
          <MdOutlineArticle className="w-16 h-16 object-cover my-2 mx-2 rounded-full" />
          <div>
            <p>Total Articles</p>
            <p className="font-bold text-xl text-center">5,432</p>
            <p className="font-bold">Total Articles</p>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full my-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3  text-center">
                #
              </th>
              <th scope="col" className="px-6 py-3  text-center">
                Type
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Reason
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <td className="px-6 py-4 text-center">1</td>
              <td className="px-6 py-4 text-center">User</td>

              <td className="px-6 py-4  text-center">Hoàng đẹp trai</td>
              <td className="px-6 py-4  text-center">Spam</td>
              <td className="px-6 py-4  text-center">10/07/2003</td>
              <td className="px-6 py-4  text-center">Blocking</td>
              <td className="px-6 py-4  text-center ">
                <p className="text-blue-400 underline">Chi tiết</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
