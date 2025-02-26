import React from "react";
import { CarouselItem } from "@/components/ui/carousel";
import CarouselCustom from "@/components/Carousel";
import Link from "next/link";
const articles = [
  {
    id: 1,
    title: "Người đẹp và quái thú",
    author: "Huy Hoàng",
    category: "Phong cách sống",
    content:
      "Người đẹp và Quái thú - Beauty and The Beast, bản hoạt hình được Walt Disney công chiếu năm 1991, là câu chuyện cổ tích kể về mối tình đẹp, thơ mộng nhưng cũng lắm trắc trở giữa Belle dũng cảm, tử tế, kiên nhẫn, vị...",
    image:
      "https://www.ladiesofvietnam.net/wp-content/uploads/2024/02/AI-KHONG-THICH-TET-1-400x250.jpg",
  },
  {
    id: 2,
    title: "Người đẹp và quái thú",
    author: "Huy Hoàng",
    category: "Phong cách sống",
    content:
      "Người đẹp và Quái thú - Beauty and The Beast, bản hoạt hình được Walt Disney công chiếu năm 1991, là câu chuyện cổ tích kể về mối tình đẹp, thơ mộng nhưng cũng lắm trắc trở giữa Belle dũng cảm, tử tế, kiên nhẫn, vị...",
    image:
      "https://www.ladiesofvietnam.net/wp-content/uploads/2024/02/AI-KHONG-THICH-TET-1-400x250.jpg",
  },
  {
    id: 3,
    title: "Người đẹp và quái thú",
    author: "Huy Hoàng",
    category: "Phong cách sống",
    content:
      "Người đẹp và Quái thú - Beauty and The Beast, bản hoạt hình được Walt Disney công chiếu năm 1991, là câu chuyện cổ tích kể về mối tình đẹp, thơ mộng nhưng cũng lắm trắc trở giữa Belle dũng cảm, tử tế, kiên nhẫn, vị...",
    image:
      "https://www.ladiesofvietnam.net/wp-content/uploads/2024/02/AI-KHONG-THICH-TET-1-400x250.jpg",
  },
  {
    id: 4,
    title: "Người đẹp và quái thú",
    author: "Huy Hoàng",
    category: "Phong cách sống",
    content:
      "Người đẹp và Quái thú - Beauty and The Beast, bản hoạt hình được Walt Disney công chiếu năm 1991, là câu chuyện cổ tích kể về mối tình đẹp, thơ mộng nhưng cũng lắm trắc trở giữa Belle dũng cảm, tử tế, kiên nhẫn, vị...",
    image:
      "https://www.ladiesofvietnam.net/wp-content/uploads/2024/02/AI-KHONG-THICH-TET-1-400x250.jpg",
  },
  {
    id: 5,
    title: "Người đẹp và quái thú",
    author: "Huy Hoàng",
    category: "Phong cách sống",
    content:
      "Người đẹp và Quái thú - Beauty and The Beast, bản hoạt hình được Walt Disney công chiếu năm 1991, là câu chuyện cổ tích kể về mối tình đẹp, thơ mộng nhưng cũng lắm trắc trở giữa Belle dũng cảm, tử tế, kiên nhẫn, vị...",
    image:
      "https://www.ladiesofvietnam.net/wp-content/uploads/2024/02/AI-KHONG-THICH-TET-1-400x250.jpg",
  },
];

function Article() {
  return (
    <div className="my-8 w-full mx-auto">
      <CarouselCustom>
        {articles.map((article) => (
          <CarouselItem
            key={article.id}
            className="flex-shrink-0 basis-1/4 tablet:basis-1/2"
          >
            <Link href={`http://localhost:3000/home/${article.id}`}>
              <div className="border-2 border-gray-300  ">
                <img
                  className="object-cover w-full h-[180px]"
                  src={article.image}
                  alt="logo"
                />
                <div className="mx-4 my-2">
                  <h2 className="my-1">{article.title}</h2>
                  <div className="text-sm" style={{ color: "#666" }}>
                    <p>
                      by {article.author} | {article.category}
                    </p>
                    <p>{article.content}</p>
                    <span className="text-rose-400 hover:underline cursor-pointer">
                      read more
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
        {/* </div> */}
      </CarouselCustom>
    </div>
  );
}

export default Article;
