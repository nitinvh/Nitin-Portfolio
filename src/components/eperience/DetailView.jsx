import React, { useEffect, useState } from "react";
import library from "../library";
import linkedinIcon from '../../assets/linkedin.png'; // Path to your LinkedIn icon image
import UnifyDetailView from "./UnifyDetailView";

const { experiences } = library;

const DetailView = () => {
    const [experience, setExperience] = useState({});
    useEffect(() => {
        const id = sessionStorage.getItem('id') || 0;
        const exp = experiences[id];
        setExperience(exp);
    }, []);
    const { aboutProject } = experience;
    return (
        <div className="bg-dark">
            <div className="card border-0 bg-dark">
                <div className="text-center mb-4 pt-5">
                    <a href={experience.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <img src={experience.companyLogo} className="img-fluid border border-4 border-light" alt={`${experience.company} logo`} style={{ width: '16rem', height: '16rem' }} />
                    </a>
                </div>
                <div className="row g-0">
                    <div className="col-12 text-light">
                        <div className="card-body mx-5">
                            <div className="text-center py-4">
                                <h5 className="card-title fs-2 text-theme-color">{experience.title}</h5>
                                <p className="card-text fs-1"><strong>{experience.company}</strong> · {experience.employmentType}</p>
                                <p className="card-text fs-3 fourth-theme-color">{experience.duration}</p>
                                <p className="card-text fs-3 fourth-theme-color">{experience.location}</p>
                            </div>
                            {experience.aboutProject && (
                                <UnifyDetailView aboutProject={aboutProject} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailView;
