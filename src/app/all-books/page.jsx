import AllBookCard from "@/components/books/AllBookCard";

const page = () => {
  return (
    <section
      aria-label="All Books"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      {/* Section header — reference style: "NEW PRODUCTS" two-tone heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="text-foreground">All </span>
          <span className="text-[#C89B5A]">Books</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Explore our extensive collection of literary masterpieces, timeless
          classics, and captivating page-turners ready to inspire your next
          reading journey.
        </p>
      </div>

      {/* Cards grid — narrower container so cards sit close together */}
      <div className="mx-auto mt-8 max-w-4xl">
        <AllBookCard />
      </div>
    </section>
  );
};

export default page;