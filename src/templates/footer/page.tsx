import React from "react";
import {
  MdOutlineEmail,
  MdOutlineLocalPhone,
  MdOutlineFacebook,
} from "react-icons/md";

function Footer() {
  return (
    <div style={{ color: "#EFE3CA" }} className="w-full bg-black">
      <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8 opacity-70">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center my-2">
          <div className="leading-7">
            <h3 className="font-semibold text-lg mb-2">Về H7 Life</h3>
            <p className="hidden md:block">
              H7 Life là nền tảng cung cấp kiến thức sức khỏe, tư vấn y tế và
              kết nối cộng đồng với các chuyên gia.
            </p>
            <p>Hãy cùng chúng tôi xây dựng một cuộc sống khỏe mạnh hơn!</p>
          </div>

          <div className="leading-5">
            <h3 className="font-semibold text-lg mb-2">Điều hướng</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="hover:underline">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="/articles" className="hover:underline">
                  Bài viết sức khỏe
                </a>
              </li>
              <li>
                <a href="/tu-van" className="hover:underline">
                  Tư vấn{" "}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          <div className="leading-7">
            <h3 className="font-semibold text-lg mb-2">
              Nhận bản tin sức khỏe
            </h3>
            <p>Đăng ký để nhận mẹo sức khỏe và lời khuyên từ chuyên gia.</p>
            <form className="mt-2">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="p-2 rounded-md  w-3/4 my-2"
              />
              <button className=" ml-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:border-none">
                Đăng ký
              </button>
            </form>
          </div>
          <div className="leading-7">
            <h3 className="font-semibold text-lg mb-2">Liên hệ</h3>
            <p className="flex items-center justify-center gap-2">
              <MdOutlineEmail className="text-2xl" />
              <span>hhoang1072000@gmail.com</span>
            </p>
            <p className="flex items-center justify-center gap-2 my-1">
              <MdOutlineLocalPhone className="text-2xl" />
              <span>0766640006</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <MdOutlineFacebook className="text-2xl" />
              <a
                href="https://www.facebook.com/hhoang7777/"
                target="_blank"
                className="hover:underline"
              >
                H7 Life
              </a>
            </p>
          </div>
        </div>

        <div className="border-white border-t-2 opacity-50"></div>

        <div className="text-center my-4">
          <p className="my-2">
            © 2025 H7 Life. All rights reserved. | Powered by Offset Commerce.
          </p>
          <p>
            Photography by <span className="font-semibold">Huy Hoàng</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
