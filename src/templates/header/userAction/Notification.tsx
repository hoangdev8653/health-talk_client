"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  getNotificationByUserThunk,
  updateStatusNotificationThunk,
} from "@/stores/thunks/notification";
import formatDate from "@/utils/formatDate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

function Notification() {
  const [isOpen, setIsOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { NotificationByUser, NotificationIsUnRead, totalNotificationUnRead } =
    useAppSelector((state) => state.notification);

  useEffect(() => {
    document.getElementById("all")?.classList.add("bg-blue-500");
    dispatch(getNotificationByUserThunk());
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleReadNotification = async (id: any) => {
    const result = await dispatch(updateStatusNotificationThunk(id));
  };

  return (
    <div ref={notificationRef} className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <IoNotificationsOutline className="text-3xl hover:opacity-30" />
        <div className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full">
          <div
            style={
              totalNotificationUnRead > 0
                ? { backgroundColor: "red" }
                : { backgroundColor: "transparent" }
            }
            className="flex items-center justify-center w-5 h-5  text-white rounded-full text-sm font-bold"
          >
            {totalNotificationUnRead > 0 ? totalNotificationUnRead : ""}
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          style={{ zIndex: "51" }}
          className="cursor-default absolute rounded right-[-90px] w-[340px] max-h-[500px] overflow-y-auto p-2 bg-gray-800 top-12 text-white"
        >
          <p className="font-semibold m-2 text-2xl">Thông báo</p>
          <Tabs defaultValue="all" className="rounded">
            <TabsList className="flex gap-3 font-medium my-1.5 mx-2 justify-normal">
              <TabsTrigger className="rounded-xl" value="all">
                Tất cả
              </TabsTrigger>
              <TabsTrigger className="rounded-xl" value="unread">
                Chưa đọc
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <Card className="border-none">
                <CardContent className="border-none p-0 m-0 ">
                  {NotificationByUser?.length > 0 ? (
                    NotificationByUser?.map((item: any, index: number) => (
                      <Link
                        onClick={() => handleReadNotification(item.id)}
                        className="relative"
                        key={index}
                        href={`/home/${item?.post?.slug}`}
                      >
                        <div className="flex gap-2 my-4 cursor-pointer">
                          <div className="w-1/6">
                            <Image
                              width={48}
                              height={48}
                              className="rounded-full w-12 h-12 object-cover"
                              src={item?.post?.image}
                              alt={item?.post?.id}
                            />
                          </div>
                          <div className="flex-1 mr-2 flex items-center gap-2">
                            <div>
                              <p className="hover:opacity-80">
                                {item?.message}
                              </p>
                              <p className="text-sm text-gray-300 opacity-80">
                                {formatDate(item?.createdAt)}
                              </p>
                            </div>
                            {item?.is_read === false ? (
                              <div className="w-2 h-2 bg-blue-700 rounded"></div>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-400 mx-2">
                      Không có thông báo mới.
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="unread">
              <Card className="border-none">
                <CardContent className="border-none p-0 m-0">
                  {NotificationIsUnRead?.length > 0 ? (
                    NotificationIsUnRead?.map((item: any, index: number) => (
                      <Link
                        onClick={() => handleReadNotification(item.id)}
                        key={index}
                        href={`/home/${item?.post?.slug}`}
                      >
                        <div className="flex gap-2 my-4">
                          <div className="w-1/6">
                            <Image
                              width={48}
                              height={48}
                              className="rounded-full w-12 h-12 object-cover"
                              src={item?.post.image}
                              alt={item?.post.id}
                            />
                          </div>
                          <div className="flex-1 mr-2 flex items-center gap-2">
                            <div>
                              <p>{item?.message}</p>
                              <p className="text-sm text-gray-300 opacity-80">
                                {formatDate(item?.createdAt)}
                              </p>
                            </div>
                            <div className="w-2 h-2 bg-blue-700 rounded"></div>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-400 mx-4">
                      Không có thông báo mới.
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Notification;
