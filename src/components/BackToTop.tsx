"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowUp } from "react-icons/io";

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);
  return (
    <div
      className="fixed bottom-[50px] right-[30px] cursor-pointer "
      style={{
        transition: "opacity 0.4s linear 0s, visibility",
        visibility: "visible",
        display: visible ? "inline" : "none",
      }}
      onClick={scrollToTop}
    >
      <IoMdArrowUp
        style={{
          transitionTimingFunction: "linear",
          zIndex: "5000",
        }}
        className="right-[10px] w-[50px] bottom-[30px] fixed h-12 "
      />
    </div>
  );
};

export default BackToTop;
