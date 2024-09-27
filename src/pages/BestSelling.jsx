import { useEffect, useState } from "react";
import ProductCard from "../components/product/ProductCard";
import { productData } from "../static/data";

export default function BestSelling() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const Data =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    setData(Data);
  }, []);
  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px]">
        {data &&
          data.map((data, index) => <ProductCard data={data} key={index} />)}
      </div>
    </div>
  );
}
