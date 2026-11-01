"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "All Books", href: "/all-books" },
  { label: "Add Book", href: "/add-book" },
  { label: "My Books", href: "/my-books" },
  { label: "My Borrows", href: "/my-borrows" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#1E3A34] border-b border-[#12352C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 1. Left Side: Website Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-white hover:opacity-90 transition-opacity"
          >
            <BookOpen className="w-7 h-7 text-[#C89B5A]" />
            <span className="tracking-tight">
              Book<span className="text-[#C89B5A]">Nook</span>
            </span>
          </Link>

          {/* 2. Middle: Desktop Navigation Links */}
          <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 gap-7">
            {navLinks.map((link) => {
              // const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#C89B5A] underline underline-offset-8 decoration-[#C89B5A] py-1"
                      : "text-[#E8E4DC]/75 hover:text-[#C89B5A]"
                  }`}
                >
                  {link.label}
                  {/* {isActive && (
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-" />
                  )} */}
                </Link>
              );
            })}
          </div>

          {/* 3. Right Side: Login & Register Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/sign-in"
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-[#C89B5A] transition-colors"
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

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#E8E4DC]/80 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Responsive Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1E3A34] border-t border-[#12352C] px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#C89B5A]/15 text-[#C89B5A]"
                    : "text-[#E8E4DC]/75 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 flex flex-col gap-2 border-t border-white/10 mt-2">
            <Link
              href="/sign-in"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:bg-white/5"
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-semibold text-[#1E3A34] text-center shadow-sm bg-[#C89B5A] hover:bg-[#B78A4C]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
