/* eslint-disable react/prop-types */
import 'react';
import { AiOutlineDollar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <section className='shadow-md h-auto w-full max-w-xl mx-auto'>
            <div className='ml-8 overflow-hidden h-24'>
                <img src={logo} alt="logo" className='w-24 h-24 object-contain float-left' />
            </div>
            <div className="ml-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 text-left">{job_title}</h2>
                <p className='text-gray-500 text-left'>{company_name}</p>
                <div className='mt-4'>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                </div>

                <div className="mt-4 flex mb-4 pr-44 text-gray-700">
                    <h2 className="flex mr-4"><IoLocationOutline className="text-2xl mr-2"></IoLocationOutline> {location}</h2>
                    <h2 className="flex"><AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>{salary}</h2>
                </div>

                <div>
                    <Link to={`/job/${id}`}>
                        <button className="mb-8 py-2 sm:py-3 px-6 sm:px-10 rounded-sm bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-indigo-600 hover:to-purple-600 transition duration-500 ease-in-out transform hover:scale-105">View Details</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Job;
