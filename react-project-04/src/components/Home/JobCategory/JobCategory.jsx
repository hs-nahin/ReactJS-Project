import { useEffect, useState } from 'react';
import CategoryList from './CategoryList/CategoryList.jsx';

const JobCategory = () => {
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('jobs-category.json');
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCategory(data); // Since there's no key, just set the entire data array
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center mt-36">
      <div>
        <h1 className='text-center mt-12 text-4xl sm:text-5xl md:text-6xl font-semibold'>Job Category List</h1>
        <p className='text-center text-gray-500 mt-5 mb-12 text-sm sm:text-base md:text-sm lg:text-xl xl:text-2xl'>Here are some Job Categories you might like</p>
        {error && <div>Error: {error}</div>}
        <section className='flex flex-wrap justify-center gap-5'>
          {category.map(cat => (
            <CategoryList key={cat.id} id={cat.id} cat={cat} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default JobCategory;
