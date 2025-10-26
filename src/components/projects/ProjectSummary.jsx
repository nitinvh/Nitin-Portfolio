import React from 'react';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProjectSummary = ({ project, id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        sessionStorage.setItem('projectId', id);
        navigate(`/project-detail-view`);
    };

    // const renderTooltip = (props) => (
    //     <Tooltip id="button-tooltip" className='fs-5 fw-bolder' {...props}>
    //         Click me for detail view
    //     </Tooltip>
    // );
  console.log(id)

    return (
        <div className="py-5">
            <Row className="d-flex justify-content-center align-items-center">
                {/* <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                > */}
                <Col lg={4} md={12} className="text-start  mx-5 mb-4 mb-lg-0">
                    <h2 className="text-theme-color fs-1 mb-5">{project.name}</h2>
                    <p className="fs-3 fourth-theme-color">{project.description}</p>
                </Col>
                {/* </OverlayTrigger> */}
                <Col lg={5} md={12} className="text-start">
                    <p className='card-title text-start fs-1 mb-5 sec-txt-theme-clr'>Details</p>
                    <ul className="card-text fs-2">
                        {project.details.map((detail, index) => (
                            <li key={index} className="fs-3 text-start third-theme-clr">{detail}</li>
                        ))}
                    </ul>
                    {/* {(id==0)? <div className="w-100 text-start ms-3">
                        <a className="fs-5 text-primary point" onClick={handleClick}>More details</a>
                    </div>: <span></span>} */}
                    
                </Col>
            </Row>
            <hr className='text-light mt-6' />
        </div>
    );
};

export default ProjectSummary;
