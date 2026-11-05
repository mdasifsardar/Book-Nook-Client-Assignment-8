import MyBorrowBooks from "@/components/books/MyBorrowBooks";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBorrowsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:5000/borrow/${user?.email}`);
  const borrowedBook = await res.json();

  return (
    <main className="min-h-screen max-w-7xl mx-auto bg-[#FAF6EF] px-4 py-12 sm:px-6 lg:px-8">
      <MyBorrowBooks borrowedBook={borrowedBook} />
    </main>
  );
};

export default MyBorrowsPage;