import React from 'react';
import './Card.css'
const Card = ({category}) => {
    // console.log(props.job);
    const {icon, noOfJobs, title} = category;
    return (

        <div className="category-card">
            <img src={icon} alt="" />
            <h4>{title}</h4>
            <p>{noOfJobs} Jobs Available</p>

        </div>
    );
};

export default Card;