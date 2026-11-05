import BookSwiper from "@/components/books/BookSwiper";

export default async function BookCard() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
    cache: "no-store",
  });
  const data = await res.json();
  const books = [...data].reverse();

  return <BookSwiper books={books.slice(0, 6)} />;
}
