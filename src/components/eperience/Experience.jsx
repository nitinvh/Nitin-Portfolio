import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import library from "../library";
import { useNavigate } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const { experiences } = library;

const Experience = () => {

  const navigate = useNavigate();
  const handleOnClick = (id) => {
    sessionStorage.setItem('id', id);
    navigate('/experience-detail-view');

  }

  // const renderTooltip = (props) => (
  //   <Tooltip id="button-tooltip" className='fs-5 fw-bolder' {...props}>
  //     Click me for detail view
  //   </Tooltip>
  // );

  return (
    <div className="mt-6 ">
      <div className="mx-5">
        <h2 className="fw-bolder text-start mb-5 custom-font-size pt-5 text-light" id='experience'>Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className={`card bg-dark border-bottom border-bottom border-0 rounded-0 py-5 custom-border-color`} >

            <div className="row g-0 mb-5">
              {/* Left Side: Company Logo and Summary */}
              {/* <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              > */}
              <div className="col-lg-4 d-flex align-items-center justify-content-center p-3 flex-column ">
                <img src={exp.companyLogo} className="img-fluid rounded-circle border border-4  mb-3" alt={`${exp.company} logo`} style={{ width: '10rem', height: '10rem' }} />
                <div className="text-center text-light mt-3">
                  <h5 className="card-title fs-2 text-theme-color">{exp.title}</h5>
                  <p className="card-text fs-1 "><strong>{exp.company}</strong> · <span className="third-theme-clr">{exp.employmentType}</span></p>
                  <p className="card-text fs-3 fourth-theme-color">{exp.duration}</p>
                  <p className="card-text fs-3 fourth-theme-color">{exp.location}</p>
                </div>
              </div>
              {/* </OverlayTrigger> */}
              {/* Right Side: Roles & Responsibilities */}
              <div className="col-lg-8 d-flex justify-content-start align-items-center">
                <div className="card-body text-light">
                  <h5 className="card-title text-start fs-1 mb-5 sec-txt-theme-clr">Roles & Responsibilities</h5>
                  {exp.responsibilities.length > 0 && (
                    <ul className="card-text fs-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-start third-theme-clr py-1">{responsibility}</li>
                      ))}
                    </ul>
                  )}
                  <div className="w-100 text-start ms-3">
                    <a className="fs-5 text-primary point" onClick={() => handleOnClick(exp?.id)}>More details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
