"use client";
import React, { useEffect, useRef, useState, Suspense } from "react";
import { io, Socket } from "socket.io-client";
import Banner from "./Banner";

const Content = React.lazy(() => import("./Content"));

const host = "http://localhost:3007";

export default function Home() {
  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState("");
  const [id, setId] = useState<string | undefined>();

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

  return (
    <div>
      <Banner />

      <Suspense fallback={<div>Đang tải nội dung...</div>}>
        <Content />
      </Suspense>
    </div>
  );
}
