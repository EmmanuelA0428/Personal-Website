import logo from "../assets/logo.jpg";
import blog1Content from "./BlogContent/blog1Content.md";
import DataCampCertification from "../assets/Certificates/DataCampCert2.png";
import WorkExp3 from "../assets/Projects/WorkExp3.png";
import WorkExp2 from "../assets/Projects/WorkExp2.jpeg";
import WorkExp1 from "../assets/Projects/WorkExp1.jpeg";
import ArcGisLogo from "../assets/ArcGIS_logo.png?width=40&height=40";
// Projects data
const projects = [
  {
    name: "ARCGIS - Internship Project",
    description:
      "Worked with ArcGIS, to create an interactive map to visualize classroom technology data, enhancing decision-making for technology upgrades and maintenance.",
    tags: [
      {
        name: "ArcGIS Online",
        color: "blue-text-gradient",
      },
      {
        name: "ArcGIS Experince Builder",
        color: "green-text-gradient",
      },
      {
        name: "ArcGIS Survey 123",
        color: "pink-text-gradient",
      },
    ],
    image: ArcGisLogo,
    source_code_link: "https://github.com/",
    video: "path_to_video_image", // Added video value
  },
];

// Story Blogs data
const storyBlogs = [
  {
    id: 1,
    title: "Blog 1",
    description: "This is the first blog",
    content: blog1Content,
    date: "2022-01-01",
    tags: ["tag1", "tag2"],
  },
  {
    id: 2,
    title: "Blog 2",
    description: "This is the second blog",
    content: "This is the second blog",
    date: "2022-01-01",
    tags: ["tag1", "tag2"],
  },
  {
    id: 3,
    title: "Blog 3",
    description: "This is the first blog",
    content: "This is the first blog",
    date: "2022-01-01",
    tags: ["tag1", "tag2"],
  },
  {
    id: 4,
    title: "Blog 4",
    description: "This is the first blog",
    content: "This is the first blog",
    date: "2022-01-01",
    tags: ["tag1", "tag2"],
  },
];

// Research Blogs data
const researchBlogs = [
  {
    id: 5,
    title: "Blog 1",
    description: "This is the first Research blog",
    content: "This is the first blog - We chillen\nAnother test ",
    date: "2022-01-01",
    tags: ["tag1", "tag2"],
  },
  {
    id: 6,
    title: "Blog 2",
    description: "This is the second blog",
    content: "This is the second blog",
    date: "2022-01-01",
    tags: ["tag1", "tag2"],
  },
  {
    id: 7,
    title: "Blog 3",
    description: "This is the first blog",
    content: "This is the first blog",
    date: "2022-01-01",
    tags: ["tag1", "tag2"],
  },
  {
    id: 8,
    title: "Blog 4",
    description: "This is the first blog",
    content: "This is the first blog",
    date: "2022-01-01",
    tags: ["tag1", "tag2"],
  },
];

// Experience data
const experiences = [
  {
    title: "Student lead",
    company_name: "Hobart and William Smith Colleges",
    icon: WorkExp1,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Led and coordinated IT projects, managing a team of student workers to ensure project milestones were met on time and aligned with departmental objectives.",
      "Provided leadership in troubleshooting and resolving IT issues, mentoring students and empowering them to independently solve complex technical challenges.",
      "Designed and conducted training programs, cultivating a culture of continuous learning and enhancing the technical capabilities of the IT department's student team.",
      "Spearheaded the implementation of IT best practices and procedures, ensuring consistency across the department while fostering a collaborative and efficient work environment.",
    ],
  },
  {
    title: "Studern Intern",
    company_name: "Hobart and William Smith Colleges",
    icon: WorkExp2,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Led the development of an online application using ArcOnline's Experience Builder to map and catalogue classroom technology across multiple campus locations.",
      "Conducted comprehensive surveys using Survey 123 to collect and classify technology information from teaching spaces, ensuring data accuracy and completeness for at least two buildings.",
      "Collaborated with IT Services teams to design a searchable resource, facilitating the planning and support of classroom technology and network infrastructure.",
      "Developed an interactive dashboard application with Python to visualize classroom technology data, enhancing decision-making for technology upgrades and maintenance.",
    ],
  },
  {
    title: "Student Tutor",
    company_name: "Hobart and William Smith Colleges",
    icon: WorkExp3,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Provided one-on-one and group tutoring sessions, assisting students in understanding complex concepts and improving their academic performance.",
      "Collaborated with faculty members to identify student needs and develop tailored tutoring strategies for various subjects.",
      "Created and implemented personalized learning plans, adapting to diverse learning styles and ensuring student success.",
      "Monitored student progress and provided feedback, helping them build confidence and achieve their academic goals.",
    ],
  },
  {
    title: "Independent Study",
    company_name: "Hobart and William Smith Colleges",
    icon: WorkExp2,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - Feb 2024",
    points: [
      "Built a fully functional to-do list application using React Native, enabling users to manage tasks efficiently on mobile platforms.",
      "Designed and integrated a backend solution for securely storing user data, including tasks, priorities, and completion status.",
      "Focused on creating a seamless and intuitive user interface with smooth navigation and responsive design for both iOS and Android devices.",
      "Managed the entire development process, from frontend design to backend data handling, demonstrating strong problem-solving and technical skills in a solo project.",
    ],
  },
];

const certifications = [
  {
    title: "Data Camp Certification",
    image: DataCampCertification, // Replace with actual image path
  },
];

// Skills data
const skills = [
  {
    category: "Technical Skills",
    list: [
      {
        name: "JavaScript",
        info: "A versatile programming language essential for web development. Experience: 3 years.",
      },
      {
        name: "React",
        info: "A JavaScript library for building dynamic user interfaces. Experience: 2 years.",
      },
      {
        name: "Python",
        info: "A powerful programming language known for its simplicity and versatility. Experience: 2 years.",
      },
      {
        name: "Java",
        info: "A robust programming language widely used for enterprise applications. Experience: 1 year.",
      },
      {
        name: "R",
        info: "A language and environment for statistical computing and graphics. Experience: 1 year.",
      },
      {
        name: "ArcGIS",
        info: "A geospatial analysis and mapping platform. Experience: 1 years.",
      },
    ],
  },
  {
    category: "Soft Skills",
    list: [
      {
        name: "Communication",
        info: "Effectively conveying ideas and collaborating with others. Experience: 3 years.",
      },
      {
        name: "Problem-solving",
        info: "Finding solutions to complex challenges through critical thinking. Experience: 3 years.",
      },
      {
        name: "Time Management",
        info: "Efficiently prioritizing tasks to meet deadlines. Experience: 3 years.",
      },
      {
        name: "Teamwork",
        info: "Collaborating with others to achieve common goals. Experience: 2 years.",
      },
      {
        name: "Customer Service",
        info: "Providing excellent support and building positive relationships. Experience: 2 years.",
      },
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  projects,
  storyBlogs,
  researchBlogs,
  experiences,
  certifications,
  skills,
  testimonials,
}; //exporting the projects;
