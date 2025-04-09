import React from "react";
import { getLocalStorage } from "@/lib/localStorage";

function Profile() {
  const user = getLocalStorage("user");

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="text-black">
      <div className="my-3">
        <h1
          style={{ textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)" }}
          className=" font-medium text-3xl my-3 "
        >
          Profile
        </h1>
        <p className="opacity-60">Manage your profile settings</p>
      </div>
      <div className="border-[1px] border-solid border-gray-200 opacity-70 w-4/5"></div>

      <div className="my-3">
        <h2 className="text-xl font-medium ">Basic info</h2>

        <p className="opacity-60">Tell us your basic info details</p>
      </div>
      <div className="my-6">
        <label className="block font-semibold text-slate-700">Username</label>
        <input
          title="username"
          type="text"
          defaultValue={user?.username}
          className="bg-white w-56  rounded border-solid border-[2px] border-gray-400 px-2 py-1 focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div className="my-6">
        <label className="block font-semibold text-slate-700">Email</label>
        <input
          defaultValue={user?.email}
          title="email"
          type="email"
          className="bg-white  w-56 rounded border-solid border-[2px] border-gray-400 px-2 py-1 focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div className="border-[1px] border-solid border-gray-200 opacity-70 w-4/5"></div>
      <div className="my-6">
        <label className="block font-semibold text-slate-700">About me</label>
        <textarea
          title="about"
          className="p-2 border-solid border-2 border-gray-100 rounded w-4/5 h-32 focus:outline-none"
        />
      </div>
      {/* <div className="my-3">
        <h1 className="text-2xl ">Profile picture</h1>
        <p className="opacity-60">We support only JPEGs or PNGs under 5MB</p>
        <div className="my-3">
          <div className="  ">
            <input
              title="image"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <Image
              width={54}
              height={54}
              ref={avatarImageRef}
              className="w-16 h-16 object-cover rounded-full my-2 mx-4"
              src={
                currentImage && currentImage.trim() !== ""
                  ? currentImage
                  : "https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png"
              }
              alt="avatar"
            />
            <button
              type="button"
              onClick={handleButtonClick}
              className="flex gap-1 border-2 border-solid font-semibold text-gray-700 rounded-xl px-2 py-1 hover:opacity-70"
            >
              <LuArrowUpFromLine className="text-xl" />
              <span>Upload</span>
            </button>
          </div>
        </div>
      </div> */}
      <button
        type="button"
        onClick={handleButtonClick}
        className="bg-green-600 border-2 border-solid font-semibold  rounded-xl px-2.5 py-1.5 hover:opacity-70 text-xl"
      >
        Save
      </button>
    </div>
  );
}

export default Profile;
