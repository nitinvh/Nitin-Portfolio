import _unify from '../assets/unify.png';
import _walkover from '../assets/walkover.png';
import _highradius from '../assets/highradius.png';
import _krid from '../assets/krid_AI.png';
import _uh from '../assets/uh.png';

const library = {
    experiences: [
        {
            id: 0,
            companyLogo: _krid, // Replace _krid with your imported logo variable
            title: 'Agentic AI R&D Intern',
            company: 'Krid.ai',
            employmentType: 'Internship',
            duration: 'Aug 2025 - Present', // Update with your start date
            location: 'Remote',
            responsibilities: [
                "Architected and developed 'REVA' (Real Estate Virtual Assistant), an end-to-end agentic platform, from concept to a functional Proof-of-Concept.",
                "Built the full-stack application, including a React/TypeScript frontend, Python/Flask APIs, and a MongoDB database to manage leads.",
                "Engineered an autonomous agent using Vapi to place human-like conversational voice calls to new leads for qualification.",
                "Designed and implemented a complex, multi-step workflow using LangGraph to manage the state of each lead (e.g., 'new', 'called', 'qualified').",
                "Developed a natural language chat interface using LangChain and AutoGen, allowing brokers to query the database and manage leads via text."
            ],
            linkedinUrl: 'https://www.linkedin.com/company/krid-ai/', // Added a placeholder, update if needed
            aboutProject: {
                about: `As an Agentic AI R&D Intern, my primary role was to rapidly prototype and implement cutting-edge Proofs-of-Concept (POCs) for complex business problems using agentic AI frameworks. My flagship project was "REVA" (Real Estate Virtual Assistant).`,
                projectOverview: `REVA is a comprehensive, autonomous platform designed to solve the lead generation and qualification bottleneck for real estate companies. It automates the entire process, from identifying potential leads to qualifying them via phone calls and providing a seamless management interface for brokers.`,
                developmentJourney: {
                    leadIdentification: [
                        `The system's first task was to identify new leads. I used n8n to create a workflow that monitored the client's inbound email for new property inquiries from websites like nobroker.com and housing.com. When an email arrived with details of someone looking to buy or sell, the workflow automatically triggered, parsing their information and storing it as a new lead in the MongoDB database.`
                    ],
                    autonomousQualification: [
                        `To solve the problem of manual cold calling, I integrated Vapi, a conversational voice AI. An autonomous agent would call the new lead, engage in a human-like conversation to gather more details (e.g., budget, location, timeline), and assess their potential.`
                    ],
                    statefulLeadManagement: [
                        `A lead's journey is a multi-step process. I used LangGraph to engineer a stateful agentic workflow. Based on the Vapi call results, the system would autonomously update the lead's status (e.g., 'Potential', 'Not Interested'), qualify them, and schedule follow-ups.`
                    ],
                    brokerDashboardAndChat: [
                        `To make the data accessible, I built a full-stack platform. The backend consisted of Python/Flask APIs to interact with the MongoDB database. The frontend, built with React and TypeScript, provided a dashboard for brokers.`,
                        `The most powerful feature was a chat interface powered by LangChain and AutoGen. Brokers could type "Show me all potential leads in Austin" or "Update John Doe's status to 'Contacted'", and the AI agents would execute those tasks.`
                    ]
                },
                technologiesUsed: [
                    `AI/Agentic: LangChain, LangGraph, AutoGen, n8n, Vapi`,
                    `Full-Stack: React, TypeScript, Python, Flask`,
                    `Database: MongoDB`
                ],
                myContributions: [
                    `End-to-end architecture and development of the REVA platform.`,
                    `Integration of multiple agentic frameworks (n8n, Vapi, LangGraph, LangChain) into a single, cohesive system.`,
                    `Full-stack development of the broker-facing application (React/TS, Flask, MongoDB).`,
                    `Successful demonstration of a complex, autonomous business workflow as a functional POC.`
                ]
            },
        },
        {
            id: 1,
            companyLogo: _uh, // Replace _uh with your imported logo variable
            title: 'Teaching Assistant (Data Science)',
            company: 'University of Houston',
            employmentType: 'Part-time',
            duration: 'Jan 2025 - Present',
            location: 'Houston, TX',
            responsibilities: [
                "Mentored and provided technical support to 86 graduate data science students, clarifying complex concepts and project requirements.",
                "Graded assignments, quizzes, and final projects, providing detailed, constructive feedback to support academic and professional growth.",
                "Assisted the professor in managing course logistics, preparing materials, and proctoring exams for the Data Science program.",
                "Hosted weekly office hours to offer one-on-one help with Python, Pandas, and Scikit-learn, improving overall student comprehension.",
                "Led review sessions before exams to reinforce foundational data science principles and problem-solving techniques."
            ],
            linkedinUrl: 'https://www.linkedin.com/school/university-of-houston/',
            aboutProject: {
                about: `As a Teaching Assistant for the Engineering Data Science graduate program, I supported professors and students in foundational courses.`,
                projectOverview: `This role involved reinforcing complex topics in data science, machine learning, and statistical analysis. My primary goal was to act as a bridge between the students and the professor, ensuring students had the resources and support needed to succeed in their coursework.`,
                developmentJourney: { // Re-purposing this section for TA duties
                    studentMentorship: [
                        `Provided direct technical support to 86 graduate students, helping them debug code and understand complex algorithms for their projects.`
                    ],
                    academicSupport: [
                        `Graded all assignments and projects, ensuring fairness and providing high-quality, constructive feedback to help students learn from their mistakes.`
                    ],
                    courseLogistics: [
                        `Assisted the professor with course management, including preparing lecture materials, managing online forums, and proctoring examinations.`
                    ]
                },
                technologiesUsed: [ // Renaming this section to 'Key Skills'
                    `Key Skills: Python, Pandas, Scikit-learn, Data Visualization, Mentorship, Technical Communication.`
                ],
                myContributions: [
                    `Directly contributed to the academic success and understanding of a large cohort of graduate students.`,
                    `Helped maintain a high-quality learning environment by providing timely feedback and support.`,
                    `Acted as a reliable resource for both the professor and the students throughout the semester.`
                ]
            },
        },
        {
            id: 2,
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
            id: 3,
            companyLogo: _walkover,
            title: 'Frontend Developer Intern',
            company: 'Walkover',
            employmentType: 'Internship',
            duration: 'Jan 2022 - Jul 2022 · 7 mos',
            location: '',
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
            id: 4,
            companyLogo: _highradius,
            title: 'Trainee - Highako Product',
            company: 'HighRadius',
            employmentType: 'Internship',
            duration: 'Aug 2021 - Jan 2022 · 6 mos',
            location: '',
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
    projects: [
        {
            id:0,
          name: "RideEasy",
          desc: "RideEasy is a comprehensive taxi management web application designed to simplify urban transportation. It comprises three micro apps: Rider, Driver, and Admin. The Rider app allows users to manage their accounts, save card details, book rides, and view routes on Google Maps with real-time fare estimation. The Driver app enables drivers to manage their profiles, receive ride requests, and control ride completion. The Admin app offers tools for reviewing and approving driver applications, ensuring a seamless and efficient ride experience for all users.",
          description: "I developed a Taxi management web app named RideEasy, I created 3 micro apps (Rider, Driver, and Admin apps).",
          details:["Developed a Taxi management web app with 3 micro apps (Rider, Driver, and Admin apps).",
          "Rider app: Users can manage accounts, card details, and book rides.",
          "Driver app: Drivers can manage their status, view ride requests, and complete rides.",
          "Admin app: Admins can review and manage driver accounts.",
          "Implemented Google Maps for route display and fare estimation.",
          "Focused on providing a seamless ride booking and management experience."],

          microApps: [
            {
              name: "Rider-app",
              features: [
                "Manage RideEasy account, card details, and book rides.",
                "View route on Google Map displayed on the dashboard page, with distance and fare.",
                "Cancel the ride after request.",
                "Ride is accepted by an available driver.",
                "Driver has control to complete the ride."
              ]
            },
            {
              name: "Driver-app",
              features: [
                "Sign-up and manage account by adding or updating onboarding details.",
                "Admin verification and approval for new users or edited onboarding details.",
                "Update status (available/not-available).",
                "View and accept ride requests from users (one request at a time).",
                "Driver has control to complete the ride."
              ]
            },
            {
              name: "Admin-app",
              features: [
                "Manage driver accounts.",
                "Review driver details and approve or reject."
              ]
            }
          ]
        },
        {
            id:1,
          name: "NLP-for-Review-detecting-system",
          desc: "This project was done during my B.Tech time and focused on natural language processing (NLP) techniques to analyze customer reviews. It involved extensive exploratory data analysis (EDA) of review data and using relevant libraries to transform textual reviews into structured data. The project employed a Bag-of-Words model for sentiment analysis, classifying reviews as positive or negative. An SVM classifier was then used to train the model and predict the sentiment of new reviews.",
          description: "This project was done during my B.Tech time. It involved EDA of review data and using relevant libraries to change the reviews to data.",
          details:["Implemented during my B.Tech as a project.",
          "Performed EDA on review data and utilized libraries for data transformation.",
          "Used Bag-of-Words model for sentiment analysis.",
          "Generated boolean values for Good or Bad reviews.",
          "Trained and predicted reviews using SVM classifier.",
          "Demonstrated effective sentiment analysis and machine learning techniques."],
          steps: [
            "Performed EDA of review data.",
            "Used bag-of-words model for sentimental analysis to generate Good or Bad review (boolean target variable).",
            "Used SVM classifier to train and predict whether the given review is good or bad."
          ]
        }
      ]
};

export default library;
