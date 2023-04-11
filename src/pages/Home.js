import React, { useEffect, useState } from "react";
import me from '../images/me.png'
import is from '../images/is.png'
import rev from '../images/rev.png'
import alien from '../images/alien.png'
import ironsocial from '../images/iron-social.JPG'
import revate from '../images/revate.JPG'
import alieninvasion from '../images/alien-invasion.JPG'
import resume from '../files/resume.pdf'
import { Link } from "react-scroll";

const Typewriter = ({ text, loop }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prevText) => {
        const nextChar = text[currentIndex];
        return nextChar ? `${prevText}${nextChar}` : prevText;
      });
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= text.length) {
          clearInterval(intervalId);
        }
        return prevIndex + 1;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [currentIndex, loop, text]);

  return <h1>{currentText}</h1>;
};


const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <Typewriter text="Welcome to my Portfolio"/>
        <h1 className="hiImJosh">Hi, I'm Josh | Software Engineer</h1>
        <a href="https://github.com/JoshuaNogues" target="_blank">
      <img
          className="github-logo"
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        />
        </a>
        <a href="https://www.linkedin.com/in/joshua-nogues/" target="_blank">
        <img
          className="linkedin-logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png"
        />
        </a>
        <a href="mailto:joshuanogues@outlook.com">
        <img
          className="email-logo"
          src="https://cdn-icons-png.flaticon.com/512/6244/6244438.png"
        />
        </a>
        <p className="hero-p">
          I'm a life-long learner based in Miami, Florida. I love creating
          beautiful interfaces, web apps, and everything in between!
        </p>
      </div>
      <div className="about-container" id="about">
        <div className="about-and-image">
          <h2>About Me</h2>
          <img className="me" src={me} alt="profile-pic"/>
        </div>  
        <div className="about-caption">  
          <ul className="skills">
            <li>Javascript</li>
            <li>React</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>CSS</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>Flexbox</li>
            <li>Bootstrap</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Wordpress</li>
            <li>Cloudinary</li>
            <li>NPM</li>
            <li>Canva</li>
            <li>Design</li>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>De-bugging</li>
            <li>Problem Solving</li>
            <li>Critical Thinking</li>
            <li>Determination</li>
          </ul>  
        <h3>I love building stuff 📱</h3>
        <p>
          I started playing with computers at a very young age. Since then I
          have been experimenting with all sorts of technologies that in some way or
          another led me to work on software engineering. Including photography, music, design, photoshop and more!
        </p>
        <a href={resume} download>
  <p className="resume">Click here to download my resume</p>
</a>

        </div> 
      </div>
      <div className="center-projects">
      <div className="featured-container">
        <h2 className="featured-projects" id="projects">Featured Projects</h2>
      <div className="projects-container">
        <div className="ironsocial">
          <div className="information">
          <div className="logo-title">
          <h3>IronSocial</h3>
          <img
          className="site-logos"
          src={is}
        />
        </div>
          <ul className="project-skills">
            <li>React</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>CSS</li>
            <li>Node.js</li>
            <li>Flexbox</li>
            <li>Cloudinary</li>
          </ul>  
          <p>
            IronSocial is an independently developed social media application modeled after LinkedIn, designed specifically for
            IronHackers to collaborate and network. The platform allows
            IronHackers to post about their current employment, share job
            opportunities, and offer tips on job hunting, interviews, and related
            topics. The app aims to foster a deeper sense of community among
            IronHackers, enabling them to connect and support each other's career
            goals.
          </p>
          <a href="https://ironsocial.netlify.app/" target="_blank">
  <button className="project-link">View project</button>
</a>

          </div>
        <div className="preview">
        <img className="screenshots" src={ironsocial} alt="screenshot"/>
        </div>
        </div>
        <div className="ironsocial">
          <div className="information">
          <div className="logo-title">
          <h3>Revate</h3>
          <img
          className="site-logos"
          src={rev}
        />
        </div>
          <ul className="project-skills">
          <li>Javascript</li>
            <li>Handlebars</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>CSS</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>Flexbox</li>
            <li>Cloudinary</li>
          </ul>  
          <p>
          Revate is a restaurant review website similar to Yelp, but exclusively
          focuses on dining establishments. Here, patrons can share their
          experiences by leaving reviews on restaurants they have visited, while
          owners can showcase their restaurants for review.
          </p>
          <a href="https://revate.fly.dev/" target="_blank">
  <button className="project-link">View project</button>
</a>
          </div>
        <div className="preview">
        <img className="screenshots" src={revate} alt="screenshot"/>
        </div>
        </div>
        <div className="ironsocial">
          <div className="information">
          <div className="logo-title">
          <h3>Alien Invasion</h3>
          <img
          className="site-logos"
          src={alien}
        />
        </div>
          <ul className="project-skills">
          <li>HTML</li>
            <li>Canvas</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>  
          <p>
          "Alien Invasion" is a space shooter game, reminiscent of the classic
          arcade game "Galaga", that I independently developed using HTML,
          Canvas, and Javascript. As a childhood fan of "Galaga", I was inspired
          to create a game with similar gameplay mechanics and thus brought
          "Alien Invasion" to life.
          </p>
          <a href="https://joshuanogues.github.io/Alien-Invasion-Game/" target="_blank">
  <button className="project-link">View project</button>
</a>
          </div>
        <div className="preview">
        <img className="screenshots" src={alieninvasion} alt="screenshot"/>
        </div>
        </div>
      </div>
      </div>
      </div>
      <div className="contact-container">
      <div className="contact" id="contact">
        <h2>Let's get in touch</h2>
        <h3>joshuanogues@outlook.com</h3>
        <a href="mailto:joshuanogues@outlook.com">
  <button>Contact</button>
</a>
      </div>
      </div>
      <div class="center-footer">
  <div class="footer-container">
    <div class="footer">
      <h3>Joshua Nogues</h3>
      <p>© 2023, Built and designed by Joshua Nogues</p>
    </div>
    <div class="logos-footer">
      <a href="https://github.com/JoshuaNogues" target="_blank">
        <img
          class="github-logo"
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        />
      </a>
      <a href="https://www.linkedin.com/in/joshua-nogues/" target="_blank">
        <img
          class="linkedin-logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png"
        />
      </a>
      <a href="mailto:joshuanogues@outlook.com">
        <img
          class="email-logo"
          src="https://cdn-icons-png.flaticon.com/512/6244/6244438.png"
        />
      </a>
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;
