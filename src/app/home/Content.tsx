import Image from "next/image";
import React from "react";
import Article from "@/components/Article";
type Article = {
  id: number;
  title: string;
  content: string;
  image: string;
};
function Content() {
  const articles = [
    {
      id: 1,
      title: "Bài viết 1",
      content: "Nội dung bài viết 1",
      image: "/images/artist_example.jpg",
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
    <div className="w-4/5 mx-auto">
      <Article />
      <div >
        {articles.map((item: Article, index: number) => (
          <div
            key={item.id}
            className={`flex items-center gap-4 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-1/2 relative group">
              <Image
                width={360}
                height={225}
                src={item.image}
                alt={item.title}
                className="object-cover transition-transform scale-10 duration-300 ease-in-out hover:scale-110"
              />
              <div className="absolute bottom-20 left-8 text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity  z-20">
                Tư vấn tâm lý 1 - 1
              </div>
            </div>
            <div className="w-1/2 text-center">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
