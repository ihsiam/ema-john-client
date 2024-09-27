import { Outlet } from "react-router-dom";
import ProfileSidebar from "../components/userProfile/ProfileSideBar";

const ProfilePage = () => {
  return (
    <div className="mx-auto w-11/12 flex bg-[#f5f5f5] py-10">
      <div className="w-[50px] md:w-[335px] sticky md:mt-0 mt-[18%]">
        <ProfileSidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default ProfilePage;
