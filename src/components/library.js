import _unify from '../assets/unify.png';
import _walkover from '../assets/walkover.png';
import _highradius from '../assets/highradius.png';

const library = {
    experiences: [
        {
            id: 0,
            companyLogo: _unify,
            title: 'Software Development Engineer',
            company: 'Unify Technologies',
            employmentType: 'Full-time',
            duration: 'Aug 2022 - Nov 2023 · 1 yr 4 mos',
            location: 'Hyderabad, Telangana, India',
            responsibilities: [
                "Trained interns and taught them to develop intuitive single-page applications and streamlined navigation features, resulting in a 30% faster product delivery.",
                "Developed a healthcare SaaS platform with a React and Remix-based user interface, contributing to a 20% reduction in development time.",
                "Developed reusable code libraries to expedite future development efforts, reducing time-to-market for new features by using StoryBook.",
                "Collaborated with cross-functional teams to define, design, and ship new features, improving team efficiency by 15%.",
                "Conducted code reviews and provided feedback to ensure adherence to best practices and coding standards, leading to a 50% decrease in reported bugs."
            ],
            linkedinUrl: 'https://www.linkedin.com/company/unifytech/', // Replace with actual LinkedIn URL
            // aboutProject: "During my internship at Walkover, I focused on creating responsive and accessible web interfaces. My contributions helped improve the user experience significantly, and I gained valuable insights into frontend development and problem-solving in real-world scenarios.",
            aboutProject: {
                about: `As a Full-time Software Development Engineer at Unify Technologies, I primarily focused on frontend development, contributing significantly to the creation and enhancement of UnifyCare, a SaaS-based healthcare web application. My journey with UnifyCare began on day one of my tenure at Unify Technologies, and I have been an integral part of the team since the project's inception.`,
                projectOverview: `UnifyCare is a comprehensive healthcare platform designed to streamline and enhance the healthcare experience for providers, practitioners, patients, partners, and administrators. The project, still under active development, is Unify Technologies' flagship product aimed at revolutionizing healthcare management through technology.`,
                developmentJourney: {
                    initialDevelopmentPhase: [
                        `From the ground up, our team developed five essential micro apps: Provider, Practitioner, Patient, Partner, and UnifyCare Admin.`,
                        `Each app was designed to cater to the specific needs of its user base, ensuring a seamless and efficient workflow.`
                    ],
                    unifyCareWebsite: [
                        `Alongside the micro apps, we created the UnifyCare product website to provide a central hub for information and access.`
                    ]
                },
                featureDevelopmentAndBugFixing: [
                    `I played a key role in developing new features and functionalities across all micro apps, ensuring that each component was robust, user-friendly, and efficient.`,
                    `Post-release, I was actively involved in fixing bugs, ensuring that our product maintained high standards of performance and reliability.`
                ],
                fhirIntegration: [
                    `A notable feature of UnifyCare is the integration of FHIR (Fast Healthcare Interoperability Resources) for out-patients within the Practitioner and Patient apps.`,
                    `This integration enabled a seamless workflow from patient registration and hospital creation to doctor consultations and prescription management.`
                ],
                alphaVersionRelease: [
                    `For the initial alpha release, we utilized a tech stack comprising React TypeScript, Chakra-UI for UI components, Storybook for UI component development, and Axios for API integration.`
                ],
                uiOverhaulAndBetaVersion: [
                    `After the alpha release, we undertook a comprehensive UI overhaul.`,
                    `We migrated from Chakra-UI to Tailwind CSS, enhancing the visual appeal and responsiveness of the application.`,
                    `Additionally, we shifted to using Remix for API integration, replacing Axios.`,
                    `Within 3-4 months, we completed the new version of UnifyCare, incorporating additional features and improving the efficiency of existing functions, culminating in the beta version release.`
                ],
                clientFeedbackAndIteration: [
                    `Following the beta release, prestigious hospitals like Rainbow and KIMS started using our product, providing valuable feedback.`,
                    `Our team diligently addressed their feedback, implementing improvements and delivering an enhanced version of UnifyCare within a month.`
                ],
                technologiesUsed: [
                    `Frontend: React TypeScript, Chakra-UI (initially), Tailwind CSS (post-alpha), Storybook.`,
                    `API Integration: Axios (initially), Remix (post-alpha).`
                ],
                myContributions: [
                    `Development and enhancement of micro apps and features.`,
                    `Comprehensive bug fixing and performance optimization post-releases.`,
                    `Active involvement in FHIR integration, ensuring seamless interoperability for out-patients.`,
                    `Significant contributions to the UI overhaul, improving user experience and application efficiency.`,
                    `Collaborating closely with clients to incorporate feedback and deliver an improved product version.`
                ]
            },
        },
        {
            id: 1,
            companyLogo: _walkover,
            title: 'Frontend Developer Intern',
            company: 'Walkover',
            employmentType: 'Internship',
            duration: 'Jan 2022 - Jul 2022 · 7 mos',
            location: 'Remote',
            linkedinUrl: `https://www.linkedin.com/company/walkover/`,
            responsibilities: [
                "Developed strong problem-solving skills by troubleshooting complex issues during the internship period.",
                "Assisted in the development and maintenance of web applications using HTML, CSS, and JavaScript.",
                "Worked closely with designers to ensure the technical feasibility of UI/UX designs.",
                "Participated in daily stand-ups and contributed to sprint planning sessions.",
                "Optimized web applications for maximum speed and scalability."
            ],
            aboutProject: {
                about: `As a Software Development Engineer Intern at Walkover, I primarily focused on frontend development, contributing to the Hello micro-app, which is part of MSG91, the flagship product of the company. My internship involved fixing bugs and refactoring code to enhance the app's performance and maintainability. Working closely with the development team, I played a crucial role in ensuring a smooth user experience for the app's users.`,
                projectOverview: `MSG91 is the flagship product of Walkover, providing robust messaging solutions. As a Software Development Engineer Intern, I was primarily involved in frontend development, contributing to the Hello micro-app.`,
                developmentJourney: {
                    initialDevelopmentPhase: [
                        `I joined the team working on the Hello micro-app, which is part of the broader MSG91 product suite. My main responsibilities included fixing bugs and refactoring code to enhance the performance and maintainability of the app.`,
                    ],
                },
                featureDevelopmentAndBugFixing: [
                    `Focused on identifying and resolving bugs within the Hello micro-app to ensure a smooth user experience.`,
                    `Refactored existing code to improve readability, reduce technical debt, and enhance the application's overall performance.`,
                ],
                technologiesUsed: [
                    `Frontend: Mention specific technologies and frameworks used, e.g., React, JavaScript, CSS.`,
                    `Version Control: Git for managing and collaborating on code changes.`,
                    `Issue Tracking: Used tools like Jira or Trello for tracking bugs and tasks.`,
                ],
                myContributions: [
                    `Successfully fixed critical bugs that improved the app's stability and user satisfaction.`,
                    `Refactored significant portions of the codebase, leading to better performance and easier future maintenance.`,
                    `Collaborated with the development team to implement best practices and ensure code quality.`,
                ],
            },
        },
        {
            id: 2,
            companyLogo: _highradius,
            title: 'Trainee - Highako Product',
            company: 'HighRadius',
            employmentType: 'Internship',
            duration: 'Aug 2021 - Jan 2022 · 6 mos',
            location: 'Remote',
            responsibilities: [
                "Learned ReactJS and frontend related skills during my training period and helped my team to fix bugs and maintain stability.",
                "Assisted in the development of front-end components and reusable libraries.",
                "Collaborated with backend developers to integrate APIs and enhance application functionality.",
                "Participated in code reviews and provided constructive feedback to peers.",
                "Created and maintained technical documentation to support development processes."
            ],
            linkedinUrl: `https://www.linkedin.com/company/highradius/`,
            aboutProject: {
                about: `I joined HighRadius as a summer intern for one month, where I worked on React and frontend-related technologies. This was my first exposure to web technology and based on my performance, I was offered a paid internship for the next six months`,
                developmentJourney: {
                    initialDevelopmentPhase: [
                        `Initially, I was provided with materials to learn React.`,
                        `At the end of the learning period, I was given a project and had to take a test on my learnings.`
                    ],
                    testAndProject: [
                        `I cleared the test with a high score and completed the project successfully.`,
                        `Based on my performance, I was offered a paid internship for the next six months.`
                    ],
                },
                featureDevelopmentAndBugFixing: [
                    `I worked with the order-to-cash product team.`,
                    `Most of my tasks involved bug fixes and UI changes.`
                ],
                workCulture: [
                    `Throughout my tenure at HighRadius, I enjoyed the work culture and learned a lot.`
                ],
                technologiesUsed: [
                    `Frontend: React`
                ],
                myContributions: [
                    `Learning and applying React in a real-world project.`,
                    `Clearing a comprehensive test on my React knowledge with a high score.`,
                    `Developing and improving the order-to-cash product through bug fixes and UI enhancements.`,
                    `Embracing and enjoying the positive work culture at HighRadius.`
                ]
            }
        },
    ],
};

export default library;
