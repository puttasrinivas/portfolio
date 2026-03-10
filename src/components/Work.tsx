import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Integrity Connect",
    category: "Enterprise Application",
    tools: ["React JS", "Node JS", "AWS", "Jenkins", "Azure API"],
    overview: "A flagship enterprise portal built for high-performance agent management and data connectivity.",
    points: [
      "Architected responsive UI using React JS and modern hooks for seamless state management.",
      "Implemented secure API publication workflows through Azure API Management.",
      "Orchestrated CI/CD pipelines via Jenkins and AWS for rapid, scalable deployments.",
      "Optimized frontend performance reducing initial load times by 40%."
    ]
  },
  {
    title: "Planning and Execution Tracker",
    category: "Management Tool",
    tools: ["React JS", "Redux", "Fabric UI", "Azure Pipelines"],
    overview: "A sophisticated management dashboard for tracking large-scale project execution and KPIs.",
    points: [
      "Engineered a high-fidelity dashboard using Fabric UI and React for data-intensive tracking.",
      "Managed project state consistency using Redux across complex multi-step workflows.",
      "Automated build and release cycles with custom-configured Azure Pipelines.",
      "Collaborated with cross-functional teams to align execution tracking with business objectives."
    ]
  },
  {
    title: "CBRE Host",
    category: "Front-End Application",
    tools: ["React JS", "Redux", "AWS", "Micro-Frontends"],
    overview: "A high-scale workplace services platform designed for modern enterprise environments.",
    points: [
      "Leveraged React functional components and Redux for modular, testable UI widgets.",
      "Integrated Micro-Frontend architecture to enable independent team deployments.",
      "Ensured pixel-perfect design implementation across mobile and desktop breakpoints.",
      "Maintained 100% WCAG 2.1 accessibility compliance across all core user journeys."
    ]
  },
  {
    title: "Tietoevry Projects",
    category: "Enterprise Application",
    tools: ["React JS", "AWS", "Ant UI", "Redux"],
    overview: "A suite of digital transformation tools focused on enterprise asset management.",
    points: [
      "Designed and developed dynamic, data-driven pages using React container patterns.",
      "Utilized Ant Design system to maintain UI consistency and accelerate feature delivery.",
      "Deployed high-availability applications onto AWS environments.",
      "Implemented complex form validation and state handling using standardized patterns."
    ]
  },
  {
    title: "Marshall School Fee App",
    category: "Single Page Application",
    tools: ["React", "Redux", "React-Router", "Bootstrap"],
    overview: "An end-to-end fee management system for educational institutions.",
    points: [
      "Reworked legacy systems into modern SPAs using React-Router for client-side navigation.",
      "Built a library of reusable UI components to standardize the user experience.",
      "Integrated secure payment gateway features within the React state lifecycle.",
      "Optimized mobile responsiveness for parents accessing the app on various devices."
    ]
  },
  {
    title: "Bosch Mobility",
    category: "Enterprise Web App",
    tools: ["React JS", "Redux", "React Hooks"],
    overview: "A high-performance mobility platform for tracking automotive asset data.",
    points: [
      "Developed robust enterprise web apps utilizing a consistent Redux architecture.",
      "Created custom React hooks to encapsulate business logic and shared functionality.",
      "Improved code maintainability through strict functional programming paradigms.",
      "Facilitated real-time data updates for mobility tracking metrics."
    ]
  },
  {
    title: "Wadhwani Advantage",
    category: "Single Page Application",
    tools: ["React JS", "Isomorphic Architecture", "SEO"],
    overview: "A global mentorship platform connecting entrepreneurs with seasoned industry experts.",
    points: [
      "Implemented isomorphic (server-side rendering) architectures for optimal SEO and performance.",
      "Design and developed low-latency search and filtering for thousands of mentors.",
      "Engineered complex SVG-based data visualizations for entrepreneur progress tracking.",
      "Maintained a cohesive design system across various localized language versions."
    ]
  },
  {
    title: "TESCO My Product",
    category: "Internal Web Application",
    tools: ["React JS", "XML", "HTML", "CSS"],
    overview: "Operational software for managing product lifecycles across global supply chains.",
    points: [
      "Architected internal tools to manage large-scale XML product data in a unified UI.",
      "Collaborated with backend engineers to bridge legacy data systems with modern React views.",
      "Designed intuitive interfaces for non-technical users in logistics and procurement.",
      "Identified and resolved long-standing UI bottlenecks in the product entry workflow."
    ]
  },
  {
    title: "Youforma",
    category: "Web Application",
    tools: ["React JS", "React Flux", "OOP JS"],
    overview: "A dynamic form-building engine for creating complex survey and data collection tools.",
    points: [
      "Leveraged React Flux for predictable, single-directional data flow in form building.",
      "Implemented advanced drag-and-drop interfaces using OOP JavaScript principles.",
      "Engineered a logic engine for conditional form questions and dynamic validations.",
      "Optimized final bundle sizes for high-performance loading in low-bandwidth regions."
    ]
  },
  {
    title: "Hubble Homes",
    category: "Web Development",
    tools: ["React", "Redux", "Node.js", "jQuery"],
    overview: "An interactive real-estate platform for home buyers and property managers.",
    points: [
      "Stabilized high-scale Node.js backends by resolving Callback Hell using modern Promises.",
      "Successfully migrated critical jQuery components to a modern React-Redux ecosystem.",
      "Built real-time notification systems for property updates using WebSocket integration.",
      "Greatly improved mobile conversion rates through a mobile-first UI redesign."
    ]
  },
  {
    title: "R- Groceries",
    category: "Single Page Application",
    tools: ["Angular", "UI-Router", "HTML5"],
    overview: "A grocery ordering platform focused on speed and high-volume transactions.",
    points: [
      "Developed high-conversion presentation layers using advanced CSS frameworks and wireframing.",
      "Maintained deep link state across the application using Angular's UI-Router.",
      "Implemented a high-performance cart system capable of handling hundreds of items.",
      "Authored extensive unit tests for the ordering logic to ensure zero-downtime releases."
    ]
  },
  {
    title: "Markoo",
    category: "Web Application",
    tools: ["AngularJS", "Responsive Design"],
    overview: "A retail-focused application for exploring local market trends and inventory.",
    points: [
      "Delivered a cross-device shopping experience using responsive AngularJS patterns.",
      "Developed a custom theme engine to allow white-labeling for different local markets.",
      "Integrated geolocation services to provide relevant local market data.",
      "Mentored junior developers on best practices in early-stage SPA development."
    ]
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev} data-cursor="disable">
            <MdArrowBack />
          </button>
          <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} data-cursor="disable">
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div className="project-grid">
              <div className="project-header-section">
                <div className="project-number">
                  {String(currentIndex + 1).padStart(2, "0")}
                </div>
                <h3 className="project-title">{projects[currentIndex].title}</h3>
                <h4 className="project-category">{projects[currentIndex].category}</h4>
                <div className="project-tools">
                  {projects[currentIndex].tools.map((tool, i) => (
                    <span key={i} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
              <div className="project-details-section">
                <div className="project-overview">
                  <p>{projects[currentIndex].overview}</p>
                </div>
                <div className="project-achievements">
                  <h5>Key Contributions</h5>
                  <ul>
                    {projects[currentIndex].points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-counter">
            <span className="carousel-current">{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="carousel-separator">/</span>
            <span className="carousel-total">{String(projects.length).padStart(2, "0")}</span>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
