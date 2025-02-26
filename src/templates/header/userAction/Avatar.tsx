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
            src="/images/avatar-default.jpg"
            alt="avatar"
          />
        </a>

        {isOpen && storedUser && (
          <>
            <div className="absolute z-50 right-[-40px] w-40 p-2 bg-gray-800 top-[60px]">
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
