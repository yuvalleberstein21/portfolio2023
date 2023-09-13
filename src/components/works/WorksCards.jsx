import React from 'react'
import portfolio1 from "../../assets/vacations1.png";
import portfolio2 from "../../assets/mobilenext.png";
import portfolio3 from "../../assets/imdb.png";
import portfolio4 from "../../assets/portfolio.png";
import portfolio5 from "../../assets/notes.png";
import portfolio6 from "../../assets/shopping.png";
import "./works.css";

const WorksCards = () => {
    return (
        <div className="container">
            <div class="box">
                <div class="body">
                    <div class="imgContainer">
                        <img src={portfolio1} alt="" />
                    </div>
                    <div class="content d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <h3 class="text-white fs-5">Post Title</h3>
                            <p class="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="body">
                    <div class="imgContainer">
                        <img src={portfolio2} alt="" />
                    </div>
                    <div class="content d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <h3 class="text-white fs-5">Post Title</h3>
                            <p class="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="body">
                    <div class="imgContainer">
                        <img src={portfolio3} alt="" />
                    </div>
                    <div class="content d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <h3 class="text-white fs-5">Post Title</h3>
                            <p class="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="body">
                    <div class="imgContainer">
                        <img src={portfolio4} alt="" />
                    </div>
                    <div class="content d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <h3 class="text-white fs-5">Post Title</h3>
                            <p class="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="body">
                    <div class="imgContainer">
                        <img src={portfolio5} alt="" />
                    </div>
                    <div class="content d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <h3 class="text-white fs-5">Post Title</h3>
                            <p class="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="body">
                    <div class="imgContainer">
                        <img src={portfolio6} alt="" />
                    </div>
                    <div class="content d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <h3 class="text-white fs-5">Post Title</h3>
                            <p class="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorksCards