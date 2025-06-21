"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getAllCategoryThunk } from "@/stores/thunks/category";
import Link from "next/link";
import Loading from "@/components/Loading";

type category = {
  name: string;
  image: string;
  id: string;
  slug: string;
};

function Articles() {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategoryThunk());
  }, []);

  return (
    <div className="w-4/5 mx-auto my-8">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="font-medium text-3xl my-4">Bài Viết</h1>
          <div className="grid grid-cols-3 gap-8 tablet:grid-cols-1">
            {data &&
              data?.data?.content?.map((item: category, index: number) => (
                <div key={index} className="relative overflow-hidden my-4">
                  <Link href={`/articles/${item?.slug}`}>
                    <Image
                      className="cursor-pointer w-full h-[225px] object-cover transition-transform scale-10 duration-300 ease-in-out hover:scale-110"
                      width={360}
                      height={225}
                      src={item?.image}
                      alt={item?.id}
                    />
                    <div className="absolute w-[360px] top-1/2 text-center">
                      <p className="text-white font-medium text-2xl">
                        {item?.name}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Articles;
