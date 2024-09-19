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

		"Cybersifyph teaches kids about topics that aren't usually taught at in school, such as: penetration testing, IP addresses, security vulnerability, and much more. Our only goal is to increase the number of students interested in taking a technology based career, and get kids excited about the wonderful world of tech. "
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
    name: "Arasartara's Gallery",
    description: 'A memory game with an art theme implemented with React. Test your memory skills and enjoy beautiful artwork as you match pairs of cards in this engaging game.',
    image: memoryGame,
    source_code_link: 'https://github.com/bl33h/artMemoryGame',
    demo_link: 'https://arasarmemory.netlify.app/',
  },
  {
    name: 'Connect 4',
    description: 'This project implements Connect Four in Python and Pygame, featuring a GUI and gameplay modes for player vs. AI and AI vs. AI. The AI uses the MiniMax algorithm, with optional alpha-beta pruning for improved performance.',
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjRkaWp6MDJ1cXNrZmMzaTZ2aXVhcWtndWJpNHg0djRpYWdtYjF3ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/p49LPwL9yAoZInx28N/giphy.gif",
    source_code_link: 'https://github.com/bl33h/connectFour',
    demo_link: 'https://youtu.be/CBceC2BXJyE',
  },
  {
    name: 'Pawsitive',
    description: 'Explore a user-friendly Figma prototype for an adoption and sterilization awareness website. Experience the sleek design and contribute to a noble cause.',
    image: pawsitivePrototype,
    source_code_link: 'https://github.com/bl33h/pawsitive',
    demo_link: 'https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2',
  },
  {
    name: 'Client-Server Chat',
    description: 'This is a chat application that facilitates communication between multiple clients through a centralized server. The application is designed using socket programming and handles multiple client connections concurrently using threads.',
    image: "https://i.pinimg.com/originals/0e/4a/c3/0e4ac37acbff81cd087aa19692a07a9d.gif",
    source_code_link: 'https://github.com/bl33h/clientServerChat',
    demo_link: 'https://youtu.be/Mk1BNqPz1n4',
  },
  {
    name: 'Visit Our Lands',
    description: 'It is a recommendation system built with React and Supabase. This system focuses on providing tourist recommendations for various locations in Guatemala.',
    image: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/uvd82gspopw8orvryulc",
    source_code_link: 'https://github.com/bl33h/visitOurLands',
    demo_link: 'https://visitourlands.netlify.app/',
  },
  {
    name: 'Exploring The Space',
    description: 'The program uses OpenGL and C++ to render celestial bodies with dynamic realism. It includes a shader-based pipeline and a camera that follows a spaceship for added interactivity.',
    image: "https://camo.githubusercontent.com/1f7fb7873058b029992d30b8601d2c36582f6bb399482c560d5560c2d02fc37e/68747470733a2f2f6d65646961342e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45784d4773314e6d733459336c6a4e4752684e3270354f574a33625456304f484675616d77314d574a314e6d31344d4849786254567963535a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f76553246666b6d386e6744494e336d6d36572f67697068792e676966",
    source_code_link: 'https://github.com/bl33h/exploringTheSpace',
    demo_link: 'https://camo.githubusercontent.com/1f7fb7873058b029992d30b8601d2c36582f6bb399482c560d5560c2d02fc37e/68747470733a2f2f6d65646961342e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45784d4773314e6d733459336c6a4e4752684e3270354f574a33625456304f484675616d77314d574a314e6d31344d4849786254567963535a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f76553246666b6d386e6744494e336d6d36572f67697068792e676966',
  },
  {
    name: 'Disney Plus Replica',
    description: 'A replica of the Disney+ principal page built using React and Vite. The Vitest and Storybook technologies were also implemented for testing.',
    image: "https://camo.githubusercontent.com/5d85ae990f2b7b9a0f4d6246168b7995fc930d59d127a15c3c4ea18eb2a5001b/68747470733a2f2f6c756d696572652d612e616b616d616968642e6e65742f76312f696d616765732f65735f686f7573652d6f662d6469736e65792d706c75735f6d6f625f6d5f35376437663836652e6a7065673f726567696f6e3d302c302c3830302c3630302677696474683d373638",
    source_code_link: 'https://github.com/bl33h/disneyPlusReplica',
    demo_link: 'https://disneyplusreplica.netlify.app',
  },
  {
    name: 'Deep Dive Odyssey Raycasting',
    description: 'The code represents a raycasting graphics application with a Finding Pirate Treasure Under the Sea theme. It creates a 3D perspective effect by simulating rays of light and their interactions with a map.',
    image: "https://camo.githubusercontent.com/94f800b79d759c06717af7d816a16ccff75a0101c942ca9ad3c562d0dd2c9404/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45784f4870736432527a5a575a6a616e4e366547513364473172616e64755a576b306457357262336f79596d527964584636646a413264535a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f634b4c57543837305a4a39587769706e57772f67697068792e676966",
    source_code_link: 'https://github.com/bl33h/deepDiveOdysseyRaycasting',
    demo_link: 'https://camo.githubusercontent.com/94f800b79d759c06717af7d816a16ccff75a0101c942ca9ad3c562d0dd2c9404/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45784f4870736432527a5a575a6a616e4e366547513364473172616e64755a576b306457357262336f79596d527964584636646a413264535a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f634b4c57543837305a4a39587769706e57772f67697068792e676966',
  },
  {
    name: 'Fibonacci & Factorial',
    description: 'A project that includes two LISP programs: one for factorials and the other for Fibonacci sequences. They use recursion, prompt user input, and display results efficiently.',
    image: "https://i.pinimg.com/originals/96/c3/9a/96c39a5cb89092760fe11f355a32f4a4.gif",
    source_code_link: 'https://github.com/bl33h/fibonacciAndFactorial',
    demo_link: 'https://camo.githubusercontent.com/59b3c9969f369559fbeb1ed6a53f159e0e83b1151b82552b5b2165c4e9686e89/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f312f31612f4669626f6e616363695f63616c6c5f747265655f352e676966',
  }
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'Seven PH',
    icon: htmlIcon,
    description:
      'Seven PH developed Project Tasuru as a way to help those in need.',
  },
  {
    id: 'css',
    title: 'Teaching Teans to Code',
    icon: cssIcon,
    description:
    'We partnered up with TTC to discuss whether or not college is imperative for a career in coding.',
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
