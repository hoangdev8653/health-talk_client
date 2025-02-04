import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="w-4/5 mx-auto my-8">
      <h1 className="text-black font-medium text-3xl my-4">Bài Viết</h1>
      <div className="grid grid-cols-3 gap-8 tablet:grid-cols-1">
        <div className="relative overflow-hidden my-4">
          <Image
            className="w-full object-cover transition-transform scale-10 duration-300 ease-in-out hover:scale-110"
            width={360}
            height={225}
            src="/images/artist_example.jpg"
            alt="logo"
          />
          <div className="absolute w-[360px]  top-1/2 text-center">
            <p className="text-white font-medium text-2xl">Sức Khỏe</p>
          </div>
        </div>
        <div className="relative overflow-hidden  my-4">
          <Image
            className="w-full object-cover transition-transform scale-10 duration-300 ease-in-out hover:scale-110"
            width={360}
            height={225}
            src="/images/artist_example.jpg"
            alt="logo"
          />
          <div className="absolute w-[360px]  top-1/2 text-center">
            <p className="text-white font-medium text-2xl">Sức Khỏe</p>
          </div>
        </div>
        <div className="relative overflow-hidden  my-4">
          <Image
            className="w-full object-cover transition-transform scale-10 duration-300 ease-in-out hover:scale-110"
            width={360}
            height={225}
            src="/images/artist_example.jpg"
            alt="logo"
          />
          <div className="absolute w-[360px] top-1/2 text-center">
            <p className="text-white font-medium text-2xl">Sức Khỏe</p>
          </div>
        </div>
        <div className="relative overflow-hidden  my-4">
          <Image
            className="w-full object-cover transition-transform scale-10 duration-300 ease-in-out hover:scale-110"
            width={360}
            height={225}
            src="/images/artist_example.jpg"
            alt="logo"
          />
          <div className="absolute w-[360px]  top-1/2 text-center">
            <p className="text-white font-medium text-2xl">Sức Khỏe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
