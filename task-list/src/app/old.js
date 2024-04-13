<div>
  <div class="font-semibold text-4xl text-zinc-400 flex justify-between px-3">
    Monday
    <img
      src="/public/images/arrow.svg"
      alt="arrow down"
      class="h-10 rotate-180"
    />
  </div>
  <div class="border border-gray-400 p-4 relative min-w-60 mt-2">
    <form id="new-todo-form" class="mb-4">
      {/* <!-- <label for="todo-input" class="text-green-400"> Add </label> --> */}
      <div class="flex relative h-11 w-full min-w-[200px]">
        {/* <!-- <input
      type="text"
      id="todo-input"
      class="pl-4 focus:outline-none mr-2 border-b-2 shadow-sm focus:shadow-lg shadow-gray-100 bg-transparent"
      placeholder="Write todo..."
    /> --> */}
        <div>
          <input
            id="todo-input"
            placeholder="Write todo here..."
            class="peer h-full w-full border-b border-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label class="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            write task...
          </label>
        </div>
        <button
          type="submit"
          class="bg-none text-gray-600 rounded-lg border-[1px] border-gray-600 w-24 mb-2 absolute right-0"
        >
          Add Todo
        </button>
      </div>
    </form>
    <div class="py-2 px-4">
      {/* <!-- <p class="mb-2 font-medium text-lg">Todo List:</p> --> */}
      <ul id="list"></ul>
    </div>
  </div>
</div>;
