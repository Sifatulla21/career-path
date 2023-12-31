import React, { useEffect, useState } from 'react';
import Card from '../Category Card/Card';
import Feature from '../Featured/Feature';
import './Dream.css'
const Dream = () => {
    const [categories, setCategories] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [features, setFeatures] = useState([]);
    const handleShowAll = () =>{
        setShowAll(true);
    }
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);
    useEffect(() => {
        fetch('details.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, []);
    // console.log(jobs);
    return (
        <div>
            <div className="dream-container">
                <div>
                    <h1>One Step Closer To Your <span  className="coloredTxt">Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="all-btn">Get Started</button>
                </div>
                <div>
                    <img src="P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>
            <div>
            <div className="category-head">
                    <h1>Job Category List</h1>
                    <p>Explore thousands of job opportunities with all the information you need.Its your future</p>
                </div>
                <div className="category-area">
                    {
                        categories.map(category => <Card
                            key={category.id}
                            category={category}
                        ></Card>)
                    }
                </div>
            </div>
            <div>
            <div className="feature-head">
                    <h1>Featured Jobs</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="featured-area">
                    {
                         features.slice(0,showAll ? features.length : 4).map(feature => <Feature
                            key={feature.id}
                            feature={feature}
                        ></Feature>)
                    }
                    {
                       showAll ||  <button onClick={() => handleShowAll()} className="show-all-btn">Show All</button>

                    }
                </div>
            </div>
        </div>
    );
};

export default Dream;