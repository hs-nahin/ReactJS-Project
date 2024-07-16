import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Category: {id}</h1>
        </div>
    );
};

export default Category;