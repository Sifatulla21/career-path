import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsArea from './DetailsArea';
import './Details.css'

const Details = () => {
    const data = useLoaderData();
    const id = useParams();
    const selectedJob = data.find(dt => dt.id === id.jobId )
    // console.log(findData.id);
    return (
        <div className="details-container">
            <h1>Job Details</h1>
            <DetailsArea
                selectedJob={selectedJob}
            ></DetailsArea>
        </div>
    );
};

export default Details;