import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, changeStatus, deleteTask } from "../Redux/taskSlice";

function TodayTask() {
  const [newTask, setNewTask] = useState("");
  const [showMenu, setShowMenu] = useState(null);
  const [todayDate, setTodayDate] = useState("");

  // Correctly select todayTasks from the Redux store
  const tasks = useSelector((state) => state.tasks.todayTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const today = new Date();
    const formattedDate = `Today ${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}.${String(today.getDate()).padStart(2, "0")}.${today.getFullYear()}`;
    setTodayDate(formattedDate);
  }, []);

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(
        addTask({
          section: "todayTasks",
          task: { id: Date.now(), text: newTask, status: "todo" },
        })
      );
      setNewTask("");
    }
  };

  const handleChangeStatus = (id, status) => {
    dispatch(changeStatus({ section: "todayTasks", id, status }));
    setShowMenu(null);
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask({ section: "todayTasks", id }));
    setShowMenu(null);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <div className="bg-blue-600 text-white text-2xl font-semibold px-6 py-3 rounded-lg shadow-lg mb-6">
        {todayDate}
      </div>

      <div className="flex space-x-4 w-full max-w-4xl">
        {["todo", "inProgress", "done"].map((status) => (
          <div
            key={status}
            className="border border-gray-300 rounded-lg p-4 w-full bg-white shadow-md"
          >
            <div className="flex justify-between items-center mb-2">
              <h2
                className={`text-lg font-bold capitalize ${
                  status === "todo"
                    ? "text-blue-500"
                    : status === "inProgress"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                {status === "inProgress"
                  ? "In Progress"
                  : status === "done"
                  ? "Done"
                  : "To Do"}
              </h2>
            </div>

            <div className="flex flex-col space-y-2">
              {(tasks || [])
                .filter((task) => task.status === status)
                .map((task) => (
                  <div
                    key={task.id}
                    className="border border-gray-200 p-2 rounded-lg flex justify-between items-center bg-gray-50 relative"
                  >
                    <span className="font-medium text-gray-700">
                      {task.text}
                    </span>
                    <button
                      onClick={() => setShowMenu(task.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      &#8942;
                    </button>

                    {showMenu === task.id && (
                      <div className="absolute bg-white border border-gray-200 rounded-lg shadow-lg p-2 right-0 mt-2 z-10">
                        {status !== "inProgress" && (
                          <button
                            onClick={() =>
                              handleChangeStatus(task.id, "inProgress")
                            }
                            className="block text-left px-4 py-2 w-full hover:bg-gray-100 text-yellow-500 font-semibold"
                          >
                            In Progress
                          </button>
                        )}
                        {status !== "done" && (
                          <button
                            onClick={() => handleChangeStatus(task.id, "done")}
                            className="block text-left px-4 py-2 w-full hover:bg-gray-100 text-green-500 font-semibold"
                          >
                            Done
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteTask(task.id)}
                          className="block text-left px-4 py-2 w-full hover:bg-gray-100 text-red-500 font-semibold"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                ))}
            </div>

            {status === "todo" && (
              <div className="mt-4">
                <button
                  onClick={handleAddTask}
                  className="text-blue-500 font-semibold"
                >
                  + add task
                </button>
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Add a new task"
                  className="border-b-2 border-blue-500 outline-none mt-2 w-full p-1 text-gray-700"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodayTask;