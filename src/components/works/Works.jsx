import React from 'react';
import "./works.css";
import WorksCards from './WorksCards';
import HText from '../utils/HText';
import Description from '../utils/Description';



const Works = () => {
    return (
        <section id='works'>
            <HText text='My Portfolio'></HText>
            <Description text='Im proficient in a wide range of technologies, including but not limited to React, Angular, Node.js, Express.js, and databases like MySQL, MongoDB. Im always eager to explore and adapt to the latest technologies.'></Description>
            <div className="worksImgs">
                <div className="container">
                    <WorksCards />
                </div>
            </div>
            <button className='worksBtn'><a href="https://github.com/yuvalleberstein21">See More</a></button>
        </section>
    )
}

export default Works