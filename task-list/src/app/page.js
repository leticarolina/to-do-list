import Image from "next/image";
import { QuoteContainer } from "./components/QuoteConteiner";

export default function Home() {
  return (
    <div className="mx-4 h-screen">
      {/* <!-- QUOTE CONTAINER --> */}
      <div className="mb-3">
        <QuoteContainer />
      </div>

      {/* <!-- ALL DAYS QUOTE CONTAINER --> */}

      <div className="bg-pink-200 mt-10 flex-col space-y-8 ">
        <div className="h-96 w-64 bg-blue-300 "></div>
        <div className="h-96 w-64 bg-blue-300 "></div>
      </div>
    </div>

    // <!-- <form id="new-todo-form">
    //   <label for="todo-input" class="text-green-400"> Todo List</label>
    //   <input type="text" id="todo-input" />
    //   <button type="submit">Add Todo</button>
    // </form> -->

    // <!-- <template id="list-item-template">
    //   <li class="list-item" id="">
    //     <label class="list-item-label">
    //       <input type="checkbox" data-list-item-checkbox />
    //       <span data-list-item-text class="data-text"> </span>
    //     </label>
    //     <button data-button-delete>Delete</button>
    //   </li>
    // </template> -->
    // <template id="list-item-template">
    //   <li class="list-item-js flex justify-between items-center mb-1" id="">
    //     <label class="list-item-label">
    //       <input
    //         type="checkbox"
    //         data-list-item-checkbox
    //         class="appearance-none w-4 h-4 border rounded-sm border-gray-400 mr-3 checked:bg-green-400 bg-red-200 group-focus-within:line-through peer"
    //       />
    //       <span
    //         data-list-item-text
    //         class="data-text align-text-bottom peer peer-checked:line-through peer-checked:text-gray-500"
    //       >
    //       </span>
    //     </label>
    //     <button class="hover:bg-gray-300 rounded-full">
    //       <img
    //         data-button-delete
    //         src="/public/images/close.svg"
    //         alt="close"
    //         class="w-5"
    //       />
    //     </button>
    //   </li>
    // </template>
  );
}
