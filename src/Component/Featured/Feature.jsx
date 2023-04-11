import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import './Feature.css'
import { Link } from 'react-router-dom';
const Feature = ({feature}) => {
    const {id,picture, salary, title, cName, jType, jPlace, location } = feature;
    return (
        <div className="featured-card">
            <img src={picture} alt="" />
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
            <Link to={`/details/${id}`}><button className="all-btn">View Details</button></Link>
        </div>
    );
};

export default Feature;