import { productData } from "../../static/data";
import ProductCard from "../others/ProductCard";
const FeaturedProduct = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="heading">
          <h1>Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {productData &&
            productData.map((data, index) => (
              <ProductCard data={data} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
