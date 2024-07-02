import React, { useState, useContext } from "react";
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './rules.css';
import graph from '../../animations/graph-pie.json';
import Lottie from "lottie-react";
import { RegulationsContext } from '../../contexts/RegulationsContext';

function Rules() {
    const { regulations } = useContext(RegulationsContext);
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    console.log(regulations)
    const [checkedItems, setCheckedItems] = useState(Array(regulations.length).fill(false));
    const [currentRuleIndex, setCurrentRuleIndex] = useState(0);

    const handleMarkAsChecked = () => {
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[currentRuleIndex] = !updatedCheckedItems[currentRuleIndex];
        setCheckedItems(updatedCheckedItems);
    };

    const handleNextClick = () => {
        setCurrentRuleIndex((prevIndex) => (prevIndex + 1) % regulations.length);
    };

    const handlePrevClick = () => {
        setCurrentRuleIndex((prevIndex) => (prevIndex - 1 + regulations.length) % regulations.length);
    };

    const checkedCount = checkedItems.filter(item => item).length;
    const totalCount = regulations.length;

    const data = {
        labels: ['Checked', 'Unchecked'],
        datasets: [{
            label: 'Rules Status',
            data: [checkedCount, totalCount - checkedCount],
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
        scales: {
            x: {
                beginAtZero: true,
                max: totalCount
            }
        }
    };

    return (
        <div className="container rule-container">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 rules">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="rule-count">
                            Rule {currentRuleIndex + 1} of {totalCount}
                        </div>
                        <div className="status">
                            {checkedItems[currentRuleIndex] ? 'Checked' : 'Unchecked'}
                        </div>
                    </div>
                    <div className="rule-content mt-3">
                        <div className="rule-description">
                            {regulations.length > 0 ? regulations[currentRuleIndex] : "No regulations available"}
                        </div>
                        <button className="btn btn-success m-1" onClick={handleMarkAsChecked}>
                            {checkedItems[currentRuleIndex] ? 'Unmark' : 'Mark as Checked'}
                        </button>
                    </div>
                    <div className="rulebtns">
                        <button className="btn btn-primary m-1" onClick={handlePrevClick}>Previous</button>
                        <button className="btn btn-primary m-1" onClick={handleNextClick}>Next</button>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 graph">
                    <h3>Graphical Representation</h3>
                    <Bar data={data} options={options} />
                </div>
                <div>
                    <Lottie className="bar-ani" animationData={graph} style={{ height: "40%" }} />
                </div>
            </div>
        </div>
    );
}

export default Rules;
