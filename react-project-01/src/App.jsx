import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

function App() {
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);

  const handleClick1 = () => {
    setIsSelected1(!isSelected1);
    setIsSelected2(false);
  };

  const handleClick2 = () => {
    setIsSelected2(!isSelected2);
    setIsSelected1(false); 
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full md:w-3/5 bg-gray-800 rounded-lg shadow-md">
        {/* Header Name */}
        <header id='header-area' className="py-5">
          <h1 className="text-3xl text-center font-semibold text-blue-400 hover:text-pink-600 duration-300 ease-in-out">
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
              <input type="text" id="title" placeholder='Add Your Task Name' name="title" className='bg-gray-700 rounded-sm text-blue-300 outline-none w-full md:w-64 h-10 px-4 hover:shadow-xl duration-300'/>
            </div>
            {/* Description */}
            <div className='ml-0 md:ml-5'>
              <label htmlFor="description" className='mr-5 text-blue-300'>Description</label>
              <br />
              <input type="text" id="description" placeholder="Add Your Descriptions for the task" name="description" className="bg-gray-700 rounded-sm text-blue-300 outline-none w-full md:w-72 h-10 px-4 hover:shadow-xl duration-300" />
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
            {/* Task Area */}
            <div id="todo-list" className='mb-10 mt-5 bg-slate-700 shadow-md hover:shadow-xl ease-in-out duration-300 flex justify-between'>
              <div className="">
                <h3 className='text-3xl mt-2 ml-5 pt-5 text-pink-600'>Task Name</h3>
                <p className='text-2xl mt-1 ml-5 pb-5 text-sky-300'>Description</p>
              </div>

              <div className="flex gap-5 mr-5 mt-12">
                <MdDeleteOutline className='text-3xl text-sky-300 cursor-pointer hover:text-pink-500 duration-300 ease-in-out' />
                <FaCheck className='text-3xl text-sky-300 hover:text-emerald-500 cursor-pointer duration-300 ease-in-out'/>
              </div>
            </div>

          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
