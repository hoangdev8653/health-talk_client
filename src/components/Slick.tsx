import React from "react";
import Slider from "react-slick";

interface Props {
  children?: React.ReactNode;
  slidesToShow: number;
  slidesToScroll: number;
  autoPlay?: boolean;
  dots?: boolean;
  beakpointMobile?: number;
  beakpointTablet?: number;
}

export default function SimpleSlider({
  children,
  slidesToShow = 4,
  slidesToScroll = 2,
  autoPlay,
  dots,
  beakpointTablet,
  beakpointMobile,
}: Props) {
  const responsive = [];
  if (typeof beakpointTablet === "number") {
    responsive.push({
      breakpoint: beakpointTablet,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: dots,
        speed: 500,
      },
    });
  }
  if (typeof beakpointMobile === "number") {
    responsive.push({
      breakpoint: beakpointMobile,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    });
  }

  var settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoPlay,
    autoplaySpeed: 5000,
    responsive,
  };
  return <Slider {...settings}>{children}</Slider>;
}
