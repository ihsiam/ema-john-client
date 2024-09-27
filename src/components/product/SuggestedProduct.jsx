import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { productData } from "../../static/data";
import ProductCard from "./ProductCard";

const SuggestedProduct = ({ data }) => {
  const [ProductData, setProductData] = useState(null);
  useEffect(() => {
    const d =
      productData && productData.filter((i) => i.category === data.category);
    setProductData(d);
  }, [data.category]);

  return (
    <div>
      {data ? (
        <div className="bg-white">
          <h2 className="heading text-[25px] font-[500] border-b mb-5">
            Related Product
          </h2>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px]">
            {ProductData &&
              ProductData.map((data, index) => (
                <ProductCard data={data} key={index} />
              ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SuggestedProduct;

SuggestedProduct.propTypes = {
  data: PropTypes.array.isRequired,
};
