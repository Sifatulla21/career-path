import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './JobCard.css'
const JobCard = ({ data }) => {
    const { id, picture, salary, title, cName, jType, jPlace, location } = data;
    return (
        <div className="job-card-body">
            <img src={picture} alt="" />
            <div className="job-card-detail">
                <h3>{title}</h3>
                <p>{cName}</p>
                <div className="job-type">
                    <p>{jPlace}</p>
                    <p>{jType}</p>
                </div>
                <div className="location-salary">
                <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                <p><FontAwesomeIcon icon={faDollarSign} /> Salary: {salary}K</p>
            </div>
            </div>
            <Link to={`/details/${id}`}><button className="apply-btn">View Details</button></Link>
        </div>
    );
};

export default JobCard;