import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      fetch("https://dragon-news-server-3pq6dm92z-hasnat-shahriyars-projects.vercel.app/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error))
    }, [])
    
    return (
        <div>
            <h4>All Categories</h4>
            <div className='ps-4 e'>
            {
                categories.map((cat => <p key={cat.id}>
                    <Link to={`/category/${cat.id}`} className='text-decoration-none text-black'>{cat.name}</Link>
                </p>))
            }
            </div>
        </div>
    );
};

export default LeftNav;