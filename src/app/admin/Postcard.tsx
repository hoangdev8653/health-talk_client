import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React, { useEffect } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { getAllPostcardThunk } from "@/stores/thunks/postcard";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import Image from "next/image";
import formatDate from "@/utils/formatDate";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

function Postcard() {
  const dispatch = useAppDispatch();
  const postcard = useAppSelector((state) => state.postcard);
  const [searchTerm, setSearchTerm] = React.useState("");

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllPostcardThunk());
    };
    fetchData();
  }, []);

  const filteredPostcards = postcard?.data?.data?.content?.filter((item: any) =>
    item?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl p-6 my-8 w-full">
        <div className="flex justify-between">
          <p className="font-bold text-xl mx-4">All Postcards</p>
          <div className="flex gap-2 items-center">
            <div className="flex items-center border border-gray-400 rounded-full px-2 py-1 w-72 bg-gray-200">
              <CiSearch className="text-2xl text-black font-bold cursor-pointer hover:opacity-60" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search By Name Postcard"
                className="bg-gray-200 rounded-full px-1.5 py-1 focus:outline-none w-full"
              />
            </div>

            <Link href="/post">
              <button className="bg-blue-500 hover:bg-blue-600 rounded-2xl text-white font-semibold px-5 py-2  shadow-md transition">
                New Postcard
              </button>
            </Link>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full my-2">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3 text-center">Title</th>
                <th className="px-6 py-3 text-center">Image</th>
                <th className="px-6 py-3 text-center">Decription</th>
                <th className="px-6 py-3 text-center">CreatedAt</th>
                <th className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredPostcards?.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="odd:bg-white even:bg-gray-100 border-b border-gray-200 dark:border-gray-700"
                >
                  <td className="px-6 py-4 text-center">{item?.title}</td>
                  <td className="text-center px-6 py-4">
                    <Image
                      className="object-cover w-48 h-36"
                      width={100}
                      height={100}
                      src={item?.image}
                      alt={item?.id}
                    />
                  </td>
                  <td className="px-6 py-4 text-center">
                    {item?.decription?.slice(0, 100)}...
                  </td>
                  <td className="px-6 py-4 text-center">
                    {formatDate(item?.createdAt)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex gap-2 justify-center">
                      <AlertDialog>
                        <AlertDialogTrigger>
                          <MdEdit className="text-2xl text-green-600 hover:opacity-65 cursor-pointer" />
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-gray-100">
                          <AlertDialogDescription>
                            <div className="bg-gray-100 w-full">
                              <div className="my-4 flex gap-2">
                                <div className="w-1/2">
                                  <label>Title</label>
                                  <input
                                    title="title"
                                    type="text"
                                    className="px-3 py-2 w-full border-gray-200 border bg-white text-black"
                                  />
                                </div>
                                <div className="w-1/2">
                                  <label>User</label>
                                  <input
                                    title="user"
                                    type="text"
                                    className="px-3 py-2 w-full border-gray-200 border bg-white text-black"
                                  />
                                </div>
                              </div>
                              <div className="my-4 flex gap-2">
                                <div className="w-1/2">
                                  <label>Category</label>
                                  <select
                                    title="role"
                                    className="w-full border-gray-200 border bg-white text-black p-2"
                                  >
                                    <option value="user">user</option>
                                    <option value="admin">admin</option>
                                  </select>
                                </div>
                                <div className="w-1/2">
                                  <label>Status</label>
                                  <input
                                    title="status"
                                    type="text"
                                    className="px-3 py-2 w-full border-gray-200 border bg-white text-black"
                                  />
                                </div>
                              </div>
                            </div>
                          </AlertDialogDescription>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="bg-red-500 text-white rounded font-semibold">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction className="bg-green-500 text-black font-semibold rounded">
                              Save
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      <MdDeleteForever className="text-2xl text-red-600 hover:opacity-65 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Postcard;
