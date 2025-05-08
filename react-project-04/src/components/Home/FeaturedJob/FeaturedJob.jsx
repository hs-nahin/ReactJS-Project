import { useEffect, useState } from 'react';
import Job from './Job/Job.jsx';

const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(false);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    const visibleJobs = showAllJobs ? jobs : jobs.slice(0, 4);

    return (
        <div className="mx-auto px-4 flex flex-col items-center justify-center mt-36">
            <div className="text-center mt-12">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold">Featured Jobs</h2>
                <p className='text-center text-gray-500 mt-5 text-sm sm:text-base md:text-sm lg:text-xl xl:text-2xl'>Explore thousands of job opportunities with all the information you need. It is your future.</p>
                <h3 className='text-2xl sm:text-2xl md:text-3xl font-semibold mt-5 mb-12 text-gray-700'>Total Jobs: {jobs.length}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-7xl">
                {visibleJobs.map(job => (
                    <div key={job.id} className="w-full max-w-xs sm:max-w-md lg:max-w-none mx-auto">
                        <Job job={job} />
                    </div>
                ))}
            </div>
            <div className={!showAllJobs && jobs.length > 4 ? '' : 'hidden'}>
                <button
                    onClick={() => setShowAllJobs(true)}
                    className="py-2 sm:py-3 px-6 sm:px-10 rounded-sm bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-indigo-600 hover:to-purple-600 transition duration-500 ease-in-out transform hover:scale-105 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                >
                    Show All Jobs
                </button>
            </div>
        </div>
    );
};

export default FeaturedJob;
