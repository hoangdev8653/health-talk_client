"use client";
import React, { useEffect, useRef, useState } from "react";
import MyArticles from "./MyArticles";
import Frofile from "./Profile";
import Account from "./account/Account";
import Notification from "./Notification";
import { FaFileAlt, FaUser } from "react-icons/fa";
import { IoIosSettings, IoIosNotifications } from "react-icons/io";
import { io, Socket } from "socket.io-client";

const host = "http://localhost:3007";

function Index() {
  const [activeTab, setActiveTab] = useState("Profile");

  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io(host);

    socketRef.current.on("connect", () => {
      console.log("Kết nối thành công với server:", socketRef.current?.id);
    });

    socketRef.current.on("test-response", (data) => {
      console.log("Phản hồi từ server:", data);
    });

    socketRef.current.emit("test-event", "Hello từ client!");

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

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
    <div className="w-full  flex ">
      <div className="w-1/5 bg-slate-50 dark:bg-[#181818] tablet:hidden">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`m-4 p-2 rounded cursor-pointer 
        text-black dark:text-gray-100 
        ${activeTab === tab.title ? "bg-slate-200 dark:bg-[#232c3b]" : ""}
      `}
            onClick={() => setActiveTab(tab.title)}
          >
            <div className="flex items-center">
              <span className="text-xl text-gray-400 dark:text-gray-300 font-bold">
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
