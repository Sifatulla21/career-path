import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign, faCalendarCheck, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './DetailsArea.css'
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const DetailsArea = ({selectedJob}) => {
    const [jobs, setJobs] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('details.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        //Get ID
        for(const id in storedCart){
            //Get product using id
            const addJob = jobs.find(job => job.id === id);
            if(addJob){
                //Add quantity
                const quantity = storedCart[id];
                addJob.quantity = quantity  
                // add addeded product to empty array
                savedCart.push(addJob);

            }
        }
        // Set The Cart
        setCart(savedCart);
    },[jobs]);
    const addToCart = (job) =>{
        const newCart = [...cart,job];
        setCart(newCart);
        addToDb(job.id);
    }
    const {salary, title, phone, email, address, jDescription, jResponsibility, education, experience} = selectedJob;
    // console.log(selectedJob);

    return (
        <div className="selected-job">
            <div className="selected-job-description">
                <p><strong>Job Description:</strong> {jDescription}</p>
                <p><strong>Job Responsibility:</strong> {jResponsibility}</p>
                <p><strong>Educational Requirements:</strong> {education}</p>
                <p><strong>Experiences:</strong> {experience}</p>
            </div>
            <div className="job-details-card">
                <h3>Job Details</h3>
                <hr />
                <p><FontAwesomeIcon  className="icon-color" icon={faDollarSign} />  <strong>Salary:</strong> {salary}K (per month)</p>
                <p><FontAwesomeIcon className="icon-color" icon={faCalendarCheck} />  <strong>Job Title:</strong> {title}
                </p>
                <h3>Contact Information</h3>
                <hr />
                <p><FontAwesomeIcon className="icon-color" icon={faPhone} />  <strong>Phone:</strong> {phone}
                </p>
                <p><FontAwesomeIcon className="icon-color" icon={faEnvelope} />  <strong>Email:</strong> {email}
                </p>
                <p><FontAwesomeIcon className="icon-color" icon={faLocationDot} />  <strong>Address:</strong> {address}
                </p>
            <button onClick={() => addToCart(selectedJob)} className="apply-btn">Apply Now</button>
            </div>
        </div>
    );
};

export default DetailsArea;