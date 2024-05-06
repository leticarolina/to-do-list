import Image from "next/image";

export function IndividualTask({
  task,
  deleteTask,
  id,
  toogleTask,
  completed,
}) {
  return (
    <div>
      <li className="" id="list">
        <label>
          <input
            type="checkbox"
            checked={completed}
            onClick={() => {
              toogleTask(id);
            }}
          />
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
