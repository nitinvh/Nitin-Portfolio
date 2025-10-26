import React from "react";
import MyProfilePic from "./MyProfilePic";

const MyIntro = () => {
    return (
        <div className="bg-dark">
            <div className="container py-6">
                <div className="row">
                    {/* MyProfilePic Section */}
                    <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                        <MyProfilePic />
                    </div>

                    {/* My Intro Section */}
                    <div className="col-12 col-md-8 d-flex align-items-center text-light">
                        <div className="fs-3 text-start p-3">
                            <p className="text-break lh-base fs-2">
                               <span className="fs-1 fw-bolder">Welcome to my portfolio! </span> I'm<span className=" fw-bold text-theme-color"> Nitin Hariprasad</span>, As an enthusiastic professional deeply immersed in <span className="text-theme-color">Generative AI</span> and <span className="text-theme-color">Agentic AI</span>, I bring a unique blend of software development expertise and a forward-thinking approach to artificial intelligence. Previously, as a Software Development Engineer at Unify, I played a key role in developing UnifyCare, a comprehensive SaaS healthcare platform built on the MERN stack. My experience in full-stack development, coupled with my current focus on cutting-edge AI projects, positions me to bridge the gap between robust software engineering and intelligent system design. I am actively pursuing opportunities to apply and expand my skills in the evolving AI landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyIntro;
