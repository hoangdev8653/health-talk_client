import React, { useRef, useState } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/stores/hooks";
import { updateAvatarThunk } from "@/stores/thunks/user";
import { LuArrowUpFromLine } from "react-icons/lu";
import { toast } from "react-toastify";

function UploadAvatar({ user }: { user: any }) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const avatarImageRef = useRef<HTMLImageElement | null>(null);
  const [currentImage, setCurrentImage] = useState(user?.image);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    console.log("Selected file:", file);
    console.log("Selected file:", fileUrl);

    if (avatarImageRef.current) {
      avatarImageRef.current.src = fileUrl;
    }

    setSelectedFile(file);
    setCurrentImage(fileUrl);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file before uploading.");
      return;
    }

    dispatch(updateAvatarThunk(selectedFile))
      .unwrap()
      .then((response) => {
        console.log("Avatar updated successfully:", response);
        toast.success("Cập nhật Avatar thành công");
      })
      .catch((error) => {
        console.error("Failed to update avatar:", error);
        toast.error("Cập nhật Avatar thất bại");
      });
  };

  return (
    <div className="my-3">
      <h1 className="text-2xl">Profile picture</h1>
      <p className="opacity-60">We support only JPEGs or PNGs under 5MB</p>
      <div className="my-3">
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
        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleButtonClick}
            className="flex gap-1 border-2 border-solid font-semibold text-gray-700 dark:text-gray-100 border-gray-400 dark:border-gray-600 bg-white dark:bg-[#232c3b] rounded-xl px-2 py-1 hover:opacity-70"
          >
            <LuArrowUpFromLine className="text-xl" />
            <span>Upload</span>
          </button>
          <button
            onClick={handleUpload}
            id="saveBtn"
            disabled={!selectedFile}
            className={`flex gap-1 border-2 border-solid font-semibold text-gray-700 dark:text-gray-100 border-gray-400 dark:border-gray-600 bg-white dark:bg-[#232c3b] rounded-xl px-2 py-1 hover:opacity-70 ${
              !selectedFile ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
          >
            💾 Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadAvatar;
