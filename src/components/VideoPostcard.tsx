import React from "react";
import VideoThemnail from "./VideoThemnail";
function VideoPostcard() {
  return (
    <div className="w-[360px] h-[225px]  relative">
      <img
        className="w-full h-full object-cover"
        src="https://www.ladiesofvietnam.net/wp-content/uploads/2020/09/%C4%90AU-KH%E1%BB%94-V%C3%8C-T%C3%8CNH.jpg"
        alt="video1"
      />
     
      <VideoThemnail className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
    </div>
  );
}

export default VideoPostcard;
