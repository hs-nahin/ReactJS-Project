import 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router-dom'; // Add this import
import bg1 from '../../assets/images/bg1.png';
import { getStoredJobApplication } from '../../utility/localstorage';

const AppliedJob = () => {
    const savedJobApplications = getStoredJobApplication(); 
    const jobs = useLoaderData();

    // Filter jobs based on the IDs of applied jobs retrieved from local storage
    const appliedJobs = jobs.filter(job => savedJobApplications.includes(job.id));

    return (
        <section>
            <div className='bg-purple-50'>
                <h1 className='text-center text-2xl font-semibold text-gray-700'>Applied Job</h1>
                <img src={bg1} alt="" />
            </div>

            <ul className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
            {
            appliedJobs.map(job => (
              <li key={job.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className='overflow-hidden h-48'>
                <img src={job.logo} alt="" className="w-24 h-24 object-contain float-left" />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{job.job_title}</h2>
                <p className='text-gray-600 mb-2'>{job.company_name}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                    <button className="px-3 py-1 font-semibold border border-gray-300 rounded text-gray-700">{job.remote_or_onsite}</button>
                    <button className="px-3 py-1 font-semibold border border-gray-300 rounded text-gray-700">{job.job_type}</button>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <IoLocationOutline className="text-gray-700 mr-2" />
                        <p className="text-gray-700">{job.location}</p>
                    </div>
                    <div className="flex items-center">
                        <AiOutlineDollar className="text-gray-700 mr-2" />
                        <p className="text-gray-700">{job.salary}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <Link to={`/job/${job.id}`}>
                        <button className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 transition duration-300">View Details</button>
                    </Link>
                </div>
            </div>
        </li>
    ))
    }
</ul>

        </section>
    );
};

export default AppliedJob;
