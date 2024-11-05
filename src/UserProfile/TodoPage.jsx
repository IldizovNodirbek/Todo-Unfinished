import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import target from "../assets/target.png";
import userIcon from "../assets/people.png";
import TodayTasks from "../DailyTasks/TodayTasks";
import WeeklyTasks from "../DailyTasks/WeeklyTasks";
import MonthlyTasks from "../DailyTasks/MonthlyTasks";
import AddSpecialDay from "../DailyTasks/AddSpecialDay";
import { useSelector } from "react-redux";

function TodoPage() {
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);

  const [isSpecialDayModalOpen, setSpecialDayModalOpen] = useState(false);

  const openSpecialDayModal = () => setSpecialDayModalOpen(true);
  const closeSpecialDayModal = () => setSpecialDayModalOpen(false);

  return (
    <div className="relative">
      <div
        className={`border border-[#5200FF] p-8 max-w-5xl mx-auto bg-white shadow-lg rounded-lg ${
          isSpecialDayModalOpen && "blur-sm"
        }`}
      >
        <div className="flex justify-between items-center border-b border-gray-300 pb-6 mb-6">
          <div className="flex items-center">
            <img src={target} alt="arrow-svg-photo" className="w-16 h-16" />
            <h1 className="text-4xl ml-6 font-bold">Daily Tasks</h1>
          </div>
          <div className="flex items-center">
            <img
              src={userIcon}
              alt="user-icon"
              className="w-12 h-12 rounded-full border border-gray-300 shadow-md mr-4"
            />
            <div className="flex flex-col">
              <span className="text-4xl font-bold">{name}</span>
            </div>
          </div>
        </div>

        <div className="flex mt-8">
          <div className="w-1/4 border-r border-gray-300 pr-6">
            <h2 className="text-2xl font-semibold mb-6">User</h2>
            <div className="flex items-center mb-8">
              <img
                src={userIcon}
                alt="user-icon"
                className="w-12 h-12 rounded-full border border-gray-300 shadow-md mr-4"
              />
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{name}</span>
                <span className="text-sm text-gray-500">{email}</span>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <Link
                to="/todo/today"
                className="p-3 rounded-lg bg-gray-200 hover:bg-gray-300 font-semibold text-gray-700"
              >
                Today's Challenges
              </Link>
              <Link
                to="/todo/weekly"
                className="p-3 rounded-lg bg-gray-200 hover:bg-gray-300 font-semibold text-gray-700"
              >
                Weekly Tasks
              </Link>
              <Link
                to="/todo/monthly"
                className="p-3 rounded-lg bg-gray-200 hover:bg-gray-300 font-semibold text-gray-700"
              >
                Monthly Tasks
              </Link>
              <button
                onClick={openSpecialDayModal}
                className="p-3 rounded-lg bg-gray-200 hover:bg-gray-300 font-semibold text-gray-700"
              >
                + Add Special Day
              </button>
            </div>
          </div>

          <div className="w-3/4 pl-6">
            <Routes>
              <Route path="today" element={<TodayTasks />} />
              <Route path="weekly" element={<WeeklyTasks />} />
              <Route path="monthly" element={<MonthlyTasks />} />
            </Routes>
          </div>
        </div>
      </div>

      {/* AddSpecialDay modal */}
      {isSpecialDayModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative z-50">
            <AddSpecialDay
              onClose={closeSpecialDayModal}
              onAddTask={(task) => console.log("Special day task added:", task)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoPage;
