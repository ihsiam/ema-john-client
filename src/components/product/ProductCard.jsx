import PropTypes from "prop-types";
import { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import ProductModal from "./ProductModal";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const name = data.name;
  const product_name = name.replace(/\s+/g, "-");

  return (
    <>
      <div className="w-full h-[370px] bg-white shadow rounded-lg p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={data.image_Url[0].url}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to="/">
          <h5 className="shop_name">{data.shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>

          <div className="flex">
            <AiFillStar className="mr-2 cursor-pointer" />
            <AiFillStar className="mr-2 cursor-pointer" />
            <AiFillStar className="mr-2 cursor-pointer" />
            <AiFillStar className="mr-2 cursor-pointer" />
            <AiFillStar className="mr-2 cursor-pointer" />
          </div>

          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className="productDiscountPrice">
                {data.price === 0 ? data.price : data.discount_price}$
              </h5>
              <h4 className="price">{data.price ? data.price + " $" : null}</h4>
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {data.total_sell} sold
            </span>
          </div>
        </Link>

        {/* side options */}
        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-2 top-14"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />
          <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            color="#444"
            title="Add to cart"
          />
          {open ? <ProductModal setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProductCard;
