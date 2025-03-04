import React from "react";
import OrbitProgress from "react-loading-indicators";
function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <OrbitProgress
        color="#b3d1b3"
        size="medium"
        text="Loading"
        textColor=""
      />
    </div>
  );
}

export default Loading;
