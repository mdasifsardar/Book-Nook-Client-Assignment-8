"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import "swiper/css";

export default function BookSwiper({ books = [] }) {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      slidesPerView={1.5}
      spaceBetween={16}
      loop={books.length >= 5}
      speed={5000}
      freeMode={{
        enabled: true,
        momentum: false,
      }}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      allowTouchMove={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      className="new-arrivals-swiper !pb-10 [&_.swiper-wrapper]:!ease-linear"
    >
      {books.map((book) => (
        <SwiperSlide key={book._id} className="!h-auto">
          <Card
            size="sm"
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl !border-0 !outline-none !ring-0 bg-card/50 p-4 shadow-none transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Book Cover Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={book.image}
                alt={`Cover of ${book.title}`}
                width={300}
                height={300}
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Category */}
              <span className="absolute right-6 top-3 rounded-full bg-[#1E3A34]/80 px-3 py-1 text-xs font-semibold text-[#C89B5A] backdrop-blur-md">
                {book.category}
              </span>
            </div>

            {/* Book Information */}
            <CardContent className="flex flex-1 flex-col items-center justify-between px-1 text-center">
              <div className="w-full space-y-1.5">
                {/* Title */}
                <CardTitle className="line-clamp-2 !text-xl leading-snug font-bold tracking-tight text-foreground transition-colors group-hover:text-[#C89B5A]">
                  {book.name}
                </CardTitle>

                {/* Author */}
                <p className="text-[12px] font-medium text-muted-foreground">
                  by {book.author}
                </p>
              </div>

              {/* View Details Button */}
              <div className="mt-3 w-full">
                <Button
                  size="sm"
                  className="w-full rounded-full bg-[#C89B5A] py-5 font-semibold text-[#1E3A34] shadow-sm transition-all hover:bg-[#B78A4C]"
                  nativeButton={false}
                  render={<Link href={`/all-books/${book._id}`} />}
                >
                  <BookOpen data-icon="inline-start" className="h-4 w-4" />
                  View Details
                  <ArrowRight
                    data-icon="inline-end"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>
              </div>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
