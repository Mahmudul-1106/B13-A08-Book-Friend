"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold text-slate-800">Something went wrong!</h2>
      <p className="text-slate-500 mb-4">{error.message}</p>
      <button 
        className="btn btn-primary" 
        onClick={() => reset()} // Tries to re-render the page
      >
        Try Again
      </button>
    </div>
  );
}