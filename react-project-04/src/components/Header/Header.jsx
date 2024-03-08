// Header.jsx
import 'react';
import image from '../../assets/logo/nav-logo.gif';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row items-center justify-between px-4 py-2 sm:px-8 sm:py-4 md:px-16 lg:px-24 xl:px-32 font-mono'>
            <div className='flex items-center mb-4 sm:mb-0'>
                <img src={image} alt="Logo" className='w-40 sm:w-40 cursor-pointer'/>
            </div>
            <div className='md:flex flex-grow justify-center'>
                <Navigation/>
            </div>
            <div className='mt-4 sm:mt-0 flex justify-center sm:justify-end'>
                <button className='py-2 sm:py-3 px-6 sm:px-10 rounded-sm bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-indigo-600 hover:to-purple-600 transition duration-500 ease-in-out transform hover:scale-105'>Start Applying</button>
            </div>
        </header>
    );
};

export default Header;
