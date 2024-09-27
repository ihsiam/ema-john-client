import BestDeals from "../components/home/BestDeals";
import Categories from "../components/home/Categories";
import Events from "../components/home/Events";
import FeaturedProduct from "../components/home/FeaturedProduct";
import Hero from "../components/home/Hero";
import Sponsored from "../components/home/Sponsored";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
    </div>
  );
}
