import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import MyBookCard from "@/components/books/MyBookCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getTokenFromServer } from "@/lib/getTokenFromServer";

const MyBooksPage = async () => {
  //

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const token = await getTokenFromServer();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/my-book/${user?.email}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const myBook = await res.json();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            My Added <span className="text-[#C89B5A]">Books</span>
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage all the books you have added to BookNook.
          </p>
        </div>

        <Link href="/add-books">
          <Button className="gap-2 rounded-full bg-[#C89B5A] text-[#1E3A34] hover:bg-[#B78A4C] cursor-pointer">
            <PlusCircle className="h-4 w-4" />
            Add New Book
          </Button>
        </Link>
      </div>

      {/* Books Table */}

      <MyBookCard myBook={myBook} />
    </div>
  );
};

export default MyBooksPage;
