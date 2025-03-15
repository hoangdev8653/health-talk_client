"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/stores/hooks";
import { logout } from "@/stores/slices/user";
import { useRouter } from "next/navigation";
import { getLocalStorage } from "@/lib/localStorage";

function Avatar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const storedUser = getLocalStorage("user");

  const handelLogout = async () => {
    const result = dispatch(logout());

    if (result.type === "user/logout") router.push("/");
  };

  const handleAvartaHover = () => setIsOpen(true);
  const handleAvartaLeave = () => setIsOpen(false);

  return (
    <div className="block text-white">
      <div
        onMouseEnter={handleAvartaHover}
        onMouseLeave={handleAvartaLeave}
        className="relative"
      >
        <a href={storedUser ? "/profile" : "/login"}>
          <Image
            width={48}
            height={48}
            className="object-cover rounded-full"
            src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_s48x48&_nc_cat=1&ccb=1-7&_nc_sid=22ec41&_nc_ohc=zZKR384LhekQ7kNvgFEZ1HE&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&edm=AJqh0Q8EAAAA&_nc_gid=A5RU23Zff_zA6eAYjgFGt3M&oh=00_AYCf1KUwEx-mG0ahUNMriw4SEW_AwzarvJEYWAjjLS3M-Q&oe=67C7D8FA"
            alt="avatar_defaut"
          />
        </a>
        <div className="h-1 "></div>

        {isOpen && storedUser && (
          <>
            <div className="absolute z-50 right-[-40px] w-40 p-2 bg-gray-800 top-[52px]">
              <a href="/profile">
                <p className="text-white font-semibold hover:bg-gray-400 cursor-pointer m-1 text-lg">
                  Trang cá nhân
                </p>
              </a>
              <a href="/post">
                <p className="text-white font-semibold cursor-pointer border-b border-gray-400 hover:bg-gray-400 text-lg m-1">
                  Đăng bài viết
                </p>
              </a>
              <div>
                <p
                  onClick={handelLogout}
                  className="text-white font-semibold hover:bg-gray-400 cursor-pointer m-1 text-lg"
                >
                  Sign Out
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Avatar;
