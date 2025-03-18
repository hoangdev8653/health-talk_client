import React from "react";
import Slider from "react-slick";

interface Props {
  children?: React.ReactNode;
  slidesToShow: number;
  slidesToScroll: number;
  autoPlay?: boolean;
  dots?: boolean;
}

export default function SimpleSlider({
  children,
  slidesToShow = 4,
  slidesToScroll = 2,
  autoPlay,
  dots,
}: Props) {
  var settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoPlay,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: dots,
          speed: 500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
}
