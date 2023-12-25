import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';

function App() {

  const [menuBtnClass, setMenuBtnClass] = useState('nav-menu');

  const myMenuFunction = () => {
    setMenuBtnClass((prevClass) =>
      prevClass === 'nav-menu' ? 'nav-menu responsive' : 'nav-menu'
    );
  };
  const handleLinkedinClick = () => {
    const linkUrl = 'https://www.linkedin.com/in/gaurav-lalwani-b62076202/';  // Replace with your desired link URL

    // Open the link in a new tab
    window.open(linkUrl, '_blank');
  };

  const handleGithubClick = () => {
    const linkUrl = 'https://github.com/codewithgaurav-tech'

    window.open(linkUrl, '_blank')
  }

  useEffect(() => {
    /* ----- NAVIGATION BAR FUNCTION ----- */
    // const myMenuFunction = () => {
    //   setMenuBtnClass((prevClass) =>
    //     prevClass === 'nav-menu' ? 'nav-menu responsive' : 'nav-menu'
    //   );
    // };

    document.querySelector('.nav-menu-btn i').addEventListener('click', myMenuFunction);
    /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    const headerShadow = () => {
      const navHeader = document.getElementById('header');

      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        navHeader.style.boxShadow = '0 1px 6px rgba(0, 0, 0, 0.1)';
        navHeader.style.height = '70px';
        navHeader.style.lineHeight = '70px';
      } else {
        navHeader.style.boxShadow = 'none';
        navHeader.style.height = '90px';
        navHeader.style.lineHeight = '90px';
      }
    };

    window.addEventListener('scroll', headerShadow);

    /* ----- TYPING EFFECT ----- */
    // const typingEffect = new Typed('.typedText', {
    //   strings: ['Frontend Developer', 'Full-Stack Developer', 'Backend Developer'],
    //   loop: true,
    //   typeSpeed: 100,
    //   backSpeed: 10,
    //   backDelay: 2000,
    // });

    /* ----- SCROLL REVEAL ANIMATION ----- */
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    /* -- HOME -- */
    sr.reveal('.featured-text-card', {});
    sr.reveal('.featured-name', { delay: 100 });
    sr.reveal('.featured-text-info', { delay: 200 });
    sr.reveal('.featured-text-btn', { delay: 200 });
    sr.reveal('.social_icons', { delay: 200 });
    sr.reveal('.featured-image', { delay: 300 });

    /* -- PROJECT BOX -- */
    sr.reveal('.project-box', { interval: 200 });

    /* -- HEADINGS -- */
    sr.reveal('.top-header', {});

    /* ----- SCROLL REVEAL LEFT_RIGHT ANIMATION ----- */

    /* -- ABOUT INFO & CONTACT INFO -- */
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    srLeft.reveal('.about-info', { delay: 100 });
    srLeft.reveal('.contact-info', { delay: 100 });

    /* -- ABOUT SKILLS & FORM BOX -- */
    const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    srRight.reveal('.skills-box', { delay: 100 });
    srRight.reveal('.form-control', { delay: 100 });

    /* ----- CHANGE ACTIVE LINK ----- */
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id');

        if (
          scrollY > sectionTop &&
          scrollY <= sectionTop + sectionHeight
        ) {
          document
            .querySelector('.nav-menu a[href*=' + sectionId + ']')
            .classList.add('active-link');
        } else {
          document
            .querySelector('.nav-menu a[href*=' + sectionId + ']')
            .classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', scrollActive);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', headerShadow);
      window.removeEventListener('scroll', scrollActive);
      document.querySelector('.nav-menu-btn i').removeEventListener('click', myMenuFunction);
    };
  }, []);
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      {/* UNICONS */}
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
      />
      {/* CSS */}
      <link rel="stylesheet" href="./style.css" />
      {/* Add favicon */}
      <link
        rel="shortcut icon"
        href="assets/images/favicon.png"
        type="image/x-icon"
      />
      <link rel="stylesheet" href="style.css" />
      <div className="container">
        {/* --------------- HEADER --------------- */}
        <nav id="header">
          {/* <div className="nav-logo">
            <p className="nav-name">Doe</p>
            <span>.</span>
          </div> */}
          <div className="nav-menu" id="myNavMenu">
            <ul className="nav_menu_list">
              <li className="nav_list">
                <a href="#home" className="nav-link active-link">
                  Home
                </a>
                <div className="circle" />
              </li>
              <li className="nav_list">
                <a href="#about" className="nav-link">
                  About
                </a>
                <div className="circle" />
              </li>
              <li className="nav_list">
                <a href="#projects" className="nav-link">
                  Projects
                </a>
                <div className="circle" />
              </li>
              <li className="nav_list">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
                <div className="circle" />
              </li>
            </ul>
          </div>
          {/* <div className="nav-button">
            <button className="btn">
              Download CV <i className="uil uil-file-alt" />
            </button>
          </div> */}
          <div className="nav-menu-btn">
            <i className="uil uil-bars" onClick={myMenuFunction} />
          </div>
        </nav>
        {/* -------------- MAIN ---------------- */}
        <main className="wrapper">
          {/* -------------- FEATURED BOX ---------------- */}
          <section className="featured-box" id="home">
            <div className="featured-text">
              <div className="featured-text-card">
                <span>Gaurav Lalwani</span>
              </div>
              <div className="featured-name">
                <p>
                  I'm <span className="typedText"> Full-Stack Developer</span>
                </p>
              </div>
              <div className="featured-text-info">
                <p>
                  👋 Hello! I'm Gaurav Lalwani, a seasoned full-stack web developer with a passion for crafting exceptional digital experiences.
                </p>
              </div>
              {/* <div className="featured-text-btn">
                <button className="btn blue-btn">Hire Me</button>
                <button className="btn">
                  Download CV <i className="uil uil-file-alt" />
                </button>
              </div> */}
              <div className="social_icons">
                <div className="icon">
                  <i className="uil uil-linkedin-alt" onClick={handleLinkedinClick} />
                </div>
                <div className="icon">
                  <i className="uil uil-github-alt" on onClick={handleGithubClick} />
                </div>
              </div>
            </div>
            <div className="featured-image">
              <div className="image">
                <img src="/gaurav.png" alt="avatar" />
              </div>
            </div>
            <div className="scroll-icon-box">
              <a href="#about" className="scroll-btn">
                <i className="uil uil-mouse-alt" />
                <p>Scroll Down</p>
              </a>
            </div>
          </section>
          {/* -------------- ABOUT BOX ---------------- */}
          <section className="section" id="about">
            <div className="top-header">
              <h1>About Me</h1>
            </div>
            <div className="row">
              <div className="col">
                <div className="about-info">
                  <h3>My introduction</h3>
                  <p>
                    👋 Hello! I'm Gaurav Lalwani, a seasoned full-stack web developer with a strong emphasis on backend technologies. Proficient in Node.js and Express, I specialize in crafting robust server-side applications. Beyond backend development, I bring a solid understanding of frontend technologies, allowing me to create functional user interfaces and seamlessly integrate APIs.

                    Driven by a passion for clean and efficient code, I excel in architecting backend systems that power dynamic web applications. Let's collaborate and leverage my expertise to build powerful and scalable web solutions! 🚀
                  </p>
                  {/* <div className="about-btn">
                    <button className="btn">
                      Download CV <i className="uil uil-import" />
                    </button>
                  </div> */}
                </div>
              </div>
              <div className="col">
                <div className="skills-box">
                  <div className="skills-header">
                    <h3>Frontend</h3>
                  </div>
                  <div className="skills-list">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Bootstrap</span>
                    <span>Tailwind</span>
                    <span>JavaScript</span>
                    <span>NextJs</span>
                    <span>ReactJs</span>
                    <span>Material Ui</span>
                  </div>
                </div>
                <div className="skills-box">
                  <div className="skills-header">
                    <h3>Backend</h3>
                  </div>
                  <div className="skills-list">
                    <span>NodeJs</span>
                    <span>ExpressJs</span>
                    <span>Python</span>
                    <span>NestJs</span>
                  </div>
                </div>
                <div className="skills-box">
                  <div className="skills-header">
                    <h3>Database</h3>
                  </div>
                  <div className="skills-list">
                    <span>MySQL</span>
                    <span>PostgreSQL</span>
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* -------------- PROJECT BOX ---------------- */}
          <section className="section" id="projects">
            <div className="top-header">
              <h1>Projects</h1>
            </div>
            <div className="project-container">
              <div className="project-box">
                <i className="uil uil-briefcase-alt" />
                <h3>Completed</h3>
                <label>15+ Finished Projects</label>
              </div>
              <div className="project-box">
                <i className="uil uil-users-alt" />
                <h3>Clients</h3>
                <label>10+ Happy Clients</label>
              </div>
              <div className="project-box">
                <i className="uil uil-award" />
                <h3>Experience</h3>
                <label>3+ Years in the field</label>
              </div>
            </div>
          </section>
          {/* -------------- CONTACT BOX ---------------- */}
          <section className="section" id="contact">
            <div className="top-header">
              <h1>Get in touch</h1>
              <span>Do you have a project in your mind, contact me here</span>
            </div>
            <div className="row">
              <div className="col">
                <div className="contact-info">
                  <h2>
                    Find Me <i className="uil uil-corner-right-down" />
                  </h2>
                  <p>
                    <i className="uil uil-envelope" /> Email: glalwani177@gmail.com
                  </p>
                  <p>
                    <i className="uil uil-phone" /> +91 9588947683
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="form-control">
                  <div className="form-inputs">
                    <input type="text" className="input-field" placeholder="Name" />
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Email"
                    />
                  </div>
                  <div className="text-area">
                    <textarea placeholder="Message" defaultValue={""} />
                  </div>
                  <div className="form-button">
                    <button className="btn">
                      Send <i className="uil uil-message" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* --------------- FOOTER --------------- */}
        <footer>
          <div className="top-footer">
            <p>Gaurav.</p>
          </div>
          <div className="middle-footer">
            <ul className="footer-menu">
              <li className="footer_menu_list">
                <a href="#home">Home</a>
              </li>
              <li className="footer_menu_list">
                <a href="#about">About</a>
              </li>
              <li className="footer_menu_list">
                <a href="#projects">Projects</a>
              </li>
              <li className="footer_menu_list">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-social-icons">

            <div className="icon">
              <i className="uil uil-linkedin-alt" onClick={handleLinkedinClick} />
            </div>
            <div className="icon">
              <i className="uil uil-github-alt" onClick={handleGithubClick} />
            </div>
          </div>
          <div className="bottom-footer">
            <p>
              Copyright ©{" "}
              <a href="#home" style={{ textDecoration: "none" }}>
                Gaurav
              </a>{" "}
              - All rights reserved
            </p>
          </div>
        </footer>
      </div>
      {/* ----- TYPING JS Link ----- */}
      {/* ----- SCROLL REVEAL JS Link----- */}
      {/* ----- MAIN JS ----- */}
    </>

  );
}

export default App;
