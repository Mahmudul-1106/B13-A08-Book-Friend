import { getBooks } from "@/lib/data";
import BookCard from "@/components/BookCard";
import React from "react";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";

const allBooksPage = async ({ searchParams }) => {
  const books = await getBooks();
  const { category, query } = await searchParams; // Read query from URL

  // 1. Filter by Category first
  let filtered = category
    ? books.filter((book) => book.category === category)
    : books;

  // 2. Filter by Search Query second
  if (query) {
    filtered = filtered.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase()),
    );
  }

  return (
    <div className="container  mx-auto gap-6 mt-5 bg-slate-200 py-5 rounded-lg">
      <div className=" grid grid-cols-12   ">
        <aside className="mx-2 rounded-lg col-span-12 md:col-span-3 bg-white p-4  shadow-sm h-fit">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Categories</h2>
          <ul className="space-y-2">
            <li
              className={`p-3 rounded-lg ${!category ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
            >
              <Link href="/allbooks" className="block">
                All Books
              </Link>
            </li>
            {/* Science Books Link */}
            <li
              className={`p-3 rounded-lg transition-all ${category === "Science" ? "bg-blue-600 text-white" : "hover:bg-gray-200"}`}
            >
              <Link href="/allbooks?category=Science" className="block w-full">
                Science Books
              </Link>
            </li>

            {/* Story Books Link */}
            <li
              className={`p-3 rounded-lg transition-all ${category === "Story" ? "bg-blue-600 text-white" : "hover:bg-gray-200"}`}
            >
              <Link href="/allbooks?category=Story" className="block w-full">
                Story Books
              </Link>
            </li>

            {/* Tech Books Link */}
            <li
              className={`p-3 rounded-lg transition-all ${category === "Tech" ? "bg-blue-600 text-white" : "hover:bg-gray-200"}`}
            >
              <Link href="/allbooks?category=Tech" className="block w-full">
                Tech Books
              </Link>
            </li>
          </ul>
        </aside>

        {/* Books Display */}
        <main className="col-span-12 md:col-span-9  p-6 bg-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {query
              ? `Search Results for "${query}"`
              : category
                ? `${category} Books`
                : "All Books"}
          </h2>
          <SearchBar></SearchBar>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-xl text-gray-500">
                No books found matching your criteria.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default allBooksPage;
