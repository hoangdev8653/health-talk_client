"use client";

import React from "react";
import dynamic from "next/dynamic";
import Banner from "./Banner";

const Content = dynamic(() => import("./Content"), {
  loading: () => <div>Đang tải nội dung...</div>,
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Banner />
      <Content />
    </div>
  );
}
