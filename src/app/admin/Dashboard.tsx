import Image from "next/image";
import React from "react";

function Dashboard() {
  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl flex justify-between p-6">
        <div className="flex gap-2 ">
          <Image
            width={54}
            height={54}
            src="https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png"
            alt="avatar_defaute"
            className="w-16 h-16 object-cover rounded-full my-2 mx-2"
          />
          <div>
            <p>Total Articles</p>
            <p className="font-bold text-xl">5,432</p>
            <p className="font-bold">Total Articles</p>
          </div>
        </div>
        <div className="border-r-2 border-solid"></div>
        <div className="flex gap-2">
          <Image
            width={54}
            height={54}
            src="https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png"
            alt="avatar_defaute"
            className="w-16 h-16 object-cover rounded-full my-2 mx-2"
          />
          <div>
            <p>Total Articles</p>
            <p className="font-bold text-xl">5,432</p>
            <p className="font-bold">Total Articles</p>
          </div>
        </div>
        <div className="border-r-2 border-solid"></div>
        <div className="flex gap-2">
          <Image
            width={54}
            height={54}
            src="https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png"
            alt="avatar_defaute"
            className="w-16 h-16 object-cover rounded-full my-2 mx-2"
          />
          <div>
            <p>Total Articles</p>
            <p className="font-bold text-xl">5,432</p>
            <p className="font-bold">Total Articles</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
