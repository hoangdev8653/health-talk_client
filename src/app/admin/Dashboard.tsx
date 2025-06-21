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
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "react-toastify";

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
  }, [dispatch]);

  const handleUnblock = async (id: string) => {
    const result = await dispatch(unblockUserThunk(id));
    if ((result.payload as { status: number }).status === 200) {
      toast.success("Mở khóa user thành công");
    } else {
      toast.error("Có lỗi xảy ra khi khóa user");
    }
  };

  const handleBlock = async (id: string) => {
    const result = await dispatch(blockUserThunk(id));
    if ((result.payload as { status: number }).status === 201) {
      toast.success("Khóa user thành công");
    } else {
      toast.error("Có lỗi xảy ra khi khóa user");
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white dark:bg-[#181818] rounded-2xl flex justify-between p-6 mb-8 transition-colors">
        <div className="flex gap-2 ">
          <FaRegUser className="w-16 h-16 object-cover my-2 mx-2 rounded-full text-gray-700 dark:text-gray-200" />
          <div>
            <p className="text-gray-700 dark:text-gray-300">Total Users</p>
            <p className="font-bold text-xl mx-auto text-center text-gray-900 dark:text-white">
              {users?.data?.data?.content?.length}
            </p>
            <p className="font-bold text-gray-700 dark:text-gray-300">
              Total Users
            </p>
          </div>
        </div>
        <div className="border-r-2 border-solid border-gray-200 dark:border-gray-700"></div>
        <div className="flex gap-2">
          <MdOutlineCategory className="w-16 h-16 object-cover my-2 mx-2 rounded-full text-gray-700 dark:text-gray-200" />
          <div>
            <p className="text-gray-700 dark:text-gray-300">Total Categorys</p>
            <p className="font-bold text-xl text-center text-gray-900 dark:text-white">
              {categorys?.data?.data?.content?.length}
            </p>
            <p className="font-bold text-gray-700 dark:text-gray-300">
              Total Categorys
            </p>
          </div>
        </div>
        <div className="border-r-2 border-solid border-gray-200 dark:border-gray-700"></div>
        <div className="flex gap-2">
          <MdOutlineArticle className="w-16 h-16 object-cover my-2 mx-2 rounded-full text-gray-700 dark:text-gray-200" />
          <div>
            <p className="text-gray-700 dark:text-gray-300">Total Articles</p>
            <p className="font-bold text-xl text-center text-gray-900 dark:text-white">
              {articles?.allArticles?.data?.content?.length}
            </p>
            <p className="font-bold text-gray-700 dark:text-gray-300">
              Total Articles
            </p>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full my-2 overflow-y-auto max-h-[500px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-100 bg-[#232c3b]">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                #
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                TYPE
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                NAME
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                REASON
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                DATE
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(userBlocked?.data) &&
              userBlocked.data.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 text-gray-700 dark:text-gray-400"
                >
                  <td className="px-6 py-4 text-center">{index + 1}</td>
                  <td className="px-6 py-4 text-center">User</td>
                  <td className="px-6 py-4 text-center">
                    {item.userBlocked?.username}
                  </td>
                  <td className="px-6 py-4 text-center">{item?.blockReason}</td>
                  <td className="px-6 py-4 text-center">
                    {item?.isBlocked === true
                      ? formatDate(item?.blockedAt)
                      : formatDate(item?.unblockedAt)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {item?.isBlocked === true ? "Block" : "UnBlock"}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <AlertDialog>
                      <AlertDialogTrigger className="text-blue-400 underline cursor-pointer hover:opacity-60">
                        {item?.isBlocked === true ? "Gỡ chặn" : "Chặn"}
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                        <AlertDialogTitle className="text-xl font-bold mb-4 text-center text-gray-800">
                          {item?.isBlocked === true
                            ? "Xác nhận gỡ chặn"
                            : "Xác nhận chặn"}
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-center py-4">
                          Bạn có chắc chắn muốn{" "}
                          {item?.isBlocked === true ? "gỡ chặn" : "chặn"} người
                          dùng này không?
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
