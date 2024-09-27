import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { productData } from "../static/data";

export default function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [data, setData] = useState([]);
  useEffect(() => {
    if (category === null) {
      const Data =
        productData && productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(Data);
    } else {
      const Data =
        productData && productData.filter((data) => data.category === category);
      setData(Data);
    }
  }, [category]);
  return (
    <div className="w-11/12 mx-auto py-12">
      {data && data.length === 0 ? (
        <h1 className="text-center text-[20px]">No products Found!</h1>
      ) : (
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px]">
          {data &&
            data.map((data, index) => <ProductCard data={data} key={index} />)}
        </div>
      )}
    </div>
  );
}
