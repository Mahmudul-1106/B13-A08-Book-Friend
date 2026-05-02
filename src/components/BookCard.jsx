import Image from "next/image";
import Link from "next/link";
import React from "react";
import BookDetails from "./BookDetails";

const bookCard = ({ book }) => {
  console.log(book);
  return (
    <div className="card  bg-base-100 shadow-sm w-full">
      <figure className="flex justify-center px-0 pt-5 w-[250px] h-[300px] mx-auto">
        <Image
          src={book.image_url}
          alt="Book"
          width={200}
          height={200}
          className="flex justify-center w-full h-full mx-auto"
        ></Image>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{book.title}</h2>
        <p>Author: {book.author}</p>

        <div className="card-actions">
          <Link href={`/books/${book.id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default bookCard;
