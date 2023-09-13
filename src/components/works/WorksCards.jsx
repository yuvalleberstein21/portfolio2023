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
            <div className="box">
                <div className="body">
                    <div className="imgContainer">
                        <img src={portfolio1} alt="" />
                    </div>
                    <div className="content d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <h3 className="textProject fs-5">Vacations Management</h3>
                            <p className="text-white textProjectDesc">Led an end-to-end project for a vacation management system using React.js, Node.js, and MySQL.</p>
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
                            <h3 className="textProject fs-5">Post Title</h3>
                            <p className="textProjectDesc text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorksCards