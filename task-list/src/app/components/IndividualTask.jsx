import Image from "next/image";
import { useState } from "react";
export function IndividualTask({
  task,
  deleteTask,
  ToggleTask,
  id,
  isCompleted,
  completed,
}) {
  const [isCompleted, setIsCompleted] = useState(completed);

  function ToggleTask() {
    setIsCompleted(!isCompleted); // Toggle completed state
  }

  return (
    <div>
      <li className="" id="list">
        <label
          onClick={() => {
            ToggleTask();
          }}
          className={isCompleted ? "line-through text-gray-500" : ""}
        >
          {task}
        </label>
        <button
          onClick={() => {
            deleteTask(id);
          }}
        >
          <Image
            src={"close.svg"}
            width={20}
            height={20}
            alt="Explorer logo"
          ></Image>
        </button>
      </li>
    </div>
  );
}
