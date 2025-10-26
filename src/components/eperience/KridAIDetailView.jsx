import React from "react";
import BackButton from "../Back";

const KridAiDetailView = (props) => {
    const { aboutProject } = props;

    // A safety check in case the prop is not passed correctly
    if (!aboutProject) {
        return <div className="text-center custom-font-size text-theme-color h-100">No Detail-View page found</div>;
    }

    return (
        <div className="mx-6">
            {/* --- About Project --- */}
            <div className="py-5">
                <h6 className="custom-font-size text-theme-color">About Project <span className="text-light fs-1">{`( REVA) `}</span> </h6>
                <p className="fs-3 fourth-theme-color pt-5">{aboutProject.about}</p>
                <div className="w-100 text-center d-flex justify-content-start">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>

            {/* --- Project Overview --- */}
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Project Overview</h6>
                <p className="fs-3 third-theme-clr pt-5">{aboutProject.projectOverview}</p>
                <div className="w-100 text-center d-flex justify-content-end">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>

            {/* --- Development Journey: Lead Identification --- */}
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Development Journey: Lead Identification</h6>
                <div className="fs-3 third-theme-clr pt-5">
                    <ul>
                        {aboutProject.developmentJourney.leadIdentification.map((point, idx) => (
                            <li className="py-2" key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-100 text-center d-flex justify-content-start">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>

            {/* --- Development Journey: Autonomous Qualification --- */}
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Development Journey: Autonomous Qualification</h6>
                <div className="fs-3 third-theme-clr pt-5">
                    <ul>
                        {aboutProject.developmentJourney.autonomousQualification.map((point, idx) => (
                            <li className="py-2" key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-100 text-center d-flex justify-content-end">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>

            {/* --- Development Journey: Stateful Lead Management --- */}
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Development Journey: Stateful Lead Management</h6>
                <div className="fs-3 third-theme-clr pt-5">
                    <ul>
                        {aboutProject.developmentJourney.statefulLeadManagement.map((point, idx) => (
                            <li className="py-2" key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-100 text-center d-flex justify-content-start">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>

            {/* --- Development Journey: Broker Dashboard & Chat --- */}
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Development Journey: Broker Dashboard & Chat</h6>
                <div className="fs-3 third-theme-clr pt-5">
                    <ul>
                        {aboutProject.developmentJourney.brokerDashboardAndChat.map((point, idx) => (
                            <li className="py-2" key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-100 text-center d-flex justify-content-end">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
            
            {/* --- Technologies Used --- */}
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

            {/* --- Summary of My Contributions --- */}
            <div className="py-5">
                <h6 className="custom-font-size sec-txt-theme-clr">Summary of My Contributions</h6>
                <div className="fs-3 third-theme-clr pt-5">
                    <ul>
                        {aboutProject.myContributions.map((point, idx) => (
                            <li className="py-2" key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-1D00 text-center d-flex justify-content-end">
                    <p className="border-bottom border-0 custom-border-color w-50 py-5"></p>
                </div>
            </div>
        </div>
    );
}

export default KridAiDetailView;