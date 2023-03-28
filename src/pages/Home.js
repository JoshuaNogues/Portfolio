import React, { useEffect, useState } from "react";
import me from '../images/me.png'
import is from '../images/is.png'
import rev from '../images/rev.png'
import alien from '../images/alien.png'

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
        <img
          className="github-logo"
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        />
        <img
          className="linkedin-logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png"
        />
        <img
          className="email-logo"
          src="https://cdn-icons-png.flaticon.com/512/6244/6244438.png"
        />
        <p>
          I'm a life-long learner based in Miami, Florida. I love creating
          beautiful interfaces, web apps, and everything in between!
        </p>
      </div>
      <div className="about-container">
        <div className="about-and-image">
          <h2>About Me</h2>
          <img className="me" src={me} alt="profile-pic"/>
        </div>  
        <div>    
        <h3>I love building stuff</h3>
        <p>
          I started playing with computers at a very young age. Since then I
          have been experimenting with all sorts of technologies that in some way or
          another led me to work on engineering. Including photography, music, sound
          engineering, 2d games and more!
        </p>
        </div> 
      </div>
        <h2>Featured Projects</h2>
      <div className="projects-container">
        <div className="ironsocial">
          <h3>IronSocial</h3>
          <img
          className="site-logos"
          src={is}
        />
          <p>
            IronSocial is a social media application built with React, Express,
            and MongoDB, modeled after LinkedIn, designed specifically for
            IronHackers to collaborate and network. The platform allows
            IronHackers to post about their current employment, share job
            opportunities, and offer tips on job hunting, interviews, and related
            topics. The app aims to foster a deeper sense of community among
            IronHackers, enabling them to connect and support each other's career
            goals.
          </p>
        </div>
        <div className="revate">
        <h3>Revate</h3>
        <img
          className="site-logos"
          src={rev}
        />
        <p>
          Revate is a restaurant review website built with Express, MongoDB,
          JavaScript, and Handlebars. It is similar to Yelp, but exclusively
          focuses on dining establishments. Here, patrons can share their
          experiences by leaving reviews on restaurants they have visited, while
          owners can showcase their restaurants for review.
        </p>
        </div>
        <div className="alien-invasion">
        <h3>Alien Invasion</h3>
        <img
          className="site-logos"
          src={alien}
        />
        <p>
          "Alien Invasion" is a space shooter game, reminiscent of the classic
          arcade game "Galaga", that I independently developed using HTML,
          Canvas, and Javascript. As a childhood fan of "Galaga", I was inspired
          to create a game with similar gameplay mechanics and thus brought
          "Alien Invasion" to life.
        </p>
        </div>
      </div>
      <div className="contact">
        <h2>Contact Me</h2>
        <p>joshuanogues@outlook.com</p>
      </div>
      <div>
      <img
          className="github-logo"
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        />
        <img
          className="linkedin-logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png"
        />
        <img
          className="email-logo"
          src="https://cdn-icons-png.flaticon.com/512/6244/6244438.png"
        />
      </div>
    </div>
  );
};

export default Home;
