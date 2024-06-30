import React, { useState } from "react";
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; 
import './rules.css'; 

function Rules() {
    const [checkedItems, setCheckedItems] = useState(Array(11).fill(false));
    const handleCheckboxChange = (index) => {
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = !updatedCheckedItems[index];
        setCheckedItems(updatedCheckedItems);
    };

    const checkedCount = checkedItems.filter(item => item).length;
    const totalCount = checkedItems.length;

    const percentage = totalCount > 0 ? ((checkedCount / totalCount) * 100).toFixed(2) : 0;

    const data = {
        labels: ['Checked', 'Unchecked'],
        datasets: [{
            data: [percentage, 100 - percentage],
            backgroundColor: ['#36a2eb', '#ff6384'],
            hoverBackgroundColor: ['#36a2eb', '#ff6384'],
            borderWidth: 1
        }]
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2) + '%';
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false 
    };

    return (
        <div className="rulepg">
            <div className="displayrules">
                    <h3>The rules related to your product are as follows..</h3>
                    <div className="checkbx">
                        {Array.from({ length: 11 }, (_, i) => (
                            <div key={i} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id={`flexCheckDefault${i}`}
                                    checked={checkedItems[i]}
                                    onChange={() => handleCheckboxChange(i)}
                                />
                                <label className="form-check-label" htmlFor={`flexCheckDefault${i}`}>
                                    Rule {i + 1}
                                </label>
                            </div>
                        ))}
                    </div>
                   
            </div>
            <div className="chart-container">
                        <Pie data={data} options={options} />
            </div>
        </div>
    );
}

export default Rules;
