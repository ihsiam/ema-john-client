import PropTypes from "prop-types";
import { useState } from "react";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { IoBagHandleOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Cart({ setOpenCart }) {
  const data = [
    {
      name: "Iphone 15 pro",
      price: 345,
    },
    {
      name: "Iphone 15 pro",
      price: 345,
    },
    {
      name: "Iphone 15 pro",
      price: 345,
    },
    {
      name: "Iphone 15 pro",
      price: 345,
    },
    {
      name: "Iphone 15 pro",
      price: 345,
    },
    {
      name: "Iphone 15 pro",
      price: 345,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] md:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        <div className="flex flex-col h-screen">
          <div className="fixed top-0 right-0 w-[80%] md:w-1/4 p-4 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <IoBagHandleOutline size={25} />
              <h1 className="text-[20px] font-[500]">
                {data && data.length === 0 ? "No Item" : `${data.length} items`}
              </h1>
            </div>
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
          <div className="flex-grow mt-16 mb-16 overflow-y-auto px-2 py-4 bg-gray-100">
            <div className="space-y-4">
              {data && data.length === 0 ? (
                <div className="w-full flex items-center justify-center pt-[120px]">
                  <h1 className="text-[20px] font-[500]">No Item to show</h1>
                </div>
              ) : (
                data.map((data, index) => (
                  <SingleItem data={data} key={index} />
                ))
              )}
            </div>
          </div>

          <div className="fixed bottom-0 right-0 w-[80%] md:w-1/4 p-2">
            <Link to="/checkout">
              <div
                className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
              >
                <h1 className="text-[#fff] text-[18px] font-[600]">
                  Checkout Now (USD$ 400)
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const SingleItem = ({ data }) => {
  const [value, setValue] = useState(1);
  return (
    <div className="border-b px-4 py-3 bg-white">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-center gap-1">
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span>{value}</span>
          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => setValue(value - 1)}
          >
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        <div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="w-[80px] h-[80px] rounded-[5px]"
          />
        </div>
        <div>
          <h1 className="font-[600] text-[17px]">{data.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            ${data.price} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US$ 999
          </h4>
        </div>
        <RxCross1 size={25} className="cursor-pointer" />
      </div>
    </div>
  );
};

SingleItem.propTypes = {
  data: PropTypes.object.isRequired,
};

Cart.propTypes = {
  setOpenCart: PropTypes.func.isRequired,
};
