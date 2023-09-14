import React from 'react'
import portfolio1 from "../../assets/vacations1.png";
import portfolio2 from "../../assets/mobilenext.png";
import portfolio3 from "../../assets/imdb.png";
import portfolio4 from "../../assets/portfolio.png";
import portfolio5 from "../../assets/simless.png";
import portfolio6 from "../../assets/shopping.png";
import "./works.css";
import { Link } from 'react-router-dom';

const WorksCards = () => {
    return (
        <div className="container">
            <div className="box">
                <div className="body">
                    <div className="imgContainer">
                        <img src={portfolio1} alt="" />
                    </div>
                    <div className="content d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <h3 className="textProject fs-5">Vacations Management</h3>
                            <p className="text-white textProjectDesc">Led an end-to-end project for a vacation management system using React.js, Node.js, and MySQL.</p>
                            <a href="https://github.com/yuvalleberstein21/My-Projects/tree/main/vacationsProject">Watch Me</a>

                        </div>
                    </div>
                </div>
            </div>

            <div className="box">
                <div className="body">
                    <div className="imgContainer">
                        <img src={portfolio2} alt="" />
                    </div>
                    <div className="content d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <h3 className="textProject fs-5">Blog App</h3>
                            <p className="textProjectDesc text-white">Designed and developed a blog application using Next.js, showcasing expertise in server-side rendering and modern web application architecture.</p>
                            <a href="https://github.com/yuvalleberstein21/my-next-app">Watch Me</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="box">
                <div className="body">
                    <div className="imgContainer">
                        <img src={portfolio3} alt="" />
                    </div>
                    <div className="content d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <h3 className="textProject fs-5">IMDB Clone</h3>
                            <p className="textProjectDesc text-white">Created a IMDB clone using ReactJS, emulating the popular streaming platform's user interface and functionalities.
                            </p>
                            <a href="https://github.com/yuvalleberstein21/My-Projects/tree/main/IMDB-PROJECT">Watch Me</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="box">
                <div className="body">
                    <div className="imgContainer">
                        <img src={portfolio4} alt="" />
                    </div>
                    <div className="content d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <h3 className="textProject fs-5">Personal Portfolio</h3>
                            <p className="textProjectDesc text-white">My portfolio website, built using React.js, serves as a dynamic showcase of my skills and projects as a full-stack developer.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="box">
                <div className="body">
                    <div className="imgContainer">
                        <img src={portfolio5} alt="" />
                    </div>
                    <div className="content d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <h3 className="textProject fs-5">Simless</h3>
                            <p className="textProjectDesc text-white">Simless.App users can purchase multiple mobile numbers without the need to identify or get a physical Sim.
                                The number can be used for various purposes such as work and privacy.</p>
                            <a href="https://il.simless.app/En.html">Watch Me</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="box">
                <div className="body">
                    <div className="imgContainer">
                        <img src={portfolio6} alt="" />
                    </div>
                    <div className="content d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <h3 className="textProject fs-5">Shopping Online</h3>
                            <p className="textProjectDesc text-white">The project is a robust e-commerce platform built with MySQL, Node.js, and Angular. provides users with a seamless online shopping experience, enabling them to browse, select, and purchase products with ease.</p>
                            <a href="https://github.com/yuvalleberstein21/angular-ecommerce">Watch Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorksCards