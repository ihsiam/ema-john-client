import BestDeals from "../components/home/BestDeals";
import Categories from "../components/home/Categories";
import FeaturedProduct from "../components/home/FeaturedProduct";
import Hero from "../components/home/Hero";
import Sponsored from "../components/home/Sponsored";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <BestDeals />
      <FeaturedProduct />
      <Sponsored />
    </div>
  );
}
