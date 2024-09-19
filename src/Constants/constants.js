/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 18/12/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  memoryGame,
  avatar,
} from '../assets';

// Import images directly
import progtipsImage from '../assets/projects/progtips.jpg';
import ipAddressesImage from '../assets/projects/ipaddresses.jpg';
import helloWorldImage from '../assets/projects/helloworld.jpg';
import terminalImage from '../assets/projects/terminal.jpg';
import scanImage from '../assets/projects/scan.jpg';
import coverCamImage from '../assets/projects/covercam.jpg';
import dorkingImage from '../assets/projects/dorking.jpg';
import darkWebImage from '../assets/projects/darkweb.jpg';
import firstProgImage from '../assets/projects/firstprog.jpg';
import ttc from '../assets/projects/ttc.png'
import seven from '../projects/tasuru.png'

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Cybersifyph is an online educational organization whose goal is to spread internet literacy among the youth with educational posts and projects.",
    "Cybersifyph teaches kids about topics that aren't usually taught at in school, such as: penetration testing, IP addresses, security vulnerability, and much more. Our only goal is to increase the number of students interested in taking a technology based career, and get kids excited about the wonderful world of tech."
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Programming Tips for Newbies",
    image: progtipsImage,
    source_code_link: 'https://www.instagram.com/p/CGhkO-8jl36/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CGhkO-8jl36/?utm_source=ig_web_copy_link',
  },
  {
    name: 'All About IP Addresses',
    image: ipAddressesImage,
    source_code_link: 'https://www.instagram.com/p/CHFmg1ODqZp/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CHFmg1ODqZp/?utm_source=ig_web_copy_link',
  },
  {
    name: 'What is Print(Hello, world!)',
    image: helloWorldImage,
    source_code_link: 'https://www.instagram.com/p/CINuxdBDA9o/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CINuxdBDA9o/?utm_source=ig_web_copy_link',
  },
  {
    name: 'Terminal Commands',
    image: terminalImage,
    source_code_link: 'https://www.instagram.com/p/CIfut8-Dy50/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CIfut8-Dy50/?utm_source=ig_web_copy_link',
  },
  {
    name: 'Hackers Scanning our Network',
    image: scanImage,
    source_code_link: 'https://www.instagram.com/p/CJDx4LfD9fQ/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CJDx4LfD9fQ/?utm_source=ig_web_copy_link',
  },
  {
    name: 'Do I Really Need to Cover my Camera',
    image: coverCamImage,
    source_code_link: 'https://www.instagram.com/p/CJVzbEmDFua/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CJVzbEmDFua/?utm_source=ig_web_copy_link',
  },
  {
    name: 'Google Dorking',
    image: dorkingImage,
    source_code_link: 'https://www.instagram.com/p/CLT-RnIDOoR/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CLT-RnIDOoR/?utm_source=ig_web_copy_link',
  },
  {
    name: 'Deep Dive Odyssey Raycasting',
    image: darkWebImage,
    source_code_link: 'https://www.instagram.com/p/CMuGFHLDkN8/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CMuGFHLDkN8/?utm_source=ig_web_copy_link',
  },
  {
    name: 'World\'s First Computer Programmer',
    image: firstProgImage,
    source_code_link: 'https://www.instagram.com/p/CNkKvfOje7h/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CNkKvfOje7h/?utm_source=ig_web_copy_link',
  },
  {
    name: 'What is a Computer Virus?',
    image: firstProgImage,
    source_code_link: 'https://www.instagram.com/p/CN2MTVCD6KS/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CN2MTVCD6KS/?utm_source=ig_web_copy_link',
  },
  {
    name: 'Binary Searching',
    image: firstProgImage,
    source_code_link: 'https://www.instagram.com/p/COsROzqjwDP/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/COsROzqjwDP/?utm_source=ig_web_copy_link',
  },
  {
    name: 'What Language to Learn First?',
    image: firstProgImage,
    source_code_link: 'https://www.instagram.com/p/CO-SkGMDuqo/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CO-SkGMDuqo/?utm_source=ig_web_copy_link',
  },
  {
    name: 'Computer Science vs Software Engineering',
    image: firstProgImage,
    source_code_link: 'https://www.instagram.com/p/CQGY0jWDATS/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CQGY0jWDATS/?utm_source=ig_web_copy_link',
  },
  {
    name: 'Binary Code',
    image: firstProgImage,
    source_code_link: 'https://www.instagram.com/p/CROfU0PDw9O/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CROfU0PDw9O/?utm_source=ig_web_copy_link',
  },
  {
    name: 'Advantages of Learning How to Program',
    image: firstProgImage,
    source_code_link: 'https://www.instagram.com/p/CSEjz_xBPBQ/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CSEjz_xBPBQ/?utm_source=ig_web_copy_link',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'Seven PH',
    image: seven,
    description: 'Seven PH developed Project Tasuru as a way to help those in need.',
    link: "https://www.instagram.com/p/CLlxIaOl9q4/?utm_source=ig_web_copy_link"
  },
  {
    id: 'css',
    title: 'Teaching Teans to Code',
    image: ttc,
    description: 'We partnered up with TTC to discuss whether or not college is imperative for a career in coding.',
    link: "https://www.instagram.com/p/CPiV7Whj5Yt/?utm_source=ig_web_copy_link"
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
