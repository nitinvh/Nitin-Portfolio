import React from 'react';
import { useNavigate } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const ProjectSummary = ({ project, id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        sessionStorage.setItem('projectId',id);
        navigate(`/project-detail-view`);
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" className='fs-5 fw-bolder' {...props}>
            Click me for detail view
        </Tooltip>
    );

    return (
        <div onClick={handleClick} className="project-summary py-5">
            <div className="d-flex justify-content-center align-items-center">
                <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <div className="col-md-4 text-start point mx-5">

                        <h2 className="text-theme-color fs-1 mb-5">{project.name}</h2>
                        <p className="fs-3 fourth-theme-color">{project.description}</p>

                    </div>
                </OverlayTrigger>
                <div className="col-md-5 text-start">
                    <p className='card-title text-start fs-1 mb-5 sec-txt-theme-clr'>Details</p>
                    <ul className="card-text fs-2">
                        {project.details.map((detail, index) => (
                            <li key={index} className="fs-3 text-start third-theme-clr">{detail}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr className='text-light mt-6' />
        </div>

    );
};

export default ProjectSummary;
