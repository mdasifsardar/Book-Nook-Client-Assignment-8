"use client";

import { BookOpen, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import EditBooks from "./EditBooks";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

const MyBookCard = ({ myBook }) => {
  //          Redirect Router
  const router = useRouter();

  //            Delete Book
  const handleDelete = async (id) => {
    try {
      const token = await getTokenFromClient();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/my-book/${id}`,
        {
          method: "DELETE",

          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.message || "Book fetch failed!");
        return;
      }

      if (data) {
        toast.success(data?.message || "Book delete successfully!");
        router.push("/my-books");
      }
    } catch (err) {
      toast.error(err?.message || "Something went wrong");
    }
  };

  return (
    <div>
      {myBook.length > 0 ? (
        <div className="overflow-x-auto rounded-2xl border border-[#E8E4DC] bg-card shadow-sm">
          {/* Table Header */}
          <div className="grid min-w-[750px] grid-cols-[2fr_1.3fr_1fr_0.6fr_1fr] gap-4 border-b border-[#E8E4DC] bg-[#E8E4DC]/40 px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <span>Book Details</span>
            <span>Author</span>
            <span>Category</span>
            <span>Copies</span>
            <span className="text-center">Actions</span>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#E8E4DC]">
            {myBook.map((book) => (
              <div
                key={book.bookId}
                className="grid min-w-[750px] grid-cols-[2fr_1.3fr_1fr_0.6fr_1fr] items-center gap-4 px-6 py-5 transition-colors hover:bg-[#FAF6EF]"
              >
                {/* Book Details */}
                <div className="flex min-w-0 items-center gap-4">
                  <div className="relative h-20 w-14 shrink-0 overflow-hidden  bg-[#E8E4DC]/40 shadow-sm">
                    <Image
                      src={book.image}
                      alt={`Cover of ${book.name}`}
                      fill
                      sizes="56px"
                      className="object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-[#1E3A34]">
                      {book.name}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                      {book.description}
                    </p>
                  </div>
                </div>

                {/* Author */}
                <div>
                  <span className="hidden text-xs text-muted-foreground">
                    Author:{" "}
                  </span>

                  <span className="text-sm text-[#1E3A34]">{book.author}</span>
                </div>

                {/* Category */}
                <div>
                  <span className="hidden text-xs text-muted-foreground">
                    Category:
                  </span>

                  <span className="inline-flex rounded-full bg-[#C89B5A]/15 px-3 py-1 text-xs font-semibold text-[#B78A4C]">
                    {book.category}
                  </span>
                </div>

                {/* Copies */}
                <div>
                  <span className="hidden text-xs text-muted-foreground">
                    Copies:{" "}
                  </span>

                  <span className="text-sm font-medium text-[#1E3A34] flex items-center">
                    {Number(book.copies)}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row items-center justify-center gap-2">
                  {/* Edit Button */}
                  <EditBooks book={book} />

                  {/* Delete Confirmation */}
                  <AlertDialog>
                    <AlertDialogTrigger className="inline-flex h-8 items-center justify-center gap-1 rounded-full border border-red-200 bg-red-50 px-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 hover:text-red-700 cursor-pointer">
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </AlertDialogTrigger>

                    <AlertDialogContent className="sm:max-w-md rounded-2xl border-[#12352C] bg-[#1E3A34] text-[#E8E4DC] shadow-2xl shadow-[#C89B5A]/10">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-2xl font-bold text-[#C89B5A]">
                          Are you absolutely sure?
                        </AlertDialogTitle>

                        <AlertDialogDescription className="text-base text-[#E8E4DC]/70">
                          This action cannot be undone. This book will be
                          permanently deleted from your collection.
                        </AlertDialogDescription>
                      </AlertDialogHeader>

                      <AlertDialogFooter className="border-[#12352C] bg-transparent">
                        <AlertDialogCancel className="rounded-full border-[#E8E4DC]/30 bg-transparent text-[#E8E4DC] hover:bg-[#FAF6EF]/10 hover:text-[#E8E4DC] cursor-pointer">
                          Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                          onClick={() => handleDelete(book._id)}
                          className="rounded-full bg-red-600 font-semibold cursor-pointer text-white hover:bg-red-700"
                        >
                          Yes, Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-2xl border border-dashed border-[#E8E4DC] bg-card/50 p-8 text-center">
          <BookOpen className="mb-4 h-12 w-12 text-[#B78A4C]/60" />

          <h3 className="text-lg font-semibold text-foreground">
            No Books Found
          </h3>

          <p className="mb-4 text-sm text-muted-foreground">
            You haven&apos;t added any books to the database yet.
          </p>

          <Link href="/add-books">
            <Button className="rounded-full bg-[#C89B5A] text-[#1E3A34] hover:bg-[#B78A4C] cursor-pointer">
              Add Your First Book
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyBookCard;
