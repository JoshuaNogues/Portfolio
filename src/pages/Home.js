import React from "react";

const home = () => {
  return (
    <div>
      <h4>Welcome to my Portfolio</h4>
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
        I'm a life-long leaerner based in Miami, Florida. I love creating
        beautiful interfaces, web apps, and everything in between!
      </p>
    </div>
  );
};

export default home;
