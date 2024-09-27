import { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductDetailsInfo from "../components/product/ProductDetailsInfo";
import SuggestedProduct from "../components/product/SuggestedProduct";
import { productData } from "../static/data";

export default function ProductDetails() {
  const { id } = useParams();
  const name = id.replace(/-/g, " ");
  const [data, setData] = useState(null);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(null);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const Data = productData.find((data) => data.name === name);
    setData(Data);
  }, [name]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleMessageSubmit = async () => {
    navigate("/inbox");
  };
  return (
    <div className="bg-white">
      {data ? (
        <div className="w-11/12 mx-auto lg:w-[80%]">
          <div className="w-full py-5">
            <div className="block w-full lg:flex">
              <div className="w-full lg:w-[50%] flex items-center flex-col">
                <img
                  src={data?.image_Url[select].url}
                  alt=""
                  className="w-[80%]"
                />
                <div className="w-full flex">
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[0].url}
                      alt=""
                      className="lg:h-[200px] overflow-hidden mr-3 mt-3"
                      onClick={() => setSelect(0)}
                    />
                  </div>
                  <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[1].url}
                      alt=""
                      className="lg:h-[200px] overflow-hidden mr-3 mt-3"
                      onClick={() => setSelect(1)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[50%] pt-5">
                <h1 className="productTitle">{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className="productDiscountPrice">
                    {data.discount_price}$
                  </h4>
                  <h3 className="price">
                    {data.price ? data.price + "$" : null}
                  </h3>
                </div>

                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        color={click ? "red" : "#333"}
                        onClick={() => setClick(!click)}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div className="button mt-6 !rounded w-fit flex items-center">
                  <span className="text-white flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
                <div className="flex flex-col items-start pt-8">
                  <div className="flex justify-center items-center">
                    <Link to={`/shop/preview/${data?.shop.name}`}>
                      <img
                        src={data?.shop?.shop_avatar?.url}
                        alt=""
                        className="w-[50px] h-[50px] rounded-full mr-2"
                      />
                    </Link>
                    <div>
                      <Link to={`/shop/preview/${data?.shop.name}`}>
                        <h3 className="shop_name pb-1 pt-1">
                          {data.shop.name}
                        </h3>
                      </Link>
                      <h5 className="pb-3 text-[15px]">(5) Ratings</h5>
                    </div>
                  </div>
                  <div
                    className="button bg-[#6443d1] mt-4 !rounded"
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-white flex items-center">
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfo data={data} />
          <br />
          <br />
          <SuggestedProduct data={data} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
}
