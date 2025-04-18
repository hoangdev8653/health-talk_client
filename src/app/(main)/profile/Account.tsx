import React, { useRef, useState } from "react";
import { getLocalStorage } from "@/lib/localStorage";
import { LuArrowUpFromLine } from "react-icons/lu";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function Account() {
  const user = getLocalStorage("user");
  const fileInputRef = useRef(null);
  const avatarImageRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(user?.image);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);

    if (avatarImageRef.current) {
      avatarImageRef.current.src = fileUrl;
    }
    setCurrentImage(fileUrl);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="text-black">
      <h1
        style={{ textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)" }}
        className=" font-medium text-3xl my-3 "
      >
        My Account
      </h1>
      <div className="my-3">
        <h1 className="text-2xl ">Profile picture</h1>
        <p className="opacity-60">We support only JPEGs or PNGs under 5MB</p>
        <div className="my-3">
          <div className="  ">
            <input
              title="image"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <Image
              width={54}
              height={54}
              ref={avatarImageRef}
              className="w-16 h-16 object-cover rounded-full my-2 mx-4"
              src={
                currentImage && currentImage.trim() !== ""
                  ? currentImage
                  : "https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png"
              }
              alt="avatar"
            />
            <button
              type="button"
              onClick={handleButtonClick}
              className="flex gap-1 border-2 border-solid font-semibold text-gray-700 rounded-xl px-2 py-1 hover:opacity-70"
            >
              <LuArrowUpFromLine className="text-xl" />
              <span>Upload</span>
            </button>
          </div>
        </div>
        <div className="my-5">
          <AlertDialog>
            <AlertDialogTrigger className="text-white bg-blue-600 px-2.5 py-1.5 rounded-xl">
              Change Password
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-gray-100">
              <AlertDialogHeader>
                <AlertDialogDescription>
                  <div className="bg-gray-100 ">
                    <div className="my-4">
                      <label>Old Password</label>
                      <input
                        title="old password"
                        type="password"
                        className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black"
                      />
                    </div>
                    <div className="my-4">
                      <label>New Password</label>
                      <input
                        title="old password"
                        type="password"
                        className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid"
                      />
                    </div>
                    <div className="my-4">
                      <label>Confirm New Password</label>
                      <input
                        title="old password"
                        type="password"
                        className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid"
                      />
                    </div>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-red-500 text-white rounded font-semibold ">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className="bg-green-500 text-black font-semibold rounded">
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}

export default Account;
