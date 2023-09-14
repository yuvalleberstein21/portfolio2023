import React, { useRef } from 'react';
import "./contact.css";
import githubImage from "../../assets/github1.png";
import linkdinImage from "../../assets/linkdin1.png";
import resumeImage from "../../assets/resume1.png";
import myResumeImage from "../../assets/myResume.png";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import HText from '../utils/HText';




const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c62vvgr', 'template_bazk168', form.current, 'bOy0O6mxpyBX_0dss')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !')
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <section id='contactPage'>
            <div id='socials' className="clients">
                <HText text='My Socials'></HText>
                <p className='clientDesc'>
                    Thank you for taking the time to explore my portfolio. If you're interested in learning more about my professional journey, connecting on LinkedIn, exploring my code repositories on GitHub, or reviewing my detailed CV, you're in the right place!
                </p>
                <div className="clientImgs">
                    <a href='https://github.com/yuvalleberstein21' className="clientImg"><img src={githubImage} alt="githubImage" className="clientImg" /></a>
                    <a href='https://www.linkedin.com/in/yuval-leberstein/' className="clientImg"><img src={linkdinImage} alt="linkdinImage" className="clientImg" /></a>
                    <img src={resumeImage} alt="resumeImage" className="clientImg" style={{ cursor: "pointer", height: "100px", objectFit: "contain" }} data-bs-toggle="modal" data-bs-target="#exampleModal" />
                </div>

                {/* MODAL */}

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img src={myResumeImage} className='myResume' alt="resumeImage" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MODAL  END*/}


            </div>


            <motion.div id="contact"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <HText text='Contact Me'></HText>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>

                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='Your Name' name='from_name' />
                    <input type="email" className='email' placeholder='Your Email' name='from_email' />
                    <textarea name="message" rows="5" className='msg' placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                </form>
            </motion.div>
        </section>
    )
}

export default Contact