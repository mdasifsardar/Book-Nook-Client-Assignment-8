import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BookPlus } from "lucide-react";
import { Button } from "../ui/button";

const AddBookCard = ({ handleSubmit, loading, user }) => {
  return (
    <Card className="rounded-2xl border border-border/40 bg-card/50 shadow-lg backdrop-blur-sm">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#C89B5A]/10 text-[#C89B5A]">
          <BookPlus className="h-6 w-6" />
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
          Add a New Book
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Enter the book details to add to BookNook.
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1: Book Title & Author Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Book Title
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter book title"
                className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#C89B5A] focus:outline-none focus:ring-1 focus:ring-[#C89B5A] transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Author Name
              </label>
              <input
                type="text"
                name="author"
                required
                placeholder="Enter author name"
                className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#C89B5A] focus:outline-none focus:ring-1 focus:ring-[#C89B5A] transition-all"
              />
            </div>
          </div>

          {/* Row 2: Category & Total Copies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Category
              </label>
              <select
                name="category"
                required
                defaultValue=""
                className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground focus:border-[#C89B5A] focus:outline-none focus:ring-1 focus:ring-[#C89B5A] transition-all"
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Classic">Classic</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Mystery">Mystery</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Total Copies
              </label>
              <input
                type="number"
                name="copies"
                required
                placeholder="e.g., 4"
                className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#C89B5A] focus:outline-none focus:ring-1 focus:ring-[#C89B5A] transition-all"
              />
            </div>
          </div>

          {/* Row 3: Book Image URL / File */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Book Image URL
            </label>
            <input
              type="url"
              name="image"
              required
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#C89B5A] focus:outline-none focus:ring-1 focus:ring-[#C89B5A] transition-all"
            />
          </div>

          {/* Row 4: Short Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Short Description
            </label>
            <textarea
              name="description"
              rows="3"
              required
              placeholder="Write a short description..."
              className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#C89B5A] focus:outline-none focus:ring-1 focus:ring-[#C89B5A] transition-all"
            ></textarea>
          </div>

          {/* Row 5: User Name & User Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                required
                disabled
                defaultValue={user?.name || ""}
                placeholder="Your Name"
                className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#C89B5A] focus:outline-none focus:ring-1 focus:ring-[#C89B5A] transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                User Email
              </label>
              <input
                type="email"
                name="userEmail"
                required
                disabled
                defaultValue={user?.email || ""}
                placeholder="your.email@example.com"
                className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#C89B5A] focus:outline-none focus:ring-1 focus:ring-[#C89B5A] transition-all"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#C89B5A] hover:bg-[#B78A4C] text-[#1E3A34] py-6 font-semibold shadow-md transition-all duration-300 cursor-pointer"
            >
              {loading ? "Adding Book..." : "Add Book"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddBookCard;
