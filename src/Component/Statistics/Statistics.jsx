import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css';
const Statistics = () => {
    const data = useLoaderData();
    return (
        <div className="chart">
            <h1>Assignment Marks</h1>
            <AreaChart
            
                width={1200}
                height={400}
                data={data}

            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="aName" />
                <YAxis/>
                <Tooltip />
                <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default Statistics;