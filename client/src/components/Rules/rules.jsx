import React, { useState, useContext } from "react";
import './rules.css';
import { RegulationsContext } from '../../contexts/RegulationsContext';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function Rules() {
    const { regulations } = useContext(RegulationsContext);
    console.log(regulations)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [checkedRegulations, setCheckedRegulations] = useState({});
    const [reportedRegulations, setReportedRegulations] = useState({});
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        isRegulation: '',
        relatedToProduct: '',
        applicableProduct: '',
        suggestion: ''
    });

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
        setIsFormVisible(!isFormVisible);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setReportedRegulations((prevReported) => ({
            ...prevReported,
            [currentIndex]: formData
        }));
        setIsFormVisible(false);
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
                        <button onClick={handleReport}>
                            {isFormVisible ? 'Cancel' : 'Report this rule'}
                        </button>
                    </div>
                    <p>
                        Regulation {currentIndex + 1} of {totalCount}
                    </p>
                    <a href={regulations[detailsArray[currentIndex].key]}>open</a>
                </div>
            )}
            
            <div className="reportform">
                {isFormVisible && (
                    <div className="report-form">
                        <h2>Report Regulation</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Is this a regulation?
                                <div className="checkbx">
                                    <label>
                                        <input 
                                            type="radio" 
                                            name="isRegulation" 
                                            value="yes" 
                                            onChange={handleFormChange}
                                            checked={formData.isRegulation === 'yes'}
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input 
                                            type="radio" 
                                            name="isRegulation" 
                                            value="no" 
                                            onChange={handleFormChange}
                                            checked={formData.isRegulation === 'no'}
                                        />
                                        No
                                    </label>
                                </div>
                            </label>
                            <label>
                                Is this regulation related to your searched product?
                                <div className="checkbx">
                                    <label>
                                        <input 
                                            type="radio" 
                                            name="relatedToProduct" 
                                            value="yes" 
                                            onChange={handleFormChange}
                                            checked={formData.relatedToProduct === 'yes'}
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input 
                                            type="radio" 
                                            name="relatedToProduct" 
                                            value="no" 
                                            onChange={handleFormChange}
                                            checked={formData.relatedToProduct === 'no'}
                                        />
                                        No
                                    </label>
                                </div>
                            </label>
                            {formData.relatedToProduct === 'no' && (
                                <label>
                                    For which product is it applicable?
                                    <input 
                                        type="text" 
                                        name="applicableProduct" 
                                        value={formData.applicableProduct} 
                                        onChange={handleFormChange}
                                    />
                                </label>
                            )}
                            <label>
                                Any other suggestion?
                                <textarea 
                                    name="suggestion" 
                                    value={formData.suggestion} 
                                    onChange={handleFormChange}
                                />
                            </label>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )}
            </div>

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
