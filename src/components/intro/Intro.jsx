import React from 'react';
import './intro.css';
import bg from "../../assets/myImage.png"
import bag from "../../assets/hire.png"
import { Link, animateScroll as scroll } from 'react-scroll';
import { motion } from "framer-motion";
import Descrtipnion from "../utils/Description"


const Intro = () => {
    return (
        <section id='intro'>
            <motion.div
                className="introContent"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Yuval</span><br />FullStack Developer</span>
                <Descrtipnion text='Highly motivated and strong in my ability to self-learn.
                    I can study any subject confidently, while solving work challenges.
                    Through the course at John Bryce i learned a lot of technologies, I gained experience in developing end-to-end web applications.'>
                </Descrtipnion>
                <Link to='contact'><button className='btn'><img src={bag} className='btnImg' alt="hire me" />Hire Me</button></Link>
            </motion.div>
            <img className='bg' src={bg} alt="profile" />
        </section>
    )
}

export default Intro;