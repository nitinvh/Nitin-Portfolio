import React, { useEffect, useState } from "react";
import library from "../library";
import linkedinIcon from '../../assets/linkedin.png'; // Path to your LinkedIn icon image
import UnifyDetailView from "./UnifyDetailView";
import WalkoverDetailView from "./WalkoverDetailView";
import HighRadiusDetailView from "./HighRadiusDetailView";

const { experiences } = library;

const detailViewCompRender ={
    0: <UnifyDetailView aboutProject={experiences[0]?.aboutProject} />,
    1: <WalkoverDetailView />,

}

const DetailView = () => {
    const [experience, setExperience] = useState({});
    
    useEffect(() => {
        const id = sessionStorage.getItem('id') || 0;
        const exp = experiences[id];
        setExperience(exp);
    }, []);
    const {id, aboutProject} = experience;
    const renderApp = () => {
        console.log('here--', id)
        if (id==0)    return <UnifyDetailView aboutProject={aboutProject} />;
        else if (id==1) { 
            return <WalkoverDetailView aboutProject={aboutProject} />;
        }
        else if (id==2){
            return <HighRadiusDetailView aboutProject={aboutProject} />;
        }

        else {
            return <div className="text-center custom-font-size text-theme-color">No Detail-View page found</div>
        }
    }
    
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
                            {renderApp()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailView;
