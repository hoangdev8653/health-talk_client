import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  getAllCategoryThunk,
  createCategoryThunk,
  deleteCategoryThunk,
} from "@/stores/thunks/category";
import formatDate from "@/utils/formatDate";
import Image from "next/image";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTrigger,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { categoryValidate } from "@/validations/category";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";

function Category() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.category);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllCategoryThunk());
    };
    fetchData();
  }, []);

  const filteredCategory = data?.data?.content?.filter((item: any) =>
    item?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];
    // const fileUrl = URL.createObjectURL(file);
    // console.log("fileUrl", file);

    setImageUrl(URL.createObjectURL(file));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(categoryValidate.createCategory),
  });
  const onSubmit = async (data: any) => {
    console.log("data", imageUrl);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    if (imageUrl) {
      formData.append("image", imageUrl);
    }

    const result = await dispatch(createCategoryThunk(formData));
    // if (result.type === "category/create-category/fulfilled") {
    //   dispatch(getAllCategoryThunk());
    // }
    // console.log("result", result);
  };

  const handleDeleteCategory = async (id: string) => {
    const result = await dispatch(deleteCategoryThunk(id));
    if (result.type === "category/delete-category/fulfilled") {
      dispatch(getAllCategoryThunk());
    }
  };
  return (
    <div className="bg-white dark:bg-[#181818] rounded-2xl  p-6 my-8 w-full">
      <div className="flex justify-between">
        <p className="font-bold text-xl mx-4">Danh sách thể loại</p>
        <div className="flex gap-2 items-center ">
          <div className="flex items-center border border-gray-400 rounded-full px-2 py-1 w-72 bg-gray-200">
            <CiSearch className="text-2xl text-black font-bold cursor-pointer hover:opacity-60" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search By Name Category"
              className="bg-gray-200 rounded-full px-1.5 py-1 focus:outline-none w-full dark:text-black"
            />
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="bg-blue-500 hover:bg-blue-600 rounded-2xl text-white font-semibold px-5 py-2  shadow-md transition">
                New Category
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-gray-100 w-[700px] max-w-[700px]">
              <AlertDialogTitle className="text-xl font-bold mb-4 text-center text-gray-800">
                Tạo chuyên mục mới
              </AlertDialogTitle>
              <form onSubmit={handleSubmit(onSubmit)}>
                <AlertDialogDescription asChild>
                  <div className="bg-gray-100 w-full px-6">
                    <div className="my-4 flex gap-2 ">
                      <div className="w-1/2">
                        <label>Name</label>
                        <input
                          {...register("name")}
                          title="Name"
                          type="text"
                          className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div className="w-1/2">
                        <label>Image</label>
                        <input
                          {...register("image")}
                          title="image"
                          type="file"
                          name="image"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                        {errors.image && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.image.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="my-4 ">
                      <label className="block font-semibold text-slate-700">
                        Description
                      </label>
                      <textarea
                        {...register("description")}
                        title="description"
                        className="p-2 border-solid border-2 border-gray-100 rounded w-full h-40 focus:outline-none"
                      />
                      {errors.description && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.description.message}
                        </p>
                      )}
                    </div>
                  </div>
                </AlertDialogDescription>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-red-500 text-white rounded font-semibold ">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    type="submit"
                    className="bg-green-500 text-black font-semibold rounded"
                  >
                    Save
                  </AlertDialogAction>
                </AlertDialogFooter>
              </form>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full my-2 h-[550px] overflow-y-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3  text-center">
                Image
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                CreateAt
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCategory?.map((item: any, index: number) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
              >
                <th className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <Image
                    className="object-cover w-40 h-40"
                    width={100}
                    height={100}
                    src={item?.image}
                    alt={item?.slug}
                  />
                </th>
                <td className="px-6 py-4 text-center">{item?.name}</td>
                <td className="px-6 py-4 text-center">
                  {item?.description?.slice(0, 100)} ...
                </td>
                <td className="px-6 py-4  text-center">
                  {formatDate(item?.createdAt)}
                </td>
                <td className="px-6 py-4  text-center ">
                  <div className="flex gap-2">
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <MdEdit className="text-2xl text-green-600 hover:opacity-65 cursor-pointer" />
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-gray-100">
                        <AlertDialogTitle className="text-xl font-bold mb-4 text-center text-gray-800">
                          Chỉnh sửa chuyên mục
                        </AlertDialogTitle>
                        <AlertDialogDescription asChild>
                          <div className="bg-gray-100 w-full">
                            <div className="my-4 flex gap-2">
                              <div className="w-1/2">
                                <label>Tên chuyên mục</label>
                                <input
                                  title="category name"
                                  type="text"
                                  className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black"
                                  defaultValue={item?.name}
                                />
                              </div>
                              <div className="w-1/2">
                                <label>Ảnh</label>
                                <input
                                  title="image"
                                  type="file"
                                  className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black"
                                />
                              </div>
                            </div>
                            <div className="my-4">
                              <label>Mô tả</label>
                              <textarea
                                title="description"
                                className="p-2 border-solid border-2 border-gray-100 rounded w-full h-32 focus:outline-none"
                                defaultValue={item?.description}
                              />
                            </div>
                          </div>
                        </AlertDialogDescription>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="bg-red-500 text-white rounded font-semibold ">
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction className="bg-green-500 text-black font-semibold rounded">
                            Save
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <MdDeleteForever
                          className=" text-2xl text-red-600 opacity-100 hover:opacity-65 cursor-pointer"
                          // onClick={() => setSelectedUser(item)}
                        />
                      </AlertDialogTrigger>{" "}
                      <AlertDialogContent className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                        <AlertDialogTitle className="text-xl font-bold mb-6 text-center text-gray-800">
                          Xác nhận xóa danh mục
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Bạn có chắc chắn muốn xóa danh mục{" "}
                          <span className="font-semibold">{item?.name}</span>{" "}
                          không?
                        </AlertDialogDescription>
                        <AlertDialogFooter className="flex justify-end gap-4">
                          <AlertDialogCancel className="bg-gray-300 text-black font-semibold rounded-lg px-6 py-2 hover:bg-gray-400 transition">
                            Hủy
                          </AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDeleteCategory(item?.id)}
                            className="bg-red-500 text-white font-semibold rounded-lg px-6 py-2 hover:bg-red-600 transition"
                          >
                            Xóa
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Category;
