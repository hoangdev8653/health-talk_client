import React from "react";
import { CiSearch } from "react-icons/ci";

type FormSearchProps = {
  placholder: string;
  value?: string;
};

function FormSearch({ placholder, value }: FormSearchProps) {
  return (
    <div className="flex items-center border-[1px] border-solid border-gray-400 rounded-full px-2 py-1 w-72 bg-gray-200">
      <CiSearch className="text-2xl text-black font-bold cursor-pointer hover:opacity-60" />
      <input
        type="text"
        value={value}
        placeholder={placholder}
        className="bg-gray-200 rounded-full px-1.5 py-1 focus:outline-none "
      />
    </div>
  );
}

export default FormSearch;
