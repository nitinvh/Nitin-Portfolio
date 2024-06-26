import React from "react";
import _linkedIn from '../assets/linkedin.png';
import _gitHub from '../assets/github.png';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light pt-5 pb-2 text-start">
            {/* <h2 className="fw-bolder text-start custom-font-size text-light mx-5" id='#'>About Me</h2> */}
            <div className="container mt-5">
                <div className="row my-5">
                    <div className="col-md-5 px-5">
                    <h5 className="fs-1 text-theme-color" id="about-me">About Me</h5>
                        <p className="fs-3 sec-txt-theme-clr">
                            I am a passionate Software Development Engineer with experience in frontend technologies. I have worked on various projects, delivering high-quality, user-centric solutions.
                        </p>
                    </div>
                    <div className="col-md-4  px-5">
                        <h5 className="fs-1 sec-txt-theme-clr">Contact Information</h5>
                        <ul className="list-unstyled fs-3 third-theme-clr">
                            <li className="py-2">Location: Houston, USA</li>
                            <li >Email: nitinhariprasaduh@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-md-3  px-5">
                        <h5 className="fs-1 sec-txt-theme-clr">Social Media</h5>
                        <ul className="list-unstyled fs-3">
                            <li className="point py-2">
                                <a href="https://www.linkedin.com/in/nitin-c-v-hariprasad-601967157/" className="third-theme-clr point" target="_blank"><img src={_linkedIn} alt="LinkedIn" style={{ width: '8rem', height: '3rem' }} /></a>

                            </li>
                            <li className="point">
                                <a href="https://github.com/nitinvh" className="third-theme-clr" target="_blank"><img src={_gitHub} alt="GitHub" style={{ width: '8rem', height: '4rem' }} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="fs-3 text-theme-color py-2">&copy; 2024 Nitin-Portfolio. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
