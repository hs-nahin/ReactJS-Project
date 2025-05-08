import 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='flex justify-center text-gray-600'>
      <div className='flex gap-10'>
        <NavLink to="/" className={({ isActive }) => `transition ease-in-out duration-300 ${isActive ? 'text-transparent bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text' : ''} hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-800 hover:bg-clip-text`}>
          Home
        </NavLink>
        <NavLink to="/statistics" className={({ isActive }) => `transition ease-in-out duration-300 ${isActive ? 'text-transparent bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text' : ''} hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-800 hover:bg-clip-text`}>
          Statistics
        </NavLink>
        <NavLink to="/jobs" className={({ isActive }) => `transition ease-in-out duration-300 ${isActive ? 'text-transparent bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text' : ''} hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-800 hover:bg-clip-text`}>
          Applied Jobs
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => `transition ease-in-out duration-300 ${isActive ? 'text-transparent bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text' : ''} hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-800 hover:bg-clip-text`}>
          Blogs
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
