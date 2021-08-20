<template>
  <teleport to="#modal">
    <div
      class="fixed overflow-y-auto inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
    >
      <div
        class="bg-white rounded-md w-full mx-auto shadow-xl border border-gray-300 p-6 text-black sm:w-full sm:max-w-lg"
      >
        <div class="modal-header">
          <h3 class="text-xl leading-6 font-medium text-gray-900">Add Todo</h3>
          <p class="text-sm text-gray-500 mt-1">Create your Todo List</p>
        </div>
        <div class="border-t border-gray-300 my-5 py-4">
          <form action="">
            <div>
              <label for="title" class="block text-sm font-medium text-gray-700"
                >Title</label
              >
              <input
                type="text"
                name="title"
                id="title"
                class="mt-2 shadow-sm w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none py-2 px-3 focus:ring-blue-600 focus:ring-1"
              />
            </div>
          </form>
        </div>
        <div class="sm:flex sm:justify-end">
          <button
            class="w-full sm:w-auto rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white sm:text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:mr-3"
          >
            Add Todo
          </button>
          <button
            class="w-full sm:w-auto rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "Modal",
};
</script>
