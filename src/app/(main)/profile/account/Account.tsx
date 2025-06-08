import React from "react";
import { getLocalStorage } from "@/lib/localStorage";
import UploadAvatar from "./UploadAvatar";
import UpdatePassword from "./UpdatePassword";

function Account() {
  const user = getLocalStorage("user");

  return (
    <div className="text-black dark:text-gray-100 bg-white dark:bg-[#181818] min-h-screen transition-colors">
      <h1
        style={{ textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)" }}
        className="font-medium text-3xl my-3 dark:text-white"
      >
        My Account
      </h1>
      <UploadAvatar user={user} />
      <UpdatePassword />
    </div>
  );
}

export default Account;
