"use client";

import React, { useEffect, useState } from "react";
import useLocalStorageUser from "@/components/UseLocalStorageUser";
import { setLocalStorage } from "@/lib/localStorage";
import { useAppDispatch } from "@/stores/hooks";
import { updateUsernameThunk } from "@/stores/thunks/user";
import { toast } from "react-toastify";

function Profile() {
  const user = useLocalStorageUser();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState(user?.username || "");

  useEffect(() => {
    setUsername(user?.username || "");
  }, [user]);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleUpdate = async () => {
    const result = await dispatch(updateUsernameThunk(username));
    if (result.type == "user/updateUsername/fulfilled") {
      toast.success("Cập nhật thành công");
      const userLocalstorage = { ...user, username }; // cập nhật username mới
      localStorage.setItem("user", JSON.stringify(userLocalstorage));
    }
  };

  return (
    <div className="text-black dark:text-gray-100  dark:bg-[#181818] min-h-screen transition-colors">
      <div className="my-3">
        <h1
          style={{ textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)" }}
          className="font-medium text-3xl my-3 dark:text-white"
        >
          Profile
        </h1>
        <p className="opacity-60 dark:text-gray-400">
          Manage your profile settings
        </p>
      </div>
      <div className="border-[1px] border-solid border-gray-200 dark:border-gray-700 opacity-70 w-4/5"></div>

      <div className="my-3">
        <h2 className="text-xl font-medium dark:text-white">Basic info</h2>
        <p className="opacity-60 dark:text-gray-400">
          Tell us your basic info details
        </p>
      </div>
      <div className="my-6">
        <label className="block font-semibold text-slate-700 dark:text-gray-200 mb-1">
          Username
        </label>
        <input
          title="username"
          type="text"
          defaultValue={username}
          onChange={handleUsernameChange}
          className="bg-white dark:bg-[#232c3b] w-60 rounded border-solid border-[2px] border-gray-400 dark:border-gray-700 px-2 py-1 focus:border-blue-600 focus:outline-none text-black dark:text-gray-100"
        />
      </div>
      <div className="my-6">
        <label className="block font-semibold text-slate-700 dark:text-gray-200 mb-1">
          Email
        </label>

        <input
          value={user?.email || ""}
          title="email"
          type="email"
          readOnly
          className="bg-gray-100 text-gray-500 cursor-not-allowed border border-gray-200 rounded px-3 py-2 w-60"
        />
      </div>
      <div className="border-[1px] border-solid border-gray-200 dark:border-gray-700 opacity-70 w-4/5"></div>
      <div className="my-6">
        <label className="block font-semibold text-slate-700 dark:text-gray-200 mb-1">
          About me
        </label>
        <textarea
          title="about"
          className="p-2 border-solid border-2 border-gray-100 dark:border-gray-700 rounded w-4/5 h-32 focus:outline-none bg-white dark:bg-[#232c3b] text-black dark:text-gray-100"
        />
      </div>

      <button
        type="button"
        onClick={handleUpdate}
        className="bg-green-600 border-2 border-solid font-semibold rounded-xl px-2.5 py-1.5 hover:opacity-70 text-xl text-white dark:text-white"
      >
        Save
      </button>
    </div>
  );
}

export default Profile;
