"use client";
import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaStar, FaRegUserCircle } from "react-icons/fa";
import {
  MdOutlineArticle,
  MdOutlineCategory,
  MdHelpOutline,
} from "react-icons/md";
import Image from "next/image";
import Article from "@/app/admin/Article";
import Category from "@/app/admin/Category";
import User from "@/app/admin/User";
import Dashboard from "@/app/admin/Dashboard";
import Help from "@/app/admin/Help";
// import Hello from ""

function Index() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = [
    { title: "Dashboard", icon: <RxDashboard /> },
    { title: "User", icon: <FaRegUserCircle /> },
    { title: "Article", icon: <MdOutlineArticle /> },
    { title: "Category", icon: <MdOutlineCategory /> },
    { title: "Help", icon: <MdHelpOutline /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Article":
        return <Article />;
      case "User":
        return <User />;
      case "Category":
        return <Category />;
      case "Help":
        return <Help />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="w-full flex h-screen">
      <div className="relative w-2/12 bg-white h-screen  ">
        <div className="flex gap-1 cursor-pointer p-4 my-4 mx-2">
          <FaStar className="text-3xl text-black font-bold" />
          <p className="flex text-2xl gap-1">
            Dashboard <span className="text-sm text-gray-200 mt-2">H7</span>
          </p>
        </div>
        {tabs.map((tab: any, index: number) => (
          <div
            onClick={() => setActiveTab(tab.title)}
            key={index}
            className={`flex gap-3 p-2  cursor-pointer  w-4/5 mx-4 mt-2 hover:opacity-70 rounded-xl ${
              activeTab == tab.title
                ? "bg-blue-700 text-white"
                : "text-gray-400 bg-white"
            }`}
          >
            <span className="text-2xl">{tab.icon}</span>
            <h1 className="text-xl">{tab.title}</h1>
          </div>
        ))}

        <div className="bottom-[30px] absolute mx-2 flex">
          <div>
            <Image
              width={54}
              height={54}
              src="/images/avatar-default.jpg"
              alt="avatar_defaute"
              className="w-16 h-16 object-cover rounded-full my-2 mx-2"
            />
          </div>
          <div className="my-2">
            <h1 className="font-bold">Huy Hoàng</h1>
            <p className="opacity-60 text-xs">Profile Manager</p>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-slate-100 overflow-y-auto">
        <div className="mx-16">
          <div className="flex justify-between my-6">
            <div className="text-xl font-semibold flex gap-1">
              <p>Hello Huy Hoàng</p>
              <img className="size-7" src="/hello.svg" alt="start Icon" />
            </div>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Index;
