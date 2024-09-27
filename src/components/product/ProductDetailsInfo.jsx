import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductDetailsInfo({ data }) {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f5f6fb] px-3 md:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer md:text-[20px]"
            }
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? <div className="active_indicator" /> : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? <div className="active_indicator" /> : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? <div className="active_indicator" /> : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            {data.description}
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
          <div className="w-full flex justify-center">
            <h5>No Reviews have for this product!</h5>
          </div>
        </div>
      ) : null}

      {active === 3 && (
        <div className="w-full block md:flex p-5">
          <div className="w-full md:w-[50%]">
            <div className="flex items-center">
              <Link to={`/shop/preview/${data?.shop.name}`}>
                <img
                  src={data?.shop?.shop_avatar?.url}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full mr-2"
                />
              </Link>
              <div>
                <Link to={`/shop/preview/${data?.shop.name}`}>
                  <h3 className="shop_name pb-1 pt-1">{data.shop.name}</h3>
                </Link>
                <h5 className="pb-3 text-[15px]">(5) Ratings</h5>
              </div>
            </div>
            <p className="pt-2">{data.description}</p>
          </div>
          <div className="w-full md:w-[50%] mt-5 md:mt-0 md:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                Joined on: <span className="font-[500]">14 March, 2023</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products: <span className="font-[500]">1,234</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Reviews: <span className="font-[500]">23</span>
              </h5>
              <Link to="/">
                <div className="button !rounded-[4px] mt-3">
                  <h4 className="text-white">Visit Shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ProductDetailsInfo.propTypes = {
  data: PropTypes.array.isRequired,
};
