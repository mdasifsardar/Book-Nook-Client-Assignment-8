import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/books/BookCard";

export default function NewArrivals() {
  return (
    <section
      aria-label="New arrivals"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      {/* Section header — reference style: "NEW PRODUCTS" two-tone heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="text-foreground">New </span>
          <span className="text-[#C89B5A]">Arrivals</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Discover the latest additions to our library — freshly shelved books
          waiting for their next reader.
        </p>
      </div>

      {/* Cards grid — narrower container so cards sit close together */}
      <div className="mx-auto mt-8 max-w-7xl">
        <BookCard />
      </div>

      {/* See All Books */}
      <div className="mx-auto mt-8 flex justify-center">
        <Button
          className="group flex items-center justify-center gap-2 rounded-full bg-[#C89B5A] px-7 py-6 font-semibold text-[#1E3A34] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B78A4C] hover:shadow-lg cursor-pointer"
          nativeButton={false}
          render={<Link href="/all-books" />}
        >
          See All Books
          <ArrowRight
            data-icon="inline-end"
            className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Button>
      </div>
    </section>
  );
}
