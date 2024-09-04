import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="bg-[#342ac8]">
        <div className="w-11/12 mx-auto md:flex md:justify-between md:items-center py-7 ">
          <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
            <span className="text-[#56d879]">Subscribe</span> us for get news{" "}
            <br />
            events and offers
          </h1>
          <div>
            <input
              type="text"
              required
              placeholder="Enter your email..."
              className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
            />
            <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-whie md:w-auto w-full">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row lg:justify-between gap-6 py-16 sm:text-center">
        <ul className="text-center lg:text-start flex lg:block flex-col items-center">
          <img
            src={logo}
            alt=""
            className="brightness-0 invert w-[150px] h-[60px]"
          />
          <br />
          <p>
            Where innovation meets adventure, gear up with the latest gadgets
            that fuel your passions.
          </p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter size={25} className="ml-4 cursor-pointer" />
            <AiFillInstagram size={25} className="ml-4 cursor-pointer" />
            <AiFillYoutube size={25} className="ml-4 cursor-pointer" />
          </div>
        </ul>

        <ul className="text-center lg:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center lg:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center lg:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-11/12 mx-auto flex flex-col gap-5 lg:flex-row lg:justify-between text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© 2024 Ema-John. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="flex items-center justify-center">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
