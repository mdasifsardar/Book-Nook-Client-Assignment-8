import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default async function AllBookCard() {
  const res = await fetch("http://localhost:5000/books");
  const data = await res.json();
  console.log(data);

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((book) => (
        <Card
          key={book._id}
          size="sm"
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/50 p-4    shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#C89B5A]/40 hover:shadow-xl"
        >
          {/* Book Cover Container with depth and shadow */}
          <div className="relative overflow-hidden   aspect-[3/4] ">
            <Image
              src={book.image}
              alt={`Cover of ${book.title}`}
              width={300}
              height={300}
              loading="eager"
              className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <span className="absolute top-3 right-6 rounded-full bg-[#1E3A34]/80 px-3 py-1 text-xs font-semibold text-[#C89B5A] backdrop-blur-md">
              {book.category}
            </span>
          </div>

          <CardContent className="flex flex-1 flex-col items-center justify-between px-1 text-center">
            <div className="space-y-1.5 w-full">
              {/* Title */}
              <CardTitle className="!text-xl  leading-snug font-bold tracking-tight text-foreground line-clamp-2 group-hover:text-[#C89B5A] transition-colors">
                {book.name}
              </CardTitle>

              {/* Author */}
              <p className="text-[12px] text-muted-foreground font-medium">
                by {book.author}
              </p>
            </div>

            {/* View Details Button */}
            <div className="w-full mt-3">
              <Button
                size="sm"
                className="w-full rounded-full bg-[#C89B5A] py-5 font-semibold text-[#1E3A34] shadow-sm hover:bg-[#B78A4C] transition-all"
                nativeButton={false}
                render={<Link href={`/all-books/${book._id}`} />}
              >
                <BookOpen data-icon="inline-start" className="h-4 w-4" />
                View Details
                <ArrowRight
                  data-icon="inline-end"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
