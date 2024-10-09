"use client";
import { useState, useEffect } from "react";
import { IndividualTask } from "./IndividualTask";

export function ToDoCard({ day, week }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function AddNewTask(e) {
    e.preventDefault();
    if (newTask === "") return;

    setTasks((currentTasks) => {
      return [
        { name: newTask, id: crypto.randomUUID(), completed: false },
        ...currentTasks,
      ];
    });
    console.log(tasks);
    setNewTask("");
  }

  // function toggleTask(id) {
  //   setTasks((currentTasks) => {

  //     return currentTasks.map((t) => {
  //       if (t.id === id) {
  //         return { ...t, completed: !t.completed };
  //       }
  //       return t;
  //     });
  //   });
  // }

  function toggleTask(id) {
    setTasks((currentTasks) => {
      // This line searches for the task that matches the provided id. If it exists, it gets stored in taskToToggle.
      const taskToToggle = currentTasks.find((t) => t.id === id);

      if (taskToToggle) {
        const isCompleted = taskToToggle.completed; // check if the task is currently marked as completed.

        // Filter out, create a new array of tasks that excludes the task being toggled.
        const filteredTasks = currentTasks.filter((t) => t.id !== id);

        //create a new task object that has the same properties as taskToToggle, but with its completed status inverted.
        const updatedTask = { ...taskToToggle, completed: !isCompleted };

        // If the task is now completed, add it to the end
        return isCompleted
          ? [updatedTask, ...filteredTasks]
          : [...filteredTasks, updatedTask];
      }

      // Return the currentTasks if no task was found
      return currentTasks;
    });
  }

  function deleteTask(id) {
    setTasks((currentTasks) => {
      return currentTasks.filter((t) => {
        return t.id != id;
      });
    });
  }

  return (
    <div className=" h-96 w-64 bg-blue-300 ">
      <h1>{day}</h1>

      <form id="new-task-form">
        <input
          type="text"
          id="task-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" onClick={AddNewTask}>
          Add
        </button>
      </form>

      <div>
        <ul id="list">
          {tasks != null &&
            tasks.map((task) => {
              return (
                <IndividualTask
                  key={task.id}
                  id={task.id}
                  task={task.name}
                  completed={task.completed}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

//render each day name separetely
//have an input and button to add task
