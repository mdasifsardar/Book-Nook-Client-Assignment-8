import BookSwiper from "@/components/books/BookSwiper";

export default async function BookCard() {
  const res = await fetch("http://localhost:5000/books");
  const data = await res.json();
  const books = [...data].reverse();

  return <BookSwiper books={books.slice(0, 6)} />;
}
