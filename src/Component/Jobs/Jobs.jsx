import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCard from './JobCard';
import './Jobs.css'
const Jobs = () => {
    const JobData = useLoaderData();
    const sortRemote = () => {
        const sortedRemote = JobData.filter(job => job.jPlace === "Remote");
            if(sortedRemote){
                console.log(sortedRemote);
            }
    }
    return (
        <div className="job-card-container">
            <h1>Applied Jobs</h1>
            <div className="sort-btn-container">
                <button onClick={() => sortRemote()}>Sort By Remote</button>
                <button>Sort By On Site</button>
            </div>
            {
                JobData.map(data => <JobCard
                    key={data.id}
                    data={data}
                ></JobCard>)
            }
        </div>
    );
};

export default Jobs;