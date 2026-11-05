"use client";

import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BorrowDialog = ({ book }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();
  const [open, setOpen] = useState(false);

  //
  const handleBorrow = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const returnDate = formData.get("returnDate");

      const borrowData = {
        bookId: book._id,
        name: book.name,
        image: book.image,
        userName: user?.name,
        userEmail: user?.email,
        borrowDate: new Date().toISOString().split("T")[0],
        returnDate: returnDate,
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-borrow`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(borrowData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.message || "Book borrow failed");
        return;
      }

      toast.success(data?.message || "Book borrowed successfully!");
      setOpen(false);
      router.refresh();
    } catch (err) {
      toast.error(err?.message || "Something went wrong!");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C89B5A] px-8 py-6 text-lg font-bold text-[#1E3A34] shadow-lg shadow-[#C89B5A]/20 transition-all hover:bg-[#B78A4C] hover:shadow-xl cursor-pointer">
        <BookOpen className="h-5 w-5" />
        Borrow This Book
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-[#1E3A34] border-[#12352C] text-[#E8E4DC] shadow-2xl shadow-[#C89B5A]/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#C89B5A] ">
            Borrow This Book
          </DialogTitle>
          <DialogDescription className="text-[#E8E4DC]/70 text-base">
            Confirm your information before borrowing this book.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleBorrow}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="userName"
                className="text-xs font-bold tracking-wider text-[#E8E4DC]/60 uppercase"
              >
                User Name
              </Label>
              <Input
                id="userName"
                name="name"
                value={user?.name}
                readOnly
                className="bg-[#FAF6EF]/10 border-[#12352C] text-[#E8E4DC] focus-visible:ring-[#C89B5A] focus-visible:ring-1"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="userEmail"
                className="text-xs font-bold tracking-wider text-[#E8E4DC]/60 uppercase"
              >
                User Email
              </Label>
              <Input
                id="userEmail"
                name="email"
                value={user?.email}
                readOnly
                className="bg-[#FAF6EF]/10 border-[#12352C] text-[#E8E4DC] focus-visible:ring-[#C89B5A] focus-visible:ring-1"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="bookName"
                className="text-xs font-bold tracking-wider text-[#E8E4DC]/60 uppercase"
              >
                Book Name
              </Label>
              <Input
                id="bookName"
                name="book"
                value={book.name}
                readOnly
                className="bg-[#FAF6EF]/10 border-[#12352C] text-[#E8E4DC] focus-visible:ring-[#C89B5A] focus-visible:ring-1"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="returnDate"
                className="text-xs font-bold tracking-wider text-[#E8E4DC]/60 uppercase"
              >
                Return Date
              </Label>
              <Input
                id="returnDate"
                name="returnDate"
                type="date"
                required
                className="bg-[#FAF6EF]/10 border-[#12352C] text-[#E8E4DC] focus-visible:ring-[#C89B5A] focus-visible:ring-1 [color-scheme:dark]"
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-[#C89B5A] text-[#1E3A34] font-semibold hover:bg-[#B78A4C] cursor-pointer"
            >
              Confirm Borrow
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BorrowDialog;
