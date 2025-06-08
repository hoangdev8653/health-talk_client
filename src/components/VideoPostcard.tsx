"use client";
import React from "react";
import VideoThemnail from "./VideoThemnail";

interface postcardData {
  title: string;
  id: string;
  video_url: string;
  image: string;
}

type dataPostcard = {
  data: any;
};

function VideoPostcard(value: dataPostcard) {
  return (
    <>
      {value &&
        value.data?.data?.content?.map((item: postcardData, index: number) => (
          <div key={index} className="w-full relative">
            <img
              className="w-full h-[220px] object-cover"
              src={item?.image}
              alt={item?.id}
            />
            <VideoThemnail
              className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              source_url={item?.video_url}
              image={item?.image}
            />
            <div className="absolute bottom-3 left-0 right-0 flex justify-center items-center">
              <div className="w-full bg-gray-600 bg-opacity-60 p-2">
                <h3 className="text-white text-xs font-semibold text-center">
                  {item?.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default VideoPostcard;
