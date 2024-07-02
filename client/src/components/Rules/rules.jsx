import React, { useState } from "react";
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './rules.css';
import graph from '../../animations/graph-pie.json'
import Lottie from "lottie-react";

function Rules() {
    const [checkedItems, setCheckedItems] = useState(Array(11).fill(false));
    const [currentRuleIndex, setCurrentRuleIndex] = useState(0);

    const handleMarkAsChecked = () => {
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[currentRuleIndex] = !updatedCheckedItems[currentRuleIndex];
        setCheckedItems(updatedCheckedItems);
    };

    const handleNextClick = () => {
        setCurrentRuleIndex((prevIndex) => (prevIndex + 1) % checkedItems.length);
    };

    const handlePrevClick = () => {
        setCurrentRuleIndex((prevIndex) => (prevIndex - 1 + checkedItems.length) % checkedItems.length);
    };

    const checkedCount = checkedItems.filter(item => item).length;
    const uncheckedCount = checkedItems.length - checkedCount;
    const totalcount = checkedCount + uncheckedCount;

    const data = {
        labels: ['Checked', 'Total count'],
        datasets: [{
            label: 'Rules Status',
            data: [checkedCount, totalcount],
            backgroundColor: ['rgb(141, 1, 157)', 'rgb(99, 5, 168)'],
            borderWidth: 5
        }]
    };

    const options = {
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 rulepg">
                    <div className="displayrules">
                        <h3>The rules related to your product are as follows..</h3>
                        <div className="checkbx">
                            <div className="rule-item">
                                <span>Rule {currentRuleIndex + 1}</span>
                            </div>
                        </div>
                        <div className="ru-btns">
                            <button
                                className={`btn btn-primary pro-btn2 mt-3 ${checkedItems[currentRuleIndex] ? 'checked' : ''}`}
                                onClick={handleMarkAsChecked}>
                                {checkedItems[currentRuleIndex] ? "Unmark" : "Mark as Checked"}
                            </button>
                            <button className="btn btn-primary pro-btn mt-3" onClick={handlePrevClick}>Previous</button>
                            <button className="btn btn-primary pro-btn mt-3" onClick={handleNextClick}>Next</button>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-4 col-sm-12 chart-container">
                    <Bar data={data} options={options} />
                </div>
                <div>
                    <Lottie className="bar-ani" animationData={graph} style={{height:"40%"}}/>
                </div>
                
                  
            </div>
        </div>
    );
}

export default Rules;