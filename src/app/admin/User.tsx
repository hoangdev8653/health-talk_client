import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  getAllUserThunk,
  updateRoleThunk,
  deleteUserThunk,
} from "@/stores/thunks/user";
import { blockUserThunk } from "@/stores/thunks/managerUser";
import formatDate from "@/utils/formatDate";
import Image from "next/image";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
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
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { toast } from "react-toastify";
import useLocalStorageUser from "@/components/UseLocalStorageUser";

function User() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userRole, setUserRole] = useState("");
  const [reasonBlock, setReasonBlock] = useState("");
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.user);
  const user = useLocalStorageUser();

  useEffect(() => {
    dispatch(getAllUserThunk());
  }, []);

  const filteredUsers = data?.data?.content?.filter((item: any) =>
    item?.username?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChangeRole = async () => {
    if (!selectedUser || !userRole) return;
    const result = await dispatch(
      updateRoleThunk({ id: selectedUser.id, role: userRole })
    );
    if ((result.payload as { status: number }).status === 200) {
      toast.success("Cập nhật thành công");
    }
    dispatch(getAllUserThunk());
  };

  const handleLockUser = async (userId: string) => {
    if (!userId) return;
    const result = await dispatch(
      blockUserThunk({ userBlockedId: userId, blockReason: reasonBlock })
    );
    if ((result.payload as { status: number }).status === 201) {
      toast.success("Khóa user thành công");
      dispatch(getAllUserThunk());
    } else {
      toast.error("Có lỗi xảy ra khi khóa user");
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!userId) return;
    const result = await dispatch(deleteUserThunk(userId));
    if ((result.payload as { status: number }).status === 200) {
      toast.success("Xóa user thành công!");
      dispatch(getAllUserThunk());
    } else {
      toast.error("Có lỗi xảy ra khi xóa user");
    }
  };

  return (
    <div className="bg-white dark:bg-[#181818] rounded-2xl p-6 my-8 w-full">
      <div className="flex justify-between">
        <p className="font-bold text-xl mx-4">Danh sách người dùng</p>
        <div className="flex gap-2 items-center">
          <div className="flex items-center border border-gray-400 rounded-full px-2 py-1 w-72 bg-gray-200">
            <CiSearch className="text-2xl text-black font-bold cursor-pointer hover:opacity-60" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search user by name"
              className="bg-gray-200 rounded-full px-1.5 py-1 focus:outline-none w-full dark:text-gray-200"
            />
          </div>
          <Link href="/register">
            <button className="bg-blue-500 hover:bg-blue-600 rounded-2xl text-white font-semibold px-5 py-2 shadow-md transition">
              New User
            </button>
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full my-2 h-[550px] overflow-y-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3 text-center">Image</th>
              <th className="px-6 py-3 text-center">Name</th>
              <th className="px-6 py-3 text-center">Email</th>
              <th className="px-6 py-3 text-center">Role</th>
              <th className="px-6 py-3 text-center">CreateAt</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((item: any, index: number) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
              >
                <td className="text-center px-6 py-4">
                  <Image
                    className="object-cover w-36 h-36 rounded-full mx-auto"
                    width={100}
                    height={100}
                    src={item?.image || "/images/avatar_default.jpg"}
                    alt={item?.id}
                  />
                </td>
                <td className="px-6 py-4 text-center">{item?.username}</td>
                <td className="px-6 py-4 text-center">{item?.email}</td>
                <td className="px-6 py-4 text-center">{item?.role}</td>
                <td className="px-6 py-4 text-center">
                  {formatDate(item?.createdAt)}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex gap-2 justify-center items-center">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <MdEdit
                          className={`${
                            user?.id === item?.id
                              ? "opacity-50"
                              : "opacity-100 hover:opacity-65 cursor-pointer"
                          } text-2xl text-green-600 `}
                          onClick={() => {
                            setSelectedUser(item);
                            setUserRole(item?.role);
                          }}
                        />
                      </AlertDialogTrigger>
                      {user?.id !== item?.id ? (
                        <AlertDialogContent className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                          <AlertDialogTitle className="text-xl font-bold mb-6 text-center text-gray-800">
                            Chỉnh sửa quyền người dùng
                          </AlertDialogTitle>
                          <AlertDialogDescription asChild>
                            <div className="mb-8">
                              <label
                                htmlFor="user-role"
                                className="block mb-2 font-medium text-gray-700"
                              >
                                Quyền
                              </label>
                              <select
                                id="user-role"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={userRole}
                                onChange={(e) => setUserRole(e.target.value)}
                              >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                              </select>
                            </div>
                          </AlertDialogDescription>
                          <AlertDialogFooter className="flex justify-end gap-4">
                            <AlertDialogCancel className="bg-red-500 text-white font-semibold rounded-lg px-6 py-2 hover:bg-red-600 transition">
                              Hủy
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={handleChangeRole}
                              className="bg-green-500 text-white font-semibold rounded-lg px-6 py-2 hover:bg-green-600 transition"
                            >
                              Lưu
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      ) : (
                        <></>
                      )}
                    </AlertDialog>

                    {user?.id === item?.id ? (
                      <IoMdLock
                        className="opacity-50 text-2xl text-blue-500 cursor-not-allowed"
                        title="Bạn không thể khóa chính mình"
                      />
                    ) : (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <IoMdLock
                            className="opacity-100 hover:opacity-65 cursor-pointer text-2xl text-blue-500"
                            onClick={() => setSelectedUser(item)}
                          />
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                          <AlertDialogTitle className="text-xl font-bold mb-6 text-center text-gray-800">
                            Xác nhận khóa tài khoản
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Bạn có chắc chắn muốn khóa người dùng{" "}
                            <span className="font-semibold">
                              {item?.username}
                            </span>{" "}
                            không?
                            <label className="block mt-4 mb-2 text-gray-700" />
                            <input
                              type="text"
                              defaultValue={reasonBlock}
                              onChange={(e) => setReasonBlock(e.target.value)}
                              title="Lý do"
                              className="w-full border-2 border-gray-500 rounded-lg px-4 py-2 text-gray-700 focus:outline-none "
                            />
                          </AlertDialogDescription>
                          <AlertDialogFooter className="flex justify-end gap-4">
                            <AlertDialogCancel className="bg-gray-300 text-black font-semibold rounded-lg px-6 py-2 hover:bg-gray-400 transition">
                              Hủy
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleLockUser(item?.id)}
                              className="bg-blue-500 text-white font-semibold rounded-lg px-6 py-2 hover:bg-blue-600 transition"
                            >
                              Khóa
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <MdDeleteForever
                          className={` ${
                            user?.id === item?.id
                              ? "opacity-50"
                              : "opacity-100 hover:opacity-65 cursor-pointer"
                          } text-2xl text-red-600`}
                          onClick={() => setSelectedUser(item)}
                        />
                      </AlertDialogTrigger>
                      {user?.id !== item?.id ? (
                        <AlertDialogContent className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                          <AlertDialogTitle className="text-xl font-bold mb-6 text-center text-gray-800">
                            Xác nhận xóa người dùng
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Bạn có chắc chắn muốn xóa user{" "}
                            <span className="font-semibold">
                              {item?.username}
                            </span>{" "}
                            không?
                          </AlertDialogDescription>
                          <AlertDialogFooter className="flex justify-end gap-4">
                            <AlertDialogCancel className="bg-gray-300 text-black font-semibold rounded-lg px-6 py-2 hover:bg-gray-400 transition">
                              Hủy
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteUser(item?.id)}
                              className="bg-red-500 text-white font-semibold rounded-lg px-6 py-2 hover:bg-red-600 transition"
                            >
                              Xóa
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      ) : (
                        <></>
                      )}
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

export default User;
