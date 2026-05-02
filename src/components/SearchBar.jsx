"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [term, setTerm] = useState(searchParams.get("query") || "");

  const handleSearch = (e) => {
    e.preventDefault();

    // 1. Prepare the URL parameters
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    // 2. Update the URL to filter the books
    replace(`/allbooks?${params.toString()}`);

    // 3. Clear the input field for the next search
    setTerm("");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex justify-center mb-8 gap-2 px-4"
    >
      <input
        type="text"
        placeholder="Search for books by title..."
        className="input input-bordered w-full max-w-2xl shadow-md bg-white text-black"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit" className="btn btn-primary shadow-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
