"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type CarouselProps = {
  className?: string;
  content?: { image: string }[];
  children?: React.ReactNode;
  buttonMove?: boolean;
};

const CarouselCustom: React.FC<CarouselProps> = ({
  className,
  children,
  buttonMove = false,
}) => {
  return (
    <div className={`relative ${className}`}>
      <Carousel
        plugins={[
          // Autoplay({
          //   delay: 4000,
          // }),
        ]}
        className="relative w-full h-full overflow-hidden"
      >
        <CarouselContent className="flex">{children}</CarouselContent>
        {buttonMove ? (
          <>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10" />
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10" />
          </>
        ) : (
          <></>
        )}
      </Carousel>
    </div>
  );
};

export default CarouselCustom;
