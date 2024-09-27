import axios from "axios";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { TbAddressBook } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "../../utility/baseUrl";

const ProfileSidebar = () => {
  const { user } = useSelector((state) => state.User);
  const location = useLocation();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await axios
      .get(`${baseUrl}/user/logOut`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.msg);
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  // Helper function to check if the current route matches the given path
  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      <Link to="/user/profile">
        <div className="flex items-center cursor-pointer w-full mb-8">
          <RxPerson size={20} color={isActive("/user/profile") ? "red" : ""} />
          <span
            className={`pl-3 ${
              isActive("/user/profile") ? "text-[red]" : ""
            } md:block hidden`}
          >
            Profile
          </span>
        </div>
      </Link>

      <Link to="/user/order">
        <div className="flex items-center cursor-pointer w-full mb-8">
          <HiOutlineShoppingBag
            size={20}
            color={isActive("/user/order") ? "red" : ""}
          />
          <span
            className={`pl-3 ${
              isActive("/user/order") ? "text-[red]" : ""
            } md:block hidden`}
          >
            Orders
          </span>
        </div>
      </Link>

      <Link to="/user/refunds">
        <div className="flex items-center cursor-pointer w-full mb-8">
          <HiOutlineReceiptRefund
            size={20}
            color={isActive("/user/refunds") ? "red" : ""}
          />
          <span
            className={`pl-3 ${
              isActive("/user/refunds") ? "text-[red]" : ""
            } md:block hidden`}
          >
            Refunds
          </span>
        </div>
      </Link>

      <Link to="/user/inbox">
        <div className="flex items-center cursor-pointer w-full mb-8">
          <AiOutlineMessage
            size={20}
            color={isActive("/user/inbox") ? "red" : ""}
          />
          <span
            className={`pl-3 ${
              isActive("/user/inbox") ? "text-[red]" : ""
            } md:block hidden`}
          >
            Inbox
          </span>
        </div>
      </Link>

      <Link to="/user/track-order">
        <div className="flex items-center cursor-pointer w-full mb-8">
          <MdOutlineTrackChanges
            size={20}
            color={isActive("/user/track-order") ? "red" : ""}
          />
          <span
            className={`pl-3 ${
              isActive("/user/track-order") ? "text-[red]" : ""
            } md:block hidden`}
          >
            Track Order
          </span>
        </div>
      </Link>

      <Link to="/user/changePassword">
        <div className="flex items-center cursor-pointer w-full mb-8">
          <RiLockPasswordLine
            size={20}
            color={isActive("/user/changePassword") ? "red" : ""}
          />
          <span
            className={`pl-3 ${
              isActive("/user/changePassword") ? "text-[red]" : ""
            } md:block hidden`}
          >
            Change Password
          </span>
        </div>
      </Link>

      <Link to="/user/address">
        <div className="flex items-center cursor-pointer w-full mb-8">
          <TbAddressBook
            size={20}
            color={isActive("/user/address") ? "red" : ""}
          />
          <span
            className={`pl-3 ${
              isActive("/user/address") ? "text-[red]" : ""
            } md:block hidden`}
          >
            Address
          </span>
        </div>
      </Link>

      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div className="flex items-center cursor-pointer w-full mb-8">
            <MdOutlineAdminPanelSettings
              size={20}
              color={isActive("/admin/dashboard") ? "red" : ""}
            />
            <span
              className={`pl-3 ${
                isActive("/admin/dashboard") ? "text-[red]" : ""
              } md:block hidden`}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
      )}
      <div
        className="single_item flex items-center cursor-pointer w-full mb-8"
        onClick={() => logoutHandler()}
      >
        <AiOutlineLogin size={20} color="" />
        <span className="pl-3 md:block hidden">Log out</span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
