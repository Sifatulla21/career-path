import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Jobs = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>This Is Jobs</h1>
        </div>
    );
};

export default Jobs;