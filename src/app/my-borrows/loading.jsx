import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Header Skeleton */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row">
        <div className="space-y-3">
          <Skeleton className="h-9 w-56" />
          <Skeleton className="h-4 w-80" />
        </div>

        <Skeleton className="h-10 w-36 rounded-full" />
      </div>

      {/* Books Skeleton */}
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-xl border p-4"
          >
            <Skeleton className="h-20 w-16 rounded-md" />

            <div className="flex-1 space-y-3">
              <Skeleton className="h-5 w-1/3" />
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>

            <Skeleton className="h-9 w-20 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
