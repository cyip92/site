import { useEffect } from 'react';
import face from '../assets/headshot.jpg';
import gmail from '../assets/icons/gmail.ico';
import github from '../assets/icons/github.ico';
import linkedin from '../assets/icons/linkedin.ico';
import "./AboutPage.css";

export const AboutPage = () => {
  useEffect(() => {
    document.title = "About Me";
    document.getElementById("favicon").setAttribute('href', `${window.rootURL}/favicon/info.jpg`);
  }, []);

  return (
    <>
      <div className="c-page-layout c-text c-grayscale-content-bg">
        <h1>About Me</h1>
        <div className="c-columns">
          <div className="c-narrow">
            <img src={face} className="o-img-fit" />
          </div>
          <div className="c-wide">
            Hi! My name is Chris Yip, and I am a Physicist and Front-End Web Developer. I completed a Bachelors Degree
            with a dual major in Physics and Computer Science in 2014, and then continued on to achieve a Doctorate in
            Physics in 2021. During the tail end of my PhD, I found myself relatively unsatisfied with my work in
            academic research and considered a side project I picked up in web-based game development to be much more
            fulfilling. As a result, I decided to make a pivot back into software, after completing my Physics degree.
            <br />
            <br />
            Up to this point, my whole life has been in the United States of America; in California until my early
            twenties, followed by moving to the midwest USA for my Physics PhD. I will be moving to the United Kingdom
            in the beginning of 2024 and intend to stay there for the long term.
          </div>
        </div>

        My mindset has always been one of learning new things, and returning back to software development has not
        lessened that motivation. I am currently working through getting certificates for Full-Stack Development with
        ReactJS (through the University of Helsinki) and Cloud Architecture (through Google Cloud). In addition to
        picking up as many skills related to web development as possible, I am also working to self-teach myself
        how to make more elaborate games in my free time, using <a href="https://godotengine.org/">Godot</a>.
        <br />
        <br />
        Currently I am a software consultant for <a href="https://vertics.co/">Vertics Oy</a>, a Finnish software
        contractor primarily oriented towards full-stack Javascript-based web and mobile app development. The primary
        web development expertise I have is in the Vue framework for Javascript, from my previous projects. This
        website and a few ongoing side projects I am working on are being used for practical applications of the skills
        in the certificate courses I am taking.
        <br />
        <br />
        I am willing to take on new projects on a contractual basis, but I am also seeking a more stable full-time
        employment arrangement which allows for remote work while living in the United Kingdom starting in February
        2024.

        <h3>Personal Info</h3>
        <div className="c-contact-info">
          <img src={gmail} className="o-img-icon" />
          { /* This is to make it harder for email-scrapers; none of these show up on the page */ }
          Email: chri<span className="o-null">null</span>stop<span className="o-null">null
            </span>hery<span className="o-null">null</span>ip19<span className="o-null">null
            </span>92@g<span className="o-null">null</span>mail<span className="o-null">null</span>.com
          <br />
          <a href="https://github.com/cyip92"><img src={github} className="o-img-icon" /></a>
          Github: <a href="https://github.com/cyip92">cyip92</a>
          <br />
          <a href="https://www.linkedin.com/in/christopher-yip-75ab51234/">
            <img src={linkedin} className="o-img-icon" />
          </a>
          LinkedIn: <a href="https://www.linkedin.com/in/christopher-yip-75ab51234/">Christopher Yip</a>
        </div>
        
      </div>
    </>
  )
}

export default AboutPage;
