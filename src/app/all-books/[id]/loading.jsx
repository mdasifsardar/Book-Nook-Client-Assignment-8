import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      {/* Back Button */}
      <Skeleton className="mb-8 h-5 w-40" />

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        {/* Book Image */}
        <Skeleton className="h-[500px] w-full rounded-xl" />

        {/* Book Details */}
        <div className="flex flex-col gap-6">
          <Skeleton className="h-6 w-24 rounded-full" />

          <Skeleton className="h-12 w-3/4" />

          <Skeleton className="h-6 w-1/2" />

          {/* About Book */}
          <div className="space-y-4 rounded-xl border p-6">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          {/* Added By */}
          <div className="flex items-center gap-3 rounded-xl border p-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-3 w-48" />
            </div>
          </div>

          <Skeleton className="h-5 w-32" />

          {/* Borrow Button */}
          <Skeleton className="h-11 w-40 rounded-full" />
          <Skeleton className="h-3 w-48" />
        </div>
      </div>
    </main>
  );
};

export default Loading;
