"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface propsComment {
  data: any[];
}

type valueComment = {
  content: string;
  likes: number;
  userId: string;
  User: {
    id: string;
    username: string;
    image: string;
  };
};

function CommentArticles({ data }: propsComment) {
  const [actionComment, setActionComment] = useState<boolean>(false);
  return (
    <div className="w-full ">
      <div className="w-full flex gap-2 my-6">
        <div>
          <Image
            width={48}
            height={48}
            src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_s48x48&_nc_cat=1&ccb=1-7&_nc_sid=22ec41&_nc_ohc=zZKR384LhekQ7kNvgFEZ1HE&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&edm=AJqh0Q8EAAAA&_nc_gid=A5RU23Zff_zA6eAYjgFGt3M&oh=00_AYCf1KUwEx-mG0ahUNMriw4SEW_AwzarvJEYWAjjLS3M-Q&oe=67C7D8FA"
            alt="avatar_defaut"
          />
        </div>
        <div
          style={{ background: "#f5f6f7" }}
          className="flex-1 relative h-24 border-[1px]"
        >
          <input
            className="w-full border-[1px] border-gray-300 min-h-10 text-base px-2 py-3 focus:outline-none "
            type="text"
            placeholder="Add a comment..."
          />
          <button
            style={{ backgroundColor: "#9cb4d8" }}
            className="cursor-default float-right px-2 py-1 text-white bg-blue-300  font-semibold m-2 rounded"
          >
            Post
          </button>
        </div>
      </div>
      {data.length > 0 ? (
        <>
          {data &&
            data.map((item: valueComment, index: number) => (
              <div key={index}>
                <div className="border-b-2 border-gray-300 opacity-70"></div>
                <div className="flex gap-2 my-4">
                  <div className="avatar cursor-pointer">
                    <Image
                      width={48}
                      height={48}
                      src={
                        item.User?.image ||
                        "https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_s48x48&_nc_cat=1&ccb=1-7&_nc_sid=22ec41&_nc_ohc=zZKR384LhekQ7kNvgFEZ1HE&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&edm=AJqh0Q8EAAAA&_nc_gid=A5RU23Zff_zA6eAYjgFGt3M&oh=00_AYCf1KUwEx-mG0ahUNMriw4SEW_AwzarvJEYWAjjLS3M-Q&oe=67C7D8FA"
                      }
                      alt={item?.User?.id}
                    />
                  </div>
                  <div
                    onMouseEnter={() => setActionComment(true)}
                    onMouseLeave={() => setActionComment(false)}
                    className="flex-1 block relative "
                  >
                    <p className="font-semibold text-blue-800 ">
                      {item?.User.username}
                    </p>
                    <p className="text-sm my-1 text-gray-500">
                      {item?.content}
                    </p>
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
            ))}
        </>
      ) : (
        <>
          <div>
            <p>Bạn hãy là người đầu tiên bình luận về bài viết</p>
          </div>
        </>
      )}
    </div>
  );
}

export default CommentArticles;
