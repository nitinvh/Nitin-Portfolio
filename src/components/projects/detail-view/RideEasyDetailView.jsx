import React from 'react';
import BackButton from '../../Back';

const RideEasyProjectDetail = ({ project }) => {


    return (
        <div className="bg-dark">
            <div className='ms-5'><BackButton /></div>
            <div className='mx-6'>
                <div className="border-bottom border-0 custom-border-color py-6">
                    <h2 className="custom-font-size text-theme-color mb-4">{project.name} Project</h2>
                    <p className="fs-2 sec-txt-theme-clr pt-2">{project.desc}</p>
                </div>

                <div className="py-5">
                    <h3 className="custom-font-size sec-txt-theme-clr">Project Details</h3>
                    <ul className="fs-3 third-theme-clr py-5">
                        {project.details.map((detail, idx) => (
                            <li className='py-2' key={idx}>{detail}</li>
                        ))}
                    </ul>
                    <div className="w-100 text-center d-flex justify-content-start">
                        <p className="border-bottom border-0 custom-border-color w-75 py-5"></p>
                    </div>
                </div>

                <div className="border-bottom border-0 custom-border-color py-6">
                    <h3 className="custom-font-size sec-txt-theme-clr">Micro Apps</h3>
                    {project.microApps.map((microApp, idx) => (
                        <div key={idx} className="fs-3 third-theme-clr py-5">
                            <h4 className="sec-txt-theme-clr fs-1 mb-3">{microApp.name}</h4>
                            <ul className="fs-2">
                                {microApp.features.map((feature, index) => (
                                    <li key={index} className='py-2'>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RideEasyProjectDetail;
