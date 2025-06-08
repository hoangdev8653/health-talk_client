"use client";

import React, { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import ReactPlayer from "react-player";
import Modal from "./Modal";

type VideoThemnailProps = {
  className?: string;
  source_url?: string;
  image?: string;
};

const VideoThemnail: React.FC<VideoThemnailProps> = ({
  className,
  source_url,
  image,
}) => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  const handleClose = () => {
    setShowVideo(false);
  };

  return (
    <div>
      <div
        className={`${className} absolute text-white opacity-90 text-5xl  z-10 shadow-lg`}
        onClick={handlePlayClick}
      >
        <BsPlayCircle />
      </div>
      {showVideo && (
        <Modal onClose={handleClose} className="w-[80%] h-[80%] ">
          <div className="relative w-full h-full flex items-center justify-center ">
            {image && (
              <img
                src={image}
                alt="audio thumbnail"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
              />
            )}

            <div className="absolute bottom-2 z-10  backdrop-blur-md p-4 rounded-lg ">
              <audio controls autoPlay>
                <source src={source_url} type="audio/mp3" />
                Trình duyệt của bạn không hỗ trợ thẻ audio.
              </audio>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default VideoThemnail;
