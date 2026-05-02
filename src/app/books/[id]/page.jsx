import BorrowButton from "@/components/BorrowButton";
import { auth } from "@/lib/auth";
import { getBookDetailsById } from "@/lib/data";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const bookDetailsPage = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { id } = await params;
  //   console.log("params Id", id);
  const bookInfo = await getBookDetailsById(id);
  //   console.log("bookDetails", bookInfo);
  const {
    title,
    author,
    description,
    category,
    available_quantity,
    image_url,
  } = bookInfo;

  return (
    <div className="hero bg-base-200 min-h-screen mt-5">
      <div className="hero-content gap-10 flex-col lg:flex-row">
        <Image
          src={image_url}
          alt="Book Image"
          width={600}
          height={300}
          className="max-w-sm max-h-[500px] rounded-lg shadow-2xl"
        ></Image>
        <div>
          <h1 className="text-4xl font-bold">{title}</h1>
          <h1 className="text-2xl font-bold text-sky-600">Author: {author}</h1>

          <p className="py-6">{description}</p>
          <h1 className="text-xl font-bold ">
            Available Quantity: {available_quantity} Copies Left
          </h1>
          <BorrowButton isLoggedIn={!!session} />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default bookDetailsPage;
