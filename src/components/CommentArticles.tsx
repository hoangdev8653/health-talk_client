"use client";

import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

function CommentArticles() {
  const [actionComment, setActionComment] = useState<boolean>(false);

  return (
    <div className="w-full ">
      <div className="flex gap-2 my-4">
        <div className="avatar cursor-pointer">
          <img
            src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_s48x48&_nc_cat=1&ccb=1-7&_nc_sid=22ec41&_nc_ohc=zZKR384LhekQ7kNvgFEZ1HE&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&edm=AJqh0Q8EAAAA&_nc_gid=A5RU23Zff_zA6eAYjgFGt3M&oh=00_AYCf1KUwEx-mG0ahUNMriw4SEW_AwzarvJEYWAjjLS3M-Q&oe=67C7D8FA"
            alt="avatar_defaut"
          />
        </div>
        <div
          onMouseEnter={() => setActionComment(true)}
          onMouseLeave={() => setActionComment(false)}
          className="flex-1 block relative "
        >
          <p className="font-semibold text-blue-800 ">Huy Hoàng</p>
          <p className="text-sm my-1 text-gray-500">Bài Viết rất hay!!</p>
          <div className="flex gap-2 text-xs ">
            <span className="text-blue-500 cursor-pointer hover:underline">
              Like
            </span>
            <span className="text-blue-500 cursor-pointer hover:underline">
              Reply
            </span>
            <span className="text-gray-400 ">1h</span>
          </div>
          {actionComment ? (
            <>
              <div className="right-4 top-2 absolute">
                <FaAngleDown className="text-xl text-gray-500" />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommentArticles;
