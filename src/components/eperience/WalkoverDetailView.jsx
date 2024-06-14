import React from "react";

const WalkoverDetailView = (props) => {
    const { aboutProject } = props;
    return (
        <div className="mx-6">
            <div className="py-5">
                <h6 className="custom-font-size text-theme-color">About Project <span className="text-light fs-1">{`( MSG91 - Hello Micro-app) `}</span> </h6>
                <p className="fs-3 fourth-theme-color py-5">{aboutProject?.about}</p>
                <div className="w-100 text-center d-flex justify-content-start">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Development Journey</h6>
                <ul className="fs-3 third-theme-clr py-5">
                    {aboutProject.developmentJourney.initialDevelopmentPhase.map((point, idx) => (
                        <li className="py-2" key={idx}>{point}</li>
                    ))}
                </ul>
                <div className="w-100 text-center d-flex justify-content-end">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Feature Development and Bug Fixing</h6>
                <ul className="fs-3 third-theme-clr py-5">
                    {aboutProject.featureDevelopmentAndBugFixing.map((point, idx) => (
                        <li className="py-2" key={idx}>{point}</li>
                    ))}
                </ul>
                <div className="w-100 text-center d-flex justify-content-start">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Technologies Used</h6>
                <ul className="fs-3 third-theme-clr py-5">
                    {aboutProject.technologiesUsed.map((point, idx) => (
                        <li className="py-2" key={idx}>{point}</li>
                    ))}
                </ul>
                <div className="w-100 text-center d-flex justify-content-end">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Summary of My Contributions</h6>
                <ul className="fs-3 third-theme-clr py-5">
                    {aboutProject.myContributions.map((point, idx) => (
                        <li className="py-2" key={idx}>{point}</li>
                    ))}
                </ul>
                <div className="w-100 text-center d-flex justify-content-start">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
        </div>
    );
};

export default WalkoverDetailView;
