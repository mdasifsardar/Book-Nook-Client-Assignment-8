"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, CalendarDays, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const MyBorrowBooks = ({ borrowedBook }) => {
  //            Router
  const router = useRouter();

  //
  const handleReturnBook = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/borrow/${id}`,

        {
          method: "PATCH",
        },
      );
      const data = await res.json();

      if (!res.ok || data.deletedCount === 0) {
        toast.error("Book return unsuccessfull!");
        return;
      }

      toast.success("Book return successfully.");
      router.push("/my-borrows");
      router.refresh();
    } catch (err) {
      toast.error(err?.message || "Something went wrong");
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-10">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#C89B5A]/10 px-4 py-2 text-sm font-semibold text-[#B78A4C]">
          <BookOpen size={16} />
          Your Reading Collection
        </span>

        <h1 className="text-3xl font-extrabold tracking-tight text-[#1E3A34] sm:text-4xl">
          My Borrowed Books
        </h1>

        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Keep track of your borrowed books and their return dates.
        </p>
      </div>

      {/* Summary */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#E8E4DC] bg-card p-6 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">
            Total Borrowed Books
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#1E3A34]">
            {borrowedBook.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-[#E8E4DC] bg-card p-6 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">
            Active Borrowings
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#C89B5A]">
            {borrowedBook.length}
          </h2>
        </div>
      </div>

      {/* Borrowed Books Table */}
      {borrowedBook.length > 0 ? (
        <div className="overflow-hidden rounded-2xl border border-[#E8E4DC] bg-card shadow-sm">
          <div className="flex items-center justify-between border-b border-[#E8E4DC] px-6 py-5">
            <h2 className="text-lg font-bold text-[#1E3A34]">
              Borrowing History
            </h2>
            <span className="rounded-full bg-[#C89B5A]/15 px-3 py-1 text-xs font-bold text-[#B78A4C]">
              {borrowedBook.length} Books
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] text-left">
              <thead className="bg-[#E8E4DC]/40">
                <tr className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <th className="px-6 py-4">Book</th>
                  <th className="px-6 py-4">Borrow Date</th>
                  <th className="px-6 py-4">Return Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#E8E4DC]">
                {borrowedBook.map((book) => (
                  <tr
                    key={book._id}
                    className="transition-colors hover:bg-[#FAF6EF]"
                  >
                    {/* Book */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <Image
                          src={book.image}
                          alt={book.name}
                          width={48}
                          height={64}
                          unoptimized
                          className="h-16 w-12 object-contain shadow-sm"
                        />
                        <span className="font-semibold text-[#1E3A34]">
                          {book.name}
                        </span>
                      </div>
                    </td>

                    {/* Borrow Date */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays size={16} />
                        {book.borrowDate}
                      </div>
                    </td>

                    {/* Return Date */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays size={16} />
                        {book.returnDate}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <span className="rounded-full bg-[#C89B5A]/15 px-3 py-1.5 text-xs font-bold text-[#B78A4C]">
                        Borrowed
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-center">
                      <Button
                        onClick={() => handleReturnBook(book._id)}
                        className="rounded-full border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 cursor-pointer"
                      >
                        <RotateCcw size={15} />
                        Return Book
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-2xl border border-dashed border-[#E8E4DC] bg-card/50 p-8 text-center">
          <BookOpen className="mb-4 h-12 w-12 text-[#B78A4C]/60" />

          <h3 className="text-lg font-semibold text-foreground">
            No Borrowed Books
          </h3>

          <p className="mb-4 text-sm text-muted-foreground">
            You haven&apos;t borrowed any books yet.
          </p>

          <Link href="/all-books">
            <Button className="rounded-full bg-[#C89B5A] text-[#1E3A34] hover:bg-[#B78A4C] cursor-pointer">
              Browse Books
            </Button>
          </Link>
        </div>
      )}

      <p className="mt-5 text-center text-xs text-muted-foreground">
        Please return your borrowed books on or before the due date.
      </p>
    </div>
  );
};

export default MyBorrowBooks;
