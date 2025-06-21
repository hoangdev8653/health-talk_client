"use client";
import Image from "next/image";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useAppDispatch } from "@/stores/hooks";
import { registerThunk } from "@/stores/thunks/user";
import { userValidate } from "@/validations/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { FaLock, FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

function Register() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidate.register),
  });

  const onSubmit = async (data: any) => {
    const result = await dispatch(registerThunk(data));
    if (result.type === "user/dang-ki/fulfilled") {
      toast.success("Đăng Kí thành công");
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    }
  };
  return (
    <div
      style={{ background: "linear-gradient(-135deg, #c850c0, #4158d0)" }}
      className="w-full min-h-screen flex flex-wrap justify-center items-center p-[15px]"
    >
      <div className="bg-white w-[960px] rounded-xl overflow-hidden  h-[600px]">
        <div className="flex flex-wrap justify-around items-center my-auto h-full">
          <div className="w-[290px] my-auto">
            <div className="mx-auto text-center">
              <p className="text-black font-semibold text-3xl">
                Member Register
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="my-16">
                <div className="block my-4 relative">
                  <input
                    {...register("username")}
                    style={{ color: "#666666", background: "#e6e6e6" }}
                    className="rounded-full w-[290px] h-[50px] pl-[40px] border-none focus:outline-none focus:ring-0"
                    type="text"
                    placeholder="Username"
                  />
                  <div className="absolute top-1/2 transform -translate-y-1/2 left-5">
                    <FaUser className="text-gray-400 text-sm" />
                  </div>
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.username.message}
                    </p>
                  )}
                </div>

                <div className="block my-4 relative">
                  <input
                    {...register("email")}
                    style={{ color: "#666666", background: "#e6e6e6" }}
                    className="rounded-full w-[290px] h-[50px] pl-[40px] border-none focus:outline-none focus:ring-0"
                    type="email"
                    placeholder="Email"
                  />
                  <div className="absolute top-1/2 transform -translate-y-1/2 left-5">
                    <MdEmail className="text-gray-400 text-sm" />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="block my-4 relative">
                  <input
                    {...register("password")}
                    style={{ color: "#666666", background: "#e6e6e6" }}
                    className="rounded-full w-[290px] h-[50px] pl-[40px] border-none focus:outline-none focus:ring-0"
                    type="password"
                    placeholder="Password"
                  />
                  <div className="absolute top-1/2 transform -translate-y-1/2 left-5">
                    <FaLock className="text-gray-400 text-sm" />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  style={{ background: "#57b846" }}
                  className="text-white rounded-full w-[290px] h-[50px] text-lg font-semibold my-4"
                >
                  Register
                </Button>

                {/* <div className="flex gap-1 text-center justify-center">
                  <p style={{ color: "#999999" }} className="text-base">
                    Forgot
                  </p>
                  <a
                    className="hover:text-green-400 text-gray-600 text-base"
                    href="/forgotPassword"
                  >
                    Password?
                  </a>
                </div> */}
              </form>

              <a
                href="/login"
                className="text-center justify-center text-base text-gray-500 flex gap-2 hover:opacity-65 cursor-pointer"
              >
                <FaArrowLeftLong className="mt-1 text-base" />
                <p>Login </p>
              </a>
            </div>
          </div>

          <div className="w-[316px] my-auto">
            <Image
              width={316}
              height={289}
              src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
              alt="login"
              className="w-[316px] h-[289px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
