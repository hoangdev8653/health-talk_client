import React, { useMemo, useState } from "react";
import { CiStar } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  getNotificationByUserThunk,
  updateStatusNotificationThunk,
  deleteNotificationThunk,
} from "@/stores/thunks/notification";
import { useEffect } from "react";
import formatDate from "@/utils/formatDate";
import SortValue from "@/components/SortValue";
import Link from "next/link";

function Notification() {
  const [activeTab, setActiveTab] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const dispatch = useAppDispatch();
  const { NotificationByUser, totalNotificationUnRead } = useAppSelector(
    (state) => state.notification
  );

  useEffect(() => {
    dispatch(getNotificationByUserThunk());
  }, []);

  const handleReadNotification = (id: any) => {
    const result = dispatch(updateStatusNotificationThunk(id));
    console.log(result);
  };

  const handleDeleteNotification = (id: string) => {
    const result = dispatch(deleteNotificationThunk(id));
    console.log(result);
  };

  const filteredNotifications = NotificationByUser?.filter((item: any) => {
    if (activeTab === "all") return true;
    if (activeTab === "archive") return !item.is_read;
    return true;
  });

  const sortValue = useMemo(() => {
    if (!filteredNotifications) return [];
    return [...filteredNotifications].sort((a, b) => {
      return sortOrder === "newest"
        ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  }, [filteredNotifications]);

  return (
    <div className="text-black dark:text-gray-100 bg-white dark:bg-[#181818] min-h-screen transition-colors">
      <div className="my-3">
        <h1
          style={{ textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)" }}
          className=" font-medium text-3xl my-3 dark:text-white"
        >
          Notification
        </h1>
      </div>
      <div className="w-full h-full bg-gray-50 dark:bg-[#232c3b] transition-colors">
        <div className="flex justify-between p-4 ">
          <div>{NotificationByUser?.length} Notification</div>
          <div>
            <SortValue sortOrder={sortOrder} onChange={setSortOrder} />
          </div>
        </div>
        <div className="w-full h-full bg-gray-50 dark:bg-[#232c3b] transition-colors">
          <div className="flex">
            <div
              className={`w-1/3 border-b-2 border-solid  ${
                activeTab === "all"
                  ? "border-black dark:border-gray-100"
                  : "border-gray-100 dark:border-gray-700"
              }`}
            >
              <p
                className="m-2 flex cursor-pointer"
                onClick={() => setActiveTab("all")}
              >
                <span
                  className={`rounded-full px-3 py-1 text-base font-semibold flex items-center justify-center ${
                    activeTab === "all"
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700"
                  } `}
                >
                  {NotificationByUser?.length}
                </span>
                <span className="p-1">All</span>
              </p>
            </div>
            <div
              className={`w-1/3 border-b-2 border-solid  ${
                activeTab === "archive"
                  ? "border-black dark:border-gray-100"
                  : "border-gray-100 dark:border-gray-700"
              }`}
            >
              <p
                className="m-2 flex cursor-pointer"
                onClick={() => setActiveTab("archive")}
              >
                <span
                  className={`rounded-full px-3 py-1 text-base font-semibold flex items-center justify-center ${
                    activeTab === "archive"
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700"
                  } `}
                >
                  {totalNotificationUnRead}
                </span>
                <span className="p-1">Archive</span>
              </p>
            </div>
            <div className="w-1/3  border-b-2 border-solid border-gray-100 dark:border-gray-700">
              <p className="m-2 flex cursor-pointer">
                <span className="rounded-full p-1.5 py-1 bg-gray-200 dark:bg-gray-700">
                  17
                </span>
                <span className="p-1">Favorite</span>
              </p>
            </div>
          </div>
          <div className="overflow-y-auto max-h-[500px] ">
            {sortValue.length > 0 ? (
              <>
                {sortValue &&
                  sortValue?.map((item: any, index: number) => (
                    <div
                      key={index}
                      className={`w-full flex items-center gap-2 p-3 shadow-sm rounded-md ${
                        item?.is_read === true
                          ? "bg-white dark:bg-[#232c3b]"
                          : "bg-gray-100 dark:bg-[#181818]"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full m-2 ${
                          item?.is_read === true ? "bg-gray-400" : "bg-blue-700"
                        }`}
                      ></div>
                      <div className="cursor-pointer">
                        <CiStar className="text-2xl" />
                      </div>
                      <Link
                        onClick={() => handleReadNotification(item?.id)}
                        href={`/home/${item?.post?.slug}`}
                        className="flex-1 hover:opacity-60"
                      >
                        {item?.message}. Hãy click vào để xem chi tiết hơn!
                      </Link>
                      <div className="text-gray-500 dark:text-gray-400 flex items-center gap-2 mr-64">
                        {formatDate(item?.createdAt)}
                      </div>
                      <div
                        onClick={() => handleDeleteNotification(item?.id)}
                        className="flex items-center gap-2 mr-2"
                      >
                        <RiDeleteBinLine className="text-2xl cursor-pointer p-1 rounded-full bg-orange-600 text-white" />
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              <>
                <div className="mx-auto py-4 text-center dark:text-gray-300">
                  Không có thông báo nào!
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
