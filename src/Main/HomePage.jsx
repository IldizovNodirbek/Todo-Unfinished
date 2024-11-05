import { Link } from "react-router-dom";
import target from "../assets/target.png";

function HomePage() {
  return (
    <div className="border-gray-700 p-4">
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
            to="/signin"
            className="bg-black text-white px-8 py-2 rounded hover:bg-gray-700"
          >
            Sign-in
          </Link>
        </div>
      </div>
      <div className="text-center font-bold">
        <h1 className="mt-20 text-[80px]">Daily Tasks</h1>
        <p className="pl-[300px] pr-[300px] text-2xl">
          After a stroke, it can take a time to figure out how to do the tasks
          that make up daily life. Here are some tips. Find useful services and
          connect with others living with heart disease or stroke
        </p>
        <div className="mt-10">
          <Link
            to="signup"
            className="bg-black text-white px-8 py-2 rounded hover:bg-gray-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
