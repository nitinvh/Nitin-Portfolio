import React from "react";
import _Python from '../../assets/python.jpg';
import _JavaScript from '../../assets/javaScript.png';
import _React from '../../assets/react.png';
import _Remix from '../../assets/remix.png';
import _TailWind from '../../assets/tailWind.png';
import _Chakra from '../../assets/chakra.png';
import _StoryBook from '../../assets/storyBook.png';
import _Git from '../../assets/git.png';
import _Typescript from '../../assets/typescript.png';
import _ScikitLearn from '../../assets/scikitlearn.png'

const skills = [
    { name: 'JavaScript', img: _JavaScript, description: 'Experienced in JavaScript for developing dynamic web applications.' },
    { name: 'Typescript', img: _Typescript, description: 'Proficient in TypeScript for building scalable and maintainable codebases.' },
    { name: 'Python', img: _Python, description: 'Skilled in Python for data analysis and machine learning.' },
    { name: 'React', img: _React, description: 'Expert in React for creating interactive user interfaces.' },
    { name: 'Remix', img: _Remix, description: 'Experienced with Remix for building fast and secure web applications.' },
    { name: 'Git', img: _Git, description: 'Proficient in Git for version control and collaboration.' },
    { name: 'Scikit Learn', img: _ScikitLearn, description: 'Experienced in Scikit Learn for implementing machine learning algorithms.' },
    { name: 'Tailwind CSS', img: _TailWind, description: 'Skilled in Tailwind CSS for designing responsive and modern UIs.' },
    { name: 'Chakra UI', img: _Chakra, description: 'Proficient in Chakra UI for building accessible React applications.' },
    { name: 'Storybook', img: _StoryBook, description: 'Experienced in Storybook for developing and testing UI components.' },
];


const AllSkills = () => {
    return (
        <div className="bg-dark text-light py-5">
            <div className="mx-6">
                <h1 className="text-start mb-5 pb-5 custom-font-size text-theme-color">My Skills</h1>
                <div className="row d-flex justify-content-center align-items-center">
                    {skills.map((skill, index) => (
                        <div className="col-md-6 col-lg-4 text-center mb-4 " key={index}>
                            <div className="card bg-dark text-light p-3 h-100 rounded rounded-4 ">
                                <div className="w-100 text-center mb-3">
                                    <img src={skill.img} alt={skill.name} className="card-img-top img-fluid text-center" style={{ width: '6.5rem', height: '5rem' }} />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">{skill.name}</h3>
                                    <p className="card-text">{skill.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default AllSkills;
