import React from "react";
import ThemeSwitch from "@/components/ThemeSwitch";
import Avatar from "./Avatar";
import Notification from "./Notification";

function UserAction() {
  return (
    <div className="flex gap-4 items-center cursor-pointer tablet:hidden">
      <ThemeSwitch />
      <Avatar />
      <Notification />
    </div>
  );
}

export default UserAction;
