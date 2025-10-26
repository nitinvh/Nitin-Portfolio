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
                               <span className="fs-1 fw-bolder">Welcome to my portfolio! </span> I'm<span className=" fw-bold text-theme-color"> Nitin Hariprasad</span>, an enthusiastic professional deeply immersed in <span className="text-theme-color">Generative AI</span> and <span className="text-theme-color">Agentic AI</span>, My current focus is on designing and building autonomous intelligent systems, which I am actively applying as an Agentic AI Developer.

This cutting-edge AI work is built upon a strong foundation from my previous role as a Software Development Engineer at Unify, where I played a key role in developing UnifyCare, a comprehensive SaaS healthcare platform. My unique blend of current AI specialization and previous full-stack experience positions me to bridge the gap between robust software engineering and intelligent system design. I am actively pursuing opportunities to apply and expand my skills in this evolving landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyIntro;
