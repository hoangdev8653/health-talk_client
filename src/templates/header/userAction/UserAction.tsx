import React from "react";
// import { IoSearchOutline } from "react-icons/io5";
import ThemeSwitch from "@/components/ThemeSwitch";
import Avatar from "./Avatar";
import Language from "./Language";

function UserAction() {
  return (
    <div className="flex gap-4 items-center cursor-pointer">
      {/* <IoSearchOutline className="text-3xl my-auto" /> */}
      <ThemeSwitch/>
      <Avatar/>
      <Language/>
    </div>
  );
}

export default UserAction;
