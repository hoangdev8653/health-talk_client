import React, { useState } from "react";
import { CiSearch, CiStar } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  getNotificationByUserThunk,
  updateStatusNotificationThunk,
  deleteNotificationThunk,
} from "@/stores/thunks/notification";
import { useEffect } from "react";
import formatDate from "@/utils/formatDate";

function Notification() {
  const [activeTab, setActiveTab] = useState("all");
  const dispatch = useAppDispatch();
  const { NotificationByUser, NotificationIsUnRead, totalNotificationUnRead } =
    useAppSelector((state) => state.notification);

  useEffect(() => {
    dispatch(getNotificationByUserThunk());
  }, []);

  const handleReadNotification = (id: any) => {
    const result = dispatch(updateStatusNotificationThunk(id));
    console.log(result);
  };

  const handleDeleteNotification = (id: string) => {
    // console.log(id);
    const result = dispatch(deleteNotificationThunk(id));
    console.log(result);
  };

  const filteredNotifications = NotificationByUser?.filter((item: any) => {
    if (activeTab === "all") return true;
    if (activeTab === "archive") return !item.is_read;
    return true;
  });

  return (
    <div className="text-black">
      <div className="my-3">
        <h1
          style={{ textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)" }}
          className=" font-medium text-3xl my-3 "
        >
          Notification
        </h1>
      </div>
      <div className="w-full h-full bg-gray-50">
        <div className="flex justify-between p-4 ">
          <div>{NotificationByUser?.length} Notification</div>
          <div>
            <div className="flex items-center border-[1px] border-solid border-gray-400 rounded-full px-2 py-1 w-72 bg-gray-200">
              <CiSearch className="text-2xl text-gray-800 cursor-pointer" />
              <input
                type="text"
                placeholder="Search By Name Product"
                className="bg-gray-200 rounded-full px-1.5 py-1 focus:outline-none "
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-gray-50">
          <div className="flex">
            <div
              className={`w-1/3 border-b-2 border-solid  ${
                activeTab === "all" ? "border-black" : "border-gray-100"
              }`}
            >
              <p
                className="m-2 flex cursor-pointer"
                onClick={() => setActiveTab("all")}
              >
                <span
                  className={`rounded-full p-1.5 py-1 ${
                    activeTab === "all" ? "bg-red-500" : "bg-gray-200"
                  } `}
                >
                  {NotificationByUser?.length}
                </span>
                <span className="p-1">All</span>
              </p>
            </div>
            <div
              className={`w-1/3 border-b-2 border-solid  ${
                activeTab === "archive" ? "border-black" : "border-gray-100"
              }`}
            >
              <p
                className="m-2 flex cursor-pointer"
                onClick={() => setActiveTab("archive")}
              >
                <span
                  className={`rounded-full p-1.5 py-1 ${
                    activeTab === "archive" ? "bg-red-500" : "bg-gray-200"
                  } `}
                >
                  {totalNotificationUnRead}
                </span>
                <span className="p-1">Archive</span>
              </p>
            </div>
            <div className="w-1/3  border-b-2 border-solid border-gray-100">
              <p className="m-2 flex cursor-pointer">
                <span className="rounded-full p-1.5 py-1 bg-gray-200">17</span>
                <span className="p-1">Favorite</span>
              </p>
            </div>
          </div>
          <div className="overflow-y-auto max-h-[500px] ">
            {filteredNotifications.length > 0 ? (
              <>
                {filteredNotifications &&
                  filteredNotifications?.map((item: any, index: number) => (
                    <div
                      key={index}
                      className={`w-full flex items-center gap-2 p-3 shadow-sm rounded-md ${
                        item?.is_read === true ? "bg-white" : "bg-gray-100"
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
                      <a
                        onClick={() => handleReadNotification(item.id)}
                        href={`http://localhost:3000/home/${item.post.slug}`}
                        className="flex-1 hover:opacity-60"
                      >
                        {item?.message}. Hãy click vào để xem chi tiết hơn!
                      </a>
                      <div className="text-gray-500 flex items-center gap-2 mr-64">
                        {formatDate(item.createdAt)}
                      </div>
                      <div
                        onClick={() => handleDeleteNotification(item.id)}
                        className="flex items-center gap-2 mr-2"
                      >
                        <RiDeleteBinLine className="text-2xl cursor-pointer p-1 rounded-full bg-orange-600 text-white" />
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              <>
                <div className="mx-auto py-4 text-center">
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
