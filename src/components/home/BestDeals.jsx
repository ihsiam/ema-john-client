import { useEffect, useState } from "react";
import { productData } from "../../static/data";
import ProductCard from "../others/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const ProductData =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    const firstFive = ProductData && ProductData.slice(0, 5);
    setData(firstFive);
  }, []);

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="heading">
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data && data.length !== 0 && (
            <>
              {data &&
                data.map((data, index) => (
                  <ProductCard data={data} key={index} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
