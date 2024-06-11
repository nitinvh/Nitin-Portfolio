import React from "react";
import MyIntro from "./MyIntro";
import SkillCarousel from "./SkillCarousel";
import Experience from "./eperience/Experience";

const HomePage = () => {
    return(<div className="bg-dark">
        <MyIntro />
        <SkillCarousel />
        <Experience />
    </div>)
}

export default HomePage;
