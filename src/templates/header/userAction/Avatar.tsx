"use client";

import Image from "next/image";
import React, { useState } from "react";

function Avatar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(true);

  const handleAvartaHover = () => setIsOpen(true);
  const handleAvartaLeave = () => setIsOpen(false);

  return (
    <div className="block">
      <div
        onMouseEnter={handleAvartaHover}
        onMouseLeave={handleAvartaLeave}
        className="relative"
      >
        <a href="/login">
          <Image
            width={48}
            height={48}
            className=" object-cover rounded-full"
            src="/images/avatar-default.jpg"
            alt="avatar"
          />
        </a>
        {user && isOpen && (
          <div className="absolute z-50  right-[-40px] w-40 p-2 bg-gray-800">
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
              <p className="text-white font-semibold hover:bg-gray-400 cursor-pointer m-1 text-lg">
                Sign Out
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Avatar;
