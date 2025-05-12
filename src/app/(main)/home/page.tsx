"use client";

import React, { useEffect } from "react";
import { io } from "socket.io-client";
import dynamic from "next/dynamic";
import Banner from "./Banner";

const Content = dynamic(() => import("./Content"), {
  loading: () => <div>Đang tải nội dung...</div>,
  ssr: false, // nếu không cần render phía server
});

// const host = "http://localhost:3007";

export default function Home() {
  // useEffect(() => {
  //   const socket = io(host);

  //   socket.on("connect", () => {
  //     console.log("Kết nối socket:", socket.id);
  //   });

  //   socket.emit("test-event", "Hello từ client!");
  //   socket.on("test-response", (data) => {
  //     console.log("Phản hồi từ server:", data);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <div>
      <Banner />
      <Content />
    </div>
  );
}
