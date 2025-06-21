"use client";
import React, { useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import {
  MdOutlineArticle,
  MdOutlineCategory,
  MdHelpOutline,
  MdOutlineRadio,
} from "react-icons/md";
import Image from "next/image";
import Article from "@/app/admin/Article";
import Category from "@/app/admin/Category";
import User from "@/app/admin/User";
import Dashboard from "@/app/admin/Dashboard";
import Help from "@/app/admin/Help";
import Postcard from "@/app/admin/Postcard";
import { getLocalStorage } from "@/lib/localStorage";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Index() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = getLocalStorage("user");
    setUser(userData);
    if (!userData || userData.role !== "admin") {
      router.replace("/home");
    } else {
      setIsChecking(false);
    }
  }, [router]);

  if (isChecking) return null;

  const tabs = [
    { title: "Dashboard", icon: <RxDashboard /> },
    { title: "User", icon: <FaRegUserCircle /> },
    { title: "Article", icon: <MdOutlineArticle /> },
    { title: "Category", icon: <MdOutlineCategory /> },
    { title: "Postcard", icon: <MdOutlineRadio /> },
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
      case "Postcard":
        return <Postcard />;
      case "Help":
        return <Help />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="w-full flex h-screen">
      <div className="relative w-2/12 h-screen border-r-2 border-gray-200 dark:border-gray-700">
        <div className="cursor-pointer  m-2">
          <a title="H7" href="/admin">
            <Image
              src="/images/who-logo-png_seeklogo-152696-removebg-preview.png"
              alt="logo"
              width={100}
              height={100}
              className="w-24 h-24 object-cover mx-auto"
            />
          </a>
        </div>
        {tabs.map((tab: any, index: number) => (
          <div
            onClick={() => setActiveTab(tab.title)}
            key={index}
            className={`flex gap-3 p-2 cursor-pointer w-4/5 mx-4 mt-2 hover:opacity-70 rounded-xl ${
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
              src={user?.image || "/images/avatar_default.jpg"}
              alt="avatar"
              className="w-16 h-16 object-cover rounded-full my-2 mx-2"
            />
          </div>
          <div className="my-2">
            <Link href="/profile" className="font-bold">
              {user?.username}
            </Link>
            <p className="opacity-60 text-xs">Profile Manager</p>
          </div>
        </div>
      </div>
      <div className="flex-1  overflow-y-auto">
        <div className="mx-16">
          <div className="flex justify-between my-6">
            <div className="text-xl font-semibold flex gap-1">
              <p className="dark:text-blue-400 text-gray-900">
                Hello {user?.username}
              </p>
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
