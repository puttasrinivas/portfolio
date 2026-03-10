import "./styles/Career.css";

const careers = [
  {
    title: "Integrity Connect",
    company: "Integrity Marketing Group",
    role: "Senior UI Developer",
    year: "NOW",
    desc: "Designing and implementing responsive UI using React JS. Publishing APIs through Azure API Management. Deployed applications on AWS and Jenkins for scalability.",
  },
  {
    title: "Planning and Execution Tracker",
    company: "Microsoft",
    role: "UI Lead Developer",
    year: "2022",
    desc: "Used HTML5, CSS3, Fabric UI for developing the components. Configured Azure Pipelines for creating build and deployment.",
  },
  {
    title: "CBRE Host",
    company: "CBRE",
    role: "Senior UI Developer",
    year: "2021",
    desc: "Used HTML5, CSS3, JSON and JavaScript. Implemented React components both functional and classical for UI widgets and Redux State Management.",
  },
  {
    title: "Tietoevry Projects",
    company: "Tietoevry",
    role: "Sr. UI Developer",
    year: "2021",
    desc: "Designed dynamic pages using React. Developed React container components. App Deployment on AWS. Used Ant UI React Library.",
  },
  {
    title: "Marshall School Fee App",
    company: "Girmiti Software PVT LTD",
    role: "Senior UI Developer",
    year: "2020",
    desc: "Reworked single page applications using React, Redux, React-Router, and Bootstrap. Enhanced and built reusable components.",
  },
  {
    title: "Bosch Mobility",
    company: "Axcend Automation",
    role: "Sr UI Developer",
    year: "2019",
    desc: "Developed enterprise web applications using ReactJS and Redux architecture. Built reusable class components using React Redux.",
  },
  {
    title: "Wadhwani Advantage",
    company: "Nineleaps",
    role: "UI Developer",
    year: "2019",
    desc: "Developed React Js pages and Single Page Applications. Handled responsive design and isomorphic architectures.",
  },
  {
    title: "TESCO My Product",
    company: "Nineleaps",
    role: "UI Developer",
    year: "2018",
    desc: "Assisted in Designing and developing UI for an internal Web-based application using ReactJS XML, HTML and CSS.",
  },
  {
    title: "Youforma",
    company: "Nineleaps",
    role: "UI Developer",
    year: "2018",
    desc: "Designed Frontend within object-oriented JavaScript Framework using React JS. Used React flux for single directional flow.",
  },
  {
    title: "Hubble Homes",
    company: "Goggery Software Solutions",
    role: "Web App Developer",
    year: "2015",
    desc: "Web development using React and Redux. Extensively used jQuery, Node.js and solved Callback hells in Node.js using Promises.",
  },
  {
    title: "R- Groceries",
    company: "Goggery Software Solutions",
    role: "Web App Developer",
    year: "2014",
    desc: "Implemented Presentation layer using CSS Framework, Wire-framing, and HTML5. Used UI-router in Angular to make this a single page application.",
  },
  {
    title: "Markoo",
    company: "Goggery Software Solutions",
    role: "Web App Developer",
    year: "2013",
    desc: "Developed user interface by using the AngularJS for SPA development. Responsive design for desktop, Tablets and mobile users.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careers.map((career, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{career.role}</h4>
                  <h5>
                    {career.company} {career.title ? `- ${career.title}` : ""}
                  </h5>
                </div>
                <h3>{career.year}</h3>
              </div>
              <p>{career.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
