import React from "react";
import MyIntro from "./MyIntro";
import SkillCarousel from "./SkillCarousel";
import Experience from "./eperience/Experience";
import MyProjects from "./projects/MyProjects";

const HomePage = () => {
    return(<div className="bg-dark">
        <MyIntro />
        <SkillCarousel />
        <Experience />
        <MyProjects />
    </div>)
}

export default HomePage;
