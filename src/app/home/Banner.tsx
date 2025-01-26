import React from "react";
import {
  CarouselItem,
} from "@/components/ui/carousel";
import CarouselCustom from "@/components/Carousel";

type Article = { 
    id: number; 
    title: string; 
    content: string; 
    image: string; 
};

function Banner() {
    const articles : Article[]= [
        {
          id: 1,
          title: "Bài viết 1",
          content: "Nội dung bài viết 1",
          image: "https://ladiesofvietnam.net/wp-content/uploads/2018/09/DSC07868-Edit.jpg",
        },
        {
          id: 2,
          title: "Bài viết 2",
          content: "Nội dung bài viết 2",
          image: "/images/artist_example.jpg",
        },
        {
          id: 3,
          title: "Bài viết 3",
          content: "Nội dung bài viết 3",
          image: "/images/artist_example.jpg",
        },
        {
          id: 4,
          title: "Bài viết 4",
          content: "Nội dung bài viết 4",
          image: "/images/artist_example.jpg",
        },
      ];
  return (
    <div className="w-full h-[500px] overflow-hidden">
     <CarouselCustom className="w-full h-full" buttonMove={true}>
        {articles.map((article: Article, index : number) => (
          <CarouselItem key={index} className="flex-shrink-0">
            <div className="p-0 m-0 ">
              <img
                src={article.image}
                alt={`Slide ${article.id}`}
                className="w-screen h-full object-fill "
              />
            </div>
          </CarouselItem>
        ))}
     </CarouselCustom>
    </div>
  );
}

export default Banner;
