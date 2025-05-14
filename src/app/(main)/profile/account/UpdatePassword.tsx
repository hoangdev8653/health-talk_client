import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ArlertDialogDescription from "@/components/ArlertDialogDescription";
import { useAppDispatch } from "@/stores/hooks";
import { userValidate } from "@/validations/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { updatePasswordThunk } from "@/stores/thunks/user";
import { toast } from "react-toastify";

function UpdatePassword() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidate.updatePassword),
  });

  const onSubmit = async (data: any) => {
    const { password, newPassword } = data;
    const result = await dispatch(
      updatePasswordThunk({ password, newPassword })
    );
    if (result.payload) {
      reset();
      toast.success("Cập nhật Mật khẩu thành công");
    }
  };

  return (
    <div className="my-5">
      <AlertDialog>
        <AlertDialogTrigger className=" bg-blue-600 px-2.5 py-1.5 rounded-xl">
          Change Password
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-gray-100">
          <AlertDialogHeader>
            <ArlertDialogDescription>
              <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100">
                <div className="my-4">
                  <label>Old Password</label>
                  <input
                    {...register("password")}
                    title="old password"
                    type="password"
                    className={`px-3 py-2 w-full border-gray-200 border-[1px] border-solid bg-white text-black ${
                      errors.password ? "border-red-500" : ""
                    }`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Mật khẩu mới */}
                <div className="my-4">
                  <label>New Password</label>
                  <input
                    {...register("newPassword")}
                    title="new password"
                    type="password"
                    className={`px-3 py-2 w-full border-gray-200 border-[1px] border-solid ${
                      errors.newPassword ? "border-red-500" : ""
                    }`}
                  />
                  {errors.newPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.newPassword.message}
                    </p>
                  )}
                </div>

                {/* Xác nhận mật khẩu mới */}
                <div className="my-4">
                  <label>Confirm New Password</label>
                  <input
                    {...register("confirmNewPassword")}
                    title="confirm new password"
                    type="password"
                    className={`px-3 py-2 w-full border-gray-200 border-[1px] border-solid ${
                      errors.confirmNewPassword ? "border-red-500" : ""
                    }`}
                  />
                  {errors.confirmNewPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmNewPassword.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-end gap-2">
                  <AlertDialogCancel className="bg-red-500 text-white rounded font-semibold px-4 py-2">
                    Cancel
                  </AlertDialogCancel>
                  <button
                    type="submit"
                    className="bg-green-500 text-white font-semibold rounded px-4 py-2"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </ArlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default UpdatePassword;
