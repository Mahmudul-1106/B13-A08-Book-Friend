"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [term, setTerm] = useState(searchParams.get("query") || "");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    // This updates the URL to /allbooks?query=yourtext
    replace(`/allbooks?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center mb-8 gap-2">
      <input
        type="text"
        placeholder="Search for books by title..."
        className="input input-bordered w-full max-w-2xl shadow-md"
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
