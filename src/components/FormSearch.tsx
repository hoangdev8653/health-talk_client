import React from "react";
import { CiSearch } from "react-icons/ci";

type FormSearchProps = {
  placholder: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

function FormSearch({
  placholder,
  value = "",
  onChange,
  defaultValue,
}: FormSearchProps) {
  return (
    <div className="flex items-center border border-gray-400 rounded-full px-2 py-1 w-72 bg-white">
      <CiSearch className="text-2xl text-black font-bold cursor-pointer hover:opacity-60" />
      <input
        defaultValue={defaultValue}
        type="text"
        value={value}
        onChange={(e) => {
          console.log("Input changed to:", e.target.value);
          onChange?.(e.target.value);
        }}
        placeholder={placholder}
        className="bg-white rounded-full px-1.5 py-1 focus:outline-none w-full"
      />
    </div>
  );
}

export default FormSearch;
