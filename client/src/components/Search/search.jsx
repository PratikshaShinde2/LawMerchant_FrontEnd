import React, { useState } from "react";
import './search.css';
import lazyani from '../../animations/lazy404.json';
import Lottie from 'lottie-react';
import { Link } from "react-router-dom";

function Search() {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    return (
        <div className="container rule-search">
            <div className="category text-center">
                <h3>Select the category of your product..</h3>
                <div className="row cat-btns">
                    {["Food", "Electronics", "Agriculture", "Hardware", "General"].map((category) => (
                        <div key={category} className="col-6 col-sm-4 col-md-2 mb-2">
                            <button
                                className={`btn w-100 ${selectedCategory === category ? 'btn-custom-selected' : 'btn-outline-custom'}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="searchbar text-center mt-4">
                <form className="d-flex justify-content-center" role="search">
                    <input className="form-control me-2 w-50" type="search" placeholder="Search your product" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="rules mt-4 text-center">
                <Lottie animationData={lazyani} style={{ width: '50%' }} />
                <Link to={"/rules"}>
                    <button className="btn btn-primary pro-btn mt-3">
                        Go to your product
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default Search;