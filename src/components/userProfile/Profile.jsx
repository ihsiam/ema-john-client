import { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.User);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phoneNumber, password);
  };
  return (
    <div className="w-full">
      <div className="flex justify-center w-full">
        <div className="relative">
          <img
            src={`http://localhost:5000/${user.avatar}`}
            className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
            alt=""
          />
          <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
            <input type="file" id="image" className="hidden" />
            <label htmlFor="image">
              <AiOutlineCamera />
            </label>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full pl-2 md:pl-5">
        <form onSubmit={handleSubmit} aria-required={true}>
          <div className="w-full md:flex block pb-3">
            <div className=" w-[100%] md:w-[50%]">
              <label className="block pb-2">Full Name</label>
              <input
                type="text"
                className="input !w-[95%] mb-4 md:mb-0"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className=" w-[100%] md:w-[50%]">
              <label className="block pb-2">Email Address</label>
              <input
                type="text"
                className="input !w-[95%] mb-1 md:mb-0"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full md:flex block pb-3">
            <div className=" w-[100%] md:w-[50%]">
              <label className="block pb-2">Phone Number</label>
              <input
                type="number"
                className="input !w-[95%] mb-4 md:mb-0"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className=" w-[100%] md:w-[50%]">
              <label className="block pb-2">Enter your password</label>
              <input
                type="password"
                className="input !w-[95%] mb-4 md:mb-0"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <input
            className="w-[200px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer"
            required
            value="Update"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
