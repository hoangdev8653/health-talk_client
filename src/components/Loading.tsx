import React from "react";
import OrbitProgress from "react-loading-indicators";
function Loading() {
  return (
    <div>
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
