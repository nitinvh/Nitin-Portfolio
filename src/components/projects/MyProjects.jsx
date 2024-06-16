import React from "react";
import ProjectSummary from "./ProjectSummary";
import library from "../library";

const MyProjects = () => {
    const { projects } = library;

    return (
        <div className="mx-5 mt-6">
            <h2 className="fw-bolder text-start mb-5 custom-font-size pt-5 text-light" id="projects">Projects</h2>
            {projects.map((project, idx) => (
                <ProjectSummary key={idx} project={project} id={idx} />
            ))}
        </div>
    );
};

export default MyProjects;
