"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "All Books", href: "/all-books" },
  { label: "Add Book", href: "/add-books" },
  { label: "My Books", href: "/my-books" },
  { label: "My Borrows", href: "/my-borrows" },
];

export default function MobileMenu({ isOpen, onClose, user }) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-[#1E3A34] border-t border-[#12352C] px-4 pt-2 pb-4 space-y-1">
      {navLinks.map((link) => {
        return (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              pathname === link.href
                ? "bg-[#C89B5A]/15 text-[#C89B5A]"
                : "text-[#E8E4DC]/75 hover:bg-white/5 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        );
      })}

      {user ? (
        ""
      ) : (
        <div className="mt-2 flex flex-row gap-2 border-t border-[#12352C] pt-3">
          <Link
            href="/sign-in"
            onClick={onClose}
            className="flex-1 rounded-lg border border-[#C89B5A]/40 px-3 py-2 text-center text-sm font-medium text-[#E8E4DC]/80 transition-colors hover:border-[#C89B5A] hover:text-[#C89B5A]"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            onClick={onClose}
            className="flex-1 rounded-lg bg-[#C89B5A] px-3 py-2 text-center text-sm font-semibold text-[#1E3A34] shadow-sm transition-colors hover:bg-[#B78A4C]"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}
