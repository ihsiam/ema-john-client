import PropTypes from "prop-types";
import headPhone from "../../assets/img/headphone.png";
import Counter from "./Counter";
export default function EventCard({ active }) {
  return (
    <div
      className={`w-full block rounded-lg bg-white lg:flex p-4 ${
        active ? "mb-0" : "mb-12"
      }`}
    >
      <div className="w-full lg:w-[50%] m-auto flex items-center justify-center">
        <img
          src={headPhone}
          alt=""
          srcSet=""
          className="w-full h-[250px] md:w-[400px] md:h-[400px]"
        />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center mt-5 lg:mt-0">
        <h2 className="productTitle">Classic head phone</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          provident dolorem, id molestiae aliquid, magnam vitae aperiam illum
          nostrum eum quasi ea. Soluta ducimus quod iusto sed excepturi quis
          ipsum tempora, possimus aspernatur deserunt voluptas eius animi magnam
          accusamus libero quidem veniam doloribus cum dolorum odit doloremque.
          Eius, ducimus magni?
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              120$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              90$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            50 sold
          </span>
        </div>
        <Counter />
        <br />
        <div className="flex items-center">
          <div className="button text-[#fff]">See Details</div>
          <div className="button text-[#fff] ml-5">Add to cart</div>
        </div>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  active: PropTypes.bool,
};
