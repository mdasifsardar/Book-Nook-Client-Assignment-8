"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BookOpen, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "../ui/popover";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "All Books", href: "/all-books" },
  { label: "Add Book", href: "/add-books" },
  { label: "My Books", href: "/my-books" },
  { label: "My Borrows", href: "/my-borrows" },
];

export default function Navbar() {
  //           Router
  const router = useRouter();

  //        State handle
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //        Session handle
  const { data: session } = authClient.useSession();
  const user = session?.user;

  //        Signout User
  const handleSignOut = () => {
    authClient.signOut();

    router.push("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#1E3A34] border-b border-[#12352C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between gap-3">
          {/* 1. Left Side: Website Logo & Name */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 text-lg font-bold text-white transition-opacity hover:opacity-90 sm:text-xl"
          >
            <BookOpen className="h-6 w-6 text-[#C89B5A] sm:h-7 sm:w-7" />
            <span className="tracking-tight">
              Book<span className="text-[#C89B5A]">Nook</span>
            </span>
          </Link>

          {/* 2. Middle: Desktop Navigation Links */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 lg:flex lg:gap-6 xl:gap-7">
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium whitespace-nowrap transition-colors ${
                    pathname === link.href
                      ? "text-[#C89B5A] underline underline-offset-8 decoration-[#C89B5A] py-1"
                      : "text-[#E8E4DC]/75 hover:text-[#C89B5A]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* 3. Right Side: Login & Register Buttons */}

          {user ? (
            <>
              <Popover>
                <PopoverTrigger
                  nativeButton={false}
                  className="shrink-0 cursor-pointer"
                  render={
                    <Avatar className="size-9 sm:size-10">
                      <AvatarImage
                        referrerPolicy="no-referrer"
                        src={user?.image}
                      />
                      <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  }
                ></PopoverTrigger>
                <PopoverContent className="w-56 max-w-[calc(100vw-2rem)] mt-2 rounded-lg border border-[#12352C] bg-[#1E3A34] p-3 shadow-lg">
                  <PopoverHeader>
                    <PopoverTitle className="text-[#C89B5A] font-semibold mb-1">
                      {user?.name}
                    </PopoverTitle>
                    <PopoverDescription className="text-[#E8E4DC]/75 text-sm">
                      {user?.email}
                    </PopoverDescription>

                    <Link
                      href="/profile"
                      className={`my-2 block w-full cursor-pointer rounded-md border px-3 py-2 text-center text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#C89B5A]/20 ${
                        pathname === "/profile"
                          ? "border-[#C89B5A] bg-[#C89B5A] text-[#1E3A34] hover:bg-[#B78A4C]"
                          : "border-[#C89B5A]/40 text-[#C89B5A] hover:border-[#C89B5A] hover:bg-[#C89B5A]/10"
                      }`}
                    >
                      My Profile
                    </Link>

                    <Button
                      onClick={handleSignOut}
                      variant="destructive"
                      className="gap-2 mt-2 cursor-pointer bg-[#C89B5A] hover:bg-[#B78A4C] text-[#1E3A34]"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </Button>
                  </PopoverHeader>
                </PopoverContent>
              </Popover>
            </>
          ) : (
            <div className="hidden items-center gap-2 lg:flex lg:gap-3">
              <Link
                href="/sign-in"
                className="rounded-lg border border-[#C89B5A]/40 px-4 py-2 text-sm font-medium text-[#E8E4DC]/80 transition-colors hover:border-[#C89B5A] hover:text-[#C89B5A]"
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-semibold text-[#1E3A34] bg-[#C89B5A] hover:bg-[#B78A4C] rounded-lg shadow-sm transition-all hover:shadow-md"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="flex shrink-0 items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-[#E8E4DC]/80 transition-colors hover:bg-white/10 hover:text-white focus:outline-none sm:p-2.5"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        user={user}
      />
    </nav>
  );
}
