"use client";

import { Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

const fieldClass =
  "bg-[#FAF6EF]/10 border-[#12352C] text-[#E8E4DC] placeholder:text-[#E8E4DC]/40 focus-visible:ring-[#C89B5A] focus-visible:ring-1";

const labelClass =
  "text-xs font-bold tracking-wider text-[#E8E4DC]/60 uppercase";

const EditBooks = ({ book }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleEditBook = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`http://localhost:5000/my-book/${book._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const editBook = await res.json();
      console.log(editBook);

      if (!res.ok) {
        toast.error(editBook?.message || "Book edit failed!");
        return;
      }

      toast.success(data?.message || "Book edited successfully!");
      setOpen(false);
      router.refresh();
    } catch (err) {
      toast.error(err?.message || "Something went wrong!");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="inline-flex h-8 items-center justify-center gap-1 rounded-full border border-[#C89B5A]/40 bg-transparent px-3 text-sm font-medium text-[#1E3A34] transition-colors hover:border-[#C89B5A] hover:bg-[#C89B5A]/15 cursor-pointer">
        <Edit3 className="h-3.5 w-3.5 text-[#B78A4C]" />
        Edit
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg rounded-2xl border-[#12352C] bg-[#1E3A34] text-[#E8E4DC] shadow-2xl shadow-[#C89B5A]/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#C89B5A]">
            Edit Book
          </DialogTitle>

          <DialogDescription className="text-base text-[#E8E4DC]/70">
            Update the details below and save your changes.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleEditBook}>
          <input type="hidden" name="bookId" value={book.bookId} />
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`name-${book._id}`} className={labelClass}>
                Book Name
              </Label>
              <Input
                id={`name-${book._id}`}
                name="name"
                defaultValue={book.name}
                className={fieldClass}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor={`author-${book._id}`} className={labelClass}>
                  Author
                </Label>
                <Input
                  id={`author-${book._id}`}
                  name="author"
                  defaultValue={book.author}
                  className={fieldClass}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`category-${book._id}`} className={labelClass}>
                  Category
                </Label>
                <Input
                  id={`category-${book._id}`}
                  name="category"
                  defaultValue={book.category}
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor={`copies-${book._id}`} className={labelClass}>
                  Copies
                </Label>
                <Input
                  id={`copies-${book._id}`}
                  name="copies"
                  type="number"
                  min="0"
                  defaultValue={book.copies}
                  className={fieldClass}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`image-${book._id}`} className={labelClass}>
                  Image URL
                </Label>
                <Input
                  id={`image-${book._id}`}
                  name="image"
                  defaultValue={book.image}
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`description-${book._id}`} className={labelClass}>
                Description
              </Label>
              <Textarea
                id={`description-${book._id}`}
                name="description"
                rows={4}
                defaultValue={book.description}
                className={fieldClass}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-[#12352C] pt-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor={`userName-${book._id}`} className={labelClass}>
                  User Name
                </Label>
                <Input
                  id={`userName-${book._id}`}
                  defaultValue={user?.name || ""}
                  readOnly
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`userEmail-${book._id}`} className={labelClass}>
                  User Email
                </Label>
                <Input
                  id={`userEmail-${book._id}`}
                  type="email"
                  defaultValue={user?.email || ""}
                  readOnly
                  placeholder="Your email"
                  className={fieldClass}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-[#C89B5A] font-semibold text-[#1E3A34] hover:bg-[#B78A4C] cursor-pointer"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBooks;
