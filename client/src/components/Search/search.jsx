import React, { useState } from "react";
import './search.css';
import search from '../../animations/search.json';
import Lottie from 'lottie-react';
import { Link } from "react-router-dom";

function Search() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchedProduct, setSearchedProduct] = useState('');
    const [results, setResults] = useState(null); // State to store results
    const [loading, setLoading] = useState(false); // State to handle loading

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchChange = (e) => {
        setSearchedProduct(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { category: selectedCategory, product: searchedProduct };
        setLoading(true); // Set loading to true before fetching data
        try {
            const queryParams = new URLSearchParams({
                product: searchedProduct,
                productType: selectedCategory
            }).toString();

            const response = await fetch(`http://127.0.0.1:8000/getProductCategories?${queryParams}`, {
                method: 'GET'
            });


            if (response.ok) {
                const resultData = await response.json();
                console.log(resultData)
                setResults(resultData); // Store the results
                setLoading(false); // Set loading to false after data is fetched
            } else {
                console.error('Failed to fetch data');
                setLoading(false); // Set loading to false in case of error
            }
        } catch (error) {
            console.error('Error:', error);
            setLoading(false); // Set loading to false in case of error
        }
    };

    return (
        <div className="container rule-search">
            <div className="category text-center">
                <h3>Select the category of your product..</h3>
                <div className="row cat-btns">
                    {["food", "Electronics", "Agriculture", "Hardware", "General"].map((category) => (
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
                <form className="d-flex justify-content-center" role="search" onSubmit={handleSubmit}>
                    <input
                        className="form-control me-2 w-50"
                        type="search"
                        placeholder="Search your product"
                        aria-label="Search"
                        value={searchedProduct}
                        onChange={handleSearchChange}
                    />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="rules mt-4 text-center">
                {loading ? (
                    <Lottie animationData={search} style={{ width: '40%' }} />
                ) : results ? (
                    <div>
                        <h4>Search Results:</h4>
                        {loading && <p>Loading...</p>}
            {results && <div>{JSON.stringify(results)}</div>}
                    </div>
                ) : (
                    <Lottie animationData={search} style={{ width: '40%' }} />
                )}
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
