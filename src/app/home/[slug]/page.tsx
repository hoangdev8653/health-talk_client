"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import CommentArticles from "@/components/CommentArticles";
import Image from "next/image";
const ArticleDetail: React.FC = () => {
  const [sort, setSort] = useState<string>("newest");

  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto my-10">
        <p
          style={{ textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)" }}
          className=" font-medium text-3xl my-4 "
        >
          {slug}
        </p>
        <div className="my-8 w-full">
          <Image
            className="w-full object-cover"
            width={200}
            height={550}
            src="https://www.ladiesofvietnam.net/wp-content/uploads/2024/02/GIAO-TIEP-TRONG-TINH-YEU-1.jpg"
            alt="123"
          />
        </div>
        <div className="flex gap-4 tablet:block">
          <div className="w-[65%] tablet:w-full">
            <p className="my-4 md:text-xl text-sm font-bold leading-relaxed pb-4">
              Hãy nhắm mắt lại, thư giãn, và buông bỏ những nhọc nhằn để cảm xúc
              được nâng niu lên tiếng cùng với các chương trình Radio của Ladies
              of Việt Nam.
            </p>
            <p className="my-4 leading-relaxed md:text-xl text-sm pb-4">
              Chắc hẳn trong cuộc sống bồn bề, bản thân mỗi người phụ nữ phải
              đảm nhận rất nhiều những vai trò, bổn phận và trách nhiệm khác
              nhau. Hạnh phúc đàn bà tưởng đến rồi đi chẳng ai định nghĩa được.
              Phụ nữ tự tin đến cách mấy cũng có lúc yếu mềm trước tình yêu và
              số phận. Nỗi cô đơn, cam chịu như thanh sắt chắn ngang trói buộc
              từng mảnh tâm hồn phụ nữ. Thế nên, phụ nữ cần lắm một nơi sẻ chia
              những tâm tình, tuế nguyệt trơ gan thì cũng có lúc phải rã rời với
              những tao đoạn của cuộc đời ồn ã.
            </p>
            <p className="my-4 leading-relaxed md:text-xl text-sm pb-4">
              Radio Ladies of Việt Nam sẽ là nơi để phụ nữ được thư giãn sau
              những ngày dài làm việc vất vả, là nơi để phụ nữ gửi gắm niềm tin
              cùng tâm tình vào những mẩu chuyện. Hãy nhắm mắt lại, thư giãn, và
              buông bỏ những nhọc nhằn để cảm xúc được nâng niu lên tiếng.
            </p>
            <p className="my-4 leading-relaxed md:text-xl text-sm pb-4">
              Đừng ngần ngại kết nối với chúng tôi, chia sẻ những chủ đề mà các
              bạn quan tâm và muốn lắng nghe. Để Ladies of Việt Nam hân hạnh là
              nhịp cầu nối những nỗi niềm thầm kín giữa những độc giả với nhau
              và là nơi để ta gợn bỏ những ưu tư mà bước tiếp với những gánh mưu
              sinh của cuộc đời.
            </p>
            <p
              style={{ textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)" }}
              className=" font-medium text-2xl my-2 "
            >
              Huy Hoàng
            </p>
            <div className=" my-8">
              <div className="flex justify-between">
                <div className="font-bold text-base">0 comments</div>
                <div className="flex items-center">
                  <span>Sort by</span>
                  <select
                    title="sort by"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border p-1 w-full mb-4 bg-white text-black"
                  >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="border-b-2 border-solid border-gray-300 opacity-70"></div>
            <div className="w-full flex gap-2 my-6">
              <div>
                <img
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
            <CommentArticles />
            <CommentArticles />
            <CommentArticles />
            <CommentArticles />
            <CommentArticles />
            <div className="border-b-2 border-solid border-gray-300 opacity-70 my-4"></div>
          </div>
          <div className="flex-1 tablet:w-full">
            <div className=" justify-center items-center">
              <img
                className="w-[360px] h-[360px] mx-auto"
                src="https://www.ladiesofvietnam.net/wp-content/uploads/2018/09/Logo-Final-Round-500-500.jpg"
                alt="logo"
              />
            </div>
            <div className="flex my-8 text-center justify-center gap-4">
              <div className="p-2 bg-blue-700 ">
                <FaFacebookSquare className="text-4xl text-white bg-transparent  " />
              </div>
              <div className="p-2 bg-red-700">
                <FaYoutube className="text-4xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
