"use client";

import { useState } from "react";

export function WeekDay({ day }) {
  const [newTask, setNewTask] = useState();

  return (
    <div className="h-96 w-64 bg-blue-300 ">
      <h1>{day}</h1>

      <form id="new-task-form">
        <input
          type="text"
          id="task-input"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <div>{newTask}</div>
    </div>
  );
}

//render each day name separetely
//have an input and button to add task
