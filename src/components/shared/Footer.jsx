import { BookOpen, Mail, MapPin, Phone } from "lucide-react";

import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

const contactItems = [
  { icon: Mail, label: "Email", value: "support@booknook.com" },
  { icon: Phone, label: "Phone", value: "+880 1234 567890" },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
];

const socialLinks = [
  { icon: FaFacebook, label: "Facebook", href: "#" },
  { icon: FaXTwitter, label: "Twitter", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaGithub, label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E3A34] border-t border-[#12352C] text-[#E8E4DC]/75">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* 1. Logo & About */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold text-xl text-white hover:opacity-90 transition-opacity"
            >
              <BookOpen className="w-7 h-7 text-[#C89B5A]" />
              <span className="tracking-tight">
                Book<span className="text-[#C89B5A]">Nook</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Discover, share and borrow books with a friendly community of
              readers — your cozy corner for every story.
            </p>
          </div>

          {/* 2. Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-3 text-sm">
                  <Icon className="w-4 h-4 text-[#C89B5A] shrink-0" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Social Links */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`BookNook on ${label}`}
                  title={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-[#C89B5A]/40 text-[#C89B5A] hover:bg-[#C89B5A] hover:text-[#1E3A34] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Copyright Line */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-2">
          <p className="text-xs text-[#E8E4DC]/60 text-center">
            © {new Date().getFullYear()} BookNook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
