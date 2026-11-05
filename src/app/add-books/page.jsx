"use client";

import { useState } from "react";
import { toast } from "sonner";
import AddBookCard from "@/components/books/AddBookCard";
import { authClient } from "@/lib/auth-client";

export default function AddBookForm() {
  //            User session management
  const { data: session } = authClient.useSession();
  const user = session?.user;

  //        State management
  const [loading, setLoading] = useState(false);

  //          Form submit btn
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValue = Object.fromEntries(formData.entries());

    const books = {
      ...formValue,
      userName: user?.name,
      userEmail: user?.email,
    };

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/add-books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(books),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("Book added successfully!");
        e.target.reset();
      } else {
        toast.error(data.message || "Failed to add book!");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <AddBookCard handleSubmit={handleSubmit} loading={loading} user={user} />
    </div>
  );
}
