
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

// Import images directly for projects
import progtipsImage from '../assets/projects/progtips.jpg';
import ipAddressesImage from '../assets/projects/ipaddresses.jpg';
import helloWorldImage from '../assets/projects/helloworld.jpg';
import terminalImage from '../assets/projects/terminal.jpg';
import scanImage from '../assets/projects/scan.jpg';
import coverCamImage from '../assets/projects/covercam.jpg';
import dorkingImage from '../assets/projects/dorking.jpg';
import darkWebImage from '../assets/projects/darkweb.jpg';
import firstProgImage from '../assets/projects/firstprog.jpg';
import virusImage from '../assets/projects/virus.jpg';
import binarySearchImage from '../assets/projects/bs.png';
import progLanguageImage from '../assets/projects/proglanguage.jpg';
import csVsSeImage from '../assets/projects/cs.jpg';
import binaryCodeImage from '../assets/projects/binary.jpg';
import howToProgramImage from '../assets/projects/how2program.jpg';
import firewallImage from '../assets/projects/firewall.jpg';
import phishingImage from '../assets/projects/phish.jpg';
import nftsImage from '../assets/projects/nfts.jpg';
import vulnerableImage from '../assets/projects/vulnerable.jpg';
import careersImage from '../assets/projects/careers.jpg';
import hackerImage from '../assets/projects/hacker.jpg';
import teensImage from '../assets/projects/teens.png';
import mitoImage from '../assets/projects/mito.png';

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
    name: 'The Dark Web',
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
    image: virusImage,
    source_code_link: 'https://www.instagram.com/p/CN2MTVCD6KS/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CN2MTVCD6KS/?utm_source=ig_web_copy_link',
  },
  {
    name: 'Binary Searching',
    image: binarySearchImage,
    source_code_link: 'https://www.instagram.com/p/COsROzqjwDP/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/COsROzqjwDP/?utm_source=ig_web_copy_link',
  },
  {
    name: 'What Language to Learn First?',
    image: progLanguageImage,
    source_code_link: 'https://www.instagram.com/p/CO-SkGMDuqo/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CO-SkGMDuqo/?utm_source=ig_web_copy_link',
  },
  {
    name: 'Computer Science vs Software Engineering',
    image: csVsSeImage,
    source_code_link: 'https://www.instagram.com/p/CQGY0jWDATS/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CQGY0jWDATS/?utm_source=ig_web_copy_link',
  },
  {
    name: 'Binary Code',
    image: binaryCodeImage,
    source_code_link: 'https://www.instagram.com/p/CROfU0PDw9O/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CROfU0PDw9O/?utm_source=ig_web_copy_link',
  },
  {
    name: 'Advantages of Learning How to Program',
    image: howToProgramImage,
    source_code_link: 'https://www.instagram.com/p/CSEjz_xBPBQ/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CSEjz_xBPBQ/?utm_source=ig_web_copy_link',
  },
  {
    name: 'The Importance of a Firewall',
    image: firewallImage,
    source_code_link: 'https://www.instagram.com/p/CS6o5eHpMEB/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CS6o5eHpMEB/?utm_source=ig_web_copy_link',
  },
  {
    name: 'The Dangers of a Phishing Attack',
    image: phishingImage,
    source_code_link: 'https://www.instagram.com/p/CTwtsqUp3FA/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CTwtsqUp3FA/?utm_source=ig_web_copy_link',
  },
  {
    name: 'Non-Fungible Tokens',
    image: nftsImage,
    source_code_link: 'https://www.instagram.com/p/CY1Q2j5pVMa/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CY1Q2j5pVMa/?utm_source=ig_web_copy_link',
  },
  {
    name: 'How to Protect your Device from Security Vulnerability',
    image: vulnerableImage,
    source_code_link: 'https://www.instagram.com/p/CUCuvZup3gS/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CUCuvZup3gS/?utm_source=ig_web_copy_link',
  },
  {
    name: 'Careers in Technology',
    image: careersImage,
    source_code_link: 'https://www.instagram.com/p/CZZMwLLpb5c/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CZZMwLLpb5c/?utm_source=ig_web_copy_link',
  },
  {
    name: 'How to Spot a Hacker',
    image: hackerImage,
    source_code_link: 'https://www.instagram.com/p/CWS7RKOpWL2/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CWS7RKOpWL2/?utm_source=ig_web_copy_link',
  },
  {
    name: 'Technology and Teens',
    image: teensImage,
    source_code_link: 'https://www.instagram.com/p/CbFZOXCph_Y/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CbFZOXCph_Y/?utm_source=ig_web_copy_link',
  },
  {
    name: 'The Mitochondria of a Computer',
    image: mitoImage,
    source_code_link: 'https://www.instagram.com/p/CbXbZPRpp3K/?utm_source=ig_web_copy_link',
    demo_link: 'https://www.instagram.com/p/CbXbZPRpp3K/?utm_source=ig_web_copy_link',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'SevenPH',
    description: 'Seven PH developed Project Tasuru as a way to help those in need.',
    link: "https://www.instagram.com/p/CLlxIaOl9q4/?utm_source=ig_web_copy_link"
  },
  {
    id: 'css',
    title: 'Teaching Teens Code',
    description: 'We partnered up with TTC to discuss whether or not college is imperative for a career in coding.',
    link: "https://www.instagram.com/p/CPiV7Whj5Yt/?utm_source=ig_web_copy_link"
  },
];

// const markerSvg = `<svg viewBox="-4 0 36 36">
//     <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
//     <circle fill="black" cx="14" cy="14" r="7"></circle>
//   </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
