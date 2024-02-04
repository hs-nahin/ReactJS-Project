import React, { useState } from 'react';

function App() {
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);

  const handleClick1 = () => {
    setIsSelected1(!isSelected1);
    setIsSelected2(false); // Ensure the other button is not selected
  };

  const handleClick2 = () => {
    setIsSelected2(!isSelected2);
    setIsSelected1(false); // Ensure the other button is not selected
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full md:w-3/5 bg-gray-800 rounded-lg shadow-md">
        {/* Header Name */}
        <header id='header-area' className="py-5">
          <h1 className="text-3xl text-center font-semibold text-blue-300">
            Na-Dos
          </h1>
        </header>

        {/* Main Area*/}
        <main id='todo-wrapper' className='px-5'>
          {/* Input Area */}
          <div className='flex flex-col md:flex-row items-center justify-evenly mt-5 md:mt-0'>
            {/* Title */}
            <div className="mb-3 md:mb-0">
              <label htmlFor="title" className='mr-5 text-blue-300'>Title</label>
              <br />
              <input type="text" id="title" placeholder='Add Your Task Name' name="title" className='bg-gray-700 rounded-sm text-blue-300 outline-none w-full md:w-64 h-10 px-4'/>
            </div>
            {/* Description */}
            <div className='ml-0 md:ml-5'>
              <label htmlFor="description" className='mr-5 text-blue-300'>Description</label>
              <br />
              <input type="text" id="description" placeholder="Add Your Descriptions for the task" name="description" className="bg-gray-700 rounded-sm text-blue-300 outline-none w-full md:w-72 h-10 px-4" />
            </div>
            {/* Button */}
            <div>
              <button type="button" className='bg-pink-700 text-blue-100 p-2 rounded-sm hover:bg-pink-800 transition duration-300 mt-5 md:mt-5'>Add Task</button>
            </div>
          </div>
          <hr className='my-5'/>
          {/* Input Area Ends */}
          
          {/* To Do List Area */}
          <footer id='footer-area' className='px-5'>
            {/* Button Area For ToDo and Completed */}
            <div className="flex">
            <button className={`flex-1 bg-gray-600 text-blue-100 p-2 rounded-r-sm rounded-l-none transition duration-300 ${isSelected1 ? 'bg-pink-800' : ''}`} onClick={handleClick1}>Todo</button>
              <button className={`flex-1 bg-gray-700 text-blue-100 p-2 rounded-r-sm rounded-l-none transition duration-300 ${isSelected2 ? 'bg-sky-800' : ''}`} onClick={handleClick2}>Completed</button>
            </div>
            <div id="todo-list" className='mb-10 mt-5'>
              <h3 className='text-3xl mt-2 text-blue-300'>Task 1</h3>
              <p className='text-2xl mt-1 text-blue-300'>Description</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
