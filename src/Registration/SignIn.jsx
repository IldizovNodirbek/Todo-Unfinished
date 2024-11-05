import { Link, useNavigate } from "react-router-dom";
import target from "../assets/target.png";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../Redux/userSlice";

function SignIn() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/todo");
  };

  return (
    <div className=" border-gray-700 p-4">
      <div className="flex">
        <div className="flex items-center">
          <img
            src={target}
            alt="arrow-svg-photo"
            className="w-[40px] h-[40px]"
          />
          <h1 className="text-3xl ml-4 font-bold">Daily Tasks</h1>
        </div>
        <div className="flex ml-auto">
          <Link
            to="/signup"
            className="bg-black text-white px-8 py-2 rounded hover:bg-gray-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="mt-28 border border-gray-300 p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold">Sign In</h2>
        <p className="text-sm mb-6 mt-2">
          Welcome back! Please enter your email to sign in.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              ref={inputRef}
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
