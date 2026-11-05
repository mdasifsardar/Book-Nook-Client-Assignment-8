import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="rounded-full bg-[#C89B5A]/10 p-6 mb-4 text-[#C89B5A]">
        <BookOpen size={48} />
      </div>

      <h2 className="text-3xl font-bold text-[#1E3A34] mb-2">
        Page or Book Not Found
      </h2>

      <p className="text-muted-foreground mb-6 max-w-md">
        The book you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link href="/all-books">
        <Button className="rounded-full bg-[#C89B5A] text-[#1E3A34] hover:bg-[#B78A4C] cursor-pointer px-6">
          Back to All Books
        </Button>
      </Link>
    </div>
  );
}
