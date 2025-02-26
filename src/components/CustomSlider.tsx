"use client";

import React, { useEffect, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

type CustomSliderProps = {
  className?: string;
  content?: { image: string }[];
  children?: React.ReactNode;
  buttonMove?: boolean;
  onSlideChange?: (index: number) => void;
  autoPlay: boolean;
  autoPlayTime: number;
};

const CustomSlider: React.FC<CustomSliderProps> = ({
  children,
  className,
  buttonMove,
  onSlideChange,
  autoPlay,
  autoPlayTime,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex =
        (prev - 1 + React.Children.count(children)) %
        React.Children.count(children);
      onSlideChange?.(prevIndex);
      return prevIndex;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % React.Children.count(children);
      onSlideChange?.(nextIndex);
      return nextIndex;
    });
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = (prev + 1) % React.Children.count(children);
          onSlideChange?.(nextIndex);
          return nextIndex;
        });
      }, autoPlayTime);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayTime, children, onSlideChange]);

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden transition-transform duration-500 ease-in-out">
        {React.Children.toArray(children)[currentIndex]}
      </div>
      {buttonMove && (
        <>
          <div
            onClick={prevSlide}
            className="absolute left-5 top-1/2 cursor-pointer"
          >
            <GrFormPrevious className="text-4xl text-white font-bold" />
          </div>
          <div
            onClick={nextSlide}
            className="absolute right-5 top-1/2 cursor-pointer"
          >
            <GrFormNext className="text-4xl text-white font-bold" />
          </div>
        </>
      )}
    </div>
  );
};

export default CustomSlider;
