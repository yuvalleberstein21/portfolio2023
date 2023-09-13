import React from 'react';
import "./skills.css";
import frontEndImage from "../../assets/frontendImage.webp";
import backEndImage from "../../assets/backendImage.png";
import designerImage from "../../assets/designerImage.webp";
import { motion } from "framer-motion";


const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I Do</span>
            <span className='skillDesc'>Highly motivated and strong in my ability to self-learn. I can study any subject confidently, while solving work challenges.Through the course at John Bryce i learned a lot of technologies, I gained experience in developing end-to-end web applications.</span>

            <div className="skillsBars">
                <motion.div
                    className="skillBar"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}>
                    <img className='skillBarImg' src={frontEndImage} alt="frontEndImage" />
                    <div className="skillBarText">
                        <h2>Front End Developer</h2>
                        <p>This is a demo text, you can write your own content her</p>
                    </div>
                </motion.div>
                <motion.div
                    className="skillBar"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}>
                    <img className='skillBarImg' src={backEndImage} alt="backEndImage" />
                    <div className="skillBarText">
                        <h2>Back End Developer</h2>
                        <p>This is a demo text, you can write your own content her</p>
                    </div>
                </motion.div>
                <motion.div
                    className="skillBar"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <img className='skillBarImg' src={designerImage} alt="designerImage" />
                    <div className="skillBarText">
                        <h2>Web Designer</h2>
                        <p>This is a demo text, you can write your own content her</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills