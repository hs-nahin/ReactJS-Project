// Navigation.jsx
import 'react';

const Navigation = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex gap-10'>
                <a href='/' className='transition duration-200 ease-in-out hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-800 hover:bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-900 bg-clip-text'>Home</a>
                <a href='/review' className='transition duration-200 ease-in-out hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-800 hover:bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-900 bg-clip-text'>Statistics</a>
                <a href='/about' className='transition duration-200 ease-in-out hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-800 hover:bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-900 bg-clip-text'>Applied Jobs</a>
                <a href='/contact' className='transition duration-200 ease-in-out hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-800 hover:bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-900 bg-clip-text'>Blog</a>
            </div>
        </div>
    );
};

export default Navigation;