import 'react';
import { AiOutlineDollar, AiOutlineHome, AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg1 from '../../assets/images/bg1.png';
import { saveJobApplication } from '../../utility/localstorage';

const JobInfo = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('You have applied successfully');
    }
    return (
        <section className='font-mono'>
            {/* Heading Section */}
            <div className='bg-purple-50'>
                <h1 className='text-center text-2xl font-semibold text-gray-700'>Job Details</h1>
                <img src={bg1} alt="" />
            </div>
            {/* Job Details Section */}
            <div className='flex flex-wrap justify-center items-start mt-9'> {/* Added mt-9 class */}
                <div className='flex flex-col justify-center items-start w-full md:w-1/2 lg:w-2/3 xl:w-1/2 px-4 md:px-8'> {/* Adjusted items-start class */}
                    {/* Job Description */}
                    <p className='font-bold'>Job Descriptions: <span className='text-gray-600 font-light'>{job.job_description}</span></p>
                    {/* Job Responsibilities */}
                    <p className='font-bold mt-5'>Job Responsibilities: <span className='text-gray-600 font-light'>{job.job_responsibility}</span></p>
                    {/* Educational Requirement */}
                    <p className='font-bold mt-5'>Educational Requirements: <span className='text-gray-600 font-light'>{job.educational_requirements}</span></p>
                    {/* Experience */}
                    <p className='font-bold mt-5'>Experience: <span className='text-gray-600 font-light'>{job.experiences}</span></p>
                </div>
                {/* Job Details Card */}
                <div className='bg-purple-50 max-w-md mx-auto rounded-lg p-8 mt-9 md:mt-0'> {/* Added mt-9 class */}
                    <h1 className="text-xl font-semibold mb-4">Job Details</h1>
                    <hr className="my-4" />
                    <div>
                        <h3 className="flex items-center">
                            <AiOutlineDollar className="mr-2 text-purple-700" />
                            <span className="mr-2 font-bold">Salary:</span>
                            <span className="text-gray-600">{job.salary}</span>
                        </h3>
                        <h3 className="flex items-center">
                            <AiOutlineUser className="mr-2 text-purple-700" />
                            <span className="mr-2 font-bold">Job Title:</span>
                            <span className="text-gray-600">{job.job_title}</span>
                        </h3>
                        <h1 className="text-xl font-semibold mt-8 mb-4">Contact Information</h1>
                        <hr className="my-4" />
                        <h3 className="flex items-center">
                            <AiOutlinePhone className="mr-2 text-purple-700" />
                            <span className="mr-2 font-bold">Phone:</span>
                            <span className="text-gray-600">{job.contact_information.phone}</span>
                        </h3>
                        <h3 className="flex items-center">
                            <AiOutlineMail className="mr-2 text-purple-700" />
                            <span className="mr-2 font-bold">Email:</span>
                            <span className="text-gray-600">{job.contact_information.email}</span>
                        </h3>
                        <h3 className="flex items-center">
                            <AiOutlineHome className="mr-2 text-purple-700" />
                            <span className="mr-2 font-bold">Address:</span>
                            <span className="text-gray-600">{job.contact_information.address}</span>
                        </h3>
                    </div>
                    <div className="mt-8">
                        <button onClick={handleApplyJob} className="w-full py-3 px-6 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-indigo-600 hover:to-purple-600 transition duration-500 ease-in-out transform hover:scale-105">Apply Now</button>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        </section>
    );
};

export default JobInfo;
