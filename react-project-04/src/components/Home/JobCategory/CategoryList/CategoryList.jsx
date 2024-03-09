/* eslint-disable react/prop-types */
import 'react';

const CategoryList = ({ cat }) => {
    const {title, image, jobs} = cat;
    return (
        <section className="flex justify-center cursor-pointer">
            <div className="max-w-md mx-2 my-4 p-6 bg-purple-50 rounded-md hover:shadow-md transition duration-300 flex flex-col justify-between" style={{ width: '311px', height: '244px' }}>
                <div className="flex justify-center items-center bg-purple-100 w-20 h-16">
                    <img className="w-10 h-10" src={image} alt="image-unavailable" />
                </div>
                <div className="mt-4">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-xl text-gray-500">{jobs} Jobs Available</p>
                </div>
            </div>
        </section>
    );
};

export default CategoryList;
