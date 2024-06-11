import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import library from "../library";

const {experiences} = library;


const Experience = () => {
  return (
    <div className="mt-6 ">
      <div className="mx-5">
        <h2 className="fw-bolder text-start mb-5 custom-font-size pt-5 text-light">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className={`card bg-dark mb-3 border-bottom border-0 rounded-0 mb-5 py-5 custom-border-color`}>
            <div className="row g-0">
              {/* Left Side: Company Logo and Summary */}
              <div className="col-lg-4 d-flex align-items-center justify-content-center p-3 flex-column">
                <img src={exp.companyLogo} className="img-fluid rounded-circle border border-4  mb-3" alt={`${exp.company} logo`} style={{ width: '80px', height: '80px' }} />
                <div className="text-center text-light">
                  <h5 className="card-title fs-2 text-theme-color">{exp.title}</h5>
                  <p className="card-text fs-1 "><strong>{exp.company}</strong> · <span className="third-theme-clr">{exp.employmentType}</span></p>
                  <p className="card-text fs-3 fourth-theme-color">{exp.duration}</p>
                  <p className="card-text fs-3 fourth-theme-color">{exp.location}</p>
                </div>
              </div>
              {/* Right Side: Roles & Responsibilities */}
              <div className="col-lg-8 d-flex justify-content-start align-items-center">
                <div className="card-body text-light">
                  <h5 className="card-title text-start fs-1 mb-5 sec-txt-theme-clr">Roles & Responsibilities</h5>
                  {exp.responsibilities.length > 0 && (
                    <ul className="card-text fs-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-start third-theme-clr">{responsibility}</li>
                      ))}
                    </ul>
                  )}
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
