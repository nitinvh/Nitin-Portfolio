import React from "react";
import _Python from '../assets/python.jpg';
import _JavaScript from '../assets/javaScript.png';
import _React from '../assets/react.png';
import _Remix from '../assets/remix.png';
import _TailWind from '../assets/tailWind.png';
import _Chakra from '../assets/chakra.png';
import _StoryBook from '../assets/storyBook.png';

const skills = [
    { name: 'JavaScript', img: _JavaScript },
    { name: 'React', img: _React },
    { name: 'Remix', img: _Remix },
    { name: 'Tailwind CSS', img: _TailWind },
    { name: 'Chakra UI', img: _Chakra },
    { name: 'Storybook', img: _StoryBook },
    { name: 'Python', img: _Python }
];

const SkillCarousel = () => {
    return (
        <div className="skill-carousel-container text-dark py-5 mx-6">
            <h1 className="f fw-bolder text-start mb-5 text-decoration-underlin custom-font-size">Skills</h1>
            <div className="skill-carousel d-flex">
                {skills.map((skill, index) => (
                    <div className="skill-item text-center mx-3 d-flex justify-content center align-items-center" key={index}>
                        <img src={skill.img} alt={skill.name} className="skill-img img-fluid mx-2 h-4" />
                        <p className="ps-3 w-22 text-start">{skill.name}</p>
                    </div>
                ))}
                {/* Duplicate skills for seamless loop */}
                {skills.map((skill, index) => (
                    <div className="skill-item text-center mx-3 d-flex justify-content center align-items-center" key={`duplicate-${index}`}>
                        <img src={skill.img} alt={skill.name} className="skill-img img-fluid mx-2 h-4" />
                        <p className="ps-3 w-22 text-start">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillCarousel;
