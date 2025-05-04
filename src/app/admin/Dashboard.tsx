"use client";
import React from "react";
import { MdOutlineArticle, MdOutlineCategory } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { useEffect } from "react";
import { getAllUserThunk } from "@/stores/thunks/user";
import { getAllCategoryThunk } from "@/stores/thunks/category";
import { getAllArticleThunk } from "@/stores/thunks/article";
import {
  getAllUserBlockedThunk,
  blockUserThunk,
  unblockUserThunk,
} from "@/stores/thunks/managerUser";
import formatDate from "@/utils/formatDate";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AlertDialogTitle } from "@radix-ui/react-alert-dialog";

function Dashboard() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user);
  const articles = useAppSelector((state) => state.article);
  const categorys = useAppSelector((state) => state.category);
  const userBlocked = useAppSelector((state) => state.managerUser);
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllUserThunk());
      await dispatch(getAllCategoryThunk());
      await dispatch(getAllArticleThunk());
      await dispatch(getAllUserBlockedThunk());
    };
    fetchData();
  }, []);

  const handleUnblock = async (id: string) => {
    const result = await dispatch(unblockUserThunk(id));
    console.log(result);
  };

  const handleBlock = async (id: string) => {
    const result = await dispatch(blockUserThunk(id));
    console.log(result);
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl flex justify-between p-6">
        <div className="flex gap-2 ">
          <FaRegUser className="w-16 h-16 object-cover my-2 mx-2 rounded-full" />
          <div>
            <p>Total Users</p>
            <p className="font-bold text-xl mx-auto text-center">
              {users?.data?.data?.content?.length}
            </p>
            <p className="font-bold">Total Users</p>
          </div>
        </div>
        <div className="border-r-2 border-solid"></div>
        <div className="flex gap-2">
          <MdOutlineCategory className="w-16 h-16 object-cover my-2 mx-2 rounded-full" />
          <div>
            <p>Total Categorys</p>
            <p className="font-bold text-xl text-center">
              {categorys?.data?.data?.content?.length}
            </p>
            <p className="font-bold">Total Categorys</p>
          </div>
        </div>
        <div className="border-r-2 border-solid"></div>
        <div className="flex gap-2">
          <MdOutlineArticle className="w-16 h-16 object-cover my-2 mx-2 rounded-full" />
          <div>
            <p>Total Articles</p>
            <p className="font-bold text-xl text-center">
              {articles?.allArticles?.data?.content?.length}
            </p>
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
            {userBlocked?.data?.map((item: any, index: number) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
              >
                <td className="px-6 py-4 text-center">{Number(index + 1)}</td>
                <td className="px-6 py-4 text-center">User</td>
                <td className="px-6 py-4  text-center">
                  {item.userBlocked?.username}
                </td>
                <td className="px-6 py-4  text-center">{item?.blockReason}</td>
                <td className="px-6 py-4  text-center">
                  {item?.isBlocked === true
                    ? formatDate(item?.blockedAt)
                    : formatDate(item?.unblockedAt)}
                </td>
                <td className="px-6 py-4  text-center">
                  {item?.isBlocked === true ? "Block" : "UnBlock"}
                </td>
                <td className="px-6 py-4  text-center ">
                  <AlertDialog>
                    <AlertDialogTrigger className="text-blue-400 underline cursor-pointer hover:opacity-60">
                      {item?.isBlocked === true ? "Gỡ chặn" : "Chặn"}
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-gray-100">
                      <AlertDialogDescription className="text-center py-4">
                        Bạn có chắc chắn muốn gỡ chặn người dùng này không?
                      </AlertDialogDescription>
                      <AlertDialogFooter className="flex justify-center">
                        <AlertDialogCancel className="bg-red-500 text-white hover:bg-red-600 rounded-xl px-4 py-2 mr-2">
                          Hủy
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={
                            item?.isBlocked === true
                              ? () => handleUnblock(item?.id)
                              : () => handleBlock(item?.id)
                          }
                          className="bg-green-500 text-white hover:bg-green-600 rounded-xl px-4 py-2"
                        >
                          {item?.isBlocked === true ? "Gỡ chặn" : "Chặn"}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
