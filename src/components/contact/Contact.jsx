import React from 'react';
import "./contact.css";
import githubImage from "../../assets/github1.png";
import linkdinImage from "../../assets/linkdin1.png";
import resumeImage from "../../assets/resume1.png";

const Contact = () => {
    return (
        <section id='contactPage'>
            <div id='clients' className="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid ipsum voluptatum quas laudantium. Repudiandae et, iusto eius excepturi adipisci, soluta facilis sequi.
                </p>
                <div className="clientImgs">
                    <img src={githubImage} alt="githubImage" className="clientImg" />
                    <img src={linkdinImage} alt="linkdinImage" className="clientImg" />
                    <img src={resumeImage} alt="resumeImage" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            </div>
        </section>
    )
}

export default Contact