import React from 'react';
import './intro.css';
import bg from "../../assets/myImage.png"
import bag from "../../assets/hire.png"
import { Link, animateScroll as scroll } from 'react-scroll';


const Intro = () => {
    return (
        <section id='intro'>
            <div className="introContent">
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Yuval</span><br />FullStack Developer</span>
                <p className='introPara'>Highly motivated and strong in my ability to self-learn.
                    <br />
                    I can study any subject confidently, while solving work challenges.
                    <br />
                    Through the course at John Bryce i learned a lot of technologies, I gained experience  <br /> in developing end-to-end web applications.
                </p>
                <Link><button className='btn'><img src={bag} className='btnImg' alt="hire me" />Hire Me</button></Link>

            </div>
            <img className='bg' src={bg} alt="profile" />
        </section>
    )
}

export default Intro;