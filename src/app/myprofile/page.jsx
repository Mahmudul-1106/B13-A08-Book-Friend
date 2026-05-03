import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";

const myProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Safety check: if no session, user might be null
  const user = session?.user;

  if (!user) {
    return (
      <div className="text-center mt-20 text-2xl">
        Please log in to view your profile.
      </div>
    );
  }

  return (
    <div className=" py-10 mt-5  bg-slate-200">
      <p className="py-6 text-2xl text-blue-950 font-semibold text-center">
        Welcome to BookFriend! Profile Information:
      </p>
      <div className=" flex items-center justify-center gap-10 flex-col lg:flex-row">
        {/* Use SafeImage instead of Image */}
        <SafeImage
          src={user.image}
          alt="Profile Image"
          width={300}
          height={500}
          unoptimized
          className="max-w-sm h-[350px] rounded-lg shadow-2xl object-cover"
        />

        <div className="px-2">
          <h1 className="text-3xl text-blue-900 font-bold">{user.name}</h1>
          <h1 className="text-xl text-blue-950 font-bold py-5">
            Email: {user.email}
          </h1>
          <h1 className="text-xl font-bold">
            {/* Fix: Convert Date object to String */}
            Account Created On: {new Date(user.createdAt).toDateString()}
          </h1>
          <h1 className="text-xl font-bold">
            {/* Fix: Convert Date object to String */}
            Account Updated On: {new Date(user.updatedAt).toDateString()}
          </h1>
          <Link href={"/myprofile/update"}>
            <button className="btn btn-primary mt-2">Update Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default myProfilePage;
