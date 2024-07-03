import React, { useState, useEffect, useContext } from "react";
import './search.css';
import search from '../../animations/search.json';
import Lottie from 'lottie-react';
import { Link, useNavigate } from "react-router-dom";
import { RegulationsContext } from '../../contexts/RegulationsContext';

function Search() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchedProduct, setSearchedProduct] = useState('');
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState(new Set());

    const { setRegulations } = useContext(RegulationsContext);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchChange = (e) => {
        setSearchedProduct(e.target.value);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategories((prevSelectedCategories) => {
            const newSelectedCategories = new Set(prevSelectedCategories);
            if (newSelectedCategories.has(category)) {
                newSelectedCategories.delete(category);
            } else {
                newSelectedCategories.add(category);
            }
            return newSelectedCategories;
        });
    };

    const sendSelectedCategories = async () => {
        setLoading(true);
        try {
            const data = {
                product: searchedProduct,
                productType: selectedCategory,
                categories: Array.from(selectedCategories)
            };

            const response = await fetch('http://127.0.0.1:8000/getRegulationsFromCategory', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const regulations = await response.json();
                console.log('Categories sent successfully:', regulations);
                setRegulations(regulations); // Update the regulations in context
                navigate("/rules");
            } else {
                console.error('Failed to send categories');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedCategory) {
            alert('Please select a category');
            return;
        }

        const data = { category: selectedCategory, product: searchedProduct };
        setLoading(true);
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
                console.log(resultData);
                setResults(resultData);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
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
                ) : results && results.categories ? (
                    <div>
                        <h4>Search Results:</h4>
                        <div className="result-buttons">
                            {results.categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`btn m-2 ${selectedCategories.has(category) ? 'btn-primary category-primary' : 'btn-secondary category-secondary'}`}
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <Lottie animationData={search} style={{ width: '40%' }} />
                )}
                <button className="btn btn-primary pro-btn pro-btng2 mt-3" onClick={sendSelectedCategories}>
                    Go to product laws!
                </button>
            </div>
        </div>
    );
}

export default Search;
