import 'react';
import Banner from './Banner/Banner';
import FeaturedJob from './FeaturedJob/FeaturedJob';
import JobCategory from './JobCategory/JobCategory';

const Home = () => {
    return (
        <div className='font-mono'>
            <Banner/>
            <JobCategory/>
            <FeaturedJob/>
        </div>
    );
};

export default Home;