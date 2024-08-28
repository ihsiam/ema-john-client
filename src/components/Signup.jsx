import axios from "axios";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "../utility/baseUrl";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [eye, setEye] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const OnSubmit = async (e) => {
    e.preventDefault();

    // req config
    const config = { Headers: { "Content-Type": "multipart/form-data" } };

    // append user data
    const userData = new FormData();
    userData.append("file", avatar);
    userData.append("name", name);
    userData.append("email", email);
    userData.append("password", pass);

    // req handle
    axios
      .post(`${baseUrl}/user/create-user`, userData, config)
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.msg);
        }
      })
      .catch((err) => toast.error(err.response.data.msg));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 lg:px-8 gap-4">
      <div className="w-full mx-auto max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-gray-900 py-2 uppercase">
          Create your account
        </h1>
      </div>

      <div className="mx-auto max-w-md bg-white w-full px-4 lg:px-8 py-6 shadow rounded-lg">
        <form className="space-y-5" onSubmit={OnSubmit}>
          <div className="flex flex-col gap-1">
            <label
              className="font-medium text-gray-700 text-lg"
              htmlFor="fullName"
            >
              Full name
            </label>
            <input
              className="w-full border border-gray-300 appearance-none rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              type="text"
              name=""
              id="fullName"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="font-medium text-gray-700 text-lg"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full border border-gray-300 appearance-none rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              type="email"
              name=""
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1 relative">
            <label
              className="font-medium text-gray-700 text-lg"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full border border-gray-300 appearance-none rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              type={eye ? "text" : "password"}
              name=""
              id="password"
              value={pass}
              required
              onChange={(e) => setPass(e.target.value)}
            />
            <div className="absolute right-2 top-10 cursor-pointer">
              {eye ? (
                <AiOutlineEye size={25} onClick={() => setEye(!eye)} />
              ) : (
                <AiOutlineEyeInvisible size={25} onClick={() => setEye(!eye)} />
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full overflow-hidden">
              {avatar ? (
                <img
                  src={URL.createObjectURL(avatar)}
                  className="h-full w-full object-cover rounded-full"
                />
              ) : (
                <RxAvatar className="h-8 w-8" />
              )}
            </span>

            <label
              htmlFor="avatar-input"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 uppercase bg-white"
            >
              <span>Upload Image</span>
              <input
                type="file"
                name=""
                id="avatar-input"
                accept=".jpg,.jpeg,.png"
                onChange={handleAvatar}
                className="sr-only"
              />
            </label>
          </div>

          <button
            type="submit"
            className="px-8 py-2 bg-blue-600 rounded-md text-white uppercase font-medium w-full text-center"
          >
            Register
          </button>

          <div className="flex gap-2 text-md">
            <h1 className="text-gray-900">Already have account?</h1>
            <Link to="/log-in">
              <h1 className="text-blue-600 cursor-pointer">Log In</h1>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
