"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import VideoPostcard from "@/components/VideoPostcard";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getAllPostcardThunk } from "@/stores/thunks/postcard";

function Postcard() {
  const dispacth = useAppDispatch();
  const { data } = useAppSelector((state) => state.postcard);

  useEffect(() => {
    dispacth(getAllPostcardThunk());
  }, [dispacth]);

  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto my-10">
        <h1
          style={{ textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)" }}
          className=" font-medium text-3xl my-4 "
        >
          Postcard
        </h1>
      </div>
      <div className="my-8">
        <Image
          src="/images/poster_postcard.jpg"
          alt="poster_postcard"
          width={1200}
          height={800}
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="w-4/5 mx-auto ">
        <div className="flex gap-4 tablet:block">
          <div className="w-[65%] tablet:w-full text-sm md:text-xl">
            <p className="my-4  font-bold leading-relaxed pb-4">
              Hãy nhắm mắt lại, thư giãn, và buông bỏ những nhọc nhằn để cảm xúc
              được nâng niu lên tiếng cùng với các chương trình Radio của Ladies
              of Việt Nam.
            </p>
            <p className="my-4 leading-relaxed  pb-4">
              Chắc hẳn trong cuộc sống bồn bề, bản thân mỗi người phụ nữ phải
              đảm nhận rất nhiều những vai trò, bổn phận và trách nhiệm khác
              nhau. Hạnh phúc đàn bà tưởng đến rồi đi chẳng ai định nghĩa được.
              Phụ nữ tự tin đến cách mấy cũng có lúc yếu mềm trước tình yêu và
              số phận. Nỗi cô đơn, cam chịu như thanh sắt chắn ngang trói buộc
              từng mảnh tâm hồn phụ nữ. Thế nên, phụ nữ cần lắm một nơi sẻ chia
              những tâm tình, tuế nguyệt trơ gan thì cũng có lúc phải rã rời với
              những tao đoạn của cuộc đời ồn ã.
            </p>
            <p className="my-4 leading-relaxed  pb-4">
              Radio Ladies of Việt Nam sẽ là nơi để phụ nữ được thư giãn sau
              những ngày dài làm việc vất vả, là nơi để phụ nữ gửi gắm niềm tin
              cùng tâm tình vào những mẩu chuyện. Hãy nhắm mắt lại, thư giãn, và
              buông bỏ những nhọc nhằn để cảm xúc được nâng niu lên tiếng.
            </p>
            <p className="my-4 leading-relaxed  pb-4">
              Đừng ngần ngại kết nối với chúng tôi, chia sẻ những chủ đề mà các
              bạn quan tâm và muốn lắng nghe. Để Ladies of Việt Nam hân hạnh là
              nhịp cầu nối những nỗi niềm thầm kín giữa những độc giả với nhau
              và là nơi để ta gợn bỏ những ưu tư mà bước tiếp với những gánh mưu
              sinh của cuộc đời.
            </p>
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
        <div className="grid grid-cols-3 gap-8 my-4 tablet:grid-cols-1 ">
          <VideoPostcard data={data} />
        </div>
      </div>
    </div>
  );
}

export default Postcard;
