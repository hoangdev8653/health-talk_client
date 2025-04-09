"use client";
import React, { useState } from "react";
import MyArticles from "./MyArticles";
import Frofile from "./Profile";
import Account from "./Account";
import Notification from "./Notification";
import { FaFileAlt, FaUser } from "react-icons/fa";
import { IoIosSettings, IoIosNotifications } from "react-icons/io";

function Index() {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = [
    { title: "Profile", icon: <FaUser /> },
    { title: "Account", icon: <IoIosSettings /> },
    { title: "MyArticles", icon: <FaFileAlt /> },
    { title: "Notification", icon: <IoIosNotifications /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "MyArticles":
        return <MyArticles />;
      case "Account":
        return <Account />;
      case "Notification":
        return <Notification />;
      default:
        return <Frofile />;
    }
  };

  return (
    <div className="w-full bg-white flex ">
      <div className="w-1/5 bg-slate-50 tablet:hidden">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`m-4 p-2 rounded cursor-pointer text-black ${
              activeTab === tab.title ? "bg-slate-200" : ""
            }`}
            onClick={() => setActiveTab(tab.title)}
          >
            <div className="flex items-center">
              <span className=" text-xl text-gray-400 font-bold">
                {tab.icon}
              </span>
              <span className="ml-1.5 capitalize">{tab.title}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 p-4">{renderContent()}</div>
    </div>
  );
}

export default Index;
