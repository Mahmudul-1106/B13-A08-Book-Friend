"use client";
import React from "react";
import NavLink from "./NavLink";
import logo from "@/assets/logo.png";
import userAvatar from "@/assets/user.png";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  return (
    <div className="container px-2 mx-auto flex items-center flex-col  sm:flex-row justify-between gap-4 mt-6">
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={50} height={50}></Image>
        </Link>
      </div>
      <ul className="flex justify-between font-semibold items-center text-gray-700 gap-3">
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
      <div>
        {/* Login/Logout option */}
        {isPending ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : user ? (
          <div className="flex items-center gap-2">
            <h2>Hello, {user.name}</h2>
            <Image
              src={user.image || userAvatar}
              alt="User avatar"
              width={30}
              height={30}
              className="rounded-md"
            />
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
