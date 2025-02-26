"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Category: React.FC = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto my-10">
        <h1
          style={{ textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)" }}
          className=" font-medium text-3xl my-4 "
        >
          {slug}
        </h1>
      </div>
      <div className="my-8">
        <Image
          src="/images/poster_postcard.jpg"
          alt="poster_postcard"
          height={800}
          width={0}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="w-4/5 mx-auto ">
        <div className="grid grid-cols-3 gap-16 my-4 tablet:grid-cols-1 ">
          <div className="item">
            <Link href={`http://localhost:3000/home/1`}>
              <div className="border-2 border-gray-300  ">
                <Image
                  width={200}
                  height={550}
                  className="object-cover w-full h-[180px]"
                  src="https://www.ladiesofvietnam.net/wp-content/uploads/2024/02/AI-KHONG-THICH-TET-1-400x250.jpg"
                  alt="logo"
                />
                <div className="mx-4 my-2">
                  <h2 className="my-1">Người đẹp và quái thú</h2>
                  <div className="text-sm" style={{ color: "#666" }}>
                    <p>by Huy Hoàng</p>
                    <p>
                      Người đẹp và Quái thú - Beauty and The Beast, bản hoạt
                      hình được Walt Disney công chiếu năm 1991, là câu chuyện
                      cổ tích kể về mối tình đẹp, thơ mộng nhưng cũng lắm trắc
                      trở giữa Belle dũng cảm, tử tế, kiên nhẫn, vị...
                    </p>
                    <span className="text-rose-400 hover:underline cursor-pointer">
                      read more
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="item">
            <Link href={`http://localhost:3000/home/1`}>
              <div className="border-2 border-gray-300  ">
                <Image
                  width={200}
                  height={550}
                  className="object-cover w-full h-[180px]"
                  src="https://www.ladiesofvietnam.net/wp-content/uploads/2024/02/AI-KHONG-THICH-TET-1-400x250.jpg"
                  alt="logo"
                />
                <div className="mx-4 my-2">
                  <h2 className="my-1">Người đẹp và quái thú</h2>
                  <div className="text-sm" style={{ color: "#666" }}>
                    <p>by Huy Hoàng</p>
                    <p>
                      Người đẹp và Quái thú - Beauty and The Beast, bản hoạt
                      hình được Walt Disney công chiếu năm 1991, là câu chuyện
                      cổ tích kể về mối tình đẹp, thơ mộng nhưng cũng lắm trắc
                      trở giữa Belle dũng cảm, tử tế, kiên nhẫn, vị...
                    </p>
                    <span className="text-rose-400 hover:underline cursor-pointer">
                      read more
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="item">
            <Link href={`http://localhost:3000/home/1`}>
              <div className="border-2 border-gray-300  ">
                <Image
                  width={200}
                  height={550}
                  className="object-cover w-full h-[180px]"
                  src="https://www.ladiesofvietnam.net/wp-content/uploads/2024/02/AI-KHONG-THICH-TET-1-400x250.jpg"
                  alt="logo"
                />
                <div className="mx-4 my-2">
                  <h2 className="my-1">Người đẹp và quái thú</h2>
                  <div className="text-sm" style={{ color: "#666" }}>
                    <p>by Huy Hoàng</p>
                    <p>
                      Người đẹp và Quái thú - Beauty and The Beast, bản hoạt
                      hình được Walt Disney công chiếu năm 1991, là câu chuyện
                      cổ tích kể về mối tình đẹp, thơ mộng nhưng cũng lắm trắc
                      trở giữa Belle dũng cảm, tử tế, kiên nhẫn, vị...
                    </p>
                    <span className="text-rose-400 hover:underline cursor-pointer">
                      read more
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="item">
            <Link href={`http://localhost:3000/home/1`}>
              <div className="border-2 border-gray-300  ">
                <Image
                  width={200}
                  height={550}
                  className="object-cover w-full h-[180px]"
                  src="https://www.ladiesofvietnam.net/wp-content/uploads/2024/02/AI-KHONG-THICH-TET-1-400x250.jpg"
                  alt="logo"
                />
                <div className="mx-4 my-2">
                  <h2 className="my-1">Người đẹp và quái thú</h2>
                  <div className="text-sm" style={{ color: "#666" }}>
                    <p>by Huy Hoàng</p>
                    <p>
                      Người đẹp và Quái thú - Beauty and The Beast, bản hoạt
                      hình được Walt Disney công chiếu năm 1991, là câu chuyện
                      cổ tích kể về mối tình đẹp, thơ mộng nhưng cũng lắm trắc
                      trở giữa Belle dũng cảm, tử tế, kiên nhẫn, vị...
                    </p>
                    <span className="text-rose-400 hover:underline cursor-pointer">
                      read more
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
