"use client";

import React from "react";
import { usePathname } from "next/navigation";

function Slug() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  return <div>{slug}</div>;
}

export default Slug;
