import React, { useState, useContext } from "react";
import './rules.css';
import { RegulationsContext } from '../../contexts/RegulationsContext';

function Rules() {
    const { regulations } = useContext(RegulationsContext);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Flatten the details array
    const detailsArray = regulations && regulations.regulations 
        ? Object.entries(regulations.regulations).flatMap(([key, array]) => array.map(item => ({ key, item }))) 
        : [];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % detailsArray.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + detailsArray.length) % detailsArray.length);
    };

    if (!regulations || !regulations.regulations) {
        return <div>No regulations available</div>;
    }

    return (
        <div className="container">
            {detailsArray.length > 0 && (
                <div>
                    <h3>{detailsArray[currentIndex].key}</h3>
                    <p>{detailsArray[currentIndex].item}</p>
                    <div className="buttons">
                        <button onClick={handlePrevious}>Previous</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Rules;
