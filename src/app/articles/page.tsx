"use client";
import Image from "next/image";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/stores/slices/counterSlice";

function Articles() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div className="w-4/5 mx-auto my-8">
      <h1 className="text-black font-medium text-3xl my-4">Bài Viết</h1>
      <div className="grid grid-cols-3 gap-8 tablet:grid-cols-1">
        <div className="relative overflow-hidden my-4">
          <Image
            className="w-full object-cover transition-transform scale-10 duration-300 ease-in-out hover:scale-110"
            width={360}
            height={225}
            src="/images/artist_example.jpg"
            alt="logo"
          />
          <div className="absolute w-[360px]  top-1/2 text-center">
            <p className="text-white font-medium text-2xl">Sức Khỏe</p>
          </div>
        </div>
        <div className="relative overflow-hidden  my-4">
          <Image
            className="w-full object-cover transition-transform scale-10 duration-300 ease-in-out hover:scale-110"
            width={360}
            height={225}
            src="/images/artist_example.jpg"
            alt="logo"
          />
          <div className="absolute w-[360px]  top-1/2 text-center">
            <p className="text-white font-medium text-2xl">Sức Khỏe</p>
          </div>
        </div>
        <div className="relative overflow-hidden  my-4">
          <Image
            className="w-full object-cover transition-transform scale-10 duration-300 ease-in-out hover:scale-110"
            width={360}
            height={225}
            src="/images/artist_example.jpg"
            alt="logo"
          />
          <div className="absolute w-[360px] top-1/2 text-center">
            <p className="text-white font-medium text-2xl">Sức Khỏe</p>
          </div>
        </div>
        <div className="relative overflow-hidden  my-4">
          <Image
            className="w-full object-cover transition-transform scale-10 duration-300 ease-in-out hover:scale-110"
            width={360}
            height={225}
            src="/images/artist_example.jpg"
            alt="logo"
          />
          <div className="absolute w-[360px]  top-1/2 text-center">
            <p className="text-white font-medium text-2xl">Sức Khỏe</p>
          </div>
        </div>
      </div>

      <div className="p-4 border rounded-lg text-center">
        <h1 className="text-2xl font-bold">Counter: {count}</h1>
        <button
          className="p-2 bg-blue-500 text-white m-2"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="p-2 bg-red-500 text-white m-2"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className="p-2 bg-green-500 text-white m-2"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          +5
        </button>
      </div>
    </div>
  );
}

export default Articles;
