import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Jun Mark",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Prodigo",
  },

  {
    id: 3,
    title: "Age : ",
    description: "27 Years Old",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Filipino",
  },

  {
    id: 5,
    title: "Fulltime / Freelance: ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Talisay City, Cebu, PH",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+639202396034",
  },

  {
    id: 8,
    title: "Email : ",
    description: "markprodz@gmail.com",
  },

  {
    id: 9,
    title: "Facebook : ",
    description: "Mark Prodz",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Filipino, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "New",
    title: "IT Professional",
  },

  {
    id: 2,
    no: "3+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "3+",
    title: "Happy <br /> Clients",
  },

  {
    id: 4,
    no: "3+",
    title: " Certificates <br /> Acquired",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 - 2025",
    title: "Subject Instructor<span>Advance Central College</span>",
    desc: "Experienced as a Subject Instructor at Advance Central College for 2 years (2023 – 2025), teaching both Senior High School and College students.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2017 - 2019",
    title: "Data Analyst <span> Savant Technologies Inc. </span>",
    desc: "Experienced working in a non-voice BPO company for more than 2 years from April 2017 – May 2019.",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023",
    title: "Customer Service <span> IXL Solutions Philippines Inc. </span>",
    desc: "Part time Customer Service Representative at a BPO companymore than a month from Feb 2023 – April 2023.",
  },

  {
    id: 4,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023",
    title: "On-the-Job Training (OJT) <span> PHILPOST </span>",
    desc: "Taken my OJT in Postal Office as an Operations support personnel for 500 hours during Feb 2017 – May 2023",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019 - 2023",
    title: "Bachelor Degree <span> Advance Central College </span>",
    desc: "Graduate of Bachelor of Science in Information Systems",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2011 - 2015",
    title: "Highschool <span> Antique National School </span>",
    desc: "Secondary Education",
  },

  {
    id: 7,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2005 - 2009",
    title: "Elementary <span> San Angel-Malaiba Elementary School </span>",
    desc: "Primary Education",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "50",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "40",
  },

  {
    id: 3,
    title: "Css",
    percentage: "60",
  },

  {
    id: 4,
    title: "Java",
    percentage: "60",
  },

  {
    id: 5,
    title: "Wordpress",
    percentage: "80",
  },

  {
    id: 6,
    title: "React",
    percentage: "30",
  },

  {
    id: 7,
    title: "Photoshop",
    percentage: "60",
  },

  {
    id: 8,
    title: "MS Office",
    percentage: "90",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Desktop Wallpaper",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Tools : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "Sample Edit",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Project",
    preview: "https://perpetualworld.free.nf/download_update.php",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Perpetual World",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Upwork",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JS, PHP",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://perpetualworld.free.nf/download_update.php"
            target="_blank"
            rel="noopener noreferrer">
            perpetualworld.free.nf
          </a>
        ),
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "CRUD Project",
    preview: "https://crud-php-bootstrap.free.nf",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "CRUD PHP Bootstrap",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "School Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, PHP, Bootstrap",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://crud-php-bootstrap.free.nf"
            target="_blank"
            rel="noopener noreferrer">
            crud-php-bootstrap.free.nf
          </a>
        ),
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    preview: "https://perpetualworld.free.nf",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Perpetual World",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Upwork",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JS, PHP",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://perpetualworld.free.nf"
            target="_blank"
            rel="noopener noreferrer">
            perpetualworld.free.nf
          </a>
        ),
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
