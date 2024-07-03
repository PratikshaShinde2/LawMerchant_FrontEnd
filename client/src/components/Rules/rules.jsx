import React, { useState, useContext } from "react";
import './rules.css';
import { RegulationsContext } from '../../contexts/RegulationsContext';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function Rules() {
    const { regulations } = useContext(RegulationsContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [checkedRegulations, setCheckedRegulations] = useState({});
    const [reportedRegulations, setReportedRegulations] = useState({});

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

    const handleMark = () => {
        setCheckedRegulations((prevChecked) => ({
            ...prevChecked,
            [currentIndex]: !prevChecked[currentIndex],
        }));
    };

    const handleReport = () => {
        setReportedRegulations((prevReported) => ({
            ...prevReported,
            [currentIndex]: !prevReported[currentIndex],
        }));
    };

    if (!regulations || !regulations.regulations) {
        return <div>No regulations available</div>;
    }

    const checkedCount = Object.values(checkedRegulations).filter(Boolean).length;
    const totalCount = detailsArray.length;

    const barData = {
        labels: ['Checked Laws', 'Total Laws'],
        datasets: [
            {
                label: 'Laws',
                data: [checkedCount, totalCount],
                backgroundColor: ['rgb(141, 1, 157)', 'rgb(99, 5, 168)'],
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="rulepg">
            {detailsArray.length > 0 && (
                <div className="displayrules">
                    <h3>{detailsArray[currentIndex].key}</h3>
                    <p>{detailsArray[currentIndex].item}</p>
                    <div className="ru-btns">
                        <button 
                            onClick={handleMark} 
                            className={checkedRegulations[currentIndex] ? 'checked' : ''}
                        >
                            {checkedRegulations[currentIndex] ? 'Unmark' : 'Mark as Check'}
                        </button>
                        
                            <button onClick={handlePrevious}>Previous</button>
                            <button onClick={handleNext}>Next</button>
                        
                    </div>
                   
                    <p>
                        Regulation {currentIndex + 1} of {totalCount}
                    </p>
                    <label>
                            <input 
                                type="checkbox" 
                                checked={reportedRegulations[currentIndex] || false} 
                                onChange={handleReport} 
                            />
                            Report this rule
                        </label>
                </div>
                
            )}
            <div className="chart-container">
                <p>
                    {checkedCount} of {totalCount} regulations marked
                </p>
                <Bar data={barData} options={options} />
               
            </div>
        </div>
    );
}

export default Rules;