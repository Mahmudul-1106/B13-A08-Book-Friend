import { Button } from "@heroui/react";
import {TrashBin} from "@gravity-ui/icons";
import Image from "next/image";
import { getBooks, upcomingBooks } from "@/lib/data";
import BookCard from "@/components/BookCard";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Faq from "@/components/Faq";

export default async function Home() {
  const books = await getBooks();
  const comingBooks = await upcomingBooks();
  console.log('comingBooks', comingBooks )
  const featuredBooks = books.slice(0, 4);
  // console.log('featuredBooks', featuredBooks)
  return (
    <div className="mt-5 bg-base-200 container mx-auto">
      <p className=" py-5 text-3xl font-bold text-center ">Find Your Next Read</p>
      <Link href={"/allbooks"} className="mx-auto flex justify-center">
      <button className="btn btn-primary   text-center">Browse Now</button>
       </Link>

       <div className="mt-5 flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto">
      <button className="btn bg-red-500 text-white">Latest Books</button>
      <Marquee pauseOnHover={true} speed={50}>
        {books.map((n) => (
          <span key={n._id} className="flex items-center">
      <span className="mx-6">{n.title}</span>
      <span className="text-red-500">●</span> 
    </span>
        ))}
      </Marquee>
    </div>
        <h2 className="text-3xl font-bold m-6 text-center">Featured Books</h2>
    <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {featuredBooks.map(book => <BookCard key={book.id} book={book}></BookCard>)}
    </div>
    {/* Upcoming Books */}
        <div className="bg-sky-100 mt-10 py-10">
          <h2 className="text-3xl font-bold m-6 text-center text-blue-950">Upcoming Books...</h2>
    <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {comingBooks.map(book => <BookCard key={book.id} book={book}></BookCard>)}
    </div>
        </div>

        {/* FAQ Section */}
        <div>
          <Faq></Faq>
        </div>
    </div>
    
  );
}
