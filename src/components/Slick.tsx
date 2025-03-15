import React from "react";
import Slider from "react-slick";

interface Props {
  children?: React.ReactNode;
  slidesToShow: number;
  slidesToScroll: number;
  autoPlay?: boolean;
}

export default function SimpleSlider({
  children,
  slidesToShow = 4,
  slidesToScroll = 2,
  autoPlay,
}: Props) {
  var settings = {
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
