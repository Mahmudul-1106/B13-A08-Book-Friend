export default function Loading() {
  // Create an array of 8 items to represent 8 book cards
  const skeletons = Array.from({ length: 8 });

  return (
    <div className="container mx-auto px-4 py-10 mt-5">
      {/* 1. Header Skeleton */}
      <div className="flex flex-col items-center mb-10 space-y-4">
        <div className="h-8 w-64 bg-slate-300 animate-pulse rounded-md"></div>
        <div className="h-4 w-48 bg-slate-200 animate-pulse rounded-md"></div>
      </div>

      {/* 2. Grid for Book Card Skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skeletons.map((_, index) => (
          <div
            key={index}
            className="card bg-white shadow-xl border border-slate-100 flex flex-col"
          >
            {/* Image Skeleton */}
            <div className="w-full h-48 bg-slate-300 animate-pulse rounded-t-xl"></div>

            <div className="card-body p-5 space-y-3">
              {/* Title Skeleton */}
              <div className="h-6 w-3/4 bg-slate-300 animate-pulse rounded"></div>

              {/* Author/Description Skeleton */}
              <div className="space-y-2">
                <div className="h-4 w-full bg-slate-200 animate-pulse rounded"></div>
                <div className="h-4 w-5/6 bg-slate-200 animate-pulse rounded"></div>
              </div>

              {/* Button Skeleton */}
              <div className="card-actions justify-end mt-4">
                <div className="h-10 w-24 bg-slate-300 animate-pulse rounded-lg"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
