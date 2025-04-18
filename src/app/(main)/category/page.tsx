import Image from "next/image";
import React from "react";
import Article from "@/components/Article";
function Category() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto my-8">
        <h1
          style={{ textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)" }}
          className=" font-medium text-3xl my-4"
        >
          Chuyện đời thường
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
      <div className="max-w-7xl mx-auto my-8">
        <div className="grid gap-4">
            <Article/>
        </div>
      </div>
    </div>
  );
}

export default Category;
