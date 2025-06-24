// About.jsx

import "./About.css";

export const About = () => {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about-text">
          <h1 className="about-heading">About SliceMovie</h1>
          <p className="about-para">
            Welcome to <strong>SliceMovie, The Avengers Hub</strong> — your
            ultimate destination for everything related to the Marvel Cinematic
            Universe's mightiest heroes! Whether you're a die-hard fan of Iron
            Man, Captain America, Thor, or Black Widow, our platform delivers
            the latest movie releases, character bios, timelines, trailers, and
            exclusive behind-the-scenes content.
          </p>

          <p className="about-para">
            Dive into the stories of Earth's mightiest heroes, explore the
            interconnected universe of Marvel films, and relive iconic moments
            that shaped pop culture. We're here to keep you updated,
            entertained, and inspired.
          </p>

          <p className="about-para">
            This project was created with ❤️ for Marvel fans. As the Marvel
            universe expands, so do we.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://mrwallpaper.com/images/high/download-avengers-wallpaper-d0679xgk1dce1tl4.webp"
            alt="Avengers Poster"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
};
