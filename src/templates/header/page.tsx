"use client"

import React, { useState } from "react";
import Logo from "./logoSection/Logo";
import Navigation from "./navigation/Navigation";
import UserAction from "./userAction/UserAction";
import { IoMdMenu } from "react-icons/io";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-around items-center shadow-sm tablet:w-4/5 tablet:mx-auto tablet:justify-between relative">
      <Logo />
      <Navigation />
      <UserAction />
      <div
        className="hidden tablet:block cursor-pointer hover:opacity-60"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <IoMdMenu className="text-2xl" />
      </div>

      {menuOpen && (
        <div className="absolute left-0 top-full bg-white w-full p-[5%] z-50 border-t-[3px] border-solid border-red-800 hidden tablet:block shadow">
          <div className="border-b-[1px] border-gray-100 opacity-70 text-gray-600 font-semibold hover:bg-gray-100 p-2 cursor-pointer">
           <p className="ml-4">Trang chủ</p> 
          </div>
          <div className="border-b-[1px] border-gray-100 opacity-70 text-gray-600 font-semibold hover:bg-gray-100 p-2 cursor-pointer">
          <p className="ml-4">Trang chủ</p> 
          </div>
          <div className="border-b-[1px] border-gray-100 opacity-70 text-gray-600 font-semibold hover:bg-gray-100 p-2 cursor-pointer">
          <p className="ml-4">Trang chủ</p> 
          </div>
          <div className="border-b-[1px] border-gray-100 opacity-70 text-gray-600 font-semibold hover:bg-gray-100 p-2 cursor-pointer">
          <p className="ml-4">Trang chủ</p> 
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
