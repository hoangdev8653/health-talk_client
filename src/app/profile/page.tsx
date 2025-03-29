import React from "react";

function Profile() {
  return (
    <div className="w-full h-screen bg-white flex ">
      <div className="w-1/5 bg-slate-50">
        <div className="bg-slate-200 m-4 p-2 rounded cursor-pointer">
          <p className="ml-2">Profile</p>
        </div>
        <div className="bg-slate-200 m-4 p-2 rounded cursor-pointer">
          <p className="ml-2">Flowings</p>
        </div>
        <div className="bg-slate-200 m-4 p-2 rounded cursor-pointer">
          <p className="ml-2">Flowers</p>
        </div>
        <div className="bg-slate-200 m-4 p-2 rounded cursor-pointer">
          <p className="ml-2">My Articles</p>
        </div>
      </div>
      <div className="flex-1">
        <div className="p-6">
          <div className="my-3">
            <h1 className="text-3xl font-semibold ">Profile</h1>
            <p className="">Manage your profile settings</p>
          </div>
          <div className="border-[1px] border-solid border-gray-200 opacity-70 w-4/5"></div>

          <div className="my-3">
            <h2 className="text-xl font-semibold ">
              Manage your profile settings
            </h2>

            <p className="">Manage your profile settings</p>
          </div>
          <div className="my-6">
            <label className="block">Username</label>
            <input
              title="username"
              type="text"
              className="w-30 rounded border-solid border-[2px] border-gray-400 px-2 py-1.5 focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="my-6">
            <label className="block">Email</label>
            <input
              title="email"
              type="email"
              className="w-30 rounded border-solid border-[2px] border-gray-400 px-2 py-1.5 focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="border-[1px] border-solid border-gray-200 opacity-70 w-4/5"></div>
          <div className="my-3">
            <h1 className="text-3xl font-semibold ">Profile</h1>
            <p className="">Manage your profile settings</p>
          </div>
          <div className="my-3">
            <label className="block">Avatar</label>
            <input title="avatar" type="file" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
