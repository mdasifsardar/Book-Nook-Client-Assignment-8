"use client";

import Link from "next/link";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/images/banner/banner-1.jpg",
    eyebrow: "Welcome to BookNook",
    title: "Find Your Next Great Read",
    description:
      "Browse a curated collection of fiction, non-fiction, and everything in between — all in one place.",
  },
  {
    image: "/images/banner/banner-2.jpg",
    eyebrow: "Borrow with Ease",
    title: "Borrow, Read, Return",
    description:
      "Borrow the books you love in just a few clicks, then return them whenever you are done.",
  },
  {
    image: "/images/banner/banner-3.jpg",
    eyebrow: "Grow the Community",
    title: "Share Your Shelf",
    description:
      "Add your own books to BookNook and help fellow readers discover their next favorite story.",
  },
];

export default function BannerSlider() {
  return (
    <section aria-label="Featured books" className="w-full ">
      <Swiper
        modules={[A11y, Autoplay, Pagination]}
        style={{
          "--swiper-pagination-color": "#D97757",
          "--swiper-pagination-bullet-inactive-color": "#ffffff",
        }}
        slidesPerView={1}
        spaceBetween={0}
        loop
        speed={700}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div
              className="relative flex min-h-[480px] items-center bg-cover bg-center sm:min-h-[540px] lg:min-h-[620px]"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25"
                aria-hidden="true"
              />

              <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 pb-20 sm:px-6 sm:py-20 sm:pb-24 lg:px-8">
                <div className="max-w-xl lg:max-w-2xl">
                  <p className="text-xs font-medium tracking-[0.2em] text-[#D97757]/90 uppercase sm:text-sm">
                    {slide.eyebrow}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl">
                    {slide.title}
                  </h2>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
                    {slide.description}
                  </p>
                  <Button
                    size="lg"
                    className="mt-8 bg-[#D97757] text-white"
                    nativeButton={false}
                    render={<Link href="/all-books" />}
                  >
                    Browse Books
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
