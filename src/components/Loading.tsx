import React from "react";
function Loading() {
  return (
    <div className="w-full h-[300px] flex flex-col justify-center items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
      <span className="text-blue-600 font-semibold text-lg">Đang tải...</span>
    </div>
  );
}

export default Loading;
