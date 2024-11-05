import React, { useState } from "react";

function AddSpecialDay({ onClose, onAddTask }) {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [task, setTask] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = month
    ? Array.from(
        { length: new Date(2024, months.indexOf(month) + 1, 0).getDate() },
        (_, i) => i + 1
      )
    : [];

  const handleSubmit = () => {
    if (month && day && task) {
      onAddTask({ month, day, task });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-lg relative animate-fade-in">
        <h2 className="text-2xl font-bold text-center mb-6">Add Special Day</h2>

        <div className="flex space-x-4 mb-4">
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Month</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>

          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!month}
          >
            <option value="">Select Day</option>
            {daysInMonth.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>

        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 transition duration-300"
        >
          Add Task
        </button>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default AddSpecialDay;
