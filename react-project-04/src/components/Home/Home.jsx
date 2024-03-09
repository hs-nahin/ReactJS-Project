import 'react';
import Banner from './Banner/Banner';
import JobCategory from './JobCategory/JobCategory';

const Home = () => {
    return (
        <div className='font-mono'>
            <Banner/>
            <JobCategory/>
        </div>
    );
};

export default Home;