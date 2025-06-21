import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import Overlay from "@/components/Overlay";

type ModalProps = {
  onClose?: () => void;
  children?: React.ReactNode;
  className?: string;
};

function Modal({ onClose, children, className }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto ">
      <div
        style={{ backgroundColor: "#1A1A1A" }}
        className={`relative py-4 rounded shadow-lg z-50 ${className}`}
      >
        <div
          onClick={onClose}
          className="absolute top-[-16px] right-[-16px] z-60 text-white text-3xl cursor-pointer"
        >
          <IoMdClose
            size={32}
            className="text-white rounded-full border-2 border-white"
          />
        </div>
        {children}
      </div>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
        <Overlay />
      </div>
    </div>
  );
}

export default Modal;
