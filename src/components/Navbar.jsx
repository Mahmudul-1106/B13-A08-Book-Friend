"use client";
import React from "react";
import NavLink from "./NavLink";
import logo from "@/assets/logo.png";
import userAvatar from "@/assets/user.png";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import SafeImage from "./SafeImage";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  return (
    <div className="container px-2 mx-auto flex items-center flex-col  sm:flex-row justify-between gap-4 mt-6">
      <div className="flex flex-1 ">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={50} height={50}></Image>
        </Link>
      </div>
      <ul className="flex flex-1 justify-center font-semibold items-center text-gray-700 gap-3">
        <li>
          <NavLink href={"/"} className={" p-2 rounded-sm"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink href={"/allbooks"} className={" p-2 rounded-sm"}>
            All Book
          </NavLink>
        </li>
        <li>
          <NavLink href={"/myprofile"} className={" p-2 rounded-sm"}>
            My Profile
          </NavLink>
        </li>
      </ul>
      <div className="flex flex-1 justify-end items-end">
        {/* Login/Logout option */}
        {isPending ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : user ? (
          <div className="flex items-center gap-2">
            <h2>Hello, {user.name}</h2>
            {/* <Image
              src={user.image || userAvatar}
              alt="User avatar"
              width={40}
              height={40}
              className="rounded-md w-[40px] h-[40px]"
            /> */}
            {session?.user?.image && (
              <SafeImage
                key={user.image}
                src={user.image}
                alt="Profile Image"
                width={40}
                height={40}
                className="max-w-sm w-[40px] h-[40px] rounded-lg shadow-2xl object-cover"
              ></SafeImage>
            )}

            <button
              className="btn bg-purple-500 text-white"
              onClick={async () => await authClient.signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <button className="btn bg-purple-500 text-white">
            <Link href={"/auth/login"}>Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
