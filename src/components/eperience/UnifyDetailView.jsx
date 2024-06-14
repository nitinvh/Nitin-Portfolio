import React from "react";

const UnifyDetailView = (props) => {
    const { aboutProject } = props;

    return (
        <div className="mx-6">
            <div className="py-5">
                <h6 className="custom-font-size text-theme-color">About Project <span className="text-light fs-1">{`( UnifyCare) `}</span> </h6>
                <p className="fs-3 fourth-theme-color pt-5">{aboutProject.about}</p>
                <div className="w-100 text-center d-flex justify-content-start">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Project Overview</h6>
                <p className="fs-3 third-theme-clr pt-5">{aboutProject.projectOverview}</p>
                <div className="w-100 text-center d-flex justify-content-end">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Development Journey</h6>
                <div className="fs-3 third-theme-clr pt-5">
                    <ul>
                        {aboutProject.developmentJourney.initialDevelopmentPhase.map((point, idx) => (
                            <li className="py-2" key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className="fs-3 third-theme-clr pt-5">
                    <ul>
                        {aboutProject.developmentJourney.unifyCareWebsite.map((point, idx) => (
                            <li className="py-2" key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-100 text-center d-flex justify-content-start">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Feature Development and Bug Fixing</h6>
                <div className="fs-3 third-theme-clr pt-5">
                    <ul>
                        {aboutProject.featureDevelopmentAndBugFixing.map((point, idx) => (
                            <li className="py-2" key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-100 text-center d-flex justify-content-end">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">FHIR Integration</h6>
                <div className="fs-3 third-theme-clr pt-5">
                    <ul>
                        {aboutProject.fhirIntegration.map((point, idx) => (
                            <li className="py-2" key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-100 text-center d-flex justify-content-start">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Alpha Version Release</h6>
                <div className="fs-3 third-theme-clr pt-5">
                    <ul>
                        {aboutProject.alphaVersionRelease.map((point, idx) => (
                            <li className="py-2" key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-100 text-center d-flex justify-content-end">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">UI Overhaul and Beta Version</h6>
                <div className="fs-3 third-theme-clr pt-5">
                    <ul>
                        {aboutProject.uiOverhaulAndBetaVersion.map((point, idx) => (
                            <li className="py-2" key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-100 text-center d-flex justify-content-start">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Client Feedback and Iteration</h6>
                <div className="fs-3 third-theme-clr pt-5">
                    <ul>
                        {aboutProject.clientFeedbackAndIteration.map((point, idx) => (
                            <li className="py-2" key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-100 text-center d-flex justify-content-end">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Technologies Used</h6>
                <div className="fs-3 third-theme-clr pt-5">
                    <ul>
                        {aboutProject.technologiesUsed.map((point, idx) => (
                            <li className="py-2" key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-100 text-center d-flex justify-content-start">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Summary of My Contributions</h6>
                <div className="fs-3 third-theme-clr pt-5">
                    <ul>
                        {aboutProject.myContributions.map((point, idx) => (
                            <li className="py-2" key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-100 text-center d-flex justify-content-end">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
        </div>
    );
}

export default UnifyDetailView;
