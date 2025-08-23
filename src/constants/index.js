import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import vicc from "../assets/img/vicc.jpg";
import olalekan from "../assets/img/olalekan.jpg";
import lizzy from "../assets/img/lizzy.jpg";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Start Bootstrap",
    company_name: "Anchorsoft Academy",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2020 - August 2024",
    points: [
      "Created an user friendly landing page makingn it fully responsive.",
      "Making use of HTML, custom CSS, Tailwind CSS for utility-first styling and Bootsrap for layout structure and component integration.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Anchorsoft Academy",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Michael proved me wrong.",
    name: "Victor Abioye",
    // designation: "CFO",
    // company: "Acme Co",
    image: vicc,
    
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Michael does.",
    name: "Olalekn Rotimi",
    // designation: "COO",
    // company: "DEF Corp",
    
    image: olalekan,
  },
  {
    testimonial:
      "After Michael optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lizzy Kenny",
    // designation: "CTO",
    // company: "456 Enterprises",
    image: lizzy,
  },
];

const projects = [
  {
    name: "Flight Booking app",
    description:
      "Designed and developed a full-stack web application that allows users to search, book, and manage flights between various airport destinations. Implemented user-friendly interfaces with React and styled them using Tailwind CSS. Developed backend services with Node.js and managed data with MySQL. Focused on creating a seamless booking experience with efficient data handling and responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/charmdude10/flight-booking-app1.git",
  },
  {
    name: "Start Bootstrap",
    description:
      "Developed a fully responsive landing page utilizing HTML, custom CSS, Tailwind CSS for utility-first styling, and Bootstrap for layout structure and component integration. The project demonstrates strong front-end development skills and the ability to harmonize multiple frameworks to deliver a visually appealing and consistent UI across devices.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/charmdude10/Start_Bootstrap_Landing_Page.git",
  },
  {
    name: "3D VISUALIZATION OF A 4 BEDROOM INTERIOR DUPLUX",
    description:
      "Here is a project i decided to work on for a friend who is having his four bedroom duplex going on as at the time the project was done. he needed to know how his building will look like at the end of the day. so i decided to make a 3d visualization preview of it so he could have a clear view of what he wil likely be getting at the end of the day. And thats how i came about this 3d nterior project.",
    tags: [
      {
        name: "AutodeskMaya",
        color: "blue-text-gradient",
      },
      {
        name: "3dVisualization",
        color: "green-text-gradient",
      },
      {
        name: "3dInterior",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.artstation.com/artwork/29BAXB",
  },
  // {
  //   name: "3D VISUALIZATION OF A 4 BEDROOM INTERIOR DUPLUX",
  //   description:
  //     "Here is a project i decided to work on for a friend who is having his four bedroom duplex going on as at the time the project was done. he needed to know how his building will look like at the end of the day. so i decided to make a 3d visualization preview of it so he could have a clear view of what he wil likely be getting at the end of the day. And thats how i came about this 3d nterior project.",
  //   tags: [
  //     {
  //       name: "AutodeskMaya",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "3dVisualization",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "3dInterior",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://www.artstation.com/artwork/29BAXB",
  // },
];

export { services, technologies, experiences, testimonials, projects };
