import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen } from "lucide-react";
import BorrowDialog from "@/components/books/BorrowDialog";
import { notFound } from "next/navigation";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/book/${id}`, {
    headers: {
      authorization: "user logged in",
    },
  });
  if (!res.ok) {
    notFound();
  }

  const book = await res.json();

  if (!book) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <Link
        href="/all-books"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#C89B5A] hover:underline mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Back to All Books
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
        <div className="relative overflow-hidden   ">
          <Image
            src={book?.image}
            alt={`Cover of ${book.name}`}
            width={460}
            height={660}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit rounded-full bg-[#C89B5A]/10 px-3 py-1 text-xs font-bold tracking-[0.15em] text-[#C89B5A] uppercase">
            {book?.category}
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-[#1E3A34] leading-[1.1] sm:text-5xl lg:text-6xl">
            {book?.name}
          </h1>

          <p className="text-xl text-muted-foreground font-medium">
            by{" "}
            <span className="text-foreground font-semibold">
              {book?.author}
            </span>
          </p>

          <div className="rounded-xl bg-card/60 border border-border/40 p-6 shadow-sm">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#C89B5A] uppercase mb-3">
              About the Book
            </h2>
            <p className="text-base leading-relaxed text-foreground/90">
              {book?.description}
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-[#C89B5A]/10 border border-[#C89B5A]/20 px-5 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C89B5A] text-[#1E3A34] font-bold text-sm shadow-sm">
              {book?.userName?.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Added by {book?.userName}
              </p>
              <p className="text-xs text-muted-foreground">{book?.userEmail}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{book?.copies}</span>
            copies available
          </div>

          <div className="pt-2">
            <BorrowDialog book={book} />
            <p className="mt-2 text-xs text-muted-foreground">
              Borrow for 14 days • Return anytime
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetailsPage;
