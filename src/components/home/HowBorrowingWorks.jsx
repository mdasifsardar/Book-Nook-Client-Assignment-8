import { CheckCircle2, BookOpen, CalendarDays, RotateCcw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HowBorrowingWorks() {
  return (
    <section
      aria-label="How Borrowing Works"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="text-foreground">How </span>
          <span className="text-[#C89B5A]">Borrowing Works</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Take a look at our simple borrowing process — you&apos;ll have your
          books in no time.
        </p>
      </div>

      {/* Steps */}
      <div className="mx-auto mt-10 max-w-2xl">
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              icon: CheckCircle2,
              num: "01",
              title: "Discover a Book",
              desc: "Browse our curated collection and find a book that catches your eye.",
            },
            {
              icon: BookOpen,
              num: "02",
              title: "Click Borrow",
              desc: "Tap the Borrow button to reserve your desired copy instantly.",
            },
            {
              icon: CalendarDays,
              num: "03",
              title: "Receive in 1–2 Days",
              desc: "Your book ships fast — usually delivered within one to two business days.",
            },
            {
              icon: RotateCcw,
              num: "04",
              title: "Return Anytime",
              desc: "Borrow for 14 days. Return whenever you are done — no late fees!",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-[#E8E4DC] bg-card p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#C89B5A]/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C89B5A] text-[#1E3A34] font-bold text-sm shadow-sm">
                {step.num}
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                  <step.icon className="h-5 w-5 text-[#C89B5A]" />
                  <span className="text-base">{step.title}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-8 flex justify-center">
          <Link href="/all-books">
            <Button className="group flex items-center justify-center gap-2 rounded-full bg-[#C89B5A] px-7 py-6 font-semibold text-[#1E3A34] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B78A4C] hover:shadow-lg cursor-pointer">
              <span>Start Borrowing</span>

              <BookOpen className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
