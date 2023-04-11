import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCard from './JobCard';
import './Jobs.css'
const Jobs = () => {
    const JobData = useLoaderData();
    const [sort, setSort] = useState();
    const [sortRemoteBtn, setSortRemoteBtn] = useState(false);
    const [sortOnSiteBtn, setSortOnSiteBtn] = useState(false);
    const sortRemote = () => {
        const sortedRemote = JobData.filter(job => job.jPlace === "Remote");
        setSort(sortedRemote);
        setSortRemoteBtn(true);  
    }
    const sortOnSite = () => {
        const sortedOnSite = JobData.filter(job => job.jPlace === "Onsite");
        setSort(sortedOnSite);
        setSortOnSiteBtn(true);  
    }
    return (
        <div className="job-card-container">
            <h1>Applied Jobs</h1>
            <div className="sort-btn-container">
             {
              <button onClick={() => sortRemote()}>Sort By Remote</button> 
             }     
            {
              <button onClick={() => sortOnSite()}>Sort By On Site</button>
                }
            </div>
            {
                sortRemoteBtn ? sort.map(data => <JobCard
                    key={data.id}
                    data={data}
                ></JobCard>)  : 
                sortOnSiteBtn ? sort.map(data => <JobCard
                    key={data.id}
                    data={data}
                ></JobCard>) :
                JobData.map(data => <JobCard
                    key={data.id}
                    data={data}
                ></JobCard>) 
            }
            
        </div>
    );
};

export default Jobs;