import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, Globe, Heart, Star, ChefHat, Gamepad2 } from "lucide-react";

const categories = [
  { name: "Fiction", icon: BookOpen, count: "128 titles" },
  { name: "Non-Fiction", icon: Menu, count: "86 titles" },
  { name: "Biographies", icon: Heart, count: "54 titles" },
  { name: "Children&apos;s Books", icon: Star, count: "72 titles" },
  { name: "Sci-Fi & Fantasy", icon: Globe, count: "95 titles" },
  { name: "Mystery & Thriller", icon: ChefHat, count: "63 titles" },
  { name: "Romance", icon: Gamepad2, count: "48 titles" },
  { name: "History & Politics", icon: Menu, count: "37 titles" },
];

export default function TopCategories() {
  return (
    <section
      aria-label="Top Categories"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="text-foreground">Top </span>
          <span className="text-[#C89B5A]">Categories</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Explore our most popular genres to find your next great read.
        </p>
      </div>

      {/* Category grid */}
      <div className="mx-auto mt-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              href="/all-books"
              className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-border/40 bg-card/50 p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#C89B5A]/40 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C89B5A]/15 text-[#C89B5A] font-bold text-lg shadow-sm">
                <cat.icon className="h-7 w-7" />
              </div>
              <span className="text-sm font-bold tracking-wide text-foreground">
                {cat.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {cat.count}
              </span>

              {/* Group hover indicator */}
              <span className="absolute inset-0 rounded-2xl border-2 border-dashed border-[#C89B5A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
