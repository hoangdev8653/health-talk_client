import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  getAllCategoryThunk,
  createCategoryThunk,
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
} from "@/components/ui/alert-dialog";
import FormSearch from "@/components/formSearch";
import { categoryValidate } from "@/validations/category";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function Category() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.category);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getAllCategoryThunk());
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    // console.log(fileUrl);
    setImageUrl(fileUrl);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(categoryValidate.createCategory),
  });
  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("image", imageUrl);

    // const result = await dispatch(createCategoryThunk(formData));
    // if (result.type === "category/create-category/fulfilled") {
    //   dispatch(getAllCategoryThunk());
    // }
    console.log("result", formData);

    // console.log(...data, imageUrl);
    // console.log({ ...data, image: imageUrl });
  };

  return (
    <div className="bg-white rounded-2xl  p-6 my-8 w-full">
      <div className="flex justify-between">
        <p className="font-bold text-xl mx-4">All Categorys</p>
        <div className="flex gap-2 ">
          <FormSearch placholder="Search By Name Category" />
          <AlertDialog>
            <AlertDialogTrigger>
              <button
                className="bg-blue-500 hover:bg-blue-600 rounded-2xl text-white font-semibold px-5 py-2  shadow-md transition"
                onClick={() => console.info("Redirect to add new article page")}
              >
                New Category
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-gray-100 w-[700px] max-w-[700px]">
              <form onSubmit={handleSubmit(onSubmit)}>
                <AlertDialogDescription>
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
                        <label>Iamge</label>
                        <input
                          {...register("image")}
                          title="image"
                          type="file"
                          name="image"
                          accept="image/*"
                          onChange={handleFileChange}
                          // ref={fileInputRef}
                          // style={{ display: "none" }}
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
                        Decription
                      </label>
                      <textarea
                        {...register("description")}
                        title="decription"
                        className="p-2 border-solid border-2 border-gray-100 rounded w-full h-32 focus:outline-none"
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full my-2">
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
            {data?.data?.content?.map((item: any, index: number) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
              >
                <th className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <Image
                    className="object-cover w-36 h-36"
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
                    <div>
                      <AlertDialog>
                        <AlertDialogTrigger>
                          <MdEdit className="text-2xl text-green-600 hover:opacity-65 cursor-pointer" />
                        </AlertDialogTrigger>

                        <AlertDialogContent className="bg-gray-100">
                          <AlertDialogDescription>
                            <div className="bg-gray-100 w-full">
                              <div className="my-4 flex gap-2">
                                <div className="w-1/2">
                                  <label>User name</label>
                                  <input
                                    title="user name"
                                    type="text"
                                    className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black"
                                  />
                                </div>
                                <div className="w-1/2">
                                  <label>Email</label>
                                  <input
                                    title="Email"
                                    type="email"
                                    className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black"
                                  />
                                </div>
                              </div>
                              <div className="my-4 flex gap-2">
                                <div className="w-1/2 ">
                                  <label form="user">Role</label>
                                  <select
                                    title="role"
                                    className="gap-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black p-2"
                                    id="user"
                                    name="carlist"
                                    form="carform"
                                  >
                                    <option value="user">user</option>
                                    <option value="admnin">admin</option>
                                  </select>
                                </div>
                                <div className="w-1/2">
                                  <label>status</label>
                                  <input
                                    title="Email"
                                    type="email"
                                    className="px-3 py-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black"
                                  />
                                </div>
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
                    </div>
                    <MdDeleteForever className="text-2xl text-red-600 hover:opacity-65 cursor-pointer" />
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
