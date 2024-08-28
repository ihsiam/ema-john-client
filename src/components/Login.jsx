import axios from "axios";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "../utility/baseUrl";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [eye, setEye] = useState(false);

  const navigate = useNavigate();

  const OnSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${baseUrl}/user/login`,
        { email, password: pass },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          navigate("/");
        } else {
          toast.error(res.data.msg);
        }
      })
      .catch((err) => toast.error(err.response.data.msg));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 lg:px-8 gap-4">
      <div className="w-full mx-auto max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-gray-900 py-2 uppercase">
          Login into your account
        </h1>
      </div>

      <div className="mx-auto max-w-md bg-white w-full px-4 lg:px-8 py-6 shadow rounded-lg">
        <form className="space-y-5" onSubmit={OnSubmit}>
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

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name=""
                id="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 rounded"
              />
              <label htmlFor="checkbox" className="text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm font-medium text-blue-600 cursor-pointer">
              Forgotten password?
            </div>
          </div>

          <button
            type="submit"
            className="px-8 py-2 bg-blue-600 rounded-md text-white uppercase font-medium w-full text-center"
          >
            Login
          </button>

          <div className="flex gap-2 text-md">
            <h1 className="text-gray-900">Not have any account?</h1>
            <Link to="/sign-up">
              <h1 className="text-blue-600 cursor-pointer">Sign up</h1>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
