export const PROFILE_DATA = {
  name: "Navneet",
  title: "Full-Stack Web Developer",
  subtitle: "I have earned many skills and built industry grade projects using them. Explore my projects below",
  avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=NavneetDev",
  email: "js19920722@gmail.com",
  phone: "+91 79824 15756",
  location: "New Delhi, India",
  github: "https://github.com/Navneet-Crio",
  linkedin: "https://linkedin.com/in/navneet-crio",
  stats: {
    verifiedSkillsCount: 14,
    professionalProjects: 5,
    dsaSolvedCount: "175+",
  }
};

export const SKILLS_DATA = [
  { id: "linux", name: "Linux", iconKey: "linux", category: "DevOps & Core" },
  { id: "http", name: "HTTP", iconKey: "http", category: "DevOps & Core" },
  { id: "css", name: "CSS", iconKey: "css", category: "Frontend" },
  { id: "bootstrap", name: "Bootstrap", iconKey: "bootstrap", category: "Frontend" },
  { id: "html", name: "HTML", iconKey: "html", category: "Frontend" },
  { id: "rest", name: "REST", iconKey: "rest", category: "Backend" },
  { id: "git", name: "Git", iconKey: "git", category: "DevOps & Core" },
  { id: "js", name: "JavaScript", iconKey: "js", category: "Frontend" },
  { id: "react", name: "React", iconKey: "react", category: "Frontend" },
  { id: "node", name: "Node JS", iconKey: "node", category: "Backend" },
  { id: "express", name: "Express JS", iconKey: "express", category: "Backend" },
  { id: "mongo", name: "Mongo DB", iconKey: "mongo", category: "Databases" }
];

export const PROJECTS_DATA = [
  {
    id: "qkart-backend",
    title: "QKart Backend",
    category: "Full-Stack / Backend",
    date: "May 2023",
    description: "QKart is an e-commerce backend platform constructed from scratch. Implemented Node.js Express server architecture, MongoDB schema modeling with Mongoose, JWT authentication pipeline, Joi data validation, and Jest integration tests.",
    demoUrl: "https://64c6d2d103fc333cfda9b025--qkartbackend-2023.netlify.app/",
    githubUrl: "https://github.com/Navneet-Crio/qkart-backend",
    featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose ODM", "JWT Token", "Joi Validation", "Postman", "Jest", "REST"],
    highlights: [
      "Designed REST API endpoints for authentication, catalog, cart, and checkout.",
      "Secured API endpoints using JWT tokens and password hashing via bcrypt.",
      "Implemented request body schema validation using Joi.",
      "Wrote integration tests using Jest & Supertest framework."
    ],
    completedModules: [
      "AUTH Module: User registration, password encryption & login authentication",
      "CART Module: Adding, updating & calculating cart totals dynamically",
      "DEPLOYMENT Module: Production server setup on Netlify with ENV security",
      "TEST Module: Integration tests with Jest & assertion libraries"
    ]
  },
  {
    id: "qkart-frontend",
    title: "QKart Frontend",
    category: "Frontend",
    date: "Sep 2022",
    description: "QKart is a modern E-commerce web application featuring user registration, product listing, real-time keyword search debouncing, product cart management, and multi-step checkout workflow built using React.",
    demoUrl: "https://qkart-frontend-updated.netlify.app/",
    githubUrl: "https://github.com/Navneet-Crio/qkart-frontend",
    featuredImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
    techStack: ["React.js", "React Hooks", "React Router", "Material-UI", "REST APIs", "Debouncing", "LocalStorage"],
    highlights: [
      "Constructed reusable React components with clean state management.",
      "Optimized search performance by implementing custom debounce hook for API queries.",
      "Integrated Material-UI Grid, Cards, and Snackbar notifications for responsive UI.",
      "Handled persistent user sessions using Browser LocalStorage & JWT tokens."
    ],
    completedModules: [
      "PRODUCTS Module: Responsive grid displaying items with dynamic filtering",
      "CART Module: Synchronized shopping cart view with live price updates",
      "CHECKOUT Module: Delivery address management and order confirmation screen",
      "LOGIN & REGISTER Module: Controlled input forms with validation"
    ]
  },
  {
    id: "xboard",
    title: "XBoard",
    category: "Frontend",
    date: "Aug 2022",
    description: "XBoard is an news aggregator web application displaying top news stories from multiple categories. Created directly from high-fidelity Figma specs using JavaScript ES6, DOM Manipulation, and Bootstrap Accordions.",
    demoUrl: "https://basic-x-board.netlify.app/",
    githubUrl: "https://github.com/Navneet-Crio/xboard",
    featuredImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
    techStack: ["HTML5", "CSS3", "JavaScript ES6", "Bootstrap", "Accordion Components", "Figma", "REST APIs"],
    highlights: [
      "Converted Figma design mockups into responsive HTML/CSS layouts.",
      "Fetched live RSS/JSON news feeds asynchronously and parsed content into DOM nodes.",
      "Implemented responsive Bootstrap carousel and interactive accordion widgets."
    ],
    completedModules: [
      "XBOARD Module: Multi-topic news grid, article modal view & responsive layout"
    ]
  },
  {
    id: "qtrip-dynamic",
    title: "QTripDynamic",
    category: "Frontend",
    date: "Jul 2022",
    description: "QTrip is a dynamic travel booking application where users can discover cities, filter adventure trips by duration & category, inspect detailed itineraries, and place trip reservations.",
    demoUrl: "https://qtrip-fornt-end.netlify.app/",
    githubUrl: "https://github.com/Navneet-Crio/qtrip-dynamic",
    featuredImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop",
    techStack: ["JavaScript ES6", "DOM Manipulation", "REST APIs", "Fetch API", "Async/Await", "LocalStorage", "Bootstrap"],
    highlights: [
      "Built multi-page navigation connecting City listing, Adventure cards, Details page, and Reservations.",
      "Implemented multi-criteria filter logic (Duration range + Category tags).",
      "Saved user filter preferences to URL Query parameters and LocalStorage."
    ],
    completedModules: [
      "CITIES Module: Fetching & rendering available travel destinations dynamically",
      "ADVENTURES Module: Multi-filter engine for adventure categories & duration",
      "ADVENTURE DETAILS Module: Interactive photo carousel & booking form modal",
      "RESERVATIONS Module: Booking history table with active cancellation"
    ]
  },
  {
    id: "qtrip-static",
    title: "QTripStatic",
    category: "Frontend",
    date: "Jun 2022",
    description: "The static web layout for QTrip travel website. Created using semantic HTML5, modern CSS3 Flexbox/Grid, and responsive media queries to support all mobile & desktop screen sizes.",
    demoUrl: "https://js19920722-gmail-com-makes-great-sites-8bb9c.netlify.app/index.html",
    githubUrl: "https://github.com/Navneet-Crio/qtrip-static",
    featuredImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    techStack: ["HTML5", "CSS3", "CSS Flexbox", "Bootstrap Grid", "Responsive Web Design"],
    highlights: [
      "Structured semantic HTML5 layout with high accessibility.",
      "Styled multi-column grid layouts with pure CSS Flexbox and Bootstrap components.",
      "Ensured seamless cross-browser responsiveness across all breakpoint sizes."
    ],
    completedModules: [
      "LAYOUT Module: Landing page header, hero banner & footer grid",
      "CARDS Module: City adventure preview cards with smooth hover animations"
    ]
  }
];

export const DSA_STATS = {
  totalSolved: 175,
  topics: [
    { topic: "Arrays & Strings", count: 52, percentage: 85 },
    { topic: "Hash Maps & Two Pointers", count: 34, percentage: 78 },
    { topic: "Recursion & Backtracking", count: 28, percentage: 72 },
    { topic: "Trees & Binary Search", count: 36, percentage: 80 },
    { topic: "Graphs & Dynamic Programming", count: 25, percentage: 70 }
  ]
};
