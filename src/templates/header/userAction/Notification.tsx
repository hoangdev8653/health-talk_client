"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { IoNotificationsOutline } from "react-icons/io5";

function Notification() {
  const [isOpen, setIsOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.getElementById("all")?.classList.add("bg-blue-500");
  }, []);

  const handleChangeState = (id: string) => {
    const allBtn = document.getElementById("all");
    const unreadBtn = document.getElementById("unread");
    const selectedBtn = document.getElementById(id);

    if (selectedBtn?.classList.contains("bg-blue-500")) {
      allBtn?.classList.remove("bg-blue-500");
      unreadBtn?.classList.remove("bg-blue-500");
    } else {
      allBtn?.classList.remove("bg-blue-500");
      unreadBtn?.classList.remove("bg-blue-500");
      selectedBtn?.classList.add("bg-blue-500");
    }
  };

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

  return (
    <div ref={notificationRef} className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <IoNotificationsOutline className="text-3xl hover:opacity-30" />
        <div className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full">
          <div className="flex items-center justify-center w-5 h-5 bg-red-600 text-white rounded-full text-sm font-bold">
            1
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          style={{ zIndex: "51" }}
          className="cursor-default absolute rounded right-[-80px] w-[340px] max-h-[500px] overflow-y-auto p-2 bg-gray-800 top-12 text-white"
        >
          <p className="font-semibold m-2 text-2xl">Thông báo</p>
          <div className="flex gap-3 font-medium my-2 mx-2">
            <div
              id="all"
              onClick={() => handleChangeState("all")}
              className="text-lg border-solid rounded-xl px-1.5 py-0.5 bg-blue-500 text-white cursor-pointer"
            >
              Tất cả
            </div>
            <div
              id="unread"
              onClick={() => handleChangeState("unread")}
              className="text-lg border-solid rounded-xl px-1.5 py-0.5 text-white cursor-pointer"
            >
              Chưa đọc
            </div>
          </div>
          <div className="flex gap-2 my-4">
            <div className="w-1/6">
              <Image
                width={48}
                height={48}
                className="rounded-full"
                src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-1/84210483_102007824752552_6607138681826312192_n.jpg?stp=c60.0.261.261a_cp0_dst-jpg_s56x56_tt6&_nc_cat=108&ccb=1-7&_nc_sid=fe756c&_nc_ohc=RsgY069pzcQQ7kNvgGTfptL&_nc_oc=AdjRHBo0pPdtNBwCC8wHqqOS-4fsUX5Pgpvl2GcE8BUrKK5xhJb7mcA12__33DclvgKafGqImBaHTaoGf5_x276Y&_nc_zt=24&_nc_ht=scontent.fdad3-1.fna&_nc_gid=Aksy5u3KTMvtjvoyUw0zYQN&oh=00_AYBUv2D99i1b5dgC2M6NkuS_bXV-GbNmwTYgHJe5tNqJAA&oe=67E290F8"
                alt="text"
              />
            </div>
            <div className="flex-1 mr-2">
              <p>Huy Hoàng đã thích bài viết của bạn</p>
              <p className="text-sm text-gray-300 opacity-80">2 ngày</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
