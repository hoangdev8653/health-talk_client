"use client";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import Banner from "./Banner";
import Content from "./Content";

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
      <Content />
    </div>
  );
}
