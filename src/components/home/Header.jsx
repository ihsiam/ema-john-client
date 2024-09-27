import { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import { categoriesData, productData } from "../../static/data";
import Cart from "../others/Cart";
import Wishlist from "../others/Wishlist";
import DropDownCtg from "./DropDownCtg";
import Navbar from "./Navbar";

export default function Header() {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, isAuth } = useSelector((state) => state.User);

  const handleSearch = (e) => {
    setSearchTitle(e.target.value);

    const filterData =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(searchTitle.toLowerCase())
      );

    setSearchData(filterData);
  };

  window.addEventListener("scroll", () => {
    window.scrollY > 70 ? setActive(true) : setActive(false);
  });

  return (
    <>
      {/* 1st bar(logo, search, sellerBtn) */}
      <div className="w-11/12 mx-auto">
        <div className="hidden md:flex md:justify-between md:h-[50px] md:items-center md:my-[15px] lg:my-[20px]">
          {/* logo */}
          <div>
            <Link to="/">
              <img src={logo} alt="" srcSet="" className="w-[150px]" />
            </Link>
          </div>
          {/* searchbar */}
          <div className="w-[40%] lg:w-[50%] relative">
            <input
              type="text"
              value={searchTitle}
              onChange={handleSearch}
              placeholder="Search Product..."
              className="h-[40px] w-full border-[#3987db] border-2 rounded-md px-3"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {/* search Data box */}
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow rounded z-[9] p-4">
                {searchData &&
                  searchData.map((item) => {
                    const productName = item.name.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${productName}`} key={productName}>
                        <div className="w-full flex items-center py-3">
                          <img
                            src={item.image_Url[0].url}
                            alt=""
                            className="h-[35px] w-[35px] mr-[10px]"
                          />
                          <h1 className="text-sm">{item.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          {/* seller button */}
          <div className="button">
            <Link to="/seller/create-shop">
              <h1 className="text-[#fff] flex items-center">
                Become Seller <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      {/* 2nd bar(category box, navlink, wishlist, cart, profile) */}
      <div
        className={`${
          active ? "shadow fixed top-0 left-0 z-10" : null
        } transition hidden md:flex w-full items-center justify-between bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`w-11/12 mx-auto relative flex items-center justify-between`}
        >
          {/* category box */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[200px] lg:w-[270px] hidden md:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button className="h-[100%] w-full flex items-center justify-between pl-10 font-sans bg-white text-lg font-[500] rounded-t-md select-none">
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute top-4 right-2 cursor-pointer"
              />
              {dropDown ? (
                <DropDownCtg
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* navbar */}
          <div className="flex items-center">
            <Navbar />
          </div>
          {/* wishlist, cart and profile */}
          <div>
            <div className="flex items-center">
              {/* wishlist */}
              <div
                className="relative cursor-pointer ml-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 /83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 p-0 m-0 text-white leading-tight text-[12px] text-center font-mono">
                  0
                </span>
              </div>
              {/* cart */}
              <div
                className="relative cursor-pointer ml-[10px] lg:ml-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 /83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 p-0 m-0 text-white leading-tight text-[12px] text-center font-mono">
                  0
                </span>
              </div>
              {/* profile */}
              <div className="relative cursor-pointer ml-[10px] lg:ml-[15px]">
                <Link to="/user/profile">
                  {isAuth ? (
                    <img
                      src={`http://localhost:5000/${user.avatar}`}
                      className="w-[40px] h-[40px] rounded-full"
                      alt=""
                    />
                  ) : (
                    <CgProfile size={30} color="rgb(255 255 255 /83%)" />
                  )}
                </Link>
              </div>
            </div>
          </div>
          {/* wishlist and cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>
      </div>
      {/* mobile navbar */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm md:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img src={logo} alt="" className="cursor-pointer w-[70px]" />
            </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                1
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      1
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px relative]">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                  value={searchTitle}
                  onChange={handleSearch}
                />
                {searchData && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                    {searchData.map((i, index) => {
                      const d = i.name;

                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`} key={index}>
                          <div className="flex items-center">
                            <img
                              src={i.image_Url[0]?.url}
                              alt=""
                              className="w-[50px] mr-2"
                            />
                            <h5>{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Navbar setOpen={setOpen} />
              <div className="button w-fit ml-6">
                <Link to="/seller/create-shop">
                  <h1 className="text-[#fff] flex items-center">
                    Become Seller <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />

              <div className="w-full ml-6">
                <Link to="/user/profile">
                  {isAuth ? (
                    <div className="flex flex-col gap-2">
                      <div>
                        <img
                          src={`http://localhost:5000/${user.avatar}`}
                          alt=""
                          className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                        />
                      </div>
                      <div>
                        <h1 className="font-bold">{user.name}</h1>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Link
                        to="/log-in"
                        className="text-[18px] pr-[10px] text-[#000000b7]"
                      >
                        Login /
                      </Link>
                      <Link
                        to="/sign-up"
                        className="text-[18px] text-[#000000b7]"
                      >
                        Sign up
                      </Link>
                    </>
                  )}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
