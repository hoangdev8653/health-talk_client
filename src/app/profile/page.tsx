import React from "react";

function Profile() {
  return (
    <div className="w-full h-screen bg-white flex ">
      <div className="w-1/5 bg-slate-100">
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
      <div className="flex-1 ">
        <h1 className="text-3xl font-semibold">Profile</h1>
      </div>
    </div>
  );
}

export default Profile;
