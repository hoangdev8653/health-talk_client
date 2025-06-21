import React from "react";

function Help() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trợ giúp</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Bạn cần hỗ trợ gì?"
          className="w-full p-3 border rounded-lg shadow-sm dark:text-black"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {["Tài khoản", "Viết bài", "Bình luận", "Cài đặt"].map((title) => (
          <div
            key={title}
            className="p-4 border rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="font-semibold text-lg mb-2">{title}</h2>
            <p className="text-sm dark:text-gray-400">
              Tìm hiểu cách {title.toLowerCase()} và xử lý sự cố.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Câu hỏi thường gặp</h2>
        <div className="space-y-2">
          <details className="border p-3 rounded-md">
            <summary className="font-medium cursor-pointer">
              Làm sao để viết bài mới?
            </summary>
            <p className="mt-2 text-sm dark:text-gray-400">
              Vào mục "Bài viết" → "Tạo mới".
            </p>
          </details>
          <details className="border p-3 rounded-md">
            <summary className="font-medium cursor-pointer">
              Cách chỉnh sửa bài viết đã đăng?
            </summary>
            <p className="mt-2 text-sm dark:text-gray-400">
              Chọn bài viết → Nhấn "Chỉnh sửa".
            </p>
          </details>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm dark:text-gray-400 mb-2">Vẫn cần hỗ trợ thêm?</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Liên hệ hỗ trợ
        </button>
      </div>
    </div>
  );
}

export default Help;
