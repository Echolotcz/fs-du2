import React, { useRef, useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

function CompletionPieChart({ chartTitle, chartSize, completedItems, totalItems}) {
    let [chartSizeS, setChartSize] = useState(300);
    const chartRef = useRef(null);
    chartSize = chartSize;
    const COLORS = ['green', 'red'];

    useEffect(() => {
        if (chartRef && chartRef.current) {
            setChartSize(chartRef.current.offsetWidth);
        }
    }, []);

    const data = [
        { name: 'Completed', value: completedItems },
        { name: 'Remaining', value: totalItems - completedItems }
    ];

    function CustomLabel({ cx, cy, midAngle, outerRadius, fill, value, name }) {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius - chartSize/3;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill={fill} fill="white" style={{ fontWeight: 'bold' }} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${value}`}
            </text>
        );
    }

    return (
        <div ref={chartRef} className="chart-container">
            {chartTitle && <h2 className="chart-title">{chartTitle}</h2>}
            <PieChart width={chartSize} height={chartSize}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={chartSize/2}
                    fill="#8884d8"
                    dataKey="value"
                    label={<CustomLabel />}
                >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
}

export default CompletionPieChart;