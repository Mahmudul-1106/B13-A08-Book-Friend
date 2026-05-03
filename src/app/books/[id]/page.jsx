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

  if (id > 12) {
    return (
      <div>
        <h2 className="mt-5 text-3xl font-bold py-20 text-center bg-green-100 text-primary">
          Book Is Coming Soon...
        </h2>
      </div>
    );
  }

  const bookInfo = await getBookDetailsById(id);
  //   console.log("bookDetails", bookInfo);

  // If fetching failed or book doesn't exist, show a friendly message
  if (!bookInfo) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-red-500">
          Book not found or server error.
        </h2>
        <p>Please try again later.</p>
      </div>
    );
  }

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
          unoptimized
          className="mx-auto max-w-[250px] max-h-[350px] md:max-w-72 md:max-h-[400px] rounded-lg shadow-2xl"
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
    </div>
  );
};

export default bookDetailsPage;
