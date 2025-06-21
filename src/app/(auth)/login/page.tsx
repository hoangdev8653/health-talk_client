"use client";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { useAppDispatch } from "@/stores/hooks";
import { loginThunk } from "@/stores/thunks/user";
import { userValidate } from "@/validations/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidate.login),
  });

  const onSubmit = async (data: any) => {
    const result = await dispatch(loginThunk(data));
    if (result.type === "user/dang-nhap/fulfilled") {
      toast.success("Đăng nhập thành công");
      setTimeout(() => {
        router.push("/");
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
          <div className="w-[316px] my-auto">
            <Image
              width={316}
              height={289}
              src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
              alt="login"
              className="w-[316px] h-[289px] object-cover"
            />
          </div>
          <div className="w-[290px] my-auto">
            <div className="mx-auto text-center">
              <p className="text-black font-semibold text-3xl">Member Login</p>
              <form onSubmit={handleSubmit(onSubmit)} className="my-16">
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
                  Login
                </Button>
                <div className="flex gap-1 text-center justify-center">
                  <p style={{ color: "#999999" }} className="text-base">
                    Forgot
                  </p>
                  <a
                    className="hover:text-green-400 text-gray-600 text-base"
                    href="/forgotPassword"
                  >
                    Password?
                  </a>
                </div>
              </form>
              <a
                href="/register"
                className="text-center justify-center text-base text-gray-500 flex gap-2 hover:opacity-65 cursor-pointer"
              >
                <p>Create your Account </p>
                <FaArrowRightLong className="mt-1 text-base" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
