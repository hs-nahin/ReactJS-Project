import 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router-dom';
import bg1 from '../../assets/images/bg1.png';
import { getStoredJobApplication } from '../../utility/localstorage';

const AppliedJob = () => {
    const savedJobApplications = getStoredJobApplication();
    const jobs = useLoaderData();

    const appliedJobs = jobs.filter(job => savedJobApplications.includes(job.id));

    return (
        <section className='font-mono'>
            <div className='bg-purple-50'>
                <h1 className='text-center text-2xl font-semibold text-gray-700'>Applied Job</h1>
                <img src={bg1} alt="" />
            </div>
            <div className='mt-6 sm:mt-12 lg:mt-16 xl:mt-20'>
                <ul className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-1'>
                    {appliedJobs.map(job => (
                        <li key={job.id} className="bg-white border overflow-hidden hover:shadow-md duration-150 ease-in-out cursor-pointer w-8/12 h-full mx-auto">
                            <div className='flex flex-col lg:flex-row'>
                                <div className='w-full lg:w-48 lg:h-auto bg-gray-200 flex justify-center items-center'>
                                    <img src={job.logo} alt="" className="w-24 h-24 object-contain" />
                                </div>
                                <div className='flex flex-col flex-grow p-4'>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{job.job_title}</h2>
                                    <p className='text-gray-600 mb-2'>{job.company_name}</p>
                                    <div className='flex flex-wrap mb-4'>
                                        <button className="px-3 py-1 font-bold border rounded border-[#7E90FE] text-[#7E90FE] mr-2 mb-2">{job.remote_or_onsite}</button>
                                        <button className="px-3 py-1 font-bold border rounded border-[#7E90FE] text-[#7E90FE] mb-2">{job.job_type}</button>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <IoLocationOutline className="text-gray-700 mr-2" />
                                        <p className="text-gray-700">{job.location}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <AiOutlineDollar className="text-gray-700 mr-2" />
                                        <p className="text-gray-700">{job.salary}</p>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-end lg:mt-24 lg:mr-8 w-full lg:w-auto text-center">
                                    <Link to={`/job/${job.id}`}>
                                        <button className="py-2 px-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-indigo-600 hover:to-purple-600 transition duration-500 ease-in-out transform hover:scale-105">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default AppliedJob;
