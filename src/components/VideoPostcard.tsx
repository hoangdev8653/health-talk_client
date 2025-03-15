"use client";
import React, { useEffect } from "react";
import VideoThemnail from "./VideoThemnail";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getAllPostcardThunk } from "@/stores/thunks/postcard";

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
              className="w-full h-full object-cover"
              src={item.image}
              alt={item.id}
            />
            <VideoThemnail
              className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              source_url={item.video_url}
            />
            <div className="absolute bottom-3 left-0 right-0 bg-black bg-opacity-50 p-2 text-center">
              <h3 className="text-white text-xs font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
    </>
  );
}

export default VideoPostcard;
