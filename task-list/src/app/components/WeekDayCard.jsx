"use client";
import { useState } from "react";
import { IndividualTask } from "./IndividualTask";

export function WeekDayCard({ day, week }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function AddNewTask(e) {
    e.preventDefault();
    if (newTask === "") return;

    setTasks((currentTasks) => {
      return [
        ...currentTasks,
        { name: newTask, id: crypto.randomUUID(), completed: false },
      ];
    });
    console.log(tasks);
    setNewTask("");
  }

  function toogleTask(id, completed) {
    setTasks((currentTasks) => {
      return currentTasks.map((t) => {
        if (t.id === id) {
          return { ...t, completed: completed };
        }
      });
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
    <div className="h-96 w-64 bg-blue-300 ">
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
                  deleteTask={deleteTask}
                  toogleTask={toogleTask}
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
