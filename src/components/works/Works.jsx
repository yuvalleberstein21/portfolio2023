import React from 'react';
import "./works.css";
import portfolio1 from "../../assets/vacationImage.png";
import portfolio2 from "../../assets/nextapp.png";
import portfolio3 from "../../assets/IMDB.png";
import portfolio4 from "../../assets/WheatherAPP.png";
import portfolio5 from "../../assets/notesTask.png";
import portfolio6 from "../../assets/realTimeChat.png";



const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className="workDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum libero blanditiis molestias recusandae laboriosam placeat! Sint, nulla natus, similique repudiandae animi fugiat amet accusamus repellat facilis mollitia, fuga dolor?</span>
            <div className="worksImgs">
                <img src={portfolio1} alt="portfolio image 1" height={200} className="worksImg" />
                <img src={portfolio2} alt="portfolio image 2" height={200} className="worksImg" />
                <img src={portfolio3} alt="portfolio image 3" height={200} className="worksImg" />
                <img src={portfolio4} alt="portfolio image 4" height={200} className="worksImg" />
                <img src={portfolio5} alt="portfolio image 5" height={200} className="worksImg" />
                <img src={portfolio6} alt="portfolio image6" height={200} className="worksImg" />
            </div>
            <button className='worksBtn'>See More</button>
        </section>
    )
}

export default Works