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
                            <p className="text-break lh-base">
                               <span className="fs-1 fw-bolder">Welcome to my portfolio! </span> I'm<span className=" fw-bold text-theme-color"> Nitin C V Hariprasad</span>, a dedicated Software Development Engineer with 2 years of Frontend Web Development experience. I excel at managing multiple priorities with a positive attitude. Currently pursuing a Master’s in Engineering Data Science at the University of Houston, I hold a Bachelor's in Computer Science Engineering from SRM University. My expertise spans
                               <span className="text-theme-color"> Web Development</span>, <span className="text-theme-color">Machine Learning</span>, <span className="text-theme-color">Deep Learning</span>, and <span className="text-theme-color">Data Analytics</span>. I've successfully developed single-page applications and contributed to healthcare SaaS platforms. Passionate about continuous learning, I'm eager to drive innovative projects and impactful solutions in the tech industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyIntro;
