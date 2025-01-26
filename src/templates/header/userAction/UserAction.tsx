import Image from "next/image";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function UserAction() {
  return (
    <div className="flex gap-2">
      <IoSearchOutline className="text-3xl my-auto" />

      <Image
        width={64}
        height={64}
        className=" object-cover rounded-full"
        src="/images/avatar-default.jpg"
        alt="avatar"
      />
    </div>
  );
}

export default UserAction;
