"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getAllBannerThunk } from "@/stores/thunks/banner";
import Image from "next/image";
import CustomSlider from "@/components/CustomSlider";

type Article = {
  id: string;
  title: string;
  image: string;
};

function Banner() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.banner);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    dispatch(getAllBannerThunk());
  }, []);

  return (
    <div className="w-full h-[600px] overflow-hidden">
      <CustomSlider
        autoPlayTime={5000}
        autoPlay={false}
        className="w-full h-full"
        buttonMove={true}
        onSlideChange={setCurrentIndex}
      >
        {data &&
          data?.data?.content?.map((item: Article, index: number) => (
            <div key={index} className="p-0 m-0 relative">
              <Image
                width={1920}
                height={800}
                src={item.image}
                alt={item.id}
                className="w-full h-[600px] object-cover"
                style={{ objectPosition: "center" }}
              />
              <div
                className={`absolute z-50 top-72  animate-fade-in ${
                  index % 2 == 0 ? "right-20" : "left-20"
                }`}
              >
                <h1 className="text-red-500 text-4xl font-bold ">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
      </CustomSlider>
    </div>
  );
}

export default Banner;
