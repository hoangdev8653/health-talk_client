"use client";

import React, { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import ReactPlayer from "react-player";
import Modal from "./Modal";

type VideoThemnailProps = {
  className?: string;
  source_url?: string;
};

const VideoThemnail: React.FC<VideoThemnailProps> = ({
  className,
  source_url,
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
        className={`${className} absolute text-white opacity-50 text-5xl  z-10 shadow-lg`}
        onClick={handlePlayClick}
      >
        <BsPlayCircle />
      </div>
      {showVideo && (
        <Modal onClose={handleClose} className="w-[70%] h-[70%]">
          <div className="relative items-center mx-auto">
            <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="w-[70%] h-[70%]">
                <ReactPlayer
                  playing={true}
                  width="100%"
                  height="100%"
                  url={source_url}
                  //   url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  controls
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default VideoThemnail;
