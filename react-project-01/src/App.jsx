import React from 'react';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full md:w-3/5 bg-white rounded-lg shadow-md">
        {/* Header Name */}
        <header id='header-area' className="py-5">
          <h1 className="text-3xl text-center font-semibold text-sky-600">
            Na-Dos
          </h1>
        </header>

        {/* Main Area*/}
        <main id='todo-wrapper' className='px-5'>

          {/* Input Area */}
          <div id='todo-input-area' className='flex flex-col md:flex-row items-center justify-evenly mt-5 md:mt-0'>
              {/* Title */}
              <div id="todo-input-item" className="mb-3 md:mb-0">
                <label htmlFor="title" className='mr-5'>Title</label>
                <br />
                <input type="text" id="title" placeholder='Add Your Task Name' name="title" className='bg-sky-200 rounded-sm text-sky-600 outline-none w-full md:w-64 h-10 px-4'/>
              </div>
              {/* Description */}
              <div id="todo-input-item" className='ml-0 md:ml-5'>
                <label htmlFor="description" className='mr-5'>Description</label>
                <br />
                <input type="text" id="description" placeholder="Add Your Descriptions for the task" name="description" className="bg-sky-200 rounded-sm text-sky-600 outline-none w-full md:w-72 h-10 px-4" />
              </div>
            {/* Button */}
            <div id="">
              <button type="button" className='bg-rose-600 text-sky-100 p-2 rounded-sm hover:bg-rose-800 transition duration-300 mt-5 md:mt-5'>Add Task</button>
            </div>
          </div>
          <hr className='my-5'/>
            {/* Input Area Ends */}

            {/* To Do List Area */}
            <footer id='footer-area' className='px-5'>
              {/* Button Area For ToDo and Completed */}
              <div id="button-area" className="flex">
                <button className='flex-1 bg-rose-600 text-sky-100 p-2 rounded-l-sm rounded-r-none hover:bg-rose-800 transition duration-300'>Todo</button>
                <button className='flex-1 bg-sky-600 text-sky-100 p-2 rounded-r-sm rounded-l-none hover:bg-sky-700 transition duration-300'>Completed</button>
              </div>
              <div id="todo-list" className='mb-10 mt-5'>
                <h3 className='text-3xl mt-2'>Task 1</h3>
                <p className='text-2xl mt-1'>Description</p>
              </div>
            </footer>

        </main>


      </div>
    </div>
  );
}

export default App;
