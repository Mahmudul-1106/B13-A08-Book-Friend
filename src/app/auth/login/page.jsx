"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    if (error === "login_required") {
      toast.error("Please login first to access that page!", {
        id: "login-toast", // Prevents double toasts
      });
    }
  }, [error]);

  const googleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFunc = async (data) => {
    console.log(data, "data");

    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(res, error);

    if (error) {
      alert(error.message);
    }

    if (res) {
      toast.success("Signin successful");
      // alert("Signin successful");
    }
  };

  return (
    <div className="container mt-5 py-5 mx-auto min-h-[80vh] flex flex-col items-center bg-slate-100">
      <div>
        {/* Google */}
        <button
          onClick={googleSignIn}
          className="btn w-[310px] bg-white text-black border-[#e5e5e5] rounded-lg"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>

      <div className="py-2 mx-auto flex justify-center items-center bg-slate-100">
        <div className="p-4 rounded-xl bg-white">
          <h2 className="font-bold text-3xl text-center mb-6">
            Login your account
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                className="input"
                placeholder="Type here email"
                {...register("email", {
                  required: "Email field is required",
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset relative">
              <legend className="fieldset-legend">Password</legend>
              <input
                type={isShowPassword ? "text" : "password"}
                className="input"
                placeholder="Type here password"
                {...register("password", {
                  required: "Password field is required",
                })}
              />
              <span
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </fieldset>

            <button className="btn w-full bg-slate-800 text-white">
              Login
            </button>
          </form>

          <p className="mt-4">
            Don't have an account?{" "}
            <Link href={"/auth/register"} className="text-blue-500">
              Register
            </Link>
          </p>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default LoginPage;
