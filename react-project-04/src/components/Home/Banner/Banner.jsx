// Banner Component
import 'react';
import { TypeAnimation } from 'react-type-animation';
import image from '/src/assets/images/user-hasnat.png';
const Banner = () => {
    return (
        <header className="flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between px-4 sm:px-0 bg-purple-50">
            {/* First Part */}
            <div className="sm:w-1/2 sm:ml-10 lg:ml-36 text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-700 mb-4 sm:mb-6 lg:mb-8 leading-loose" style={{ lineHeight: '5.1rem' }}>One Step<br />Closer To Your<br />
                <TypeAnimation className="text-purple-500" sequence={['Dream Job',1000,]}wrapper="span"speed={50}style={{ fontSize: '2em', display: 'inline-block' }}repeat={Infinity}/></h1>
                <p className="text-lg sm:text-3xl mb-4 sm:mb-6 lg:mb-8 text-gray-500">Explore diverse career paths with detailed guidance to streamline your job search and seize opportunities seamlessly. Discover your future today!</p>
                <div className="flex justify-center sm:justify-start mb-4 sm:mb-6 lg:mb-8">
                    <button className="py-2 sm:py-3 px-6 sm:px-10 rounded-sm bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-indigo-600 hover:to-purple-600 transition duration-500 ease-in-out transform hover:scale-105">Get Started</button>
                </div>
            </div>
            {/* Second Part */}
            <div className="sm:w-1/2">
                <img className="mx-auto sm:mx-0" src={image} alt="" />
            </div>
        </header>
    );
};

export default Banner;
