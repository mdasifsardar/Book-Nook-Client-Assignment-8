import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      {/* Section Header Skeleton */}
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <Skeleton className="mx-auto h-10 w-48" />
        <Skeleton className="mx-auto h-4 w-full max-w-xl" />
        <Skeleton className="mx-auto h-4 w-3/4" />
      </div>

      {/* Cards Grid Skeleton */}
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-4 rounded-xl border p-4">
            <Skeleton className="h-52 w-full rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Loading;
