"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getAllBannerThunk } from "@/stores/thunks/banner";
import Image from "next/image";
import SimpleSlider from "@/components/Slick";

type Article = {
  id: string;
  title: string;
  image: string;
};

function Banner() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.banner);

  useEffect(() => {
    dispatch(getAllBannerThunk());
  }, []);

  return (
    <div className="w-full h-[600px] overflow-hidden">
      <SimpleSlider
        beakpointTablet={1}
        beakpointMobile={1}
        slidesToScroll={1}
        slidesToShow={1}
        autoPlay={false}
      >
        {data &&
          data?.data?.content?.map((item: Article, index: number) => (
            <div key={index} className="p-0 m-0 relative focus:border-none">
              <Image
                width={1920}
                height={800}
                src={item.image}
                alt={item.id}
                className="w-full h-[600px] object-cover focus:border-none"
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
      </SimpleSlider>
    </div>
  );
}

export default Banner;
