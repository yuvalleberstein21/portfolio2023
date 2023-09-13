import React from 'react';
import "./works.css";
import WorksCards from './WorksCards';
import HText from '../utils/HText';
import Description from '../utils/Description';



const Works = () => {
    return (
        <section id='works'>
            <HText text='My Portfolio'></HText>
            <Description text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum libero blanditiis molestias recusandae laboriosam placeat! Sint, nulla natus, similique repudiandae animi fugiat amet accusamus repellat facilis mollitia, fuga dolor?'></Description>
            <div className="worksImgs">
                <div className="container">
                    <WorksCards />
                </div>
            </div>
            <button className='worksBtn'>See More</button>
        </section>
    )
}

export default Works