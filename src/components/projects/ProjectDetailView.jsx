import React, {useEffect, useState} from "react";
import RideEasyProjectDetail from "./detail-view/RideEasyDetailView";
import library from "../library";
import NLPDetailView from "./detail-view/NLPDetailView";

const {projects} = library;

const ProjectDetailView = () => {
    const [project, setProject] = useState({});
    const [id,setId] = useState()
    useEffect(() => {
        const id = sessionStorage.getItem('projectId') || 0;
        console.log('project-id---',id)
        const pjt = projects[id];
        setProject(pjt);
        setId(pjt?.id)
    }, []);
    const renderApp = () => {
        if (id == 0) return <RideEasyProjectDetail project={project} />;
        else if (id==1) { 
            return <NLPDetailView project={project} />;
        }
        else {
            return <div className="text-center custom-font-size text-theme-color">No Project Detail-View page found</div>
        }
    }
    return (<div>
        {renderApp()}
    </div>)

}

export default ProjectDetailView;
