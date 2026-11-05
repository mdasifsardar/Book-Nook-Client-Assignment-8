import BannerSlider from "@/components/home/BannerSlider";
import NewArrivals from "@/components/home/NewArrivals";
import HowBorrowingWorks from "@/components/home/HowBorrowingWorks";
import TopCategories from "@/components/home/TopCategories";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <BannerSlider />
      <NewArrivals />
      <HowBorrowingWorks />
      <TopCategories />
    </div>
  );
}
