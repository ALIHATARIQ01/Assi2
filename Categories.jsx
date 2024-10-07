import React from 'react';
import './Categories.css';

const Categories = () => {
    const categories = ['Beachfront', 'Cabins', 'Trending', 'Villas', 'Unique stays'];

    return (
        <div className="categories">
            {categories.map((category, index) => (
                <button key={index} className="category-button">
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
