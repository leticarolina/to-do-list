import Image from "next/image";
import { useState } from "react";
export function IndividualTask({
  task,
  deleteTask,
  toggleTask,
  id,
  completed,
}) {
  return (
    <div>
      <li className="" id="list">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTask(id)}
        />
        <label
          className={completed ? "line-through text-gray-500 ml-2" : "ml-2"}
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
