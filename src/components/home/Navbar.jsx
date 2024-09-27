import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../static/data";

export default function Navbar({ setOpen }) {
  const location = useLocation();
  return (
    <div className="block md:flex md:items-center">
      {navItems &&
        navItems.map((item, index) => (
          <div
            key={index}
            className="pb-[30px] md:pb-0"
            onClick={() => setOpen(false)}
          >
            <Link
              to={item.url}
              className={`${
                location.pathname === item.url
                  ? "text-[#17dd1f]"
                  : "text-black md:text-[#fff]"
              } font-[500] px-2 lg:px-6 cursor-pointer`}
            >
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  );
}

Navbar.propTypes = {
  setOpen: PropTypes.func,
};
