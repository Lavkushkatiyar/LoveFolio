import { getProfile ,getSkills,getProjects,getEducation,getExperience } from "../api/portfolio";

export const PROFILE_DATA = await getProfile();


export const SKILLS_DATA = await getSkills();

export const EXPERIENCE_DATA = await getExperience();

export const EDUCATION_DATA = await getEducation();


export const PROJECTS_DATA = await getProjects();
console.log("PROJECTS_DATA:", PROJECTS_DATA);

// export const PROJECTS_DATA = [
//   {
//     id: "qkart-backend",
//     title: "QKart Backend",
//     category: "Full-Stack / Backend",
//     date: "May 2023",
//     summary: '"QKart is an E-commerce application offering a variety of products for customers to choose from.',
//     bulletIntro: "During the course of this project,",
//     bullets: [
//       "Built the complete set of REST APIs for an E-commerce application following the best practices",
//       "Used MongoDB NoSQL database for data storage",
//       'Wrote unit and integration tests to test the implementation"'
//     ],
//     demoUrl: "https://64c6d2d103fc333cfda9b025--qkartbackend-2023.netlify.app/",
//     githubUrl: "https://github.com/Navneet-Crio/qkart-backend",
//     featuredImage: "https://crio-directus-assets.s3.ap-south-1.amazonaws.com/f569c5c3-6bf6-470d-9f8c-91d837366d31.png",
//     techStack: ["Mongoose ODM", "JOI data validation", "Postman", "REST", "ES6", "MONGO QUERIES"],
//     moreTechCount: "+15 more",
//     highlights: [
//       "Designed REST API endpoints for user auth, product catalog, user cart, and checkout.",
//       "Secured API endpoints using JWT tokens and password hashing via bcrypt.",
//       "Implemented request body schema validation using Joi.",
//       "Wrote integration tests using Jest & Supertest framework."
//     ],
//     completedModules: [
//       "AUTH Module: User registration, password encryption & login authentication",
//       "CART Module: Adding, updating & calculating cart totals dynamically",
//       "DEPLOYMENT Module: Production server setup on Netlify with ENV security",
//       "TEST Module: Integration tests with Jest & assertion libraries"
//     ]
//   },
//   {
//     id: "qkart-frontend",
//     title: "QKart Frontend",
//     category: "Frontend",
//     date: "Sep 2022",
//     summary: '"QKart is an E-commerce application offering a variety of products for customers to choose from.',
//     bulletIntro: "During the course of this project,",
//     bullets: [
//       "Implemented the user interface using React components with Material UI framework",
//       "Handled REST API integration for user auth, product listing, search debouncing, and cart management",
//       'Constructed responsive cart checkout workflow with address management"'
//     ],
//     demoUrl: "https://qkart-frontend-updated.netlify.app/",
//     githubUrl: "https://github.com/Navneet-Crio/qkart-frontend",
//     featuredImage: "https://crio-directus-assets.s3.ap-south-1.amazonaws.com/e6fb82a2-423d-4f62-9962-f19f2f81fa8c.png",
//     techStack: ["React Hooks", "Forms", "Controlled Components", "REST", "JSON", "Error Handling"],
//     moreTechCount: "+16 more",
//     highlights: [
//       "Constructed reusable React components with clean state management.",
//       "Optimized search performance by implementing custom debounce hook for API queries.",
//       "Integrated Material-UI Grid, Cards, and Snackbar notifications for responsive UI.",
//       "Handled persistent user sessions using Browser LocalStorage & JWT tokens."
//     ],
//     completedModules: [
//       "PRODUCTS Module: Responsive grid displaying items with dynamic filtering",
//       "CART Module: Synchronized shopping cart view with live price updates",
//       "CHECKOUT Module: Delivery address management and order confirmation screen",
//       "LOGIN & REGISTER Module: Controlled input forms with validation"
//     ]
//   },
//   {
//     id: "xboard",
//     title: "XBoard",
//     category: "Frontend",
//     date: "Aug 2022",
//     summary: '"XBoard is a News Aggregator web application displaying top news stories from multiple categories.',
//     bulletIntro: "During the course of this project,",
//     bullets: [
//       "Built responsive news aggregator interface from Figma design mockups",
//       "Fetched live RSS news feeds asynchronously using JS Fetch API and DOM Manipulation",
//       'Integrated Bootstrap accordion and carousel widgets for article preview"'
//     ],
//     demoUrl: "https://basic-x-board.netlify.app/",
//     githubUrl: "https://github.com/Navneet-Crio/xboard",
//     featuredImage: "https://crio-directus-assets.s3.ap-south-1.amazonaws.com/f7dfc8ad-a174-4d2b-8af7-c1ff1e1e8719.png",
//     techStack: ["HTML", "CSS", "Figma", "Bootstrap Accordion", "Bootstrap", "ES6"],
//     moreTechCount: "+10 more",
//     highlights: [
//       "Converted Figma design mockups into responsive HTML/CSS layouts.",
//       "Fetched live RSS/JSON news feeds asynchronously and parsed content into DOM nodes.",
//       "Implemented responsive Bootstrap carousel and interactive accordion widgets."
//     ],
//     completedModules: [
//       "XBOARD Module: Multi-topic news grid, article modal view & responsive layout"
//     ]
//   },
//   {
//     id: "qtrip-dynamic",
//     title: "QTripDynamic",
//     category: "Frontend",
//     date: "Jul 2022",
//     summary: '"QTrip is a dynamic travel booking application where users can discover cities and filter adventures.',
//     bulletIntro: "During the course of this project,",
//     bullets: [
//       "Constructed multi-page dynamic travel booking web application using Vanilla JS",
//       "Implemented multi-criteria filter engine for adventure duration and category tags",
//       'Saved user filter selections to URL query params and LocalStorage"'
//     ],
//     demoUrl: "https://qtrip-fornt-end.netlify.app/",
//     githubUrl: "https://github.com/Navneet-Crio/qtrip-dynamic",
//     featuredImage: "https://crio-directus-assets.s3.ap-south-1.amazonaws.com/0ba0c306-851a-451e-89bb-623289fca9a3.png",
//     techStack: ["HTML", "CSS", "ES6", "JavaScript", "Developer Tools", "Bootstrap"],
//     moreTechCount: "+15 more",
//     highlights: [
//       "Built multi-page navigation connecting City listing, Adventure cards, Details page, and Reservations.",
//       "Implemented multi-criteria filter logic (Duration range + Category tags).",
//       "Saved user filter preferences to URL Query parameters and LocalStorage."
//     ],
//     completedModules: [
//       "CITIES Module: Fetching & rendering available travel destinations dynamically",
//       "ADVENTURES Module: Multi-filter engine for adventure categories & duration",
//       "ADVENTURE DETAILS Module: Interactive photo carousel & booking form modal",
//       "RESERVATIONS Module: Booking history table with active cancellation"
//     ]
//   },
//   {
//     id: "qtrip-static",
//     title: "QTripStatic",
//     category: "Frontend",
//     date: "Jun - Jul 2022",
//     summary: '"QTrip is a travel website offering adventure trip bookings across multiple destinations.',
//     bulletIntro: "During the course of this project,",
//     bullets: [
//       "Created responsive static web page layout using semantic HTML5 and CSS3 Flexbox",
//       "Built multi-column city adventure cards with responsive breakpoints",
//       'Deployed static website to Netlify hosting"'
//     ],
//     demoUrl: "https://js19920722-gmail-com-makes-great-sites-8bb9c.netlify.app/index.html",
//     githubUrl: "https://github.com/Navneet-Crio/qtrip-static",
//     featuredImage: "https://crio-directus-assets.s3.ap-south-1.amazonaws.com/ec48bef5-2566-4af5-8a6e-2f978e63d1b5.png",
//     techStack: ["HTML", "CSS", "Developer Tools", "Bootstrap", "CSS Flexbox", "Responsive Design"],
//     moreTechCount: "+9 more",
//     highlights: [
//       "Structured semantic HTML5 layout with high accessibility.",
//       "Styled multi-column grid layouts with pure CSS Flexbox and Bootstrap components.",
//       "Ensured seamless cross-browser responsiveness across all breakpoint sizes."
//     ],
//     completedModules: [
//       "LAYOUT Module: Landing page header, hero banner & footer grid",
//       "CARDS Module: City adventure preview cards with smooth hover animations"
//     ]
//   }
// ];
