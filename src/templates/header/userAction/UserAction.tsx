import React from "react";
import ThemeSwitch from "@/components/ThemeSwitch";
import Avatar from "./Avatar";
import Language from "./Language";

function UserAction() {
  return (
    <div className="flex gap-4 items-center cursor-pointer tablet:hidden">
      <ThemeSwitch/>
      <Avatar/>
      <Language/>
    </div>
  );
}

export default UserAction;
