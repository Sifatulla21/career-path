import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData();
    const id = useParams();
    const findData = data.find(dt => dt.id === id.jobId )
    console.log(findData.id);
    return (
        <div>
            <h1>Job Details</h1>
        </div>
    );
};

export default Details;